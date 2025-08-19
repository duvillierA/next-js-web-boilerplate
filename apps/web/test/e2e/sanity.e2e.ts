import { getHttpUrl } from '@/lib/utils/url'
import { expect, test } from '../setup/fixtures'
const locales = ['en', 'fr'] as const

test.describe('Sanity checks', () => {
  test('should render the home page correctly', async ({ page, ctx }) => {
    // Navigate to home page and verify status
    const response = await ctx.goToKnownPage(page, '/')
    expect(response?.status()).toBe(200)

    // Verify page title
    await expect(page).toHaveTitle('Boilerplate')
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /A modern Next.js application with internationalization support/,
    )
  })

  for (const locale of locales) {
    test(`should render the ${locale} about page correctly`, async ({ page, ctx }) => {
      // Visit the about page for the given locale
      const aboutPath = ctx.getKnownPathname('/about', locale)
      const response = await page.goto(aboutPath)
      expect(response?.status()).toBe(200)

      // Check the page title (from translation, fallback to regex)
      await expect(page).toHaveTitle(/About|À propos/i)

      // Check canonical link
      const canonical = page.locator('link[rel="canonical"]')
      await expect(canonical).toHaveAttribute('href')
      // Canonical should end with the about path for the locale
      const canonicalHref = canonical
      await expect(canonicalHref).toHaveAttribute(
        'href',
        getHttpUrl({ pathname: aboutPath }).toString(),
      )

      // Check Open Graph meta tags
      const ogTitle = page.locator('meta[property="og:title"]')
      await expect(ogTitle).toHaveAttribute('content')
      const ogDescription = page.locator('meta[property="og:description"]')
      await expect(ogDescription).toHaveAttribute('content')
      const ogUrl = page.locator('meta[property="og:url"]')
      await expect(ogUrl).toHaveAttribute('content')
      const ogUrlContent = ogUrl
      await expect(ogUrlContent).toHaveAttribute(
        'content',
        getHttpUrl({ pathname: aboutPath }).toString(),
      )
    })
  }
})
