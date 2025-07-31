'use client'
import { Link, usePathname } from '@/lib/i18n/navigation'
import { cn } from '@boilerplate/ui/utils'
import { useTranslations } from 'next-intl'

export default function Navigation() {
  const t = useTranslations('Navigation')
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4">
      <Link
        href="/"
        className={cn({ 'font-semibold': pathname === '/' })}
      >
        {t('home')}
      </Link>
      <Link
        href="/about"
        className={cn({ 'font-semibold': pathname === '/about' })}
      >
        {t('about')}
      </Link>
    </nav>
  )
}
