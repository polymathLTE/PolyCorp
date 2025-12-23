// app/api/contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "edge"; // works with fetch and minimal deps

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, budget, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.CONTACT_TO_EMAIL;      // e.g. your inbox
    const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;  // must be a verified sender or approved domain

    if (!RESEND_API_KEY || !TO_EMAIL || !FROM_EMAIL) {
      console.error("Missing RESEND config");
      return NextResponse.json({ error: "Server not configured" }, { status: 500 });
    }

    const emailHtml = `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget || "Not specified")}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><small>Sent at ${new Date().toISOString()}</small></p>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `New contact: ${name}`,
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", res.status, text);
      return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
    }

    return NextResponse.json({ success: true, message: "Message sent" }, { status: 200 });
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Minimal HTML escaping
function escapeHtml(str: string) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
