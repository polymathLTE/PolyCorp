"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { site } from "@/lib/data/site"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-md border-b border-line">
      <div className="container-wide h-16 md:h-[4.25rem] flex items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Polymath Corporation home"
        >
          <Image
            src="/polymath_corp_header.png"
            alt="Polymath Corporation"
            width={160}
            height={42}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "is-active" : ""}`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary !py-2.5 !px-4"
          >
            Book a call
          </a>
          <Link href={site.cta.href} className="btn-primary !py-2.5 !px-4">
            {site.cta.label}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-line rounded"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="md:hidden border-t border-line bg-white">
          <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link py-3 ${isActive(item.href) ? "is-active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-line">
              <Link
                href={site.cta.href}
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                {site.cta.label}
              </Link>
              <a
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Book a call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
