import { OpenGraphImage } from '@/components/common/opengraph-image'
import type { Locale } from '@/lib/i18n/types'
import { getTranslations } from 'next-intl/server'
import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/jpeg'

// Image generation
export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'AboutPage' })
  return new ImageResponse(<OpenGraphImage title={t('title')} />, {
    // For convenience, we can re-use the exported opengraph-image
    // size config to also set the ImageResponse's width and height.
    ...size,
  })
}
