'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AdminShell } from '@/components/admin/AdminShell'
import { Field, StatusBadge } from '@/components/admin/admin-ui'
import { useAdminAuth } from '@/lib/admin/auth-context'
import {
  AdminApiError,
  type AdminLicenseSummary,
} from '@/lib/admin/api'
import { parseAdminSearchQuery } from '@/lib/admin/search'
import { formatAdminDate } from '@/components/admin/admin-ui'
import { ADMIN_ROUTES, ADMIN_SUPPORT_EMAIL } from '@/constants/admin'

export default function AdminHomePage() {
  const { api } = useAdminAuth()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [trialSiret, setTrialSiret] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<AdminLicenseSummary[] | null>(null)

  async function onSearch(e: FormEvent) {
    e.preventDefault()
    if (!api) return
    const parsed = parseAdminSearchQuery(query)
    if (!parsed.ok) {
      setError(parsed.error)
      setResults(null)
      return
    }
    setLoading(true)
    setError(null)
    try {
      const data = await api.searchLicenses(parsed.params)
      setResults(data.results || [])
    } catch (err) {
      setResults(null)
      setError(
        err instanceof AdminApiError
          ? err.message
          : 'Recherche impossible'
      )
    } finally {
      setLoading(false)
    }
  }

  function onTrial(e: FormEvent) {
    e.preventDefault()
    const s = trialSiret.replace(/\s/g, '')
    if (!/^\d{14}$/.test(s)) {
      setError('SIRET invalide pour consulter un essai (14 chiffres).')
      return
    }
    router.push(ADMIN_ROUTES.trial(s))
  }

  return (
    <AdminShell title="Recherche">
      <p className="mb-8 max-w-2xl text-sm text-fg-secondary">
        Cherchez une licence par identifiant, préfixe de clé (NOTICE-XXXX),
        SIRET, e-mail, ou référence Stripe (session, customer, subscription).
        La clé complète n’est jamais acceptée ni affichée.
      </p>

      <form onSubmit={(e) => void onSearch(e)} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="licenseId, NOTICE-XXXX, SIRET, e-mail, cs_…, cus_…, sub_…"
          className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary"
          aria-label="Critère de recherche"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-hover disabled:opacity-50"
        >
          {loading ? 'Recherche…' : 'Rechercher'}
        </button>
      </form>

      {error && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}

      {results && (
        <div className="mt-10 space-y-3">
          <p className="text-sm text-fg-secondary">
            {results.length === 0
              ? 'Aucun résultat.'
              : `${results.length} résultat${results.length > 1 ? 's' : ''}`}
          </p>
          {results.map((lic) => (
            <Link
              key={lic.licenseId}
              href={ADMIN_ROUTES.license(lic.licenseId)}
              className="block rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-mono text-sm text-fg">{lic.licenseId}</div>
                <StatusBadge status={lic.status} />
              </div>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Field label="Préfixe" value={lic.keyPrefix} />
                <Field
                  label="Entreprise"
                  value={lic.legalName || lic.company?.legalName || '—'}
                />
                <Field
                  label="SIRET"
                  value={lic.siret || lic.expectedSiret || '—'}
                />
                <Field
                  label="E-mail"
                  value={lic.contactEmail || lic.company?.contactEmail || '—'}
                />
                <Field label="Type / plan" value={`${lic.kind || '—'} · ${lic.plan || '—'}`} />
                <Field
                  label="Appareils"
                  value={`${lic.devicesActive ?? '—'} / ${lic.maxDevices ?? '—'}`}
                />
                <Field
                  label="Updates incluses jusqu’au"
                  value={formatAdminDate(lic.updatesIncludedUntil)}
                />
                <Field
                  label="Updates actives jusqu’au"
                  value={formatAdminDate(lic.updatesEntitledUntil)}
                />
                <Field
                  label="Activée"
                  value={formatAdminDate(lic.activatedAt)}
                />
                <Field
                  label="Dernière activité"
                  value={formatAdminDate(lic.lastSeenAt)}
                />
              </dl>
            </Link>
          ))}
        </div>
      )}

      <section id="essais" className="mt-16 border-t border-separator pt-10">
        <h2 className="text-lg font-semibold text-fg">Essais (lecture seule)</h2>
        <p className="mt-2 max-w-xl text-sm text-fg-secondary">
          Consulter l’état d’un essai par SIRET. Aucune réinitialisation
          n’est possible depuis le back-office.
        </p>
        <form
          onSubmit={onTrial}
          className="mt-5 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            value={trialSiret}
            onChange={(e) => setTrialSiret(e.target.value)}
            placeholder="SIRET (14 chiffres)"
            className="flex-1 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-fg-strong hover:bg-detail"
          >
            Consulter
          </button>
        </form>
      </section>

      <p className="mt-12 text-xs text-fg-tertiary">
        Support Notice —{' '}
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
