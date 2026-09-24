import type React from "react"
import type { Metadata } from "next"
import { Sora, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sora",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
})

const siteUrl = "https://www.polymathcorp.works"

export const metadata: Metadata = {
  title: {
    default: "Polymath Corporation — We turn difficult ideas into working systems",
    template: "%s | Polymath Corporation",
  },
  description:
    "Polymath is a builder-led engineering studio. AI, software and data systems built for real problems, from first problem definition to working implementation.",
  applicationName: "Polymath Corporation",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI engineering",
    "software engineering",
    "data systems",
    "product engineering",
    "automation",
    "connected systems",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Polymath Corporation", url: siteUrl }],
  creator: "Polymath Corporation",
  publisher: "Polymath Corporation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Polymath Corporation",
    title: "Polymath Corporation — We turn difficult ideas into working systems",
    description:
      "AI, software and data systems built for real problems, from first problem definition to working implementation.",
    images: [
      {
        url: "/polymath_corp_logo.png",
        width: 880,
        height: 883,
        alt: "Polymath Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polymath Corporation — We turn difficult ideas into working systems",
    description:
      "AI, software and data systems built for real problems, from first problem definition to working implementation.",
    images: ["/polymath_corp_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Polymath Corporation",
  alternateName: "Polymath",
  url: siteUrl,
  logo: `${siteUrl}/polymath_corp_logo.png`,
  description:
    "Builder-led engineering studio turning difficult ideas into working AI, software and data systems.",
  email: "hello@polymathcorp.works",
  telephone: "+2347065533470",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lekki",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [
    "https://www.linkedin.com/company/polymath-corporation/",
    "https://github.com/PolymathCorp",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Software Engineering",
    "Data Engineering",
    "Product Engineering",
    "Automation",
    "Embedded Systems",
    "Computer Vision",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
