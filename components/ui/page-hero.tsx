import Link from "next/link"

interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
  actions?: React.ReactNode
}

export function PageHero({ eyebrow, title, description, actions }: PageHeroProps) {
  return (
    <section className="hairline-b bg-canvas-tint">
      <div className="container-site py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">{eyebrow}</p>
          <h1 className="display-lg text-balance mb-5">{title}</h1>
          {description ? (
            <p className="prose-poly !text-ink-muted text-lg max-w-2xl">{description}</p>
          ) : null}
          {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </div>
    </section>
  )
}
