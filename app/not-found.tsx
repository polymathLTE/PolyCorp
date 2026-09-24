import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container-site section-pad">
      <div className="max-w-xl">
        <p className="eyebrow mb-6">404 / Not found</p>
        <h1 className="display-lg mb-4">This page doesn&apos;t exist.</h1>
        <p className="prose-poly mb-8">
          The address may be outdated, or the page may have moved. Try the work index or head
          back home.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/work" className="btn-secondary">
            View the work
          </Link>
        </div>
      </div>
    </div>
  )
}
