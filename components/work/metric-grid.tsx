import type { Metric } from "@/lib/data/projects"

interface MetricGridProps {
  metrics: Metric[]
}

export function MetricGrid({ metrics }: MetricGridProps) {
  if (!metrics.length) return null

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="metric-card">
          <div className="metric-value">{metric.value}</div>
          <div className="metric-label">{metric.label}</div>
          {metric.note ? (
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{metric.note}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}
