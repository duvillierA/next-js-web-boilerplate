import { afterEach } from 'vitest';
import { cleanup } from 'vitest-browser-react';

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
