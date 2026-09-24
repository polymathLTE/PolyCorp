import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/page-hero"
import { CtaBand } from "@/components/home/cta-band"
import { ProjectCard } from "@/components/work/project-card"
import { getFlagshipProjects, getProject } from "@/lib/data/projects"
import { site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Emmanuel Lawal",
  description:
    "Emmanuel Lawal — AI engineer, software engineer and product builder. Systems across AI, software and data from prototype to production-oriented implementation.",
  alternates: { canonical: "/profiles/emmanuel" },
}

const experience = [
  {
    org: "Trajectory Labs",
    role: "LLM Security Red Teamer",
    period: "2026",
    notes: [
      "Designed adversarial scenarios to check robustness, safety and recovery from failed steps.",
      "Shared structured findings to improve trajectory quality and evaluation coverage.",
      "Tested LLM and agent workflows for weak points in multi-step execution, instruction following and tool use.",
    ],
  },
  {
    org: "Toloka",
    role: "Data Scientist / ML Engineer",
    period: "2024 – 2025",
    notes: [
      "Led LLM fine-tuning experiments (RL / RLHF) for rare data scenarios and defined evaluation metrics.",
      "Built a human annotation pipeline for RLHF with verification and compliance, reducing rework by 26%.",
      "Developed RAG/retrieval stack and evaluation tools; containerised inference for deployment.",
    ],
  },
  {
    org: "Dialectica",
    role: "Technical Consultant",
    period: "2025 – Present",
    notes: [
      "Advised on payments integration, payroll options and system architecture.",
      "Consulted on AI/ML strategy and data governance against business and regulatory needs.",
    ],
  },
  {
    org: "NTS Africa / Dell Technologies",
    role: "Engineer",
    period: "2025",
    notes: [
      "Deployed Dell Hyper-Converged Infrastructure and Disaster Recovery for a major Nigerian financial institution.",
      "IMAC server deployment for financial and regulatory institutions; on-prem and hybrid deployments.",
      "Deployed Cyber Recovery Services at a major financial institution.",
    ],
  },
  {
    org: "ALX Africa",
    role: "Software Engineer → Data Scientist → Mentor",
    period: "2022 – Present",
    notes: [
      "Implemented Flask APIs, containerised services with Docker/Nginx/Gunicorn for staging and production.",
      "Designed ETL pipelines and APIs for dashboard reporting under high-traffic scenarios.",
      "Built and evaluated ML/NLP models; mentored students on Python, ML practice and production readiness.",
    ],
  },
  {
    org: "Pesoka Computers Nigeria",
    role: "Software Engineer",
    period: "2019 – 2021",
    notes: [
      "Designed ETL pipelines and financial research systems.",
      "Built monitoring software and front-end dashboards for power plant operations.",
      "Built fraud detection and loan application scoring for a microfinance product.",
    ],
  },
]

export default function EmmanuelProfilePage() {
  const selectedSlugs = ["fire-show", "mathquest", "forensys", "drought-prediction"]
  const selected = selectedSlugs
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  return (
    <>
      <PageHero
        eyebrow="Profile"
        title="Emmanuel Lawal"
        description="AI Engineer · Software Engineer · Product Builder. I design and build systems across AI, software and data, from early prototypes to production-oriented implementations."
        actions={
          <>
            <Link href={site.cta.href} className="btn-primary">
              Start a project
            </Link>
            <a
              href="https://github.com/polymathLTE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-lawal-temitope"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              LinkedIn
            </a>
          </>
        }
      />

      <section className="section-pad bg-white hairline-b" aria-labelledby="bio">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">01 / Biography</p>
            <h2 id="bio" className="display-md mb-5">
              Builder first. Close to the problem.
            </h2>
            <div className="prose-poly space-y-4">
              <p>
                I work on difficult multidisciplinary systems: models that need to hold up
                outside notebooks, products that must survive unreliable networks, and tools
                that turn messy data into decisions people can defend.
              </p>
              <p>
                Polymath is the studio I run for that work. Independent builds, research
                systems and professional engagements are each labelled honestly — employment
                is not rebranded as client work, and prototypes are not presented as products.
              </p>
              <p>
                Based in Lekki, Lagos. Focused on clarity, reliability and measurable impact.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="panel p-6">
              <p className="mono-label text-ink-muted mb-4">Focus areas</p>
              <ul className="space-y-3">
                {[
                  "Machine learning & LLM evaluation",
                  "Product engineering",
                  "Data pipelines & decision systems",
                  "Connected / edge systems",
                  "Infrastructure & deployment",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm border-b border-line last:border-0 pb-3 last:pb-0"
                  >
                    <span className="status-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 hairline-t">
                <p className="mono-label text-ink-muted mb-2">Contact</p>
                <a
                  href="mailto:lawaltemmanuel@gmail.com"
                  className="text-sm text-brand hover:underline block mb-1"
                >
                  lawaltemmanuel@gmail.com
                </a>
                <a href="tel:+2347065533470" className="text-sm text-ink hover:text-brand">
                  +234 706 553 3470
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas-tint hairline-b" aria-labelledby="selected-emmanuel">
        <div className="container-site">
          <p className="eyebrow mb-4">02 / Selected work</p>
          <h2 id="selected-emmanuel" className="display-md mb-8">
            Work that shows the range.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {selected.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/work" className="link-arrow">
              All work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white hairline-b" aria-labelledby="experience">
        <div className="container-site">
          <p className="eyebrow mb-4">03 / Experience</p>
          <h2 id="experience" className="display-md mb-8">
            Professional experience.
          </h2>

          <ol className="flex flex-col gap-6">
            {experience.map((job) => (
              <li key={job.org + job.period} className="panel p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="display-sm">{job.org}</h3>
                    <p className="mono-label text-brand mt-1">{job.role}</p>
                  </div>
                  <span className="mono-meta text-ink-muted shrink-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.notes.map((note) => (
                    <li key={note} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                      <span className="text-signal shrink-0" aria-hidden="true">
                        ·
                      </span>
                      {note}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Want to work together?"
        body="Whether it is a Polymath engagement or a conversation about the work — start here."
      />
    </>
  )
}
