import { SectionContainer } from '@/components/shared/SectionContainer'
import { PrimaryButton } from '@/components/shared/PrimaryButton'
import { FINAL_CTA_CONTENT } from '../constants/landingContent'
import { ClientContactForm } from './ClientContactForm'
import { Button } from '@/components/ui/button'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden">
      <SectionContainer className="relative z-10 bg-mate-brown-light">
        <div className="text-center">
          <h2 className="text-black font-display text-4xl tracking-wider uppercase md:text-5xl lg:text-6xl text-balance">
            {FINAL_CTA_CONTENT.title}
          </h2>
          <p className="mt-6 text-black/80 text-xl">
            {FINAL_CTA_CONTENT.subtitle}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <ClientContactForm 
              trigger={
                <PrimaryButton size="lg" className="bg-black text-mate-primary hover:bg-black/90">
                  Quiero participar
                </PrimaryButton>
              }
            />
            <Button size="lg" href="#podcast" variant="link" className="text-black cursor-pointer">
              {FINAL_CTA_CONTENT.ctaPodcast}
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
