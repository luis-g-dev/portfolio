/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Ensure output is set to export for static sites
  images: {
    unoptimized: true, // Required for GitHub Pages static export
  },
};
export default nextConfig; // <--- Use ES module syntax
