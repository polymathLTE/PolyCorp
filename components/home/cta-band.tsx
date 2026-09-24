import Link from "next/link"
import { site } from "@/lib/data/site"

interface CtaBandProps {
  title?: string
  body?: string
}

export function CtaBand({
  title = "Have a hard problem?",
  body = "Tell us what you are trying to build, fix or understand. We will tell you whether we are the right team — and what a first useful step looks like.",
}: CtaBandProps) {
  return (
    <section className="section-pad bg-white" aria-label="Start a project">
      <div className="container-site">
        <div className="panel-blue border-0 rounded-md p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="hero-grid opacity-40" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="eyebrow !text-white/70 mb-5">Start a project</p>
            <h2 className="display-lg text-white mb-4 text-balance">{title}</h2>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-8">{body}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={site.cta.href} className="btn-on-brand">
                {site.cta.label}
              </Link>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-brand"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
