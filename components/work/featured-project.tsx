import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/data/projects"
import { StatusBadge } from "./status-badge"

interface FeaturedProjectProps {
  project: Project
  index: number
}

export function FeaturedProject({ project, index }: FeaturedProjectProps) {
  const num = String(index + 1).padStart(2, "0")
  const reverse = index % 2 === 1

  return (
    <article className="reveal">
      <div
        className={`grid items-stretch gap-0 border border-line rounded-md overflow-hidden ${
          reverse ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-[1fr_1.1fr]"
        }`}
      >
        <Link
          href={`/work/${project.slug}`}
          className={`group relative min-h-[260px] md:min-h-[340px] bg-canvas-tint overflow-hidden ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          {project.heroImage ? (
            <Image
              src={project.heroImage}
              alt={project.heroAlt ?? project.title}
              width={1200}
              height={750}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 grid-faint flex items-center justify-center">
              <span className="display-xl text-brand/10" aria-hidden="true">
                {num}
              </span>
            </div>
          )}
          <div className="absolute left-4 top-4 mono-label bg-white/95 border border-line px-2.5 py-1.5 rounded-sm">
            {num}
          </div>
        </Link>

        <div
          className={`flex flex-col justify-between gap-6 p-6 md:p-10 bg-white ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="mono-label text-brand">{num} / Featured</span>
              <span className="mono-meta text-ink-muted">{project.contextNote ?? project.status}</span>
            </div>

            <div>
              <h3 className="display-md mb-3">
                <Link href={`/work/${project.slug}`} className="hover:text-brand transition-colors">
                  {project.title}
                </Link>
              </h3>
              <p className="text-lg leading-relaxed text-ink-muted text-balance">
                {project.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 hairline-t pt-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <StatusBadge status={project.status} />
              <span className="mono-meta text-ink-muted">{project.year}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={`/work/${project.slug}`} className="link-arrow">
                View case study <span aria-hidden="true">→</span>
              </Link>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  Open live product <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
