import { getHttpUrl } from '@/lib/utils/url'
import { expect, test } from '@playwright/test'
const locales = ['en', 'fr']

test.describe('Sanity checks', () => {
  test('should render the home page correctly', async ({ page }) => {
    // Navigate to home page and verify status
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)

    // Verify page title
    await expect(page).toHaveTitle('Boilerplate')
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /A modern Next.js application with internationalization support/,
    )
  })

  for (const locale of locales) {
    test(`should render the ${locale} about page correctly`, async ({ page }) => {
      // Visit the about page for the given locale
      const aboutPath = locale === 'en' ? '/about' : `/${locale}/a-propos`
      const response = await page.goto(aboutPath)
      expect(response?.status()).toBe(200)

      // Check the page title (from translation, fallback to regex)
      await expect(page).toHaveTitle(/About|À propos/i)

      // Check meta description exists and is not empty
      const description = page.locator('meta[name="description"]')
      await expect(description).toHaveAttribute('content')
      expect(await description.textContent()).toBeGreaterThan(5)

      // Check canonical link
      const canonical = page.locator('link[rel="canonical"]')
      await expect(canonical).toHaveAttribute('href')
      // Canonical should end with the about path for the locale
      expect(canonical).toBe(new URL(aboutPath, getHttpUrl()).toString())

      // Check Open Graph meta tags
      const ogTitle = page.locator('meta[property="og:title"]')
      await expect(ogTitle).toHaveAttribute('content')
      const ogDescription = page.locator('meta[property="og:description"]')
      await expect(ogDescription).toHaveAttribute('content')
      const ogUrl = page.locator('meta[property="og:url"]')
      await expect(ogUrl).toHaveAttribute('content')
      expect(ogUrl).toBe(new URL(aboutPath, getHttpUrl()).toString())
    })
  }
})
