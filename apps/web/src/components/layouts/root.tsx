import { ThemeProvider } from '@/components/common/theme'
import { cn } from '@boilerplate/ui/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'

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
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
