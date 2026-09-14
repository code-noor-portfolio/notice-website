'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { AdminShell } from '@/components/admin/AdminShell'
import { useAdminAuth } from '@/lib/admin/auth-context'
import { ADMIN_ROUTES, ADMIN_SUPPORT_EMAIL } from '@/constants/admin'

export default function AdminLoginPage() {
  const { login, configError, ready } = useAdminAuth()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await login(email, password)
      router.replace(ADMIN_ROUTES.home)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connexion impossible')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AdminShell>
      <div className="mx-auto max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight text-fg">
          Connexion support
        </h1>
        <p className="mt-2 text-sm text-fg-secondary">
          Accès réservé à l’équipe Notice. L’autorisation finale est vérifiée
          côté serveur.
        </p>

        {(configError || !ready) && configError && (
          <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            {configError}
          </p>
        )}

        <form onSubmit={(e) => void onSubmit(e)} className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-fg-strong">
            E-mail
            <input
              type="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </label>
          <label className="block text-sm font-medium text-fg-strong">
            Mot de passe
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary"
            />
          </label>
          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || Boolean(configError)}
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-hover disabled:opacity-50"
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-fg-tertiary">
          Besoin d’aide ?{' '}
          <a
            className="text-primary hover:underline"
            href={`mailto:${ADMIN_SUPPORT_EMAIL}`}
          >
            {ADMIN_SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </AdminShell>
  )
}
