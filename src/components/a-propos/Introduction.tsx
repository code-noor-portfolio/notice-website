import { Container } from '@/components/ui/Container'

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
            Un logiciel de gestion doit vous aider dans votre activité, pas la
            compliquer davantage.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Notice a été pensé pour les artisans indépendants qui veulent
            gérer simplement leurs clients, leurs chantiers, leurs rendez-vous
            et leur facturation, avec un outil adapté à leur façon de
            travailler.
          </p>
          <p className="mt-10 text-lg font-medium leading-snug text-fg">
            Tout ce dont vous avez besoin. Rien de plus.
          </p>
        </div>
      </Container>
    </section>
  )
}
