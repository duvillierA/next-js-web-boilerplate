import { Button } from '@boilerplate/ui/button'
import {
  MediaActions,
  MediaText,
  MediaTextContent,
  MediaTextDescription,
  MediaTextHeader,
  MediaTextImage,
  MediaTextSubtitle,
  MediaTextTitle,
} from '@boilerplate/ui/media-text'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Image from 'next/image'

const placeholderImage = 'https://placehold.co/400x300'
const placeholderWideImage = 'https://placehold.co/1600x900'
const meta: Meta = {
  title: 'Components/Layout/MediaText',
  component: MediaText,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A component that displays media (image/video) alongside text content. Supports reversed ordering and responsive behavior.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <MediaText>
      <MediaTextImage>
        <Image
          src={placeholderImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="Sample"
          className="object-cover"
        />
      </MediaTextImage>
      <MediaTextContent>
        <MediaTextHeader>
          <MediaTextTitle>Beautiful Landscapes</MediaTextTitle>
          <MediaTextSubtitle as={'p'}>Subtitle goes here</MediaTextSubtitle>
        </MediaTextHeader>
        <MediaTextDescription as={'p'}>
          Discover breathtaking views and tranquil scenes from around the world. Our curated
          collection brings the beauty of nature to your screen.
        </MediaTextDescription>
        <MediaActions>
          <Button variant="default" size={'lg'}>
            Explore
          </Button>
          <Button variant="outline" size={'lg'}>
            Learn More
          </Button>
        </MediaActions>
      </MediaTextContent>
    </MediaText>
  ),
  name: 'Default',
}

export const WithReversedImage: Story = {
  render: () => (
    <MediaText reversed>
      <MediaTextImage>
        <Image
          src={placeholderImage}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          alt="Sample"
          className="object-cover"
        />
      </MediaTextImage>
      <MediaTextContent>
        <MediaTextHeader>
          <MediaTextTitle>Adventure Awaits</MediaTextTitle>
          <MediaTextSubtitle as={'p'}>Subtitle goes here</MediaTextSubtitle>
        </MediaTextHeader>
        <MediaTextDescription as={'p'}>
          Step outside and experience the wonders of the world. Adventure is just a step away with
          our travel guides and tips.
        </MediaTextDescription>
        <MediaActions>
          <Button variant="default">Get Started</Button>
        </MediaActions>
      </MediaTextContent>
    </MediaText>
  ),
  name: 'With Custom Order',
}

export const withCustomRatio: Story = {
  render: () => (
    <MediaText>
      <MediaTextImage ratio={16 / 9}>
        <Image
          src={placeholderWideImage}
          alt="Sample"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </MediaTextImage>
      <MediaTextContent>
        <MediaTextHeader>
          <MediaTextTitle>Beautiful Landscapes</MediaTextTitle>
          <MediaTextSubtitle as={'p'}>Subtitle goes here</MediaTextSubtitle>
        </MediaTextHeader>
        <MediaTextDescription as={'p'}>
          Discover breathtaking views and tranquil scenes from around the world. Our curated
          collection brings the beauty of nature to your screen.
        </MediaTextDescription>
      </MediaTextContent>
    </MediaText>
  ),
  name: 'With Custom Ratio',
}

export const withVideo: Story = {
  render: () => (
    <MediaText>
      <MediaTextImage ratio={16 / 9}>
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </MediaTextImage>
      <MediaTextContent>
        <MediaTextHeader>
          <MediaTextTitle>Beautiful Video</MediaTextTitle>
          <MediaTextSubtitle as={'p'}>Subtitle goes here</MediaTextSubtitle>
        </MediaTextHeader>
        <MediaTextDescription as={'p'}>
          This is a video description. It can be used to provide more information about the video.
        </MediaTextDescription>
      </MediaTextContent>
    </MediaText>
  ),
}

export const WithOnlyTitle: Story = {
  render: () => (
    <MediaText>
      <MediaTextImage>
        <Image src={placeholderImage} alt="Sample" fill className="object-cover" />
      </MediaTextImage>
      <MediaTextContent>
        <MediaTextHeader>
          <MediaTextTitle>Beautiful Landscapes</MediaTextTitle>
        </MediaTextHeader>
      </MediaTextContent>
    </MediaText>
  ),
  name: 'With Only Title',
}
