/**
 * Stripe Checkout stubs — ready for test mode later.
 *
 * Target flow (when licence stack is final):
 * 1. createCheckoutSession(email) → Stripe Checkout URL
 * 2. User pays (test or live)
 * 3. Webhook (Cloud Function) → LicenseService.issue → email
 * 4. Return URL → /acheter/succes
 *
 * Until then, the website uses POST /api/purchase (Resend only).
 */

export interface CheckoutSessionParams {
  email: string
  successUrl: string
  cancelUrl: string
}

export interface CheckoutSessionResult {
  url: string
  sessionId: string
}

/** Not implemented — throws until Stripe test mode is wired. */
export async function createCheckoutSession(
  _params: CheckoutSessionParams
): Promise<CheckoutSessionResult> {
  void _params
  throw new Error(
    'Stripe Checkout is not configured yet. Use the simulated purchase flow.'
  )
}

export const STRIPE_ENABLED =
  process.env.NEXT_PUBLIC_STRIPE_ENABLED === 'true'
