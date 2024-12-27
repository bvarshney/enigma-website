import React, { useState, useEffect } from "react";
import styles from "@/components/LandingPage/Design/designLanding.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

import Header from "@/components/LandingPage/Design/Header";
import Hero from "@/components/LandingPage/Design/Hero";
import Section2 from "@/components/LandingPage/Design/Section2";
// import Testimonial from "@/components/LandingPage/Design/Testimonial";
import Membership from "@/components/LandingPage/Design/Membership";
// import RecentWork from "@/components/LandingPage/Design/RecentWork";
import Pricing from "@/components/LandingPage/Design/Pricing";
import Faq from "@/components/LandingPage/Design/Faq";
import Footer from "@/components/LandingPage/Design/Footer";
import { NextSeo } from "next-seo";
import Head from "next/head";
import PageLoader from "@/components/PageLoader";
import { Cursor } from "@/components/Cursor";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const GraphicDesginSubscription = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode status from localStorage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Save dark mode status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode);
    document.body.classList.toggle(styles.dark, isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <>

      <NextSeo
        title="Graphic Design Services | Graphic Design Subscription"
        description="Graphic Design Services | Enigma"
        openGraph={{
          url: "https://weareenigma.com/graphic-design-subscription",
          title: "Graphic Design Services | Graphic Design Subscription",
          description:
            "Graphic Design Services | Enigma",
          images: [
            {
              url: "https://weareenigma.com/assets/featured-images/graphic-design-subscription.png",
              width: 1200,
              height: 630,
              alt: "Graphic Design Subscription",
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}

        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "Graphic Design Services | Graphic Design Subscription"
          },
          {
            name: "twitter:description",
            content: "Graphic Design Services | Enigma"
          },
          {
            name: "twitter:image",
            content: "https://weareenigma.com/assets/featured-images/graphic-design-subscription.png"
          },
        ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/graphic-design-subscription" />
        <link rel="alternate" href="https://weareenigma.com/graphic-design-subscription" hreflang="en-US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/graphic-design-subscription"
                },
                "name": "Graphic Design Subscription",
                "description": "Graphic Design Services | Enigma",
                "datePublished": "2023-10-01T12:00:00+05:30",
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

      <Cursor />
      <PageLoader text="Graphic Design Subscription" />

      <main id="design-landing" className={`${styles.mainContainer} ${isDarkMode ? styles.dark : "dark"}`}>

        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <section id="home">
          <Hero />
        </section>

        <Section2 />

        {/* <div className={styles.testimonialContainer}>
          <div className={styles.testimonial}>
            <Testimonial />
          </div>
        </div> */}

        <section id="benefit">
          <Membership />
        </section>

        {/* <section id="work">
          <RecentWork />
        </section> */}

        <section id="pricing">
          <Pricing />
        </section>

        <section id="faq">
          <Faq />
        </section>

        <Footer />
      </main>
    </>
  )
};

export default GraphicDesginSubscription;