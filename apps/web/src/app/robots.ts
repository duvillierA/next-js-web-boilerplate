import { getHttpUrl } from '@/lib/utils/url'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: getHttpUrl({ pathname: '/sitemap.xml' }).toString(),
  }
}
