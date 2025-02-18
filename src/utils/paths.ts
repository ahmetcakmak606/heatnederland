export function getAssetPath(path: string): string {
  const base = '/heatnederland'; // Match your astro.config.mjs base
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
} 