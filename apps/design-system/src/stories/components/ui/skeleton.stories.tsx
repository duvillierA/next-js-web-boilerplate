import { Spacing } from '@boilerplate/ui/layout'
import { Skeleton } from '@boilerplate/ui/skeleton'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A skeleton component for loading states. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the skeleton',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: 'h-4 w-[250px]',
  },
}

export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
}

export const Card: Story = {
  render: () => (
    <Spacing
      direction="vertical"
      gap="md"
    >
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Spacing
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Spacing>
    </Spacing>
  ),
}

export const Avatar: Story = {
  render: () => (
    <Spacing
      direction="horizontal"
      gap="md"
      align="center"
    >
      <Skeleton className="h-12 w-12 rounded-full" />
      <Spacing
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Spacing>
    </Spacing>
  ),
}

export const List: Story = {
  render: () => (
    <Spacing
      direction="vertical"
      gap="sm"
    >
      {[1, 2, 3].map((i) => (
        <Spacing
          key={i}
          direction="horizontal"
          gap="md"
          align="center"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <Spacing
            direction="vertical"
            gap="xs"
          >
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Spacing>
        </Spacing>
      ))}
    </Spacing>
  ),
}

export const Table: Story = {
  render: () => (
    <Spacing
      direction="vertical"
      gap="sm"
    >
      {[1, 2, 3].map((row) => (
        <Spacing
          key={row}
          direction="horizontal"
          gap="sm"
        >
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </Spacing>
      ))}
    </Spacing>
  ),
}

export const Form: Story = {
  render: () => (
    <Spacing
      direction="vertical"
      gap="md"
    >
      <Spacing
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[300px]" />
      </Spacing>
      <Spacing
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[300px]" />
      </Spacing>
      <Spacing
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-20 w-[300px]" />
      </Spacing>
      <Skeleton className="h-10 w-[100px]" />
    </Spacing>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <Spacing
      direction="vertical"
      gap="sm"
    >
      <Skeleton className="h-2 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-10 w-[250px]" />
    </Spacing>
  ),
}

export const LoadingCard: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-4">
      <Spacing
        direction="vertical"
        gap="md"
      >
        <Spacing
          direction="horizontal"
          gap="md"
          align="center"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <Spacing
            direction="vertical"
            gap="xs"
          >
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </Spacing>
        </Spacing>
        <Spacing
          direction="vertical"
          gap="xs"
        >
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </Spacing>
        <Spacing
          direction="horizontal"
          gap="xs"
          justify="end"
        >
          <Skeleton className="h-8 w-[60px]" />
          <Skeleton className="h-8 w-[60px]" />
        </Spacing>
      </Spacing>
    </div>
  ),
}
