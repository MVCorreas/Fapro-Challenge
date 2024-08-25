/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api-fapro-itw.fapro.dev/:path*",
      },
    ];
  },

  webpack: (config, { isServer }) => {
    config.cache = false;

    return config;
  },
};

export default nextConfig;
