import { Resend } from 'resend'
import { escapeHtml } from '@/lib/html'
import { formatSiretDisplay } from '@/lib/siret'

/**
 * Website-local Resend helpers.
 *
 * Commercial license delivery after Stripe payment is owned exclusively by
 * Cloud Functions (P0.5A: webhook → issueLicenseFromCheckout → Resend).
 * Do not add a public API route that sends license keys on demand.
 *
 * `sendLicenseEmail` remains for the gated simulated `/api/purchase` path only
 * (COMMERCE_ENABLED=false → 403).
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://notice.code-noor.com'
const FROM =
  process.env.RESEND_FROM || 'Notice <onboarding@resend.dev>'
const SUPPORT =
  process.env.SUPPORT_EMAIL || 'notice-code.noor@outlook.com'

function getResend(): Resend {
  const key = process.env.RESEND_API_KEY
  if (!key) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(key)
}

export async function sendLicenseEmail(params: {
  email: string
  licenseKey: string
  companyName: string
  siret: string
}): Promise<void> {
  const resend = getResend()
  const { error } = await resend.emails.send({
    from: FROM,
    to: params.email,
    subject: `Notice — Clé de licence pour ${params.companyName}`,
    html: licenseEmailHtml(params),
  })

  if (error) {
    throw new Error(error.message || 'Resend send failed')
  }
}

export async function sendContactEmail(params: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<void> {
  const resend = getResend()
  const { error } = await resend.emails.send({
    from: FROM,
    to: SUPPORT,
    replyTo: params.email,
    subject: params.subject || `Contact Notice — ${params.name}`,
    text: `Nom: ${params.name}\nEmail: ${params.email}\n\n${params.message}`,
  })
  if (error) {
    throw new Error(error.message || 'Resend send failed')
  }
}

function licenseEmailHtml(params: {
  email: string
  licenseKey: string
  companyName: string
  siret: string
}): string {
  const company = escapeHtml(params.companyName)
  const email = escapeHtml(params.email)
  const siret = escapeHtml(formatSiretDisplay(params.siret))
  const key = escapeHtml(params.licenseKey)
  const support = escapeHtml(SUPPORT)
  const site = escapeHtml(SITE_URL)

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F8F9FB;margin:0;padding:40px 20px">
  <div style="background:white;border-radius:12px;max-width:520px;margin:0 auto;padding:40px;border:1px solid #E4E7EC">
    <div style="font-size:20px;font-weight:700;color:#1E3A5F;margin-bottom:32px">Notice</div>
    <h1 style="font-size:22px;font-weight:600;color:#1D2939;margin:0 0 8px">Votre clé de licence</h1>
    <p style="color:#667085;font-size:14px;line-height:1.6;margin:0 0 16px">
      Bonjour,<br/><br/>
      Merci pour votre achat. Voici la licence Notice destinée à
      <strong style="color:#1D2939">${company}</strong>
      (SIRET <strong style="color:#1D2939">${siret}</strong>).
    </p>
    <p style="color:#667085;font-size:14px;line-height:1.6;margin:0 0 20px">
      Conservez cet email. L&apos;activation dans Notice exigera
      <strong>cette clé</strong> et <strong>exactement ce SIRET</strong>.
    </p>

    <div style="background:#F8F9FB;border-radius:8px;padding:16px;margin:0 0 20px;font-size:13px;color:#344054">
      <p style="margin:0 0 6px"><strong>Entreprise :</strong> ${company}</p>
      <p style="margin:0 0 6px"><strong>SIRET :</strong> ${siret}</p>
      <p style="margin:0"><strong>Email :</strong> ${email}</p>
    </div>

    <div style="background:#0F1F32;border-radius:10px;padding:24px;text-align:center;margin:24px 0">
      <div style="font-family:'Courier New',monospace;font-size:18px;font-weight:700;color:white;letter-spacing:0.08em">${key}</div>
      <div style="color:rgba(255,255,255,0.4);font-size:12px;margin-top:6px">Clé liée à votre SIRET — Licence à vie</div>
    </div>

    <div style="background:#F8F9FB;border-radius:8px;padding:20px;margin:20px 0;font-size:13px;color:#344054">
      <p style="margin:0 0 12px"><strong>1.</strong> Téléchargez Notice sur ${site}/telecharger</p>
      <p style="margin:0 0 12px"><strong>2.</strong> Installez le logiciel (Windows ou macOS)</p>
      <p style="margin:0"><strong>3.</strong> Au premier lancement, saisissez le SIRET <strong>${siret}</strong> et la clé ci-dessus</p>
    </div>

    <a href="${site}/telecharger" style="display:inline-block;background:#1E3A5F;color:white;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:600;font-size:14px">Télécharger Notice maintenant</a>

    <p style="color:#98A2B3;font-size:12px;margin-top:32px;padding-top:20px;border-top:1px solid #E4E7EC">
      Licence pour 2 ordinateurs. Support :
      <a href="mailto:${support}">${support}</a><br/>
      Notice — Code Noor · notice.code-noor.com
    </p>
  </div>
</body>
</html>`
}
