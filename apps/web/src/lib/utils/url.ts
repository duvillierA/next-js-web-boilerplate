import { config } from '@/config'
import { HttpUrlBuilder } from '@boilerplate/utils'

const httpUrl = new HttpUrlBuilder({
  fallback: 'http://localhost:3000',
  vercelEnv: config.NEXT_PUBLIC_VERCEL_ENV,
  url: config.NEXT_PUBLIC_VERCEL_URL,
  prodUrl: config.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
})

export const getHttpUrl = httpUrl.getHttpUrl.bind(httpUrl)
