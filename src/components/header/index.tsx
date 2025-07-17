import { ThemeToggle } from '@/shared/components/core/theme/toggle'
import { config } from '@/shared/config'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex flex-row items-center space-x-2">
        <h1>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 hover:no-underline"
            title="Go to home page"
          >
            <Rocket className="inline-block h-4 w-4" />
            <span className="font-semibold">{config.NEXT_PUBLIC_APP_NAME}</span>
          </Link>
        </h1>
        <small className="text-sm text-muted-foreground">Next.js project template</small>
      </div>
      <ThemeToggle />
    </header>
  )
}
