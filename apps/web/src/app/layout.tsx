import { Header } from '@/components/header'
import { config } from '@/config'
import { RootLayout } from '@/layouts/root'
import '@/styles/globals.css'
import { cn } from '@boilerplate/ui/utils'
import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import { PropsWithChildren } from 'react'

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: config.NEXT_PUBLIC_APP_NAME,
  description: 'Application description',
}

export default function AppRootLayout({ children }: PropsWithChildren) {
  return (
    <RootLayout
      lang="en"
      className={cn(roboto.variable, robotoMono.variable)}
      googleAnalyticsId={config.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}
      googleTagManagerId={config.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}
    >
      <main className="container mx-auto flex min-h-screen flex-col gap-4 px-4">
        <Header />
        {children}
      </main>
    </RootLayout>
  )
}
