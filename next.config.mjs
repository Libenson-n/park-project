/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.mtlblog.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "farm5.staticflickr.com",
      },
      {
        protocol: "https",
        hostname: "img.lapresse.ca",
      },
      {
        protocol: "https",
        hostname: "mto.media.tourinsoft.eu",
      },
    ],
  },
};

export default nextConfig;
