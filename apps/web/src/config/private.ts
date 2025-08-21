import { serverConfigSchema } from '@boilerplate/utils'

export const privateConfigBuilder = (env: NodeJS.ProcessEnv) => {
  return serverConfigSchema.parse(env)
}

export const privateConfig = privateConfigBuilder(process.env)
