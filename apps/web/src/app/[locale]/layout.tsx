import { BaseLayout } from '@/components/layouts/base'
import { RootLayout } from '@/components/layouts/root'
import { config } from '@/config'
import { routing } from '@/lib/i18n/routing'

import { fontMono, fontSans } from '@/lib/fonts'
import { generateBaseMetadata } from '@/lib/utils/metadata'
import { cn } from '@boilerplate/ui/utils'
import type { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

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

  return generateBaseMetadata({
    locale,
    title,
    description,
  })
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
      className={cn(fontSans.variable, fontMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <BaseLayout>{children}</BaseLayout>
    </RootLayout>
  )
}
