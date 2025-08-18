import { describe, expect, it } from 'vitest'
import { sleep } from './index'

describe('utils', () => {
  describe('sleep', () => {
    it('should sleep for the given amount of time', async () => {
      const start = Date.now()
      await sleep(1000)
      const end = Date.now()
      expect(end - start).toBeGreaterThanOrEqual(990)
    })
  })
})
