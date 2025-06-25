// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'A Global, Award-Winning UI UX & Website Design Agency | Enigma Digital',
    description: "Enigma Digital, a global website design and UI UX design Agency, delivers cutting-edge website design services across the USA, Canada, the Middle East, and India.",
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
        },
        {
          name: 'google-site-verification',
          content: "aqmk50ZtfefKhtzh9Fr2VOpKByQGeMyL60rwwgl-r7A",
        }
    ],
    additionalLinkTags: [
        {
          rel: 'icon',
          type: "image/x-icon",
          href: '/favicon.png',
        },
        {
          rel: 'preload',
          href: '/assets/fonts/clash-display/ClashDisplay-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/assets/fonts/clash-display/ClashDisplay-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/assets/fonts/ageo/Ageo-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        },
        {
          rel: 'alternate',
          type: 'application/rss+xml',
          title: 'Enigma Digital Feed',
          href: 'https://weareenigma.com/feed.xml'
        },
      ],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        images: [
            {
                url: 'https://weareenigma.com/assets/seo/index.png',
                width: 1200,
                height: 630,
                alt: "Enigma Og Image",
                type: "image/png",
            },
        ],
        url: 'https://weareenigma.com/',
        siteName: 'Enigma Digital Agency',
    },
    twitter: {
        site: 'Enigma Digital Agency',
        cardType: 'summary_large_image',
    },
};