module.exports = {
    siteUrl: process.env.SITE_URL || 'https://weareenigma.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxtOptions: {
      transformRobotsTxt: async (_, robotsTxt) => {
        const withoutHost = robotsTxt.replace(
          `# Host\nHost: ${process.env.SITE_URL}\n\n`,
          "",
        );
        return withoutHost;
      },
      policies: [
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: '10'
        },
      ],
    },
    exclude: ["/thank-you","/graphic-design-subscription"],
    additionalPaths: async (config) => [
      await config.transform(config,"/blog/strategy"),
      await config.transform(config,"/blog/design"),
      await config.transform(config,"/blog/technology"),
      await config.transform(config,"/blog/marketing"),
      await config.transform(config,"/blog/consumer-psychology"),
      await config.transform(config,"/careers/junior-ui-ux-designer"),
      await config.transform(config,"/careers/seo-specialist"),
      await config.transform(config,"/careers/front-end-developer"),
      await config.transform(config,"/careers/business-development-manager"),
      await config.transform(config,"/careers/senior-account-executive"),
      await config.transform(config,"/careers/ui-ux-design-intern"),
      await config.transform(config,"/careers/frontend-development-intern"),
      await config.transform(config,"/Creds-2023.pdf"),
    ]
  };