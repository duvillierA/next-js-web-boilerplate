import type { Config } from 'tailwindcss'

const externalPackages = ['ui']

const externalPackagesPaths = externalPackages.map(
  (pkg) => `../../packages/${pkg}/src/**/*.{js,ts,jsx,tsx,mdx}`,
)

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', ...externalPackagesPaths],
}

export default config
