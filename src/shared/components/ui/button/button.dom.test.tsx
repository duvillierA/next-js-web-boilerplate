import { Button } from '@/shared/components/ui/button'
import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'

describe('Button', () => {
  it('renders button with default variant and size', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
  })

  it('renders button with custom variant', () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>)
    const button = getByRole('button', { name: /delete/i })
    expect(button).toHaveClass('bg-destructive')
  })

  it('renders as submit button when type is submit', () => {
    const { getByRole } = render(<Button type="submit">Submit</Button>)
    const button = getByRole('button', { name: /submit/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders as child component when asChild prop is true', () => {
    const { getByRole } = render(
      <Button asChild>
        <a href="https://www.google.com">Link Button</a>
      </Button>,
    )

    const link = getByRole('link', { name: /link button/i })
    expect(link).toHaveAttribute('href', 'https://www.google.com')
  })
})
