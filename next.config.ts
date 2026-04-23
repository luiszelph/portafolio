import type { NextConfig } from "next";

/** Sin barra final. Vacío en local o en repo `usuario.github.io`. En GitHub Actions se define para sitios de proyecto. */
const basePath = process.env.BASE_PATH?.trim() || "";

const nextConfig: NextConfig = {
  output: "export",
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    localPatterns: [
      {
        pathname: "/portfolio/**",
      },
    ],
  },
};

export default nextConfig;
