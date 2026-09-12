import Link from 'next/link'
import { isCommerceHref } from '@/constants/site'
import { cn } from '@/lib/utils'

interface PendingLinkProps {
  href: string
  className?: string
  children: React.ReactNode
}

/** Lien réel, ou apparence de lien si l’action commerce n’est pas encore ouverte. */
export function PendingLink({ href, className, children }: PendingLinkProps) {
  if (isCommerceHref(href)) {
    return <span className={cn('cursor-pointer', className)}>{children}</span>
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
