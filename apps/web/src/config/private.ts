import { z } from 'zod'

const privateConfigSchema = z.object({
  PORT: z.coerce.number().default(3000),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  CI: z.coerce.number().optional(),
})

export const privateConfigBuilder = (env: NodeJS.ProcessEnv) => {
  return privateConfigSchema.parse(env)
}

export const privateConfig = privateConfigBuilder(process.env)
