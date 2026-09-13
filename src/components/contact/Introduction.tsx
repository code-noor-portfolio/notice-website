import { Container } from '@/components/ui/Container'

export function Introduction() {
  return (
    <section id="introduction" className="bg-background pb-24 pt-28 md:pb-32 md:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Contact
          </p>
          <h1 className="mx-auto mt-3 max-w-xl text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Une question ? Parlons-en.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Une question sur Notice, une demande de renseignement ou un
            problème à nous signaler ? Écrivez-nous directement.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            Votre message sera préparé dans votre propre application de
            messagerie. Vous pourrez le vérifier avant de l’envoyer.
          </p>
        </div>
      </Container>
    </section>
  )
}
