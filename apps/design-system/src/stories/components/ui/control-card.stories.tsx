import { CheckboxCard, ControlCardProps, RadioCard, SwitchCard } from '@boilerplate/ui/control-card'
import { GridSpacing } from '@boilerplate/ui/layout'
import { RadioGroup } from '@boilerplate/ui/radio-group'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

const meta: Meta = {
  title: 'Components/Data Entry/ControlCard',
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    alignLabel: {
      control: 'select',
      options: ['left', 'right'],
      description: 'The alignment of the label',
    },
    variant: {
      control: 'select',
      options: ['surface', 'classic'],
      description: 'The visual style variant of the control card',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the control card is disabled',
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const Checkbox: Story = {
  render: (args) => (
    <GridSpacing
      cols={3}
      responsive
    >
      <CheckboxCard
        label="Enable notifications"
        defaultChecked
        {...args}
      >
        Enable or disable notifications for your account.
      </CheckboxCard>
      <CheckboxCard
        label="Subscribe to newsletter"
        {...args}
      >
        Subscribe to our newsletter to receive updates about our products and services.
      </CheckboxCard>
      <CheckboxCard
        label="Accept terms and conditions"
        disabled
        {...args}
      >
        By checking this box, you agree to our terms and conditions.
      </CheckboxCard>
    </GridSpacing>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A set of `CheckboxCard` controls. Use for toggling multiple independent options.',
      },
    },
  },
}

function RadioGroupDemo(args: ControlCardProps) {
  const [value, setValue] = useState('option1')
  return (
    <RadioGroup>
      <GridSpacing
        cols={3}
        responsive
      >
        <RadioCard
          label="Option 1"
          value="option1"
          id="radio-option-1"
          checked={value === 'option1'}
          onCheckedChange={() => setValue('option1')}
          {...args}
        >
          Select this option to choose Option 1.
        </RadioCard>
        <RadioCard
          label="Option 2"
          value="option2"
          id="radio-option-2"
          checked={value === 'option2'}
          onCheckedChange={() => setValue('option2')}
          {...args}
        >
          Select this option to choose Option 2.
        </RadioCard>
        <RadioCard
          label="Option 3 (disabled)"
          value="option3"
          id="radio-option-3"
          disabled
          checked={value === 'option3'}
          onCheckedChange={() => setValue('option3')}
          {...args}
        >
          Select this option to choose Option 3.
        </RadioCard>
      </GridSpacing>
    </RadioGroup>
  )
}

export const Radio: Story = {
  render: (args) => <RadioGroupDemo {...(args as ControlCardProps)} />,
  parameters: {
    docs: {
      description: {
        story: 'A group of `RadioCard` controls. Use for single-choice selections within a group.',
      },
    },
  },
}

export const Switch: Story = {
  render: (args) => (
    <GridSpacing
      cols={3}
      responsive
    >
      <SwitchCard
        label="Dark mode"
        defaultChecked
        {...args}
      />
      <SwitchCard
        label="Auto-update"
        {...args}
      />
      <SwitchCard
        label="Experimental features"
        disabled
        {...args}
      />
    </GridSpacing>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A set of `SwitchCard` controls. Use for toggling settings that represent an on/off state.',
      },
    },
  },
}
