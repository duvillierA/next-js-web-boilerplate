import { defineRouting } from 'next-intl/routing'

export const locales = ['en', 'fr'] as const // todo use routing.locales

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed', // https://next-intl.dev/docs/routing#locale-prefix-as-needed
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      fr: '/a-propos',
    },
  },
})
