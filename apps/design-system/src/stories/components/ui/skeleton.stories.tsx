import { Stack } from '@boilerplate/ui/layout'
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
    <Stack
      direction="vertical"
      gap="md"
    >
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <Stack
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Stack>
    </Stack>
  ),
}

export const Avatar: Story = {
  render: () => (
    <Stack
      direction="horizontal"
      gap="md"
      align="center"
    >
      <Skeleton className="h-12 w-12 rounded-full" />
      <Stack
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </Stack>
    </Stack>
  ),
}

export const List: Story = {
  render: () => (
    <Stack
      direction="vertical"
      gap="sm"
    >
      {[1, 2, 3].map((i) => (
        <Stack
          key={i}
          direction="horizontal"
          gap="md"
          align="center"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <Stack
            direction="vertical"
            gap="xs"
          >
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </Stack>
        </Stack>
      ))}
    </Stack>
  ),
}

export const Table: Story = {
  render: () => (
    <Stack
      direction="vertical"
      gap="sm"
    >
      {[1, 2, 3].map((row) => (
        <Stack
          key={row}
          direction="horizontal"
          gap="sm"
        >
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[100px]" />
        </Stack>
      ))}
    </Stack>
  ),
}

export const Form: Story = {
  render: () => (
    <Stack
      direction="vertical"
      gap="md"
    >
      <Stack
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[300px]" />
      </Stack>
      <Stack
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-[300px]" />
      </Stack>
      <Stack
        direction="vertical"
        gap="xs"
      >
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-20 w-[300px]" />
      </Stack>
      <Skeleton className="h-10 w-[100px]" />
    </Stack>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <Stack
      direction="vertical"
      gap="sm"
    >
      <Skeleton className="h-2 w-[250px]" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-6 w-[250px]" />
      <Skeleton className="h-8 w-[250px]" />
      <Skeleton className="h-10 w-[250px]" />
    </Stack>
  ),
}

export const LoadingCard: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-4">
      <Stack
        direction="vertical"
        gap="md"
      >
        <Stack
          direction="horizontal"
          gap="md"
          align="center"
        >
          <Skeleton className="h-12 w-12 rounded-full" />
          <Stack
            direction="vertical"
            gap="xs"
          >
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </Stack>
        </Stack>
        <Stack
          direction="vertical"
          gap="xs"
        >
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </Stack>
        <Stack
          direction="horizontal"
          gap="xs"
          justify="end"
        >
          <Skeleton className="h-8 w-[60px]" />
          <Skeleton className="h-8 w-[60px]" />
        </Stack>
      </Stack>
    </div>
  ),
}
