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
  { label: 'Fonctionnalités', href: '/fonctionnalites' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Facturation électronique', href: '/facturation-electronique' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'FAQ', href: '/faq' },
] as const

/** Destination temporaire des CTA Acheter / Télécharger / Essayer. */
export const CTA_COMING_SOON_HREF = '/bientot-disponible' as const

export const CTA = {
  essayer: { label: 'Essayer Notice', href: CTA_COMING_SOON_HREF },
  telecharger: { label: 'Télécharger', href: CTA_COMING_SOON_HREF },
  decouvrir: { label: 'Découvrir Notice', href: '/fonctionnalites' },
} as const

/** Vitrine : parcours achat/téléchargement réels encore fermés.
 *  Les CTA publics pointent vers /bientot-disponible.
 *  Quand le commerce ouvrira, retirer aussi les redirects /acheter et /telecharger
 *  dans next.config.mjs et reconnecter ces href. */
export const COMMERCE_ENABLED = false

export function isCommerceHref(href?: string): boolean {
  if (COMMERCE_ENABLED || !href) return false
  return href === '/telecharger' || href.startsWith('/acheter')
}
