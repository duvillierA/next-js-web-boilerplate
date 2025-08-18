import { getPathname } from '@/lib/i18n/navigation'
import { routing } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/types'
import { getHttpUrl } from '@/lib/utils'
import type { MetadataRoute } from 'next'

type Href = Parameters<typeof getPathname>[0]['href']

export function getStaticEntries(
  href: Href,
  ...config: Omit<MetadataRoute.Sitemap, 'url' | 'alternates'>
) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(routing.locales.map((cur) => [cur, getUrl(href, cur)])),
    },
    ...config,
  }
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return getHttpUrl({ pathname }).toString()
}
