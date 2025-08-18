import { routing } from '@/lib/i18n/routing'
import { expect, test } from '@playwright/test'
import { join } from 'node:path'

const defaultLocale = routing.defaultLocale
const aboutPathnames = routing.pathnames['/about']
const origin = 'http://localhost:3000'

test.describe('Sitemap', () => {
  test('should serve sitemap.xml with correct content type and structure', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/xml')

    const body = await response.text()
    // Basic checks for XML structure and required tags
    expect(body).toContain('<?xml')
    expect(body).toContain(
      '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="https://www.w3.org/1999/xhtml">',
    )
    expect(body).toMatch(/<url>[\s\S]*<\/url>/)
  })

  test('should serve sitemap.xml with index page structure', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/xml')

    const body = await response.text()

    // Check for the index page <url> block with correct alternates
    expect(body).toContain(`<loc>${origin}/</loc>`)
    for (const locale of routing.locales) {
      const pathname = locale === defaultLocale ? '/' : `/${locale}`
      const href = new URL(pathname, origin).toString()
      const text = `<xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`
      expect(body).toContain(text)
    }
  })

  test('should serve sitemap.xml with about page structure', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/xml')

    const body = await response.text()

    // Check for the about page <url> block with correct alternates
    expect(body).toContain(`<loc>${origin}/about</loc>`)
    for (const locale of routing.locales) {
      const prefix = locale === defaultLocale ? '' : `/${locale}`
      const href = new URL(join(prefix, aboutPathnames[locale]), origin).toString()
      console.log(href)
      const text = `<xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`
      expect(body).toContain(text)
    }
  })
})
