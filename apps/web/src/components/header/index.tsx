import { ThemeToggle } from '@/components/theme/toggle'
import { config } from '@/config'
import { cn } from '@boilerplate/ui/utils'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex flex-row items-center space-x-2">
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
      </div>
      <ThemeToggle />
    </header>
  )
}
