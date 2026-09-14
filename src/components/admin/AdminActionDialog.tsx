'use client'

import { useState } from 'react'

type Props = {
  open: boolean
  title: string
  description?: string
  confirmLabel?: string
  danger?: boolean
  requireConfirmText?: string
  onClose: () => void
  onConfirm: (reason: string) => Promise<void>
}

export function AdminActionDialog({
  open,
  title,
  description,
  confirmLabel = 'Confirmer',
  danger,
  requireConfirmText,
  onClose,
  onConfirm,
}: Props) {
  const [reason, setReason] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!open) return null

  const canSubmit =
    reason.trim().length >= 3 &&
    (!requireConfirmText || confirmText === requireConfirmText) &&
    !loading

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setLoading(true)
    setError(null)
    try {
      await onConfirm(reason.trim())
      setReason('')
      setConfirmText('')
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Action impossible')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-fg/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-action-title"
    >
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className="w-full max-w-md rounded-xl border border-border bg-surface p-6 shadow-lg"
      >
        <h2
          id="admin-action-title"
          className="text-lg font-semibold text-fg"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm text-fg-secondary">{description}</p>
        )}
        <label className="mt-5 block text-sm font-medium text-fg-strong">
          Raison (obligatoire)
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={3}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-fg outline-none focus:border-primary"
            required
            minLength={3}
          />
        </label>
        {requireConfirmText && (
          <label className="mt-4 block text-sm font-medium text-fg-strong">
            Tapez <span className="font-mono">{requireConfirmText}</span> pour
            confirmer
            <input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-fg outline-none focus:border-primary"
            />
          </label>
        )}
        {error && (
          <p className="mt-3 text-sm text-red-700" role="alert">
            {error}
          </p>
        )}
        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-border px-4 py-2 text-sm text-fg-secondary hover:bg-detail"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className={`rounded-lg px-4 py-2 text-sm font-medium text-white disabled:opacity-50 ${
              danger
                ? 'bg-red-700 hover:bg-red-800'
                : 'bg-primary hover:bg-primary-hover'
            }`}
          >
            {loading ? 'En cours…' : confirmLabel}
          </button>
        </div>
      </form>
    </div>
  )
}
