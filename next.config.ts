import type { NextConfig } from "next";

/**
 * Sin barra final. Vacío en local o en repo `usuario.github.io`.
 * En GitHub Pages se define para sitios de proyecto.
 * Usa también `NEXT_PUBLIC_BASE_PATH` con el mismo valor para `publicAsset()` (next/image no aplica basePath solo).
 */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const productionFallbackBasePath = isGitHubPages ? "/portafolio" : "";

const basePath =
  process.env.BASE_PATH?.trim() ||
  process.env.NEXT_PUBLIC_BASE_PATH?.trim() ||
  productionFallbackBasePath ||
  "";

const nextConfig: NextConfig = {
  ...(isGitHubPages ? { output: "export" as const } : {}),

  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
