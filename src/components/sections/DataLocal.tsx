'use client'

import { motion } from 'framer-motion'
import { HardDrive, Cloud } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function DataLocal() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-content">
        <SectionTitle
          label="Confidentialité"
          title="Vos données restent chez vous"
          description="Sans critiquer les outils cloud : juste expliquer où vivent vos devis et factures."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-slate-border p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center">
                <HardDrive size={20} />
              </div>
              <h3 className="font-semibold text-slate-text">Notice</h3>
            </div>
            <ol className="space-y-4">
              {[
                'Logiciel installé sur votre PC',
                'Base SQLite locale',
                'Votre ordinateur',
              ].map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-navy-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-secondary">{label}</span>
                  {i < 2 && (
                    <span className="sr-only">puis</span>
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-success font-medium">
              Aucun compte. Aucun serveur métier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-border p-8 opacity-90"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-secondary flex items-center justify-center">
                <Cloud size={20} />
              </div>
              <h3 className="font-semibold text-slate-text">Approche cloud typique</h3>
            </div>
            <ol className="space-y-4">
              {[
                'Compte utilisateur',
                'Connexion Internet',
                'Serveur externe',
                'Données hébergées ailleurs',
              ].map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-slate-tertiary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm text-slate-secondary">{label}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-xs text-slate-tertiary font-medium">
              Dépendance au réseau et au fournisseur.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
