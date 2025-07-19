import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { cleanup, render } from 'vitest-browser-react'

// Browser test configuration

// Enhanced cleanup after each test case
afterEach(() => {
  cleanup()
  // Clear any remaining timers
  if (typeof window !== 'undefined') {
    window.clearTimeout = vi.fn()
    window.clearInterval = vi.fn()
  }
})

// Global test setup for browser environment
beforeAll(() => {
  // Mock ResizeObserver if not available
  if (typeof window !== 'undefined' && !window.ResizeObserver) {
    window.ResizeObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }))
  }

  // Mock IntersectionObserver if not available
  if (typeof window !== 'undefined' && !window.IntersectionObserver) {
    window.IntersectionObserver = vi.fn().mockImplementation(() => ({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    }))
  }
})

// Global test teardown
afterAll(() => {
  // Clean up any global mocks
  vi.clearAllMocks()
})

// Custom render function with providers
export function renderWithProviders(ui: React.ReactElement, options = {}) {
  return render(ui, {
    ...options,
  })
}
