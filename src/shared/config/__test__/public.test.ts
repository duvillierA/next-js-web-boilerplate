import { publicConfigBuilder } from '@/shared/config/public'
import { describe, expect, it } from 'vitest'

describe('publicConfig', () => {
  describe('publicConfigBuilder', () => {
    it('should set default values when env variables are not provided', () => {
      const config = publicConfigBuilder({})
      expect(config.NEXT_PUBLIC_LOCALES).toEqual(['en'])
      expect(config.NEXT_PUBLIC_DEFAULT_LOCALE).toBe('en')
      expect(config.NEXT_PUBLIC_POSTHOG_HOST).toBe('https://eu.i.posthog.com')
      expect(config.NEXT_PUBLIC_POSTHOG_KEY).toBeUndefined()
      expect(config.NEXT_PUBLIC_VERCEL_ENV).toBeUndefined()
      expect(config.NEXT_PUBLIC_VERCEL_URL).toBeUndefined()
      expect(config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL).toBeUndefined()
      expect(config.NEXT_PUBLIC_VERCEL_BRANCH_URL).toBeUndefined()
    })

    it('should parse NEXT_PUBLIC_LOCALES as array', () => {
      const config = publicConfigBuilder({
        NEXT_PUBLIC_LOCALES: 'en,fr,es',
      })
      expect(config.NEXT_PUBLIC_LOCALES).toEqual(['en', 'fr', 'es'])
    })

    it('should validate NEXT_PUBLIC_VERCEL_ENV enum values', () => {
      const config = publicConfigBuilder({
        NEXT_PUBLIC_VERCEL_ENV: 'preview',
      })
      expect(config.NEXT_PUBLIC_VERCEL_ENV).toBe('preview')

      expect(() =>
        publicConfigBuilder({
          NEXT_PUBLIC_VERCEL_ENV: 'invalid',
        }),
      ).toThrow()
    })

    it('should accept custom posthog configuration', () => {
      const config = publicConfigBuilder({
        NEXT_PUBLIC_POSTHOG_KEY: 'test-key',
        NEXT_PUBLIC_POSTHOG_HOST: 'https://custom.posthog.com',
      })
      expect(config.NEXT_PUBLIC_POSTHOG_KEY).toBe('test-key')
      expect(config.NEXT_PUBLIC_POSTHOG_HOST).toBe('https://custom.posthog.com')
    })

    it('should accept vercel URLs', () => {
      const config = publicConfigBuilder({
        NEXT_PUBLIC_VERCEL_URL: 'test.vercel.app',
        NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: 'prod.vercel.app',
        NEXT_PUBLIC_VERCEL_BRANCH_URL: 'branch.vercel.app',
      })
      expect(config.NEXT_PUBLIC_VERCEL_URL).toBe('test.vercel.app')
      expect(config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL).toBe('prod.vercel.app')
      expect(config.NEXT_PUBLIC_VERCEL_BRANCH_URL).toBe('branch.vercel.app')
    })
  })
})
