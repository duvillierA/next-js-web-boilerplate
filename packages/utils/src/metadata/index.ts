import type { Metadata } from 'next'

/**
 * A utility class for building Next.js Metadata objects with support for locales, custom pathnames, and Open Graph images.
 *
 * @template TLocale - The type representing supported locales (usually a string union).
 * @template THref - The type representing the href/path structure.
 *
 * @example
 * const builder = new MetadataBuilder({
 *   siteName: 'MySite',
 *   baseUrl: new URL('https://example.com'),
 *   baseOgImageUrl: '/og-image.jpg',
 *   buildPathname: ({ locale, href }) => getPathname({ locale, href }),
 * });
 *
 * const metadata = builder.getBaseMetadata({
 *   locale: 'en',
 *   title: 'Home',
 *   description: 'Welcome to MySite',
 * });
 */

export class MetadataBuilder<TLocale extends string, THref> {
  constructor(
    private readonly config: {
      siteName: string
      baseUrl: URL
      buildPathname: ({ locale, href }: { locale: TLocale; href: THref }) => string
      openGraph?: Metadata['openGraph']
    },
  ) {}

  /**
   * Returns the base metadata for a given locale, title, and description.
   *
   * @param {Object} params - The parameters for generating base metadata.
   * @param {TLocale} params.locale - The locale for the metadata.
   * @param {string} params.title - The title of the page.
   * @param {string} params.description - The description of the page.
   * @returns {Metadata} The generated base metadata object.
   *
   * @example
   * const builder = new MetadataBuilder({
   *   siteName: 'MySite',
   *   baseUrl: new URL('https://example.com'),
   *   baseOgImageUrl: '/og-image.jpg',
   *   buildPathname: ({ locale, href }) => `/${locale}${href}`,
   * });
   *
   * const metadata = builder.getBaseMetadata({
   *   locale: 'en',
   *   title: 'Home',
   *   description: 'Welcome to MySite',
   * });
   */
  public getBaseMetadata({
    locale,
    title,
    description,
  }: {
    locale: TLocale
    title: string
    description: string
  }): Metadata {
    const canonicalUrl = this.config.buildPathname({ locale, href: '/' as THref })
    return {
      metadataBase: this.config.baseUrl,
      title: {
        default: title,
        template: `%s | ${this.config.siteName}`,
      },
      alternates: {
        canonical: canonicalUrl,
      },
      applicationName: this.config.siteName,
      description,
      openGraph: {
        ...this.config.openGraph,
        url: canonicalUrl,
        type: 'website',
        siteName: this.config.siteName,
        locale,
        description,
        title,
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  }

  /**
   * Generates SEO metadata for a given locale and href.
   *
   * @param {Object} params - The parameters for SEO metadata.
   * @param {TLocale} params.locale - The locale for the metadata.
   * @param {THref} params.href - The href/path for the canonical URL.
   * @param {string} [params.title] - The title for the page (optional).
   * @param {string} [params.description] - The description for the page (optional).
   * @param {boolean} [params.noIndex=false] - Whether to set robots to noindex, nofollow (optional).
   * @returns {Metadata} The generated SEO metadata object.
   *
   * @example
   * const metadata = builder.getSeoMetadata({
   *   locale: 'en',
   *   href: '/about',
   *   title: 'About Us',
   *   description: 'Learn more about our company.',
   *   noIndex: false,
   * });
   */
  public getSeoMetadata({
    locale,
    href,
    title,
    description,
    noIndex = false,
  }: {
    locale: TLocale
    href: THref
    title: string
    description?: string
    noIndex?: boolean
  }): Metadata {
    const canonicalUrl = this.config.buildPathname({ locale, href })
    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        ...this.config.openGraph,
        url: canonicalUrl,
        description,
        title,
      },
      robots: {
        index: !noIndex,
        follow: !noIndex,
      },
    }
  }
}
