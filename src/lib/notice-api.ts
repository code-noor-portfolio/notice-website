export interface PurchasePayload {
  companyName: string
  siret: string
  email: string
}

export interface PurchaseResult {
  success: boolean
  keyPrefix?: string
  companyName?: string
  siret?: string
}

export interface VerifyResult {
  ok: boolean
  companyName?: string
  keyPrefix?: string
  error?: string
}

export interface LicenseCheckoutInput {
  companyName: string
  siret: string
  email: string
}

export interface LicenseCheckoutResult {
  checkoutUrl: string
}

const DEFAULT_NOTICE_API_BASE =
  'https://europe-west1-notice-1c5ae.cloudfunctions.net/api'

function noticeApiBase(): string {
  return (
    process.env.NEXT_PUBLIC_NOTICE_API_BASE?.replace(/\/$/, '') ||
    DEFAULT_NOTICE_API_BASE
  )
}

/** User-facing messages for checkout API error codes (no internal details). */
function checkoutErrorMessage(
  code: string | undefined,
  fallback?: string
): string {
  switch (code) {
    case 'FORBIDDEN':
      return 'Commerce temporairement fermé. Réessayez plus tard.'
    case 'INVALID_SIRET':
      return 'SIRET invalide.'
    case 'INVALID_REQUEST':
      return 'Informations de commande invalides.'
    case 'COMPANY_SIRET_TAKEN':
      return 'Une licence Notice existe déjà pour ce SIRET. Contactez le support si besoin.'
    case 'RATE_LIMITED':
      return 'Trop de tentatives. Réessayez dans quelques minutes.'
    case 'SERVER_UNAVAILABLE':
      return 'Paiement temporairement indisponible. Réessayez plus tard.'
    default:
      return (
        fallback ||
        'Impossible de démarrer le paiement. Veuillez réessayer.'
      )
  }
}

/**
 * Starts lifetime-license Stripe Checkout via Firebase (backend-owned price).
 * Browser only receives a hosted Checkout URL — never Price IDs or secrets.
 */
export async function createLicenseCheckout(
  input: LicenseCheckoutInput
): Promise<LicenseCheckoutResult> {
  const url = `${noticeApiBase()}/v1/purchase/checkout`
  const body = {
    companyName: input.companyName,
    siret: input.siret,
    email: input.email,
  }

  let res: Response
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch {
    throw new Error(
      'Impossible de joindre le serveur. Vérifiez votre connexion.'
    )
  }

  let json: {
    data?: { checkoutUrl?: unknown }
    checkoutUrl?: unknown
    error?: { code?: string; message?: string }
  } = {}
  try {
    json = (await res.json()) as typeof json
  } catch {
    throw new Error('Réponse serveur invalide')
  }

  if (!res.ok) {
    throw new Error(
      checkoutErrorMessage(json.error?.code, json.error?.message)
    )
  }

  const checkoutUrl =
    typeof json.data?.checkoutUrl === 'string'
      ? json.data.checkoutUrl.trim()
      : ''

  if (!checkoutUrl) {
    throw new Error('Réponse serveur invalide')
  }

  return { checkoutUrl }
}

/**
 * Calls the Next.js API route (simulated payment → Resend).
 * The license key is emailed by the server — never returned to the browser.
 */
export async function purchaseLicense(
  payload: PurchasePayload
): Promise<PurchaseResult> {
  let res: Response
  try {
    res = await fetch('/api/purchase', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error(
      'Impossible de joindre le serveur. Vérifiez votre connexion.'
    )
  }

  let json: PurchaseResult & { error?: string } = { success: false }
  try {
    json = await res.json()
  } catch {
    throw new Error('Réponse serveur invalide')
  }

  if (!res.ok) {
    throw new Error(json.error || 'Impossible de finaliser la commande')
  }

  return {
    success: Boolean(json.success ?? true),
    keyPrefix: json.keyPrefix,
    companyName: json.companyName,
    siret: json.siret,
  }
}

export interface ReleaseInfo {
  channel: string
  latestVersion: string
  recommendedVersion: string
  minSupported: string
  mandatory: boolean
  downloadUrlMac: string
  downloadUrlWin: string
  notes: string
  sha256Mac?: string
  sha256Win?: string
}

function asNonEmptyString(value: unknown): string {
  return typeof value === 'string' ? value : ''
}

export function isPublicDownloadUrl(url: string): boolean {
  return url.startsWith('https://')
}

export function parseReleaseInfo(json: unknown): ReleaseInfo {
  const root =
    json && typeof json === 'object' ? (json as Record<string, unknown>) : {}
  const dataRaw =
    root.data && typeof root.data === 'object'
      ? (root.data as Record<string, unknown>)
      : root
  const latestVersion = asNonEmptyString(dataRaw.latestVersion)
  if (!latestVersion) {
    throw new Error('Téléchargement temporairement indisponible')
  }
  const downloadUrlMac = asNonEmptyString(dataRaw.downloadUrlMac).trim()
  const downloadUrlWin = asNonEmptyString(dataRaw.downloadUrlWin).trim()
  return {
    channel: asNonEmptyString(dataRaw.channel) || 'stable',
    latestVersion,
    recommendedVersion: asNonEmptyString(dataRaw.recommendedVersion),
    minSupported: asNonEmptyString(dataRaw.minSupported),
    mandatory: dataRaw.mandatory === true,
    downloadUrlMac: isPublicDownloadUrl(downloadUrlMac) ? downloadUrlMac : '',
    downloadUrlWin: isPublicDownloadUrl(downloadUrlWin) ? downloadUrlWin : '',
    notes: asNonEmptyString(dataRaw.notes),
    sha256Mac: asNonEmptyString(dataRaw.sha256Mac) || undefined,
    sha256Win: asNonEmptyString(dataRaw.sha256Win) || undefined,
  }
}

/**
 * Public stable release via the Next.js server proxy.
 * Never call the Cloud Functions URL from the browser for downloads.
 */
export async function getStableRelease(): Promise<ReleaseInfo> {
  let res: Response
  try {
    res = await fetch('/api/releases/stable', {
      headers: { Accept: 'application/json' },
    })
  } catch {
    throw new Error('Téléchargement temporairement indisponible')
  }

  let json: unknown = {}
  try {
    json = await res.json()
  } catch {
    throw new Error('Téléchargement temporairement indisponible')
  }

  if (!res.ok) {
    throw new Error('Téléchargement temporairement indisponible')
  }

  return parseReleaseInfo(json)
}

export async function verifyLicense(
  licenseKey: string,
  siret: string
): Promise<VerifyResult> {
  const res = await fetch('/api/license/verify', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ licenseKey, siret }),
  })
  const json = (await res.json().catch(() => ({}))) as VerifyResult
  if (!res.ok) {
    return { ok: false, error: json.error || 'Vérification impossible' }
  }
  return json
}
