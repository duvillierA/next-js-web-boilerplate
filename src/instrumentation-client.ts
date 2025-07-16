import { config } from '@/shared/config'
import { PostHogClient } from '@/shared/lib/posthog/client'

if (config.NEXT_PUBLIC_POSTHOG_KEY) {
  PostHogClient({
    key: config.NEXT_PUBLIC_POSTHOG_KEY,
    host: config.NEXT_PUBLIC_POSTHOG_HOST,
    debug: config.isDevelopment,
  })
}
