import { afterEach, describe, expect, it, vi } from 'vitest'

// Mocks (use hoisted factory to avoid TDZ issues)
const { getHttpUrlMock, getPathnameMock } = vi.hoisted(() => {
  return {
    getHttpUrlMock: vi.fn(() => new URL('https://example.com/')),
    getPathnameMock: vi.fn(() => '/'),
  }
})

vi.mock('@/config', () => ({
  config: {
    NEXT_PUBLIC_APP_NAME: 'Test App',
  },
}))

vi.mock('@/lib/utils', () => ({
  getHttpUrl: getHttpUrlMock,
}))

vi.mock('@/lib/i18n/navigation', () => ({
  getPathname: getPathnameMock,
}))

import { generateBaseMetadata, generateSeoMetadata } from '../metadata'

afterEach(() => {
  vi.clearAllMocks()
})

describe('generateBaseMetadata', () => {
  it('returns expected base metadata structure', () => {
    getHttpUrlMock.mockReturnValue(new URL('https://site.test/'))
    getPathnameMock.mockReturnValue('/')

    const result = generateBaseMetadata({
      locale: 'en',
      title: 'Home',
      description: 'Desc',
    })

    expect(result.metadataBase?.toString()).toBe('https://site.test/')
    expect(result.title).toEqual({ default: 'Home', template: '%s | Test App' })
    expect(result.alternates?.canonical).toBe('/')
    expect(result.applicationName).toBe('Test App')
    expect(result.description).toBe('Desc')

    expect(result.openGraph).toEqual(
      expect.objectContaining({
        url: '/',
        type: 'website',
        siteName: 'Test App',
        locale: 'en',
        description: 'Desc',
        title: 'Home',
        images: {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Test App',
        },
      }),
    )

    expect(result.robots).toEqual({ index: true, follow: true })
  })
})

describe('generateSeoMetadata', () => {
  it('sets canonical with getPathname and applies title/description and robots', () => {
    getHttpUrlMock.mockReturnValue(new URL('https://foo.test/'))
    getPathnameMock.mockReturnValue('/fr/a-propos')

    const result = generateSeoMetadata({
      locale: 'fr',
      pathname: '/about',
      title: 'About',
      description: 'About Desc',
    })

    expect(result.metadataBase?.toString()).toBe('https://foo.test/')
    expect(result.alternates?.canonical).toBe('/fr/a-propos')
    expect(result.robots).toEqual({ index: true, follow: true })
    expect(result.title).toBe('About')
    expect(result.description).toBe('About Desc')
    expect(result.openGraph).toEqual(
      expect.objectContaining({ description: 'About Desc', title: 'About' }),
    )
  })

  it('respects noIndex and preserves provided canonical', () => {
    const canonical = '/fr/a-propos'
    getPathnameMock.mockReturnValue('/fr/a-propos')

    const result = generateSeoMetadata({
      locale: 'fr',
      pathname: '/about',
      noIndex: true,
      alternates: { canonical },
    })

    expect(result.alternates?.canonical).toBe(canonical)
    expect(result.robots).toEqual({ index: false, follow: false })
  })
})
