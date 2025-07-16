import { config } from '@/shared/config'
import { describe, expect, it } from 'vitest'

describe('config', () => {
  describe('config merge', () => {
    it('should merge public and private configs', () => {
      expect(config).toHaveProperty('isProduction')
      expect(config).toHaveProperty('isDevelopment')
      expect(config).toHaveProperty('isTest')
    })

    it('should set isProduction based on NODE_ENV', () => {
      expect(config.isProduction).toBe(config.NODE_ENV === 'production')
    })

    it('should set isDevelopment based on NODE_ENV', () => {
      expect(config.isDevelopment).toBe(config.NODE_ENV === 'development')
    })

    it('should set isTest based on NODE_ENV', () => {
      expect(config.isTest).toBe(config.NODE_ENV === 'test')
    })
  })
})
