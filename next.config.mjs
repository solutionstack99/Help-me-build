/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017",
    DB_URI: "",
  },
};

export default nextConfig;
