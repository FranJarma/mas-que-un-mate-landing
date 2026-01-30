import React from "react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Más que un mate | Podcast y mates personalizados',
  description:
    'Charlas reales sobre emociones, decisiones y emprender. Mate de por medio. Escuchá el podcast y conocé nuestros mates artesanales.',
  openGraph: {
    title: 'Más que un mate',
    description:
      'Charlas reales sobre emociones, decisiones y emprender. Mate de por medio.',
    type: 'website',
  },
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
