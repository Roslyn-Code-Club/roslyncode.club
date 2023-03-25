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
        source: "/favorite",
        destination: "https://forms.gle/3YyQrtaoVu2vGLz19",
        permanent: false,
        basePath: false,
      },
      {
        source: "/unity",
        destination:
          "https://drive.google.com/file/d/19wZDA2g4T1Q8qalH4fxSjTADhT74v_pK/view?usp=sharing",
        permanent: false,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
