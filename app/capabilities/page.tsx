import type { Metadata } from "next"
import Link from "next/link"
import { capabilities, getCapabilityProjects } from "@/lib/data/capabilities"
import { PageHero } from "@/components/ui/page-hero"
import { CtaBand } from "@/components/home/cta-band"
import { StatusBadge } from "@/components/work/status-badge"

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Product engineering, AI engineering, data & decision systems, automation and connected systems — five practice areas from problem definition to working implementation.",
  alternates: { canonical: "/capabilities" },
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What we build."
        description="Five practice areas. Each starts from a real problem and ends in a system people can use."
      />

      <div className="container-site py-12 md:py-16 flex flex-col gap-14">
        {capabilities.map((cap) => {
          const projects = getCapabilityProjects(cap)

          return (
            <section key={cap.id} id={cap.id} className="scroll-mt-24" aria-labelledby={`cap-${cap.id}`}>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="eyebrow mb-4">{cap.index}</p>
                  <h2 id={`cap-${cap.id}`} className="display-md mb-4">
                    {cap.title}
                  </h2>
                  <p className="prose-poly">{cap.summary}</p>
                </div>

                <div className="lg:col-span-8 grid gap-5 md:grid-cols-3">
                  <div className="panel p-5">
                    <p className="mono-label text-ink-muted mb-3">Problems</p>
                    <ul className="space-y-2.5">
                      {cap.problems.map((item) => (
                        <li key={item} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                          <span className="text-signal shrink-0" aria-hidden="true">
                            →
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel p-5">
                    <p className="mono-label text-ink-muted mb-3">We build</p>
                    <ul className="space-y-2.5">
                      {cap.builds.map((item) => (
                        <li key={item} className="text-sm text-ink-muted leading-relaxed flex gap-2">
                          <span className="text-brand shrink-0" aria-hidden="true">
                            ·
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel p-5">
                    <p className="mono-label text-ink-muted mb-3">Examples</p>
                    <ul className="space-y-2.5">
                      {cap.examples.map((item) => (
                        <li key={item} className="text-sm text-ink-muted leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {projects.length ? (
                <div className="mt-6 hairline-t pt-6">
                  <p className="mono-label text-ink-muted mb-4">Relevant work</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                      <Link
                        key={p.slug}
                        href={p.tier === "flagship" ? `/work/${p.slug}` : "/work"}
                        className="panel p-4 hover:border-brand transition-colors flex flex-col gap-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="font-semibold text-sm">{p.title}</span>
                          <span className="mono-label text-brand" aria-hidden="true">
                            →
                          </span>
                        </div>
                        <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">
                          {p.tagline}
                        </p>
                        <div className="mt-auto pt-2">
                          <StatusBadge status={p.status} />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          )
        })}
      </div>

      <CtaBand
        title="Need one of these built?"
        body="Describe the problem. We will map the simplest useful system and tell you what a first version looks like."
      />
    </>
  )
}
