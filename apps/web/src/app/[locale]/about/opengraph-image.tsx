import type { Locale } from '@/lib/i18n/types'
import { getTranslations } from 'next-intl/server'
import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/jpeg'

// Image generation
export default async function Image({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params

  const t = await getTranslations({ locale, namespace: 'AboutPage' })
  // Font loading, process.cwd() is Next.js project directory
  //   const interSemiBold = await readFile(
  //     join(process.cwd(), 'assets/Inter-SemiBold.ttf')
  //   )

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {t('title')}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      //   fonts: [
      //     {
      //       name: 'Inter',
      //       data: interSemiBold,
      //       style: 'normal',
      //       weight: 400,
      //     },
      //   ],
    },
  )
}
