import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const stackVariants = cva('flex', {
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
    direction: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    gap: 'md',
    direction: 'vertical',
  },
})

interface StackProps extends React.ComponentProps<'div'>, VariantProps<typeof stackVariants> {
  asChild?: boolean
}

/**
 * Stack component
 * @description
 * Provides a flex container with configurable gap and direction for consistent spacing between children.
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * direction = "vertical" // horizontal, vertical
 * @example
 * <Stack gap="lg" direction="horizontal">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </Stack>
 */
export function Stack({
  align,
  justify,
  children,
  className,
  gap,
  direction,
  wrap,
  asChild,
  ...props
}: StackProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(stackVariants({ gap, direction, align, justify, wrap }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
