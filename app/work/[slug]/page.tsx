import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allProjects, getProject, getRelatedProjects } from "@/lib/data/projects"
import { getCapabilitiesForProject } from "@/lib/data/capabilities"
import { StatusBadge } from "@/components/work/status-badge"
import { ArchitectureDiagram } from "@/components/work/architecture-diagram"
import { MetricGrid } from "@/components/work/metric-grid"
import { ProjectCard } from "@/components/work/project-card"
import { CtaBand } from "@/components/home/cta-band"
import { RevealInit } from "@/components/shared/reveal-init"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return allProjects
    .filter((p) => p.tier === "flagship")
    .map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Project not found" }

  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | Polymath Corporation`,
      description: project.tagline,
      images: project.heroImage ? [project.heroImage] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || project.tier !== "flagship") notFound()

  const capabilities = getCapabilitiesForProject(project.slug)
  const related = getRelatedProjects(
    capabilities.flatMap((c) => c.projectSlugs).filter((s) => s !== project.slug),
  )
    .filter((p) => p.tier === "flagship")
    .slice(0, 3)

  return (
    <>
      <RevealInit />
      {/* Hero */}
      <section className="hairline-b">
        <div className="container-site py-10 md:py-14">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link href="/work" className="link-arrow">
              ← All work
            </Link>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="mono-label text-brand">
                  {project.categories.map((c) => c.toUpperCase()).join(" / ")}
                </span>
              </div>
              <h1 className="display-lg mb-4">{project.title}</h1>
              <p className="prose-poly !text-ink-muted text-lg mb-6 max-w-2xl">
                {project.tagline}
              </p>
              {project.contextNote ? (
                <div className="callout max-w-2xl">
                  <p>{project.contextNote}</p>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-5">
              <div className="panel p-5 md:p-6">
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="mono-label text-ink-muted mb-1">Year</dt>
                    <dd className="text-sm font-medium">{project.year}</dd>
                  </div>
                  <div>
                    <dt className="mono-label text-ink-muted mb-1">Status</dt>
                    <dd>
                      <StatusBadge status={project.status} />
                    </dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="mono-label text-ink-muted mb-1">Role</dt>
                    <dd className="text-sm leading-relaxed">{project.role}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="mono-label text-ink-muted mb-1">Categories</dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 pt-5 hairline-t flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Open live product
                    </a>
                  ) : null}
                  <Link href="/contact" className="btn-secondary">
                    Start a project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {project.heroImage ? (
            <div className="mt-10 panel overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.heroAlt ?? project.title}
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Problem */}
      {project.problem?.length ? (
        <CaseSection index="01" title="The problem">
          <div className="prose-poly space-y-4">
            {project.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {/* Context */}
      {project.context?.length ? (
        <CaseSection index="02" title="Context">
          <div className="prose-poly space-y-4">
            {project.context.map((c) => (
              <p key={c}>{c}</p>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {/* Role */}
      {project.roleDetail?.length ? (
        <CaseSection index="03" title="My role">
          <ul className="space-y-3 max-w-3xl">
            {project.roleDetail.map((r) => (
              <li key={r} className="flex gap-3 text-ink-muted leading-relaxed">
                <span className="status-dot mt-2 shrink-0" aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      {/* Solution */}
      {project.solution?.length ? (
        <CaseSection index="04" title="The solution">
          <div className="prose-poly space-y-4">
            {project.solution.map((s) => (
              <p key={s}>{s}</p>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {/* Gallery */}
      {project.gallery?.length ? (
        <CaseSection index="05" title="Artifacts">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((img) => (
              <figure key={img.src} className="panel overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={900}
                  height={560}
                  className="w-full h-auto"
                />
                {img.caption ? (
                  <figcaption className="px-4 py-3 hairline-t text-sm text-ink-muted">
                    {img.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {/* Architecture */}
      {project.architecture ? (
        <CaseSection index="06" title="Architecture">
          <ArchitectureDiagram
            flow={project.architecture}
            caption={project.architectureCaption}
          />
        </CaseSection>
      ) : null}

      {/* Implementation */}
      {project.implementation?.length ? (
        <CaseSection index="07" title="Implementation">
          <div className="prose-poly space-y-4">
            {project.implementation.map((impl) => (
              <p key={impl}>{impl}</p>
            ))}
          </div>
        </CaseSection>
      ) : null}

      {/* Hard parts */}
      {project.hardParts?.length ? (
        <section className="section-pad panel-blue border-0 rounded-none" aria-labelledby="hard-parts">
          <div className="container-site">
            <p className="eyebrow !text-white/70 mb-4">08 / Hard parts</p>
            <h2 id="hard-parts" className="display-lg text-white mb-10">
              The hard engineering.
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {project.hardParts.map((part) => (
                <article
                  key={part.title}
                  className="border border-white/20 rounded-md p-6 bg-white/5"
                >
                  <h3 className="display-sm !text-white mb-3">{part.title}</h3>
                  <p className="text-sm leading-relaxed text-white/75">{part.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Results */}
      {project.results ? (
        <CaseSection index="09" title="Results">
          <div className="prose-poly mb-8 max-w-3xl">
            <p>{project.results.text}</p>
          </div>
          {project.results.metrics?.length ? (
            <MetricGrid metrics={project.results.metrics} />
          ) : null}
        </CaseSection>
      ) : null}

      {/* Proof + Tech */}
      {(project.proof?.length || project.technologies?.length) && (
        <CaseSection index="10" title="Proof & technology">
          <div className="grid gap-8 lg:grid-cols-2">
            {project.proof?.length ? (
              <div>
                <p className="mono-label text-ink-muted mb-4">Evidence</p>
                <ul className="space-y-3">
                  {project.proof.map((item) => (
                    <li
                      key={item.label}
                      className="panel p-4 flex items-start justify-between gap-4"
                    >
                      <div>
                        <p className="mono-label text-brand mb-1">{item.type}</p>
                        <p className="text-sm text-ink">{item.label}</p>
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-arrow shrink-0"
                        >
                          Open <span aria-hidden="true">↗</span>
                        </a>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.technologies?.length ? (
              <div>
                <p className="mono-label text-ink-muted mb-4">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </CaseSection>
      )}

      {/* Related */}
      {related.length ? (
        <CaseSection index="11" title="Related work">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </CaseSection>
      ) : null}

      <CtaBand
        title="Building something difficult?"
        body="If this kind of system is close to your problem, tell us what you are trying to ship."
      />
    </>
  )
}

function CaseSection({
  index,
  title,
  children,
}: {
  index: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="section-pad hairline-b bg-white" aria-label={title}>
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="eyebrow sticky top-24">{index}</p>
            <h2 className="display-sm mt-3">{title}</h2>
          </div>
          <div className="lg:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  )
}
