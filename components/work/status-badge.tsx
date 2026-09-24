import type { ProjectStatus } from "@/lib/data/projects"

const statusClass: Record<ProjectStatus, string> = {
  Live: "status-dot-blue",
  "Working prototype": "status-dot",
  Research: "status-dot",
  Private: "status-dot status-dot-blue",
  Demo: "status-dot",
  Archived: "status-dot status-dot-blue",
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2 mono-label text-ink-muted">
      <span className={statusClass[status]} aria-hidden="true" />
      {status}
    </span>
  )
}
