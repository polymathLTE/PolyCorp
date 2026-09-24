import Link from "next/link"
import Image from "next/image"
import { site } from "@/lib/data/site"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="hairline-t bg-white">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4" aria-label="Polymath Corporation home">
              <Image
                src="/polymath_corp_header.png"
                alt="Polymath Corporation"
                width={180}
                height={48}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mono-label text-ink-muted mb-2">{site.tagline}</p>
            <p className="prose-poly text-sm max-w-sm">
              Builder-led engineering studio. AI, software and data systems built for real
              problems.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mono-label text-ink-muted mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink hover:text-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profiles/emmanuel"
                  className="text-sm text-ink hover:text-brand transition-colors"
                >
                  Emmanuel Lawal
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mono-label text-ink-muted mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink hover:text-brand transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink hover:text-brand transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink hover:text-brand transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={site.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink hover:text-brand transition-colors"
                >
                  Book a call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 hairline-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="mono-meta text-ink-muted">
            © {year} {site.name}
          </p>
          <p className="mono-meta text-ink-muted">{site.location}</p>
        </div>
      </div>
    </footer>
  )
}
