import { BaseLayout } from '@/components/layouts/base'
import { RootLayout } from '@/components/layouts/root'
import { config } from '@/config'
import { routing } from '@/lib/i18n/routing'

import { generateBaseMetadata } from '@/lib/utils/metadata'
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
      className={cn(roboto.variable, robotoMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <BaseLayout>{children}</BaseLayout>
    </RootLayout>
  )
}
