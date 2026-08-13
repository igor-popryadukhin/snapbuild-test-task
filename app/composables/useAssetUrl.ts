/**
 * Resolves a public asset against Nuxt's configured application base URL.
 *
 * @param path Public asset path without a leading slash.
 * @returns A URL that remains valid when the site is hosted below a GitHub Pages base path.
 */
export function useAssetUrl(path: string): string {
  const baseURL = useRuntimeConfig().app.baseURL
  return `${baseURL}${path.replace(/^\//, '')}`
}
