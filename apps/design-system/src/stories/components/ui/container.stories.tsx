import { Container } from '@boilerplate/ui/layout'
import { cn } from '@boilerplate/ui/utils'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    gutterType: {
      control: { type: 'radio' },
      options: ['all', 'left', 'right'],
      description: 'Which sides to apply horizontal gutter (padding)',
      defaultValue: 'all',
    },
    gutter: {
      control: { type: 'radio' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Gutter size',
    },
    center: {
      control: { type: 'boolean' },
      description: 'Center the container horizontally',
      defaultValue: true,
    },
  },
}

export default meta

type Story = StoryObj<typeof Container>

function Child({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('h-32 rounded bg-muted p-4', className)}>{children}</section>
}

export const Default: Story = {
  args: {
    children: (
      <Child>
        This is a <b>Container</b> component. Resize the window to see responsive behavior.
      </Child>
    ),
  },
}

export const GutterSizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      {(['none', 'sm', 'md', 'lg'] as const).map((gutter) => (
        <Container
          key={gutter}
          {...args}
          gutter={gutter}
        >
          <Child>
            Gutter: <b>{gutter}</b>
          </Child>
        </Container>
      ))}
    </div>
  ),
  args: {
    gutterType: 'all',
    center: true,
  },
}

export const GutterTypes: Story = {
  render: (args) => (
    <div className="space-y-4">
      {(['all', 'left', 'right'] as const).map((gutterType) => (
        <Container
          key={gutterType}
          {...args}
          gutterType={gutterType}
        >
          <Child>
            Gutter Type: <b>{gutterType}</b>
          </Child>
        </Container>
      ))}
    </div>
  ),
  args: {
    gutter: 'md',
    center: true,
  },
}

export const NotCentered: Story = {
  args: {
    center: false,
    children: (
      <Child>
        <strong>Not centered</strong> container.
      </Child>
    ),
  },
}

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <Child>Container asChild</Child>,
  },
}
