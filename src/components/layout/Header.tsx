'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { CTA, NAV_LINKS } from '@/constants/site'
import { cn } from '@/lib/utils'

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || menuOpen
          ? 'border-border bg-surface/95 backdrop-blur-md'
          : 'border-transparent bg-background/80 backdrop-blur-sm'
      )}
    >
      <div className="container-content flex h-[4.25rem] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-[16px] transition-colors duration-150',
                  active
                    ? 'font-semibold text-primary'
                    : 'text-fg-secondary hover:text-fg'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href={CTA.acheter.href} variant="ghost" size="sm">
            {CTA.acheter.label}
          </Button>
          <Button href={CTA.essayer.href} size="sm">
            {CTA.essayer.label}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button href={CTA.essayer.href} size="sm">
            {CTA.essayer.label}
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-fg"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuOpen}
        className="min-h-[calc(100svh-4.25rem)] border-t border-border bg-surface lg:hidden"
      >
        <nav
          className="container-content flex flex-col gap-1 py-4"
          aria-label="Navigation mobile"
        >
          {NAV_LINKS.map((link) => {
            const active = isActivePath(pathname, link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'rounded-lg px-2 py-3 text-[16px]',
                  active
                    ? 'font-semibold text-primary'
                    : 'text-fg-strong'
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-3 flex flex-col gap-2 border-t border-separator pt-4">
            <Button href={CTA.essayer.href} className="w-full">
              {CTA.essayer.label}
            </Button>
            <Button href={CTA.acheter.href} variant="secondary" className="w-full">
              {CTA.acheter.label}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
