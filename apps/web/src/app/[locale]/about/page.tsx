import type { Locale } from '@/lib/i18n/types'
import { generateSeoMetadata } from '@/lib/utils/metadata'
import { H1 } from '@boilerplate/ui/heading'
import { Stack } from '@boilerplate/ui/layout'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

interface AboutPageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'AboutPage' })

  return generateSeoMetadata({
    locale,
    href: '/about',
    title: t('title'),
    description: t('description'),
  })
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'AboutPage' })

  return (
    <Stack>
      <H1>{t('title')}</H1>
      <p className="mb-8 text-lg text-muted-foreground">{t('description')}</p>
    </Stack>
  )
}
