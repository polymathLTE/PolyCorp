"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Linkedin, Github, Download, Calendar, Send, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
    honeypot: "", // Spam protection
  })

  const formRef = useRef<HTMLFormElement | null>(null)
  const nameInputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.honeypot) return

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields.")
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
          honeypot: formData.honeypot,
        }),
      })

      const result = await response.json()

      if (!response.ok) throw new Error(result.error || "Failed to send message")

      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "", budget: "", honeypot: "" })
      // optionally focus a success button or similar
    } catch (err) {
      console.error("Error submitting form:", err)
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
    // focus first input after a small timeout so scroll finishes
    setTimeout(() => nameInputRef.current?.focus(), 300)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="font-heading font-bold text-xl text-foreground">
                Polymath Corporation
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-primary font-medium">
                Contact
              </Link>
              <Button asChild size="sm">
                <Link href="https://bit.ly/polymath_brochure" target="_blank" rel="noopener noreferrer">
                  Brochure
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4 text-balance">Let's Connect</h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, or innovative data science
                projects. Pick a quick option below — schedule a meeting or send a message.
              </p>
            </div>
            {/* Small hero CTA group (visible on larger screens) */}
            <div className="hidden md:flex md:flex-col gap-3">
              <Button asChild size="lg" className="shadow-lg">
                <Link href="https://calendar.app.google/16RABqCPoXrhR3D1A" target="_blank" rel="noopener noreferrer" aria-label="Book a meeting">
                  <Calendar className="mr-2 h-4 w-4 inline" /> Book a Meeting
                </Link>
              </Button>
              <Button onClick={scrollToForm} variant="outline" size="lg" className="text-foreground">
                <Send className="mr-2 h-4 w-4" /> Send a Message
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content: prioritize CTA area on the right column */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left: Form (larger) */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Send us a message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                      {/* Honeypot */}
                      <input type="text" name="honeypot" value={formData.honeypot} onChange={(e) => handleInputChange("honeypot", e.target.value)} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                      {error && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input id="name" ref={nameInputRef} type="text" placeholder="Organization or personal name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Project Budget (Optional)</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                            <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                            <SelectItem value="50k-plus">$50,000+</SelectItem>
                            <SelectItem value="discuss">Let's discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" placeholder="Tell me about your project, goals, or how I can help you..." rows={6} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} required />
                      </div>

                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground">By submitting this form, you agree to receive email responses from me regarding your inquiry.</p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Right: CTA-first column */}
            <aside className="lg:col-span-1 order-1 lg:order-2 space-y-6">
              {/* Primary CTA card (Book + Send) */}
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle className="font-heading">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full">
                    <Link href="https://calendar.app.google/16RABqCPoXrhR3D1A" target="_blank" rel="noopener noreferrer" aria-label="Book a meeting">
                      <Calendar className="mr-2 h-4 w-4 inline" /> Book a Meeting
                    </Link>
                  </Button>

                  <Button onClick={scrollToForm} variant="outline" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send a Message
                  </Button>

                  <p className="text-sm text-muted-foreground">Prefer a live chat? Book a 30-min consult or drop a message below.</p>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <Link href="mailto:hello@polymathcorp.works" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@polymathcorp.works</Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <Link href="tel:+2347065533470" className="text-sm text-muted-foreground hover:text-primary transition-colors">+234 706 553 3470</Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">Lekki, Lagos, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social / Brochure */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Connect Online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="https://www.linkedin.com/company/polymath-corporation/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Professional network</p>
                    </div>
                  </Link>

                  <Link href="https://github.com/PolymathCorp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">Code repositories</p>
                    </div>
                  </Link>

                  <Button asChild className="w-full">
                    <Link href="https://bit.ly/polymath_brochure" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> Download Brochure
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      {/* Floating mobile CTA (makes CTAs easy on small screens) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 md:hidden z-50">
        <div className="flex gap-3 bg-background/95 backdrop-blur rounded-full p-2 shadow-md">
          <Button size="sm" onClick={scrollToForm} aria-label="Send a message">
            <Send className="h-4 w-4" />
          </Button>
          <Button size="sm" asChild>
            <Link href="https://calendar.app.google/16RABqCPoXrhR3D1A" target="_blank" rel="noopener noreferrer" aria-label="Book a meeting">
              <Calendar className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
