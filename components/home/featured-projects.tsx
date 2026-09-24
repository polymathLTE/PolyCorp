import Link from "next/link"
import { getFeaturedProjects } from "@/lib/data/projects"
import { FeaturedProject } from "@/components/work/featured-project"
import { SectionHeading } from "@/components/ui/section-heading"

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="section-pad bg-white" aria-labelledby="selected-work">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading
            index="01"
            eyebrow="Selected work"
            title={<span id="selected-work">Systems we have designed and built.</span>}
            description="Independent products, research systems and commercial engineering — each labelled for what it actually is."
          />
          <Link href="/work" className="link-arrow shrink-0 mb-2">
            All work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {featured.map((project, i) => (
            <FeaturedProject key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
