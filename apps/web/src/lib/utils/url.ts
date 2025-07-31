import { config } from '@/config'

export const getHttpUrl = ({
  fallback = 'http://localhost:3000',
  env = config.NEXT_PUBLIC_VERCEL_ENV,
  url = config.NEXT_PUBLIC_VERCEL_URL,
  prodUrl = config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
}: { fallback?: string; env?: string; url?: string; prodUrl?: string } = {}) => {
  switch (env) {
    case 'production':
      return new URL(`https://${prodUrl || url}`)
    case 'development':
    case 'preview':
      return new URL(`https://${url}`)
    default:
      return new URL(fallback)
  }
}
