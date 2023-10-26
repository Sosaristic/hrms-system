/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT,
  },
};

module.exports = nextConfig;
