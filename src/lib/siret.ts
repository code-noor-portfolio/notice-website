/** French SIRET: 14 digits + Luhn (aligned with Notice LicenseService). */

export function normalizeSiret(input: string): string {
  return input.replace(/\s+/g, '').trim()
}

export function formatSiretDisplay(siret: string): string {
  const n = normalizeSiret(siret)
  if (n.length !== 14) return siret
  return `${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6, 9)} ${n.slice(9, 14)}`
}

function luhnCheck(digits: string): boolean {
  if (!/^\d+$/.test(digits)) return false
  let sum = 0
  let alternate = false
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i]!, 10)
    if (alternate) {
      n *= 2
      if (n > 9) n -= 9
    }
    sum += n
    alternate = !alternate
  }
  return sum % 10 === 0
}

export function isValidSiret(siret: string): boolean {
  const normalized = normalizeSiret(siret)
  if (!/^\d{14}$/.test(normalized)) return false
  return luhnCheck(normalized)
}
