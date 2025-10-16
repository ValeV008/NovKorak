const path = require("path");

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { i18n } = require("./next-i18next.config");

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  output: "standalone",
  images: {
    // Enable optimization for images from the public directory
    loader: "default",
    domains: [], // Don't need to specify external domains since you use local images
    path: "/_next/image", // This ensures Next.js uses the right path for image optimization
    unoptimized: false, // Default to enable optimization
  },
  i18n: {
    ...i18n,
    localeDetection: false, // Disable checking Accept-Language header
  },
  localesPath: path.resolve("./public/locales"),
});
