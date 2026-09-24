import Link from "next/link"
import { heroMeta, site } from "@/lib/data/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container-site relative py-16 md:py-24 lg:py-28">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Polymath Corporation</p>

          <h1 className="display-xl text-balance mb-6">
            We turn difficult ideas into{" "}
            <span className="text-brand">working systems.</span>
          </h1>

          <p className="prose-poly !text-ink-muted text-lg md:text-xl max-w-2xl mb-8">
            {site.supporting}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Link href={site.cta.href} className="btn-primary">
              {site.cta.label}
            </Link>
            <Link href="/work" className="btn-secondary">
              View the work
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 hairline-t pt-6" aria-label="Focus areas">
            {heroMeta.map((item) => (
              <li key={item} className="mono-label text-ink-muted flex items-center gap-2">
                <span className="status-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
