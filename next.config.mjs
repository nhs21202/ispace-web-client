/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minio.hisoft.com.vn",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
