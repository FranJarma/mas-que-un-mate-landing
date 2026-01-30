import React from "react"
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: 'section' | 'div'
  variant?: 'default' | 'secondary' | 'dark'
  showPattern?: boolean
}

const PATTERN_SVG = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236B3E26' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

const PATTERN_SVG_LIGHT = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23F5F0E6' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`

export function SectionContainer({
  children,
  className,
  id,
  as: Component = 'section',
  variant = 'default',
  showPattern = true,
}: SectionContainerProps) {
  const variantStyles = {
    default: 'bg-mate-cream',
    secondary: 'bg-mate-secondary',
    dark: 'bg-mate-black text-mate-cream',
  }

  return (
    <Component
      id={id}
      className={cn(
        'relative w-full px-4 py-20 md:px-8 md:py-28 lg:px-16',
        variantStyles[variant],
        className
      )}
    >
      {/* Background pattern */}
      {showPattern && (
        <div 
          className={cn(
            "absolute inset-0 pointer-events-none",
            variant === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.04]'
          )}
          aria-hidden="true"
          style={{
            backgroundImage: variant === 'dark' ? PATTERN_SVG_LIGHT : PATTERN_SVG,
          }}
        />
      )}
      <div className="relative mx-auto max-w-6xl">
        {children}
      </div>
    </Component>
  )
}
