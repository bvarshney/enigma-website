module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weareenigma.com',
    generateRobotsTxt: true, // (optional)
    exclude: ['/components/*', '/api/*'],
    additionalPaths: async (config) => [
      await config.transform(config, "./public/Creds-2022.pdf", "./public/Creds-2023.pdf"),
    ]
  };