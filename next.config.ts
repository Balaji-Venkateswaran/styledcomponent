// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // enables SWC transform for styled-components
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
