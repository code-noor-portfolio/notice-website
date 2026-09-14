'use client'

import Link from 'next/link'
import { useAdminAuth } from '@/lib/admin/auth-context'
import { ADMIN_ROUTES, ADMIN_SUPPORT_EMAIL } from '@/constants/admin'

export function AdminShell({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  const { user, logout, isAdmin } = useAdminAuth()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-6">
            <Link
              href={ADMIN_ROUTES.home}
              className="text-sm font-semibold tracking-tight text-fg"
            >
              Notice · Support
            </Link>
            {isAdmin && (
              <nav className="hidden items-center gap-4 text-sm text-fg-secondary sm:flex">
                <Link href={ADMIN_ROUTES.home} className="hover:text-fg">
                  Licences
                </Link>
                <Link
                  href={`${ADMIN_ROUTES.home}#essais`}
                  className="hover:text-fg"
                >
                  Essais
                </Link>
                <a
                  href={`mailto:${ADMIN_SUPPORT_EMAIL}`}
                  className="hover:text-fg"
                >
                  Support
                </a>
              </nav>
            )}
          </div>
          <div className="flex items-center gap-3 text-sm">
            {user?.email && (
              <span className="hidden text-fg-tertiary sm:inline">
                {user.email}
              </span>
            )}
            {isAdmin && (
              <button
                type="button"
                onClick={() => void logout()}
                className="rounded-lg border border-border px-3 py-1.5 text-fg-secondary hover:bg-detail hover:text-fg"
              >
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-10 sm:px-6">
        {title && (
          <h1 className="mb-8 text-2xl font-semibold tracking-tight text-fg">
            {title}
          </h1>
        )}
        {children}
      </main>
    </div>
  )
}
