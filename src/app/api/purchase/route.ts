import { NextRequest, NextResponse } from 'next/server'
import { generateLicenseKey, keyPrefix } from '@/lib/license'
import { sendLicenseEmail } from '@/lib/email'

/**
 * Simulated purchase (pre-Stripe).
 *
 * Today:
 *   email → generate temp key → Resend
 *
 * Later (when licence stack is final):
 *   Stripe Checkout → webhook Cloud Function → LicenseService.issue → Resend
 *   This route becomes a thin proxy or disappears in favour of the webhook.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = String(body.email || '')
      .trim()
      .toLowerCase()

    if (!email || !email.includes('@') || email.length > 254) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const licenseKey = generateLicenseKey()
    await sendLicenseEmail({ email, licenseKey })

    // Never return the plaintext key to the browser.
    return NextResponse.json({
      success: true,
      keyPrefix: keyPrefix(licenseKey),
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
