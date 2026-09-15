import type { Metadata } from 'next'
import Link from 'next/link'
import { Monitor, Apple, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Télécharger',
  description: 'Téléchargez Notice pour Windows et macOS.',
}

const steps = [
  'Téléchargez l’installateur pour votre système',
  'Lancez l’installation (autorisez si demandé)',
  'Ouvrez Notice et saisissez votre email + clé de licence',
  'Commencez à créer vos devis',
]

const downloadCardClass =
  'flex cursor-pointer items-center gap-4 p-6 rounded-2xl border border-slate-border hover:border-navy-500 transition-all duration-150'

export default function TelechargerPage() {
  return (
    <section className="section-padding pt-28 bg-white">
      <div className="container-content max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-text mb-3">
          Télécharger Notice
        </h1>
        <p className="text-slate-secondary mb-12">
          Windows et macOS. Installation locale. Aucun compte requis.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          <Link
            href="/bientot-disponible"
            className={downloadCardClass}
            aria-label="Télécharger Notice pour Windows"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center">
              <Monitor size={22} />
            </div>
            <div>
              <p className="font-semibold text-slate-text">Windows</p>
              <p className="text-xs text-slate-secondary">.exe · Windows 10 / 11</p>
            </div>
          </Link>
          <Link
            href="/bientot-disponible"
            className={downloadCardClass}
            aria-label="Télécharger Notice pour macOS"
          >
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy-700 flex items-center justify-center">
              <Apple size={22} />
            </div>
            <div>
              <p className="font-semibold text-slate-text">macOS</p>
              <p className="text-xs text-slate-secondary">.dmg · macOS 12+</p>
            </div>
          </Link>
        </div>

        <h2 className="text-xl font-bold text-slate-text mb-4">Installation</h2>
        <ol className="space-y-3 mb-12">
          {steps.map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-sm text-slate-secondary">
              <span className="w-6 h-6 rounded-full bg-navy-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <h2 className="text-xl font-bold text-slate-text mb-4">
          Configuration minimale
        </h2>
        <ul className="space-y-2 mb-12">
          {[
            'Windows 10 ou supérieur / macOS 12 ou supérieur',
            '200 Mo d’espace disque libre',
            'Connexion Internet uniquement pour l’activation et les mises à jour',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-secondary">
              <Check size={15} className="text-success mt-0.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 text-sm">
          <div className="rounded-xl border border-slate-border p-5">
            <p className="font-medium text-slate-text mb-1">Checksum SHA-256</p>
            <p className="text-xs font-mono text-slate-tertiary break-all">
              (disponible à la publication de la v1.0.0)
            </p>
          </div>
          <div className="rounded-xl border border-slate-border p-5">
            <p className="font-medium text-slate-text mb-1">Version</p>
            <p className="text-xs text-slate-secondary">
              v1.0.0 — notes de version à venir
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-secondary mb-4">
            Pas encore de licence ?
          </p>
          <Button href="/bientot-disponible">Acheter Notice</Button>
        </div>
      </div>
    </section>
  )
}
