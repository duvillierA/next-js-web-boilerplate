import { getPathname } from '@/lib/i18n/navigation'
import { routing } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/types'
import { getHttpUrl } from '@/lib/utils/url'
import { SitemapBuilder } from '@boilerplate/utils'

type Href = Parameters<typeof getPathname>[0]['href']

const sitemapBuilder = new SitemapBuilder<Locale, Href>({
  baseUrl: getHttpUrl(),
  buildPathname: ({ locale, href }) => getPathname({ locale, href }),
  defaultLocale: routing.defaultLocale,
  locales: routing.locales,
})

export const getStaticEntries = sitemapBuilder.getStaticEntries.bind(sitemapBuilder)
