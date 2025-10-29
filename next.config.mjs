/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
  },
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  reactCompiler: true,
};

export default nextConfig;