'use client'

import { motion } from 'framer-motion'
import { WifiOff, UserX, HardDrive } from 'lucide-react'
import { SectionTitle } from '@/components/ui/SectionTitle'

const cards = [
  {
    icon: WifiOff,
    title: 'Travaillez, même sans Internet',
    description:
      "Tout fonctionne localement. Sur chantier, en cave, en zone blanche — Notice est toujours disponible. Vos données ne dépendent d'aucun serveur.",
    color: 'text-navy-500 bg-navy-50',
  },
  {
    icon: UserX,
    title: 'Aucune création de compte',
    description:
      "Téléchargez. Installez. Travaillez. Pas d'email de confirmation, pas de mot de passe à gérer, pas de RGPD à accepter chaque mois.",
    color: 'text-success bg-green-50',
  },
  {
    icon: HardDrive,
    title: 'Vos données vous appartiennent',
    description:
      "Vous choisissez où sauvegarder, où envoyer vos factures électroniques, comment organiser vos fichiers. Aucun enfermement propriétaire.",
    color: 'text-navy-700 bg-navy-50',
  },
]

export function WhyNotice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content">
        <SectionTitle
          label="Pourquoi Notice ?"
          title="Un logiciel pensé pour les artisans, pas pour les DSI."
          description="Beaucoup de logiciels savent faire des devis. Notice fait mieux : il fonctionne sans internet, sans compte, et vos données restent chez vous."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-border"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${card.color}`}
              >
                <card.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-text mb-3">
                {card.title}
              </h3>
              <p className="text-slate-secondary text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
