'use client'

import { Headphones } from 'lucide-react'
import { SectionContainer } from '@/components/shared/SectionContainer'
import { SecondaryButton } from '@/components/shared/SecondaryButton'
import { PODCAST_CONTENT } from '../constants/landingContent'
import { SOCIAL_LINKS } from '../constants/landingLinks'

// YouTube video IDs - replace with actual video IDs from the channel
const YOUTUBE_VIDEOS = [
  { id: 'dQw4w9WgXcQ', title: 'Episodio 1 - Emprender sin red' },
  { id: 'dQw4w9WgXcQ', title: 'Episodio 2 - Salud mental y trabajo' },
  { id: 'dQw4w9WgXcQ', title: 'Episodio 3 - Creatividad en crisis' },
]

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-mate-secondary">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}

export function PodcastSection() {
  return (
    <SectionContainer id="podcast" variant="default">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-mate-brown-light mb-4">
          <Headphones className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em]">Ultimos episodios</span>
        </div>
        <h2 className="text-mate-primary font-display text-4xl tracking-wider uppercase md:text-5xl lg:text-6xl">
          {PODCAST_CONTENT.title}
        </h2>
      </div>

      {/* Featured video */}
      <div className="mb-12">
        <YouTubeEmbed 
          videoId={YOUTUBE_VIDEOS[0].id} 
          title={YOUTUBE_VIDEOS[0].title} 
        />
      </div>

      {/* More videos grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {YOUTUBE_VIDEOS.slice(1).map((video) => (
          <YouTubeEmbed 
            key={video.id + video.title} 
            videoId={video.id} 
            title={video.title} 
          />
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
        <SecondaryButton size="lg" href={SOCIAL_LINKS.youtube}>
          Ver todos en YouTube
        </SecondaryButton>
        <SecondaryButton size="lg" href={SOCIAL_LINKS.spotify}>
          Escuchar en Spotify
        </SecondaryButton>
      </div>
    </SectionContainer>
  )
}
