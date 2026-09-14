import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { mapAdminErrorCode } from './errors'
import { parseAdminSearchQuery } from './search'

describe('P0.4B admin error mapping', () => {
  it('maps COMPANY_SIRET_TAKEN', () => {
    assert.match(
      mapAdminErrorCode('COMPANY_SIRET_TAKEN'),
      /SIRET est déjà associé/
    )
  })

  it('maps TRIAL_ALREADY_USED', () => {
    assert.match(mapAdminErrorCode('TRIAL_ALREADY_USED'), /essai a déjà/)
  })

  it('maps LICENSE_NOT_FOUND', () => {
    assert.match(mapAdminErrorCode('LICENSE_NOT_FOUND'), /Aucune licence/)
  })

  it('maps UNAUTHORIZED / FORBIDDEN', () => {
    assert.match(mapAdminErrorCode('UNAUTHORIZED'), /pas autorisé/)
    assert.match(mapAdminErrorCode('ADMIN_FORBIDDEN'), /pas autorisé/)
  })
})

describe('P0.4B admin search parsing', () => {
  it('rejects full license key', () => {
    const r = parseAdminSearchQuery('NOTICE-ABCD-EFGH-IJKL-MNOP')
    assert.equal(r.ok, false)
  })

  it('parses SIRET', () => {
    const r = parseAdminSearchQuery('44306184100047')
    assert.equal(r.ok, true)
    if (r.ok) assert.equal(r.params.siret, '44306184100047')
  })

  it('parses email', () => {
    const r = parseAdminSearchQuery('client@example.com')
    assert.equal(r.ok, true)
    if (r.ok) assert.equal(r.params.email, 'client@example.com')
  })

  it('parses keyPrefix', () => {
    const r = parseAdminSearchQuery('NOTICE-ABCD')
    assert.equal(r.ok, true)
    if (r.ok) assert.equal(r.params.keyPrefix, 'NOTICE-ABCD')
  })

  it('parses Stripe ids', () => {
    const session = parseAdminSearchQuery('cs_test_abc')
    assert.equal(session.ok, true)
    if (session.ok) assert.equal(session.params.stripeSessionId, 'cs_test_abc')

    const cus = parseAdminSearchQuery('cus_123')
    assert.equal(cus.ok, true)
    if (cus.ok) assert.equal(cus.params.stripeCustomerId, 'cus_123')

    const sub = parseAdminSearchQuery('sub_456')
    assert.equal(sub.ok, true)
    if (sub.ok) assert.equal(sub.params.stripeSubscriptionId, 'sub_456')
  })

  it('parses licenseId', () => {
    const r = parseAdminSearchQuery('lic_abc123')
    assert.equal(r.ok, true)
    if (r.ok) assert.equal(r.params.licenseId, 'lic_abc123')
  })
})

describe('P0.4B security invariants (frontend)', () => {
  it('ADMIN_SUPPORT_EMAIL is configurable single constant', async () => {
    const { ADMIN_SUPPORT_EMAIL } = await import('../../constants/admin')
    assert.equal(ADMIN_SUPPORT_EMAIL, 'notice-code.noor@outlook.com')
  })

  it('public env names must not look like secrets', () => {
    const forbidden = [
      'STRIPE_SECRET_KEY',
      'RESEND_API_KEY',
      'FIREBASE_ADMIN_PRIVATE_KEY',
      'ADMIN_CLI_TOKEN',
      'LICENSE_KEY_PEPPER',
    ]
    for (const key of forbidden) {
      assert.equal(
        process.env[`NEXT_PUBLIC_${key}`],
        undefined,
        `NEXT_PUBLIC_${key} must not be set`
      )
    }
  })
})
