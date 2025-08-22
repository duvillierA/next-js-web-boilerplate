import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

interface GridProps extends React.ComponentProps<'div'>, VariantProps<typeof gridVariants> {
  asChild?: boolean
  responsive?: boolean
}

const gridVariants = cva('grid', {
  variants: {
    gap: { none: 'gap-0', xs: 'gap-1', sm: 'gap-2', md: 'gap-4', lg: 'gap-6', xl: 'gap-8' },
    gapX: {
      none: 'gap-x-0',
      xs: 'gap-x-1',
      sm: 'gap-x-2',
      md: 'gap-x-4',
      lg: 'gap-x-6',
      xl: 'gap-x-8',
    },
    gapY: {
      none: 'gap-y-0',
      xs: 'gap-y-1',
      sm: 'gap-y-2',
      md: 'gap-y-4',
      lg: 'gap-y-6',
      xl: 'gap-y-8',
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      'baseline-last': 'items-baseline-last',
      stretch: 'items-stretch',
    },
    justify: {
      start: 'justify-items-start',
      center: 'justify-items-center',
      end: 'justify-items-end',
      stretch: 'justify-items-stretch',
    },
    flow: {
      row: 'grid-flow-row',
      col: 'grid-flow-col',
      dense: 'grid-flow-dense',
      rowDense: 'grid-flow-row-dense',
      colDense: 'grid-flow-col-dense',
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
 * rows = 1 // 1-6
 * align // start, center, end, stretch, baseline, baseline-last
 * justify // start, center, end, stretch
 * flow // row, col, dense, rowDense, colDense
 * responsive = false // true, false
 * @example
 * <Grid cols={3} gap="lg" responsive>
 *   <GridItem>One</GridItem>
 *   <GridItem>Two</GridItem>
 *   <GridItem>Three</GridItem>
 * </Grid>
 */
export function Grid({
  children,
  className,
  gap,
  gapX,
  gapY,
  cols,
  rows,
  align,
  justify,
  flow,
  responsive = false,
  asChild,
  ...props
}: GridProps) {
  // Responsive grid cols class
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        gridVariants({ gap, gapX, gapY, cols, rows, align, justify, flow, responsive }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

const gridItemVariants = cva('', {
  variants: {
    colSpan: {
      1: 'col-span-1',
      2: 'col-span-2',
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6',
      full: 'col-span-full',
    },
    rowSpan: {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3',
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6',
    },
    colStart: {
      1: 'col-start-1',
      2: 'col-start-2',
      3: 'col-start-3',
      4: 'col-start-4',
      5: 'col-start-5',
      6: 'col-start-6',
      7: 'col-start-7',
    },
    rowStart: {
      1: 'row-start-1',
      2: 'row-start-2',
      3: 'row-start-3',
      4: 'row-start-4',
      5: 'row-start-5',
      6: 'row-start-6',
      7: 'row-start-7',
    },
    align: {
      start: 'self-start',
      center: 'self-center',
      end: 'self-end',
      stretch: 'self-stretch',
      baseline: 'self-baseline',
    },
    justify: {
      start: 'justify-self-start',
      center: 'justify-self-center',
      end: 'justify-self-end',
      stretch: 'justify-self-stretch',
    },
  },
})

interface GridItemProps extends React.ComponentProps<'div'>, VariantProps<typeof gridItemVariants> {
  asChild?: boolean
}

/**
 * GridItem component
 * @description
 * A grid item component with advanced positioning capabilities including spanning, alignment, and positioning.
 * @example
 * <Grid cols={3} gap="md">
 *   <GridItem colSpan={2}>Spans 2 columns</GridItem>
 *   <GridItem rowSpan={2}>Spans 2 rows</GridItem>
 *   <GridItem colStart={2} align="center">Positioned and centered</GridItem>
 * </Grid>
 */
export function GridItem({
  children,
  className,
  asChild,
  colSpan,
  rowSpan,
  colStart,
  rowStart,
  align,
  justify,
  ...props
}: GridItemProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        gridItemVariants({ align, justify, colSpan, rowSpan, colStart, rowStart }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
