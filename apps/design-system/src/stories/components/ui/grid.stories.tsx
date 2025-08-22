import { Card } from '@boilerplate/ui/interactive'
import { Grid, GridItem } from '@boilerplate/ui/layout'
import { cn } from '@boilerplate/ui/utils'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

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
    responsive: {
      control: { type: 'boolean' },
      description:
        'Enable responsive behavior (single column on mobile, specified columns on large screens)',
      defaultValue: false,
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

function StyledGridItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <GridItem>
      <Card
        variant="surface"
        className={cn('p-4 text-center', className)}
      >
        {children}
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
    <Grid
      {...args}
      cols={4}
    >
      <GridItem colSpan={2}>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Spans 2 columns
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
      <GridItem colSpan={3}>
        <Card
          variant="surface"
          className="text-center"
        >
          Spans 3 columns
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
    </Grid>
  ),
  args: {
    responsive: false,
  },
}

export const RowSpanning: Story = {
  render: (args) => (
    <Grid
      {...args}
      rows={3}
    >
      <GridItem rowSpan={2}>
        <Card
          variant="surface"
          className="flex h-full items-center justify-center bg-accent/10 p-4 text-center"
        >
          Spans 2 rows
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
      <GridItem>
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Normal
        </Card>
      </GridItem>
    </Grid>
  ),
  args: {
    responsive: false,
  },
}

export const Positioning: Story = {
  render: (args) => (
    <Grid
      {...args}
      cols={4}
    >
      <GridItem
        colStart={2}
        colSpan={2}
      >
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Starts at column 2, spans 2
        </Card>
      </GridItem>
      <GridItem
        rowStart={2}
        colStart={1}
        colSpan={2}
      >
        <Card
          variant="surface"
          className="text-center"
        >
          Starts at row 2, column 1, spans 2
        </Card>
      </GridItem>
      <GridItem
        rowStart={2}
        colStart={4}
      >
        <Card
          variant="surface"
          className="bg-accent/10 p-4 text-center"
        >
          Starts at row 2, column 4
        </Card>
      </GridItem>
      <GridItem
        rowStart={3}
        colStart={3}
        colSpan={2}
      >
        <Card
          variant="surface"
          className="bg-muted p-4 text-center"
        >
          Starts at row 3, column 3, spans 2
        </Card>
      </GridItem>
    </Grid>
  ),
  args: {
    responsive: false,
  },
}

export const Alignment: Story = {
  render: (args) => (
    <Grid
      {...args}
      cols={3}
      gap="md"
      className="h-64 grid-rows-3"
    >
      <GridItem align="start">
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Aligned to start
        </Card>
      </GridItem>
      <GridItem align="center">
        <Card
          variant="surface"
          className="text-center"
        >
          Aligned to center
        </Card>
      </GridItem>
      <GridItem align="end">
        <Card
          variant="surface"
          className="bg-accent/10 p-4 text-center"
        >
          Aligned to end
        </Card>
      </GridItem>
      <GridItem justify="start">
        <Card
          variant="surface"
          className="bg-muted p-4 text-center"
        >
          Justified to start
        </Card>
      </GridItem>
      <GridItem justify="center">
        <Card
          variant="surface"
          className="p-4 text-center"
        >
          Justified to center
        </Card>
      </GridItem>
      <GridItem justify="end">
        <Card
          variant="surface"
          className="text-center"
        >
          Justified to end
        </Card>
      </GridItem>
    </Grid>
  ),
  args: {
    responsive: false,
  },
}

export const Responsive: Story = {
  render: (args) => (
    <>
      <p className="mb-4 text-sm text-muted-foreground">
        Single column on mobile, {args.cols} columns on large screens
      </p>
      <Grid
        {...args}
        responsive
      >
        {Array.from({ length: 6 }, (_, i) => (
          <StyledGridItem key={i}>Responsive Item {i + 1}</StyledGridItem>
        ))}
      </Grid>
    </>
  ),
  args: {
    cols: 3,
    gap: 'md',
    responsive: true,
  },
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
