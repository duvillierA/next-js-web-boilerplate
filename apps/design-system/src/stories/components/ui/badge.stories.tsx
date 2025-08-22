import { Badge } from '@boilerplate/ui/badge'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Badge> = {
  title: 'Components/Feedback/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A badge component for displaying status, counts, or labels. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style variant of the badge',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Badge',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Status: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
}

export const WithCount: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge>12</Badge>
      <Badge variant="secondary">99+</Badge>
      <Badge variant="destructive">3</Badge>
      <Badge variant="outline">42</Badge>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge>
        <svg
          className="mr-1 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        Success
      </Badge>
      <Badge variant="destructive">
        <svg
          className="mr-1 h-3 w-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        Error
      </Badge>
    </div>
  ),
}

export const Notification: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0">3</Badge>
        <div className="h-8 w-8 rounded-full bg-muted" />
      </div>
      <div className="relative">
        <Badge variant="destructive" className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0">
          12
        </Badge>
        <div className="h-8 w-8 rounded-full bg-muted" />
      </div>
    </div>
  ),
}
