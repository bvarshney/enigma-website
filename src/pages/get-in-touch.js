import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "react-creative-cursor/dist/styles.css";
import { Cursor } from "../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ContactAero from "@/components/Contact/ContactAerosol";
import MarqueeCata from "@/components/MarqueeCata";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ContactForm from "@/components/Contact/contactForm";
import Modal from "../components/PopupForm/formModal";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function contact() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#contact-anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Reveal TimeLine Contact left Elements On Scroll Stagger
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: ".add__section",
        pin: true,
        start: "top center",
        scrub: true,
      });

      tl.to(".add__content", {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  // Contact Form Pin

  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImageBlock = document.getElementById("main-contact-container");
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 30%",
        endTrigger: brandImageNotPin,
        end: "bottom 92%",
        // the nect line (with the arrow function) is 'a functional value' () =>
        // end: () => `${brandImageNotPin.offsetHeight - brandImagePin.offsetHeight}px 20%`,
        // this line ensures the functional value gets recalculated on resize
        invalidateOnRefresh: true,
        pin: brandImagePin,
        // pinSpacing: true,
        markers: false,
      });
    });
    return () => ctx.revert();
  });

  if (globalThis.innerWidth > 1024) {
  // Ploygon
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".img", {
        transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        duration: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".img-container",
          start: "top 75%",
          end: "center center",
          // pin: true,
          scrub: .5,

          // markers: true,
        },
      });
    });
    return () => ctx.revert();
  });
}

  return (
    <>
      <NextSeo
        title="We Elevate Your Digital Presence | Contact Enigma"
        description="Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence."
        openGraph={{
          url: "https://weareenigma.com/get-in-touch/",
          title:
            "We Elevate Your Digital Presence | Contact Enigma",
          description:
            "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
            images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/contact.png",
                    width: 1200,
                    height: 630,
                    alt: "Contact Us Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
        }}
      
        additionalMetaTags={[
              {
                name: "twitter:title",
                content: "We Elevate Your Digital Presence | Contact Enigma"
              },
              {
                name: "twitter:description",
                content: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence."
              },
              {
                name: "twitter:image",
                content: "https://weareenigma.com/assets/featured-images/contact.png"
              },
            ]}
          />

        <Head>
            <link rel="canonical" href="https://weareenigma.com/get-in-touch/" />
            <link rel="alternate" href="https://weareenigma.com/get-in-touch/" hreflang="x-default" />
            <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "mainEntityOfPage":{
                    "@type": "WebPage",
                    "@id": "https://weareenigma.com/get-in-touch/"
                    },
                    "name": "Contact",
                    "description": "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
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

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Hi, There! Let's Talk!?" />

      <>
        <main>
            <Header />

{/* PopUp Modal Button */}
  <Modal />
{/* End */}

            <section className="contact-hero">
              <div
                className="contact-hero-content"
                data-cursor-size="10px"
                data-cursor-text=""
              >
                <div className="first-box-contact">
                  <div
                    className="lets"
                    id="contact-anim"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/new-gif/16.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                  >
                    let's <span> </span>
                  </div>
                  <div
                    className="work"
                    id="contact-anim"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/5.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                  >
                    Work
                  </div>
                  <div className="contact-para" id="contact-anim">
                    Old ways won't open new doors. If you have an interesting idea, <span className="bold-600">Let's Build the Future Together!</span>
                  </div>
                </div>
                <div className="second-box-contact">
                  <div
                    className="together"
                    id="contact-anim"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/17.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                  >
                    Together
                  </div>

                  <div
                    className="contact-para contact-mobile-para-hero"
                    id="contact-anim"
                    data-cursor-color="#95bf32"
                    data-cursor-size="100px"
                    data-cursor-exclusion
                  >
                    Old ways won't  new doors. If you have an interesting idea, <span className="bold-600">Let's Build the Future Together!</span>
                  </div>
                </div>
              </div>
            </section>

            {/* ====================== Pinned Image =========================== */}
            {/* clip-path-img */}
            <div className="img-container">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                <div className="img">
                  <video
                      src="/assets/contact/contact-bg-video.webm"
                      autoPlay
                      muted
                      loop
                    ></video>
                </div>
              </motion.div>
            </div>
            {/* ====================== Pinned Image  END =========================== */}
          <section className="m-150">
            <MarqueeCata />
          </section>
          
            <div className="scnd__container" id="main-contact-container">
              <div className="add__section" id="left-section">
                <div className="add__content">
                  <h1>Email</h1>
                  <a href="mailto:hi@weareenigma.com">
                    <span>hi@weareenigma.com</span>
                  </a>
                </div>
                <div className="add__content pt__20">
                  <h1>office</h1>
                  <a href="#" className="address">
                    <span>
                      Suite 301, Grandslam I-Thum,
                      <br /> Sector - 62, Noida,
                      <br /> Uttar Pradesh, IN 201301
                    </span>
                  </a>
                </div>
                <div className="add__content pt__20">
                  <h1>Phone</h1>
                  <a href="tel:+91 8178 026 136" className="address">
                    <span>+91 8178 026 136</span>
                  </a>
                </div>
              </div>
              <div className="form__section" id="right-section">
                <div
                  className="contact__text"
                  data-cursor-exclusion
                  data-cursor-size="80px"
                >
                  <h1>tell Us About Your Project.</h1>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* ======================== Home Aero ====================== */}
            <div className="p-150" data-cursor-color="#000" data-cursor-size="0px">
              <ContactAero />
            </div>
            {/* ======================== Home Aero END ====================== */}

            {/* ======================== Footer ====================== */}
            <div className="footer-desktop">
              <Footer />
            </div>
            <div className="mobile-footer">
              <FooterMobile />
            </div>
            {/* ======================== Footer END ====================== */}
        </main>
      </>
    </>
  );
}
