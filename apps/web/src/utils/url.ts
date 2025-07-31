import { config } from '@/config'

export const getHttpUrl = () => {
  if (!config.NEXT_PUBLIC_VERCEL_ENV) {
    return new URL(`http://localhost:3000`)
  }
  switch (config.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return new URL(
        `https://${config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL || config.NEXT_PUBLIC_VERCEL_URL}`,
      )
    case 'development':
    case 'preview':
      return new URL(`https://${config.NEXT_PUBLIC_VERCEL_URL}`)
    default:
      return new URL(`http://localhost:3000`)
  }
}
