'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'

interface AppScreenshotProps {
  src: string
  alt: string
  /** Shown when the image file is not yet available */
  fallbackIcon?: LucideIcon
  className?: string
  aspect?: 'video' | 'square' | 'wide'
}

/**
 * Ready for real captures: drop files in public/screens/*.webp
 * and keep the same `src` — no component change needed.
 * Missing files show the fallback icon (no broken-image noise).
 */
export function AppScreenshot({
  src,
  alt,
  fallbackIcon: Icon,
  className,
  aspect = 'wide',
}: AppScreenshotProps) {
  const [failed, setFailed] = useState(false)

  const aspectClass =
    aspect === 'square'
      ? 'aspect-square'
      : aspect === 'video'
        ? 'aspect-video'
        : 'aspect-[4/3]'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-slate-border bg-gradient-to-br from-navy-50 to-white shadow-lg',
        aspectClass,
        className
      )}
    >
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          {Icon ? <Icon size={48} className="text-navy-200" /> : null}
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  )
}
