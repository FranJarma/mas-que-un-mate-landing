import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type SecondaryButtonProps = ComponentProps<typeof Button> & {
  href?: string
}

export function SecondaryButton({ className, children, href, ...props }: SecondaryButtonProps) {
  const baseStyles = cn(
    'border-0 bg-white text-mate-black',
    'hover:bg-white/90 hover:text-mate-primary',
    'font-semibold px-6 py-3 rounded-full transition-all duration-300',
    className
  )

  if (href) {
    return (
      <Button asChild variant="outline" className={baseStyles} {...props}>
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      </Button>
    )
  }

  return (
    <Button variant="outline" className={baseStyles} {...props}>
      {children}
    </Button>
  )
}
