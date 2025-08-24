import withBundleAnalyzer from '@next/bundle-analyzer'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import type { Rewrite } from 'next/dist/lib/load-custom-routes'

const postHogRewrite = [
  {
    source: '/ingest/static/:path*',
    destination: 'https://eu-assets.i.posthog.com/static/:path*',
  },
  {
    source: '/ingest/:path*',
    destination: 'https://eu.i.posthog.com/:path*',
  },
  {
    source: '/ingest/decide',
    destination: 'https://eu.i.posthog.com/decide',
  },
] satisfies Rewrite[]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  transpilePackages: ['@boilerplate/ui', '@boilerplate/utils'],
  experimental: {
    optimizePackageImports: ['@boilerplate/ui', '@boilerplate/utils'],
  },
  async rewrites() {
    return [...postHogRewrite]
  },
  skipTrailingSlashRedirect: true,
}

// Initialize the Next-Intl plugin
let configWithPlugins = createNextIntlPlugin({
  requestConfig: './src/lib/i18n/request.ts',
})(nextConfig)

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins)
}

export default configWithPlugins
