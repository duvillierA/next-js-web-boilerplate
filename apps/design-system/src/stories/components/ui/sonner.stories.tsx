import { Button } from '@boilerplate/ui/button'
import { Toaster } from '@boilerplate/ui/sonner'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { toast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'Components/UI/Sonner',
  component: Toaster,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A toast component for notifications using Sonner. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Event has been created')
      }}
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.success('Success!', {
          description: 'Your changes have been saved successfully.',
        })
      }}
    >
      Show Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.error('Error!', {
          description: 'Something went wrong. Please try again.',
        })
      }}
    >
      Show Error Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.info('Info', {
          description: 'Here is some information for you.',
        })
      }}
    >
      Show Info Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast.warning('Warning!', {
          description: 'Please review your settings before proceeding.',
        })
      }}
    >
      Show Warning Toast
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Undo Changes', {
          description: 'Your changes have been saved.',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo clicked'),
          },
        })
      }}
    >
      Show Toast with Action
    </Button>
  ),
}

export const WithPromise: Story = {
  render: () => (
    <Button
      onClick={() => {
        const promise = new Promise((resolve) => {
          setTimeout(() => {
            resolve('Success!')
          }, 2000)
        })

        toast.promise(promise, {
          loading: 'Loading...',
          success: 'Success!',
          error: 'Error!',
        })
      }}
    >
      Show Promise Toast
    </Button>
  ),
}

export const MultipleToasts: Story = {
  render: () => (
    <div className="space-y-2">
      <Button
        onClick={() => {
          toast('First toast')
          toast('Second toast')
          toast('Third toast')
        }}
      >
        Show Multiple Toasts
      </Button>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Rich Content', {
          description: (
            <div className="space-y-2">
              <p>This toast contains rich content with multiple elements.</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm">Status: Active</span>
              </div>
            </div>
          ),
        })
      }}
    >
      Show Rich Content Toast
    </Button>
  ),
}

export const Dismissible: Story = {
  render: () => (
    <Button
      onClick={() => {
        toast('Dismissible Toast', {
          description: 'This toast can be dismissed manually.',
          dismissible: true,
        })
      }}
    >
      Show Dismissible Toast
    </Button>
  ),
}
