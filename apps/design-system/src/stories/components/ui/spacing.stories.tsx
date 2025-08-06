import { Button } from '@boilerplate/ui/button'
import { Spacing } from '@boilerplate/ui/layout'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Spacing> = {
  title: 'Components/Layout/Spacing',
  component: Spacing,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Spacing provides a flex container with configurable gap and direction for consistent spacing between children.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Spacing>

export const Default: Story = {
  args: {
    children: [
      <Button
        key="1"
        variant="default"
      >
        Button 1
      </Button>,
      <Button
        key="2"
        variant="secondary"
      >
        Button 2
      </Button>,
      <Button
        key="3"
        variant="outline"
      >
        Button 3
      </Button>,
    ],
  },
}

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    gap: 'lg',
    children: [
      <Button
        key="1"
        variant="default"
      >
        Button 1
      </Button>,
      <Button
        key="2"
        variant="secondary"
      >
        Button 2
      </Button>,
      <Button
        key="3"
        variant="outline"
      >
        Button 3
      </Button>,
    ],
  },
}

export const CustomGap: Story = {
  args: {
    direction: 'horizontal',
    gap: 'xl',
    children: [
      <Button
        key="1"
        variant="default"
      >
        Button 1
      </Button>,
      <Button
        key="2"
        variant="secondary"
      >
        Button 2
      </Button>,
      <Button
        key="3"
        variant="outline"
      >
        Button 3
      </Button>,
    ],
  },
}
