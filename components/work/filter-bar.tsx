"use client"

import { workCategories } from "@/lib/data/projects"

interface FilterBarProps {
  active: string
  onChange: (id: string) => void
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter projects by category"
    >
      {workCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`filter-chip ${active === cat.id ? "is-active" : ""}`}
          aria-pressed={active === cat.id}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
