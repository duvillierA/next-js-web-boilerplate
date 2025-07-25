import { privateConfigBuilder } from '@/config/private'
import { describe, expect, it } from 'vitest'

describe('privateConfig', () => {
  describe('privateConfigBuilder', () => {
    it('should set default values when env variables are not provided', () => {
      const config = privateConfigBuilder(process.env)
      expect(config.PORT).toBe(3000)
      expect(config.NODE_ENV).toBe('test')
      expect(config.CI).toBeUndefined()
    })

    it('should parse PORT as number', () => {
      const config = privateConfigBuilder({
        ...process.env,
        PORT: '4000',
      })
      expect(config.PORT).toBe(4000)
    })

    it('should validate NODE_ENV enum values', () => {
      const config = privateConfigBuilder({
        NODE_ENV: 'production',
      })
      expect(config.NODE_ENV).toBe('production')

      expect(() =>
        privateConfigBuilder({
          ...process.env,
          // @ts-expect-error - we want to test the validation
          NODE_ENV: 'invalid',
        }),
      ).toThrow()
    })

    it('should parse CI as number when provided', () => {
      const config = privateConfigBuilder({
        ...process.env,
        CI: '1',
      })
      expect(config.CI).toBe(1)
    })
  })
})
