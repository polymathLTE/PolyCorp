'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    ExternalLink,
    Download,
    Code2,
    Brain,
    Database,
    Zap,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
    const skills = [
        "Machine Learning",
        "LLM Fine-tuning",
        "Python",
        "Data Engineering",
        "System Design",
        "Product Deployment",
        "Vector Search",
        "Model Evaluation",
    ]

    const highlights = [
        {
            icon: Brain,
            title: "AI/ML Focus",
            description: "LLM evaluation, fine-tuning, and production deployment",
        },
        {
            icon: Database,
            title: "Data Quality",
            description: "ETL pipelines, data governance, and reliability",
        },
        {
            icon: Code2,
            title: "Engineering",
            description: "Full-stack development from backend APIs to infrastructure",
        },
        {
            icon: Zap,
            title: "Impact Driven",
            description: "Deployed solutions improving outcomes by 26-90%",
        },
    ]

    const contact = [
        { icon: Mail, label: "Email", value: "lawaltemmanuel@gmail.com", href: "mailto:lawaltemmanuel@gmail.com" },
        { icon: Phone, label: "Phone", value: "+234 706 553 3470", href: "tel:+2347065533470" },
        { icon: MapPin, label: "Location", value: "Lekki, Lagos" },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="font-heading font-bold text-xl text-foreground">
                            Emmanuel Lawal
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                Work
                            </Link>
                            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                About
                            </Link>
                            <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-12 md:py-16">
                {/* Hero Section */}
                <section className="mb-12">
                    <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-3">
                        Emmanuel Temitope Lawal
                    </h1>
                    <p className="text-xl text-muted-foreground mb-6">
                        Software and ML Engineer — Building reliable AI systems, data pipelines, and production infrastructure
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        <Button asChild variant="default" size="sm">
                            <a href="https://bit.ly/Resume_LTE" target="_blank" rel="noopener noreferrer">
                                <Download className="w-4 h-4 mr-2" />
                                Resume
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <a href="https://github.com/polymathLTE" target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <a href="https://www.linkedin.com/in/emmanuel-lawal-temitope" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-4 h-4 mr-2" />
                                LinkedIn
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                            <a href="https://polymathcorp.works" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Portfolio
                            </a>
                        </Button>
                    </div>
                </section>

                <Separator className="mb-12" />

                {/* Contact Info */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold text-foreground mb-6">Get in Touch</h2>
                    <div className="grid gap-4">
                        {contact.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.label} className="flex items-center gap-4">
                                    <Icon className="w-5 h-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="text-foreground hover:underline font-medium">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-foreground font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                <Separator className="mb-12" />

                {/* Expertise Highlights */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold text-foreground mb-6">Expertise</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {highlights.map((highlight, idx) => {
                            const Icon = highlight.icon
                            return (
                                <Card key={idx} className="border-border">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-5 h-5 text-primary" />
                                            <CardTitle className="text-base">{highlight.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{highlight.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </section>

                {/* Core Skills */}
                <section className="mb-12">
                    <h2 className="text-lg font-semibold text-foreground mb-6">Core Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                <Separator className="mb-12" />

                {/* CTA */}
                <section className="text-center py-8">
                    <p className="text-muted-foreground mb-6">Interested in working together?</p>
                    <Button asChild size="lg">
                        <Link href="/contact">Start a Conversation</Link>
                    </Button>
                </section>
            </main>
        </div>
    )
}
