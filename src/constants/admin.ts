/**
 * Back-office Notice — configuration publique uniquement.
 * Aucun secret backend (Stripe, Resend, Admin SDK, pepper, etc.).
 */

/** Email support affiché partout dans le BO (configurable en un seul endroit). */
export const ADMIN_SUPPORT_EMAIL =
  process.env.NEXT_PUBLIC_ADMIN_SUPPORT_EMAIL?.trim() ||
  'notice-code.noor@outlook.com'

/**
 * Base URL Cloud Functions `api` (sans `/v1`).
 * Ex. prod: https://europe-west1-notice-1c5ae.cloudfunctions.net/api
 * Ex. emu:  http://127.0.0.1:5001/notice-1c5ae/europe-west1/api
 */
export const NOTICE_API_BASE =
  process.env.NEXT_PUBLIC_NOTICE_API_BASE?.replace(/\/$/, '') ||
  'https://europe-west1-notice-1c5ae.cloudfunctions.net/api'

export const ADMIN_ROUTES = {
  login: '/admin/login',
  home: '/admin',
  license: (id: string) => `/admin/licenses/${encodeURIComponent(id)}`,
  trial: (siret: string) => `/admin/trials/${encodeURIComponent(siret)}`,
} as const
