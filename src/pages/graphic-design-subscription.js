import React, { useState, useEffect } from "react";
import { useRef } from "react";
import Lenis from '@studio-freight/lenis';
import styles from "../styles/designLanding.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Head from "next/head";

import Header from "../components/LandingPage/Design/Header";
import Hero from "../components/LandingPage/Design/Hero";
import Section2 from "../components/LandingPage/Design/Section2";
import Testimonial from "../components/LandingPage/Design/Testimonial";
import Membership from "../components/LandingPage/Design/Membership";
import RecentWork from "../components/LandingPage/Design/RecentWork";
import Pricing from "../components/LandingPage/Design/Pricing";
import Faq from "../components/LandingPage/Design/Faq";
import Footer from "../components/LandingPage/Design/Footer";
import { NextSeo } from "next-seo";

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

// Loader Transitions
  useEffect(() => {
    const loaderBars = document.querySelectorAll("#loaderbars");
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        skewY: 10,
        duration: 1,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 1,
      }).to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: -0.5,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
        <>

            <NextSeo
              title="Graphic Design Services | Graphic Design Subscription"
              description="Graphic Design Services | Graphic Design Subscription"
              canonical="https://www.weareenigma.com/graphic-design-subscription"
              openGraph={{
                url: "https://www.weareenigma.com/graphic-design-subscription",
                title: "Graphic Design Services | Graphic Design Subscription",
                description:
                  "Graphic Design Services | Graphic Design Subscription",
                  images: [
                  {
                    url: "https://i.ibb.co/k0NMQw9/home.png",
                    width: 400,
                    height: 600,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                  { url: "https://i.ibb.co/k0NMQw9/home.png" },
                ],
                siteName: "https://www.weareenigma.com/graphic-design-subscription",
              }}
            />

        <Head>
          <title>
           Graphic Design Services | Graphic Design Subscription
          </title>
          <meta
            name="description"
            content="Graphic Design Services | Graphic Design Subscription"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=5.0">          
          </meta>
          <link rel="icon" href="/fav-icon.png" />
        </Head>

{/* Loader */}
        <div className={`loader-wrap ${styles.loader}`} id="loader" style={{ zIndex: 999 }}>
          <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>
          <div className="loader-wrap-heading">
            <span>
              <h1>Design Subscription</h1>
            </span>
          </div>
        </div>

        <Cursor isGelly={true} />
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