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
      className={cn('inline-flex items-center', className)}
      aria-label="Notice — accueil"
    >
      <img
        src={
          inverted
            ? '/logo/notice_full_logo_dark.svg'
            : '/logo/notice_full_logo_light.svg'
        }
        alt=""
        width={1045}
        height={240}
        className="h-7 w-auto md:h-8"
      />
    </Link>
  )
}
