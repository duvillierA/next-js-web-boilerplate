import type { StorybookConfig } from '@storybook/nextjs-vite'
import type { InlineConfig } from 'vite'

import path from 'path'

const getAbsolutePath = (packageName: string) =>
  path.dirname(require.resolve(path.join(packageName, 'package.json')))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  docs: {
    defaultName: 'Doc',
    docsMode: false,
  },
  framework: {
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  staticDirs: ['../src/public'],
  viteFinal: async (config) => {
    config.ssr = {
      ...(config.ssr ?? {}),
      noExternal: [
        /^@radix-ui\/.*/,
        '@boilerplate/ui',
        'sonner',
      ],
    }

    const stripUseClientDirective = {
      name: 'strip-use-client-directive',
      enforce: 'pre',
      transform(code: string, id: string) {
        const isScript = id.endsWith('.tsx') || id.endsWith('.jsx') || id.endsWith('.mjs') || id.endsWith('.js')
        if (!isScript) return null
        const pattern = /^\s*(["'])use client\1;?\s*/
        if (pattern.test(code)) {
          const out = code.replace(pattern, '')
          return { code: out, map: null }
        }
        return null
      },
    } satisfies Required<InlineConfig>['plugins'][number]

    config.plugins = [...(config.plugins ?? []), stripUseClientDirective]
    return config
  },
}

export default config
