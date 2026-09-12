import { Container } from '@/components/ui/Container'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-16 pt-28 md:pb-20 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Tarifs
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Un logiciel que vous achetez.
            <span className="mt-1 block">Pas que vous louez.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Notice fonctionne avec une licence définitive, sans abonnement
            obligatoire. Vous achetez votre logiciel et gardez le contrôle de
            votre activité.
          </p>
          <p className="mt-6 text-sm text-fg-tertiary">
            549&nbsp;€ HT · Licence définitive · Windows & macOS
          </p>
        </div>
      </Container>
    </section>
  )
}
