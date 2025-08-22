import { Button } from '@boilerplate/ui/button'
import { Stack } from '@boilerplate/ui/layout'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Stack> = {
  title: 'Components/Layout/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    direction: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    gapX: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    gapY: {
      control: { type: 'select' },
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
    },
    display: {
      control: { type: 'select' },
      options: ['inline-flex', 'flex'],
    },
    wrap: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Stack provides a flex container with configurable gap and direction for consistent spacing between children.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: {
    children: [
      <Button key="1" variant="default">
        Button 1
      </Button>,
      <Button key="2" variant="secondary">
        Button 2
      </Button>,
      <Button key="3" variant="outline">
        Button 3
      </Button>,
    ],
  },
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: [
      <Button key="1" variant="default">
        Button 1
      </Button>,
      <Button key="2" variant="secondary">
        Button 2
      </Button>,
      <Button key="3" variant="outline">
        Button 3
      </Button>,
    ],
  },
}
