import { Roboto, Roboto_Mono } from 'next/font/google'

export const fontSans = Roboto({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const fontMono = Roboto_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})
