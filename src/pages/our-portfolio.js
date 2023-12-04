import React, { useEffect, useState } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import { motion, AnimatePresence } from "framer-motion";
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
import Modal from "@/components/PopupForm/formModal";
import PageLoader from '@/components/pageLoader';
import Head from "next/head";

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

  return (
    <>

    <NextSeo
      title="Enigma's Portfolio: Showcasing Digital Mastery"
      description="Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results."
      openGraph={{
        url: "https://weareenigma.com/our-portfolio",
        title: "Enigma's Portfolio: Showcasing Digital Mastery",
        description:
          "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
          images: [
              {
                url: "https://weareenigma.com/assets/featured-images/work.png",
                width: 1200,
                height: 630,
                alt: "Our Portfolio Feature Image",
                type: "image/png",
              },
            ],
          siteName: "Enigma Digital",
      }}
    
      additionalMetaTags={[
                    {
                      name: "twitter:title",
                      content: "Enigma's Portfolio: Showcasing Digital Mastery"
                    },
                    {
                      name: "twitter:description",
                      content: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results."
                    },
                    {
                      name: "twitter:image",
                      content: "https://weareenigma.com/assets/featured-images/work.png"
                    },
                  ]}
                />

          <Head>
            <link rel="canonical" href="https://weareenigma.com/our-portfolio" />
            <link rel="alternate" href="https://weareenigma.com/our-portfolio" hreflang="x-default" />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "mainEntityOfPage":{
                    "@type": "WebPage",
                    "@id": "https://weareenigma.com/our-portfolio"
                    },
                    "name": "Works",
                    "description": "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
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

      <SmoothScroll />

      <PageLoader text="Our Meticulously Crafted Projects" />

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
                    controls
                    autoPlay
                    layoutId="main-image-1"
                    data-cursor-text="Play/Pause"
                    data-cursor-size="120px"
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
