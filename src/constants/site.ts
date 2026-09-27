export const SITE = {
  name: 'Notice',
  company: 'CODE NOOR',
  url: 'https://notice.code-noor.com',
  email: 'notice-code.noor@outlook.com',
  tagline:
    'Votre métier est déjà assez compliqué. Votre logiciel ne devrait pas l’être.',
  philosophy: 'Tout ce dont vous avez besoin. Rien de plus.',
} as const

export const NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonctionnalités', href: '/fonctionnalites' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Documentation', href: '/documentation' },
  { label: 'À propos', href: '/a-propos' },
] as const

export const CTA = {
  essayer: { label: 'Essayer Notice', href: '/telecharger' },
  telecharger: { label: 'Télécharger', href: '/telecharger' },
  acheter: { label: 'Acheter', href: '/acheter' },
  decouvrir: { label: 'Découvrir Notice', href: '/fonctionnalites' },
} as const

/** Vitrine : le parcours d’achat n’est pas encore ouvert.
 *  Les CTA Acheter restent visuels (isCommerceHref). */
export const COMMERCE_ENABLED = false

export function isCommerceHref(href?: string): boolean {
  if (COMMERCE_ENABLED || !href) return false
  return href.startsWith('/acheter')
}
