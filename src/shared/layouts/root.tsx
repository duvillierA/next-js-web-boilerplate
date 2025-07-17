import { ThemeProvider } from '@/shared/components/core/theme'
import { cn } from '@/shared/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

type RootLayoutProps = React.ComponentProps<'body'> & {
  lang?: string
  googleTagManagerId?: string
  googleAnalyticsId?: string
}

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  lang = 'en',
  className,
  googleTagManagerId,
  googleAnalyticsId,
  ...props
}) => {
  return (
    <html
      lang={lang}
      suppressHydrationWarning
    >
      {!!googleTagManagerId && <GoogleTagManager gtmId={googleTagManagerId} />}
      {!!googleAnalyticsId && <GoogleAnalytics gaId={googleAnalyticsId} />}
      <body
        className={cn('antialiased', className)}
        {...props}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
