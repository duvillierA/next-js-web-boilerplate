import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type BgImageProps<T extends React.ElementType> = Omit<React.ComponentPropsWithoutRef<T>, 'as'> & {
  as?: T
  overlay?: 'dark' | 'light' | 'none'
}

/**
 * BgImage
 * @description Container for background image and foreground content.
 * @example
 * <BgImage overlay="dark">
 *   <BgImageSlot asChild>
 *     <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Background" />
 *   </BgImageSlot>
 *   <BgImageContent>
 *     <h1>Background Image</h1>
 *   </BgImageContent>
 * </BgImage>
 */
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
 * @description Overlay for Background Image.
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
 * @description Background image slot. Center and cover the image.
 * @example
 * <BgImageSlot asChild>
 *   <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" alt="Background" />
 * </BgImageSlot>
 */
function BgImageSlot({
  className,
  asChild,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp className={cn('absolute inset-0 z-1 object-cover object-center', className)} {...props} />
  )
}

/**
 * BgImageForeground
 * @description Foreground content.
 */
function BgImageForeground({
  className,
  asChild,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return <Comp className={cn('relative z-3', className)} {...props} />
}

export { BgImage, BgImageForeground, BgImageSlot }
