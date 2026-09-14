import { NOTICE_API_BASE } from '@/constants/admin'
import { mapAdminErrorCode } from '@/lib/admin/errors'
import type { AdminSearchParams } from '@/lib/admin/search'

export class AdminApiError extends Error {
  readonly code: string
  readonly status: number
  readonly requestId: string | null

  constructor(
    code: string,
    message: string,
    status: number,
    requestId: string | null
  ) {
    super(message)
    this.name = 'AdminApiError'
    this.code = code
    this.status = status
    this.requestId = requestId
  }
}

export type AdminLicenseSummary = {
  licenseId: string
  keyPrefix: string
  kind?: string
  plan?: string
  status?: string
  maxDevices?: number
  devicesActive?: number
  companyId?: string | null
  company?: {
    companyId: string
    legalName?: string | null
    siret?: string
    contactName?: string | null
    contactEmail?: string | null
  } | null
  legalName?: string | null
  contactEmail?: string | null
  siret?: string | null
  expectedSiret?: string | null
  createdAt?: string | null
  issuedAt?: string | null
  activatedAt?: string | null
  lastSeenAt?: string | null
  suspendedAt?: string | null
  revokedAt?: string | null
  updatesIncludedUntil?: string | null
  updatesEntitledUntil?: string | null
  paymentProvider?: string | null
  paymentReference?: string | null
  stripeSessionId?: string | null
  stripePaymentIntentId?: string | null
  stripeCustomerId?: string | null
  stripeSubscriptionId?: string | null
  devices?: AdminDevice[]
  recentEvents?: Array<Record<string, unknown>>
}

export type AdminDevice = {
  deviceId: string
  platform?: string
  kind?: string
  deviceName?: string
  appVersion?: string
  activatedAt?: string | null
  lastSeenAt?: string | null
  revokedAt?: string | null
  revokedBy?: string | null
  status?: string
}

export type AdminPaymentDiagnosis = {
  licenseId: string
  licenseStatus?: string
  paymentProvider?: string | null
  paymentReference?: string | null
  stripeSessionId?: string | null
  stripePaymentIntentId?: string | null
  stripeCustomerId?: string | null
  stripeSubscriptionId?: string | null
  updatesIncludedUntil?: string | null
  updatesEntitledUntil?: string | null
}

export type AdminTrialView = {
  found: boolean
  siret: string
  trialId?: string
  startedAt?: string | null
  expiresAt?: string | null
  createdAt?: string | null
  status?: string | null
}

type GetIdToken = () => Promise<string>

function newRequestId(): string {
  const rand = Math.random().toString(36).slice(2, 10)
  return `req_${Date.now().toString(36)}_${rand}`
}

async function adminFetch<T>(
  path: string,
  getIdToken: GetIdToken,
  init?: RequestInit
): Promise<T> {
  const token = await getIdToken()
  const requestId = newRequestId()
  let res: Response
  try {
    res = await fetch(`${NOTICE_API_BASE}${path}`, {
      ...init,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'X-Request-Id': requestId,
        ...(init?.headers || {}),
      },
    })
  } catch {
    throw new AdminApiError(
      'SERVER_UNAVAILABLE',
      mapAdminErrorCode('SERVER_UNAVAILABLE'),
      0,
      requestId
    )
  }

  const rid = res.headers.get('X-Request-Id') || requestId
  const json = (await res.json().catch(() => ({}))) as {
    ok?: boolean
    data?: T
    error?: { code?: string; message?: string }
    code?: string
    message?: string
  }

  if (!res.ok) {
    const code =
      json.error?.code || json.code || (res.status === 401 || res.status === 403
        ? 'ADMIN_FORBIDDEN'
        : 'INVALID_REQUEST')
    throw new AdminApiError(
      code,
      mapAdminErrorCode(code, json.error?.message || json.message),
      res.status,
      rid
    )
  }

  // Backend sendOk wraps as { ok, requestId, data }
  if (json && typeof json === 'object' && 'data' in json) {
    return json.data as T
  }
  return json as T
}

export function createAdminApi(getIdToken: GetIdToken) {
  return {
    searchLicenses(params: AdminSearchParams) {
      const qs = new URLSearchParams()
      for (const [k, v] of Object.entries(params)) {
        if (v) qs.set(k, v)
      }
      return adminFetch<{ results: AdminLicenseSummary[] }>(
        `/v1/admin/licenses/search?${qs.toString()}`,
        getIdToken
      )
    },

    getLicense(licenseId: string) {
      return adminFetch<AdminLicenseSummary>(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}`,
        getIdToken
      )
    },

    getPayment(licenseId: string) {
      return adminFetch<AdminPaymentDiagnosis>(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}/payment`,
        getIdToken
      )
    },

    suspend(licenseId: string, reason: string) {
      return adminFetch(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}/suspend`,
        getIdToken,
        { method: 'POST', body: JSON.stringify({ reason }) }
      )
    },

    unsuspend(licenseId: string, reason: string) {
      return adminFetch(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}/unsuspend`,
        getIdToken,
        { method: 'POST', body: JSON.stringify({ reason }) }
      )
    },

    revoke(licenseId: string, reason: string) {
      return adminFetch(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}/revoke`,
        getIdToken,
        { method: 'POST', body: JSON.stringify({ reason }) }
      )
    },

    reissue(licenseId: string, reason: string) {
      return adminFetch<{
        licenseId: string
        keyPrefix: string
        emailSent: boolean
        emailError?: string | null
      }>(
        `/v1/admin/licenses/${encodeURIComponent(licenseId)}/reissue`,
        getIdToken,
        { method: 'POST', body: JSON.stringify({ reason }) }
      )
    },

    revokeDevice(licenseId: string, deviceId: string, reason: string) {
      return adminFetch('/v1/admin/devices/revoke', getIdToken, {
        method: 'POST',
        body: JSON.stringify({ licenseId, deviceId, reason }),
      })
    },

    migrateSiret(companyId: string, newSiret: string, reason: string) {
      return adminFetch('/v1/admin/companies/migrate-siret', getIdToken, {
        method: 'POST',
        body: JSON.stringify({ companyId, newSiret, reason }),
      })
    },

    getTrial(siret: string) {
      return adminFetch<AdminTrialView>(
        `/v1/admin/trials/${encodeURIComponent(siret)}`,
        getIdToken
      )
    },
  }
}

export type AdminApi = ReturnType<typeof createAdminApi>
