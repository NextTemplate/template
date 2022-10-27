/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

// 外部のwebサイトから画像を参照する場合、ドメインを登録しておく必要がある。
module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],
  },
}
