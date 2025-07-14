import { z } from 'zod'

const vercelConfigSchema = z.object({
  NEXT_PUBLIC_VERCEL_ENV: z.enum(['development', 'production']).default('development'),
  NEXT_PUBLIC_VERCEL_URL: z.string(), // *.vercel.app, does not include https://
  NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(), // my-site.com, does not include https://
  NEXT_PUBLIC_VERCEL_BRANCH_URL: z.string().optional(), // *-git-*.vercel.app, does not include https://
  CI: z.number().optional(),
})

const baseConfigSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  LOCALES: z
    .string()
    .transform((val) => val.replaceAll(' ', '').split(','))
    .default(['en']),
  DEFAULT_LOCALE: z.string().default('en'),
})

export const configSchema = z.object({
  ...baseConfigSchema.shape,
  ...vercelConfigSchema.shape,
})

/**
 * @description Parses the environment variables and returns the config object
 */
export const config = configSchema.parse(process.env)
