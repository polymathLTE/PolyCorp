import { processSteps } from "@/lib/data/site"
import { SectionHeading } from "@/components/ui/section-heading"

export function ProcessSteps() {
  return (
    <section className="section-pad bg-white" aria-labelledby="process">
      <div className="container-site">
        <SectionHeading
          index="03"
          eyebrow="Process"
          title={<span id="process">From problem to system.</span>}
          description="A straightforward path from unclear problem to working software — repeated until it holds under real use."
        />

        <ol className="grid gap-px bg-line md:grid-cols-2 lg:grid-cols-3 border border-line rounded-md overflow-hidden">
          {processSteps.map((step) => (
            <li key={step.num} className="bg-white p-6 md:p-7 flex flex-col gap-3">
              <span className="stat-number text-3xl text-signal">{step.num}</span>
              <h3 className="display-sm">{step.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
