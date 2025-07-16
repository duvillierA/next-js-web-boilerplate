import { afterEach } from 'vitest'
import { cleanup } from 'vitest-browser-react'
// import './loadEnv'

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
