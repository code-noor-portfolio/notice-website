import { cn } from '@/lib/utils'

type CalloutKind = 'important' | 'info' | 'tip'

const LABELS: Record<CalloutKind, string> = {
  important: 'Important',
  info: 'À savoir',
  tip: 'Astuce',
}

interface DocCalloutProps {
  kind?: CalloutKind
  children: React.ReactNode
  className?: string
}

export function DocCallout({
  kind = 'info',
  children,
  className,
}: DocCalloutProps) {
  return (
    <aside
      className={cn(
        'my-6 rounded-xl border border-border bg-detail px-4 py-4 sm:px-5',
        kind === 'important' && 'border-l-[3px] border-l-primary',
        className
      )}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
        {LABELS[kind]}
      </p>
      <div className="mt-2 space-y-2 text-[15px] leading-relaxed text-fg-strong">
        {children}
      </div>
    </aside>
  )
}
