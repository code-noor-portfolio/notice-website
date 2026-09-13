import { ArrowRightFromLine, FileText, LayoutList, type LucideIcon } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const ETAPES: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: 'Gérer votre activité',
    text: 'Clients, chantiers, devis et factures restent centralisés dans Notice.',
    icon: LayoutList,
  },
  {
    title: 'Préparer votre facture',
    text: 'Générez votre facture au format Factur-X directement depuis Notice.',
    icon: FileText,
  },
  {
    title: 'Choisir votre transmission',
    text: 'Utilisez ensuite la solution de transmission adaptée à votre situation.',
    icon: ArrowRightFromLine,
  },
]

export function SePreparer() {
  return (
    <Section id="se-preparer" className="scroll-mt-24 bg-detail">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
            Se préparer
          </p>
          <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-fg sm:text-[2rem] md:text-[2.25rem]">
            Préparez votre activité sans changer votre façon de travailler.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-fg-secondary">
            La facturation électronique ne doit pas vous obliger à bouleverser
            toute votre organisation. Avec Notice, vous continuez à créer et
            gérer vos factures dans votre logiciel, puis vous disposez d’un
            format Factur-X exploitable pour la suite du processus.
          </p>
        </div>

        <ol
          className="mt-12 hidden list-none md:flex md:items-start"
          aria-label="Se préparer avec Notice"
        >
          {ETAPES.map((etape, index) => (
            <li
              key={etape.title}
              className={`flex items-start ${index < ETAPES.length - 1 ? 'min-w-0 flex-1' : ''}`}
            >
              <Etape etape={etape} index={index} />
              {index < ETAPES.length - 1 ? (
                <div
                  className="mt-3 flex min-w-6 flex-1 items-center px-2"
                  aria-hidden
                >
                  <span className="h-px w-full bg-separator" />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <ol
          className="mx-auto mt-10 max-w-md list-none md:hidden"
          aria-label="Se préparer avec Notice"
        >
          {ETAPES.map((etape, index) => (
            <li key={etape.title} className="flex gap-4">
              <div className="flex w-8 flex-col items-center">
                <span className="text-[13px] font-medium text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < ETAPES.length - 1 ? (
                  <span className="mt-2 w-px flex-1 bg-separator" aria-hidden />
                ) : null}
              </div>
              <div className={index < ETAPES.length - 1 ? 'pb-8' : undefined}>
                <etape.icon
                  size={20}
                  strokeWidth={1.75}
                  className="text-primary"
                  aria-hidden
                />
                <p className="mt-2 text-[15px] font-medium text-fg">
                  {etape.title}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-fg-secondary">
                  {etape.text}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-12 max-w-lg text-center text-[15px] font-medium leading-relaxed text-fg">
          Vous gardez votre façon de travailler. Notice s’intègre simplement
          dans votre organisation.
        </p>
      </Container>
    </Section>
  )
}

function Etape({
  etape,
  index,
}: {
  etape: (typeof ETAPES)[number]
  index: number
}) {
  return (
    <div className="w-[13.5rem] shrink-0 text-left">
      <p className="text-[13px] font-medium text-primary">
        {String(index + 1).padStart(2, '0')}
      </p>
      <etape.icon
        size={20}
        strokeWidth={1.75}
        className="mt-3 text-primary"
        aria-hidden
      />
      <p className="mt-3 text-[15px] font-medium text-fg">{etape.title}</p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-fg-secondary">
        {etape.text}
      </p>
    </div>
  )
}
