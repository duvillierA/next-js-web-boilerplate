import { Button } from '@boilerplate/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@boilerplate/ui/tooltip'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AlertCircle, HelpCircle, Info } from 'lucide-react'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component for displaying additional information on hover. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
        >
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Click for more information</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Long tooltip</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          This is a longer tooltip that demonstrates how the component handles extended content and
          wraps appropriately while maintaining readability.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Help</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Get help with this feature</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Info</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>View additional information</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Settings</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Configure your preferences</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const WithRichContent: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Rich content</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <div className="space-y-2">
          <h4 className="font-semibold">Feature Information</h4>
          <p className="text-sm text-muted-foreground">
            This feature allows you to customize your experience with advanced options.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <AlertCircle className="h-3 w-3" />
            <span>Requires premium subscription</span>
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          disabled
        >
          Disabled button
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This button is disabled</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const FormFieldHelp: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <div className="flex items-center gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium"
        >
          Email
        </label>
        <Tooltip>
          <TooltipTrigger asChild>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Enter your email address for account verification</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <input
        id="email"
        type="email"
        placeholder="m@example.com"
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  ),
}

export const StatusIndicator: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="h-3 w-3 cursor-help rounded-full bg-green-500" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Online</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="h-3 w-3 cursor-help rounded-full bg-yellow-500" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Away</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="h-3 w-3 cursor-help rounded-full bg-red-500" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Offline</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}
