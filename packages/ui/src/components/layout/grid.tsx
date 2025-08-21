import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

interface GridProps extends React.ComponentProps<'div'>, VariantProps<typeof gridVariants> {
  asChild?: boolean
  cols?: 1 | 2 | 3 | 4 | 5 | 6
  responsive?: boolean
}

const gridVariants = cva('grid', {
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
  compoundVariants: [
    {
      responsive: true,
      cols: 1,
      class: 'grid-cols-1',
    },
    {
      responsive: true,
      cols: 2,
      class: 'grid-cols-1 lg:grid-cols-2',
    },
    {
      responsive: true,
      cols: 3,
      class: 'grid-cols-1 lg:grid-cols-3',
    },
    {
      responsive: true,
      cols: 4,
      class: 'grid-cols-1 lg:grid-cols-4',
    },
    {
      responsive: true,
      cols: 5,
      class: 'grid-cols-1 lg:grid-cols-5',
    },
    {
      responsive: true,
      cols: 6,
      class: 'grid-cols-1 lg:grid-cols-6',
    },
  ],
  defaultVariants: {
    gap: 'md',
    cols: 1,
    responsive: false,
  },
})

/**
 * Grid component
 * @description
 * Provides a grid container with configurable columns, gap, and responsive behavior for consistent grid layouts.
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * cols = 1 // 1-6
 * responsive = false // true, false
 * @example
 * <Grid cols={3} gap="lg" responsive>
 *   <Card>One</Card>
 *   <Card>Two</Card>
 *   <Card>Three</Card>
 * </Grid>
 */
export function Grid({
  children,
  className,
  gap,
  cols = 1,
  responsive = false,
  asChild,
  ...props
}: GridProps) {
  // Responsive grid cols class
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(gridVariants({ gap, cols, responsive }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
}
