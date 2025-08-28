import { BgImage, BgImageContent, BgImageSlot } from '@boilerplate/ui/background-image'
import { Button } from '@boilerplate/ui/button'
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroHeader,
  HeroImage,
  HeroTitle,
} from '@boilerplate/ui/hero'
import { Container } from '@boilerplate/ui/layout'
import type { Meta, StoryObj } from '@storybook/react'
import NextImage from 'next/image'

const meta: Meta<typeof Hero> = {
  title: 'Components/Layout/Hero',
  component: Hero,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <HeroHeader>
        <HeroTitle>Welcome to the Design System</HeroTitle>
        <HeroDescription>
          Build beautiful, accessible UIs with reusable components and modern best practices.
        </HeroDescription>
        <HeroActions>
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </HeroActions>
      </HeroHeader>
    ),
  },
}

export const WithImageSlot: Story = {
  args: {
    children: (
      <>
        <HeroHeader>
          <HeroTitle>Stunning Visuals</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </HeroDescription>
          <HeroActions>
            <Button size="lg">Explore</Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </HeroActions>
        </HeroHeader>
        <HeroImage>
          <NextImage
            src="https://placehold.co/300x400"
            alt="Sample"
            className="object-cover"
            fill
          />
        </HeroImage>
      </>
    ),
  },
}

export const withContainerAndFullHeight: Story = {
  render: () => (
    <Container gutter="none">
      <Hero className="min-h-[calc(100vh-32px)]">
        <HeroHeader>
          <HeroTitle>Stunning Visuals</HeroTitle>
          <HeroDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </HeroDescription>
          <HeroActions>
            <Button size="lg">Explore</Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </HeroActions>
        </HeroHeader>
        <HeroImage>
          <NextImage
            src="https://placehold.co/300x400"
            alt="Sample"
            className="object-cover"
            fill
          />
        </HeroImage>
      </Hero>
    </Container>
  ),
}

export const withBackground: Story = {
  render: () => (
    <BgImage overlay="dark">
      <BgImageSlot asChild>
        <NextImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Unsplash Sample"
          sizes="100vw"
          fill
        />
      </BgImageSlot>
      <BgImageContent>
        <Container gutter="md">
          <Hero className="min-h-[calc(100vh-32px)]">
            <HeroHeader>
              <HeroTitle className="text-white">Stunning Visuals</HeroTitle>
              <HeroDescription className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </HeroDescription>
              <HeroActions>
                <Button size="lg">Explore</Button>
                <Button size="lg" variant="secondary">
                  Contact Us
                </Button>
              </HeroActions>
            </HeroHeader>
            <HeroImage>
              <NextImage
                src="https://placehold.co/300x400"
                alt="Sample"
                className="object-cover"
                fill
              />
            </HeroImage>
          </Hero>
        </Container>
      </BgImageContent>
    </BgImage>
  ),
}
