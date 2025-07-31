import { useTranslations } from 'next-intl'

export const Error = () => {
  const t = useTranslations('Error')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}
