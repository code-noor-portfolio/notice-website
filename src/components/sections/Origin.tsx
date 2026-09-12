import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export function Origin() {
  return (
    <Section id="origine" className="scroll-mt-24 bg-background">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            À l’origine de Notice
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-fg md:text-[1.85rem]">
            Notice est né d’un besoin concret.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-fg-secondary">
            Notice a été créé à partir d’un besoin réel : permettre à un artisan
            de gérer son activité avec un logiciel simple, adapté à son
            quotidien, sans abonnement obligatoire et sans dépendre d’une
            connexion Internet.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-secondary">
            C’est cette idée qui guide encore son développement aujourd’hui : le
            logiciel doit s’adapter à l’artisan, pas l’inverse.
          </p>
          <p className="mt-6">
            <Link
              href="/a-propos"
              className="text-sm text-fg-secondary transition-colors duration-150 hover:text-primary"
            >
              Découvrir l’histoire de Notice →
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  )
}
