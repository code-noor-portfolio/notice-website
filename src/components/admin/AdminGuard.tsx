'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useAdminAuth } from '@/lib/admin/auth-context'
import { ADMIN_ROUTES } from '@/constants/admin'

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const { ready, user, isAdmin, claimChecked } = useAdminAuth()
  const router = useRouter()
  const pathname = usePathname()
  const isLogin = pathname === ADMIN_ROUTES.login

  useEffect(() => {
    if (!ready || !claimChecked) return
    if (isLogin) {
      if (user && isAdmin) {
        router.replace(ADMIN_ROUTES.home)
      }
      return
    }
    if (!user || !isAdmin) {
      router.replace(ADMIN_ROUTES.login)
    }
  }, [ready, claimChecked, user, isAdmin, isLogin, router])

  if (!ready || !claimChecked) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-fg-secondary">
        Chargement…
      </div>
    )
  }

  if (isLogin) {
    return <>{children}</>
  }

  if (!user || !isAdmin) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-sm text-fg-secondary">
        Redirection…
      </div>
    )
  }

  return <>{children}</>
}
