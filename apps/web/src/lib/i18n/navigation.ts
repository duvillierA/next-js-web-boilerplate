import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation({
  locales: routing.locales,
  pathnames: {
    '/': '/',
    '/about': '/about',
  },
})
