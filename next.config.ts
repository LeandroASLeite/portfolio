import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  output: "export",
  distDir: "dist",

  experimental: {
    turbo: {},
  },

  images: {
    unoptimized: true,
  },
};

// const withNextIntl = createNextIntlPlugin();
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
export default withNextIntl(nextConfig);