import Link from "next/link"
import { capabilities } from "@/lib/data/capabilities"
import { SectionHeading } from "@/components/ui/section-heading"

export function CapabilitiesBlock() {
  return (
    <section className="section-pad panel-blue border-0 rounded-none" aria-labelledby="what-we-build">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Capabilities"
            title={<span id="what-we-build">What we build.</span>}
            description="Five practice areas. Real problems, working implementations — not service catalogue filler."
            tone="on-brand"
          />
          <Link
            href="/capabilities"
            className="link-arrow !text-white shrink-0 mb-2 hover:!text-signal"
          >
            All capabilities <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-md overflow-hidden">
          {capabilities.map((cap) => (
            <article key={cap.id} className="bg-brand p-6 md:p-7 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="mono-label text-signal">{cap.index}</span>
                <span className="mono-meta text-white/45">{cap.projectSlugs.length} projects</span>
              </div>
              <h3 className="display-sm !text-white">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-white/75">{cap.summary}</p>
              <ul className="mt-auto space-y-1.5 pt-2">
                {cap.builds.slice(0, 3).map((item) => (
                  <li key={item} className="text-sm text-white/65 flex gap-2">
                    <span className="text-signal shrink-0" aria-hidden="true">
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
