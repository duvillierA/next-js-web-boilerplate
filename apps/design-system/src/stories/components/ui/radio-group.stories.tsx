import { Label } from '@boilerplate/ui/label'
import { RadioGroup, RadioGroupItem } from '@boilerplate/ui/radio-group'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option1"
          id="option1"
        />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option2"
          id="option2"
        />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="option3"
          id="option3"
        />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A basic radio group using the design system’s `RadioGroup` and `RadioGroupItem` components. Use for single-choice selections.',
      },
    },
  },
}
