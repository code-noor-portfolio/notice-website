/**
 * Parse a free-text support query into the admin search API params.
 * Never sends a full license key — rejects NOTICE-… long keys.
 */

export type AdminSearchParams = {
  licenseId?: string
  keyPrefix?: string
  siret?: string
  email?: string
  stripeSessionId?: string
  stripeCustomerId?: string
  stripeSubscriptionId?: string
}

const FULL_KEY = /^NOTICE-[A-Z0-9-]{10,}$/i
const SIRET = /^\d{14}$/
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const SESSION = /^cs_(test|live)_/i
const CUSTOMER = /^cus_/i
const SUBSCRIPTION = /^sub_/i
const KEY_PREFIX = /^NOTICE-[A-Z0-9]{4}$/i
const LICENSE_ID = /^lic[_-]?[a-zA-Z0-9_-]+$/i

export function parseAdminSearchQuery(
  raw: string
): { ok: true; params: AdminSearchParams } | { ok: false; error: string } {
  const q = raw.trim()
  if (!q) {
    return { ok: false, error: 'Saisissez un critère de recherche.' }
  }
  if (FULL_KEY.test(q)) {
    return {
      ok: false,
      error:
        'La clé complète ne peut pas être utilisée. Cherchez par préfixe (NOTICE-XXXX) ou identifiant.',
    }
  }

  const params: AdminSearchParams = {}

  if (EMAIL.test(q)) {
    params.email = q.toLowerCase()
  } else if (SIRET.test(q.replace(/\s/g, ''))) {
    params.siret = q.replace(/\s/g, '')
  } else if (SESSION.test(q)) {
    params.stripeSessionId = q
  } else if (CUSTOMER.test(q)) {
    params.stripeCustomerId = q
  } else if (SUBSCRIPTION.test(q)) {
    params.stripeSubscriptionId = q
  } else if (KEY_PREFIX.test(q)) {
    params.keyPrefix = q.toUpperCase()
  } else if (LICENSE_ID.test(q) || q.startsWith('lic')) {
    params.licenseId = q
  } else if (q.toUpperCase().startsWith('NOTICE-') && q.length <= 12) {
    params.keyPrefix = q.toUpperCase()
  } else {
    // Prefer licenseId for opaque IDs; also try email-like fallbacks already handled.
    params.licenseId = q
  }

  return { ok: true, params }
}
