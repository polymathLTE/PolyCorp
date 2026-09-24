import { philosophy } from "@/lib/data/site"
import { SectionHeading } from "@/components/ui/section-heading"

export function Philosophy() {
  return (
    <section className="section-pad panel-blue border-0 rounded-none relative overflow-hidden" aria-labelledby="philosophy">
      <div className="star-field absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="container-site relative">
        <SectionHeading
          index="04"
          eyebrow="Philosophy"
          title={<span id="philosophy">Dream. Dare. Do.</span>}
          description="How Polymath approaches difficult builds."
          tone="on-brand"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {philosophy.map((item) => (
            <article
              key={item.word}
              className="border border-white/20 rounded-md p-6 md:p-8 bg-white/5 flex flex-col gap-4"
            >
              <h3 className="display-md !text-white">{item.word}</h3>
              <p className="text-lg text-signal font-medium">{item.line}</p>
              <p className="text-sm leading-relaxed text-white/75">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
