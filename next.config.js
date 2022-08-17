const path = require('path');
const isProd = process.env.NEXT_PUBLIC_APP_ENV === 'production';
module.exports = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  images: {
    domains: isProd ? ['api.sobrus.com'] : ['api.sobrus.ovh'],
  },
  path: '/_next/image',
  loader: 'default',
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};
