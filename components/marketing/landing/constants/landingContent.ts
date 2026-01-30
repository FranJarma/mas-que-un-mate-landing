import type { Episode, MateProduct } from '../types/landingTypes'

export const HERO_CONTENT = {
  title: 'Mas que un mate',
  subtitle: 'Charlas reales sobre emociones, decisiones y emprender. Mate de por medio. Escucha historias que inspiran y conecta con una comunidad que entiende.',
  ctaPrimary: 'Escuchar ahora',
  ctaSecondary: 'Ver los mates',
  trustBadge: 'Pago seguro con MercadoPago - Envios a todo el pais',
}

export const RITUAL_CONTENT = {
  title: 'El ritual',
  text: `El mate no es solo una infusion, es un momento. Es la pausa que elegimos hacer para conectar con nosotros mismos o con alguien mas.

Aca creemos que las mejores conversaciones empiezan con un "te cebo uno?". Y de eso se trata: de compartir, de escuchar, de estar presente.`,
}

export const PODCAST_CONTENT = {
  title: 'El podcast',
  ctaAllEpisodes: 'Ver todos los episodios',
}

export const EPISODES: Episode[] = [
  {
    id: '1',
    title: 'Emprender sin red: miedos, fracasos y aprendizajes',
    guest: 'Martin Cabrales',
    duration: '45 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/3SVkXeIrQYTTunB53rhI6g',
  },
  {
    id: '2',
    title: 'Salud mental y trabajo: como poner limites',
    guest: 'Dra. Laura Menendez',
    duration: '52 min',
    platform: 'YouTube',
    href: 'https://www.youtube.com/@MasQueUnMate',
  },
  {
    id: '3',
    title: 'Creatividad en crisis: cuando no sale nada',
    duration: '38 min',
    platform: 'Spotify',
    href: 'https://open.spotify.com/show/3SVkXeIrQYTTunB53rhI6g',
  },
]

export const MATES_CONTENT = {
  title: 'Los mates',
  subtitle: 'Objetos con historia que acompanan la charla. Para usar, regalar o compartir.',
  ctaCatalog: 'Ver catalogo completo',
}

export const MATE_PRODUCTS: MateProduct[] = [
  {
    id: '1',
    name: 'El Clasico',
    shortStory: 'Calabaza curada a mano con virola de alpaca. El de toda la vida, el que nunca falla.',
    price: '$12.500',
    href: '#',
  },
  {
    id: '2',
    name: 'El Viajero',
    shortStory: 'Disenado para llevar a donde vayas. Acero inoxidable con doble pared termica.',
    price: '$18.900',
    href: '#',
  },
  {
    id: '3',
    name: 'El Artesano',
    shortStory: 'Madera de algarrobo tallada por artesanos del norte. Cada uno es unico.',
    price: '$22.000',
    href: '#',
  },
]

export const FINAL_CTA_CONTENT = {
  title: 'Sumate a la ronda',
  subtitle: 'Escucha el podcast o llevate un mate con historia.',
  ctaPodcast: 'Escuchar podcast',
  ctaMates: 'Ver los mates',
}

export const FOOTER_CONTENT = {
  tagline: 'Conversaciones con profundidad. Mates con historia. Una comunidad que conecta.',
  copyright: `© ${new Date().getFullYear()} Mas que un mate. Todos los derechos reservados.`,
}
