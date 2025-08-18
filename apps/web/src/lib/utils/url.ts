import { config } from '@/config'

export const getHttpUrl = ({
  fallback = 'http://localhost:3000',
  env = config.NEXT_PUBLIC_VERCEL_ENV,
  url = config.NEXT_PUBLIC_VERCEL_URL,
  pathname = '',
  prodUrl = config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
} = {}) => {
  switch (env) {
    case 'production':
      return new URL(pathname, `https://${prodUrl || url}`)
    case 'development':
    case 'preview':
      return new URL(pathname, `https://${url}`)
    default:
      return new URL(pathname, fallback)
  }
}
