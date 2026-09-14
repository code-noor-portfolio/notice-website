/** Single source of truth for public pricing (aligned with Commercial Spec V1). */
export const PRICING = {
  desktopPrice: 549,
  updatesPrice: 99,
  currency: '€',
  maxDevices: 2,
  updatesIncludedMonths: 12,
} as const

export function formatPrice(amount: number): string {
  return `${amount} ${PRICING.currency}`
}
