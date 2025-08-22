import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '../../utils'

const textVariants = cva(' ', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    variant: {
      default: 'text-foreground',
      accent: 'text-accent-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      destructive: 'text-destructive',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    truncate: {
      true: 'truncate',
      false: '',
    },
  },
})

export type TextProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof textVariants> & {
    as?: React.ElementType
    asChild?: boolean
  }

export const Text = ({
  className,
  size,
  weight,
  variant,
  align,
  truncate,
  as = 'span',
  asChild,
  ...props
}: TextProps) => {
  const Comp = asChild ? Slot : as
  return (
    <Comp
      className={cn(textVariants({ size, weight, variant, align, truncate }), className)}
      {...props}
    />
  )
}
Text.displayName = 'Text'
