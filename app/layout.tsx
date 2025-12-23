import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Emmanuel Lawal - Data Scientist & AI Engineer",
    template: "%s | Emmanuel Lawal",
  },
  description:
    "Portfolio of Emmanuel Lawal, Data Scientist & AI Engineer specializing in machine learning, LLM fine-tuning, data pipelines, and AI systems. Based in Lekki, Lagos.",
  generator: "Next.js",
  applicationName: "Emmanuel Lawal Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Data Science",
    "AI Engineer",
    "Machine Learning",
    "Python",
    "SQL",
    "Power BI",
    "LLM Fine-tuning",
    "Data Pipelines",
    "AWS",
    "GCP",
    "Lagos",
    "Nigeria",
  ],
  authors: [{ name: "Emmanuel Lawal", url: "https://polymathcorp.works" }],
  creator: "Emmanuel Lawal",
  publisher: "Emmanuel Lawal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://polymathcorp.works"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://polymathcorp.works",
    title: "Emmanuel Lawal - Data Scientist & AI Engineer",
    description:
      "Portfolio showcasing ML projects, data pipelines, and AI engineering expertise. Specializing in LLM fine-tuning and scalable data solutions.",
    siteName: "Emmanuel Lawal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emmanuel Lawal - Data Scientist & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Lawal - Data Scientist & AI Engineer",
    description:
      "Portfolio showcasing ML projects, data pipelines, and AI engineering expertise. Specializing in LLM fine-tuning and scalable data solutions.",
    images: ["/og-image.png"],
    creator: "@emmanuellawal", // REPLACE_ME: Add actual Twitter handle
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emmanuel Lawal",
              jobTitle: "Data Scientist & AI Engineer",
              description:
                "Data Scientist & AI Engineer specializing in machine learning, LLM fine-tuning, and data pipelines",
              url: "https://polymathcorp.works",
              email: "hello@polymathcorp.works",
              telephone: "+2347065533470",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lekki",
                addressRegion: "Lagos",
                addressCountry: "Nigeria",
              },
              sameAs: ["https://www.linkedin.com/in/emmanuel-lawal-temitope", "https://github.com/PolymathCorp"],
              knowsAbout: [
                "Data Science",
                "Machine Learning",
                "Artificial Intelligence",
                "Python Programming",
                "SQL",
                "Power BI",
                "AWS",
                "Google Cloud Platform",
                "Data Engineering",
                "LLM Fine-tuning",
              ],
              alumniOf: {
                "@type": "Organization",
                name: "REPLACE_ME: University Name",
              },
              worksFor: {
                "@type": "Organization",
                name: "REPLACE_ME: Current Company",
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <div id="main-content">
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
