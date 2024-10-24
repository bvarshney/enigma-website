import React, { useEffect, useState } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Link from "next/link";
import { NextSeo } from "next-seo";
import gsap from "gsap";
import Head from "next/head";

const ThankYou = () => {
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const tl = gsap.timeline();
    const anim = document.querySelectorAll("#anim");

    tl.fromTo("#h1",{
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }).fromTo(
        anim,
        {
          y: 100,
          opacity: 0,
        },
        {
          delay: -0.7,
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.2
        }
      );
    return () => tl.kill();
  }, []);

  useEffect(() => {

     const countdownInterval = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(countdownInterval);
        window.location.href = "/";
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  return (
    <div>

    <NextSeo
        title="Thank You! We'll Be in Touch Soon | Enigma"
        description="Thanks for getting in touch! We'll contact you shortly to discuss how we can help your business grow and succeed online."
        openGraph={{
          url: "https://weareenigma.com/thank-you",
          title: "Thank You! We'll Be in Touch Soon | Enigma",
          description:
            "Thanks for getting in touch! We'll contact you shortly to discuss how we can help your business grow and succeed online.",
            images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/thankyou.png",
                    width: 1200,
                    height: 630,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
          ],
          siteName: "Enigma Digital Website",
        }}

        additionalMetaTags={[
            {
              name: "twitter:title",
              content: "Thank You! We'll Be in Touch Soon | Enigma"
            },
            {
              name: "twitter:description",
              content: "Thanks for getting in touch! We'll contact you shortly to discuss how we can help your business grow and succeed online."
            },
            {
              name: "twitter:image",
              content: "https://weareenigma.com/assets/featured-images/thankyou.png"
            },
          ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/thank-you" />
        <link rel="alternate" href="https://weareenigma.com/thank-you" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/thank-you"
                },
                "name": "Thank You",
                "description": "Thanks for getting in touch! We'll contact you shortly to discuss how we can help your business grow and succeed online.",
                "datePublished": "2023-01-01T12:00:00+05:30",
                "dateModified": "2023-11-17T12:00:00+05:30",
                "publisher": {
                  "@type": "Organization",
                  "name": "Enigma Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                  }
                }
              }
            ),
          }}
        />
      </Head>

      <Cursor isGelly={true} />

      <main>
        <div className="message-sent-page">        
            <h1 id="h1"
                data-cursor-magnetic
                data-cursor-size="300px"
                data-cursor-exclusion>
                Hoooray <span className="color-primary">!</span>
            </h1>
            <p id="anim">
              It is a pleasure to meet ya! Give us a day and we will schedule our first date.
            </p>
          
          <div className='mt-10' id="anim">
            <Link href="/">
              <button className='btn_CTA'>
                  <span className="btn_CTA-ripple">
                  <span></span>
                  </span>
                  <span className='btn_CTA-title'>
                  <span data-text='Go Home'>Go Home</span>
                  </span>
              </button>
            </Link>
          </div>

          <div className="mt-10" id="anim">
            <p>Redirecting to the homepage in {countdown} seconds...</p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default ThankYou;
