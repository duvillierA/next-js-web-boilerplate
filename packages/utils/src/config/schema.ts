import { z } from 'zod'

export const serverConfigSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  CI: z.coerce.boolean().optional(),
})

export const vercelConfigSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['development', 'production', 'preview']).optional(),
  NEXT_PUBLIC_VERCEL_URL: z.string().endsWith('.vercel.app').optional(),
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().endsWith('.vercel.app').optional(),
})

export const analyticsConfigSchema = z.object({
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().default('https://eu.i.posthog.com'),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().optional(),
})
