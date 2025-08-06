import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@boilerplate/ui/collapsible'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Interactive/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collapsible component that can show/hide content. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function DefaultCollapsible() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <button className="rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  )
}

function SimpleCollapsible() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 text-left font-medium hover:bg-accent">
        <span>Click to expand</span>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          This is the collapsible content. It can contain any elements you want to show or hide.
        </p>
      </CollapsibleContent>
    </Collapsible>
  )
}

export const Default: Story = {
  render: () => <DefaultCollapsible />,
}

export const Simple: Story = {
  render: () => <SimpleCollapsible />,
}
