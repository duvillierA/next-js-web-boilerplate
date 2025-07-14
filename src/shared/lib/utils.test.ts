import { cn } from '@/shared/lib/utils'
import { describe, expect, it } from 'vitest'

describe('utils', () => {
  describe('cn', () => {
    it('should merge class names and remove duplicates', () => {
      if (true) {
        expect(cn('bg-red-500', 'bg-primary', 'text-white')).toBe('bg-primary text-white')
      }
    })
  })
})
