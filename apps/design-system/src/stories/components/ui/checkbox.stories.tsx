import { Checkbox } from '@boilerplate/ui/checkbox'
import { Label } from '@boilerplate/ui/label'
import { Spacing } from '@boilerplate/ui/layout'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Data Entry/Checkbox',
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
    id: 'terms-checked',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'terms-disabled',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: 'terms-disabled-checked',
    checked: true,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <Spacing
      direction="horizontal"
      gap="sm"
    >
      <Checkbox id="terms-with-label" />
      <Label
        htmlFor="terms-with-label"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </Label>
    </Spacing>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="space-y-3">
      <Spacing
        direction="horizontal"
        gap="sm"
      >
        <Checkbox id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </Spacing>
      <Spacing
        direction="horizontal"
        gap="sm"
      >
        <Checkbox
          id="option2"
          defaultChecked
        />
        <Label htmlFor="option2">Option 2</Label>
      </Spacing>
      <Spacing
        direction="horizontal"
        gap="sm"
      >
        <Checkbox
          id="option3"
          disabled
        />
        <Label htmlFor="option3">Option 3 (Disabled)</Label>
      </Spacing>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Spacing
      direction="horizontal"
      gap="sm"
    >
      <Checkbox id="notifications" />
      <Spacing
        align="baseline"
        direction="vertical"
        gap="xs"
      >
        <Label htmlFor="notifications">Email notifications</Label>
        <p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
      </Spacing>
    </Spacing>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="required"
        required
      />
      <Label htmlFor="required">I agree to the terms and conditions *</Label>
    </div>
  ),
}
