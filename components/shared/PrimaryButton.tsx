import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type PrimaryButtonProps = ComponentProps<typeof Button> & {
  href?: string
}

export function PrimaryButton({ className, children, href, ...props }: PrimaryButtonProps) {
  const baseStyles = cn(
    'bg-mate-primary hover:bg-mate-brown-light text-mate-cream',
    'font-semibold px-6 py-3 rounded-full transition-all duration-300',
    'hover:shadow-lg hover:shadow-mate-primary/20',
    className
  )

  if (href) {
    return (
      <Button asChild className={baseStyles} {...props}>
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      </Button>
    )
  }

  return (
    <Button className={baseStyles} {...props}>
      {children}
    </Button>
  )
}
