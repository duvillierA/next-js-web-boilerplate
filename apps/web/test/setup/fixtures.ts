import { routing } from '@/lib/i18n/routing'
import type { Locale, Pathname } from '@/lib/i18n/types'
import { test as base, expect, type Page } from '@playwright/test'

type SupportedLocale = Locale

class AppTestContext {
  readonly baseURL: string
  readonly locales: typeof routing.locales

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.locales = routing.locales
  }

  get serverUrl(): string {
    // Return origin like http://localhost:3000
    return new URL(this.baseURL).origin
  }

  urlFor(pathname: string): string {
    return new URL(pathname, this.serverUrl).toString()
  }

  /**
   * Compute pathname for a known app page (localized when applicable)
   */
  getKnownPathname(page: Pathname, locale?: SupportedLocale): string {
    const effectiveLocale: SupportedLocale = (locale ?? routing.defaultLocale) as SupportedLocale

    if (page === '/') return effectiveLocale === routing.defaultLocale ? '/' : `/${effectiveLocale}`

    if (page === '/about') {
      const about = routing.pathnames['/about']
      const localized = about[effectiveLocale]
      const prefix = effectiveLocale === routing.defaultLocale ? '' : `/${effectiveLocale}`
      return `${prefix}${localized}`
    }

    // Fallback to home when unknown
    return '/'
  }

  async goToKnownPage(page: Page, knownPage: Pathname, locale?: SupportedLocale) {
    const pathname = this.getKnownPathname(knownPage, locale)
    return page.goto(pathname)
  }
}

const test = base.extend<{ ctx: AppTestContext }>({
  ctx: async ({}, provide, testInfo) => {
    const baseURL = testInfo.project.use.baseURL || 'http://localhost:3000'
    const ctx = new AppTestContext(baseURL)
    await provide(ctx)
  },
})

export { AppTestContext, expect, test }
