import type { StorybookConfig } from '@storybook/nextjs-vite'

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
    // Replace your-framework with the same one you've imported above.
    name: getAbsolutePath('@storybook/nextjs-vite'),
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    return config
  },
}

export default config
