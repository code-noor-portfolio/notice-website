import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function Origine() {
  return (
    <Section id="origine" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            À l’origine
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Un logiciel créé à partir d’un besoin réel.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Notice est né d’un besoin très concret : permettre à un artisan
            de gérer son activité avec un logiciel simple, sans abonnement
            obligatoire et sans dépendre d’une connexion Internet pour
            travailler.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            Face à des solutions parfois trop complexes ou trop
            contraignantes, l’idée était de créer un outil qui s’adapte
            réellement à la façon de travailler d’un artisan.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            C’est en partant de ce besoin, celui d’un artisan de mon
            entourage, que Notice a commencé à prendre forme.
          </p>

          <blockquote className="mt-10 border-l-2 border-primary pl-4">
            <p className="text-[17px] font-medium leading-snug text-fg">
              Le logiciel doit s’adapter à l’artisan.
              <br />
              Pas l’inverse.
            </p>
          </blockquote>
        </div>
      </Container>
    </Section>
  )
}
