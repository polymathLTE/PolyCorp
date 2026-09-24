import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { ExperienceStrip } from "@/components/home/experience-strip"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { CapabilitiesBlock } from "@/components/home/capabilities-block"
import { ProcessSteps } from "@/components/home/process-steps"
import { Philosophy } from "@/components/home/philosophy"
import { Founder } from "@/components/home/founder"
import { CtaBand } from "@/components/home/cta-band"
import { RevealInit } from "@/components/shared/reveal-init"
import { site } from "@/lib/data/site"

export const metadata: Metadata = {
  title: "Polymath Corporation — We turn difficult ideas into working systems",
  description: site.supporting,
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <RevealInit />
      <Hero />
      <ExperienceStrip />
      <FeaturedProjects />
      <CapabilitiesBlock />
      <ProcessSteps />
      <Philosophy />
      <Founder />
      <CtaBand />
    </>
  )
}
