import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

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
