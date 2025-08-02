import { H1, H2, H3, H4, H5, H6 } from '@boilerplate/ui/heading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/UI/Heading',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A set of heading components that can be used to create a hierarchy of headings.',
      },
    },
  },
  component: H1,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const HeadingLevels: Story = {
  render: () => (
    <div className="space-y-4">
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
    </div>
  ),
  name: 'All Heading Levels',
}

export const AsChild: Story = {
  render: () => (
    <H3 asChild>
      <h1>H3 styled and H1 markup</h1>
    </H3>
  ),
  name: 'AsChild Example',
}
