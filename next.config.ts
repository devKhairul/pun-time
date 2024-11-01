import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DEEPL_API_KEY: process.env.DEEPL_API_KEY,
  },
};

export default nextConfig;
