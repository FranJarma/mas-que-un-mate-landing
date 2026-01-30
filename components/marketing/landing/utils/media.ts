/**
 * Hook to detect if user prefers reduced motion
 * Used to disable video background and heavy animations
 */
export function getPrefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Helper to handle video loading errors gracefully
 * Falls back to poster image if video fails to load
 */
export function handleVideoError(
  videoElement: HTMLVideoElement | null,
  onError?: () => void
): void {
  if (!videoElement) return
  
  videoElement.onerror = () => {
    videoElement.style.display = 'none'
    onError?.()
  }
}
