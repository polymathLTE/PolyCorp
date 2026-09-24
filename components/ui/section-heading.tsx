import type { ReactNode } from "react"

interface SectionHeadingProps {
  index?: string
  eyebrow: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  tone?: "default" | "on-brand"
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionHeadingProps) {
  const onBrand = tone === "on-brand"

  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-10 md:mb-14`}
    >
      <p
        className={`eyebrow mb-4 ${onBrand ? "!text-white/70" : ""}`}
      >
        {index ? `${index} / ${eyebrow}` : eyebrow}
      </p>
      <h2
        className={`display-lg text-balance ${onBrand ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${onBrand ? "text-white/80" : "text-ink-muted"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
