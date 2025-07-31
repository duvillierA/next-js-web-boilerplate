import { config } from '@/config'
import { Link } from '@/lib/i18n/navigation'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-4">
      <div className="flex flex-row divide-x">
        <div className="mr-4 flex flex-row items-center space-x-2 pr-4">
          <h1>
            <Link href="/">
              <span className="font-semibold">{config.NEXT_PUBLIC_APP_NAME}</span>
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  )
}
