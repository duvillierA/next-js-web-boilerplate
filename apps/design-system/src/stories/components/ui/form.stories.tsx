import { Checkbox } from '@boilerplate/ui/checkbox'
import { Input } from '@boilerplate/ui/input'
import { Label } from '@boilerplate/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@boilerplate/ui/select'
import { Switch } from '@boilerplate/ui/switch'
import { Textarea } from '@boilerplate/ui/textarea'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useId, useState } from 'react'

// If you have a Card component in your design system, import it here:
import { Button } from '@boilerplate/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@boilerplate/ui/card'

const meta: Meta = {
  title: 'Components/UI/Form',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/**
 * FormComponentsDemo showcases all major form components from the design system, inside a Card.
 */
function FormComponentsDemo() {
  const id = useId()
  const [inputValue, setInputValue] = useState('')
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [switchChecked, setSwitchChecked] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const [selectValue, setSelectValue] = useState<string | undefined>(undefined)

  return (
    <Card className="mx-auto max-w-md">
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault()
          console.log('Form submitted')
        }}
      >
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>Example form</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Input */}
          <div className="space-y-2">
            <Label htmlFor={`${id}-input-demo`}>Input</Label>
            <Input
              id={`${id}-input-demo`}
              placeholder="Type something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          {/* Textarea */}
          <div className="space-y-2">
            <Label htmlFor={`${id}-textarea-demo`}>Textarea</Label>
            <Textarea
              className="h-24"
              id={`${id}-textarea-demo`}
              placeholder="Type a longer message..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`${id}-checkbox-demo`}
              checked={checkboxChecked}
              onCheckedChange={(checked) =>
                setCheckboxChecked(checked === 'indeterminate' ? false : checked)
              }
            />
            <Label htmlFor={`${id}-checkbox-demo`}>Accept terms and conditions</Label>
          </div>

          {/* Switch */}
          <div className="flex items-center space-x-2">
            <Switch
              id={`${id}-switch-demo`}
              checked={switchChecked}
              onCheckedChange={setSwitchChecked}
            />
            <Label htmlFor={`${id}-switch-demo`}>Enable notifications</Label>
          </div>

          {/* Select */}
          <div className="space-y-2">
            <Label htmlFor={`${id}-select-demo`}>Select an option</Label>
            <Select
              value={selectValue}
              onValueChange={setSelectValue}
            >
              <SelectTrigger
                id={`${id}-select-demo`}
                className="w-full"
              >
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2">
          <Button variant={'secondary'}>Reset</Button>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export const Form: Story = {
  render: () => <FormComponentsDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'A showcase of all form components (`Input`, `Textarea`, `Checkbox`, `Switch`, `Select`, `Label`) from the design system, inside a Card. Use these components to build accessible and consistent forms.',
      },
    },
  },
}
