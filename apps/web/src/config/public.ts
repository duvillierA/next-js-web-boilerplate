import { z } from 'zod'

const vercelConfigSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['development', 'production', 'preview']).optional(),
  NEXT_PUBLIC_VERCEL_URL: z.string().endsWith('.vercel.app').optional(),
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().endsWith('.vercel.app').optional(),
})

const analyticsConfigSchema = z.object({
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().default('https://eu.i.posthog.com'),
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: z.string().optional(),
})

const publicBaseConfigSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default('My App'),
  NEXT_PUBLIC_LOCALES: z
    .string()
    .transform((val) => val.replaceAll(' ', '').split(','))
    .default(['en']),
  NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default('en'),
})

const publicConfigSchema = z.object({
  ...publicBaseConfigSchema.shape,
  ...vercelConfigSchema.shape,
  ...analyticsConfigSchema.shape,
})

type PublicConfigBuilderProps = Record<keyof typeof publicConfigSchema.shape, string | undefined>
export const publicConfigBuilder = (env: PublicConfigBuilderProps) => {
  return publicConfigSchema.parse(env)
}

export const PUBLIC_DEFAULT_CONFIG: PublicConfigBuilderProps = {
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
  NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
  NEXT_PUBLIC_LOCALES: process.env.NEXT_PUBLIC_LOCALES,
  NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
}

// define default values for public config at build time
export const publicConfig = publicConfigBuilder(PUBLIC_DEFAULT_CONFIG)
