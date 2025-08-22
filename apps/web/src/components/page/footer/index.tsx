import { config } from '@/config'
import { Link } from '@/lib/i18n/navigation'
import { Text } from '@boilerplate/ui/text'

export const Footer = () => {
  return (
    <footer className="py-4">
      <Text weight="semibold" asChild>
        <Link href="/">{config.NEXT_PUBLIC_APP_NAME}</Link>
      </Text>
    </footer>
  )
}
