import type { ArchitectureFlow } from "@/lib/data/projects"

interface ArchitectureDiagramProps {
  flow: ArchitectureFlow
  caption?: string
}

export function ArchitectureDiagram({ flow, caption }: ArchitectureDiagramProps) {
  return (
    <figure className="panel overflow-hidden">
      <div className="panel-blue px-5 py-4 flex items-center justify-between gap-4 rounded-none border-0 border-b">
        <figcaption className="mono-label !text-white/85">{flow.title}</figcaption>
        <span className="mono-meta text-white/60">System flow</span>
      </div>

      <div className="p-5 md:p-8 grid-faint">
        <ol className="flex flex-col md:flex-row md:items-stretch gap-3 md:gap-0">
          {flow.nodes.map((node, i) => (
            <li key={node.id} className="flex md:flex-1 items-stretch">
              <div className="flex-1 panel p-4 flex flex-col gap-2 min-w-0">
                <span className="mono-label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-sm leading-snug text-ink">
                  {node.label}
                </span>
                {node.detail ? (
                  <span className="mono-meta !normal-case !tracking-normal text-ink-muted text-xs leading-relaxed">
                    {node.detail}
                  </span>
                ) : null}
              </div>
              {i < flow.nodes.length - 1 ? (
                <div
                  className="hidden md:flex items-center px-2 text-signal shrink-0"
                  aria-hidden="true"
                >
                  <span className="mono-label">→</span>
                </div>
              ) : null}
              {i < flow.nodes.length - 1 ? (
                <div
                  className="md:hidden flex items-center justify-center py-1 text-signal"
                  aria-hidden="true"
                >
                  <span className="mono-label">↓</span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      {caption ? (
        <figcaption className="px-5 md:px-8 py-4 hairline-t text-sm text-ink-muted leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
