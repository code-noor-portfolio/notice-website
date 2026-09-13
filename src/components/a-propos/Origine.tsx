import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function Origine() {
  return (
    <Section id="origine" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
              À l’origine
            </p>
            <h2 className="mt-3 max-w-lg text-2xl font-semibold text-fg md:text-[1.85rem]">
              Un logiciel créé à partir d’un besoin réel.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Notice est né d’un besoin très concret : permettre à un artisan
              de gérer son activité avec un logiciel simple, sans abonnement
              obligatoire et sans dépendre d’une connexion Internet pour
              travailler.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              Face à des solutions parfois trop complexes ou trop
              contraignantes, l’idée était de créer un outil qui s’adapte
              réellement à la façon de travailler d’un artisan.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
              C’est en partant de ce besoin, celui d’un artisan de mon
              entourage, que Notice a commencé à prendre forme.
            </p>
          </div>

          <figure className="mx-auto w-full max-w-sm lg:mx-0 lg:mt-2 lg:max-w-none">
            <div className="rounded-xl border border-border bg-surface px-6 py-7 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Un besoin concret
              </p>
              <p className="mt-2 text-[15px] font-medium text-fg">
                Gérer son activité simplement
              </p>
              <p className="my-3 text-fg-tertiary" aria-hidden>
                ↓
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-primary">
                Notice
              </p>
              <p className="mt-2 text-[15px] text-fg-secondary">
                Simple · Sans abonnement obligatoire · Hors ligne
              </p>
            </div>

            <blockquote className="mt-6 border-l-2 border-primary pl-4">
              <p className="text-[17px] font-medium leading-snug text-fg">
                Le logiciel doit s’adapter à l’artisan.
                <br />
                Pas l’inverse.
              </p>
            </blockquote>
          </figure>
        </div>
      </Container>
    </Section>
  )
}
