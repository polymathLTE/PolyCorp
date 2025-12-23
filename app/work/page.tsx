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
    category: "LLM",
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
    category: "ETL",
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
    category: "Dashboard",
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
    category: "ML",
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
    category: "Cloud",
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
    category: "ML",
    tags: ["Python", "BERT", "TensorFlow", "NLP", "API"],
    image: "/sentiment-analysis-visualization.png",
    featured: false,
    year: "2023",
    status: "Completed",
    metrics: "92% sentiment classification accuracy",
  },
]

const categories = ["All", "ML", "LLM", "ETL", "Dashboard", "Cloud"]

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
              <Link href="/work" className="text-primary font-medium">
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6 text-balance">My Work</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              A collection of projects showcasing my expertise in machine learning, data engineering, and AI systems.
              Each project demonstrates practical solutions to real-world challenges.
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
                  className="text-sm"
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
                className="pl-10"
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
    <Card className={`group hover:shadow-lg transition-all duration-300 ${featured ? "ring-1 ring-primary/20" : ""}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            {project.category}
          </Badge>
        </div>
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1">
            <CardTitle className="font-heading text-lg leading-tight group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.status}</span>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
        </div>
        <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 4}
              </Badge>
            )}
          </div>

          {project.metrics && (
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> {project.metrics}
            </div>
          )}

          <div className="flex gap-2">
            <Button asChild size="sm" className="flex-1">
              <Link href={`/work/${project.id}`}>
                View Case Study <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
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
