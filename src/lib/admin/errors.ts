/** Map backend error codes to support-facing French messages. */

const MESSAGES: Record<string, string> = {
  COMPANY_SIRET_TAKEN:
    'Ce SIRET est déjà associé à une licence Notice.',
  SIRET_ALREADY_USED:
    'Ce SIRET est déjà associé à une licence Notice.',
  TRIAL_ALREADY_USED: 'Un essai a déjà été utilisé pour ce SIRET.',
  LICENSE_NOT_FOUND: 'Aucune licence correspondante.',
  LICENCE_NOT_FOUND: 'Aucune licence correspondante.',
  DEVICE_NOT_FOUND: 'Appareil introuvable pour cette licence.',
  INVALID_SIRET: 'SIRET invalide.',
  INVALID_REQUEST: 'Requête invalide.',
  INVALID_STATE_TRANSITION:
    'Cette action n’est pas possible dans l’état actuel de la licence.',
  REISSUE_NOT_ALLOWED:
    'La réémission de clé n’est pas autorisée pour cette licence.',
  ADMIN_UNAUTHORIZED: 'Vous n’êtes pas autorisé à effectuer cette action.',
  ADMIN_FORBIDDEN: 'Vous n’êtes pas autorisé à effectuer cette action.',
  UNAUTHORIZED: 'Vous n’êtes pas autorisé à effectuer cette action.',
  FORBIDDEN: 'Vous n’êtes pas autorisé à effectuer cette action.',
  SERVER_UNAVAILABLE:
    'Service temporairement indisponible. Réessayez plus tard.',
}

export function mapAdminErrorCode(
  code: string | undefined,
  fallback?: string
): string {
  if (code && MESSAGES[code]) {
    return MESSAGES[code]
  }
  return fallback || 'Une erreur est survenue. Réessayez ou contactez le support.'
}

export function mapFirebaseAuthError(code: string | undefined): string {
  switch (code) {
    case 'auth/invalid-email':
      return 'Adresse e-mail invalide.'
    case 'auth/user-disabled':
      return 'Ce compte est désactivé.'
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'E-mail ou mot de passe incorrect.'
    case 'auth/too-many-requests':
      return 'Trop de tentatives. Réessayez plus tard.'
    case 'auth/network-request-failed':
      return 'Impossible de joindre le service d’authentification.'
    default:
      return 'Connexion impossible. Vérifiez vos identifiants.'
  }
}
