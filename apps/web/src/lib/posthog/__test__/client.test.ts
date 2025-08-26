import posthog from 'posthog-js'
import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'

// Mock posthog-js
vi.mock('posthog-js', () => ({
  default: {
    init: vi.fn(),
  },
}))

// Mock the sampleByEvent function
vi.mock('posthog-js/lib/src/customizations', () => ({
  sampleByEvent: vi.fn(() => vi.fn()),
}))

// Mock the config module
const mockConfig = {
  NEXT_PUBLIC_POSTHOG_KEY: 'test-key',
  NEXT_PUBLIC_POSTHOG_HOST: 'https://test.posthog.com',
  isDevelopment: true,
}

vi.mock('@/config', () => ({
  config: mockConfig,
}))

describe('PostHogClient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.clearAllMocks()
  })

  it('should initialize PostHog with correct configuration when key is provided', async () => {
    const { PostHogInitClient } = await import('../client')

    PostHogInitClient()

    expect(posthog.init).toHaveBeenCalledWith('test-key', {
      api_host: '/ingest',
      ui_host: 'https://test.posthog.com',
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: true,
      before_send: expect.any(Function),
    })
  })

  it('should not initialize PostHog when key is not provided', async () => {
    // Mock config without PostHog key
    vi.doMock('@/config', () => ({
      config: {
        NEXT_PUBLIC_POSTHOG_KEY: undefined,
        NEXT_PUBLIC_POSTHOG_HOST: 'https://test.posthog.com',
        isDevelopment: true,
      },
    }))

    // Clear module cache to force re-import
    vi.resetModules()

    // Re-import to get the mocked config
    const { PostHogInitClient } = await import('../client')

    PostHogInitClient()

    expect(posthog.init).not.toHaveBeenCalled()
  })

  it('should initialize PostHog with debug false in production', async () => {
    // Mock config for production
    vi.doMock('@/config', () => ({
      config: {
        NEXT_PUBLIC_POSTHOG_KEY: 'test-key',
        NEXT_PUBLIC_POSTHOG_HOST: 'https://test.posthog.com',
        isDevelopment: false,
      },
    }))

    // Clear module cache to force re-import
    vi.resetModules()

    // Re-import to get the mocked config
    const { PostHogInitClient } = await import('../client')

    PostHogInitClient()

    expect(posthog.init).toHaveBeenCalledWith('test-key', {
      api_host: '/ingest',
      ui_host: 'https://test.posthog.com',
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: false,
      before_send: expect.any(Function),
    })
  })

  it('should use default PostHog host when not provided', async () => {
    // Mock config without PostHog host
    vi.doMock('@/config', () => ({
      config: {
        NEXT_PUBLIC_POSTHOG_KEY: 'test-key',
        NEXT_PUBLIC_POSTHOG_HOST: undefined,
        isDevelopment: true,
      },
    }))

    // Clear module cache to force re-import
    vi.resetModules()

    // Re-import to get the mocked config
    const { PostHogInitClient } = await import('../client')

    PostHogInitClient()

    expect(posthog.init).toHaveBeenCalledWith('test-key', {
      api_host: '/ingest',
      ui_host: undefined,
      defaults: '2025-05-24',
      capture_exceptions: true,
      debug: true,
      before_send: expect.any(Function),
    })
  })
})
