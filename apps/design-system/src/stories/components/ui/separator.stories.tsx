import { Separator } from '@boilerplate/ui/separator'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Separator> = {
  title: 'Components/UI/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A separator component for dividing content sections. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
    decorative: {
      control: 'boolean',
      description: 'Whether the separator is purely decorative',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Left content</div>
      <Separator orientation="vertical" />
      <div>Right content</div>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm leading-none font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm leading-none font-medium">Tailwind CSS</h4>
        <p className="text-sm text-muted-foreground">A utility-first CSS framework.</p>
      </div>
    </div>
  ),
}

export const MultipleSeparators: Story = {
  render: () => (
    <div className="space-y-4">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
      <Separator />
      <div>Section 4</div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-4">
      <div className="space-y-4">
        <div>
          <h4 className="text-sm leading-none font-medium">Account</h4>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">john@example.com</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">Change</button>
        </div>
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Password</p>
            <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">Change</button>
        </div>
      </div>
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <nav className="flex items-center space-x-4">
        <button className="text-sm font-medium hover:text-blue-600">Home</button>
        <Separator orientation="vertical" />
        <button className="text-sm font-medium hover:text-blue-600">About</button>
        <Separator orientation="vertical" />
        <button className="text-sm font-medium hover:text-blue-600">Services</button>
        <Separator orientation="vertical" />
        <button className="text-sm font-medium hover:text-blue-600">Contact</button>
      </nav>
    </div>
  ),
}

export const ListSeparators: Story = {
  render: () => (
    <div className="w-[300px] space-y-1">
      <div className="flex items-center justify-between rounded p-2 hover:bg-muted">
        <span>Item 1</span>
        <span className="text-muted-foreground">Value 1</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between rounded p-2 hover:bg-muted">
        <span>Item 2</span>
        <span className="text-muted-foreground">Value 2</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between rounded p-2 hover:bg-muted">
        <span>Item 3</span>
        <span className="text-muted-foreground">Value 3</span>
      </div>
      <Separator />
      <div className="flex items-center justify-between rounded p-2 hover:bg-muted">
        <span>Item 4</span>
        <span className="text-muted-foreground">Value 4</span>
      </div>
    </div>
  ),
}

export const Decorative: Story = {
  args: {
    decorative: true,
  },
  render: () => (
    <div className="space-y-4">
      <div>Content above</div>
      <Separator decorative />
      <div>Content below</div>
    </div>
  ),
}
