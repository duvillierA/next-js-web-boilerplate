import { cn } from '@boilerplate/ui/utils'
import * as React from 'react'
import { H5, Text } from '../typography'
import { Grid, GridItem } from './grid'
import { Separator } from './separator'
import { Stack, VStack } from './stack'

type DefinitionListContextValue = {
  variant: 'simple' | 'detailed'
  cols: number
  count: number
}

const DefinitionListContext = React.createContext<DefinitionListContextValue | null>(null)

/**
 * Hook to access DefinitionList context
 * @throws {Error} When used outside of DefinitionList provider
 */
function useDefinitionList() {
  const context = React.useContext(DefinitionListContext)
  if (!context) {
    throw new Error('DefinitionList components must be used within a DefinitionList provider')
  }
  return context
}

type DefinitionListProps = React.ComponentProps<typeof Grid> & {
  variant?: 'simple' | 'detailed'
  children: React.ReactNode[]
  cols?: number
}

type ElementWithItemIndex = React.ReactElement<Partial<Pick<DefinitionItemProps, 'itemIndex'>>>

/**
 * DefinitionList component
 * @description
 * A responsive layout component that displays a list of definitions with icons, labels, and descriptions.
 * Supports simple and detailed variants with responsive column layouts.
 *
 * @example
 * <DefinitionList variant="detailed" columns={2} title="Features">
 *   <DefinitionItem icon={<Icon />} label="Feature 1" description="Description 1" />
 *   <DefinitionItem icon={<Icon />} label="Feature 2" description="Description 2" />
 * </DefinitionList>
 */
function DefinitionList({
  variant = 'detailed',
  children,
  cols = 2,
  className,
  ...props
}: DefinitionListProps) {
  const contextValue = React.useMemo(
    () => ({ variant, count: children?.length ?? 0, cols }),
    [variant, children, cols],
  )

  return (
    <DefinitionListContext.Provider value={contextValue}>
      <Grid
        data-slot="definition-list"
        cols={{ initial: 1, md: cols }}
        gap={'lg'}
        className={cn(className)}
        {...props}
      >
        {React.Children?.map(children, (child, index) =>
          React.isValidElement(child)
            ? React.cloneElement(child as ElementWithItemIndex, { itemIndex: index })
            : child,
        )}
      </Grid>
    </DefinitionListContext.Provider>
  )
}

interface DefinitionItemProps extends React.ComponentProps<typeof Grid> {
  icon: React.ReactNode
  itemIndex?: number
}

/**
 * DefinitionItem component
 * @description
 * Renders a single definition item with icon, label, and optional description.
 * Adapts styling based on the parent DefinitionList variant.
 */
function DefinitionItem({
  icon,
  className,
  children,
  itemIndex = 0,
  ...props
}: DefinitionItemProps) {
  const { count, cols } = useDefinitionList()
  const lastRowCount = count % cols === 0 ? cols : count % cols
  const isInLastRow = itemIndex >= count - lastRowCount

  return (
    <Grid
      data-slot="definition-item"
      cols="auto 1fr"
      gap="lg"
      className={cn('group', className)}
      {...props}
    >
      {icon && (
        <Stack
          justify={'center'}
          align={'center'}
          className={cn('size-14 rounded-full bg-accent text-accent-foreground lg:size-16')}
        >
          {icon}
        </Stack>
      )}
      <VStack gap={'xs'}>{children}</VStack>
      <GridItem
        colSpan={2}
        data-slot="definition-item-separator"
        className={cn('group-last:hidden', { 'lg:hidden': isInLastRow })}
      >
        <DefinitionItemSeparator />
      </GridItem>
    </Grid>
  )
}

function DefinitionItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return <Separator className={cn(className)} {...props} />
}

/**
 * DefinitionItemLabel component
 * @description
 * Renders the label text with consistent styling.
 */
function DefinitionItemLabel({ className, ...props }: React.ComponentProps<typeof H5>) {
  return <H5 data-slot="definition-item-label" className={cn(className)} {...props} />
}

/**
 * DefinitionItemDescription component
 * @description
 * Renders the description text with muted styling.
 */
function DefinitionItemDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return (
    <Text data-slot="definition-item-description" size="sm" className={cn(className)} {...props} />
  )
}

export {
  DefinitionItem,
  DefinitionItemDescription,
  DefinitionItemLabel,
  DefinitionItemSeparator,
  DefinitionList,
}
