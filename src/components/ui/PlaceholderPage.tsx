import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

interface PlaceholderPageProps {
  title: string
  description: string
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Section className="pt-28">
      <Container className="max-w-2xl">
        <h1 className="mb-4 text-3xl md:text-4xl">{title}</h1>
        <p className="text-lg leading-relaxed text-fg-secondary">{description}</p>
      </Container>
    </Section>
  )
}
