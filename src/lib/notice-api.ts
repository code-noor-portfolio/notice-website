export interface PurchasePayload {
  companyName: string
  siret: string
  email: string
}

export interface PurchaseResult {
  success: boolean
  keyPrefix?: string
  companyName?: string
  siret?: string
}

export interface VerifyResult {
  ok: boolean
  companyName?: string
  keyPrefix?: string
  error?: string
}

/**
 * Calls the Next.js API route (simulated payment → Resend).
 * The license key is emailed by the server — never returned to the browser.
 */
export async function purchaseLicense(
  payload: PurchasePayload
): Promise<PurchaseResult> {
  let res: Response
  try {
    res = await fetch('/api/purchase', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
  } catch {
    throw new Error(
      'Impossible de joindre le serveur. Vérifiez votre connexion.'
    )
  }

  let json: PurchaseResult & { error?: string } = { success: false }
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
    companyName: json.companyName,
    siret: json.siret,
  }
}

export async function verifyLicense(
  licenseKey: string,
  siret: string
): Promise<VerifyResult> {
  const res = await fetch('/api/license/verify', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ licenseKey, siret }),
  })
  const json = (await res.json().catch(() => ({}))) as VerifyResult
  if (!res.ok) {
    return { ok: false, error: json.error || 'Vérification impossible' }
  }
  return json
}
