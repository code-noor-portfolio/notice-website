'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Fonctionnalités', href: '/#fonctionnalites' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [onDark, setOnDark] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      setOnDark(y < window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lightNav = scrolled || !onDark

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-content h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-navy-700 flex items-center justify-center">
            <span className="text-white text-xs font-bold">N</span>
          </div>
          <span
            className={cn(
              'text-lg font-bold transition-colors',
              lightNav ? 'text-slate-text' : 'text-white'
            )}
          >
            Notice
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-navy-500',
                lightNav
                  ? 'text-slate-secondary'
                  : 'text-white/75 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/acheter" size="sm">
            Acheter Notice
          </Button>
        </div>

        <button
          className={cn('md:hidden', lightNav ? 'text-slate-text' : 'text-white')}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-b border-slate-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-secondary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/acheter" size="sm" className="w-full">
            Acheter Notice
          </Button>
        </div>
      )}
    </header>
  )
}
