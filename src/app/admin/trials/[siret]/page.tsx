'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AdminShell } from '@/components/admin/AdminShell'
import {
  Field,
  Section,
  formatAdminDate,
} from '@/components/admin/admin-ui'
import { useAdminAuth } from '@/lib/admin/auth-context'
import { AdminApiError, type AdminTrialView } from '@/lib/admin/api'
import { ADMIN_ROUTES, ADMIN_SUPPORT_EMAIL } from '@/constants/admin'

export default function AdminTrialPage() {
  const params = useParams()
  const siret = String(params.siret || '')
  const { api } = useAdminAuth()
  const [trial, setTrial] = useState<AdminTrialView | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!api || !siret) return
    let cancelled = false
    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const data = await api.getTrial(siret)
        if (!cancelled) setTrial(data)
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof AdminApiError
              ? err.message
              : 'Consultation impossible'
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [api, siret])

  const stateLabel = (() => {
    if (!trial?.found) return 'Aucun essai'
    if (trial.status) return trial.status
    if (trial.expiresAt) {
      const end = new Date(trial.expiresAt).getTime()
      if (!Number.isNaN(end)) {
        return end >= Date.now() ? 'en_cours' : 'expire'
      }
    }
    return 'consommé'
  })()

  return (
    <AdminShell title="Essai">
      <div className="mb-6">
        <Link
          href={ADMIN_ROUTES.home}
          className="text-sm text-fg-secondary hover:text-fg"
        >
          ← Recherche
        </Link>
      </div>

      {loading && (
        <p className="text-sm text-fg-secondary">Chargement…</p>
      )}
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      {!loading && !error && trial && (
        <Section title="Consultation (lecture seule)">
          <p className="mb-4 text-sm text-fg-secondary">
            Un SIRET ne peut consommer qu’un seul essai. Aucune action de
            réinitialisation n’est disponible.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Field label="SIRET" value={trial.siret || siret} />
            <Field
              label="trialId"
              value={trial.found ? trial.trialId || '—' : '—'}
            />
            <Field label="état" value={stateLabel} />
            <Field
              label="startedAt"
              value={formatAdminDate(trial.startedAt)}
            />
            <Field
              label="expiresAt"
              value={formatAdminDate(trial.expiresAt)}
            />
            <Field
              label="createdAt"
              value={formatAdminDate(trial.createdAt)}
            />
          </dl>
          {!trial.found && (
            <p className="mt-4 text-sm text-fg-secondary">
              Aucun essai enregistré pour ce SIRET.
            </p>
          )}
        </Section>
      )}

      <p className="mt-10 text-xs text-fg-tertiary">
        Support —{' '}
        <a
          href={`mailto:${ADMIN_SUPPORT_EMAIL}`}
          className="text-primary hover:underline"
        >
          {ADMIN_SUPPORT_EMAIL}
        </a>
      </p>
    </AdminShell>
  )
}
