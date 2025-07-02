import '@/styles/globals.css';
import '@/styles/cursor.css';
import '@/styles/fonts.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
      <SpeedInsights />
      <Analytics />
      <Script
        id="ms-clarity"
      >
        {`
            (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "josmn10ai7");
          `}
      </Script>
      <GoogleTagManager gtmId="GTM-PV4GH9JJ" />
    </>
  );
}
