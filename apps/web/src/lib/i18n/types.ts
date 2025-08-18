import messages from '@/messages/en.json'
import { routing } from './routing'

export type Locale = (typeof routing.locales)[number]
export type Pathname = keyof typeof routing.pathnames

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale
    Messages: typeof messages
    Pathname: Pathname
  }
}
