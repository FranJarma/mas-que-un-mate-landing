import { Header } from '@/components/marketing/landing/components/Header'
import { HeroSection } from '@/components/marketing/landing/components/HeroSection'
import { RitualSection } from '@/components/marketing/landing/components/RitualSection'
import { PodcastSection } from '@/components/marketing/landing/components/PodcastSection'
import { MatesSection } from '@/components/marketing/landing/components/MatesSection'
import { FinalCtaSection } from '@/components/marketing/landing/components/FinalCtaSection'
import { Footer } from '@/components/marketing/landing/components/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <RitualSection />
        <PodcastSection />
        <MatesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
