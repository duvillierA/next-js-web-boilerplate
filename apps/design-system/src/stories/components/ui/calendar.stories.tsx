'use client'

import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { Calendar } from '@boilerplate/ui/calendar'

const meta: Meta<typeof Calendar> = {
  title: 'Components/Data/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A calendar component built with [react-day-picker](https://react-day-picker.js.org/) and styled for the design system.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow-sm"
      captionLayout="dropdown"
    />
  )
}

export const Default: Story = {
  render: () => <CalendarDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'A single-date calendar with dropdown month/year selection. The selected date is managed via React state.',
      },
    },
  },
}
