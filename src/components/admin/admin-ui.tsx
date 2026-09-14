export function formatAdminDate(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(d) + ' UTC'
}

export function updatesStateLabel(
  entitledUntil: string | null | undefined
): string {
  if (!entitledUntil) return 'Non renseigné'
  const end = new Date(entitledUntil).getTime()
  if (Number.isNaN(end)) return 'Non renseigné'
  return end >= Date.now() ? 'Mises à jour actives' : 'Mises à jour expirées'
}

export function Field({
  label,
  value,
}: {
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-medium uppercase tracking-wide text-fg-tertiary">
        {label}
      </dt>
      <dd className="mt-1 break-words text-sm text-fg">{value ?? '—'}</dd>
    </div>
  )
}

export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h2 className="mb-4 text-base font-semibold text-fg">{title}</h2>
      {children}
    </section>
  )
}

export function StatusBadge({ status }: { status?: string | null }) {
  const s = (status || '—').toLowerCase()
  const tone =
    s === 'active'
      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
      : s === 'suspended'
        ? 'bg-amber-50 text-amber-900 border-amber-200'
        : s === 'revoked' || s === 'refunded'
          ? 'bg-red-50 text-red-800 border-red-200'
          : 'bg-detail text-fg-secondary border-border'
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-xs font-medium ${tone}`}
    >
      {status || '—'}
    </span>
  )
}
