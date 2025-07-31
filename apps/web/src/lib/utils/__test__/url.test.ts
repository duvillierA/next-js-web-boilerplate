import { describe, expect, it } from 'vitest'
import { getHttpUrl } from '../url'

/**
 * Mocks the global config object for testing.
 * @param env - The Vercel environment value.
 * @param url - The Vercel URL value.
 * @param prodUrl - The Vercel production project URL value.
 */

describe('getHttpUrl', () => {
  it('returns localhost when NEXT_PUBLIC_VERCEL_ENV is not set', () => {
    expect(getHttpUrl().toString()).toBe('http://localhost:3000/')
  })

  it('returns production URL when NEXT_PUBLIC_VERCEL_ENV is production and project production URL is set', () => {
    expect(
      getHttpUrl({ env: 'production', url: 'vercel-url.com', prodUrl: 'prod-url.com' }).toString(),
    ).toBe('https://prod-url.com/')
  })

  it('returns production URL when NEXT_PUBLIC_VERCEL_ENV is production and project production URL is not set', () => {
    expect(getHttpUrl({ env: 'production', url: 'vercel-url.com' }).toString()).toBe(
      'https://vercel-url.com/',
    )
  })

  it('returns preview URL when NEXT_PUBLIC_VERCEL_ENV is preview', () => {
    expect(getHttpUrl({ env: 'preview', url: 'preview-url.com' }).toString()).toBe(
      'https://preview-url.com/',
    )
  })

  it('returns development URL when NEXT_PUBLIC_VERCEL_ENV is development', () => {
    expect(getHttpUrl({ env: 'development', url: 'dev-url.com' }).toString()).toBe(
      'https://dev-url.com/',
    )
  })

  it('returns localhost for unknown NEXT_PUBLIC_VERCEL_ENV', () => {
    expect(getHttpUrl({ env: 'staging', url: 'staging-url.com' }).toString()).toBe(
      'http://localhost:3000/',
    )
  })
})
