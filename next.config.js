/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "cdn.jsdelivr.net",
      "docs.google.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/exit",
        destination: "https://forms.gle/tYXkVh7g23jvjkHc6",
        permanent: false,
        basePath: false,
      },
      {
        source: "/people",
        destination: "https://forms.gle/YKcsE7fdWkvyGpzz8",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
