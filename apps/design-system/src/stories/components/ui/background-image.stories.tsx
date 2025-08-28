import { BgImage, BgImageContent, BgImageSlot } from '@boilerplate/ui/background-image'
import { Container } from '@boilerplate/ui/container'
import type { Meta, StoryObj } from '@storybook/react'
import NextImage from 'next/image'

const meta: Meta = {
  title: 'Components/Layout/BackgroundImage',
  component: BgImage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    overlay: {
      control: 'select',
      options: ['light', 'dark', 'none'],
    },
  },
}
export default meta

type Story = StoryObj<typeof BgImage>

export const Default: Story = {
  render: ({ overlay }) => (
    <BgImage overlay={overlay}>
      <BgImageSlot asChild>
        <NextImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Background"
          fill
          sizes="100vw"
        />
      </BgImageSlot>
      <BgImageContent className="flex h-96 items-center justify-center">
        <span className="text-2xl font-bold text-white">Background Image Content</span>
      </BgImageContent>
    </BgImage>
  ),
}

export const WithDarkOverlay: Story = {
  render: () => (
    <BgImage overlay="dark">
      <BgImageSlot asChild>
        <NextImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Background"
          fill
          sizes="100vw"
        />
      </BgImageSlot>
      <BgImageContent className="flex h-96 flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">With Dark Overlay</span>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </BgImageContent>
    </BgImage>
  ),
}

export const WithLightOverlay: Story = {
  render: () => (
    <BgImage overlay="light">
      <BgImageSlot asChild>
        <NextImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Background"
          fill
          sizes="100vw"
        />
      </BgImageSlot>
      <BgImageContent className="flex h-96 flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">With Dark Overlay</span>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </BgImageContent>
    </BgImage>
  ),
}

export const WithContainerContent: Story = {
  render: () => (
    <BgImage overlay="dark">
      <BgImageSlot asChild>
        <NextImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Background"
          fill
          sizes="100vw"
        />
      </BgImageSlot>
      <BgImageContent asChild>
        <Container className="flex h-96 flex-col items-center justify-center">
          <span className="text-2xl font-bold text-white">With Container</span>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Container>
      </BgImageContent>
    </BgImage>
  ),
}
