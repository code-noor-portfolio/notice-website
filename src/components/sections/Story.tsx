'use client'

import { motion } from 'framer-motion'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Story() {
  return (
    <section className="section-padding bg-white">
      <div className="container-content max-w-3xl">
        <SectionTitle
          label="Notre histoire"
          title="Pourquoi autant d’artisans détestent leur logiciel"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-slate-secondary leading-relaxed"
        >
          <p>
            Un devis le soir après le chantier. Une facture à envoyer avant le
            week-end. Et un logiciel qui demande un compte, une connexion, une
            mise à jour, un abonnement — puis encore dix clics pour une ligne
            de main-d’œuvre.
          </p>
          <p>
            Nous avons vu trop d’artisans perdre du temps devant l’écran alors
            qu’ils devraient être sur le terrain. Des interfaces conçues pour
            des DSI. Des données enfermées dans un cloud. Un prix qui revient
            chaque mois.
          </p>

          <blockquote className="border-l-4 border-navy-500 pl-6 py-2 my-10">
            <p className="text-xl md:text-2xl font-semibold text-slate-text leading-snug">
              « Un plombier qui fait une facture doit aller vite, pas passer 20
              minutes à comprendre un logiciel. »
            </p>
          </blockquote>

          <p>
            <strong className="text-slate-text">C’est pour ça que Notice existe.</strong>{' '}
            Un logiciel local, sans compte, licence à vie — pour passer moins de
            temps devant l’ordinateur et plus de temps sur les chantiers.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
