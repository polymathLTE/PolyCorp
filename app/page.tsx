import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { CookieConsent } from "@/components/cookie-consent"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="font-heading font-bold text-xl text-foreground">
                Emmanuel Lawal
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/work" className="text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Button asChild size="sm">
                <Link href="https://bit.ly/Resume_LTE" target="_blank" rel="noopener noreferrer">
                  Resume
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance">
              Data Scientist & AI Engineer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl leading-relaxed">
              I build intelligent systems that transform data into actionable insights. Specializing in machine
              learning, LLM fine-tuning, and scalable data pipelines that drive business impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="w-fit">
                <Link href="/work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-fit bg-transparent">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/emmanuel-lawal-temitope"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="http://github.com/polymathLTE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:lawaltemmanuel@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              A selection of my recent work in machine learning, data engineering, and AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 - Placeholder */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/ai-neural-network.png"
                  alt="LLM Fine-tuning Project - Neural network visualization"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">LLM</Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="font-heading">LLM Fine-tuning Project</CardTitle>
                <CardDescription>
                  Custom fine-tuning of large language models for domain-specific applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    PyTorch
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Transformers
                  </Badge>
                </div>
                <Button asChild variant="ghost" size="sm" className="w-full">
                  <Link href="/work/llm-finetuning">
                    View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 2 - Placeholder */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/data-pipeline-architecture.png"
                  alt="Data Pipeline System - Architecture diagram"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">ETL</Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="font-heading">Data Pipeline System</CardTitle>
                <CardDescription>
                  Scalable ETL pipeline processing millions of records with real-time monitoring
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Apache Airflow
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    AWS
                  </Badge>
                </div>
                <Button asChild variant="ghost" size="sm" className="w-full">
                  <Link href="/work/data-pipeline">
                    View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project 3 - Placeholder */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src="/business-analytics-dashboard.png"
                  alt="Analytics Dashboard - Business intelligence interface"
                  width={400}
                  height={240}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Dashboard</Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="font-heading">Analytics Dashboard</CardTitle>
                <CardDescription>
                  Interactive business intelligence dashboard with real-time data visualization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Power BI
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    SQL
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Python
                  </Badge>
                </div>
                <Button asChild variant="ghost" size="sm" className="w-full">
                  <Link href="/work/analytics-dashboard">
                    View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/work">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-6">About Emmanuel</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Lekki, Lagos, I'm a passionate Data Scientist and AI Engineer with expertise in machine
                learning, statistical analysis, and building scalable data solutions. I transform complex data
                challenges into innovative AI-driven solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My experience spans across Python, SQL, Power BI, and cloud platforms like AWS and GCP, with a focus on
                delivering measurable business impact through data-driven insights.
              </p>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:pl-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Core Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Machine Learning & AI</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">PyTorch</Badge>
                      <Badge variant="outline">Scikit-learn</Badge>
                      <Badge variant="outline">LLM Fine-tuning</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Data Engineering</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">SQL</Badge>
                      <Badge variant="outline">Apache Airflow</Badge>
                      <Badge variant="outline">ETL Pipelines</Badge>
                      <Badge variant="outline">Data Warehousing</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Cloud & DevOps</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">GCP</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">CI/CD</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Emmanuel Lawal</h3>
              <p className="text-muted-foreground mb-4">
                Data Scientist & AI Engineer based in Lekki, Lagos. Building intelligent systems that drive business
                impact.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/emmanuel-lawal-temitope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="http://github.com/polymathLTE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:lawaltemmanuel@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/work" className="text-muted-foreground hover:text-primary transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://bit.ly/Resume_LTE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Lekki, Lagos</li>
                <li>
                  <Link href="mailto:lawaltemmanuel@gmail.com" className="hover:text-primary transition-colors">
                    lawaltemmanuel@gmail.com
                  </Link>
                </li>
                <li>
                  <Link href="tel:+2347065533470" className="hover:text-primary transition-colors">
                    +234 706 553 3470
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Emmanuel Lawal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  )
}
