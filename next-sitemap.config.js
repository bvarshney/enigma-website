module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weareenigma.com',
    generateRobotsTxt: true, // (optional)
    additionalPaths: async (config) => [
      await config.transform(config, "/Creds-2022.pdf", "/Creds-2023.pdf"),
    ]
  };