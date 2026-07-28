import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Notice',
  description: 'Questions fréquentes sur Notice : licence, données, Factur-X.',
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
