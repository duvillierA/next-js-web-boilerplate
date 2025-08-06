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
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Card> = {
  title: 'Components/Interactive/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
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
  render: () => (
    <Card className="w-[350px]">
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
  render: () => (
    <Card className="w-[350px]">
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
  render: () => (
    <Card className="w-[350px]">
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
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
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
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Status</span>
              <span className="text-sm font-medium">Active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Team</span>
              <span className="text-sm font-medium">8 members</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button>Edit Project</Button>
          <Button variant="outline">Share</Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
