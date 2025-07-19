import { expect, test } from '@playwright/test'

test.describe('home page', () => {
  test('should render the home page correctly', async ({ page }) => {
    // Navigate to home page and verify status
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)

    // Verify page title
    await expect(page).toHaveTitle('Boilerplate')
    await expect(page.locator('meta[name="description"]')).toHaveAttribute(
      'content',
      /Application description/,
    )
  })
})
