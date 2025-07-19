/**
 * Base PostCSS configuration that can be used by apps and packages
 * @param {Object} options - Configuration options
 * @param {boolean} options.useObjectSyntax - Whether to use object syntax for plugins
 * @returns {Object} PostCSS configuration
 */
export function createPostCSSConfig({ useObjectSyntax = false } = {}) {
  if (useObjectSyntax) {
    return {
      plugins: {
        '@tailwindcss/postcss': {},
      },
    }
  }

  return {
    plugins: ['@tailwindcss/postcss'],
  }
}
