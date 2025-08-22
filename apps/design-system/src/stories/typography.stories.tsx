import { Card, CardContent, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { H1, H2, H3, H4, H5, H6 } from '@boilerplate/ui/heading'
import { Text } from '@boilerplate/ui/text'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj

/**
 * TypographyComponent displays a showcase of all major typography styles
 * using Tailwind CSS and the design system's conventions.
 */
function TypographyComponent() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="mb-4 text-2xl font-bold">Headings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <H1 className="scroll-m-20">H1 - The quick brown fox jumps over the lazy dog</H1>
          <H2 className="scroll-m-20">H2 - The quick brown fox jumps over the lazy dog</H2>
          <H3 className="scroll-m-20">H3 - The quick brown fox jumps over the lazy dog</H3>
          <H4 className="scroll-m-20">H4 - The quick brown fox jumps over the lazy dog</H4>
          <H5 className="scroll-m-20">H5 - The quick brown fox jumps over the lazy dog</H5>
          <H6 className="scroll-m-20">H6 - The quick brown fox jumps over the lazy dog</H6>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="mb-4">Body Text</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Body - The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
          <Text variant="muted" as="p">
            Muted - The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet.
          </Text>
          <Text variant="muted" as="small" size="sm">
            Small - The quick brown fox jumps over the lazy dog.
          </Text>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="mb-4">Inline Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>Bold</strong>, <em>Italic</em>, <u>Underline</u>,{' '}
            <code className="rounded bg-muted px-1 text-xs">Code</code>,{' '}
            <a href="https://example.com" className="text-primary underline">
              Link
            </a>
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            `A well-designed system is a joy to use.`
          </blockquote>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Unordered list item one</li>
            <li>Unordered list item two</li>
          </ul>
          <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
            <li>Ordered list item one</li>
            <li>Ordered list item two</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="mb-4">Other</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Text variant="muted" as="span" size="xs" className="tracking-widest uppercase">
            Label / Overline
          </Text>
          <Text variant="destructive" as="p">
            Destructive - The quick brown fox jumps over the lazy dog.
          </Text>
        </CardContent>
      </Card>
    </div>
  )
}

export const Typography: Story = {
  render: () => <TypographyComponent />,
}
