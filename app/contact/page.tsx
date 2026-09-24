"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { PageHero } from "@/components/ui/page-hero"
import { site } from "@/lib/data/site"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    timeline: "",
    honeypot: "",
  })

  const formRef = useRef<HTMLFormElement | null>(null)
  const nameInputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.honeypot) return

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in name, email and project description.")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          budget: formData.budget,
          timeline: formData.timeline,
          honeypot: formData.honeypot,
        }),
      })

      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Failed to send message")

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "", budget: "", timeline: "", honeypot: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })
    setTimeout(() => nameInputRef.current?.focus(), 300)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have a hard problem?"
        description="Tell us what you are trying to build, fix or understand. Budget and timeline are optional — clarity on the problem matters more."
        actions={
          <>
            <button type="button" className="btn-primary" onClick={scrollToForm}>
              Start a project
            </button>
            <a
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book a call
            </a>
          </>
        }
      />

      <section className="section-pad bg-white">
        <div className="container-site grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <div className="panel p-6 md:p-8">
              <p className="eyebrow mb-3">01 / Message</p>
              <h2 className="display-sm mb-6">Send a project brief.</h2>

              {isSubmitted ? (
                <div className="py-8 text-center">
                  <p className="display-sm mb-3">Message sent.</p>
                  <p className="prose-poly mx-auto mb-6">
                    Thanks for reaching out. We will reply as soon as we can.
                  </p>
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => handleInputChange("honeypot", e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {error ? (
                    <div className="callout" role="alert">
                      <p>{error}</p>
                    </div>
                  ) : null}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="field-label" htmlFor="name">
                        Name *
                      </label>
                      <input
                        id="name"
                        ref={nameInputRef}
                        type="text"
                        className="field-input"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="email">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="field-input"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="field-label" htmlFor="budget">
                        Budget (optional)
                      </label>
                      <select
                        id="budget"
                        className="field-input"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                      >
                        <option value="">Select a range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 – $5,000</option>
                        <option value="5k-15k">$5,000 – $15,000</option>
                        <option value="15k-50k">$15,000 – $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>
                    <div>
                      <label className="field-label" htmlFor="timeline">
                        Timeline (optional)
                      </label>
                      <input
                        id="timeline"
                        type="text"
                        className="field-input"
                        placeholder="e.g. next quarter, ASAP, exploratory"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="field-label" htmlFor="message">
                      Project description *
                    </label>
                    <textarea
                      id="message"
                      className="field-input"
                      rows={7}
                      placeholder="What are you trying to build, fix or understand? What does success look like?"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-5">
            <div className="panel p-6">
              <p className="mono-label text-ink-muted mb-4">Direct</p>
              <ul className="space-y-4">
                <li>
                  <p className="mono-label text-ink-muted mb-1">Email</p>
                  <a href={`mailto:${site.email}`} className="text-brand hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="mono-label text-ink-muted mb-1">Phone</p>
                  <a href="tel:+2347065533470" className="text-ink hover:text-brand">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <p className="mono-label text-ink-muted mb-1">Location</p>
                  <p className="text-ink">{site.location}</p>
                </li>
                <li>
                  <p className="mono-label text-ink-muted mb-1">Calendar</p>
                  <a
                    href={site.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:underline"
                  >
                    Book a call
                  </a>
                </li>
              </ul>
            </div>

            <div className="panel-tint p-6">
              <p className="mono-label text-ink-muted mb-3">What helps</p>
              <ul className="space-y-2 text-sm text-ink-muted leading-relaxed">
                <li>· The real problem, not the preferred tech</li>
                <li>· Who experiences it and why it matters</li>
                <li>· Constraints: data, connectivity, budget, timeline</li>
                <li>· What exists today, if anything</li>
              </ul>
            </div>

            <div className="panel p-6">
              <p className="mono-label text-ink-muted mb-4">Connect</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-4"
                >
                  LinkedIn
                </a>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2.5 !px-4"
                >
                  GitHub
                </a>
                <Link href="/profiles/emmanuel" className="btn-secondary !py-2.5 !px-4">
                  Profile
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
