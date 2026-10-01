'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface DocCaptureProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

/** Capture de documentation : proportions conservées, pas de recadrage. */
export function DocCapture({ src, alt, caption, className }: DocCaptureProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    const probe = new window.Image()
    probe.onload = () => {
      if (!cancelled) setFailed(false)
    }
    probe.onerror = () => {
      if (!cancelled) setFailed(true)
    }
    probe.src = src
    return () => {
      cancelled = true
    }
  }, [src])

  return (
    <figure className={cn('my-6', className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-soft">
        {failed ? (
          <div className="flex min-h-[140px] flex-col items-center justify-center gap-1.5 bg-detail px-4 py-10 text-center">
            <p className="text-sm font-medium text-fg-secondary">
              Capture à ajouter
            </p>
            <p className="max-w-full break-all font-mono text-xs text-fg-tertiary">
              {decodeURI(src)}
            </p>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="block h-auto w-full" />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-2.5 text-center text-[13px] leading-relaxed text-fg-tertiary">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
