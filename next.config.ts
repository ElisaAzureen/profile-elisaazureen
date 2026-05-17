const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // Disable in dev mode
});

module.exports = withPWA({
  reactStrictMode: true,
  turbopack: {},
  // Your other existing config options go here
});