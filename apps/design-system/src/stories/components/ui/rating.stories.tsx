import { Rating } from '@boilerplate/ui/rating'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Rating> = {
  title: 'Components/Data Display/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 5, step: 0.5 },
      defaultValue: 3,
    },
    max: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      defaultValue: 5,
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'gold', 'primary'],
      defaultValue: 'default',
    },
  },
}

export default meta

type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    value: 3.5,
    max: 5,
    variant: 'default',
  },
}

export const Primary: Story = {
  args: {
    value: 4,
    max: 5,
    variant: 'primary',
  },
}

export const Gold: Story = {
  args: {
    value: 2,
    max: 5,
    variant: 'gold',
  },
}

export const TenStars: Story = {
  args: {
    value: 7.5,
    max: 10,
    variant: 'default',
  },
}
