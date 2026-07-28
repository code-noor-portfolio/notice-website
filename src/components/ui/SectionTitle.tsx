import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  label,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={cn('max-w-2xl mb-16', alignClass)}>
      {label && (
        <p className="text-navy-500 text-sm font-semibold uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-text mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
