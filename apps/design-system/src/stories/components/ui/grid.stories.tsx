import { CardContent } from '@boilerplate/ui/card'
import { Card } from '@boilerplate/ui/interactive'
import { Grid, GridItem } from '@boilerplate/ui/layout'
import { cn } from '@boilerplate/ui/utils'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import type { ComponentProps } from 'react'

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible grid component with configurable columns, gap sizes, and responsive behavior. Built with Tailwind CSS grid utilities.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Number of columns in the grid',
      defaultValue: 1,
    },
    rows: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Number of rows in the grid',
      defaultValue: 1,
    },
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap size between grid items',
      defaultValue: 'md',
    },
    gapX: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap size between grid items',
      defaultValue: 'md',
    },
    gapY: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Gap size between grid items',
      defaultValue: 'md',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Whether to render as a different element using Radix UI Slot',
      defaultValue: false,
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline', 'baseline-last'],
      description: 'Alignment of grid items',
      defaultValue: 'stretch',
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch'],
      description: 'Justification of grid items',
      defaultValue: 'stretch',
    },
    flow: {
      control: { type: 'select' },
      options: ['row', 'col', 'dense', 'rowDense', 'colDense'],
      description: 'Flow direction of grid items',
      defaultValue: 'row',
    },
  },
}

export default meta

type Story = StoryObj<typeof Grid>

function StyledGridItem({ children, className, ...props }: ComponentProps<typeof GridItem>) {
  return (
    <GridItem {...props}>
      <Card variant="surface" className={cn('text-center', className)}>
        <CardContent>{children}</CardContent>
      </Card>
    </GridItem>
  )
}

export const Default: Story = {
  args: {
    cols: 3,
    gap: 'md',
    children: (
      <>
        <StyledGridItem>Grid Item 1</StyledGridItem>
        <StyledGridItem>Grid Item 2</StyledGridItem>
        <StyledGridItem>Grid Item 3</StyledGridItem>
      </>
    ),
  },
}

export const ColumnSpanning: Story = {
  render: (args) => (
    <Grid {...args} cols={4}>
      <StyledGridItem colSpan={2}>Spans 2 columns</StyledGridItem>
      <StyledGridItem>Normal</StyledGridItem>
      <StyledGridItem>Normal</StyledGridItem>
      <StyledGridItem colSpan={3}>Spans 3 columns</StyledGridItem>
      <StyledGridItem>Normal</StyledGridItem>
    </Grid>
  ),
}

export const RowSpanning: Story = {
  render: (args) => (
    <Grid {...args} rows={3}>
      <StyledGridItem
        rowSpan={2}
        className="flex h-full items-center justify-center bg-accent/10 p-4 text-center"
      >
        Spans 2 rows
      </StyledGridItem>
      <StyledGridItem className="p-4 text-center">Normal</StyledGridItem>
      <StyledGridItem className="p-4 text-center">Normal</StyledGridItem>
      <StyledGridItem className="p-4 text-center">Normal</StyledGridItem>
      <StyledGridItem className="p-4 text-center">Normal</StyledGridItem>
    </Grid>
  ),
}

export const Positioning: Story = {
  render: (args) => (
    <Grid {...args} cols={4}>
      <StyledGridItem colStart={2} colSpan={2}>
        Starts at column 2, spans 2
      </StyledGridItem>
      <StyledGridItem rowStart={2} colStart={1} colSpan={2}>
        Starts at row 2, column 1, spans 2
      </StyledGridItem>
      <StyledGridItem rowStart={2} colStart={4}>
        Starts at row 2, column 4
      </StyledGridItem>
      <StyledGridItem rowStart={3} colStart={3} colSpan={2}>
        Starts at row 3, column 3, spans 2
      </StyledGridItem>
    </Grid>
  ),
}

export const Alignment: Story = {
  render: (args) => (
    <Grid {...args} cols={3} gap="md" className="h-64 grid-rows-3">
      <StyledGridItem align="start">Aligned to start</StyledGridItem>
      <StyledGridItem align="center">Aligned to center</StyledGridItem>
      <StyledGridItem align="end">Aligned to end</StyledGridItem>
      <StyledGridItem justify="start">Justified to start</StyledGridItem>
      <StyledGridItem justify="center">Justified to center</StyledGridItem>
      <StyledGridItem justify="end">Justified to end</StyledGridItem>
    </Grid>
  ),
}

export const Responsive: Story = {
  render: (args) => (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        Single column on mobile, 3 columns on large screens
      </p>
      <Grid {...args}>
        {Array.from({ length: 6 }, (_, i) => (
          <StyledGridItem key={i}>Responsive Item {i + 1}</StyledGridItem>
        ))}
      </Grid>
    </>
  ),
  args: {
    cols: {
      initial: 1,
      md: 3,
    },
    gap: 'md',
  },
}

export const ColsResponsiveTemplate: Story = {
  args: {
    cols: {
      initial: 1,
      md: '1fr 1fr auto',
    },
  },
  render: (args) => (
    <Grid {...args}>
      <StyledGridItem>Fixed width</StyledGridItem>
      <StyledGridItem>Flexible width</StyledGridItem>
      <StyledGridItem>Flexible width</StyledGridItem>
    </Grid>
  ),
}

export const AsChild: Story = {
  args: {
    asChild: true,
    cols: 3,
    gap: 'md',
    children: (
      <section>
        <StyledGridItem>AsChild Item 1</StyledGridItem>
        <StyledGridItem>AsChild Item 2</StyledGridItem>
        <StyledGridItem>AsChild Item 3</StyledGridItem>
      </section>
    ),
  },
}
