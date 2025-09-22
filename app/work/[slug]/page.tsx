import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Download, Calendar, User, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Project data - in a real app, this would come from a CMS or API
const projects = {
  "llm-finetuning": {
    title: "REPLACE_ME: Custom LLM Fine-tuning for Domain Expertise",
    description:
      "REPLACE_ME: Fine-tuned large language models for specialized domain applications with improved accuracy and reduced hallucinations.",
    category: "LLM",
    tags: ["Python", "PyTorch", "Transformers", "Hugging Face", "CUDA", "LoRA", "PEFT"],
    heroImage: "/ai-neural-network-training-visualization.png",
    year: "2024",
    duration: "3 months",
    role: "Lead AI Engineer",
    client: "REPLACE_ME: Tech Startup",
    status: "Completed",
    tldr: "Achieved 40% improvement in domain-specific accuracy by fine-tuning LLaMA-2 7B model using LoRA techniques, reducing inference costs by 60% while maintaining performance.",
    problem:
      "REPLACE_ME: The client needed a language model that could understand and generate content specific to their industry domain. Off-the-shelf models were producing generic responses with frequent hallucinations and lacked the specialized knowledge required for their use case.",
    approach: [
      "Conducted comprehensive analysis of domain-specific requirements and data patterns",
      "Curated and preprocessed a high-quality dataset of 50K+ domain-specific examples",
      "Implemented LoRA (Low-Rank Adaptation) fine-tuning to efficiently adapt LLaMA-2 7B",
      "Developed custom evaluation metrics for domain-specific performance assessment",
      "Optimized inference pipeline for production deployment with cost constraints",
    ],
    solution:
      "REPLACE_ME: Built a comprehensive fine-tuning pipeline using PyTorch and Hugging Face Transformers. Implemented LoRA adapters to efficiently fine-tune the model while preserving general capabilities. Created automated evaluation framework with domain-specific benchmarks.",
    results: [
      "40% improvement in domain-specific accuracy compared to base model",
      "60% reduction in inference costs through efficient LoRA implementation",
      "95% reduction in hallucinations for domain-specific queries",
      "Successfully deployed to production serving 10K+ daily requests",
    ],
    images: ["/training-loss-curves-and-metrics.png", "/model-architecture-diagram.png", "/performance-comparison-charts.png"],
    technologies: {
      "Machine Learning": ["PyTorch", "Transformers", "PEFT", "LoRA"],
      Infrastructure: ["CUDA", "Docker", "AWS EC2", "Weights & Biases"],
      Development: ["Python", "Jupyter", "Git", "MLflow"],
    },
    links: {
      github: "#",
      demo: "#",
      paper: "#",
    },
  },
  "data-pipeline": {
    title: "REPLACE_ME: Scalable ETL Pipeline Architecture",
    description:
      "REPLACE_ME: Built a robust data pipeline processing 10M+ records daily with real-time monitoring and automated error handling.",
    category: "ETL",
    tags: ["Python", "Apache Airflow", "AWS", "PostgreSQL", "Docker", "Kafka", "Redis"],
    heroImage: "/data-pipeline-architecture.png",
    year: "2024",
    duration: "4 months",
    role: "Senior Data Engineer",
    client: "REPLACE_ME: E-commerce Platform",
    status: "Completed",
    tldr: "Designed and implemented a scalable ETL pipeline processing 10M+ records daily with 99.9% uptime, reducing data processing time by 75% and enabling real-time analytics.",
    problem:
      "REPLACE_ME: The client's existing data infrastructure couldn't handle the growing volume of transactional data. Manual processes were causing delays, data quality issues, and preventing real-time business insights.",
    approach: [
      "Analyzed existing data flows and identified bottlenecks in the current system",
      "Designed a microservices-based architecture for scalable data processing",
      "Implemented Apache Airflow for workflow orchestration and monitoring",
      "Built data quality checks and automated error handling mechanisms",
      "Created real-time monitoring dashboards for pipeline health",
    ],
    solution:
      "REPLACE_ME: Architected a cloud-native ETL pipeline using Apache Airflow for orchestration, AWS services for scalable compute and storage, and implemented real-time data quality monitoring with automated alerting.",
    results: [
      "99.9% pipeline uptime with automated error recovery",
      "75% reduction in data processing time",
      "10M+ records processed daily with linear scalability",
      "Real-time data availability enabling instant business insights",
    ],
    images: ["/pipeline-architecture-diagram.png", "/monitoring-dashboard-screenshot.png", "/data-flow-visualization.png"],
    technologies: {
      Orchestration: ["Apache Airflow", "Celery", "Redis"],
      "Cloud & Infrastructure": ["AWS", "Docker", "Kubernetes", "Terraform"],
      "Data Processing": ["Python", "Pandas", "Apache Kafka", "PostgreSQL"],
    },
    links: {
      github: "#",
      demo: "#",
      documentation: "#",
    },
  },
  "analytics-dashboard": {
    title: "REPLACE_ME: Executive Analytics Dashboard",
    description:
      "REPLACE_ME: Interactive business intelligence dashboard providing real-time insights across multiple data sources.",
    category: "Dashboard",
    tags: ["Power BI", "SQL", "Python", "DAX", "Azure", "REST API"],
    heroImage: "/business-analytics-dashboard-interface.png",
    year: "2024",
    duration: "2 months",
    role: "BI Developer & Data Analyst",
    client: "REPLACE_ME: Manufacturing Company",
    status: "Completed",
    tldr: "Created an executive dashboard consolidating data from 5+ sources, reducing reporting time by 50% and enabling data-driven decision making across all departments.",
    problem:
      "REPLACE_ME: Executives were spending hours manually compiling reports from different systems. Data was scattered across multiple platforms, making it difficult to get a unified view of business performance.",
    approach: [
      "Conducted stakeholder interviews to understand reporting requirements",
      "Mapped data sources and designed unified data model",
      "Built automated data refresh pipelines from multiple sources",
      "Created interactive visualizations with drill-down capabilities",
      "Implemented role-based access control and mobile responsiveness",
    ],
    solution:
      "REPLACE_ME: Developed a comprehensive Power BI dashboard with automated data integration from CRM, ERP, and financial systems. Implemented advanced DAX calculations for complex business metrics and created mobile-responsive views.",
    results: [
      "50% reduction in manual reporting time",
      "Real-time visibility into KPIs across all departments",
      "95% user adoption rate within first month",
      "Enabled data-driven decisions leading to 15% cost savings",
    ],
    images: ["/executive-dashboard-overview.png", "/sales-performance-charts.png", "/mobile-dashboard-view.png"],
    technologies: {
      "Business Intelligence": ["Power BI", "DAX", "Power Query"],
      "Data Sources": ["SQL Server", "REST APIs", "Excel", "SharePoint"],
      Development: ["Python", "SQL", "Azure", "Power Automate"],
    },
    links: {
      demo: "#",
      documentation: "#",
    },
  },
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

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

      {/* Back Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-6">
        <Button asChild variant="ghost" size="sm">
          <Link href="/work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4 text-balance">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
              </div>

              <div className="relative overflow-hidden rounded-lg mb-8">
                <Image
                  src={project.heroImage || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-sm">Timeline</div>
                      <div className="text-sm text-muted-foreground">
                        {project.year} • {project.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-sm">Role</div>
                      <div className="text-sm text-muted-foreground">{project.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium text-sm">Client</div>
                      <div className="text-sm text-muted-foreground">{project.client}</div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <div className="font-medium text-sm mb-2">Technologies</div>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    {project.links.github && (
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </Link>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm" className="w-full">
                      <Link href="#" target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="font-heading text-primary">TL;DR</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{project.tldr}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Problem */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">The Problem</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Approach</h2>
          <ul className="space-y-3">
            {project.approach.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                  {index + 1}
                </div>
                <p className="text-muted-foreground leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.solution}</p>

          {/* Project Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Technologies Used</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <Card key={category}>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Results & Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <Card key={index} className="bg-secondary/10 border-secondary/20">
                <CardContent className="pt-6">
                  <p className="text-foreground leading-relaxed">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}
