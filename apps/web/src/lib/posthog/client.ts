import { config } from '@/config'
import posthog from 'posthog-js'
import { sampleByEvent } from 'posthog-js/lib/src/customizations'

export function PostHogInitClient() {
  if (!config.NEXT_PUBLIC_POSTHOG_KEY) {
    return
  }

  return posthog.init(config.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: '/ingest',
    ui_host: config.NEXT_PUBLIC_POSTHOG_HOST,
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug: config.isDevelopment,
    before_send: sampleByEvent(['$web_vitals'], 0.5), // Capture only half of web vitals events
  })
}
