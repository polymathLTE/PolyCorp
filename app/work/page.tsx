"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Project data - in a real app, this would come from a CMS or API
const projects = [
  {
    id: "llm-finetuning",
    title: "RLHF Custom LLM Fine-tuning for Domain Expertise",
    description:
      "Fine-tuned large language models for specialized domain applications with improved accuracy and reduced hallucinations.",
    category: "AI/ML Systems",
    tags: ["Python", "PyTorch", "Transformers", "Hugging Face", "CUDA"],
    image: "/ai-neural-network.png",
    featured: true,
    year: "2024",
    status: "Completed",
    metrics: "40% improvement in domain-specific accuracy",
  },
  {
    id: "data-pipeline",
    title: "Scalable ETL Pipeline Architecture",
    description:
      " Built a robust data pipeline processing 10M+ records daily with real-time monitoring and automated error handling.",
    category: "Data Engineering",
    tags: ["Python", "Apache Airflow", "AWS", "PostgreSQL", "Docker"],
    image: "/data-pipeline-architecture.png",
    featured: true,
    year: "2024",
    status: "Completed",
    metrics: "99.9% uptime, 10M+ records/day",
  },
  {
    id: "analytics-dashboard",
    title: " Executive Analytics Dashboard",
    description:
      " Interactive business intelligence dashboard providing real-time insights across multiple data sources.",
    category: "Financial Services",
    tags: ["Power BI", "SQL", "Python", "DAX", "Azure"],
    image: "/business-analytics-dashboard.png",
    featured: true,
    year: "2024",
    status: "Completed",
    metrics: "50% reduction in reporting time",
  },
  {
    id: "ml-prediction-model",
    title: " Predictive Analytics Model",
    description:
      " Machine learning model for forecasting business metrics with 95% accuracy using ensemble methods.",
    category: "AI/ML Systems",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Jupyter"],
    image: "/machine-learning-prediction-charts.png",
    featured: false,
    year: "2023",
    status: "Completed",
    metrics: "95% prediction accuracy",
  },
  {
    id: "cloud-infrastructure",
    title: " Cloud Infrastructure Automation",
    description:
      " Automated cloud infrastructure deployment and scaling using Infrastructure as Code principles.",
    category: "Infrastructure",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes", "CI/CD"],
    image: "/cloud-infrastructure-diagram.png",
    featured: false,
    year: "2023",
    status: "Completed",
    metrics: "70% reduction in deployment time",
  },
  {
    id: "nlp-sentiment-analysis",
    title: " NLP Sentiment Analysis System",
    description:
      " Real-time sentiment analysis system processing social media data with custom BERT fine-tuning.",
    category: "AI/ML Systems",
    tags: ["Python", "BERT", "TensorFlow", "NLP", "API"],
    image: "/sentiment-analysis-visualization.png",
    featured: false,
    year: "2023",
    status: "Completed",
    metrics: "92% sentiment classification accuracy",
  },
]

const categories = ["All", "AI/ML Systems", "Financial Services", "Infrastructure", "Data Engineering", "Advisory"]

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const otherProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-background dark">
      {/* Header */}
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
              <Link href="/work" className="text-secondary font-medium">
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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl mb-12">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 text-balance leading-tight">
              Experience & Projects
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Real work across AI/ML, infrastructure, fintech, and data engineering. Every project shows measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`text-sm ${selectedCategory === category ? "bg-primary hover:bg-primary/90" : "border-border/50 hover:border-secondary/50 text-foreground hover:text-secondary"}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          {otherProjects.length > 0 && (
            <>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
                {featuredProjects.length > 0 ? "More Projects" : "All Projects"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          )}

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project, featured = false }: { project: any; featured?: boolean }) {
  return (
    <Card className={`group hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300 bg-card border-border/50 hover:border-secondary/50 ${featured ? "ring-1 ring-secondary/20" : ""}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur text-xs">
            {project.category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-secondary text-background text-xs font-bold">Featured</Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="font-heading text-lg leading-tight group-hover:text-secondary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
        </div>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs bg-secondary/10 text-secondary border-0">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs bg-secondary/10 text-secondary border-0">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          {project.metrics && (
            <div className="text-sm text-secondary font-semibold">
              📊 {project.metrics}
            </div>
          )}

          <div className="flex gap-2">
            <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
              <Link href={`/work/${project.id}`}>
                View Case Study <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm" className="border-border/50 hover:border-secondary/50">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
