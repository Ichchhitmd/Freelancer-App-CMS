/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;