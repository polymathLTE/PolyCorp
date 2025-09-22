import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, budget, honeypot } = body

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected" }, { status: 400 })
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // In a real implementation, you would integrate with an email service
    // For now, we'll log the form submission and return success
    console.log("Contact form submission:", {
      name,
      email,
      message,
      budget,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically integrate with:
    // - Nodemailer with SMTP
    // - SendGrid API
    // - Resend API
    // - AWS SES
    // - Or any other email service

    // Example with a hypothetical email service:
    /*
    await sendEmail({
      to: 'lawaltemmanuel@gmail.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `
    })
    */

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
