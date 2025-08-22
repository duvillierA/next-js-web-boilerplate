import { cn } from '@boilerplate/ui/utils'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

const ColorSwatch: React.FC<{ name: string; className?: string }> = ({ name, className }) => (
  <div className="flex flex-col items-center divide-y divide-border overflow-hidden rounded-md border">
    <div className={cn(`inline-flex h-16 w-full items-center justify-center text-sm`, className)}>
      {className?.includes('foreground') ? 'Lorem ipsum.' : ''}
    </div>
    <div className="space-y-1 p-2 text-center">
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-muted-foreground">
        <code className="bg-muted p-1 text-xs text-muted-foreground">{className}</code>
      </div>
    </div>
  </div>
)

interface RenderRowProps {
  colors: Array<{ name: string; className: string }>
  sectionClassName?: string
}

const RenderRow: React.FC<RenderRowProps> = ({ colors, sectionClassName }) => {
  return (
    <section className={cn('grid grid-flow-col gap-2', sectionClassName)}>
      {colors.map(({ name, className }) => (
        <ColorSwatch key={name} name={name} className={className} />
      ))}
    </section>
  )
}

const RenderSection: React.FC<{
  title: string
  rows: { name: string; className: string }[][]
}> = ({ title, rows }) => {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="flex flex-col gap-4">
        {rows.map((row, i) => (
          <RenderRow key={i} colors={row} />
        ))}
      </div>
    </>
  )
}

/**
 * ThemeComponent displays color swatches for theme, chart, and sidebar colors.
 * Avoids duplicate className by mapping over color definitions.
 */
function ThemeComponent() {
  const themeRows = [
    [
      { name: 'Primary', className: 'bg-primary text-primary-foreground' },
      { name: 'Secondary', className: 'bg-secondary text-secondary-foreground' },
      { name: 'Muted', className: 'bg-muted text-muted-foreground' },
      { name: 'Accent', className: 'bg-accent text-accent-foreground' },
      { name: 'Destructive', className: 'bg-destructive text-destructive-foreground' },
    ],
    [{ name: 'Background', className: 'bg-background text-foreground' }],
    [
      { name: 'Border', className: 'bg-border' },
      { name: 'Input', className: 'bg-input' },
      { name: 'Ring', className: 'bg-ring' },
    ],
  ]

  const cardColors = [{ name: 'Card', className: 'bg-card text-card-foreground' }]

  const chartColors = [
    { name: 'Chart 1', className: 'bg-chart-1' },
    { name: 'Chart 2', className: 'bg-chart-2' },
    { name: 'Chart 3', className: 'bg-chart-3' },
    { name: 'Chart 4', className: 'bg-chart-4' },
    { name: 'Chart 5', className: 'bg-chart-5' },
  ]

  const sidebarColors = [
    { name: 'Sidebar', className: 'bg-sidebar text-sidebar-foreground' },
    { name: 'Sidebar Primary', className: 'bg-sidebar-primary text-sidebar-primary-foreground' },
    { name: 'Sidebar Accent', className: 'bg-sidebar-accent text-sidebar-accent-foreground' },
    { name: 'Sidebar Border', className: 'bg-sidebar-border' },
    { name: 'Sidebar Ring', className: 'bg-sidebar-ring' },
  ]

  return (
    <div className={cn('space-y-8')}>
      <RenderSection title="Theme Colors" rows={themeRows} />
      <RenderSection title="Card Colors" rows={[cardColors]} />
      <RenderSection title="Chart Colors" rows={[chartColors]} />
      <RenderSection title="Sidebar Colors" rows={[sidebarColors]} />
    </div>
  )
}

export const Colors: Story = {
  render: () => <ThemeComponent />,
}
