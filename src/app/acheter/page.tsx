import type { Metadata } from 'next'
import { PurchaseForm } from '@/components/PurchaseForm'
import { PRICING, formatPrice } from '@/constants/pricing'

export const metadata: Metadata = {
  title: 'Acheter Notice — Licence à vie',
  description: `Achetez Notice pour ${formatPrice(PRICING.desktopPrice)}. Licence à vie, 2 ordinateurs, sans abonnement.`,
}

export default function AcheterPage() {
  return (
    <section className="section-padding pt-28 bg-slate-50 min-h-screen">
      <div className="container-content max-w-lg">
        <div className="bg-white rounded-2xl border border-slate-border shadow-sm p-8">
          <h1 className="text-2xl font-bold text-slate-text mb-1">
            Finaliser l&apos;achat
          </h1>
          <p className="text-sm text-slate-secondary mb-8">
            Licence Notice — {formatPrice(PRICING.desktopPrice)} · paiement unique
          </p>
          <PurchaseForm />
        </div>
      </div>
    </section>
  )
}
