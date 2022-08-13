const path = require('path');
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  images: {
    domains: ['api.workspace.sobrus.com', 'api.workspace.sobrus.ovh'],
  },
  path: '/_next/image',
  loader: 'default',
};
