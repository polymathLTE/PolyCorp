'use client'

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Download, Github, ExternalLink, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function EmmanuelProfile() {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="font-heading font-bold text-xl text-foreground">
                            Emmanuel Lawal
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/work" className="text-muted-foreground hover:text-foreground text-sm">
                                Work
                            </Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground text-sm">
                                About
                            </Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-foreground text-sm">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
                <section className="mb-8">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
                        Emmanuel Temitope Lawal
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                        I build dependable software and thoughtful AI that help teams make better decisions and deliver real outcomes.
                        I enjoy turning messy problems into simple, reliable systems—whether that's a model that stays useful in production,
                        a data pipeline that doesn't break at peak traffic, or a product that people actually adopt.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <Button asChild size="sm">
                            <a href="https://bit.ly/Resume_LTE" target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                View Resume
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <a href="https://polymathcorp.works" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Portfolio
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <a href="https://github.com/polymathLTE" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground">
                        I'm based in Lekki, Lagos. I mentor, consult, and build—focused on clarity, reliability, and measurable impact.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-foreground mb-4">A short story</h2>
                    <p className="text-muted-foreground mb-4">
                        Early on I learned that good solutions aren't the cleverest ones—they're the ones people can trust. Over the years
                        I’ve helped teams move from prototypes to dependable services: cleaning messy data, making models reliable, and
                        shipping small, focused features that actually change behaviour. That work has meant better decisions for clients,
                        faster outcomes for teams, and tools that keep working when it matters most.
                    </p>
                    <p className="text-muted-foreground">
                        I care about clear processes, strong data hygiene, and practical engineering. Outside of code I enjoy mentoring
                        learners and sharing what I learn so others can build faster and safer.
                    </p>
                </section>

                <Separator className="my-8" />

                <section className="mb-8">
                    <h2 className="text-lg font-semibold text-foreground mb-4">Contact</h2>
                    <div className="grid gap-3">
                        <a href="mailto:lawaltemmanuel@gmail.com" className="flex items-center gap-3 text-foreground hover:underline">
                            <Mail className="w-5 h-5 text-muted-foreground" />
                            lawaltemmanuel@gmail.com
                        </a>
                        <a href="tel:+2347065533470" className="flex items-center gap-3 text-foreground hover:underline">
                            <Phone className="w-5 h-5 text-muted-foreground" />
                            +234 706 553 3470
                        </a>
                        <div className="flex items-center gap-3 text-foreground">
                            <MapPin className="w-5 h-5 text-muted-foreground" />
                            Lekki, Lagos
                        </div>
                    </div>
                </section>

                <Separator className="my-8" />

                <section className="text-center py-8">
                    <p className="text-muted-foreground mb-4">If you'd like to work together or learn more, let's start a conversation.</p>
                    <Button asChild size="lg">
                        <Link href="/contact">Start a Conversation</Link>
                    </Button>
                </section>
            </main>
        </div>
    )
}
