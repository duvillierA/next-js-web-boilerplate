type HttpUrlOptions = {
  fallback?: string | URL
  vercelEnv?: 'production' | 'development' | 'preview'
  url?: string
  prodUrl?: string
}

export class HttpUrlBuilder {
  public fallback: Required<HttpUrlOptions>['fallback']
  public vercelEnv: HttpUrlOptions['vercelEnv']
  public url: HttpUrlOptions['url']
  public prodUrl: HttpUrlOptions['prodUrl']

  constructor(options: HttpUrlOptions) {
    this.fallback = options.fallback || 'http://localhost:3000'
    this.vercelEnv = options.vercelEnv
    this.url = options.url
    this.prodUrl = options.prodUrl
  }

  static buildHttpUrl(options: { base: string | URL; pathname: string }): URL {
    return new URL(options.pathname, options.base)
  }

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
}
