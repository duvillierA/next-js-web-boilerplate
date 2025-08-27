import { cn } from '@boilerplate/ui/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { H2, Text } from '../typography'
import { Grid } from './grid'
import { HStack, Stack, VStack } from './stack'

type MediaTextContextValue = {
  reversed: boolean
}

const MediaTextContext = React.createContext<MediaTextContextValue | null>(null)

/**
 * Hook to access MediaText context
 * @throws {Error} When used outside of MediaText provider
 */
function useMediaText() {
  const context = React.useContext(MediaTextContext)
  if (!context) {
    throw new Error('MediaText components must be used within a MediaText provider')
  }
  return context
}

type MediaTextProps = React.ComponentProps<typeof Grid> & {
  reversed?: boolean
}

/**
 * MediaText component
 * @description
 * A responsive layout component that displays media (image/video) alongside text content.
 * Supports reversed ordering and responsive behavior.
 *
 * @example
 * <MediaText reversed>
 *   <MediaTextImage>
 *     <img src="/image.jpg" alt="Description" />
 *   </MediaTextImage>
 *   <MediaTextContent>
 *     <MediaTextTitle>Title</MediaTextTitle>
 *     <MediaTextDescription>Description</MediaTextDescription>
 *   </MediaTextContent>
 * </MediaText>
 */
function MediaText({ reversed = false, children, ...props }: MediaTextProps) {
  const contextValue = React.useMemo(() => ({ reversed }), [reversed])

  return (
    <MediaTextContext.Provider value={contextValue}>
      <Grid cols={{ initial: 1, lg: 2 }} data-slot="media-text" align="center" {...props}>
        {children}
      </Grid>
    </MediaTextContext.Provider>
  )
}

const mediaTextImageVariants = cva('relative overflow-hidden rounded', {
  variants: {
    ratio: {
      default: 'aspect-[3/4] lg:aspect-[4/3]',
      auto: 'aspect-auto',
      video: 'aspect-video',
      landscape: 'aspect-[4/3]',
      portrait: 'aspect-[3/4]',
      square: 'aspect-square',
    },
  },
  defaultVariants: {
    ratio: 'default',
  },
})

interface MediaTextImageProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof mediaTextImageVariants> {}

/**
 * MediaTextImage component
 * @description
 * Renders an image container with responsive ordering based on MediaText context.
 * Always appears second on mobile, and respects the reversed prop on desktop.
 */
function MediaTextImage({ ratio, className, ...props }: MediaTextImageProps) {
  const { reversed } = useMediaText()

  return (
    <div
      data-slot="media-text-image"
      className={cn(
        mediaTextImageVariants({ ratio }),
        // On mobile (initial), image is always second (order-2)
        'order-2 lg:order-1',
        // On desktop (lg), if reversed, image is second (order-2), otherwise first (order-1)
        reversed ? 'lg:order-2' : 'lg:order-1',
        className,
      )}
      {...props}
    ></div>
  )
}

/**
 * MediaTextContent component
 * @description
 * Renders a content container with responsive ordering based on MediaText context.
 * Always appears first on mobile, and respects the reversed prop on desktop.
 */
function MediaTextContent({ className, ...props }: React.ComponentProps<typeof Stack>) {
  const { reversed } = useMediaText()

  return (
    <VStack
      data-slot="media-text-content"
      className={cn(
        'w-full justify-center',
        'order-1 lg:order-2',
        reversed ? 'lg:order-1' : 'lg:order-2',
        className,
      )}
      {...props}
    />
  )
}

function MediaTextHeader({ className, ...props }: React.ComponentProps<typeof VStack>) {
  return <VStack data-slot="media-text-header" className={cn(className)} gap={'sm'} {...props} />
}

/**
 * MediaTextTitle component
 * @description
 * Renders a title with consistent styling for media-text layouts.
 */
function MediaTextTitle({ className, ...props }: React.ComponentProps<typeof H2>) {
  return <H2 data-slot="media-text-title" className={cn(className)} {...props} />
}

/**
 * MediaTextSubtitle component
 * @description
 * Renders a subtitle with accent styling for media-text layouts.
 */
function MediaTextSubtitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="media-text-subtitle"
      variant={'accent'}
      size={'lg'}
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * MediaTextDescription component
 * @description
 * Renders a description with muted styling for media-text layouts.
 */
function MediaTextDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text
      data-slot="media-text-description"
      size="sm"
      variant="muted"
      className={cn(className)}
      {...props}
    />
  )
}

/**
 * MediaActions component
 * @description
 * Renders action buttons or links in a horizontal stack for media-text layouts.
 */
function MediaActions({ className, ...props }: React.ComponentProps<typeof HStack>) {
  return <HStack data-slot="media-text-actions" className={cn(className)} wrap {...props} />
}

export {
  MediaActions,
  MediaText,
  MediaTextContent,
  MediaTextDescription,
  MediaTextHeader,
  MediaTextImage,
  MediaTextSubtitle,
  MediaTextTitle,
}
