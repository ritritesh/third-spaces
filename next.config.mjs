/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'third-spaces';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
    ? process.env.NEXT_PUBLIC_BASE_PATH 
    : (isProd ? `/${repoName}` : ''),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

