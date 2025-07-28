import { AsyncCard, AsyncCardSkeleton } from '@/components/async'
import { TrackingButton } from '@/components/tracking/button'
import { getUserSession } from '@/lib/session/utils'
import { Badge } from '@boilerplate/ui/badge'
import { Button } from '@boilerplate/ui/button'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  const session = await getUserSession()
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
          <Badge variant="outline">Iron Session</Badge>
          <Badge variant="outline">Zod Validation</Badge>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">Session Management Demo</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>User Authentication</CardTitle>
              <CardDescription>
                Test the user session management with login, dashboard, and cart functionality.
                {session.isLoggedIn && <Badge variant="secondary">Logged in: {session.name}</Badge>}
              </CardDescription>
              <CardAction>
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                  >
                    <Link href="/login">User Login</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </div>
              </CardAction>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partner Authentication</CardTitle>
              <CardDescription>
                Test the separate partner session management with different cookie paths.
              </CardDescription>
              <CardAction>
                <div className="flex gap-2">
                  <Button
                    asChild
                    size="sm"
                  >
                    <Link href="/partner/login">Partner Login</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                  >
                    <Link href="/partner/dashboard">Partner Dashboard</Link>
                  </Button>
                </div>
              </CardAction>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">Examples</h2>
        <div className="grid gap-4 md:grid-cols-2">
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

      <section>
        <h2 className="mb-2 text-2xl font-bold">Suspense</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Suspense fallback={<AsyncCardSkeleton count={3} />}>
            <AsyncCard />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
