import {
  DefinitionItem,
  DefinitionItemDescription,
  DefinitionItemLabel,
  DefinitionList,
} from '@boilerplate/ui/definition-list'
import type { Meta, StoryObj } from '@storybook/react'
import { Gift } from 'lucide-react'

const meta: Meta<typeof DefinitionList> = {
  title: 'Components/Layout/DefinitionList',
  component: DefinitionList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['simple', 'detailed'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleFeatures = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    icon: <Gift />,
    children: (
      <>
        <DefinitionItemLabel>Feature {index + 1}</DefinitionItemLabel>
        <DefinitionItemDescription>
          This is a description for feature {index + 1}
        </DefinitionItemDescription>
      </>
    ),
  }))

export const Default: Story = {
  args: {
    variant: 'detailed',
    children: sampleFeatures(6).map((feature, index) => (
      <DefinitionItem key={index} {...feature} />
    )),
  },
}

export const EmptyLastRow: Story = {
  args: {
    variant: 'detailed',
    children: sampleFeatures(5).map((feature, index) => (
      <DefinitionItem key={index} {...feature} />
    )),
  },
}

export const ThreeColumns: Story = {
  args: {
    variant: 'detailed',
    cols: 3,
    children: sampleFeatures(8).map((feature, index) => (
      <DefinitionItem key={index} {...feature} />
    )),
  },
}
