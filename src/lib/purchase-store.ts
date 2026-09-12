import { createHash } from 'crypto'
import { promises as fs } from 'fs'
import path from 'path'
import { normalizeLicenseKey } from '@/lib/license-format'
import { normalizeSiret } from '@/lib/siret'

export type PurchaseRecord = {
  keyHash: string
  keyPrefix: string
  siret: string
  companyName: string
  email: string
  createdAt: string
}

const memory = new Map<string, PurchaseRecord>()

function storePepper(): string {
  return (
    process.env.PURCHASE_STORE_SECRET ||
    process.env.RESEND_API_KEY ||
    'dev-only-purchase-pepper'
  )
}

export function hashLicenseKeyForStore(licenseKey: string): string {
  return createHash('sha256')
    .update(normalizeLicenseKey(licenseKey) + '|' + storePepper(), 'utf8')
    .digest('hex')
}

function filePath(): string {
  return path.join(process.cwd(), 'data', 'purchases.json')
}

async function readFileStore(): Promise<PurchaseRecord[]> {
  try {
    const raw = await fs.readFile(filePath(), 'utf8')
    const parsed = JSON.parse(raw) as PurchaseRecord[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeFileStore(records: PurchaseRecord[]): Promise<void> {
  try {
    await fs.mkdir(path.dirname(filePath()), { recursive: true })
    await fs.writeFile(filePath(), JSON.stringify(records, null, 2), 'utf8')
  } catch (err) {
    // Vercel / read-only FS: memory Map still works for warm instances.
    console.warn('purchase-store: could not persist to disk', err)
  }
}

export async function savePurchase(input: {
  licenseKey: string
  keyPrefix: string
  siret: string
  companyName: string
  email: string
}): Promise<PurchaseRecord> {
  const record: PurchaseRecord = {
    keyHash: hashLicenseKeyForStore(input.licenseKey),
    keyPrefix: input.keyPrefix,
    siret: normalizeSiret(input.siret),
    companyName: input.companyName.trim(),
    email: input.email.trim().toLowerCase(),
    createdAt: new Date().toISOString(),
  }

  memory.set(record.keyHash, record)

  const all = await readFileStore()
  const next = all.filter((r) => r.keyHash !== record.keyHash)
  next.push(record)
  await writeFileStore(next)

  return record
}

export async function findPurchaseByKey(
  licenseKey: string
): Promise<PurchaseRecord | null> {
  const keyHash = hashLicenseKeyForStore(licenseKey)
  const fromMemory = memory.get(keyHash)
  if (fromMemory) return fromMemory

  const all = await readFileStore()
  for (const r of all) {
    memory.set(r.keyHash, r)
  }
  return memory.get(keyHash) ?? null
}

/**
 * Vérifie qu'une clé a été émise pour ce SIRET exact.
 */
export async function verifyLicenseKeyAndSiret(
  licenseKey: string,
  siretRaw: string
): Promise<{
  ok: boolean
  code?: 'INVALID_KEY' | 'INVALID_SIRET' | 'NOT_FOUND' | 'SIRET_MISMATCH'
  companyName?: string
  keyPrefix?: string
}> {
  const siret = normalizeSiret(siretRaw)
  const record = await findPurchaseByKey(licenseKey)
  if (!record) {
    return { ok: false, code: 'NOT_FOUND' }
  }
  if (record.siret !== siret) {
    return { ok: false, code: 'SIRET_MISMATCH' }
  }
  return {
    ok: true,
    companyName: record.companyName,
    keyPrefix: record.keyPrefix,
  }
}
