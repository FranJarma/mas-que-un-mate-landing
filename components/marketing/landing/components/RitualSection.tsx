import Image from 'next/image'
import { SectionContainer } from '@/components/shared/SectionContainer'
import { RITUAL_CONTENT } from '../constants/landingContent'

const LOGO_URL = '/images/logo.webp'

export function RitualSection() {
  return (
    <SectionContainer id="historia" variant="secondary">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Text content */}
        <div>
          <span className="text-mate-brown-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Nuestra filosofia
          </span>
          <h2 className="text-mate-primary font-display text-4xl tracking-wider uppercase md:text-5xl lg:text-6xl">
            {RITUAL_CONTENT.title}
          </h2>
          <p className="mt-8 text-mate-black/70 leading-relaxed text-lg whitespace-pre-line">
            {RITUAL_CONTENT.text}
          </p>
        </div>

        {/* Visual element - Logo image */}
        <div 
          className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={LOGO_URL || "/placeholder.svg"}
            alt="Mas que un mate - El podcast"
            fill
            className="object-cover"
          />
          {/* Warm overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-mate-primary/20 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
