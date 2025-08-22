import { config } from '@/config'
import { Link } from '@/lib/i18n/navigation'

export const Footer = () => {
  return (
    <footer className="py-4">
      <p>
        <Link href="/">
          <span className="font-semibold">{config.NEXT_PUBLIC_APP_NAME}</span>
        </Link>
      </p>
    </footer>
  )
}
