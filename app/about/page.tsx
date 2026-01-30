import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Download,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/about" className="text-primary font-medium">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6 text-balance">
                About Polymath Corporation
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  Polymath Corporation is a leading provider of innovative AI-driven solutions across multiple industries, specializing in transforming complex business challenges into scalable, data-powered outcomes that drive measurable impact.
                </p>
                <p className="leading-relaxed mb-6">
                  With expertise in machine learning engineering, data infrastructure, and industry-specific applications, we deliver end-to-end solutions that optimize operations, enhance decision-making, and unlock new revenue streams for our clients.
                </p>
                <p className="leading-relaxed mb-6">
                  Our cross-industry AI platforms and tailored services span financial services, telecom, energy, utilities, oil & gas, and commerce & retail, ensuring that every project delivers tangible value through cutting-edge technology and deep domain knowledge.
                </p>
                <p className="leading-relaxed">
                  At Polymath Corporation, we are committed to staying at the forefront of AI research, contributing to open-source initiatives, and fostering partnerships that advance the field of data science and machine learning.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white">
                      PC
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">Polymath Corporation</h3>
                    <p className="text-muted-foreground">Innovative AI Solutions Provider</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Lekki, Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Link href="mailto:hello@polymathcorp.works" className="hover:text-primary transition-colors">
                        hello@polymathcorp.works
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <Link href="tel:+2347065533470" className="hover:text-primary transition-colors">
                        +234 706 553 3470
                      </Link>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="flex justify-center gap-4">
                    <Link
                      href="https://www.linkedin.com/company/polymath-corporation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="http://github.com/PolymathCorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>

                  <Button asChild className="w-full mt-6">
                    <Link href="https://bit.ly/polymath_brochure" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Service Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive AI-driven solutions across key industries, delivering measurable business impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Financial Services */}
            <Card className="w-80">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Financial Services (Banking & Insurance)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">What it includes:</h4>
                  <p className="text-sm text-muted-foreground">
                    Actuarial engines, underwriting pipelines, LBO/restructuring advisory tooling, compliance tech, risk models.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Demo/Pilot Metric:</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduce time-to-underwrite or time-to-decision by X% on a scoped product line.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Telecom & Connectivity */}
            <Card className="w-80">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Telecom & Connectivity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">What it includes:</h4>
                  <p className="text-sm text-muted-foreground">
                    Network-aware infrastructure, CDN/edge hosting patterns, scale/latency SLOs, billing & OSS/BSS data feeds.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Demo/Pilot Metric:</h4>
                  <p className="text-sm text-muted-foreground">
                    Improve incident MTTR or reduce API p95 latency under load.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Energy, Utilities & Oil & Gas */}
            <Card className="w-80">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                  Energy, Utilities & Oil & Gas (Industrial)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">What it includes:</h4>
                  <p className="text-sm text-muted-foreground">
                    Digital twins, telemetry ingestion, predictive maintenance, construction scheduling, procurement for capex.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Demo/Pilot Metric:</h4>
                  <p className="text-sm text-muted-foreground">
                    % reduction in unplanned downtime for a pilot asset class.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Commerce & Retail */}
            <Card className="w-80">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                  Commerce & Retail (Ecommerce, Store Ops)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">What it includes:</h4>
                  <p className="text-sm text-muted-foreground">
                    Store manager extensions, inventory/PO reconciliation, data feeds for pricing, customer recommender systems, branding & UX delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Demo/Pilot Metric:</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduce stockout rate or increase conversion by Y% in pilot stores.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Infrastructure & AI Platforms */}
            <Card className="w-80">
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-5 rounded-full"></div>
                  Data Infrastructure & AI Platforms (Cross-Industry)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">What it includes:</h4>
                  <p className="text-sm text-muted-foreground">
                    ETL/feature stores, model ops, monitoring/eval, connectors (NGX, TradingView), dashboards, cloud/hybrid deployments.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Demo/Pilot Metric:</h4>
                  <p className="text-sm text-muted-foreground">
                    Time-to-insight (data-to-dashboard) reduction; p95 prediction latency under target throughput.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages & Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Certifications & Accreditations */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Certifications & Accreditations
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">ISO 27001 Certified</p>
                    <p className="text-sm text-muted-foreground">Information Security Management, 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">SOC 2 Type II Compliant</p>
                    <p className="text-sm text-muted-foreground">Trust Services Criteria, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">AI Ethics Certification</p>
                    <p className="text-sm text-muted-foreground">Responsible AI Practices, 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chart-4 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Industry Innovation Award</p>
                    <p className="text-sm text-muted-foreground">Tech Excellence, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Presence */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Global Presence</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Nigeria (Headquarters)</span>
                  <Badge variant="secondary">Primary</Badge>
                </div>
                {/* GLOBAL PRESENCE - US and Europe */}
                {/* <div className="flex items-center justify-between">
                  <span className="font-medium">United States</span>
                  <Badge variant="outline">Operations</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">United Kingdom</span>
                  <Badge variant="outline">Partnerships</Badge>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always interested in discussing new partnerships, collaborations, or exploring how our AI solutions can transform your business. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/work">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
