import Link from 'next/link'
import { cn } from '@/lib/utils'
import { isCommerceHref } from '@/constants/site'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit'
  'aria-label'?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  disabled,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary:
      'border border-border bg-surface text-fg-strong hover:bg-detail',
    ghost: 'text-fg-secondary hover:bg-detail hover:text-fg',
  }

  const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-5 py-3 text-[15px]',
  }

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href && !isCommerceHref(href)) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  if (href && isCommerceHref(href)) {
    return (
      <button type="button" className={classes} aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
