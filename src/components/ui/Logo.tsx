import Link from 'next/link'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  inverted?: boolean
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn('inline-flex items-center gap-2.5', className)}
      aria-label="Notice — accueil"
    >
      <span
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white',
          inverted ? 'bg-primary' : 'bg-primary'
        )}
      >
        N
      </span>
      <span
        className={cn(
          'text-[17px] font-semibold tracking-tight',
          inverted ? 'text-white' : 'text-fg'
        )}
      >
        Notice
      </span>
    </Link>
  )
}
