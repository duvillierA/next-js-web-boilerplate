import type { MetadataRoute } from 'next'

export interface SitemapConfig<TLocale extends string, THref> {
  defaultLocale: TLocale
  locales: readonly TLocale[]
  buildPathname: (params: { locale: TLocale; href: THref }) => string
  baseUrl: URL | string
}

export class SitemapBuilder<TLocale extends string, THref> {
  constructor(private readonly config: SitemapConfig<TLocale, THref>) {}

  /**
   * SitemapBuilder helps generate sitemap entries for static and localized routes.
   *
   * @template TLocale - The type representing supported locales (usually a string union).
   * @template THref - The type representing the href/path structure.
   *
   * @example
   * type Locale = 'en' | 'fr'
   * type Href = '/about' | '/contact'
   *
   * const config: SitemapConfig<Locale, Href> = {
   *   defaultLocale: 'en',
   *   locales: ['en', 'fr'],
   *   buildPathname: ({ locale, href }) => `/${locale}${href}`,
   *   baseUrl: 'https://example.com',
   * }
   *
   * const builder = new SitemapBuilder(config)
   *
   * // Single entry
   * const entry = builder.getStaticEntries('/about')
   * // entry = {
   * //   url: 'https://example.com/en/about',
   * //   alternates: {
   * //     languages: {
   * //       en: 'https://example.com/en/about',
   * //       fr: 'https://example.com/fr/about'
   * //     }
   * //   }
   * // }
   *
   * // Multiple entries
   * const entries = builder.getSitemapEntries(['/about', '/contact'])
   * // entries = [
   * //   { url: 'https://example.com/en/about', ... },
   * //   { url: 'https://example.com/en/contact', ... }
   * // ]
   */
  public getStaticEntries(
    href: THref,
    config: Omit<MetadataRoute.Sitemap[0], 'url' | 'alternates'> = {},
  ): MetadataRoute.Sitemap[0] {
    const sitemapEntry: MetadataRoute.Sitemap[0] = {
      url: this.getUrl(href, this.config.defaultLocale),
      alternates: {
        languages: Object.fromEntries(
          this.config.locales.map((locale) => [locale, this.getUrl(href, locale)]),
        ),
      },
      ...config,
    }
    return sitemapEntry
  }

  /**
   * Returns an array of sitemap entries for the given hrefs.
   *
   * @template THref - The type representing the href/path structure.
   * @param {THref[]} hrefs - An array of hrefs to generate sitemap entries for.
   * @param {Omit<MetadataRoute.Sitemap[0], 'url' | 'alternates'>} [config={}] - Optional additional config to merge into each entry (excluding 'url' and 'alternates').
   * @returns {MetadataRoute.Sitemap} An array of sitemap entry objects.
   *
   * @example
   * type Locale = 'en' | 'fr'
   * type Href = '/about' | '/contact'
   *
   * const config: SitemapConfig<Locale, Href> = {
   *   defaultLocale: 'en',
   *   locales: ['en', 'fr'],
   *   buildPathname: ({ locale, href }) => `/${locale}${href}`,
   *   baseUrl: 'https://example.com',
   * }
   *
   * const builder = new SitemapBuilder(config)
   *
   * const entries = builder.getSitemapEntries(['/about', '/contact'])
   * // entries = [
   * //   {
   * //     url: 'https://example.com/en/about',
   * //     alternates: {
   * //       languages: {
   * //         en: 'https://example.com/en/about',
   * //         fr: 'https://example.com/fr/about'
   * //       }
   * //     }
   * //   },
   * //   {
   * //     url: 'https://example.com/en/contact',
   * //     alternates: {
   * //       languages: {
   * //         en: 'https://example.com/en/contact',
   * //         fr: 'https://example.com/fr/contact'
   * //       }
   * //     }
   * //   }
   * // ]
   */
  public getSitemapEntries(
    hrefs: THref[],
    config: Omit<MetadataRoute.Sitemap[0], 'url' | 'alternates'> = {},
  ): MetadataRoute.Sitemap {
    return hrefs.map((href) => this.getStaticEntries(href, config))
  }

  private getUrl(href: THref, locale: TLocale): string {
    const pathname = this.config.buildPathname({ locale, href })
    return new URL(pathname, this.config.baseUrl).toString()
  }
}
