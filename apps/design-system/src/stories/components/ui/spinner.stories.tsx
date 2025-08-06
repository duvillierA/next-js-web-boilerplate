import { Spinner } from '@boilerplate/ui/spinner'
import type { Meta, StoryObj } from '@storybook/react'
import { Loader, RefreshCw } from 'lucide-react'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A spinner component for indicating loading state. Supports custom size, and additional styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the spinner',
    },
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  name: 'Default',
  args: {},
}

export const CustomSize: Story = {
  args: {
    size: 'lg',
  },
  name: 'Custom Size',
}

export const CustomColor: Story = {
  args: {
    className: 'text-destructive',
  },
  name: 'Custom Color',
}

export const CustomIcons: Story = {
  args: {
    asChild: true,
  },
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner asChild>
        <Loader />
      </Spinner>
      <Spinner asChild>
        <RefreshCw />
      </Spinner>
    </div>
  ),
  name: 'Custom Icons',
}
