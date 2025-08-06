import { Label } from '@boilerplate/ui/label'
import { Textarea } from '@boilerplate/ui/textarea'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A textarea component for multi-line text input. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the textarea',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="message">Message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here..."
      />
    </div>
  ),
}

export const WithValue: Story = {
  args: {
    defaultValue:
      'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This textarea is disabled',
  },
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="required-message">
        Message <span className="text-destructive">*</span>
      </Label>
      <Textarea
        id="required-message"
        required
        placeholder="This field is required..."
      />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label
        htmlFor="error-message"
        className="text-destructive"
      >
        Message
      </Label>
      <Textarea
        id="error-message"
        placeholder="Type your message here..."
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm text-destructive">Please enter a valid message.</p>
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="small-textarea">Small</Label>
        <Textarea
          id="small-textarea"
          className="min-h-[80px]"
          placeholder="Small textarea"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="default-textarea">Default</Label>
        <Textarea
          id="default-textarea"
          placeholder="Default textarea"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="large-textarea">Large</Label>
        <Textarea
          id="large-textarea"
          className="min-h-[200px] text-lg"
          placeholder="Large textarea"
        />
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        placeholder="Tell us a little bit about yourself..."
      />
      <p className="text-sm text-muted-foreground">
        This will be displayed on your public profile.
      </p>
    </div>
  ),
}

export const CharacterCount: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="limited-textarea">Limited Text</Label>
      <Textarea
        id="limited-textarea"
        placeholder="Type here (max 100 characters)..."
        maxLength={100}
      />
      <p className="text-sm text-muted-foreground">You can type up to 100 characters.</p>
    </div>
  ),
}

export const Resizable: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="resizable-textarea">Resizable Textarea</Label>
      <Textarea
        id="resizable-textarea"
        placeholder="This textarea can be resized by dragging the corner..."
        className="resize"
      />
    </div>
  ),
}

export const NonResizable: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="non-resizable-textarea">Non-Resizable Textarea</Label>
      <Textarea
        id="non-resizable-textarea"
        placeholder="This textarea cannot be resized..."
        className="resize-none"
      />
    </div>
  ),
}
