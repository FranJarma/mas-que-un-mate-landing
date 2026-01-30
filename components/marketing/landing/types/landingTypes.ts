export interface NavLink {
  label: string
  href: string
}

export interface Episode {
  id: string
  title: string
  guest?: string
  duration: string
  platform: 'Spotify' | 'YouTube'
  href: string
}

export interface MateProduct {
  id: string
  name: string
  shortStory: string
  price?: string
  href: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
