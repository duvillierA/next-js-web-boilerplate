import { Input } from '@boilerplate/ui/input'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Input> = {
  title: 'Components/Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An input component for text, email, password, and other form inputs. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The type of input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        htmlFor="email"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Email
      </label>
      <Input
        type="email"
        id="email"
        placeholder="m@example.com"
      />
    </div>
  ),
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter a number',
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a pre-filled input',
  },
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        htmlFor="username"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Username *
      </label>
      <Input
        id="username"
        required
        placeholder="Enter your username"
      />
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        htmlFor="email"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Email
      </label>
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

export const WithIcon: Story = {
  render: () => (
    <div className="relative">
      <svg
        className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Input
        className="pl-10"
        placeholder="Search..."
      />
    </div>
  ),
}

export const DifferentSizes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <div className="grid gap-1.5">
        <label
          htmlFor="small-input"
          className="text-sm font-medium"
        >
          Small
        </label>
        <Input
          id="small-input"
          className="h-8"
          placeholder="Small input"
        />
      </div>
      <div className="grid gap-1.5">
        <label
          htmlFor="default-input"
          className="text-sm font-medium"
        >
          Default
        </label>
        <Input
          id="default-input"
          placeholder="Default input"
        />
      </div>
      <div className="grid gap-1.5">
        <label
          htmlFor="large-input"
          className="text-sm font-medium"
        >
          Large
        </label>
        <Input
          id="large-input"
          className="h-12 text-lg"
          placeholder="Large input"
        />
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <label
        htmlFor="username"
        className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Username
      </label>
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

export const CustomStyling: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-4">
      <Input
        className="border-blue-500 focus-visible:ring-blue-500"
        placeholder="Blue border"
      />
      <Input
        className="border-green-500 focus-visible:ring-green-500"
        placeholder="Green border"
      />
      <Input
        className="border-purple-500 focus-visible:ring-purple-500"
        placeholder="Purple border"
      />
    </div>
  ),
}
