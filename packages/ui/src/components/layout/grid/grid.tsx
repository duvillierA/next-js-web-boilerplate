import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  getColsClasses,
  getColsStyles,
  getRowsClasses,
  getRowsStyles,
  GridResponsive,
  isValidGridNumber,
} from './grid.utils'

interface GridProps
  extends React.ComponentProps<'div'>,
    Omit<VariantProps<typeof gridVariants>, 'cols' | 'rows'> {
  as?: React.ElementType
  asChild?: boolean
  cols?: GridResponsive
  rows?: GridResponsive
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
  },
  defaultVariants: {
    gap: 'md',
  },
})

/**
 * Grid component
 * @description
 * Provides a grid container with configurable columns, gap, and responsive behavior for consistent grid layouts.
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * align // start, center, end, stretch, baseline, baseline-last
 * justify // start, center, end, stretch
 * flow // row, col, dense, rowDense, colDense
 * cols // string, number, or responsive object
 * rows // string, number, or responsive object
 * @example
 * <Grid cols={3}>
 *   <GridItem>One</GridItem>
 *   <GridItem>Two</GridItem>
 *   <GridItem>Three</GridItem>
 * </Grid>
 * @example
 * <Grid cols={{ initial: 1, lg: 3 }}>
 *   <GridItem>Responsive columns</GridItem>
 *   <GridItem>Adapts to screen size</GridItem>
 * </Grid>
 * @example
 * <Grid cols="1fr auto">
 *   <GridItem>Fixed width</GridItem>
 *   <GridItem>Flexible width</GridItem>
 * </Grid>
 * @example
 * <Grid cols={{ initial: "1fr", lg: "1fr auto" }}>
 *   <GridItem>Responsive template</GridItem>
 *   <GridItem>Adapts to screen size</GridItem>
 * </Grid>
 * @example
 * <Grid rows={{ initial: "auto", lg: "1fr 1fr" }}>
 *   <GridItem>Responsive rows</GridItem>
 *   <GridItem>Adapts to screen size</GridItem>
 * </Grid>
 */
export function Grid({
  as = 'div',
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
  asChild,
  ...props
}: GridProps) {
  const Comp = asChild ? Slot : as

  // Handle unified cols and rows props
  // For numbers 1-6, use CVA variants; for other values, use responsive utilities
  const useCvaCols = cols !== undefined && isValidGridNumber(cols)
  const useCvaRows = rows !== undefined && isValidGridNumber(rows)

  const colsStyles = !useCvaCols && cols !== undefined ? getColsStyles(cols) : {}
  const rowsStyles = !useCvaRows && rows !== undefined ? getRowsStyles(rows) : {}
  const colsClasses = !useCvaCols && cols !== undefined ? getColsClasses(cols) : []
  const rowsClasses = !useCvaRows && rows !== undefined ? getRowsClasses(rows) : []

  // Combine all styles and classes
  const combinedStyles = { ...colsStyles, ...rowsStyles }
  const combinedClasses = [...colsClasses, ...rowsClasses]

  return (
    <Comp
      className={cn(
        gridVariants({
          gap,
          gapX,
          gapY,
          align,
          justify,
          flow,
          cols: useCvaCols ? cols : undefined,
          rows: useCvaRows ? rows : undefined,
        }),
        combinedClasses,
        className,
      )}
      style={combinedStyles}
      {...props}
    >
      {children}
    </Comp>
  )
}
