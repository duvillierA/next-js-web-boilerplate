import type { Config } from 'tailwindcss'

const externalPackages = ['ui', 'templates']

const externalPackagesPaths = externalPackages.map(
  (pkg) => `../../packages/${pkg}/src/**/*.{js,ts,jsx,tsx,mdx}`,
)

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', ...externalPackagesPaths],
  safelist: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
}

export default config
