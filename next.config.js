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
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSfmQ-yCuV8epQO8IkHSMSU2FKpKs4sTBNIc_OeWHfM-iOUWeg/viewform",
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
