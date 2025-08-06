import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const spacingVariants = cva('flex', {
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
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

interface SpacingProps extends React.ComponentProps<'div'>, VariantProps<typeof spacingVariants> {
  asChild?: boolean
}

/**
 * Spacing component
 * @description
 * Provides a flex container with configurable gap and direction for consistent spacing between children.
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * direction = "vertical" // horizontal, vertical
 * @example
 * <Spacing gap="lg" direction="horizontal">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </Spacing>
 */
export function Spacing({
  align,
  justify,
  children,
  className,
  gap,
  direction,
  asChild,
  ...props
}: SpacingProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(spacingVariants({ gap, direction, align, justify }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}

interface GridSpacingProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof gridSpacingVariants> {
  asChild?: boolean
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  responsive?: boolean
}

const gridSpacingVariants = cva('grid', {
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    },
    responsive: {
      true: '', // handled below
      false: '',
    },
  },
  defaultVariants: {
    gap: 'md',
    cols: 1,
    responsive: false,
  },
})

/**
 * GridSpacing component
 * @description
 * Provides a grid container with configurable columns, gap, and responsive behavior for consistent grid layouts.
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * cols = 1 // 1-6
 * responsive = false // true, false
 * @example
 * <GridSpacing cols={3} gap="lg" responsive>
 *   <Card>One</Card>
 *   <Card>Two</Card>
 *   <Card>Three</Card>
 * </GridSpacing>
 */
export function GridSpacing({
  children,
  className,
  gap,
  cols = 1,
  responsive = false,
  asChild,
  ...props
}: GridSpacingProps) {
  // Responsive grid cols class
  const gridColsClass = responsive ? `grid-cols-1 md:grid-cols-${cols}` : `grid-cols-${cols}`
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        gridSpacingVariants({ gap, cols, responsive }),
        responsive ? gridColsClass : undefined,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
