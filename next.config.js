const withPWA = require("next-pwa")({
  dest: "public",
})

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withPWA(nextConfig)
