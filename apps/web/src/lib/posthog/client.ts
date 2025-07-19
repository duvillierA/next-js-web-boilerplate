import posthog from 'posthog-js'
import { sampleByEvent } from 'posthog-js/lib/src/customizations'

type PostHogInitClientProps = {
  key: string
  host: string
  debug?: boolean
}

export function PostHogClient({ key, host, debug }: PostHogInitClientProps) {
  return posthog.init(key, {
    api_host: '/ingest',
    ui_host: host,
    defaults: '2025-05-24',
    capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
    debug,
    before_send: sampleByEvent(['$web_vitals'], 0.5), // Capture only half of web vitals events
  })
}
