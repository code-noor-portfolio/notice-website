import { NextRequest, NextResponse } from 'next/server'
import { generateLicenseKey, keyPrefix } from '@/lib/license'
import { sendLicenseEmail } from '@/lib/email'
import { isValidSiret, normalizeSiret } from '@/lib/siret'
import { savePurchase } from '@/lib/purchase-store'
import { COMMERCE_ENABLED } from '@/constants/site'

/**
 * Simulated purchase (pre-Stripe) — NOT the commercial issuance path.
 * Commerce must stay closed until Stripe webhook → Firebase is live.
 */
export async function POST(req: NextRequest) {
  if (!COMMERCE_ENABLED) {
    return NextResponse.json(
      {
        error:
          'Commerce temporairement fermé. Aucune licence ne peut être émise depuis le site.',
      },
      { status: 403 }
    )
  }

  try {
    const body = await req.json()
    const email = String(body.email || '')
      .trim()
      .toLowerCase()
    const companyName = String(body.companyName || '').trim()
    const siret = normalizeSiret(String(body.siret || ''))

    if (!companyName || companyName.length < 2 || companyName.length > 200) {
      return NextResponse.json(
        { error: 'Nom d’entreprise invalide' },
        { status: 400 }
      )
    }
    if (!isValidSiret(siret)) {
      return NextResponse.json(
        { error: 'SIRET invalide (14 chiffres, contrôle Luhn)' },
        { status: 400 }
      )
    }
    if (!email || !email.includes('@') || email.length > 254) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const licenseKey = generateLicenseKey()
    const prefix = keyPrefix(licenseKey)

    await savePurchase({
      licenseKey,
      keyPrefix: prefix,
      siret,
      companyName,
      email,
    })

    await sendLicenseEmail({
      email,
      licenseKey,
      companyName,
      siret,
    })

    // Never return the plaintext key to the browser.
    return NextResponse.json({
      success: true,
      keyPrefix: prefix,
      companyName,
      siret,
    })
  } catch (error) {
    console.error('Purchase error:', error)
    const message =
      error instanceof Error && error.message.includes('RESEND_API_KEY')
        ? 'Envoi email non configuré (RESEND_API_KEY).'
        : 'Erreur serveur'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
