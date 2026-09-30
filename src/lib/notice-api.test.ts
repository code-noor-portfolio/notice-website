import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseReleaseInfo } from './notice-api'

describe('parseReleaseInfo', () => {
  it('reads the nested public envelope', () => {
    const info = parseReleaseInfo({
      data: {
        channel: 'stable',
        latestVersion: '1.0.0',
        recommendedVersion: '1.0.0',
        minSupported: '1.0.0',
        mandatory: false,
        downloadUrlMac: 'https://example.test/Notice.dmg',
        downloadUrlWin: '',
        notes: '',
        sha256: 'deadbeef',
      },
    })
    assert.equal(info.latestVersion, '1.0.0')
    assert.equal(info.downloadUrlMac, 'https://example.test/Notice.dmg')
    assert.equal(info.downloadUrlWin, '')
    assert.equal(info.sha256, 'deadbeef')
  })

  it('rejects payloads without latestVersion', () => {
    assert.throws(
      () => parseReleaseInfo({ data: { downloadUrlMac: 'https://x' } }),
      /temporairement indisponible/
    )
  })
})
