// import { getPathname, navigationPathnames, type NavigationPathname } from '@/lib/i18n/navigation'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import type { Rewrite } from 'next/dist/lib/load-custom-routes'

const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/lib/i18n/request.ts',
})

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
  transpilePackages: ['@boilerplate/ui'],
  experimental: {
    optimizePackageImports: ['@boilerplate/ui'],
  },
  async rewrites() {
    return [...postHogRewrite]
  },
  skipTrailingSlashRedirect: true,
}

export default withNextIntl(nextConfig)
