import type { Metadata } from 'next'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { Introduction } from '@/components/fonctionnalites/Introduction'
import { ClientsChantiers } from '@/components/fonctionnalites/ClientsChantiers'
import { RendezVous } from '@/components/fonctionnalites/RendezVous'
import { DevisFacturation } from '@/components/fonctionnalites/DevisFacturation'
import { Paiements } from '@/components/fonctionnalites/Paiements'
import { Maintenance } from '@/components/fonctionnalites/Maintenance'
import { TableauDeBord } from '@/components/fonctionnalites/TableauDeBord'
import { Sauvegardes } from '@/components/fonctionnalites/Sauvegardes'
import { Exports } from '@/components/fonctionnalites/Exports'
import { CtaFinal } from '@/components/fonctionnalites/CtaFinal'

const hasDashboardScreenshot = existsSync(
  path.join(process.cwd(), 'public/screens/dashboard.webp')
)

export const metadata: Metadata = {
  title: 'Fonctionnalités',
  description:
    'Clients, chantiers, rendez-vous, devis, factures, paiements et maintenance : découvrez ce que Notice permet au quotidien.',
  openGraph: {
    title: 'Fonctionnalités — Notice',
    description:
      'Les outils de Notice pour suivre votre activité, du client à la maintenance.',
  },
}

export default function FonctionnalitesPage() {
  return (
    <>
      <Introduction />
      <ClientsChantiers />
      <RendezVous />
      <DevisFacturation />
      <Paiements />
      <Maintenance />
      <TableauDeBord showScreenshot={hasDashboardScreenshot} />
      <Sauvegardes />
      <Exports />
      <CtaFinal />
    </>
  )
}
