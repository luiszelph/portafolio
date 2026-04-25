/**
 * Rutas bajo `public/` para `next/image` cuando existe `basePath`
 * (p. ej. GitHub Pages: `https://usuario.github.io/nombre-repo/`).
 * Debe coincidir con `NEXT_PUBLIC_BASE_PATH` y `BASE_PATH` en el build.
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images
 */
export function publicAsset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base) return normalized;
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
    return normalized;
  }
  return `${prefix}${normalized}`;
}
