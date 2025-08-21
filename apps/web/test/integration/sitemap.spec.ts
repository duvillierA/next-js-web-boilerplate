import { routing } from '@/lib/i18n/routing'
import { join } from 'node:path'
import { expect, test } from '../setup/fixtures'

const defaultLocale = routing.defaultLocale
const aboutPathnames = routing.pathnames['/about']

// Helper functions to avoid conditionals in tests
function getIndexPageAlternates(origin: string) {
  return routing.locales.map((locale) => {
    const pathname = locale === defaultLocale ? '/' : `/${locale}`
    const href = new URL(pathname, origin).toString()
    return `<xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`
  })
}

function getAboutPageAlternates(origin: string) {
  return routing.locales.map((locale) => {
    const prefix = locale === defaultLocale ? '' : `/${locale}`
    const href = new URL(join(prefix, aboutPathnames[locale]), origin).toString()
    return `<xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`
  })
}

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

  test('should serve sitemap.xml with index page structure', async ({ request, ctx }) => {
    const origin = ctx.serverUrl
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/xml')

    const body = await response.text()

    // Check for the index page <url> block with correct alternates
    expect(body).toContain(`<loc>${origin}/</loc>`)
    const indexAlternates = getIndexPageAlternates(origin)
    indexAlternates.forEach((alternate) => {
      expect(body).toContain(alternate)
    })
  })

  test('should serve sitemap.xml with about page structure', async ({ request, ctx }) => {
    const origin = ctx.serverUrl
    const response = await request.get('/sitemap.xml')
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/xml')

    const body = await response.text()

    // Check for the about page <url> block with correct alternates
    expect(body).toContain(`<loc>${origin}/about</loc>`)
    const aboutAlternates = getAboutPageAlternates(origin)
    aboutAlternates.forEach((alternate) => {
      expect(body).toContain(alternate)
    })
  })
})
