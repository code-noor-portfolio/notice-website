import { NextResponse } from 'next/server'

const PRODUCTION_NOTICE_API_BASE =
  'https://europe-west1-notice-production-2026.cloudfunctions.net/api'

const REVALIDATE_SECONDS = 300

const PUBLIC_KEYS = [
  'channel',
  'latestVersion',
  'recommendedVersion',
  'minSupported',
  'mandatory',
  'downloadUrlMac',
  'downloadUrlWin',
  'notes',
  'sha256',
] as const

function noticeApiBase(): string {
  return (
    process.env.NOTICE_API_BASE?.replace(/\/$/, '') ||
    PRODUCTION_NOTICE_API_BASE
  )
}

function pickPublicRelease(raw: unknown): Record<string, unknown> | null {
  const root =
    raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {}
  const source =
    root.data && typeof root.data === 'object'
      ? (root.data as Record<string, unknown>)
      : root
  if (typeof source.latestVersion !== 'string' || !source.latestVersion) {
    return null
  }
  const out: Record<string, unknown> = {}
  for (const key of PUBLIC_KEYS) {
    if (key === 'mandatory') {
      out[key] = source[key] === true
      continue
    }
    if (key === 'sha256') {
      const sha = typeof source.sha256 === 'string' ? source.sha256 : ''
      if (sha) out.sha256 = sha
      continue
    }
    out[key] = typeof source[key] === 'string' ? source[key] : ''
  }
  if (!out.channel) out.channel = 'stable'
  return out
}

export async function GET() {
  try {
    const res = await fetch(`${noticeApiBase()}/v1/releases/stable`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: REVALIDATE_SECONDS },
    })

    if (res.status === 404) {
      return NextResponse.json(
        { error: 'Téléchargement temporairement indisponible' },
        { status: 404 }
      )
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Téléchargement temporairement indisponible' },
        { status: res.status >= 500 ? 503 : res.status }
      )
    }

    let json: unknown
    try {
      json = await res.json()
    } catch {
      return NextResponse.json(
        { error: 'Téléchargement temporairement indisponible' },
        { status: 502 }
      )
    }

    const data = pickPublicRelease(json)
    if (!data) {
      return NextResponse.json(
        { error: 'Téléchargement temporairement indisponible' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { data },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=60`,
        },
      }
    )
  } catch {
    return NextResponse.json(
      { error: 'Téléchargement temporairement indisponible' },
      { status: 503 }
    )
  }
}
