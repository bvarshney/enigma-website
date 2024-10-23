import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        additionalMetaTags={[{
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0'
        },
        ]}

        additionalLinkTags={[{
          rel: 'icon',
          href: '/fav-icon.png',
        }, {
          rel: 'preload',
          href: '/assets/fonts/clash-display/ClashDisplay-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        }, {
          rel: 'preload',
          href: '/assets/fonts/clash-display/ClashDisplay-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        }
        ]}

        openGraph={{
          type: 'website',
          locale: 'en_US',
        }}

        twitter={{
          site: '_EnigmaDigital',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Enigma Digital",
                "url": "https://weareenigma.com/",
                "logo": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg",
                "sameAs": [
                  "https://www.instagram.com/enigmadigital/",
                  "https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing",
                  "https://www.facebook.com/in.enigmadigital",
                  "https://twitter.com/_EnigmaDigital"
                ]
              },
            ),
          }}
        />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "http://schema.org",
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "SiteNavigationElement",
                    "position": 1,
                    "name": "About",
                    "description": "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
                    "url": "https://weareenigma.com/who-we-are"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 2,
                    "name": "Services",
                    "description": "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
                    "url": "https://weareenigma.com/services"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 3,
                    "name": "Works",
                    "description": "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
                    "url": "https://weareenigma.com/our-portfolio"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 4,
                    "name": "Insights",
                    "description": "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                    "url": "https://weareenigma.com/blog"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 5,
                    "name": "Careers",
                    "description": "Experience top-tier UI/UX design, front-end development, and organic marketing jobs with Enigma Digital. Find The Right Jobs",
                    "url": "https://weareenigma.com/careers"
                  },
                  {
                    "@type": "SiteNavigationElement",
                    "position": 6,
                    "name": "Contact",
                    "description": "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
                    "url": "https://weareenigma.com/get-in-touch"
                  }
                ]
              }
            ),
          }}
        />
      </Head>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
      <Script
        strategy="worker"
        id="ms-clarity"
      >
        {`
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "josmn10ai7");
          `}
      </Script>

      {/* <Script
        async
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-PKJE9LVB35"
      /> */}

      <GoogleTagManager gtmId="GTM-PV4GH9JJ" />

      {/* <Script
        strategy="worker"
        id="google-analytics"
      >
        {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7C8S5767C3', {
              page_path: window.location.pathname,
            });
          `}
      </Script> */}
    </>
  );
}
