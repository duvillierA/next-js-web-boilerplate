import { Button } from '@boilerplate/ui/button'
import { Calendar } from '@boilerplate/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@boilerplate/ui/card'
import { Checkbox } from '@boilerplate/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@boilerplate/ui/form'
import { Input } from '@boilerplate/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@boilerplate/ui/popover'
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
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'

import { Stack } from '@boilerplate/ui/layout'
import { RadioGroup, RadioGroupItem } from '@boilerplate/ui/radio-group'
import { Separator } from '@boilerplate/ui/separator'
import { Spinner } from '@boilerplate/ui/spinner'
import { cn } from '@boilerplate/ui/utils'

const meta: Meta<typeof Form> = {
  title: 'Components/Data Entry/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

/**
 * FormComponentsDemo showcases all major form components from the design system, inside a Card.
 * Now uses react-hook-form and @boilerplate/ui/form primitives for a more realistic example.
 */
type FormValues = {
  username: string
  bio: string
  acceptTerms: boolean
  notifications: boolean
  option: string
  dob: Date | undefined
  radioOption: string
}

function FormComponentsDemo() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      bio: '',
      acceptTerms: false,
      notifications: false,
      option: 'option1',
      dob: undefined,
      radioOption: 'option1',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success(`Form submitted successfully!`, {
      position: 'top-center',
      description: `Username: ${data.username}`,
    })
    form.reset()
  }

  return (
    <div className="grid grid-cols-[1fr_minmax(0,1fr)] gap-4">
      <Card>
        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CardHeader>
              <CardTitle>Form</CardTitle>
              <CardDescription>Example form</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Input (Username) */}
              <FormField
                control={form.control}
                name="username"
                rules={{
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Username must be at least 6 characters',
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <span className="text-destructive">*</span> Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="shadcn"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Textarea (Bio) */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-24"
                        placeholder="Type a longer message..."
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Tell us a little about yourself.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Date Picker (Date of Birth) */}
              <FormField
                control={form.control}
                name="dob"
                rules={{
                  required: {
                    value: true,
                    message: 'Date of birth is required',
                  },
                }}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                            disabled={field.disabled}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Your date of birth is used to calculate your age.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              {/* Checkbox (Accept terms) */}
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <Stack
                    direction="horizontal"
                    gap="sm"
                    asChild
                  >
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Accept terms and conditions</FormLabel>
                      <FormMessage />
                    </FormItem>
                  </Stack>
                )}
              />

              {/* Switch (Enable notifications) */}
              <FormField
                control={form.control}
                name="notifications"
                render={({ field }) => (
                  <Stack
                    direction="horizontal"
                    gap="sm"
                    asChild
                  >
                    <FormItem>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Enable notifications</FormLabel>
                      <FormMessage />
                    </FormItem>
                  </Stack>
                )}
              />

              <FormField
                control={form.control}
                name="radioOption"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Choose one option</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <Stack
                          direction="horizontal"
                          gap="sm"
                        >
                          <RadioGroupItem
                            value="option1"
                            id="radio-option-1"
                          />
                          <FormLabel
                            htmlFor="radio-option-1"
                            className="font-normal"
                          >
                            Option 1
                          </FormLabel>
                        </Stack>
                        <Stack
                          direction="horizontal"
                          gap="sm"
                        >
                          <RadioGroupItem
                            value="option2"
                            id="radio-option-2"
                          />
                          <FormLabel
                            htmlFor="radio-option-2"
                            className="font-normal"
                          >
                            Option 2
                          </FormLabel>
                        </Stack>
                        <Stack
                          direction="horizontal"
                          gap="sm"
                        >
                          <RadioGroupItem
                            value="option3"
                            id="radio-option-3"
                          />
                          <FormLabel
                            htmlFor="radio-option-3"
                            className="font-normal"
                          >
                            Option 3
                          </FormLabel>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator />

              {/* Select (Option) */}
              <FormField
                control={form.control}
                name="option"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select an option</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger
                          className="w-full"
                          id="select-demo"
                        >
                          <SelectValue placeholder="Choose an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="option1">Option 1</SelectItem>
                          <SelectItem value="option2">Option 2</SelectItem>
                          <SelectItem value="option3">Option 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>Pick your favorite option.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="grid grid-cols-2 gap-2">
              <Button
                variant={'secondary'}
                type="button"
                disabled={!form.formState.isDirty}
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && <Spinner />}
                Submit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Fields values</h2>
        <p className="border border-border bg-muted p-2 text-sm text-muted-foreground">
          <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
        </p>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <FormComponentsDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'A showcase of all form components (`Input`, `Textarea`, `Checkbox`, `Switch`, `Select`, `Label`) from the design system, inside a Card. Uses react-hook-form and @boilerplate/ui/form primitives for accessible and consistent forms.',
      },
    },
  },
}
