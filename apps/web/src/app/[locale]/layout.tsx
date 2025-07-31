import { config } from '@/config'
import { RootLayout } from '@/layouts/root'
import { getPathname } from '@/lib/i18n/navigation'
import { routing } from '@/lib/i18n/routing'
import { Page } from '@/templates/page'
import { getHttpUrl } from '@/utils/url'

import { cn } from '@boilerplate/ui/utils'
import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const t = await getTranslations({ locale, namespace: 'Layout' })
  const title = t('title')
  const description = t('description')
  const siteName = config.NEXT_PUBLIC_APP_NAME
  return {
    metadataBase: getHttpUrl(),
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    applicationName: siteName,
    description,
    openGraph: {
      url: getPathname({ locale, href: '/' }),
      type: 'website',
      siteName: siteName,
      locale: locale,
      images: {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteName,
      },
      description,
      title,
    },
  }
}

export default async function AppRootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <RootLayout
      lang={locale}
      className={cn(roboto.variable, robotoMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <Page>{children}</Page>
    </RootLayout>
  )
}
