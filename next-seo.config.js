// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Enigma | Digital Product Design, UI/UX & Neuromarketing Agency',
    description: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
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