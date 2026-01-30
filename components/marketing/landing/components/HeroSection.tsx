"use client";

import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SecondaryButton } from "@/components/shared/SecondaryButton";
import { TypingHeadline } from "@/components/shared/TypingHeadline";
import { HERO_CONTENT } from "../constants/landingContent";
import { SOCIAL_LINKS } from "../constants/landingLinks";

const TYPING_TEXTS = [
  "+ QUE UN MATE",
  "+ QUE UN PODCAST",
  "+ QUE UNA CHARLA",
  "+ QUE UN ENCUENTRO",
];

function SpotifyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mate-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-80"
        aria-hidden="true"
        src="/hero.mp4"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-1 bg-linear-to-b from-mate-black/70 via-mate-black/50 to-mate-black/80"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center md:px-8">
        <TypingHeadline
          texts={TYPING_TEXTS}
          className="text-mate-cream font-display text-5xl tracking-wider md:text-7xl lg:text-8xl text-balance leading-none min-h-[1.2em]"
        />

        <p className="mt-8 text-mate-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {HERO_CONTENT.subtitle}
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <PrimaryButton size="lg" href="#podcast">
            {HERO_CONTENT.ctaPrimary}
          </PrimaryButton>
          <SecondaryButton size="lg" href="#tienda">
            {HERO_CONTENT.ctaSecondary}
          </SecondaryButton>
        </div>

        {/* Platform badges */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <span className="text-mate-cream/50 text-sm">Disponible en</span>
          <div className="flex items-center gap-6">
            <a
              href={SOCIAL_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mate-cream/70 hover:text-mate-brown-light transition-colors"
              aria-label="Escuchar en Spotify"
            >
              <SpotifyIcon />
              <span className="font-semibold">Spotify</span>
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-mate-cream/70 hover:text-mate-brown-light transition-colors"
              aria-label="Ver en YouTube"
            >
              <YouTubeIcon />
              <span className="font-semibold">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-mate-cream/40 text-xs uppercase tracking-[0.2em]">
            Descubri mas
          </span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-mate-cream to-transparent" />
        </div>
      </div>
    </section>
  );
}
