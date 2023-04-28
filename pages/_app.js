import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PKJE9LVB35"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7C8S5767C3', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
