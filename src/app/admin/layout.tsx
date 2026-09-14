import type { Metadata } from 'next'
import { AdminAuthProvider } from '@/lib/admin/auth-context'
import { AdminGuard } from '@/components/admin/AdminGuard'

export const metadata: Metadata = {
  title: 'Support',
  robots: { index: false, follow: false },
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AdminAuthProvider>
      <AdminGuard>{children}</AdminGuard>
    </AdminAuthProvider>
  )
}
