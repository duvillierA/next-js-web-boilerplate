'use client'
import { Link, usePathname } from '@/lib/i18n/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@boilerplate/ui/navigation-menu'
import { useTranslations } from 'next-intl'

export default function Navigation() {
  const t = useTranslations('Navigation')
  const pathname = usePathname()

  return (
    <NavigationMenu className="ml-2">
      <NavigationMenuList>
        <NavigationMenuItem value="home">
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
            active={pathname === '/'}
          >
            <Link href="/">{t('home')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className={navigationMenuTriggerStyle()}
            active={pathname === '/about'}
          >
            <Link href="/about">{t('about')}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
