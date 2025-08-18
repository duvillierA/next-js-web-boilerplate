import { config } from '@/config'
import { getPathname } from '@/lib/i18n/navigation'
import type { Locale } from '@/lib/i18n/types'
import { MetadataBuilder } from '@boilerplate/utils'
import { getHttpUrl } from './url'

type Href = Parameters<typeof getPathname>[0]['href']

const metadata = new MetadataBuilder<Locale, Href>({
  baseOgImageUrl: '/og-image.jpg',
  baseUrl: getHttpUrl(),
  buildPathname: ({ locale, href }) => getPathname({ locale, href }),
  siteName: config.NEXT_PUBLIC_APP_NAME,
})

export const generateBaseMetadata = metadata.getBaseMetadata.bind(metadata)
export const generateSeoMetadata = metadata.getSeoMetadata.bind(metadata)
