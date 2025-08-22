import { Label } from '@boilerplate/ui/label'
import { Switch } from '@boilerplate/ui/switch'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Components/Data Entry/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A switch component for toggling between two states. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is checked',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the switch is required',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'airplane-mode',
  },
}

export const Checked: Story = {
  args: {
    id: 'airplane-mode',
    checked: true,
  },
}

export const Disabled: Story = {
  args: {
    id: 'airplane-mode',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    id: 'airplane-mode',
    checked: true,
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
}

export const MultipleSwitches: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Push notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="marketing" defaultChecked />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="updates" disabled />
        <Label htmlFor="updates">System updates</Label>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <Switch id="dark-mode" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="dark-mode">Dark mode</Label>
          <p className="text-sm text-muted-foreground">
            Toggle dark mode on or off for better viewing in low light conditions.
          </p>
        </div>
      </div>
    </div>
  ),
}

function ControlledSwitch() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="flex items-center space-x-2">
      <Switch id="controlled" checked={checked} onCheckedChange={setChecked} />
      <Label htmlFor="controlled">Controlled switch: {checked ? 'On' : 'Off'}</Label>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledSwitch />,
}

export const Large: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="large-switch" className="h-6 w-11" />
      <Label htmlFor="large-switch" className="text-lg">
        Large switch
      </Label>
    </div>
  ),
}

export const Small: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="small-switch" className="h-4 w-7" />
      <Label htmlFor="small-switch" className="text-sm">
        Small switch
      </Label>
    </div>
  ),
}

export const SettingsPanel: Story = {
  render: () => (
    <div className="w-[300px] space-y-4 rounded-lg border p-4">
      <h3 className="text-lg font-semibold">Settings</h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive push notifications</p>
          </div>
          <Switch id="notifications" />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing">Marketing emails</Label>
            <p className="text-sm text-muted-foreground">Receive marketing emails</p>
          </div>
          <Switch id="marketing" defaultChecked />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="updates">System updates</Label>
            <p className="text-sm text-muted-foreground">Automatic system updates</p>
          </div>
          <Switch id="updates" disabled />
        </div>
      </div>
    </div>
  ),
}
