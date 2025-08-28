import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

/**
 * BackgroundImage
 * @description Container for background image and content.
 */
type BgImageProps<T extends React.ElementType> = Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T
  overlay?: 'dark' | 'light' | 'none'
}

function BgImage<T extends React.ElementType = 'section'>({
  as,
  className,
  children,
  overlay = 'none',
  ...props
}: BgImageProps<T>) {
  const Comp = as || 'section'
  return (
    <Comp className={cn('relative', className)} {...props}>
      {overlay !== 'none' && <BgImageOverlay variant={overlay} />}
      {children}
    </Comp>
  )
}

/**
 * BgImageOverlay
 * @description Overlay for Bg image.
 */
function BgImageOverlay({
  className,
  variant = 'dark',
  ...props
}: React.ComponentProps<'div'> & { variant?: 'dark' | 'light' }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 z-2',
        variant === 'dark' ? 'bg-black/10' : 'bg-white/10',
        className,
      )}
      {...props}
    />
  )
}

/**
 * BgImageSlot
 * @description Foreground image slot.
 */
function BgImageSlot({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('absolute inset-0 z-1', className)} {...props} />
}

/**
 * BgImageContent
 * @description Foreground content.
 */
function BgImageContent({
  className,
  asChild,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return <Comp className={cn('relative z-3', className)} {...props} />
}

export { BgImage, BgImageContent, BgImageSlot }
