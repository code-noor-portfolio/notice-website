export interface PurchaseResult {
  success: boolean
  keyPrefix?: string
}

/**
 * Calls the Next.js API route (simulated payment → Resend).
 * The license key is emailed by the server — never returned to the browser.
 *
 * Later: Stripe Checkout + webhook (Firebase LicenseService) replaces this.
 */
export async function purchaseLicense(email: string): Promise<PurchaseResult> {
  let res: Response
  try {
    res = await fetch('/api/purchase', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
  } catch {
    throw new Error(
      'Impossible de joindre le serveur. Vérifiez votre connexion.'
    )
  }

  let json: { success?: boolean; keyPrefix?: string; error?: string } = {}
  try {
    json = await res.json()
  } catch {
    throw new Error('Réponse serveur invalide')
  }

  if (!res.ok) {
    throw new Error(json.error || 'Impossible de finaliser la commande')
  }

  return {
    success: Boolean(json.success ?? true),
    keyPrefix: json.keyPrefix,
  }
}
