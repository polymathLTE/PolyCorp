import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/ui/page-hero"
import { CtaBand } from "@/components/home/cta-band"
import { site, values, processSteps, philosophy, experienceLogos } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "Polymath is a builder-led engineering practice focused on turning difficult problems into working software, AI and data systems.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Polymath"
        description="A builder-led engineering practice focused on turning difficult problems into working software, AI and data systems."
        actions={
          <>
            <Link href="/profiles/emmanuel" className="btn-secondary">
              Emmanuel&apos;s profile
            </Link>
            <Link href="/work" className="btn-secondary">
              View the work
            </Link>
          </>
        }
      />

      <section className="section-pad bg-white hairline-b" aria-labelledby="philosophy-body">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">01 / Approach</p>
            <h2 id="philosophy-body" className="display-md mb-5">
              Technology is rarely the hardest part.
            </h2>
            <div className="prose-poly space-y-4">
              <p>
                The harder problems are usually defining the right problem, choosing what to
                build, dealing with imperfect data, designing around constraints, getting a
                prototype into the hands of users, and measuring whether it actually works.
              </p>
              <p>
                Polymath works across software, AI and data because real problems rarely fit into
                one discipline. A fire-risk system needs hardware, firmware, models, backend and
                an app. A tax-anomaly tool needs finance signals, evaluation methodology and an
                analyst interface. We stay close to the whole path.
              </p>
              <p>
                We are small on purpose: the people designing the system are the people building
                it. That keeps decisions fast and accountability clear.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="panel-tint p-6 md:p-8">
              <p className="mono-label text-ink-muted mb-4">Positioning</p>
              <p className="display-sm mb-4">{site.positioning}</p>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">{site.supporting}</p>
              <div className="flex flex-wrap gap-2">
                {philosophy.map((p) => (
                  <span key={p.word} className="tag">
                    {p.word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas-tint hairline-b" aria-labelledby="values">
        <div className="container-site">
          <p className="eyebrow mb-4">02 / Values</p>
          <h2 id="values" className="display-md mb-10 max-w-2xl">
            How we decide what to build.
          </h2>

          <div className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3 border border-line rounded-md overflow-hidden">
            {values.map((value, i) => (
              <article key={value.title} className="bg-white p-6 flex flex-col gap-3">
                <span className="stat-number text-signal text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm">{value.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white hairline-b" aria-labelledby="process-about">
        <div className="container-site">
          <p className="eyebrow mb-4">03 / Process</p>
          <h2 id="process-about" className="display-md mb-10">
            From problem to system.
          </h2>
          <ol className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <li key={step.num} className="panel p-5">
                <span className="stat-number text-signal block mb-2">{step.num}</span>
                <p className="font-semibold text-sm mb-1">{step.title}</p>
                <p className="text-xs text-ink-muted leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad bg-white" aria-labelledby="experience-about">
        <div className="container-site">
          <p className="eyebrow mb-4">04 / Selected experience</p>
          <h2 id="experience-about" className="display-md mb-6 max-w-2xl">
            Teams and organisations we have worked with or alongside.
          </h2>
          <p className="prose-poly mb-8">
            Professional engagements and collaborations across AI, data, infrastructure and
            product engineering — not a client list.
          </p>
          <ul className="flex flex-wrap gap-x-10 gap-y-6">
            {experienceLogos.map((logo) => (
              <li key={logo.name} className="mono-label text-ink-muted">
                {logo.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
