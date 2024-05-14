/** @type {import('next').NextConfig} */
import "dotenv/config";

const nextConfig = {
  env: {
    DB_LOCAL_URI: process.env.DB_LOCAL_URI,
    DB_URI: "",
  },
};

export default nextConfig;
