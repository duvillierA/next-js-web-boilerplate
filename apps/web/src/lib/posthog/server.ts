'use server'

import { config } from '@/config'
import { PostHog } from 'posthog-node'

export async function PostHogNodeClient() {
  if (!config.NEXT_PUBLIC_POSTHOG_KEY) {
    return null
  }
  const posthogClient = new PostHog(config.NEXT_PUBLIC_POSTHOG_KEY, {
    host: config.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
