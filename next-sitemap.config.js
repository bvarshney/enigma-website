module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weareenigma.com',
    generateRobotsTxt: true,
    additionalPaths: async (config) => [
      await config.transform(config,"/Creds-2023.pdf"),
    ]
  };
