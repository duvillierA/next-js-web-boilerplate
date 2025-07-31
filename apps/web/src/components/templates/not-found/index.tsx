import { useTranslations } from 'next-intl'
import Link from 'next/link'

export const NotFound = () => {
  const t = useTranslations('Common')

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">{t('notFound')}</h2>
      <p className="mb-8 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
      >
        {t('backToHome')}
      </Link>
    </div>
  )
}
