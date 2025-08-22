import { Label } from '@boilerplate/ui/label'
import { Stack } from '@boilerplate/ui/layout'
import { RadioGroup, RadioGroupItem } from '@boilerplate/ui/radio-group'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Data Entry/RadioGroup',
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
      <Stack direction="horizontal" gap="sm">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </Stack>
      <Stack direction="horizontal" gap="sm">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </Stack>
      <Stack direction="horizontal" gap="sm">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </Stack>
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
