/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
		domains: ['cdn.sanity.io','cdn.sanity.io']
	}
}

module.exports = nextConfig
