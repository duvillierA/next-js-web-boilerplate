import { cn } from '@/shared/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
type RootLayoutProps = React.ComponentProps<'body'> & {
  lang?: string
  gtmId?: string
  gaId?: string
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  lang = 'en',
  className,
  gtmId,
  gaId,
  ...props
}) => {
  return (
    <html lang={lang}>
      {!!gtmId && <GoogleTagManager gtmId={gtmId} />}
      {!!gaId && <GoogleAnalytics gaId={gaId} />}
      <body
        className={cn('antialiased', className)}
        {...props}
      >
        {children}
      </body>
    </html>
  )
}
