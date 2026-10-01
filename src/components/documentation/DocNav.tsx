'use client'

import { ChevronDown } from 'lucide-react'
import { DOC_NAV, type DocNavId } from '@/constants/documentation'
import { cn } from '@/lib/utils'

interface DocNavProps {
  activeId: DocNavId
  open: boolean
  onToggle: () => void
  onSelect: (id: DocNavId) => void
}

function NavLinks({
  activeId,
  onSelect,
}: {
  activeId: DocNavId
  onSelect: (id: DocNavId) => void
}) {
  return (
    <ol className="space-y-0.5">
      {DOC_NAV.map((item) => {
        const active = item.id === activeId
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={() => onSelect(item.id)}
              className={cn(
                'flex gap-2.5 rounded-lg px-2.5 py-2 text-[13px] leading-snug transition-colors duration-150',
                active
                  ? 'bg-detail font-medium text-primary'
                  : 'text-fg-secondary hover:bg-detail hover:text-fg'
              )}
            >
              <span
                className={cn(
                  'w-6 shrink-0 tabular-nums',
                  active ? 'text-primary' : 'text-fg-tertiary'
                )}
              >
                {item.num}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        )
      })}
    </ol>
  )
}

export function DocNav({ activeId, open, onToggle, onSelect }: DocNavProps) {
  return (
    <>
      <div className="lg:hidden">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between rounded-xl border border-border bg-surface px-4 py-3 text-left text-sm font-medium text-fg"
        >
          Sommaire de la documentation
          <ChevronDown
            size={18}
            className={cn(
              'shrink-0 text-fg-tertiary transition-transform duration-150',
              open && 'rotate-180'
            )}
            aria-hidden
          />
        </button>
        {open ? (
          <nav
            aria-label="Sommaire de la documentation"
            className="mt-2 rounded-xl border border-border bg-surface p-2"
          >
            <NavLinks activeId={activeId} onSelect={onSelect} />
          </nav>
        ) : null}
      </div>

      <nav
        aria-label="Sommaire de la documentation"
        className="sticky top-28 hidden max-h-[calc(100vh-8.5rem)] overflow-y-auto lg:block"
      >
        <p className="mb-3 px-2.5 text-[11px] font-medium uppercase tracking-[0.14em] text-fg-tertiary">
          Sommaire
        </p>
        <NavLinks activeId={activeId} onSelect={onSelect} />
      </nav>
    </>
  )
}
