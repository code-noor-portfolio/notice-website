/** Single source of truth for public pricing. Change once, update everywhere. */
export const PRICING = {
  desktopPrice: 49,
  updatesPrice: 19,
  currency: '€',
  maxDevices: 2,
  updatesIncludedMonths: 12,
} as const

export function formatPrice(amount: number): string {
  return `${amount} ${PRICING.currency}`
}
