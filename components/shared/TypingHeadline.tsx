"use client"

import { useTypingEffect } from '@/hooks/use-typing-effect'

interface TypingHeadlineProps {
  texts: string[]
  className?: string
}

export function TypingHeadline({ texts, className = '' }: TypingHeadlineProps) {
  const { displayText } = useTypingEffect({
    texts,
    typingSpeed: 80,
    deletingSpeed: 40,
    pauseDuration: 2500,
  })

  return (
    <h1 className={className}>
      <span className="sr-only">{texts.join(' - ')}</span>
      <span aria-hidden="true">
        {displayText}
        <span className="inline-block w-[3px] h-[1em] bg-current ml-1 animate-pulse" />
      </span>
    </h1>
  )
}
