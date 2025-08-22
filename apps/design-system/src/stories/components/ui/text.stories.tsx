import { VStack } from '@boilerplate/ui/stack'
import { Text } from '@boilerplate/ui/text'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: { type: 'text' },
      description: 'The HTML element or React component to render as.',
      defaultValue: 'span',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
      description: 'Text size',
      defaultValue: 'base',
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
      defaultValue: 'normal',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'accent', 'muted', 'primary', 'secondary', 'destructive'],
      description: 'Text color variant',
      defaultValue: 'default',
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      defaultValue: 'left',
    },
    truncate: {
      control: { type: 'boolean' },
      description: 'Truncate text with ellipsis',
      defaultValue: false,
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names',
    },
    children: {
      control: { type: 'text' },
      description: 'Text content',
      defaultValue: 'Sample text',
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'This is default text.',
  },
}

export const Sizes: Story = {
  render: (args) => (
    <VStack>
      <Text {...args} size="xs">
        Extra Small
      </Text>
      <Text {...args} size="sm">
        Small
      </Text>
      <Text {...args} size="base">
        Base
      </Text>
      <Text {...args} size="lg">
        Large
      </Text>
      <Text {...args} size="xl">
        Extra Large
      </Text>
      <Text {...args} size="2xl">
        2XL
      </Text>
    </VStack>
  ),
}

export const Weights: Story = {
  render: (args) => (
    <VStack>
      <Text {...args} weight="normal">
        Normal
      </Text>
      <Text {...args} weight="medium">
        Medium
      </Text>
      <Text {...args} weight="semibold">
        Semibold
      </Text>
      <Text {...args} weight="bold">
        Bold
      </Text>
    </VStack>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <VStack>
      <Text {...args} variant="default">
        Default
      </Text>
      <Text {...args} variant="accent">
        Accent
      </Text>
      <Text {...args} variant="muted">
        Muted
      </Text>
      <Text {...args} variant="primary">
        Primary
      </Text>
      <Text {...args} variant="secondary">
        Secondary
      </Text>
      <Text {...args} variant="destructive">
        Destructive
      </Text>
    </VStack>
  ),
}

export const Alignment: Story = {
  render: (args) => (
    <VStack>
      <Text {...args} align="left">
        Left aligned text
      </Text>
      <Text {...args} align="center">
        Center aligned text
      </Text>
      <Text {...args} align="right">
        Right aligned text
      </Text>
      <Text {...args} align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis
        neque.
      </Text>
    </VStack>
  ),
}

export const Truncate: Story = {
  args: {
    truncate: true,
    style: { maxWidth: 200, display: 'block' },
    children:
      'This is a very long text that should be truncated with an ellipsis if it exceeds the container width.',
  },
}
