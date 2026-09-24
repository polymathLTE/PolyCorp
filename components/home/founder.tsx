import Link from "next/link"

export function Founder() {
  return (
    <section className="section-pad bg-canvas-tint hairline-t hairline-b" aria-labelledby="founder">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-7">
            <p className="eyebrow mb-4">05 / Founder</p>
            <h2 id="founder" className="display-lg mb-4">
              Emmanuel Lawal
            </h2>
            <p className="mono-label text-brand mb-5">
              AI Engineer · Software Engineer · Product Builder
            </p>
            <p className="prose-poly text-lg">
              I design and build systems across AI, software and data, from early prototypes to
              production-oriented implementations.
            </p>
            <div className="mt-7">
              <Link href="/profiles/emmanuel" className="link-arrow">
                View profile <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="panel p-6 md:p-8 grid-faint">
              <p className="mono-label text-ink-muted mb-4">Focus</p>
              <ul className="space-y-3">
                {[
                  "Machine learning systems",
                  "Product engineering",
                  "Data & decision tools",
                  "Connected / edge systems",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-ink border-b border-line last:border-0 pb-3 last:pb-0"
                  >
                    <span className="status-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
