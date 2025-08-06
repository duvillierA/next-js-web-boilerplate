import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type GutterType = 'all' | 'left' | 'right'
type GutterSize = 'none' | 'sm' | 'md' | 'lg'

/**
 * Container component
 *
 * Provides a responsive, centered, max-width wrapper for content.
 *
 * - Uses Tailwind's `container` class for responsive max-width.
 * - Adds horizontal padding and centers content.
 * - Accepts `className` for additional styling.
 *
 * @example
 * <Container>
 *   <h1>Hello World</h1>
 * </Container>
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  gutterType?: GutterType
  gutter?: GutterSize
  center?: boolean
}

const Container: React.FC<ContainerProps> = ({
  className,
  asChild,
  gutterType = 'all',
  gutter = 'md',
  center = true,
  ...props
}) => {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        'container',
        // Tailwind needs explicit classnames, not dynamic strings
        gutter === 'none'
          ? ''
          : [
              gutterType === 'all' &&
                {
                  sm: 'px-2 md:px-4',
                  md: 'px-4 md:px-6',
                  lg: 'px-6 md:px-8',
                }[gutter],
              gutterType === 'left' &&
                {
                  sm: 'pl-2 md:pl-4',
                  md: 'pl-4 md:pl-6',
                  lg: 'pl-6 md:pl-8',
                }[gutter],
              gutterType === 'right' &&
                {
                  sm: 'pr-2 md:pr-4',
                  md: 'pr-4 md:pr-6',
                  lg: 'pr-6 md:pr-8',
                }[gutter],
            ],
        center && 'mx-auto',
        className,
      )}
      {...props}
    />
  )
}

export { Container }
