import { describe, expect, it } from 'vitest'
import { MetadataBuilder } from './index'

const buildPathname = ({ locale, href }: { locale: string; href: string }) => `${locale}:${href}`

describe('MetadataBuilder', () => {
  const config = {
    siteName: 'TestSite',
    baseUrl: new URL('https://example.com'),
    baseOgImageUrl: '/og-image.png',
    buildPathname,
  } as const

  const builder = new MetadataBuilder(config)

  describe('getBaseMetadata', () => {
    it('should return correct base metadata', () => {
      const locale = 'en'
      const pathname = '/'
      const result = builder.getBaseMetadata({
        locale,
        title: 'Home',
        description: 'Welcome to the homepage',
      })
      const canonical = buildPathname({ locale, href: pathname })

      expect(result.metadataBase).toEqual(config.baseUrl)
      expect(result.title).toEqual({
        default: 'Home',
        template: '%s | TestSite',
      })
      expect(result.alternates).toEqual({
        canonical,
      })
      expect(result.applicationName).toBe('TestSite')
      expect(result.description).toBe('Welcome to the homepage')
      expect(result.openGraph).toEqual({
        url: canonical,
        type: 'website',
        siteName: 'TestSite',
        locale,
        images: {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'TestSite',
        },
        description: 'Welcome to the homepage',
        title: 'Home',
      })
      expect(result.robots).toEqual({
        index: true,
        follow: true,
      })
    })
  })

  describe('getSeoMetadata', () => {
    it('should return correct SEO metadata with title and description', () => {
      const locale = 'en'
      const pathname = '/about'
      const result = builder.getSeoMetadata({
        locale,
        href: pathname,
        title: 'About Us',
        description: 'Learn more about us',
      })
      const canonical = buildPathname({ locale, href: pathname })

      expect(result.alternates).toEqual({
        canonical,
      })
      expect(result.robots).toEqual({
        index: true,
        follow: true,
      })
      expect(result.title).toBe('About Us')
      expect(result.description).toBe('Learn more about us')
      expect(result.openGraph).toMatchObject({
        description: 'Learn more about us',
        title: 'About Us',
        url: canonical,
      })
    })

    it('should set robots to noindex, nofollow when noIndex is true', () => {
      const result = builder.getSeoMetadata({
        locale: 'en',
        href: '/private',
        noIndex: true,
      })

      expect(result.robots).toEqual({
        index: false,
        follow: false,
      })
    })

    it('should not include title or description if not provided', () => {
      const result = builder.getSeoMetadata({
        locale: 'en',
        href: '/no-title-desc',
      })

      expect(result.title).toBeUndefined()
      expect(result.description).toBeUndefined()
      expect(result.openGraph).toBeUndefined()
    })
  })
})
