import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const containerVariants = cva('container', {
  variants: {
    gutterType: {
      all: '',
      left: '',
      right: '',
    },
    gutter: {
      none: '',
      xs: '',
      sm: '',
      md: '',
      lg: '',
    },
    center: {
      true: 'mx-auto',
      false: '',
    },
  },
  compoundVariants: [
    {
      gutterType: 'all',
      gutter: 'xs',
      className: 'px-1 md:px-2',
    },
    {
      gutterType: 'all',
      gutter: 'sm',
      className: 'px-2 md:px-4',
    },
    {
      gutterType: 'all',
      gutter: 'md',
      className: 'px-4 md:px-6',
    },
    {
      gutterType: 'all',
      gutter: 'lg',
      className: 'px-6 md:px-8',
    },
    // Left
    {
      gutterType: 'left',
      gutter: 'sm',
      className: 'pl-2 md:pl-4',
    },
    {
      gutterType: 'left',
      gutter: 'md',
      className: 'pl-4 md:pl-6',
    },
    {
      gutterType: 'left',
      gutter: 'lg',
      className: 'pl-6 md:pl-8',
    },
    // Right
    {
      gutterType: 'right',
      gutter: 'sm',
      className: 'pr-2 md:pr-4',
    },
    {
      gutterType: 'right',
      gutter: 'md',
      className: 'pr-4 md:pr-6',
    },
    {
      gutterType: 'right',
      gutter: 'lg',
      className: 'pr-6 md:pr-8',
    },
  ],
  defaultVariants: {
    gutterType: 'all',
    gutter: 'md',
    center: true,
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

/**
 * Container component
 * @description
 * Provides a responsive, centered, max-width wrapper for content.
 * @default
 * gutterType = "all" // all, left, right
 * gutter = "md" // none, xs, sm, md, lg
 * center = true // true, false
 * @example
 * <Container>
 *   <h1>Hello World</h1>
 * </Container>
 */
export const Container: React.FC<ContainerProps> = ({
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
      className={cn(containerVariants({ gutterType, gutter, center }), className)}
      {...props}
    />
  )
}
