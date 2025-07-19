import posthog from 'posthog-js'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { PostHogClient } from '../client'

vi.mock('posthog-js', () => ({
  default: {
    init: vi.fn(),
  },
}))

describe('PostHogClient', () => {
  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should initialize PostHog with correct configuration', () => {
    const props = {
      key: 'test-key',
      host: 'https://test.posthog.com',
      debug: true,
    }

    PostHogClient(props)

    expect(posthog.init).toHaveBeenCalledWith('test-key', {
      api_host: '/ingest',
      ui_host: 'https://test.posthog.com',
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: true,
      before_send: expect.any(Function),
    })
  })

  it('should initialize PostHog without debug mode by default', () => {
    const props = {
      key: 'test-key',
      host: 'https://test.posthog.com',
    }

    PostHogClient(props)

    expect(posthog.init).toHaveBeenCalledWith('test-key', {
      api_host: '/ingest',
      ui_host: 'https://test.posthog.com',
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: undefined,
      before_send: expect.any(Function),
    })
  })
})
