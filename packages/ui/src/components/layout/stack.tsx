import { cn } from '@boilerplate/ui/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const stackVariants = cva('flex', {
  variants: {
    gap: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
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
    wrap: {
      true: 'flex-wrap',
      false: 'flex-nowrap',
    },
    display: {
      inline: 'inline-flex',
      flex: 'flex',
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
    display: 'flex',
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
  gapX,
  gapY,
  direction,
  display,
  wrap,
  asChild,
  ...props
}: StackProps) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      className={cn(
        stackVariants({ gap, display, gapX, gapY, direction, align, justify, wrap }),
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

/**
 * HStack component
 * @description
 * Provides a flex container with horizontal direction for consistent spacing between children.
 * Inherits all props from {@link Stack}, except `direction` which is set to "horizontal".
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * direction = "horizontal"
 * @example
 * <HStack gap="lg">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </HStack>
 */
export function HStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="horizontal" {...props} />
}

/**
 * VStack component
 * @description
 * Provides a flex container with vertical direction for consistent spacing between children.
 * Inherits all props from {@link Stack}, except `direction` which is set to "vertical".
 * @default
 * gap = "md" // xs, sm, md, lg, xl
 * direction = "vertical"
 * @example
 * <VStack gap="lg">
 *   <Button>One</Button>
 *   <Button>Two</Button>
 * </VStack>
 */
export function VStack(props: Omit<StackProps, 'direction'>) {
  return <Stack direction="vertical" {...props} />
}
