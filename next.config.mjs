/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — produces an `out/` folder that drops onto
  // any shared host (Namecheap cPanel, FTP, S3, etc.).
  // All your routes already use `generateStaticParams`, so every page
  // is pre-rendered. No Node.js server needed.
  output: "export",

  // Each route becomes /route/index.html → behaves correctly on
  // Apache/Nginx without rewrite rules.
  trailingSlash: true,

  // Required when using `output: 'export'` — disables next/image
  // optimization API (we use plain <img> tags anyway).
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
