'use client'

import { Error, ErrorDescription, ErrorLink, ErrorTitle } from '@/components/templates/error'
import { useTranslations } from 'next-intl'

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function ErrorPage() {
  const t = useTranslations('Error')
  const tCommon = useTranslations('Common')
  return (
    <Error>
      <ErrorTitle>{t('title')}</ErrorTitle>
      <ErrorDescription>{t('description')}</ErrorDescription>
      <ErrorLink href="/">{tCommon('backToHome')}</ErrorLink>
    </Error>
  )
}
