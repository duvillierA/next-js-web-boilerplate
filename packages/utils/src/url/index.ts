type HttpUrlOptions = {
  fallback?: string | URL
  vercelEnv?: 'production' | 'development' | 'preview'
  url?: string
  prodUrl?: string
  cdnUrl?: string
}

export class HttpUrlBuilder {
  public fallback: Required<HttpUrlOptions>['fallback']
  public vercelEnv: HttpUrlOptions['vercelEnv']
  public url: HttpUrlOptions['url']
  public prodUrl: HttpUrlOptions['prodUrl']
  public cdnUrl: HttpUrlOptions['cdnUrl']

  constructor(options: HttpUrlOptions) {
    this.fallback = options.fallback || 'http://localhost:3000'
    this.vercelEnv = options.vercelEnv
    this.url = options.url
    this.prodUrl = options.prodUrl
    this.cdnUrl = options.cdnUrl
  }

  static buildHttpUrl(options: { base: string | URL; pathname: string }): URL {
    return new URL(options.pathname, options.base)
  }

  /**
   * Returns a fully qualified URL based on the current environment and provided pathname.
   *
   * @param {Object} [options] - Options for URL generation.
   * @param {string} [options.pathname] - The pathname to append to the base URL.
   * @returns {URL} The constructed URL object.
   *
   * @example
   * // With a pathname
   * const builder = new HttpUrlBuilder({ vercelEnv: 'production', prodUrl: 'example.com' });
   * const url = builder.getHttpUrl({ pathname: '/about' });
   * // url.href === 'https://example.com/about'
   *
   * @example
   * // Without a pathname
   * const builder = new HttpUrlBuilder({ vercelEnv: 'development', url: 'localhost:3000' });
   * const url = builder.getHttpUrl();
   * // url.href === 'https://localhost:3000/'
   */
  public getHttpUrl({ pathname = '' }: { pathname?: string } = {}): URL {
    let base: string | URL
    switch (this.vercelEnv) {
      case 'production':
        base = this.prodUrl
          ? `https://${this.prodUrl}`
          : this.url
            ? `https://${this.url}`
            : this.fallback
        break
      case 'development':
      case 'preview':
        base = this.url ? `https://${this.url}` : this.fallback
        break
      default:
        base = this.fallback
    }
    return HttpUrlBuilder.buildHttpUrl({ base, pathname })
  }

  /**
   * Returns a fully qualified CDN URL based on the current environment and provided pathname.
   *
   * @param {Object} [options] - Options for CDN URL generation.
   * @param {string} [options.pathname] - The pathname to append to the CDN base URL.
   * @returns {URL | null} The constructed CDN URL object if available, otherwise null.
   *
   * @example
   * // In production with a CDN URL configured
   * const builder = new HttpUrlBuilder({ vercelEnv: 'production', cdnUrl: 'https://cdn.example.com' });
   * const url = builder.getCDNUrl({ pathname: '/assets/logo.png' });
   * // url.href === 'https://cdn.example.com/assets/logo.png'
   *
   * @example
   * // In development or without a CDN URL
   * const builder = new HttpUrlBuilder({ vercelEnv: 'development' });
   * const url = builder.getCDNUrl({ pathname: '/assets/logo.png' });
   * // url === null
   */
  public getCDNUrl({ pathname = '' }: { pathname?: string } = {}): URL | null {
    if (this.vercelEnv === 'production' && this.cdnUrl) {
      return HttpUrlBuilder.buildHttpUrl({ base: this.cdnUrl, pathname })
    }
    return null
  }
}
