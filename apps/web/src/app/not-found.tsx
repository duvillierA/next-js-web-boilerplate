import { BaseLayout } from '@/components/layouts/base'
import { RootLayout } from '@/components/layouts/root'
import { NotFound } from '@/components/templates/not-found'
import { config } from '@/config'
import { routing } from '@/lib/i18n/routing'
import { cn } from '@boilerplate/ui/utils'
import { Roboto, Roboto_Mono } from 'next/font/google'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

const defaultLocale = routing.defaultLocale

export default function NotFoundPage() {
  return (
    <RootLayout
      lang={defaultLocale}
      className={cn(roboto.variable, robotoMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <BaseLayout>
        <NotFound />
      </BaseLayout>
    </RootLayout>
  )
}
