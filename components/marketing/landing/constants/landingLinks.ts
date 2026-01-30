import type { NavLink } from '../types/landingTypes'

export const NAV_LINKS: NavLink[] = [
  { label: 'La historia', href: '#historia' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Tienda', href: '#tienda' },
]

export const SOCIAL_LINKS = {
  spotify: 'https://open.spotify.com/show/3SVkXeIrQYTTunB53rhI6g?si=7560aa0ca69e4684',
  youtube: 'https://www.youtube.com/@MasQueUnMate',
  instagram: 'https://www.instagram.com/masqueunmatepodcast/',
} as const
