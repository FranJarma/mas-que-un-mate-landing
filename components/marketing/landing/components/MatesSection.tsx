import { SectionContainer } from '@/components/shared/SectionContainer'
import { PrimaryButton } from '@/components/shared/PrimaryButton'
import { SecondaryButton } from '@/components/shared/SecondaryButton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MATES_CONTENT, MATE_PRODUCTS } from '../constants/landingContent'
import type { MateProduct } from '../types/landingTypes'

function MateProductCard({ product }: { product: MateProduct }) {
  return (
    <Card className="bg-white border-mate-secondary hover:border-mate-primary/30 transition-all duration-300 flex flex-col group overflow-hidden shadow-sm hover:shadow-md">
      {/* Product image placeholder */}
      <div 
        className="aspect-square overflow-hidden"
        aria-hidden="true"
      >
        <div 
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          style={{
            background: `
              linear-gradient(145deg, #E6DBC3 0%, #F5F0E6 60%, #FFFFFF 100%)
            `,
          }}
        >
          {/* Brown accent for depth */}
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `
                radial-gradient(ellipse at 30% 30%, rgba(107, 62, 38, 0.1) 0%, transparent 50%)
              `,
            }}
          >
            {/* Mate icon placeholder */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-mate-primary/30"
            >
              <path
                d="M16 4C16 4 12 4 10 6C8 8 8 12 8 12H24C24 12 24 8 22 6C20 4 16 4 16 4Z"
                fill="currentColor"
              />
              <path
                d="M6 14H26C26 14 26 24 22 27C18 30 14 30 10 27C6 24 6 14 6 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-mate-primary font-display text-2xl tracking-wider uppercase">
            {product.name}
          </CardTitle>
          {product.price && (
            <span className="text-mate-brown-light font-semibold whitespace-nowrap">
              {product.price}
            </span>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col flex-1">
        <p className="text-mate-black/70 text-sm leading-relaxed flex-1">
          {product.shortStory}
        </p>
        <PrimaryButton className="mt-6 w-full" href={product.href}>
          Ver detalles
        </PrimaryButton>
      </CardContent>
    </Card>
  )
}

export function MatesSection() {
  return (
    <SectionContainer id="tienda" variant="secondary">
      <div className="text-center mb-16">
        <span className="text-mate-brown-light text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
          Tienda
        </span>
        <h2 className="text-mate-primary font-display text-4xl tracking-wider uppercase md:text-5xl lg:text-6xl">
          {MATES_CONTENT.title}
        </h2>
        <p className="mt-6 text-mate-black/70 text-lg max-w-2xl mx-auto">
          {MATES_CONTENT.subtitle}
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {MATE_PRODUCTS.map((product) => (
          <MateProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <SecondaryButton size="lg" href="#">
          {MATES_CONTENT.ctaCatalog}
        </SecondaryButton>
      </div>
    </SectionContainer>
  )
}
