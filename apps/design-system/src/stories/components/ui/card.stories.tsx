import { Button } from '@boilerplate/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@boilerplate/ui/card'
import { Stack } from '@boilerplate/ui/layout'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

const meta: Meta<typeof Card> = {
  title: 'Components/Data Display/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['surface', 'classic'],
      defaultValue: 'classic',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card
      className="w-[350px]"
      {...args}
    >
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the card content. It can contain any type of content including text, images, or
          other components.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: (args) => (
    <Card
      className="w-[350px]"
      {...args}
    >
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>This card has an action button in the header</CardDescription>
        <CardAction>
          <Button
            variant="outline"
            size="sm"
          >
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>The action button is positioned in the top-right corner of the header.</p>
      </CardContent>
    </Card>
  ),
}

export const ContentOnly: Story = {
  render: (args) => (
    <Card
      className="w-[350px]"
      {...args}
    >
      <CardContent>
        <p>This card only has content, no header or footer.</p>
      </CardContent>
    </Card>
  ),
}

export const HeaderOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Header Only</CardTitle>
        <CardDescription>This card only has a header section</CardDescription>
      </CardHeader>
    </Card>
  ),
}

export const FooterOnly: Story = {
  render: (args) => (
    <Card
      className="w-[350px]"
      {...args}
    >
      <CardContent>
        <p>This card has content and footer but no header.</p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary</Button>
      </CardFooter>
    </Card>
  ),
}

export const ComplexLayout: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card {...args}>
        <CardHeader>
          <CardTitle>Project Alpha</CardTitle>
          <CardDescription>An innovative project with cutting-edge technology</CardDescription>
          <CardAction>
            <Button
              variant="outline"
              size="sm"
            >
              View
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Stack gap="sm">
            <Stack
              justify="between"
              direction="horizontal"
            >
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="text-sm font-medium">Active</span>
            </Stack>
            <Stack
              justify="between"
              direction="horizontal"
            >
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </Stack>
            <Stack
              justify="between"
              direction="horizontal"
            >
              <span className="text-sm text-muted-foreground">Team</span>
              <span className="text-sm font-medium">8 members</span>
            </Stack>
          </Stack>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2 border-t">
          <Button>Edit Project</Button>
          <Button variant="outline">Share</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}

function InteractiveDemo() {
  const [selected, setSelected] = useState(false)
  return (
    <Card
      interactive
      selected={selected}
      onClick={() => setSelected((prev) => !prev)}
    >
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>
          This card is <span className="font-semibold">interactive</span>. It will show pointer and
          focus styles.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Click or focus this card to see interactive feedback.</p>
      </CardContent>
    </Card>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story: 'This card is interactive. It will show pointer and focus styles.',
      },
    },
  },
}
