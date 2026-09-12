'use client'

import { useState } from 'react'
import { Check, Loader2, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { verifyLicense } from '@/lib/notice-api'
import { isValidSiret } from '@/lib/siret'
import { isValidLicenseKeyFormat } from '@/lib/license-format'

export default function VerifierPage() {
  const [licenseKey, setLicenseKey] = useState('')
  const [siret, setSiret] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{
    companyName?: string
    keyPrefix?: string
  } | null>(null)

  const inputClass =
    'w-full border border-slate-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setResult(null)

    if (!isValidLicenseKeyFormat(licenseKey)) {
      setError('Format de clé invalide (NOTICE-XXXX-XXXX-XXXX-XXXX).')
      return
    }
    if (!isValidSiret(siret)) {
      setError('SIRET invalide (14 chiffres).')
      return
    }

    setLoading(true)
    try {
      const res = await verifyLicense(licenseKey, siret)
      if (!res.ok) {
        setError(res.error || 'Vérification échouée')
      } else {
        setResult({
          companyName: res.companyName,
          keyPrefix: res.keyPrefix,
        })
      }
    } catch {
      setError('Impossible de vérifier pour le moment.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding pt-28 bg-slate-50 min-h-screen">
      <div className="container-content max-w-lg">
        <div className="bg-white rounded-2xl border border-slate-border shadow-sm p-8">
          <h1 className="text-2xl font-bold text-slate-text mb-2">
            Vérifier une licence
          </h1>
          <p className="text-sm text-slate-secondary mb-8">
            Saisissez votre clé et le SIRET de l&apos;entreprise pour confirmer
            qu&apos;ils sont bien associés.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="licenseKey"
                className="block text-sm font-medium mb-1.5"
              >
                Clé de licence *
              </label>
              <input
                id="licenseKey"
                value={licenseKey}
                onChange={(e) => setLicenseKey(e.target.value)}
                placeholder="NOTICE-XXXX-XXXX-XXXX-XXXX"
                className={`${inputClass} font-mono`}
                required
              />
            </div>
            <div>
              <label htmlFor="siret" className="block text-sm font-medium mb-1.5">
                SIRET *
              </label>
              <input
                id="siret"
                value={siret}
                onChange={(e) => setSiret(e.target.value)}
                placeholder="123 456 789 00012"
                className={inputClass}
                required
              />
            </div>

            {error && (
              <div className="flex items-start gap-2 text-sm text-red-500">
                <X size={16} className="mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}

            {result && (
              <div className="flex items-start gap-2 text-sm text-success bg-green-50 rounded-lg p-3">
                <Check size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  Licence valide
                  {result.companyName ? (
                    <>
                      {' '}
                      pour <strong>{result.companyName}</strong>
                    </>
                  ) : null}
                  {result.keyPrefix ? <> ({result.keyPrefix}…)</> : null}.
                </span>
              </div>
            )}

            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                'Vérifier'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
