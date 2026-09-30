import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  isPublicDownloadUrl,
  parseReleaseInfo,
} from './notice-api'

describe('parseReleaseInfo', () => {
  it('reads macOS and Windows download URLs from the nested envelope', () => {
    const info = parseReleaseInfo({
      data: {
        channel: 'stable',
        latestVersion: '1.0.0',
        recommendedVersion: '1.0.0',
        minSupported: '1.0.0',
        mandatory: false,
        downloadUrlMac: 'https://example.test/Notice.dmg',
        downloadUrlWin: 'https://example.test/Notice-setup.exe',
        notes: '',
        sha256Mac: 'mac-sha',
        sha256Win: 'win-sha',
      },
    })
    assert.equal(info.latestVersion, '1.0.0')
    assert.equal(info.downloadUrlMac, 'https://example.test/Notice.dmg')
    assert.equal(info.downloadUrlWin, 'https://example.test/Notice-setup.exe')
    assert.equal(info.sha256Mac, 'mac-sha')
    assert.equal(info.sha256Win, 'win-sha')
    assert.equal(isPublicDownloadUrl(info.downloadUrlWin), true)
  })

  it('ignores empty or non-https Windows URLs', () => {
    const empty = parseReleaseInfo({
      data: {
        latestVersion: '1.0.0',
        downloadUrlMac: 'https://example.test/Notice.dmg',
        downloadUrlWin: '',
      },
    })
    assert.equal(empty.downloadUrlWin, '')
    assert.equal(isPublicDownloadUrl(empty.downloadUrlWin), false)

    const insecure = parseReleaseInfo({
      data: {
        latestVersion: '1.0.0',
        downloadUrlWin: 'http://example.test/Notice.exe',
      },
    })
    assert.equal(insecure.downloadUrlWin, '')
  })

  it('rejects payloads without latestVersion', () => {
    assert.throws(
      () => parseReleaseInfo({ data: { downloadUrlMac: 'https://x' } }),
      /temporairement indisponible/
    )
  })
})
