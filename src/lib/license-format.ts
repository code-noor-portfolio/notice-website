/** Crockford Base32 (same alphabet as Notice LicenseService). */
export const LICENSE_ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

export function normalizeLicenseKey(key: string): string {
  return key.trim().toUpperCase().replace(/\s+/g, '')
}

export function isValidLicenseKeyFormat(key: string): boolean {
  const normalized = normalizeLicenseKey(key)
  const re = new RegExp(
    `^NOTICE-[${LICENSE_ALPHABET}]{4}-[${LICENSE_ALPHABET}]{4}-[${LICENSE_ALPHABET}]{4}-[${LICENSE_ALPHABET}]{4}$`
  )
  return re.test(normalized)
}

export function keyPrefix(key: string): string {
  const parts = normalizeLicenseKey(key).split('-')
  return parts.length >= 2 ? `${parts[0]}-${parts[1]}` : key.slice(0, 11)
}
