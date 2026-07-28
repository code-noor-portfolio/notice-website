'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Check, Monitor, Apple } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-navy-950 min-h-screen flex items-center pt-16">
      <div className="container-content py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/70 mb-8">
              <Check size={14} className="text-success" />
              Conforme facturation électronique 2026
            </div>

            <p className="text-navy-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Notice
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.12] mb-6">
              Le logiciel de devis et de facturation pensé pour les artisans qui
              veulent passer moins de temps devant leur ordinateur.
            </h1>

            <p className="text-xl font-semibold text-white/85 mb-3">
              Rapide. Local. Sans abonnement.
            </p>

            <div className="space-y-1.5 mb-8 text-white/60 text-sm leading-relaxed">
              <p>Créez vos devis et factures en quelques minutes.</p>
              <p>Vos données restent sur votre ordinateur.</p>
              <p>Aucun compte. Aucune dépendance au cloud.</p>
              <p>Licence à vie.</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                href="/acheter"
                size="lg"
                className="bg-white text-navy-700 hover:bg-slate-50"
              >
                Acheter Notice
              </Button>
              <Button
                href="/#fonctionnalites"
                variant="secondary"
                size="lg"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                Voir les fonctionnalités
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/45">
              {['Essai gratuit 30 jours', 'Sans carte bancaire', 'Windows & macOS'].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check size={13} className="text-success" />
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <div className="bg-[#2D2D3E] h-9 flex items-center px-4 gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="text-white/40 text-xs mx-auto">Notice</span>
              </div>
              <div className="flex h-80 bg-[#F8F9FB]">
                <div className="w-48 bg-[#1E3A5F] p-3 flex flex-col gap-1">
                  <div className="text-white text-xs font-semibold px-2 py-3 border-b border-white/10 mb-2">
                    Notice
                    <span className="block text-white/40 text-[10px] font-normal">
                      Martin Plomberie
                    </span>
                  </div>
                  {['Tableau de bord', 'Clients', 'Documents', 'Catalogue', 'Rappels'].map(
                    (item, i) => (
                      <div
                        key={item}
                        className={`text-xs px-3 py-2 rounded-md ${
                          i === 0 ? 'bg-white/12 text-white' : 'text-white/55'
                        }`}
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
                <div className="flex-1 p-4">
                  <div className="text-sm font-semibold text-[#1D2939] mb-3">
                    Tableau de bord
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: 'CA juin', value: '4 820 €' },
                      { label: 'En attente', value: '3' },
                      { label: 'Rappels', value: '2' },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="bg-white rounded-lg p-2.5 border border-[#E4E7EC]"
                      >
                        <div className="text-[9px] text-[#667085]">{kpi.label}</div>
                        <div className="text-sm font-semibold text-[#1D2939]">
                          {kpi.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-white rounded-lg border border-[#E4E7EC] p-3">
                    <div className="text-[10px] font-medium text-[#1D2939] mb-2">
                      Activité récente
                    </div>
                    {[
                      {
                        num: 'FAC-2026-0042',
                        client: 'SCI Les Jardins',
                        amount: '1 143 €',
                        status: 'Envoyée',
                        color: '#185FA5',
                      },
                      {
                        num: 'DEV-2026-0031',
                        client: 'M. Dupont Jean',
                        amount: '890 €',
                        status: 'Accepté',
                        color: '#027A48',
                      },
                      {
                        num: 'FAC-2026-0041',
                        client: 'Mairie de Pau',
                        amount: '2 340 €',
                        status: 'En retard',
                        color: '#C01048',
                      },
                    ].map((doc) => (
                      <div
                        key={doc.num}
                        className="flex items-center gap-2 py-1.5 border-b border-[#F2F4F7] last:border-0"
                      >
                        <span className="text-[9px] font-mono text-[#185FA5] w-24">
                          {doc.num}
                        </span>
                        <span className="text-[9px] text-[#667085] flex-1">
                          {doc.client}
                        </span>
                        <span className="text-[9px] font-mono">{doc.amount}</span>
                        <span
                          className="text-[9px] font-medium"
                          style={{ color: doc.color }}
                        >
                          {doc.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 justify-center">
              <span className="flex items-center gap-1.5 text-white/35 text-xs">
                <Monitor size={14} /> Windows 10 / 11
              </span>
              <span className="w-px h-3 bg-white/15" />
              <span className="flex items-center gap-1.5 text-white/35 text-xs">
                <Apple size={14} /> macOS 12+
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
