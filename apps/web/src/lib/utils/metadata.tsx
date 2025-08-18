import { config } from '@/config'
import { getPathname } from '@/lib/i18n/navigation'
import { routing } from '@/lib/i18n/routing'
import type { Locale } from '@/lib/i18n/types'
import { getHttpUrl } from '@/lib/utils'
import type { Metadata } from 'next'

/**
 * Generates base metadata for the root layout level.
 * Should be used in the root layout to provide default SEO and OpenGraph tags.
 */
export function generateBaseMetadata({
  locale,
  title,
  description,
}: {
  locale: Locale
  title: string
  description: string
}): Metadata {
  const siteName = config.NEXT_PUBLIC_APP_NAME
  const baseUrl = getHttpUrl()
  const url = getPathname({ locale, href: '/' })

  return {
    metadataBase: baseUrl,
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    alternates: {
      canonical: url,
    },
    applicationName: siteName,
    description,
    openGraph: {
      url,
      type: 'website',
      siteName,
      locale,
      images: {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteName,
      },
      description,
      title,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

interface GenerateMetadataOptions {
  locale: Locale
  pathname?: keyof typeof routing.pathnames
  title?: string
  description?: string
  noIndex?: boolean
  canonicalPath?: string | URL
  alternates?: Metadata['alternates']
}

/**
 * Generates metadata with canonical and hreflang tags for internationalized pages
 * @param options - Configuration options for metadata generation
 * @returns Metadata object with canonical and hreflang information
 */
export function generateSeoMetadata({
  locale,
  pathname = '/',
  title,
  description,
  noIndex = false,
  alternates,
}: GenerateMetadataOptions): Metadata {
  const baseUrl = getHttpUrl()

  const metadata: Metadata = {
    metadataBase: baseUrl,
    alternates: {
      ...alternates,
      canonical: alternates?.canonical ?? getPathname({ locale, href: pathname }),
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  }

  // Add title if provided
  if (title) {
    metadata.title = title
  }

  // Add description if provided
  if (description) {
    metadata.description = description
    metadata.openGraph = {
      ...metadata.openGraph,
      description,
      title,
    }
  }

  return metadata
}
