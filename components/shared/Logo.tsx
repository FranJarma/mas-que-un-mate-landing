import Link from 'next/link'

interface LogoProps {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center gap-2 group ${className}`}
      aria-label="Mas que un mate - Ir al inicio"
    >
      <div className="flex flex-col">
        <span className="font-display text-2xl md:text-3xl text-white tracking-wider leading-none group-hover:text-mate-cream transition-colors hover:text-primary">
          +QUE UN MATE
        </span>
        <span className="text-xs md:text-sm text-white/80 tracking-widest uppercase">
          Podcast
        </span>
      </div>
    </Link>
  )
}
