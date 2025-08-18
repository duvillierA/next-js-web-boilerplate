import { getStaticEntries } from '@/lib/utils/sitemap'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [getStaticEntries('/'), getStaticEntries('/about')]
}
