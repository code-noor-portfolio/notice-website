import { randomBytes } from 'crypto'
import { LICENSE_ALPHABET } from '@/lib/license-format'

export {
  keyPrefix,
  normalizeLicenseKey,
  isValidLicenseKeyFormat,
} from '@/lib/license-format'

/**
 * Temporary key generator for the website API route.
 * Format: NOTICE-XXXX-XXXX-XXXX-XXXX
 */
export function generateLicenseKey(): string {
  const bytes = randomBytes(16)
  const chars: string[] = []
  for (let i = 0; i < 16; i++) {
    chars.push(LICENSE_ALPHABET[bytes[i]! % LICENSE_ALPHABET.length]!)
  }
  const segments = [
    chars.slice(0, 4).join(''),
    chars.slice(4, 8).join(''),
    chars.slice(8, 12).join(''),
    chars.slice(12, 16).join(''),
  ]
  return `NOTICE-${segments.join('-')}`
}
