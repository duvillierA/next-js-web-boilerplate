import { privateConfig } from './private'
import { publicConfig } from './public'

export const configBuilder = (config: typeof privateConfig & typeof publicConfig) => {
  return {
    ...config,
    isProduction: config.NODE_ENV === 'production',
    isDevelopment: config.NODE_ENV === 'development',
    isTest: config.NODE_ENV === 'test',
  }
}

export const config = configBuilder({
  ...publicConfig,
  ...privateConfig,
})
