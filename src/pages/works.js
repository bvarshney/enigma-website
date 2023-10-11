'use client'

import React, { useEffect, useState, useLayoutEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { NextSeo } from "next-seo";

import Banner from "@/components/studio/Banner";
import Loader from "@/components/studio/Loader";
import StudioAero from "@/components/studio/StudioAero";
import WorkProject from "@/components/ProjectsSection/WorkProject";
import Slider from "@/components/studio/Slider";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ProjectWorks from "@/components/studio/ProjectWorks";
import WorksNextBox from "@/components/NextBoxes/WorksNextBox";
import Modal from "../components/PopupForm/formModal";

export default function studio() {
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      loading
        ? document.querySelector("body").classList.add("loading")
        : document.querySelector("body").classList.remove("loading");
    },
    [loading],
    3000
  );

  // Page Transitions
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
      title="Portfolio | UI/UX Agency, Web Designing, Branding"
      description="Portfolio of our exclusive services, here is a full showcase of our potential of our pleathora of services that we offer."
      canonical="https://www.weareenigma.com/works"
      openGraph={{
        url: "https://www.weareenigma.com/works",
        title: "Portfolio | UI/UX Agency, Web Designing, Branding",
        description:
          "Portfolio of our exclusive services, here is a full showcase of our potential of our pleathora of services that we offer.",
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
        siteName: "https://www.weareenigma.com/works",
      }}
    />    

      <Head>
        <title>Portfolio | UI/UX Agency, Web Designing, Branding</title>
        <meta name="description" content="Portfolio of our exclusive services, here is a full showcase of our potential of our pleathora of services that we offer." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <Cursor isGelly={true} />

      <SmoothScroll />

      <div className="loader-wrap" id="loader" style={{ zIndex: 9999 }}>
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>Our Meticulously Crafted Projects</h1>
          </span>
        </div>
      </div>

      <div className="studio">
        <Header />

{/* PopUp Modal Button */}
<Modal />
{/* End */}

        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
            </motion.div>
          ) : (
            <>
              <div data-cursor-size="10px" data-cursor-text="">
                <Banner />
              </div>
              {!loading && (
                <div className="transition-image final">
                  <motion.video
                    transition={{
                      ease: [0.6, 0.01, -0.05, 0.9],
                      duration: 1,
                    }}
                    src={`/assets/reels/showreel.mp4`}
                    loop
                    muted
                    autoPlay
                    layoutId="main-image-1"
                    data-cursor-text="Enigma"
                    data-cursor-size="100px"
                    data-cursor-color="#000"
                    className="studio-img-hero"
                  />
                </div>
              )}

              <section className="p-150" data-cursor-color="#000" data-cursor-size="0px">
                <StudioAero />
              </section>

               {/* ======================== Projects Slide ====================== */}
            <section className="desktop-projects m-150">
              <WorkProject />
            </section>

            <section className="mobile-projects">
              <ProjectWorks/>
            </section>

      {/* ======================== Projects Slide END ====================== */}

              <div className="pt-150">
                <Slider />
              </div>

              {/* Next Page Box */}
              <div className="m-150">
                <WorksNextBox />
              </div>
              {/* Next Page Box END */}

              {/* Footer */}
              <div className="desktop-footer">
                <Footer />
              </div>

              <div className="mobile-footer">
                <FooterMobile />
              </div>
              {/* Footer END */}
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
