import { z } from 'zod'

const vercelConfigSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['development', 'production', 'preview']).optional(),
  NEXT_PUBLIC_VERCEL_URL: z.string().endsWith('.vercel.app').optional(),
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().endsWith('.vercel.app').optional(),
})

const posthogConfigSchema = z.object({
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().default('https://eu.i.posthog.com'),
})

const publicBaseConfigSchema = z.object({
  NEXT_PUBLIC_LOCALES: z
    .string()
    .transform((val) => val.replaceAll(' ', '').split(','))
    .default(['en']),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default('en'),
})

const publicConfigSchema = z.object({
  ...publicBaseConfigSchema.shape,
  ...vercelConfigSchema.shape,
  ...posthogConfigSchema.shape,
})

export const publicConfigBuilder = (env: Record<string, string | undefined>) => {
  return publicConfigSchema.parse(env)
}

export const publicConfig = publicConfigBuilder({
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
  NEXT_PUBLIC_LOCALES: process.env.NEXT_PUBLIC_LOCALES,
  NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
})
