import type { MetadataRoute } from "next"
import { allProjects } from "@/lib/data/projects"

const siteUrl = "https://www.polymathcorp.works"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/work", "/capabilities", "/about", "/profiles/emmanuel", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  )

  const projectRoutes = allProjects
    .filter((p) => p.tier === "flagship")
    .map((p) => ({
      url: `${siteUrl}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...projectRoutes]
}
