"use client"

import { useMemo, useState } from "react"
import { allProjects, type CapabilityCategory, type Project } from "@/lib/data/projects"
import { FilterBar } from "@/components/work/filter-bar"
import { ProjectCard } from "@/components/work/project-card"
import { PageHero } from "@/components/ui/page-hero"
import { useReveal } from "@/hooks/use-reveal"

export default function WorkPage() {
  const [active, setActive] = useState<string>("all")
  useReveal()

  const { flagship, supporting } = useMemo(() => {
    const matches = (p: Project) =>
      active === "all" || p.categories.includes(active as CapabilityCategory)

    const filtered = allProjects.filter(matches)
    return {
      flagship: filtered
        .filter((p) => p.tier === "flagship")
        .sort((a, b) => a.order - b.order),
      supporting: filtered
        .filter((p) => p.tier !== "flagship")
        .sort((a, b) => a.order - b.order),
    }
  }, [active])

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Selected work"
        description="Systems, products and experiments designed and built across AI, software, data and connected systems."
      />

      <section className="container-site py-10 md:py-14">
        <div className="flex flex-col gap-6 mb-10">
          <FilterBar active={active} onChange={setActive} />
          <p className="mono-meta text-ink-muted">
            {flagship.length + supporting.length} projects shown
          </p>
        </div>

        {flagship.length > 0 ? (
          <div className="mb-14">
            <p className="mono-label text-ink-muted mb-5">01 / Flagship</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {flagship.map((project, i) => (
                <div key={project.slug} className="reveal" style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {supporting.length > 0 ? (
          <div>
            <p className="mono-label text-ink-muted mb-5">02 / Supporting</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {supporting.map((project, i) => (
                <div key={project.slug} className="reveal" style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {flagship.length + supporting.length === 0 ? (
          <div className="panel p-10 text-center">
            <p className="display-sm mb-3">No projects in this category.</p>
            <p className="prose-poly mx-auto mb-6">Try another filter.</p>
            <button type="button" className="btn-secondary" onClick={() => setActive("all")}>
              Clear filter
            </button>
          </div>
        ) : null}
      </section>
    </>
  )
}
