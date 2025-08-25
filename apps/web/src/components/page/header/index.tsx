import { LocaleSwitcher } from '@/components/common/locale-switcher'
import { ThemeSwitcher } from '@/components/common/theme/switcher'
import { PageNavigation } from '@/components/page/navigation'
import { config } from '@/config'
import { Link } from '@/lib/i18n/navigation'
import { Separator } from '@boilerplate/ui/separator'
import { HStack } from '@boilerplate/ui/stack'
import { Text } from '@boilerplate/ui/text'
import { cn } from '@boilerplate/ui/utils'
import { Rocket } from 'lucide-react'

export const PageHeader = () => {
  return (
    <HStack asChild justify="between" align="center">
      <header className="py-4">
        <HStack align="center" gap="sm">
          <Link
            href="/"
            className="group/logo inline-flex items-center space-x-2 hover:no-underline"
            title="Go to home page"
          >
            <Rocket
              className={cn(
                'relative inline-block h-4 w-4 transition-transform duration-300 ease-in-out',
                'group-hover/logo:translate-x-0.5 group-hover/logo:-translate-y-1 group-hover/logo:opacity-80',
              )}
            />
            <Text weight="semibold" className="group-hover/logo:opacity-80">
              {config.NEXT_PUBLIC_APP_NAME}
            </Text>
          </Link>
          <Separator orientation="vertical" />
          <Text variant="muted" as="small" size="sm">
            Next.js project template
          </Text>
          <PageNavigation />
        </HStack>
        <HStack gap="sm">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </HStack>
      </header>
    </HStack>
  )
}
