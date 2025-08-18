import { beforeEach, describe, expect, it } from 'vitest'
import { SitemapBuilder, type SitemapConfig } from './index'

describe('SitemapBuilder', () => {
  let config: SitemapConfig<'en' | 'fr', '/about' | '/contact'>
  let sitemapBuilder: SitemapBuilder<'en' | 'fr', '/about' | '/contact'>

  beforeEach(() => {
    config = {
      defaultLocale: 'en',
      locales: ['en', 'fr'],
      buildPathname: ({ locale, href }) => `/${locale}${href}`,
      baseUrl: 'https://example.com',
    }
    sitemapBuilder = new SitemapBuilder(config)
  })

  describe('constructor', () => {
    it('should create a SitemapBuilder instance with valid config', () => {
      expect(sitemapBuilder).toBeInstanceOf(SitemapBuilder)
    })

    it('should accept URL object as baseUrl', () => {
      const urlConfig = {
        ...config,
        baseUrl: new URL('https://example.com'),
      }
      const builder = new SitemapBuilder(urlConfig)
      expect(builder).toBeInstanceOf(SitemapBuilder)
    })
  })

  describe('getStaticEntries', () => {
    it('should generate sitemap entry with default locale URL', () => {
      const result = sitemapBuilder.getStaticEntries('/about')

      expect(result).toEqual({
        url: 'https://example.com/en/about',
        alternates: {
          languages: {
            en: 'https://example.com/en/about',
            fr: 'https://example.com/fr/about',
          },
        },
      })
    })

    it('should include additional config properties', () => {
      const additionalConfig = {
        lastModified: new Date('2024-01-01'),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }

      const result = sitemapBuilder.getStaticEntries('/contact', additionalConfig)

      expect(result).toEqual({
        url: 'https://example.com/en/contact',
        alternates: {
          languages: {
            en: 'https://example.com/en/contact',
            fr: 'https://example.com/fr/contact',
          },
        },
        ...additionalConfig,
      })
    })

    it('should handle different href types', () => {
      const result = sitemapBuilder.getStaticEntries('/contact')

      expect(result.url).toBe('https://example.com/en/contact')
      expect(result.alternates?.languages?.en).toBe('https://example.com/en/contact')
      expect(result.alternates?.languages?.fr).toBe('https://example.com/fr/contact')
    })

    it('should work with URL object baseUrl', () => {
      const urlConfig = {
        ...config,
        baseUrl: new URL('https://test.com'),
      }
      const builder = new SitemapBuilder(urlConfig)

      const result = builder.getStaticEntries('/about')

      expect(result.url).toBe('https://test.com/en/about')
      expect(result.alternates?.languages?.en).toBe('https://test.com/en/about')
      expect(result.alternates?.languages?.fr).toBe('https://test.com/fr/about')
    })
  })

  describe('getSitemapEntries', () => {
    it('should generate multiple sitemap entries', () => {
      const hrefs: ('/about' | '/contact')[] = ['/about', '/contact']
      const result = sitemapBuilder.getSitemapEntries(hrefs)

      expect(result).toHaveLength(2)
      expect(result[0]).toEqual({
        url: 'https://example.com/en/about',
        alternates: {
          languages: {
            en: 'https://example.com/en/about',
            fr: 'https://example.com/fr/about',
          },
        },
      })
      expect(result[1]).toEqual({
        url: 'https://example.com/en/contact',
        alternates: {
          languages: {
            en: 'https://example.com/en/contact',
            fr: 'https://example.com/fr/contact',
          },
        },
      })
    })

    it('should apply additional config to all entries', () => {
      const hrefs: ('/about' | '/contact')[] = ['/about', '/contact']
      const additionalConfig = {
        lastModified: new Date('2024-01-01'),
        changeFrequency: 'daily' as const,
        priority: 0.9,
      }

      const result = sitemapBuilder.getSitemapEntries(hrefs, additionalConfig)

      expect(result).toHaveLength(2)
      result?.forEach((entry) => {
        expect(entry.lastModified).toEqual(additionalConfig.lastModified)
        expect(entry.changeFrequency).toBe(additionalConfig.changeFrequency)
        expect(entry.priority).toBe(additionalConfig.priority)
      })
    })

    it('should return empty array for empty hrefs', () => {
      const result = sitemapBuilder.getSitemapEntries([])
      expect(result).toEqual([])
    })

    it('should handle single href', () => {
      const result = sitemapBuilder.getSitemapEntries(['/about'])

      expect(result).toHaveLength(1)
      expect(result?.[0]?.url).toBe('https://example.com/en/about')
    })
  })

  describe('edge cases', () => {
    it('should handle complex pathname building', () => {
      const complexConfig = {
        ...config,
        buildPathname: ({ locale, href }: { locale: string; href: string }) =>
          `/${locale}/pages${href}`,
      }
      const builder = new SitemapBuilder(complexConfig)

      const result = builder.getStaticEntries('/about')

      expect(result.url).toBe('https://example.com/en/pages/about')
      expect(result.alternates?.languages?.en).toBe('https://example.com/en/pages/about')
      expect(result.alternates?.languages?.fr).toBe('https://example.com/fr/pages/about')
    })
  })

  describe('type safety', () => {
    it('should maintain type safety with different locale and href types', () => {
      type CustomLocale = 'en' | 'fr' | 'es'
      type CustomHref = '/home' | '/products' | '/contact'

      const customConfig: SitemapConfig<CustomLocale, CustomHref> = {
        defaultLocale: 'en',
        locales: ['en', 'fr', 'es'] as const,
        buildPathname: ({ locale, href }) => `/${locale}${href}`,
        baseUrl: 'https://example.com',
      }

      const customBuilder = new SitemapBuilder(customConfig)
      const result = customBuilder.getStaticEntries('/home')

      expect(result.url).toBe('https://example.com/en/home')
      expect(result.alternates?.languages).toEqual({
        en: 'https://example.com/en/home',
        fr: 'https://example.com/fr/home',
        es: 'https://example.com/es/home',
      })
    })
  })
})
