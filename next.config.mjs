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
};

export default nextConfig;
