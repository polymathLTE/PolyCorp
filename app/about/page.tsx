import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  GraduationCap,
  Briefcase,
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
                Emmanuel Lawal
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
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl text-foreground mb-6 text-balance">
                About Emmanuel
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-6">
                  I'm a passionate Data Scientist and Machine Learning Engineer based in Lekki, Lagos, with a deep commitment to
                  transforming complex data challenges into innovative, AI-driven solutions that drive measurable
                  business impact.
                </p>
                <p className="leading-relaxed mb-6">
                  ML Engineering: With over 5 years of experience in the field, I specialize in machine learning model
                  development, statistical analysis, and building scalable data infrastructure. My expertise spans
                  across the entire data science lifecycle, from data collection and preprocessing to model deployment
                  and monitoring in production environments.
                </p>
                <p className="leading-relaxed mb-6">
                  Data Science and Analytics: I have a proven track record of delivering end-to-end data solutions that have helped
                  organizations optimize their operations, improve decision-making processes, and unlock new revenue
                  streams. My approach combines technical excellence with business acumen, ensuring that every project
                  delivers tangible value.
                </p>
                <p className="leading-relaxed">
                  When I'm not diving deep into data or fine-tuning machine learning models, I enjoy staying up-to-date
                  with the latest developments in AI research, contributing to open-source projects, and mentoring
                  aspiring data scientists in the community.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-white">
                      EL
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">Emmanuel Lawal</h3>
                    <p className="text-muted-foreground">Data Scientist & AI Engineer</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>Lekki, Lagos, Nigeria</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <Link href="mailto:lawaltemmanuel@gmail.com" className="hover:text-primary transition-colors">
                        lawaltemmanuel@gmail.com
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
                      href="https://www.linkedin.com/in/emmanuel-lawal-temitope"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="http://github.com/polymathLTE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>

                  <Button asChild className="w-full mt-6">
                    <Link href="https://bit.ly/Resume_LTE" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
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
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across different domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Python</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">SQL</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">R</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">JavaScript</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Machine Learning & AI */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Machine Learning & AI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Scikit-learn</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">PyTorch</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">TensorFlow</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">LLM Fine-tuning</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Data Engineering */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                  Data Engineering
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Apache Airflow</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">ETL Pipelines</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Apache Kafka</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Docker</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Cloud Platforms */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                  Cloud Platforms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">AWS</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Google Cloud</span>
                    <span className="text-sm text-muted-foreground">80%</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Azure</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Kubernetes</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Business Intelligence */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-5 rounded-full"></div>
                  Business Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Power BI</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Tableau</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">DAX</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Excel</span>
                    <span className="text-sm text-muted-foreground">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Databases */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">PostgreSQL</span>
                    <span className="text-sm text-muted-foreground">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">MySQL</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">MongoDB</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Redis</span>
                    <span className="text-sm text-muted-foreground">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Professional Timeline</h2>
            <p className="text-lg text-muted-foreground">
              My journey through education and professional experience in data science and AI.
            </p>
          </div>

          <div className="space-y-8">
            {/* Experience */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-foreground">
                          Data Scientist
                        </h4>
                        <p className="text-muted-foreground"> Toloka AI</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span> 2022 - Present</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Led cross-functional teams in developing machine learning solutions that improved
                      business metrics by 30%. Specialized in LLM fine-tuning, predictive analytics, and automated data
                      pipelines processing millions of records daily.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-foreground">
                          Technical Consultant
                        </h4>
                        <p className="text-muted-foreground"> Toloka AI</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>2025 </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Developed and deployed machine learning models for customer segmentation and demand
                      forecasting. Built ETL pipelines and created interactive dashboards that reduced reporting time by
                      50%.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-secondary" />
                Education
              </h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-foreground">
                          Explore AI Academy: Diploma in Data Science
                        </h4>
                        <p className="text-muted-foreground"> Diploma: ALX Africa </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>Duration: 2023 - 2024</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized in machine learning, statistical modeling, and big data analytics. Thesis
                      focused on deep learning applications in natural language processing.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-foreground">
                          Bachelor's in Information Technology
                        </h4>
                        <p className="text-muted-foreground"> Federal University of Technology, Akure (FUTA) </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span> 2021 - 2026</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Strong foundation in algorithms, data structures, and software engineering. Graduated
                      with First Class Honors.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">English</span>
                  <Badge variant="secondary">Native</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Yoruba</span>
                  <Badge variant="outline">Native</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">French</span>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
              </div>
            </div>

            {/* Honors & Certifications */}
            <div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                Honors & Certifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">AWS Certified Machine Learning - Specialty</p>
                    <p className="text-sm text-muted-foreground">Amazon Web Services, 2024</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Google Cloud Professional Data Engineer</p>
                    <p className="text-sm text-muted-foreground">Google Cloud, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chart-3 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Microsoft Certified: Azure AI Engineer Associate</p>
                    <p className="text-sm text-muted-foreground">Microsoft, 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-chart-4 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Outstanding Graduate Award</p>
                    <p className="text-sm text-muted-foreground">ALX Africa, 2024</p>
                  </div>
                </div>
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
            I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow data
            enthusiasts. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/work">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
