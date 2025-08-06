import { Avatar, AvatarFallback, AvatarImage } from '@boilerplate/ui/avatar'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An avatar component that displays user profile images with fallback support. Built with Radix UI and styled with Tailwind CSS.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the avatar',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </>
    ),
  },
}

export const WithFallback: Story = {
  args: {
    children: (
      <>
        <AvatarImage
          src="/broken-image.jpg"
          alt="@user"
        />
        <AvatarFallback>JD</AvatarFallback>
      </>
    ),
  },
}

export const Large: Story = {
  args: {
    className: 'h-16 w-16',
    children: (
      <>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    className: 'h-8 w-8',
    children: (
      <>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </>
    ),
  },
}

export const CustomFallback: Story = {
  args: {
    children: (
      <>
        <AvatarImage
          src="/broken-image.jpg"
          alt="@user"
        />
        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          AB
        </AvatarFallback>
      </>
    ),
  },
}

export const MultipleAvatars: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="/broken-image.jpg"
          alt="@user"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage
            src="/broken-image.jpg"
            alt="@user"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-white bg-yellow-500" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div className="absolute -right-1 -bottom-1 h-3 w-3 rounded-full border-2 border-white bg-gray-500" />
      </div>
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="border-2 border-background">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage
          src="/broken-image.jpg"
          alt="@user"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
}
