import { BaseLayout } from '@/components/layouts/base'
import { RootLayout } from '@/components/layouts/root'
import { NotFound } from '@/components/templates/not-found'
import { config } from '@/config'
import { fontMono, fontSans } from '@/lib/fonts'
import { routing } from '@/lib/i18n/routing'
import { cn } from '@boilerplate/ui/utils'

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

const defaultLocale = routing.defaultLocale

export default function NotFoundPage() {
  return (
    <RootLayout
      lang={defaultLocale}
      className={cn(fontSans.variable, fontMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <BaseLayout>
        <NotFound />
      </BaseLayout>
    </RootLayout>
  )
}
