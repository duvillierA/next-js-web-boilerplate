import { TrackingButton } from '@/shared/components/tracking/button'
import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="mb-2 text-2xl font-bold">Features</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Next.js 15</Badge>
          <Badge variant="default">TypeScript 5</Badge>
          <Badge variant="default">Tailwind CSS 4</Badge>
          <Badge variant="default">shadcn/ui</Badge>
          <Badge variant="secondary">Vitest</Badge>
          <Badge variant="secondary">Playwright</Badge>
          <Badge variant="secondary">ESLint 9</Badge>
          <Badge variant="secondary">PostHog</Badge>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-2xl font-bold">Examples</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Tracking</CardTitle>
              <CardDescription>
                This is a card that contains a button that sends a PostHog event.
              </CardDescription>
              <CardAction>
                <TrackingButton
                  size="sm"
                  eventName="button_clicked"
                  eventProperties={{ foo: 'bar' }}
                >
                  Send event
                </TrackingButton>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  )
}
