'use client'

import { usePathname, useRouter } from '@/lib/i18n/navigation'
import { routing } from '@/lib/i18n/routing'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@boilerplate/ui/select'
import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  console.log(pathname)
  const handleLocaleChange = (newLocale: typeof locale) => {
    // @ts-expect-error -- TypeScript will validate that only known `params`
    // are used in combination with a given `pathname`. Since the two will
    // always match for the current route, we can skip runtime checks.
    router.replace({ pathname, params }, { locale: newLocale })
  }

  return (
    <Select
      value={locale}
      onValueChange={handleLocaleChange}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t('label')} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem
            key={locale}
            value={locale}
          >
            {t(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
