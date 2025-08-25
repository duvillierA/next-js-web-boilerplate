import { Error, ErrorDescription, ErrorLink, ErrorTitle } from '@/components/templates/error'
import { useTranslations } from 'next-intl'

export const NotFound = () => {
  const t = useTranslations('NotFound')
  const tCommon = useTranslations('Common')
  return (
    <Error>
      <ErrorTitle>{t('title')}</ErrorTitle>
      <ErrorDescription>{t('description')}</ErrorDescription>
      <ErrorLink href="/">{tCommon('backToHome')}</ErrorLink>
    </Error>
  )
}
