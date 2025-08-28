import { cn } from '@boilerplate/ui/utils'
import * as React from 'react'
import { H1, Text } from '../typography'
import { Grid } from './grid'
import { HStack, VStack } from './stack'

interface HeroProps extends React.ComponentProps<typeof Grid> {
  /** Optional background image URL. */
  backgroundImage?: string
  /** Optional overlay utility classes (e.g., 'bg-black/50'). */
  overlayClassName?: string
}

/**
 * Hero
 * @description
 * Compound hero component providing layout context and background handling.
 */
function Hero({ className, children, ...props }: HeroProps) {
  return (
    <div
      className={cn(
        'grid min-h-[60vh] grid-cols-1 grid-rows-[auto_1fr] items-end gap-4 lg:grid-cols-[3fr_2fr] lg:grid-rows-1 lg:items-center lg:gap-8',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function HeroImage({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="hero-image"
      className={cn(
        'relative h-full w-full overflow-hidden lg:h-[80%] lg:w-full lg:self-baseline-last',
        className,
      )}
      {...props}
    />
  )
}

/**
 * HeroHeader
 * @description Container for title and subtitle.
 */
function HeroHeader({ className, ...props }: React.ComponentProps<typeof VStack>) {
  return <VStack data-slot="hero-header" className={cn('py-20', className)} gap="lg" {...props} />
}

/**
 * HeroTitle
 * @description Main hero title with consistent typography.
 */
function HeroTitle({ className, ...props }: React.ComponentProps<typeof H1>) {
  return (
    <H1 data-slot="hero-title" className={cn('tracking-tight text-pretty', className)} {...props} />
  )
}

/**
 * HeroDescription
 * @description Supporting text below the title.
 */
function HeroDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="hero-description"
      size="xl"
      className={cn('text-pretty', className)}
      {...props}
    />
  )
}

/**
 * HeroActions
 * @description Actions container (buttons/links) with wrapping.
 */
function HeroActions({ className, ...props }: React.ComponentProps<typeof HStack>) {
  return <HStack data-slot="hero-actions" className={cn(className)} wrap gap="sm" {...props} />
}

export { Hero, HeroActions, HeroDescription, HeroHeader, HeroImage, HeroTitle }
