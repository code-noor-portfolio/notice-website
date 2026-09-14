'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { AdminShell } from '@/components/admin/AdminShell'
import { AdminActionDialog } from '@/components/admin/AdminActionDialog'
import {
  Field,
  Section,
  StatusBadge,
  formatAdminDate,
  updatesStateLabel,
} from '@/components/admin/admin-ui'
import { useAdminAuth } from '@/lib/admin/auth-context'
import {
  AdminApiError,
  type AdminLicenseSummary,
  type AdminPaymentDiagnosis,
} from '@/lib/admin/api'
import { ADMIN_ROUTES, ADMIN_SUPPORT_EMAIL } from '@/constants/admin'

type ActionKind =
  | 'suspend'
  | 'unsuspend'
  | 'revoke'
  | 'reissue'
  | 'migrate'
  | 'device'
  | null

export default function AdminLicensePage() {
  const params = useParams()
  const licenseId = String(params.licenseId || '')
  const { api } = useAdminAuth()

  const [license, setLicense] = useState<AdminLicenseSummary | null>(null)
  const [payment, setPayment] = useState<AdminPaymentDiagnosis | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)
  const [action, setAction] = useState<ActionKind>(null)
  const [deviceId, setDeviceId] = useState<string | null>(null)
  const [newSiret, setNewSiret] = useState('')

  const refresh = useCallback(async () => {
    if (!api || !licenseId) return
    setLoading(true)
    setError(null)
    try {
      const [lic, pay] = await Promise.all([
        api.getLicense(licenseId),
        api.getPayment(licenseId).catch(() => null),
      ])
      setLicense(lic)
      setPayment(pay)
    } catch (err) {
      setError(
        err instanceof AdminApiError
          ? err.message
          : 'Impossible de charger la licence'
      )
      setLicense(null)
    } finally {
      setLoading(false)
    }
  }, [api, licenseId])

  useEffect(() => {
    void refresh()
  }, [refresh])

  async function runAction(reason: string) {
    if (!api || !license) return
    setFlash(null)
    switch (action) {
      case 'suspend':
        await api.suspend(license.licenseId, reason)
        setFlash('Licence suspendue.')
        break
      case 'unsuspend':
        await api.unsuspend(license.licenseId, reason)
        setFlash('Licence réactivée.')
        break
      case 'revoke':
        await api.revoke(license.licenseId, reason)
        setFlash('Licence révoquée.')
        break
      case 'reissue': {
        const r = await api.reissue(license.licenseId, reason)
        setFlash(
          r.emailSent
            ? 'Nouvelle clé générée et envoyée à l’adresse de contact.'
            : 'Nouvelle clé générée. L’e-mail n’a pas pu être envoyé — contacter le support.'
        )
        break
      }
      case 'device':
        if (!deviceId) throw new Error('Appareil manquant')
        await api.revokeDevice(license.licenseId, deviceId, reason)
        setFlash('Appareil révoqué (licence inchangée).')
        break
      case 'migrate': {
        const companyId = license.companyId || license.company?.companyId
        if (!companyId) throw new Error('Aucune entreprise liée')
        const siret = newSiret.replace(/\s/g, '')
        if (!/^\d{14}$/.test(siret)) {
          throw new Error('Nouveau SIRET invalide')
        }
        await api.migrateSiret(companyId, siret, reason)
        setFlash('SIRET migré.')
        setNewSiret('')
        break
      }
      default:
        break
    }
    setAction(null)
    setDeviceId(null)
    await refresh()
  }

  const company = license?.company
  const siret =
    company?.siret || license?.siret || license?.expectedSiret || '—'

  return (
    <AdminShell>
      <div className="mb-6">
        <Link
          href={ADMIN_ROUTES.home}
          className="text-sm text-fg-secondary hover:text-fg"
        >
          ← Recherche
        </Link>
      </div>

      {loading && (
        <p className="text-sm text-fg-secondary">Chargement de la licence…</p>
      )}
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      {flash && (
        <p className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          {flash}
        </p>
      )}

      {license && !loading && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="font-mono text-xl font-semibold text-fg">
                {license.licenseId}
              </h1>
              <p className="mt-1 text-sm text-fg-secondary">
                Préfixe {license.keyPrefix}
              </p>
            </div>
            <StatusBadge status={license.status} />
          </div>

          <Section title="Licence">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field label="licenseId" value={license.licenseId} />
              <Field label="keyPrefix" value={license.keyPrefix} />
              <Field label="kind" value={license.kind} />
              <Field label="plan" value={license.plan} />
              <Field label="status" value={license.status} />
              <Field
                label="maxDevices"
                value={`${license.devicesActive ?? 0} / ${license.maxDevices ?? '—'}`}
              />
              <Field label="createdAt" value={formatAdminDate(license.createdAt)} />
              <Field label="issuedAt" value={formatAdminDate(license.issuedAt)} />
              <Field
                label="activatedAt"
                value={formatAdminDate(license.activatedAt)}
              />
              <Field
                label="lastSeenAt"
                value={formatAdminDate(license.lastSeenAt)}
              />
              <Field
                label="suspendedAt"
                value={formatAdminDate(license.suspendedAt)}
              />
              <Field
                label="revokedAt"
                value={formatAdminDate(license.revokedAt)}
              />
            </dl>
          </Section>

          <Section title="Entreprise">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field
                label="companyId"
                value={company?.companyId || license.companyId || '—'}
              />
              <Field
                label="legalName"
                value={company?.legalName || license.legalName || '—'}
              />
              <Field label="SIRET" value={siret} />
              <Field
                label="contactName"
                value={company?.contactName || '—'}
              />
              <Field
                label="contactEmail"
                value={
                  company?.contactEmail || license.contactEmail || '—'
                }
              />
            </dl>
            {siret !== '—' && /^\d{14}$/.test(String(siret)) && (
              <p className="mt-4 text-sm">
                <Link
                  href={ADMIN_ROUTES.trial(String(siret))}
                  className="text-primary hover:underline"
                >
                  Voir l’essai pour ce SIRET →
                </Link>
              </p>
            )}
          </Section>

          <Section title="Updates">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field
                label="updatesIncludedUntil (12 mois inclus)"
                value={formatAdminDate(license.updatesIncludedUntil)}
              />
              <Field
                label="updatesEntitledUntil (droit actuel)"
                value={formatAdminDate(license.updatesEntitledUntil)}
              />
              <Field
                label="État"
                value={updatesStateLabel(license.updatesEntitledUntil)}
              />
            </dl>
          </Section>

          <Section title="Paiement">
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Field
                label="paymentProvider"
                value={
                  payment?.paymentProvider || license.paymentProvider || '—'
                }
              />
              <Field
                label="paymentReference"
                value={
                  payment?.paymentReference ||
                  license.paymentReference ||
                  '—'
                }
              />
              <Field
                label="Stripe session"
                value={
                  payment?.stripeSessionId || license.stripeSessionId || '—'
                }
              />
              <Field
                label="Stripe customer"
                value={
                  payment?.stripeCustomerId ||
                  license.stripeCustomerId ||
                  '—'
                }
              />
              <Field
                label="Stripe payment intent"
                value={
                  payment?.stripePaymentIntentId ||
                  license.stripePaymentIntentId ||
                  '—'
                }
              />
              <Field
                label="Stripe subscription"
                value={
                  payment?.stripeSubscriptionId ||
                  license.stripeSubscriptionId ||
                  '—'
                }
              />
            </dl>
          </Section>

          <Section title="Appareils">
            {!license.devices?.length ? (
              <p className="text-sm text-fg-secondary">Aucun appareil.</p>
            ) : (
              <ul className="space-y-3">
                {license.devices.map((d) => (
                  <li
                    key={d.deviceId}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3"
                  >
                    <div className="min-w-0 text-sm">
                      <div className="font-mono text-fg">
                        {d.deviceId.length > 24
                          ? `${d.deviceId.slice(0, 12)}…${d.deviceId.slice(-6)}`
                          : d.deviceId}
                      </div>
                      <div className="mt-1 text-fg-secondary">
                        {d.deviceName || d.platform || '—'} ·{' '}
                        {d.status || '—'} · activé{' '}
                        {formatAdminDate(d.activatedAt)} · vu{' '}
                        {formatAdminDate(d.lastSeenAt)}
                      </div>
                    </div>
                    {d.status !== 'revoked' && (
                      <button
                        type="button"
                        onClick={() => {
                          setDeviceId(d.deviceId)
                          setAction('device')
                        }}
                        className="rounded-lg border border-border px-3 py-1.5 text-xs text-fg-secondary hover:bg-detail"
                      >
                        Révoquer l’appareil
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </Section>

          <Section title="Actions support">
            <div className="flex flex-wrap gap-3">
              {license.status !== 'suspended' &&
                license.status !== 'revoked' && (
                  <ActionButton
                    label="Suspendre"
                    onClick={() => setAction('suspend')}
                  />
                )}
              {license.status === 'suspended' && (
                <ActionButton
                  label="Réactiver"
                  onClick={() => setAction('unsuspend')}
                />
              )}
              {license.status !== 'revoked' && (
                <ActionButton
                  label="Révoquer"
                  danger
                  onClick={() => setAction('revoke')}
                />
              )}
              {license.status !== 'revoked' && (
                <ActionButton
                  label="Réémettre la clé"
                  onClick={() => setAction('reissue')}
                />
              )}
            </div>

            {(license.companyId || company?.companyId) && (
              <div className="mt-8 border-t border-separator pt-6">
                <h3 className="text-sm font-semibold text-fg">
                  Migrer le SIRET
                </h3>
                <p className="mt-1 text-sm text-fg-secondary">
                  Cette opération modifie le SIRET associé à l’entreprise et à
                  sa licence.
                </p>
                <div className="mt-3 flex max-w-md flex-col gap-2 sm:flex-row">
                  <input
                    value={newSiret}
                    onChange={(e) => setNewSiret(e.target.value)}
                    placeholder="Nouveau SIRET (14 chiffres)"
                    className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  />
                  <button
                    type="button"
                    onClick={() => setAction('migrate')}
                    className="rounded-lg border border-border px-4 py-2 text-sm hover:bg-detail"
                  >
                    Migrer…
                  </button>
                </div>
                <p className="mt-2 text-xs text-fg-tertiary">
                  SIRET actuel : {siret}
                </p>
              </div>
            )}
          </Section>

          <p className="text-xs text-fg-tertiary">
            Support —{' '}
            <a
              href={`mailto:${ADMIN_SUPPORT_EMAIL}`}
              className="text-primary hover:underline"
            >
              {ADMIN_SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      )}

      <AdminActionDialog
        open={action === 'suspend'}
        title="Suspendre la licence"
        description="Les appareils liés ne pourront plus s’authentifier tant que la licence est suspendue."
        confirmLabel="Suspendre"
        onClose={() => setAction(null)}
        onConfirm={runAction}
      />
      <AdminActionDialog
        open={action === 'unsuspend'}
        title="Réactiver la licence"
        description="La licence repassera en statut actif (ou pending si non activée)."
        confirmLabel="Réactiver"
        onClose={() => setAction(null)}
        onConfirm={runAction}
      />
      <AdminActionDialog
        open={action === 'revoke'}
        title="Révoquer la licence"
        description="Action fortement sensible. La licence ne pourra plus être utilisée."
        confirmLabel="Révoquer définitivement"
        danger
        requireConfirmText="REVOQUER"
        onClose={() => setAction(null)}
        onConfirm={runAction}
      />
      <AdminActionDialog
        open={action === 'reissue'}
        title="Réémettre la clé"
        description="Une nouvelle clé sera générée côté serveur et envoyée à l’adresse de contact. L’ancienne clé sera invalidée. La clé ne s’affichera jamais ici."
        confirmLabel="Réémettre"
        onClose={() => setAction(null)}
        onConfirm={runAction}
      />
      <AdminActionDialog
        open={action === 'device'}
        title="Révoquer un appareil"
        description="Libère un emplacement appareil. La licence n’est pas révoquée."
        confirmLabel="Révoquer l’appareil"
        onClose={() => {
          setAction(null)
          setDeviceId(null)
        }}
        onConfirm={runAction}
      />
      <AdminActionDialog
        open={action === 'migrate'}
        title="Migrer le SIRET"
        description="Cette opération modifie le SIRET associé à l’entreprise et à sa licence. Le nouveau SIRET doit être libre."
        confirmLabel="Confirmer la migration"
        danger
        onClose={() => setAction(null)}
        onConfirm={runAction}
      />
    </AdminShell>
  )
}

function ActionButton({
  label,
  onClick,
  danger,
}: {
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border px-4 py-2 text-sm ${
        danger
          ? 'border-red-200 text-red-800 hover:bg-red-50'
          : 'border-border text-fg-strong hover:bg-detail'
      }`}
    >
      {label}
    </button>
  )
}
