import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'fr'] as const

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed', // https://next-intl.dev/docs/routing#locale-prefix-as-needed
})
