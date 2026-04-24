import type { NextConfig } from "next";

/**
 * Sin barra final. Vacío en local o en repo `usuario.github.io`.
 * En GitHub Actions se define para sitios de proyecto.
 * Usa también `NEXT_PUBLIC_BASE_PATH` con el mismo valor para `publicAsset()` (next/image no aplica basePath solo).
 */
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    localPatterns: [
      { pathname: "/portfolio/**" },
      /** Con `basePath`, `publicAsset()` genera `/[basePath]/portfolio/...`. */
      { pathname: "/*/portfolio/**" },
    ],
  },
};

export default nextConfig;
