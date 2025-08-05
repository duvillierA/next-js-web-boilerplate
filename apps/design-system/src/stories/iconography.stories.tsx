import type { Meta, StoryObj } from '@storybook/react'
import * as LucideIcons from 'lucide-react'

// Option 1: Use a curated list (current approach)
const iconNames = [
  'Activity',
  'AlertCircle',
  'ArrowRight',
  'Bell',
  'Bookmark',
  'Calendar',
  'Camera',
  'Check',
  'ChevronDown',
  'Circle',
  'CircleCheck',
  'CircleHelp',
  'Clipboard',
  'Clock',
  'Cloud',
  'Code',
  'Copy',
  'Download',
  'Edit',
  'Eye',
  'File',
  'Folder',
  'Heart',
  'Home',
  'Image',
  'Info',
  'Link',
  'List',
  'Lock',
  'Mail',
  'Menu',
  'MessageCircle',
  'Moon',
  'MoreHorizontal',
  'MoreVertical',
  'Paperclip',
  'Pen',
  'Phone',
  'Plus',
  'RefreshCcw',
  'Search',
  'Settings',
  'Share',
  'Star',
  'Sun',
  'Tag',
  'Trash',
  'Upload',
  'User',
  'Users',
  'X',
] as const

const meta: Meta = {
  title: 'Design System/Iconography',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Iconography: Story = {
  render: () => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] gap-6">
      {iconNames.map((iconName) => {
        const Icon = LucideIcons[iconName]
        if (!Icon) return null
        return (
          <div
            key={iconName}
            className="flex flex-col items-center gap-2"
          >
            <Icon />
            <span className="text-center text-xs break-all">{iconName}</span>
          </div>
        )
      })}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A gallery of commonly used [lucide-react](https://lucide.dev/) icons. Use these icons in your UI components for consistent iconography.',
      },
    },
  },
}
