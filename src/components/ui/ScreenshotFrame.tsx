'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ScreenshotFrameProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

/**
 * Cadre d’application pour les captures réelles de Notice.
 * Déposer les fichiers dans public/screens/ — aucun mock d’interface.
 */
export function ScreenshotFrame({
  src,
  alt,
  caption,
  className,
}: ScreenshotFrameProps) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={cn('w-full', className)}>
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-frame">
        <div className="flex h-9 items-center gap-2 border-b border-border bg-detail px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCE3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCE3]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D7DCE3]" />
          <span className="mx-auto pr-8 text-[11px] text-fg-tertiary">
            Notice
          </span>
        </div>

        <div className="relative aspect-[16/10] bg-detail">
          {!failed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              className="absolute inset-0 h-full w-full object-cover object-top"
              onError={() => setFailed(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <p className="text-center text-sm text-fg-tertiary">
                Capture de Notice à ajouter
                <span className="mt-1 block text-xs">{src}</span>
              </p>
            </div>
          )}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-fg-tertiary">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
