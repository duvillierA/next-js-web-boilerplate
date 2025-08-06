import { Checkbox } from '@boilerplate/ui/checkbox'
import { Input } from '@boilerplate/ui/input'
import { Label } from '@boilerplate/ui/label'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Label> = {
  title: 'Components/Forms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A label component for form inputs and other elements. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The label text',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="m@example.com"
      />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input
        id="username"
        required
        placeholder="Enter your username"
      />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        placeholder="Enter your username"
      />
      <p className="text-sm text-muted-foreground">
        This is your public display name. It will be visible to other users.
      </p>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="disabled-input"
        className="text-muted-foreground"
      >
        Disabled Input
      </Label>
      <Input
        id="disabled-input"
        disabled
        placeholder="This input is disabled"
      />
    </div>
  ),
}

export const MultipleInputs: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="first-name">First Name</Label>
        <Input
          id="first-name"
          placeholder="John"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="last-name">Last Name</Label>
        <Input
          id="last-name"
          placeholder="Doe"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
        />
      </div>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="email"
        className="text-destructive"
      >
        Email
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="m@example.com"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm text-destructive">Please enter a valid email address.</p>
    </div>
  ),
}

export const LongText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="long-label">
        This is a very long label text that demonstrates how the label component handles extended
        content and wraps appropriately
      </Label>
      <Input
        id="long-label"
        placeholder="Input with long label"
      />
    </div>
  ),
}
