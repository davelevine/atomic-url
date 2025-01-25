export default defineAppConfig({
  title: 'Atomic-URL',
  email: 'atomic-url@encoded.org',
  github: 'https://github.com/davelevine/sink',
  blog: 'https://dave.levine.io/blog',
  description: 'A URL shortener proof of concept run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
