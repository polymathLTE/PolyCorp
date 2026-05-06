import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { CookieConsent } from "@/components/cookie-consent"
import Link from "next/link"
import Image from "next/image"

// Note: Icon imports removed - services now use gradient line accents instead of lucide icons

const impactStats = [
  { number: "50M+", label: "Records Processed", sublabel: "Daily at scale" },
  { number: "99.9%", label: "Infrastructure Uptime", sublabel: "Production systems" },
  { number: "12+", label: "Industries Served", sublabel: "Finance to utilities" },
]

const clientLogos = [
  { name: "ALX Africa", path: "/clients/alx_africa.svg" },
  { name: "Dell Technologies", path: "/clients/dell-logo-1.svg" },
  { name: "Trajectory Labs", path: "/clients/trajectory_labs.svg" },
  { name: "Toloka", path: "/clients/toloka.svg" },
  { name: "Dialectica", path: "/clients/dialectica.svg" },
]

const services = [
  {
    title: "Production AI Systems",
    problem: "Your LLMs hallucinate in production.",
    solution: "We evaluate, fine-tune, and red-team AI systems so they perform safely at scale.",
    metric: "40% accuracy improvement, 26% less rework",
    highlight: "secondary",
  },
  {
    title: "Mission-Critical Infrastructure",
    problem: "Downtime costs millions.",
    solution: "We design hybrid/on-prem infrastructure, disaster recovery, and cyber-recovery that guarantees resilience.",
    metric: "99.9% uptime guarantee, DR tested",
    highlight: "secondary",
  },
  {
    title: "Data Resilience & Pipelines",
    problem: "Your pipeline breaks on Friday at 6 PM.",
    solution: "We engineer ETL systems handling 10M+ daily records with 99.9% uptime and automated recovery.",
    metric: "10M+ records/day, real-time monitoring",
    highlight: "secondary",
  },
  {
    title: "Strategic Advisory",
    problem: "New tech, old systems, unclear path.",
    solution: "We map your modernization roadmap: compliance, scalability, vendor strategy.",
    metric: "Enterprise-grade recommendations",
    highlight: "secondary",
  },
]

const featuredProjects = [
  {
    id: "rlhf-pipeline",
    title: "RLHF Fine-tuning Pipeline",
    industry: "AI/ML Systems",
    company: "Toloka",
    year: "2024-2025",
    problem: "Annotation pipelines had high error rates and rework cycles",
    solution: "Built production RLHF pipeline with verification + compliance layers",
    metrics: "26% reduction in rework, improved label quality",
    tags: ["RLHF", "Python", "PyTorch", "QA Verification"],
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection & Credit Scoring",
    industry: "Financial Services",
    company: "Pesoka Computers",
    year: "2021",
    problem: "Microfinance loans had high default rates",
    solution: "Built fraud detection + credit scoring system for loan applications",
    metrics: "90% improvement in repayment rates",
    tags: ["Fraud Detection", "Credit Scoring", "Python", "Production"],
  },
  {
    id: "infra-deployment",
    title: "Disaster Recovery Infrastructure",
    industry: "Infrastructure & Resilience",
    company: "Dell / NTS Africa",
    year: "2025",
    problem: "Major financial institution needed mission-critical backup systems",
    solution: "Deployed Dell Hyper-Converged Infrastructure + Cyber Recovery Services",
    metrics: "99.9% uptime, zero downtime deployment",
    tags: ["Dell", "DR", "Cyber Recovery", "On-Prem"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background dark">
      {/* Cookie Consent */}
      <CookieConsent />

      {/* Sticky Header with Persistent CTA */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/polymath_corp_header.png"
                  alt="Polymath Corporation"
                  height={40}
                  width={200}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/work" className="text-muted-foreground hover:text-secondary transition-colors font-medium">
                Work
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-secondary transition-colors font-medium">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-secondary transition-colors font-medium">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button asChild size="sm" variant="ghost" className="hidden md:flex text-muted-foreground hover:text-secondary">
                <Link href="https://bit.ly/polymath_brochure" target="_blank" rel="noopener noreferrer">
                  Brochure
                </Link>
              </Button>
              <Button asChild size="sm" className="bg-secondary text-background hover:bg-secondary/90 font-bold">
                <Link href="/contact">Talk to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Impact Stats */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        {/* Geometric background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="max-w-4xl mb-16">
            <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-6 text-balance leading-tight">
              We build systems that don't fail
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl leading-relaxed">
              Resilient AI, infrastructure, and data pipelines for institutions operating 24/7/365. When failure isn't an option, we're your team.
            </p>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-border/50">
            {impactStats.map((stat, idx) => (
              <div key={idx} className="group glass-fluid p-8 rounded-2xl transition-all hover:bg-background/50 hover:backdrop-blur-2xl">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
              <Link href="/work">
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 font-bold">
              <Link href="https://bit.ly/polymath_brochure" target="_blank" rel="noopener noreferrer">
                Get Brochure
              </Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link
              href="https://www.linkedin.com/company/polymath-corporation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/PolymathCorp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:hello@polymathcorp.works"
              className="text-muted-foreground hover:text-secondary transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Authority Section with Orb Background */}
      <section className="orb-section py-16 border-y border-border/50">
        <div className="orb orb-main"></div>
        <div className="orb orb-accent"></div>
        <div className="orb-content container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">Trusted By</p>
            <h2 className="text-2xl font-heading font-bold text-foreground">Companies building at scale</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clientLogos.map((client) => (
              <div key={client.name} className="h-12 relative opacity-100 hover:opacity-110 transition-all hover:scale-110">
                <Image
                  src={client.path}
                  alt={client.name}
                  height={48}
                  width={120}
                  className="h-12 w-auto object-contain filter brightness-125 contrast-150"
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">
              What we solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every problem. One approach: outcome-focused solutions that scale.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {services.map((service) => {
              return (
                <div key={service.title} className="glass-fluid p-8 rounded-2xl hover:bg-background/50 hover:backdrop-blur-2xl transition-all group">
                  <div className="w-1 h-8 bg-gradient-to-b from-orange-600 to-orange-400 rounded-full mb-4"></div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:via-orange-500 group-hover:to-orange-400 group-hover:bg-clip-text transition-all">
                    {service.title}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-orange-500 mb-1">The Problem:</p>
                      <p className="text-muted-foreground text-sm">{service.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-orange-500 mb-1">What We Do:</p>
                      <p className="text-foreground text-sm leading-relaxed">{service.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent font-semibold">{service.metric}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* Featured Projects/Experience */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-4">Featured Work</h2>
            <p className="text-lg text-muted-foreground">Selected projects showing real business impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="bg-card border-border/50 overflow-hidden hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="outline" className="text-secondary border-secondary/30 text-xs">
                        {project.industry}
                      </Badge>
                      <div className="mt-2">
                        <p className="text-xs text-muted-foreground">{project.company}</p>
                        <p className="text-xs text-muted-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-secondary transition-colors leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-secondary mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary mb-1">Solution</p>
                    <p className="text-sm text-foreground">{project.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-secondary">📊 {project.metrics}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-secondary/10 text-secondary border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild size="sm" className="w-full mt-4 bg-primary hover:bg-primary/90">
                    <Link href={`/work/${project.id}`}>
                      View Case Study <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Link href="/work">
                View All Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Full-Width CTA Banner with Orange to Pale Yellow Gradient */}
      <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
            Ready to build systems that work?
          </h2>
          <p className="text-lg text-slate-800 mb-8 max-w-2xl mx-auto">
            Tell us about your infrastructure, AI, or data challenge. We'll map a solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-slate-900 text-orange-400 hover:bg-slate-800 font-bold">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-900/10 font-bold">
              <Link href="mailto:hello@polymathcorp.works">hello@polymathcorp.works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="block mb-4">
                <Image
                  src="/polymath_corp_header.png"
                  alt="Polymath Corporation"
                  height={32}
                  width={160}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-sm text-muted-foreground">Building resilient systems for companies that can't afford failure.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/work" className="hover:text-secondary transition-colors">Work</Link></li>
                <li><Link href="/about" className="hover:text-secondary transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://bit.ly/polymath_brochure" target="_blank" className="hover:text-secondary transition-colors">Brochure</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="https://www.linkedin.com/company/polymath-corporation/" target="_blank" className="hover:text-secondary transition-colors">LinkedIn</Link></li>
                <li><Link href="https://github.com/PolymathCorp" target="_blank" className="hover:text-secondary transition-colors">GitHub</Link></li>
                <li><Link href="mailto:hello@polymathcorp.works" className="hover:text-secondary transition-colors">Email</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Polymath Corporation. Building the future, one system at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
