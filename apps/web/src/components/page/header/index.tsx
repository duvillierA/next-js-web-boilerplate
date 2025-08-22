import { ThemeToggle } from '@/components/common/theme/toggle'
import LocaleSwitcher from '@/components/page/locale-switcher'
import Navigation from '@/components/page/navigation'
import { config } from '@/config'
import { Stack } from '@boilerplate/ui/stack'
import { cn } from '@boilerplate/ui/utils'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <Stack
      asChild
      direction="horizontal"
      justify="between"
      align="center"
    >
      <header className="py-4">
        <Stack
          direction="horizontal"
          justify="between"
          align="center"
        >
          <Stack
            direction="horizontal"
            justify="between"
            align="center"
          >
            <h1>
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
                <span className="font-semibold group-hover/logo:opacity-80">
                  {config.NEXT_PUBLIC_APP_NAME}
                </span>
              </Link>
            </h1>
            <small className="text-sm text-muted-foreground">Next.js project template</small>
          </Stack>
          <Navigation />
        </Stack>
        <Stack
          direction="horizontal"
          justify="between"
          align="center"
        >
          <LocaleSwitcher />
          <ThemeToggle />
        </Stack>
      </header>
    </Stack>
  )
}
