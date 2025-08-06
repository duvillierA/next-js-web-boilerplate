import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@boilerplate/ui/accordion'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Interactive/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A collapsible content component that can be used to organize and display content in an expandable format. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether to allow single or multiple items to be expanded',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether to allow all items to be collapsed when type is "single"',
    },
    defaultValue: {
      control: 'text',
      description: 'The default value for the accordion',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! When you set the type to &quot;multiple&quot;, you can open multiple items at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it customizable?</AccordionTrigger>
          <AccordionContent>
            Absolutely! You can customize the styling, animations, and behavior to match your design
            system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Does it work with keyboard navigation?</AccordionTrigger>
          <AccordionContent>
            Yes, it supports full keyboard navigation and follows accessibility guidelines.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}
