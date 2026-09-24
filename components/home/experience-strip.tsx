import Image from "next/image"
import { experienceLogos } from "@/lib/data/site"

export function ExperienceStrip() {
  return (
    <section className="hairline-b bg-canvas-tint" aria-label="Selected experience">
      <div className="container-site py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <p className="mono-label text-ink-muted shrink-0 md:w-44">
            Selected Experience
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-5 md:gap-x-10">
            {experienceLogos.map((logo) => (
              <li key={logo.name} className="opacity-70 hover:opacity-100 transition-opacity">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={40}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
