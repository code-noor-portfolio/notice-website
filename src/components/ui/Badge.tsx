import { cn } from '@/lib/utils'

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm',
        className
      )}
    >
      {children}
    </span>
  )
}
