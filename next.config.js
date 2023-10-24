/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/admin/login",
        permanent: false,
      },
    ];
  },
  images: {
    domains: [
      "pharmacareonline.qa",
      "www.farmaciasilveira.com",
      "assets.stickpng.com",
      "santaluciadrogaria.vtexassets.com",
    ], // Add other domains if necessary
  },
};
