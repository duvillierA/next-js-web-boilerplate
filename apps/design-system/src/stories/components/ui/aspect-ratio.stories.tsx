import { AspectRatio } from '@boilerplate/ui/aspect-ratio'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A component that maintains a consistent width/height ratio. Useful for responsive images, videos, and other media. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The aspect ratio (width / height)',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <span className="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
      </div>
    ),
  },
}

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <span className="text-sm text-muted-foreground">1:1 Square</span>
      </div>
    ),
  },
}

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <span className="text-sm text-muted-foreground">3:4 Portrait</span>
      </div>
    ),
  },
}

export const Landscape: Story = {
  args: {
    ratio: 4 / 3,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <span className="text-sm text-muted-foreground">4:3 Landscape</span>
      </div>
    ),
  },
}

export const UltraWide: Story = {
  args: {
    ratio: 21 / 9,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-muted">
        <span className="text-sm text-muted-foreground">21:9 Ultra Wide</span>
      </div>
    ),
  },
}

export const WithImage: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="A beautiful landscape"
        className="object-cover"
      />
    ),
  },
}

export const WithVideo: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video"
        className="h-full w-full rounded-lg"
        allowFullScreen
      />
    ),
  },
}

export const Responsive: Story = {
  args: {
    ratio: 16 / 9,
    className: 'w-full max-w-md',
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        <span className="text-sm font-medium text-white">Responsive Container</span>
      </div>
    ),
  },
}
