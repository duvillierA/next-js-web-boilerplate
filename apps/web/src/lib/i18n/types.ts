import messages from '@/messages/en.json'
import { routing } from './routing'

type Locale = (typeof routing.locales)[number]

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof messages
  }
}
