import { config } from '@/shared/config'
import { PostHog } from 'posthog-node'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { PostHogNodeClient } from '../server'

vi.mock('posthog-node', () => ({
  PostHog: vi.fn(),
}))

vi.mock('@/shared/config', () => ({
  config: {
    NEXT_PUBLIC_POSTHOG_KEY: 'test-key',
    NEXT_PUBLIC_POSTHOG_HOST: 'https://test.posthog.com',
  },
}))

describe('PostHogNodeClient', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should initialize PostHog with correct configuration', async () => {
    const client = await PostHogNodeClient()

    expect(PostHog).toHaveBeenCalledWith('test-key', {
      host: 'https://test.posthog.com',
      flushAt: 1,
      flushInterval: 0,
    })
    expect(client).toBeTruthy()
  })

  it('should return null when PostHog key is not available', async () => {
    vi.mocked(config).NEXT_PUBLIC_POSTHOG_KEY = ''

    const client = await PostHogNodeClient()

    expect(client).toBeNull()
  })
})
