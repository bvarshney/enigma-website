import React, { useEffect } from "react";
import gsap from "gsap";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { NextSeo } from "next-seo";
import SplitType from "split-type";

import Header from "@/components/Header/Header";
import AboutAerosol from "@/components/About/AboutAerosol";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import SliderMarquee from "@/components/ServicePage/SliderMarquee";
import VideoPlayer from "@/components/About/VideoPlayer";
import AboutNextBox from "@/components/NextBoxes/AboutNextBox";
import LogoCarousel from "@/components/About/LogoCarousel";
import NewGifSection from "@/components/About/NewGifSection";

gsap.config({
  nullTargetWarn: false,
});

export default function about() {
  // Hero Section Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        "#e",
        {
          opacity: 0,
        },
        {
          delay: 4,
          duration: 1.3,
          opacity: 1,
        }
      );
      return () => tl.kill();
    });
    return () => ctx.revert();
  }, []);

  // LOGO Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      let fixed_scrol = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section-about",
          start: "top top",
          end: "bottom center",
          markers: false,
          pin: true,
          scrub: 2,
        },
      });

      fixed_scrol.to(
        "#e",
        2,
        {
          transform: "scale(1)",
          duration: 5,
          ease: "power1.inOut",
        },
        ""
      ),
        fixed_scrol.to(
          "#n",
          2,
          {
            transform: "scale(1)",
            duration: 5,
            ease: "power1.inOut",
            stagger: 0.3,
          },
          "-=2"
        );
      fixed_scrol.to(
        " #i",
        2,
        {
          transform: "scale(1)",
          duration: 5,
          ease: "power1.inOut",
          stagger: 0.3,
        },
        "-=1.2"
      );
      fixed_scrol.to(
        "#g",
        2,
        {
          transform: "scale(1)",
          duration: 5,
          ease: "power1.inOut",
          stagger: 0.3,
        },
        "-=1.4"
      );
      fixed_scrol.to(
        "#m",
        2,
        {
          transform: "scale(1)",
          duration: 5,
          ease: "power1.inOut",
          stagger: 0.3,
        },
        "-=1.8"
      );
      fixed_scrol.to(
        "#a",
        2,
        {
          transform: "scale(1)",
          duration: 5,
          ease: "power1.inOut",
          stagger: 0.3,
        },
        "-=1.6"
      );
      fixed_scrol.from(
        ".small_heading",
        {
          opacity: 0,
          y: 30,
          duration: 3,
          ease: "power1.In",
        },
        "3.3"
      );
    });
    return () => ctx.revert();
  }, []);

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

  // Text Reveal Animation For Each Whys US
  useEffect(() => {
    const totalSection = document.querySelectorAll(
      ".first-about-content-section"
    );
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelectorAll(".why-us-anim"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          markers: false,
        },
        duration: 0.8,
        opacity: 0,
        yPercent: 100,
        ease: "Power3.out",
        stagger: 0.02,
      });
    });
  }, []);

  // Text Reveal Animation For Each Client Love Us
  useEffect(() => {
    const totalSection = document.querySelectorAll("#client-loveus");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelectorAll(".client-anim-heading"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
          markers: false,
        },
        duration: 0.8,
        opacity: 0,
        yPercent: 100,
        ease: "Power3.out",
        stagger: 0.02,
      });
    });
  }, []);

  console.clear();

  return (
    <>
      <NextSeo
        title="About Enigma | India's Premier UX Agency"
        description="Learn about Enigma, India's leading UX agency, offering exceptional UI/UX design, front-end development, and organic marketing services for global clients"
        canonical="https://www.weareenigma.com/about"
        openGraph={{
          url: "https://www.weareenigma.com/about",
          title: "About Enigma | India's Premier UX Agency",
          description:
            "Learn about Enigma, India's leading UX agency, offering exceptional UI/UX design, front-end development, and organic marketing services for global clients",
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
          siteName: "https://www.weareenigma.com/about",
        }}
      />

      <Head>
        <title>About Enigma | India's Premier UX Agency</title>
        <meta
          name="description"
          content="Learn about Learn about Enigma, India's leading UX agency, offering exceptional UI/UX design, front-end development, and organic marketing services for global clients"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <div className="loader-wrap" id="loader" style={{ zIndex: 9999 }}>
        <div className="loader-wrap-heading">
          <span>
            <h1>Who We Are</h1>
          </span>
        </div>
        <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>
      </div>
      
      <div className="about-header">
        <Header />
      </div>

      <main>
        <section className="hero-about"
        data-cursor-size="10"
        data-cursor-text="">
          <div
            className="hero-section-about"
          >
            <div className="container_hero">
              <div id="noise" />
              <div className="container_hero_content">
                <svg
                  id="enigma-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1020 300"
                  style={{ enableBackground: "new 0 0 1020 300" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .sh {\n                                        filter: drop-shadow(rgb(0, 0, 0))\n                                    }\n\n                                    .st01 {\n                                        fill: url(#SVGID_1_)\n                                    }\n\n                                    .st11 {\n                                        fill: url(#SVGID_2_)\n                                    }\n\n                                    .st21 {\n                                        fill: url(#SVGID_3_)\n                                    }\n\n                                    .st31 {\n                                        fill: url(#SVGID_4_)\n                                    }\n\n                                    .st41 {\n                                        fill: url(#SVGID_5_)\n                                    }\n\n                                    .st51 {\n                                        fill: url(#SVGID_6_)\n                                    }\n\n                                    .st61 {\n                                        fill: url(#SVGID_7_)\n                                    }\n\n                                    .st71 {\n                                        fill: url(#SVGID_8_)\n                                    }\n\n                                    .st81 {\n                                        fill: url(#SVGID_9_)\n                                    }\n\n                                    .st91 {\n                                        fill: url(#SVGID_10_)\n                                    }\n                                ",
                    }}
                  />
                  <g>
                    <linearGradient
                      id="SVGID_2_"
                      gradientUnits="userSpaceOnUse"
                      x1="74.1925"
                      y1="-3.0795"
                      x2="74.1925"
                      y2="208.1779"
                    >
                      <stop offset={0} style={{ stopColor: "#000" }} />
                      <stop offset={1} style={{ stopColor: "#363636 " }} />
                    </linearGradient>
                    <path
                      className="st11 sh"
                      id="e"
                      d="M10,60.8v178.5h126.4l0-65.1H110v50.6H23.2l13.2-3.4v-59.6l-13.2-3.4l113.2,0V60.8H10z M110,143.7l-86.8,0    l13.2-3.4V78.7l-13.2-3.4H110L110,143.7z"
                    />
                    <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1="244.0582"
                      y1="-3.0795"
                      x2="244.0582"
                      y2="208.1779"
                    >
                      <stop offset={0} style={{ stopColor: "#000" }} />
                      <stop offset={1} style={{ stopColor: "#363636" }} />
                    </linearGradient>
                    <polygon
                      className="st01 sh"
                      id="n"
                      xmlns="http://www.w3.org/2000/svg"
                      points="180.6,60.7 180.6,239.2 246.4,239.2 246.4,224.7 193.8,224.6 207,221.3 207,78.8 193.6,75.3     293.8,75.3 280.6,78.7 280.6,239.2 307,239.2 307,60.7   "
                    />
                    <g id="i">
                      <linearGradient
                        id="SVGID_3_"
                        gradientUnits="userSpaceOnUse"
                        x1="389.345"
                        y1="-3.0795"
                        x2="389.345"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <rect
                        xmlns="http://www.w3.org/2000/svg"
                        x="376.1"
                        y="16.8"
                        className="st2"
                        width="26.4"
                        height="26.4"
                      />
                      <linearGradient
                        id="SVGID_4_"
                        gradientUnits="userSpaceOnUse"
                        x1="372.2424"
                        y1="-3.0795"
                        x2="372.2424"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <polygon
                        className="st31 sh"
                        xmlns="http://www.w3.org/2000/svg"
                        points="339.5,60.7 339.4,75.3 389.5,75.3 376.3,78.7 376.3,221.3 389.5,224.6 339.5,224.6 339.4,239.2    402.7,239.2 402.7,60.7  "
                      />
                    </g>
                    <g id="g">
                      <linearGradient
                        id="SVGID_9_"
                        gradientUnits="userSpaceOnUse"
                        x1="510.7233"
                        y1="-3.0795"
                        x2="510.7233"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <rect
                        className="st81 sh"
                        xmlns="http://www.w3.org/2000/svg"
                        x="497.2"
                        y="136.7"
                        width="26.4"
                        height="26.4"
                      />
                      <linearGradient
                        id="SVGID_10_"
                        gradientUnits="userSpaceOnUse"
                        x1="509.993"
                        y1="-3.0795"
                        x2="509.993"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <path
                        className="st91 sh"
                        xmlns="http://www.w3.org/2000/svg"
                        d="M446.8,239.2l112.9,0l-12.8,3.3l0,22.7l13.2,3.4H460l13.4-3.4V254h-26.6l0,29.2h126.4V60.7l-112.8,0l12.8-3.3   V34.7l-12.8-3.3H560l-13.2,3.4v11.3h26.4V16.8H446.9L446.8,239.2z M460,75.3h100l-13.2,3.4l0,142.6l13.1,3.4l-99.9-0.1l13.2-3.4   V78.7L460,75.3z"
                      />
                    </g>
                    <g id="m">
                      <linearGradient
                        id="SVGID_6_"
                        gradientUnits="userSpaceOnUse"
                        x1="775.9418"
                        y1="-3.0795"
                        x2="775.9418"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <polygon
                        xmlns="http://www.w3.org/2000/svg"
                        className="st51 sh"
                        points="773.6,75.3 826.2,75.3 813,78.7 813,221.2 826.4,224.7 726.2,224.7 739.4,221.3 739.4,60.8 713,60.8    713,239.2 839.4,239.2 839.4,60.8 773.6,60.8  "
                      />
                      <linearGradient
                        id="SVGID_7_"
                        gradientUnits="userSpaceOnUse"
                        x1="630.6549"
                        y1="-3.0795"
                        x2="630.6549"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <rect
                        className="st61 sh"
                        xmlns="http://www.w3.org/2000/svg"
                        x="617.5"
                        y="256.7"
                        width="26.4"
                        height="26.4"
                      />
                      <linearGradient
                        id="SVGID_8_"
                        gradientUnits="userSpaceOnUse"
                        x1="647.7574"
                        y1="-3.0795"
                        x2="647.7574"
                        y2="208.1779"
                      >
                        <stop offset={0} style={{ stopColor: "#000" }} />
                        <stop offset={1} style={{ stopColor: "#363636" }} />
                      </linearGradient>
                      <polygon
                        xmlns="http://www.w3.org/2000/svg"
                        className="st71 sh"
                        points="680.6,60.8 617.3,60.8 617.3,239.2 680.5,239.2 680.6,224.7 630.5,224.7 643.7,221.3 643.7,78.7    630.5,75.3 680.5,75.3  "
                      />
                    </g>
                    <linearGradient
                      id="SVGID_5_"
                      gradientUnits="userSpaceOnUse"
                      x1="945.8075"
                      y1="-3.0795"
                      x2="945.8075"
                      y2="208.1779"
                    >
                      <stop offset={0} style={{ stopColor: "#000" }} />
                      <stop offset={1} style={{ stopColor: "#363636" }} />
                    </linearGradient>
                    <path
                      className="st41 sh"
                      id="a"
                      d="M883.6,60.8l0,65.1H910V75.3h86.8l-13.2,3.4v59.6l13.2,3.4l-113.2,0v97.5H1010V60.8H883.6z M996.8,224.6H910   l0-68.3l86.8,0l-13.2,3.4v61.6L996.8,224.6z"
                    />
                  </g>
                </svg>
                <h1 className="small_heading">
                  Digital Experience Design Agency For Ambitious Brands
                </h1>
              </div>
            </div>

            <div
              className="action-icon play-icon"
              id="cursor-stick-area"
              data-cursor-exclusion
            >
                <img
                  className="inner"
                  src="/assets/about/arrow.svg"
                  alt="play icon"
                  style={{ transform: "translate(0px, 0px)" }}
                />
                <svg
                  className="scroll-icon"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 115 115"
                  style={{ enableBackground: "new 0 0 115 115" }}
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      d="M14.7,36.9c-0.5,1-1,1.6-1.7,2c-0.7,0.3-1.4,0.3-2.2,0l0.7-1.4c0.5,0.2,0.8,0.2,1.2,0c0.3-0.2,0.6-0.5,0.8-1
                                       c0.2-0.4,0.3-0.8,0.3-1.1c0-0.3-0.2-0.6-0.5-0.7c-0.1-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.2,0.1-0.3,0.2
                                       c-0.1,0-0.2,0.1-0.3,0.3c-0.1,0.2-0.2,0.3-0.3,0.4c-0.1,0.1-0.2,0.2-0.4,0.5c-0.2,0.3-0.4,0.5-0.6,0.7c-0.2,0.2-0.3,0.4-0.6,0.5
                                       c-0.2,0.2-0.4,0.3-0.7,0.4c-0.2,0.1-0.4,0.1-0.7,0.1c-0.3,0-0.6-0.1-0.8-0.2c-0.7-0.3-1.1-0.8-1.2-1.5c-0.1-0.7,0-1.5,0.4-2.3
                                       c0.4-0.8,0.9-1.4,1.5-1.7c0.6-0.3,1.3-0.3,2.1,0L10,33.1c-0.4-0.1-0.7-0.1-1,0.1c-0.3,0.2-0.6,0.4-0.7,0.8C8,34.4,7.9,34.7,8,35
                                       c0,0.3,0.2,0.5,0.5,0.7c0.3,0.1,0.5,0.1,0.8-0.1c0.2-0.2,0.6-0.5,1-1.1c0.2-0.3,0.5-0.6,0.6-0.8s0.4-0.4,0.6-0.6
                                       c0.2-0.2,0.5-0.3,0.7-0.4c0.2-0.1,0.5-0.1,0.7-0.1c0.3,0,0.6,0.1,0.9,0.2c0.7,0.3,1.2,0.9,1.3,1.6C15.2,35.2,15.1,36,14.7,36.9z"
                    />
                    <path
                      d="M19,29.6c-0.7,0.9-1.5,1.5-2.6,1.6c-1.1,0.1-2.1-0.2-3.1-0.9c-1-0.7-1.6-1.6-1.8-2.6c-0.2-1,0-2,0.7-3
                                       c0.6-0.8,1.2-1.3,2-1.4c0.8-0.2,1.5-0.1,2.2,0.3l-0.9,1.3c-0.4-0.2-0.8-0.2-1.1-0.1c-0.4,0.1-0.7,0.3-1,0.7
                                       c-0.4,0.6-0.5,1.2-0.3,1.8c0.2,0.6,0.7,1.2,1.3,1.7c0.7,0.5,1.3,0.7,2,0.7c0.7,0,1.2-0.3,1.6-0.8c0.3-0.4,0.4-0.8,0.4-1.2
                                       c0-0.4-0.2-0.8-0.5-1.1l0.9-1.3c0.6,0.5,0.9,1.1,1,1.8C19.8,27.9,19.6,28.7,19,29.6z"
                    />
                    <path
                      d="M22,25.5l-5.6-5.8l2.7-2.6c0.6-0.5,1.1-0.8,1.8-0.9c0.6,0,1.2,0.2,1.6,0.7c0.7,0.7,0.8,1.5,0.3,2.4l0,0
                                       c0.4-0.2,0.7-0.3,1-0.2c0.3,0,0.6,0.2,1,0.5c0.1,0.1,0.3,0.3,0.5,0.4c0.2,0.2,0.3,0.3,0.4,0.4c0.1,0.1,0.2,0.2,0.3,0.3
                                       c0.1,0.1,0.2,0.2,0.3,0.2c0.1,0,0.1,0,0.2,0l0.1,0.1l-1.1,1.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1
                                       c-0.1,0-0.1-0.1-0.2-0.2c-0.1-0.1-0.2-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.3-0.2C24.1,21.1,24,21,24,21c-0.7-0.6-1.4-0.6-2.1,0.1
                                       L20.9,22l2.3,2.3L22,25.5z M18.5,19.5l1.6,1.6l1.2-1.2c0.3-0.3,0.5-0.6,0.5-0.9c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.4-0.8-0.4
                                       c-0.3,0-0.6,0.1-0.9,0.4L18.5,19.5z"
                    />
                    <path
                      d="M32.7,15.5c-0.1,1-0.7,1.9-1.7,2.6c-1,0.7-2,0.9-3,0.6s-1.9-0.9-2.6-1.9s-1-2.1-0.8-3.1c0.2-1.1,0.7-1.9,1.7-2.6
                                       c1-0.7,2-0.8,3-0.6c1,0.3,1.9,0.9,2.6,1.9C32.6,13.4,32.9,14.4,32.7,15.5z M28.5,17.1c0.6,0.2,1.2,0.1,1.8-0.3
                                       c0.6-0.4,0.9-0.9,0.9-1.6c0-0.7-0.2-1.3-0.7-2c-0.5-0.7-1-1.2-1.6-1.4c-0.6-0.2-1.2-0.2-1.8,0.2c-0.6,0.4-0.9,0.9-0.9,1.6
                                       c0,0.7,0.2,1.3,0.7,2C27.3,16.4,27.9,16.9,28.5,17.1z"
                    />
                    <path d="M35.8,14.9l-3.3-7.4L34,6.9l2.7,6.1l3.5-1.5l0.6,1.2L35.8,14.9z" />
                    <path d="M42.5,12.1l-2.1-7.8L42,3.9l1.8,6.5l3.7-1l0.4,1.3L42.5,12.1z" />
                    <path
                      d="M52.5,9.9l-0.3-8.1l3.1-0.1c1.1,0,1.9,0.3,2.6,1.1c0.7,0.7,1,1.7,1.1,2.9c0.1,1.4-0.3,2.5-1.2,3.2
                                       c-0.6,0.5-1.4,0.8-2.4,0.9L52.5,9.9z M54.1,8.5l1.3,0c0.7,0,1.3-0.3,1.6-0.7c0.3-0.4,0.5-1.1,0.4-1.9c0-0.8-0.2-1.5-0.6-2
                                       c-0.4-0.5-0.9-0.7-1.6-0.7l-1.3,0L54.1,8.5z"
                    />
                    <path
                      d="M67.4,9.7c-0.8,0.7-1.8,0.9-3,0.8c-1.2-0.2-2-0.7-2.6-1.6C61.2,8,61,7,61.2,5.8c0.2-1.2,0.7-2.2,1.5-2.8
                                       c0.8-0.7,1.8-0.9,3-0.8c1.2,0.2,2,0.7,2.6,1.6c0.6,0.9,0.8,1.9,0.6,3.1C68.7,8.1,68.2,9,67.4,9.7z M63.1,8.1c0.3,0.6,0.8,0.9,1.5,1
                                       c0.7,0.1,1.3-0.1,1.7-0.5c0.4-0.5,0.7-1.1,0.9-2c0.1-0.8,0-1.5-0.3-2.1c-0.3-0.6-0.8-0.9-1.5-1c-0.7-0.1-1.3,0.1-1.8,0.6
                                       c-0.5,0.5-0.8,1.1-0.9,2C62.7,6.8,62.8,7.5,63.1,8.1z"
                    />
                    <path
                      d="M71.4,11.8l0.6-8.4l1.6,0.6l-0.4,4.1l-0.3,1.8l0,0c0.4-0.6,0.7-1.1,0.9-1.5L76,4.9l1.5,0.5l-0.6,4.1l-0.2,1.7l0,0
                                       c0.4-0.6,0.7-1.1,1-1.5L80,6.3l1.5,0.6l-4.9,6.8l-1.4-0.5l0.6-4.4l0.2-1.4l0,0c-0.3,0.5-0.5,0.9-0.7,1.3l-2.4,3.7L71.4,11.8z"
                    />
                    <path
                      d="M80,15.3l4.3-6.8l1.4,0.9l-0.1,5.2c0,0.1,0,0.3,0,0.5c0,0.2,0,0.4-0.1,0.5l0,0.2l0,0c0.3-0.5,0.5-0.9,0.7-1.2l2.2-3.6
                                       l1.4,0.9l-4.3,6.8l-1.3-0.8l0-5.2c0-0.1,0-0.3,0-0.5c0-0.2,0-0.4,0.1-0.5l0-0.2l0,0c-0.3,0.5-0.5,0.9-0.7,1.2l-2.2,3.5L80,15.3z"
                    />
                    <path d="M91.3,19.9l1-1l2.3,2.2l-1,1L91.3,19.9z" />
                    <path
                      d="M96.6,30.5c-0.6-0.9-0.9-1.7-0.9-2.5c0-0.8,0.4-1.4,1.1-1.9l0.9,1.3c-0.4,0.3-0.6,0.7-0.6,1s0.2,0.8,0.5,1.2
                                       c0.3,0.4,0.5,0.6,0.9,0.8c0.3,0.1,0.6,0.1,0.9-0.1c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2,0-0.3
                                       c0-0.1,0-0.2-0.1-0.4c-0.1-0.2-0.1-0.3-0.2-0.4c0-0.1-0.1-0.3-0.2-0.6c-0.1-0.3-0.2-0.6-0.3-0.8s-0.1-0.5-0.2-0.8
                                       c0-0.3-0.1-0.5,0-0.8s0.1-0.4,0.3-0.7c0.1-0.2,0.4-0.4,0.6-0.6c0.6-0.4,1.3-0.6,2-0.3c0.7,0.2,1.3,0.7,1.8,1.5
                                       c0.5,0.8,0.8,1.5,0.7,2.2s-0.4,1.3-1,1.8l-0.9-1.3c0.3-0.3,0.4-0.6,0.5-0.9c0-0.4-0.1-0.7-0.3-1.1c-0.3-0.4-0.5-0.6-0.8-0.7
                                       c-0.3-0.1-0.6-0.1-0.8,0.1c-0.3,0.2-0.4,0.4-0.3,0.7c0,0.3,0.2,0.8,0.4,1.4c0.2,0.4,0.3,0.7,0.4,0.9s0.2,0.5,0.2,0.8s0.1,0.6,0,0.8
                                       c0,0.2-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.5-0.6,0.6c-0.7,0.5-1.3,0.6-2,0.4C97.7,31.7,97.1,31.2,96.6,30.5z"
                    />
                    <path
                      d="M100.8,37.9c-0.5-1-0.5-2-0.1-3c0.4-1,1.2-1.7,2.3-2.2c1.1-0.5,2.2-0.6,3.2-0.3c1,0.3,1.8,1,2.3,2c0.4,0.9,0.5,1.7,0.3,2.4
                                       c-0.2,0.7-0.7,1.3-1.4,1.7l-0.7-1.5c0.3-0.2,0.6-0.5,0.7-0.9c0.1-0.4,0-0.8-0.2-1.2c-0.3-0.6-0.8-1-1.4-1.2c-0.6-0.1-1.3,0-2.1,0.3
                                       c-0.8,0.4-1.3,0.8-1.6,1.4c-0.3,0.6-0.3,1.2,0,1.8c0.2,0.4,0.5,0.7,0.8,0.9c0.4,0.2,0.8,0.2,1.2,0.1l0.7,1.5
                                       c-0.7,0.3-1.4,0.3-2.1,0C101.8,39.4,101.2,38.8,100.8,37.9z"
                    />
                    <path
                      d="M102.9,42.5l7.8-2l0.9,3.6c0.2,0.8,0.2,1.4-0.1,2c-0.3,0.6-0.7,0.9-1.4,1.1c-1,0.3-1.8-0.1-2.3-0.9l0,0
                                       c0,0.4-0.1,0.7-0.3,1c-0.2,0.2-0.5,0.5-1,0.6c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.4,0.1-0.6,0.2c-0.1,0-0.3,0.1-0.4,0.2
                                       s-0.2,0.1-0.3,0.2c-0.1,0.1-0.1,0.1-0.1,0.2l-0.1,0l-0.4-1.5c0,0,0-0.1,0.1-0.1c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1
                                       s0.2-0.1,0.3-0.1s0.2-0.1,0.3-0.1c0.1,0,0.2-0.1,0.4-0.1c0.1-0.1,0.3-0.1,0.3-0.1c0.9-0.3,1.2-0.9,0.9-1.9l-0.3-1.3l-3.1,0.8
                                       L102.9,42.5z M109.8,42.3l-2.2,0.6l0.4,1.7c0.1,0.4,0.3,0.7,0.5,0.9c0.3,0.2,0.5,0.2,0.9,0.1c0.3-0.1,0.6-0.3,0.7-0.5
                                       c0.1-0.3,0.2-0.6,0.1-1L109.8,42.3z"
                    />
                    <path
                      d="M106.3,56.7c-0.8-0.6-1.3-1.6-1.4-2.7c-0.1-1.2,0.2-2.1,1-2.9c0.7-0.8,1.7-1.2,2.9-1.3c1.2-0.1,2.3,0.2,3.1,0.8
                                       c0.8,0.7,1.3,1.6,1.4,2.7c0.1,1.2-0.2,2.1-1,2.9c-0.7,0.8-1.7,1.2-2.9,1.3C108.2,57.7,107.1,57.4,106.3,56.7z M106.9,52.2
                                       c-0.5,0.4-0.7,1-0.7,1.7s0.4,1.2,0.9,1.6c0.6,0.3,1.3,0.5,2.1,0.4c0.8-0.1,1.5-0.3,2-0.7c0.5-0.4,0.7-1,0.7-1.7
                                       c-0.1-0.7-0.4-1.2-0.9-1.6c-0.6-0.3-1.3-0.5-2.1-0.4C108.1,51.5,107.4,51.8,106.9,52.2z"
                    />
                    <path d="M105.2,59.7l8,0.8l-0.2,1.6l-6.7-0.7l-0.4,3.8l-1.4-0.1L105.2,59.7z" />
                    <path d="M104.4,66.9l7.8,2l-0.4,1.6l-6.5-1.7l-0.9,3.7l-1.3-0.3L104.4,66.9z" />
                    <path
                      d="M101.3,76.6l7.2,3.7l-1.4,2.8c-0.5,0.9-1.2,1.5-2.2,1.8c-1,0.2-2,0.1-3.1-0.5c-1.2-0.6-2-1.5-2.2-2.6
                                       c-0.2-0.8,0-1.6,0.4-2.5L101.3,76.6z M101.8,78.7l-0.6,1.1c-0.3,0.7-0.4,1.2-0.2,1.7c0.2,0.5,0.7,0.9,1.4,1.3
                                       c0.7,0.4,1.4,0.5,2,0.4c0.6-0.1,1.1-0.4,1.4-1l0.6-1.2L101.8,78.7z"
                    />
                    <path
                      d="M94.2,89.7c-0.2-1,0.1-2,0.8-2.9c0.7-0.9,1.6-1.4,2.7-1.5c1.1-0.1,2.1,0.3,3,1c1,0.8,1.5,1.7,1.7,2.7c0.2,1-0.1,2-0.8,3
                                       c-0.7,0.9-1.6,1.4-2.7,1.5s-2.1-0.3-3-1C94.9,91.6,94.4,90.7,94.2,89.7z M97.7,86.8c-0.7,0-1.2,0.2-1.6,0.8
                                       c-0.4,0.6-0.6,1.2-0.4,1.8s0.6,1.2,1.3,1.7c0.7,0.5,1.3,0.8,2,0.8c0.7,0,1.2-0.2,1.6-0.8c0.4-0.6,0.6-1.2,0.4-1.8
                                       c-0.2-0.6-0.6-1.2-1.3-1.7C99,87.1,98.3,86.8,97.7,86.8z"
                    />
                    <path
                      d="M90.4,92.1l7,4.6l-1.3,1.1l-3.4-2.4l-1.4-1.1l0,0c0.3,0.6,0.6,1.1,0.8,1.6l1.9,3.7l-1.2,1l-3.3-2.5L88.2,97l0,0
                                       c0.3,0.6,0.6,1.2,0.8,1.6l1.8,3.7l-1.2,1l-3.5-7.6l1.2-1l3.5,2.7l1.1,0.9l0,0c-0.3-0.5-0.5-0.9-0.7-1.3l-2-3.9L90.4,92.1z"
                    />
                    <path
                      d="M83.1,97.9l3.8,7.1l-1.5,0.8l-4.5-2.7c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.1-0.3-0.2-0.4-0.3l-0.2-0.1l0,0
                                       c0.3,0.5,0.5,0.9,0.7,1.2l2,3.7l-1.4,0.8l-3.8-7.1l1.4-0.8l4.5,2.6c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.3,0.2,0.4,0.3l0.2,0.1l0,0
                                       c-0.3-0.5-0.5-0.9-0.7-1.2l-2-3.7L83.1,97.9z"
                    />
                    <path d="M73.6,105.5l0.4,1.4l-3.1,0.9l-0.4-1.4L73.6,105.5z" />
                    <path
                      d="M61.7,104.9c1.1-0.1,1.9,0.1,2.6,0.5c0.6,0.4,1,1,1.1,1.9l-1.6,0.1c-0.1-0.5-0.3-0.8-0.6-1c-0.3-0.2-0.8-0.2-1.3-0.2
                                       c-0.5,0-0.8,0.2-1.1,0.4c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.1,0,0.2,0.1,0.3s0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.1,0.3,0.2
                                       c0.1,0,0.2,0.1,0.4,0.1c0.2,0,0.4,0.1,0.5,0.1c0.1,0,0.3,0,0.6,0.1c0.4,0.1,0.6,0.1,0.9,0.1c0.2,0,0.5,0.1,0.8,0.2
                                       c0.3,0.1,0.5,0.2,0.7,0.4c0.2,0.1,0.3,0.3,0.4,0.6c0.1,0.2,0.2,0.5,0.2,0.8c0.1,0.8-0.2,1.4-0.7,1.9c-0.5,0.5-1.3,0.7-2.2,0.8
                                       c-0.9,0.1-1.7-0.1-2.3-0.5c-0.6-0.4-0.9-1-1.1-1.8l1.6-0.1c0.1,0.4,0.3,0.7,0.6,0.9c0.3,0.2,0.7,0.3,1.1,0.2c0.4,0,0.8-0.2,1-0.4
                                       c0.2-0.2,0.4-0.4,0.3-0.7c0-0.3-0.2-0.5-0.4-0.6c-0.3-0.1-0.7-0.2-1.4-0.3c-0.4,0-0.7-0.1-1-0.1c-0.3,0-0.5-0.1-0.8-0.2
                                       c-0.3-0.1-0.5-0.2-0.7-0.4c-0.2-0.1-0.3-0.3-0.5-0.6c-0.1-0.2-0.2-0.5-0.2-0.9c-0.1-0.8,0.2-1.4,0.7-1.9
                                       C60,105.2,60.8,104.9,61.7,104.9z"
                    />
                    <path
                      d="M53.2,104.9c1.1,0.1,2,0.6,2.7,1.4c0.7,0.8,0.9,1.9,0.8,3.1c-0.1,1.2-0.5,2.2-1.3,2.9c-0.8,0.7-1.7,1.1-2.9,1
                                       c-1-0.1-1.7-0.4-2.2-1c-0.5-0.6-0.8-1.2-0.8-2l1.6,0.1c0,0.4,0.2,0.8,0.5,1c0.3,0.3,0.6,0.4,1.1,0.5c0.7,0.1,1.3-0.2,1.7-0.6
                                       s0.7-1.2,0.7-2c0.1-0.8-0.1-1.5-0.4-2.1c-0.4-0.6-0.9-0.9-1.5-0.9c-0.5,0-0.9,0.1-1.2,0.3c-0.3,0.2-0.5,0.6-0.6,1l-1.6-0.1
                                       c0.1-0.8,0.5-1.4,1-1.8C51.4,105,52.2,104.8,53.2,104.9z"
                    />
                    <path
                      d="M48.2,104.4l-2.1,7.8l-3.6-1c-0.7-0.2-1.3-0.6-1.7-1.1c-0.4-0.5-0.4-1.1-0.3-1.8c0.3-1,0.9-1.5,1.9-1.5l0,0
                                       c-0.3-0.2-0.6-0.5-0.7-0.7c-0.1-0.3-0.1-0.7-0.1-1.1c0-0.2,0.1-0.4,0.1-0.6c0-0.2,0.1-0.4,0.1-0.6c0-0.1,0-0.3,0.1-0.4
                                       c0-0.1,0-0.3,0-0.3c0-0.1,0-0.1-0.1-0.2l0-0.1l1.5,0.4c0,0,0,0.1,0.1,0.1c0,0,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2c0,0.1,0,0.2,0,0.3
                                       c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.2-0.1,0.4c0,0.2-0.1,0.3-0.1,0.4c-0.2,0.9,0.2,1.5,1.2,1.7l1.3,0.3l0.8-3.1L48.2,104.4z
                                        M44.9,110.5l0.6-2.2l-1.7-0.4c-0.4-0.1-0.8-0.1-1,0c-0.3,0.1-0.5,0.4-0.5,0.7c-0.1,0.3-0.1,0.6,0.1,0.9c0.2,0.3,0.4,0.4,0.8,0.6
                                       L44.9,110.5z"
                    />
                    <path
                      d="M34.1,100.3c1-0.4,2-0.4,3.1,0.1c1.1,0.5,1.7,1.3,2,2.3c0.3,1,0.2,2.1-0.3,3.2c-0.5,1.1-1.3,1.9-2.3,2.3s-2,0.4-3.1-0.1
                                       c-1.1-0.5-1.7-1.3-2-2.3c-0.3-1-0.2-2.1,0.3-3.2C32.3,101.5,33.1,100.7,34.1,100.3z M37.7,103.1c-0.1-0.6-0.5-1.1-1.2-1.4
                                       c-0.6-0.3-1.3-0.3-1.8,0c-0.6,0.3-1,0.9-1.4,1.6c-0.4,0.8-0.5,1.5-0.4,2.1c0.1,0.6,0.5,1.1,1.1,1.4c0.6,0.3,1.3,0.3,1.8,0
                                       c0.6-0.3,1-0.9,1.4-1.6C37.7,104.4,37.8,103.7,37.7,103.1z"
                    />
                    <path d="M32,98l-4.7,6.6l-1.3-0.9l3.9-5.5l-3.1-2.2l0.8-1.1L32,98z" />
                    <path d="M26.2,93.6l-5.6,5.8l-1.2-1.1l4.7-4.8l-2.7-2.6l0.9-1L26.2,93.6z" />
                    <path
                      d="M19.2,86.2l-6.8,4.4l-1.7-2.6c-0.6-0.9-0.7-1.8-0.4-2.8c0.3-1,0.9-1.8,2-2.4c1.2-0.8,2.3-1,3.4-0.7c0.8,0.2,1.4,0.8,2,1.6
                                       L19.2,86.2z M17.2,85.6l-0.7-1.1c-0.4-0.6-0.9-1-1.4-1c-0.5,0-1.2,0.2-1.9,0.6c-0.7,0.5-1.1,1-1.4,1.5c-0.2,0.6-0.1,1.1,0.2,1.7
                                       l0.7,1.1L17.2,85.6z"
                    />
                    <path
                      d="M11.4,73.5c1,0.4,1.7,1.1,2.2,2.2c0.4,1.1,0.4,2.1,0,3.1c-0.5,1-1.2,1.7-2.4,2.1C10,81.3,9,81.4,8,81s-1.7-1.1-2.2-2.2
                                       c-0.4-1.1-0.4-2.1,0-3.1s1.3-1.7,2.4-2.1C9.3,73.2,10.4,73.1,11.4,73.5z M12.2,78c0.3-0.6,0.4-1.2,0.1-1.8
                                       c-0.3-0.7-0.7-1.1-1.4-1.2c-0.6-0.1-1.3-0.1-2.1,0.3c-0.8,0.3-1.3,0.8-1.7,1.3c-0.3,0.6-0.4,1.2-0.1,1.8c0.3,0.7,0.7,1.1,1.4,1.2
                                       c0.6,0.2,1.4,0.1,2.1-0.3C11.3,79,11.9,78.5,12.2,78z"
                    />
                    <path
                      d="M11.1,69.1l-7.5,3.8l-0.3-1.6l3.7-1.8l1.7-0.7l0,0c-0.7,0-1.3,0-1.8,0l-4.1-0.1L2.5,67l3.8-1.6L8,64.7l0,0
                                       c-0.7,0-1.3,0-1.8-0.1L2,64.4l-0.3-1.6l8.4,0.8l0.3,1.5l-4.1,1.8l-1.4,0.5l0,0c0.6,0,1.1,0,1.5,0l4.4,0.2L11.1,69.1z"
                    />
                    <path
                      d="M9.7,59.8l-8.1-0.2l0-1.7l4.6-2.6c0.1-0.1,0.3-0.2,0.5-0.2c0.2-0.1,0.3-0.2,0.5-0.2l0.2-0.1l0,0c-0.6,0-1,0-1.4,0l-4.2-0.1
                                       l0-1.6l8.1,0.2l0,1.6l-4.5,2.7c-0.1,0.1-0.3,0.2-0.5,0.2c-0.2,0.1-0.3,0.2-0.5,0.2L4.2,58l0,0c0.6,0,1,0,1.4,0l4.2,0.1L9.7,59.8z"
                    />
                    <path d="M7.9,47.8l-1.4-0.3l0.7-3.1l1.4,0.3L7.9,47.8z" />
                  </g>
                </svg>
              </div>
          </div>
        </section>

        {/* Second Section */}

        <section
          data-cursor-color="#000"
          data-cursor-size="0px"
          className="aero-about p-200"
        >
          <AboutAerosol />
        </section>

        {/* Second Section END */}  

        {/* Reel Section */}

        <section className="reel-section-about">
          <div className="reel-section-box">
            <VideoPlayer />
          </div>
        </section>

        {/* Reel Section END */}

        {/* First Content Section */}
        <section className="first-about-content-section m-150">
          <div className="first-sub-section">
            <div className="left-box-heading">
              <h1 className="why-us-anim">
                <span className="stroke">why</span> us.
              </h1>
            </div>
            <div className="right-box-content">
              <p data-jelly className="why-us-anim">
                <span>
                  We have been asked this question like a zillion times – How
                  are you different than the other agencies out there. Well, the
                  truth is that we were “Born Different”.{" "}
                </span>
              </p>
              <br />
              <p className="mt-about why-us-anim" data-jelly>
                <span>
                  We see the bigger picture, we are ambitious, we set the bar
                  high in all facets of our work, we love what we do and most
                  importantly, we were not made for the overpopulated plains of
                  mediocrity. Swayed already?{" "}
                  <span className="emoji-dark">😏</span> But we’ve got a few
                  more reasons for why you’d want to work with us:
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* First Content Section END */}

        {/* =============== Horizontal Section ================== */}
        <section className="pin-about">
          <NewGifSection />
        </section>
        {/* =============== Horizontal Section END ================== */}

        {/* =============== Slider Marquee ================== */}
        <SliderMarquee />
        {/* =============== Slider Marquee END ================== */}

        {/* Client LOVE US  Section */}
        <section className="client-about-content-section m-150" id="client-loveus">
          <div className="first-sub-section">
            <div className="left-box-heading">
              <h1 className="client-anim-heading">
                <span className="stroke">clients</span> love us.
              </h1>
            </div>
            <div className="right-box-content">
              <p data-jelly className="client-anim-heading">
                <span>
                  It’s not just the eminence & superior quality of our work.
                  It’s our attitude, our approach, our meticulous attention to
                  detail, our ability to understand their business & their
                  goals, and most of all, it’s the way we treat our clients
                  –They walk in as clients and stay as friends! That’s why we
                  say, we don’t work for clients, we work with our friends.
                </span>
              </p>
            </div>
          </div>
        </section>

      <section className="p-200">
        <LogoCarousel />
      </section>
        {/* Client LOVE US  Section END */}

        {/* Next Page Button */}
        <div className="m-150">
          <AboutNextBox />
        </div>
        {/* Next Page Button END */}

        {/* ======================== Footer ====================== */}
        <div className="desktop-footer">
          <Footer />
        </div>

        <div className="mobile-footer">
          <FooterMobile />
        </div>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}
