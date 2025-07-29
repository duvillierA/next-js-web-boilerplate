import { Checkbox } from '@boilerplate/ui/checkbox'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A checkbox component for boolean input. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'terms',
  },
}

export const Checked: Story = {
  args: {
    id: 'terms',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'terms',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: 'terms',
    checked: true,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Checkbox id="option1" />
        <label
          htmlFor="option1"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="option2"
          defaultChecked
        />
        <label
          htmlFor="option2"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="option3"
          disabled
        />
        <label
          htmlFor="option3"
          className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Option 3 (Disabled)
        </label>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Checkbox id="notifications" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="notifications"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Email notifications
          </label>
          <p className="text-sm text-muted-foreground">
            Receive emails about your account activity.
          </p>
        </div>
      </div>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="required"
        required
      />
      <label
        htmlFor="required"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to the terms and conditions *
      </label>
    </div>
  ),
}
