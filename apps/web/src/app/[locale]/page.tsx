import { AsyncCard, AsyncCardSkeleton } from '@/components/common/async'
import { TrackingButton } from '@/components/common/tracking/button'
import type { Locale } from '@/lib/i18n/types'
import { Badge } from '@boilerplate/ui/badge'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@boilerplate/ui/card'
import { Grid, Stack } from '@boilerplate/ui/layout'
import { H2 } from '@boilerplate/ui/typography'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Suspense, use } from 'react'

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('HomePage')

  return (
    <Stack direction="vertical" gap="lg">
      <Stack gap="sm" asChild>
        <section>
          <H2 className="mb-2">{t('features.title')}</H2>
          <Stack direction="horizontal" gap="sm" wrap>
            <Badge variant="default">{t('features.i18n')}</Badge>
            <Badge variant="default">{t('features.typescript')}</Badge>
            <Badge variant="default">{t('features.tailwind')}</Badge>
            <Badge variant="default">shadcn/ui</Badge>
            <Badge variant="secondary">{t('features.testing')}</Badge>
            <Badge variant="secondary">Playwright</Badge>
            <Badge variant="secondary">ESLint 9</Badge>
            <Badge variant="secondary">PostHog</Badge>
          </Stack>
        </section>
      </Stack>

      <Stack gap="sm" asChild>
        <section>
          <H2 className="mb-2">Examples</H2>
          <Grid cols={{ initial: 1, lg: 2 }}>
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
          </Grid>
        </section>
      </Stack>

      <Stack gap="sm" asChild>
        <section>
          <H2 className="mb-2">Suspense</H2>
          <Grid cols={{ initial: 1, lg: 3 }}>
            <Suspense fallback={<AsyncCardSkeleton count={3} />}>
              <AsyncCard />
            </Suspense>
          </Grid>
        </section>
      </Stack>
    </Stack>
  )
}
