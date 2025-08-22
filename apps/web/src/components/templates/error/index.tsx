import { Link } from '@/lib/i18n/navigation'
import { Button } from '@boilerplate/ui/button'
import { H1 } from '@boilerplate/ui/heading'
import { VStack } from '@boilerplate/ui/stack'
import { Text } from '@boilerplate/ui/text'
import { useTranslations } from 'next-intl'

export const Error = () => {
  const t = useTranslations('Error')
  const tCommon = useTranslations('Common')

  return (
    <VStack justify="center" align="center" className="min-h-[60vh]">
      <H1>{t('title')}</H1>
      <Text variant="muted" as="p">
        {t('description')}
      </Text>
      <Button asChild>
        <Link href="/">{tCommon('backToHome')}</Link>
      </Button>
    </VStack>
  )
}
