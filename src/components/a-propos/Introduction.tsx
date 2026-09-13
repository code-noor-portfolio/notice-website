import { Container } from '@/components/ui/Container'
import { SITE } from '@/constants/site'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            À propos de Notice
          </p>
          <h1 className="mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Notice est né d’une idée simple.
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-fg-secondary">
            Un logiciel de gestion ne devrait pas ajouter de complexité à une
            activité qui en demande déjà beaucoup.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Notice a été pensé pour les artisans indépendants qui veulent
            simplement gérer leurs clients, leurs chantiers, leurs rendez-vous
            et leur facturation, sans devoir apprendre un logiciel
            disproportionné par rapport à leurs besoins.
          </p>
          <p className="mt-10 text-lg font-medium leading-snug text-fg">
            {SITE.philosophy}
          </p>
        </div>
      </Container>
    </section>
  )
}
