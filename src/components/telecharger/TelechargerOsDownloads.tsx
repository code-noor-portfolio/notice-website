'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { getStableRelease, isPublicDownloadUrl, type ReleaseInfo } from '@/lib/notice-api'

type LoadState = 'loading' | 'ready' | 'unavailable'

function OsCard({
  title,
  description,
  href,
  label,
  loadingLabel,
  ariaLabel,
  hint,
}: {
  title: string
  description: string
  href: string
  label: string
  loadingLabel: string
  ariaLabel: string
  hint: string
}) {
  const enabled = isPublicDownloadUrl(href)
  return (
    <article className="rounded-xl border border-border bg-surface p-6 text-center shadow-soft sm:p-8">
      <h3 className="text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-fg-secondary">
        {description}
      </p>
      <div className="mt-6">
        {enabled ? (
          <Button
            href={href}
            size="lg"
            className="w-full"
            aria-label={ariaLabel}
          >
            {label}
          </Button>
        ) : (
          <Button
            disabled
            size="lg"
            className="w-full"
            aria-label={ariaLabel}
          >
            {loadingLabel}
          </Button>
        )}
        <p className="mt-3 text-sm text-fg-tertiary">{hint}</p>
      </div>
    </article>
  )
}

export function TelechargerOsDownloads() {
  const [state, setState] = useState<LoadState>('loading')
  const [release, setRelease] = useState<ReleaseInfo | null>(null)

  useEffect(() => {
    let cancelled = false
    getStableRelease()
      .then((data) => {
        if (cancelled) return
        setRelease(data)
        setState('ready')
      })
      .catch(() => {
        if (cancelled) return
        setRelease(null)
        setState('unavailable')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const macUrl = isPublicDownloadUrl(release?.downloadUrlMac ?? '')
    ? (release?.downloadUrlMac ?? '')
    : ''
  const winUrl = isPublicDownloadUrl(release?.downloadUrlWin ?? '')
    ? (release?.downloadUrlWin ?? '')
    : ''
  const version = state === 'ready' ? release?.latestVersion.trim() ?? '' : ''
  const versionHint = version ? `Version ${version}` : ''

  const macHint =
    state === 'unavailable'
      ? 'Téléchargement temporairement indisponible'
      : macUrl
        ? versionHint
        : state === 'loading'
          ? 'Chargement…'
          : 'Bientôt disponible'

  const winHint =
    state === 'unavailable'
      ? 'Téléchargement temporairement indisponible'
      : winUrl
        ? versionHint
        : state === 'loading'
          ? 'Chargement…'
          : 'Bientôt disponible'

  return (
    <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
      <OsCard
        title="Notice pour Windows"
        description="Pour les ordinateurs Windows."
        href={winUrl}
        label="Télécharger pour Windows"
        loadingLabel="Télécharger pour Windows"
        ariaLabel={
          winUrl
            ? 'Télécharger pour Windows'
            : 'Télécharger pour Windows — bientôt disponible'
        }
        hint={winHint}
      />
      <OsCard
        title="Notice pour macOS"
        description="Pour les ordinateurs Mac."
        href={macUrl}
        label="Télécharger pour macOS"
        loadingLabel="Télécharger pour macOS"
        ariaLabel={
          macUrl
            ? 'Télécharger pour macOS'
            : 'Télécharger pour macOS — bientôt disponible'
        }
        hint={macHint}
      />
    </div>
  )
}
