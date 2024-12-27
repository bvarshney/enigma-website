import "@/styles/fonts.css";
import "@/styles/globals.css";
import "@/styles/cursor.css";
import { ReactLenis } from "lenis/react";
import { DefaultSeo } from "next-seo";
import { MediaContextProvider } from "@/lib/media";
import { ImageObjectJsonLd, NavigationListJsonLd, OrganizationJsonLd, WebsiteJsonLd } from "@/lib/json-ld";
import nextSeoConfig from "../../next-seo.config";
import { GoogleTagManager } from '@next/third-parties/google';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {

  return (
    <>
      <DefaultSeo {...nextSeoConfig} />

      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <NavigationListJsonLd />
      <ImageObjectJsonLd />

      <ReactLenis root options={{ lerp: 0.05 }}>
        <MediaContextProvider>
          <Component {...pageProps} />
        </MediaContextProvider>
      </ReactLenis>

      <GoogleTagManager gtmId="GTM-PV4GH9JJ" />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
