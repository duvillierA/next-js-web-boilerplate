import { Alert, AlertDescription, AlertTitle } from '@boilerplate/ui/alert'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AlertCircle, XCircle } from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'Components/UI/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component for displaying important messages to users. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
      description: 'The visual style variant of the alert',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </>
    ),
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <XCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in to the store again.
        </AlertDescription>
      </>
    ),
  },
}

export const WithoutIcon: Story = {
  args: {
    children: (
      <>
        <AlertTitle>No Icon</AlertTitle>
        <AlertDescription>
          This alert doesn&apos;t have an icon, but you can add one if needed.
        </AlertDescription>
      </>
    ),
  },
}

export const LongContent: Story = {
  args: {
    children: (
      <>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          This is a longer alert message that demonstrates how the component handles extended
          content. The alert will expand to accommodate the text while maintaining proper spacing
          and readability.
        </AlertDescription>
      </>
    ),
  },
}
