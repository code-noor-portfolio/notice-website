import { randomBytes } from 'crypto'

/** Crockford Base32 (same alphabet as Notice LicenseService — for format continuity). */
const ALPHABET = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'

/**
 * Temporary key generator for the website API route.
 *
 * Format: NOTICE-XXXX-XXXX-XXXX-XXXX
 *
 * When Firestore + Cloud Functions are ready, replace this call site with
 * LicenseService.issue() — do not keep two long-lived generators in prod.
 */
export function generateLicenseKey(): string {
  const bytes = randomBytes(16)
  const chars: string[] = []
  for (let i = 0; i < 16; i++) {
    chars.push(ALPHABET[bytes[i]! % ALPHABET.length]!)
  }
  const segments = [
    chars.slice(0, 4).join(''),
    chars.slice(4, 8).join(''),
    chars.slice(8, 12).join(''),
    chars.slice(12, 16).join(''),
  ]
  return `NOTICE-${segments.join('-')}`
}

export function keyPrefix(key: string): string {
  const parts = key.trim().toUpperCase().split('-')
  return parts.length >= 2 ? `${parts[0]}-${parts[1]}` : key.slice(0, 11)
}
