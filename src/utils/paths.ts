export function getAssetPath(path: string): string {
  // No base path needed for Vercel deployment
  return path.startsWith('/') ? path : `/${path}`;
} 