import { SectionContainer } from '@/components/shared/SectionContainer'
import { PrimaryButton } from '@/components/shared/PrimaryButton'
import { SecondaryButton } from '@/components/shared/SecondaryButton'
import { FINAL_CTA_CONTENT } from '../constants/landingContent'
import { ClientContactForm } from './ClientContactForm'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with warm accent gradient */}
      <div 
        className="absolute inset-0 bg-mate-primary"
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 100%, rgba(164, 113, 72, 0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 0% 50%, rgba(107, 62, 38, 0.8) 0%, transparent 50%),
              radial-gradient(ellipse at 100% 50%, rgba(107, 62, 38, 0.8) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <SectionContainer className="relative z-10 bg-transparent">
        <div className="text-center">
          <h2 className="text-mate-cream font-display text-4xl tracking-wider uppercase md:text-5xl lg:text-6xl text-balance">
            {FINAL_CTA_CONTENT.title}
          </h2>
          <p className="mt-6 text-mate-cream/80 text-xl">
            {FINAL_CTA_CONTENT.subtitle}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ClientContactForm 
              trigger={
                <PrimaryButton size="lg" className="bg-mate-cream text-mate-primary hover:bg-white">
                  Quiero participar
                </PrimaryButton>
              }
            />
            <SecondaryButton size="lg" href="#podcast" className="border-mate-cream text-mate-cream hover:bg-mate-cream hover:text-mate-primary">
              {FINAL_CTA_CONTENT.ctaPodcast}
            </SecondaryButton>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
