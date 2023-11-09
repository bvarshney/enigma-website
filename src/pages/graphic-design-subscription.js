import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import styles from "../styles/designLanding.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import Header from "@/components/LandingPage/Design/Header";
import Hero from "@/components/LandingPage/Design/Hero";
import Section2 from "@/components/LandingPage/Design/Section2";
import Testimonial from "@/components/LandingPage/Design/Testimonial";
import Membership from "@/components/LandingPage/Design/Membership";
import RecentWork from "@/components/LandingPage/Design/RecentWork";
import Pricing from "@/components/LandingPage/Design/Pricing";
import Faq from "@/components/LandingPage/Design/Faq";
import Footer from "@/components/LandingPage/Design/Footer";
import { NextSeo } from "next-seo";
import PageLoader from "@/components/pageLoader";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const GraphicDesginSubscription = () => {
    const [dimension, setDimension] = useState({width:0, height:0});
    const lenisRef = useRef(null);
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

// Set the scroll position to the top of the page
useEffect(() => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}, []);

useEffect(() => {
  window.scrollTo(0, 0);

  const raf = (time) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
  };
  
  const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
  }

  // Delay enabling Lenis slightly after ensuring scroll to top
  setTimeout(() => {
      lenisRef.current = new Lenis();
      window.addEventListener("resize", resize)
      requestAnimationFrame(raf);
      resize();
  }, 100);  // You may need to adjust the delay

  return () => {
      window.removeEventListener("resize", resize);
  }
}, []);

  return (
        <>

            <NextSeo
              title="Graphic Design Services | Graphic Design Subscription"
              description="Graphic Design Services | Graphic Design Subscription"
              canonical="https://weareenigma.com/graphic-design-subscription"
              openGraph={{
                url: "https://weareenigma.com/graphic-design-subscription",
                title: "Graphic Design Services | Graphic Design Subscription",
                description:
                  "Graphic Design Services | Graphic Design Subscription",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/index.png",
                    width: 1200,
                    height: 630,
                    alt: "Graphic Design Subscription",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
            />

        <Cursor isGelly={true} />

        <PageLoader text="Graphic Design Subscription" />

              <main id="design-landing" className={`${styles.mainContainer} ${isDarkMode ? styles.dark : "dark"}`}>
                
                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                <section id="home">
                  <Hero />
                </section>
                
                <Section2 />

                <div className={styles.testimonialContainer}>
                    <div className={styles.testimonial}>
                        <Testimonial />
                    </div>
                </div>

                <section id="benefit">
                  <Membership />
                </section>
                
                <section id="work">
                  <RecentWork />
                </section>
                
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