import { NextRequest, NextResponse } from 'next/server'
import { isValidLicenseKeyFormat } from '@/lib/license'
import { isValidSiret } from '@/lib/siret'
import { verifyLicenseKeyAndSiret } from '@/lib/purchase-store'

/**
 * Vérifie qu'une clé a bien été émise pour un SIRET donné.
 * Body: { licenseKey, siret }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const licenseKey = String(body.licenseKey || '')
    const siret = String(body.siret || '')

    if (!isValidLicenseKeyFormat(licenseKey)) {
      return NextResponse.json(
        { ok: false, error: 'Format de clé invalide' },
        { status: 400 }
      )
    }
    if (!isValidSiret(siret)) {
      return NextResponse.json(
        { ok: false, error: 'SIRET invalide' },
        { status: 400 }
      )
    }

    const result = await verifyLicenseKeyAndSiret(licenseKey, siret)
    if (!result.ok) {
      const message =
        result.code === 'SIRET_MISMATCH'
          ? 'Cette clé n’est pas associée à ce SIRET.'
          : 'Clé inconnue ou non enregistrée.'
      return NextResponse.json(
        { ok: false, error: message, code: result.code },
        { status: 404 }
      )
    }

    return NextResponse.json({
      ok: true,
      companyName: result.companyName,
      keyPrefix: result.keyPrefix,
    })
  } catch (error) {
    console.error('Verify error:', error)
    return NextResponse.json({ ok: false, error: 'Erreur serveur' }, { status: 500 })
  }
}
