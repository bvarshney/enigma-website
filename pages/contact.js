import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import "react-creative-cursor/dist/styles.css";
import { Cursor } from "../cursor/index";
import SmoothScroll from "./components/utils/SmoothScroll";
import { NextSeo } from "next-seo";

import { motion } from "framer-motion";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import ContactAero from "./components/Contact/ContactAerosol";
import MarqueeCata from "./components/MarqueeCata";
import FooterMobile from "./components/Mobile/FooterMobile";
import ContactForm from "./components/Contact/contactForm";

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

  // Page Transition
  useEffect(() => {
    let ctx = gsap.context(() => {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0, 502S175, 272, 500, 272s500, 230, 500, 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        skewY: 10,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".loader-wrap", {
        y: -1500,
      });
      tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
      });
    });
    return () => ctx.revert();
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

  // Ploygon
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".img-container", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".img-container",
          start: "top 70%",
          end: "center center",
          // pin: true,
          scrub: true,
          markers: false,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <NextSeo
        title="Contact Enigma Digital | UI/UX, Development & Marketing Experts"
        description="Get in touch with Enigma Digital's team of UI/UX design, front-end development, and organic marketing specialists to elevate your business and achieve success online."
        canonical="https://www.weareenigma.com/contact"
        openGraph={{
          url: "https://www.weareenigma.com/contact",
          title:
            "Contact Enigma Digital | UI/UX, Development & Marketing Experts",
          description:
            "Get in touch with Enigma Digital's team of UI/UX design, front-end development, and organic marketing specialists to elevate your business and achieve success online.",
          images: [
            {
              url: "",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "" },
          ],
          siteName: "https://www.weareenigma.com/contact",
        }}
      />

      <Head>
        <title>
          Contact Enigma Digital | UI/UX, Development & Marketing Experts
        </title>
        <meta
          name="description"
          content="Get in touch with Enigma Digital's team of UI/UX design, front-end development, and organic marketing specialists to elevate your business and achieve success online."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <Cursor isGelly={true} />

      {/* <ul className="transition" style={{ zIndex: "255" }}>
        <li></li>
        <li />
        <li />
        <li />
      </ul> */}

      <div className="loader-wrap" id="loader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>
              Hi! <span className="loader-font">There</span>
            </h1>
          </span>
        </div>
      </div>

      <>
        <main className="content is-loading">
          <div className="section">
            <SmoothScroll />
            <Header />
            <div className="contact-hero">
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
                    data-cursor-background-image="/assets/gif/7.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                  >
                    let's <span> </span>
                  </div>
                  <div
                    className="work"
                    id="contact-anim"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/new-gif/16.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                  >
                    Work
                  </div>
                  <div className="contact-para" id="contact-anim">
                    OLD WAYS WON'T OPEN NEW DOORS. IF YOU HAVE AN INTERESTING
                    IDEA, LET'S BUILD THE FUTURE TOGETHER!
                  </div>
                </div>
                <div className="second-box-contact">
                  <div
                    className="together"
                    id="contact-anim"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/9.gif"
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
                    OLD WAYS WON'T OPEN NEW DOORS. IF YOU HAVE AN INTERESTING
                    IDEA, LET'S BUILD THE FUTURE TOGETHER!
                  </div>
                </div>
              </div>
            </div>

            {/* ====================== Pinned Image =========================== */}
            <div class="img-container clip-path-img">
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <div class="img"></div>
              </motion.div>
            </div>
            {/* ====================== Pinned Image  END =========================== */}

            <div className="space-large desktop"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            <div className="ipad mobile"></div>
            <div className="ipad mobile"></div>

            <MarqueeCata />

            <div className="ipad mobile"></div>
            <div className="ipad mobile"></div>
            <div className="ipad mobile"></div>

            <div className="space-large desktop"></div>
            <div className="space-large mobile"></div>

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
            <div className="space-large desktop"></div>
            <div className="space-large desktop"></div>
            <div className="space-large desktop"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            <div className="space-large mobile"></div>
            {/* ======================== Home Aero ====================== */}
            <div data-cursor-color="#000" data-cursor-size="0px">
              <ContactAero />
            </div>
            {/* ======================== Home Aero END ====================== */}
            {/* ======================== Marquee ====================== */}
            <div>{/* <Marquee /> */}</div>
            <div className="space-large desktop"></div>
            {/* ======================== Marquee END ====================== */}
            {/* ======================== Footer ====================== */}
            <div className="footer-desktop">
              <Footer />
            </div>
            <div className="mobile-footer">
              <FooterMobile />
            </div>
            {/* ======================== Footer END ====================== */}
          </div>
        </main>
      </>
    </>
  );
}
