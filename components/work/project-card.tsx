import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/data/projects"
import { StatusBadge } from "./status-badge"

interface ProjectCardProps {
  project: Project
  index?: number
  href?: string
}

export function ProjectCard({ project, index, href }: ProjectCardProps) {
  const to = href ?? (project.tier === "flagship" ? `/work/${project.slug}` : "/work")
  const num = index != null ? String(index + 1).padStart(2, "0") : null

  return (
    <article className="project-card h-full">
      <Link href={to} className="flex h-full flex-col focus-visible:outline-none">
        {project.heroImage ? (
          <div className="project-card-media relative">
            <Image
              src={project.heroImage}
              alt={project.heroAlt ?? project.title}
              width={960}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="project-card-media grid-faint relative flex items-end p-5 bg-canvas-tint">
            <span className="display-lg text-brand/15 select-none" aria-hidden="true">
              {num ?? "—"}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {num ? (
                <span className="mono-label text-ink-muted">{num}</span>
              ) : null}
              <h3 className="display-sm">{project.title}</h3>
            </div>
            <span className="project-card-arrow mono-label text-brand mt-1" aria-hidden="true">
              →
            </span>
          </div>

          <p className="text-sm leading-relaxed text-ink-muted line-clamp-3">
            {project.tagline}
          </p>

          <div className="mt-auto flex flex-col gap-3 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between gap-3 hairline-t pt-3">
              <StatusBadge status={project.status} />
              <span className="mono-meta text-ink-muted">{project.year}</span>
            </div>
            <span className="link-arrow">
              View case study <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
