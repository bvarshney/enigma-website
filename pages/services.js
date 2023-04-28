import React, { useEffect } from "react";
import Head from "next/head";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import "intersection-observer";
import { NextSeo } from "next-seo";
import SplitType from "split-type";

import Header from "./components/Header/Header";
import SmoothScroll from "./components/utils/SmoothScroll";
import Footer from "./components/Footer";
import MarqueeCata from "./components/MarqueeCata";
import SliderMarquee from "./components/Srvc/SliderMarquee";
import FooterMobile from "./components/Mobile/FooterMobile";
import ServiceNextBox from "./components/NextBoxes/ServiceNextBox";
import MagneticButton from "./components/MagneticButton";

gsap.registerPlugin(ScrollTrigger);
5;
// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1.1,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1,
    ease: "power1.inOut",
  });
};

// Hover on the link
const handleHoverSecond = (f) => {
  gsap.to(f.target, {
    duration: 0.5,
    scale: 1.05,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExitSecond = (f) => {
  gsap.to(f.target, {
    duration: 0.5,
    scale: 1,
    ease: "power1.inOut",
  });
};

export default function services() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#service-anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Mobile Video Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#mobile-vid",
      {
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Video Reveal Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#grow",
      {
        height: "16vh",
        borderRadius: "10vw",
        opacity: 0,
        scale: 0,
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        scale: 1,
      }
    );
    return () => tl.kill();
  }, []);

  // Parallax Image
  useEffect(() => {
    gsap.utils.toArray(".image-container").forEach(function (container) {
      let image = container.querySelector("img");

      gsap.to(image, {
        y: () => image.offsetHeight - container.offsetHeight,
        ease: "none",
        startAt: { y: "-25%" },
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
          markers: false,
          invalidateOnRefresh: true,
        },
        y: "25%",
        ease: "none",
      });
    });
  });

  //   Rotate SVG on Scroll
  useEffect(() => {
    let ctx = gsap.context(() => {
      const dev = {};

      dev.interactions = {
        button: function () {
          const button = document.querySelectorAll("#rotate");
          gsap.set(button, {
            left: Math.floor(
              Math.random() * (window.innerWidth - button.offsetWidth)
            ),
            opacity: 1,
          });

          var rotate = gsap
            .timeline({
              scrollTrigger: {
                scrub: true,
                start: "top top",
                end: "+=10000",
              },
            })
            .to(button, {
              rotation: 360 * 5,
              duration: 1,
              ease: "none",
            });
        },
      };
      dev.interactions.button();
    });
    return () => ctx.revert();
  }, []);

  // Page Transitions
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

  // Image Transition on Scroll
  useEffect(() => {
    let ctx = gsap.context(() => {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#grow",
          scrub: true,
          start: "-350 top",
          end: "+=800",
          ease: "none",
          markers: false,
        },
      });
      growTl.to("#grow", {
        duration: 1,
        borderRadius: "0vw",
        height: "100vh",
        width: "90vw",
        right: "2vw",
        y: "420px",
      });
    });
    return () => ctx.revert();
  });

  // Text Reveal Animation Top to Center
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-how",
        start: "-450 top",
      },
    });

    // Header
    tl.fromTo(
      ".line-anim .span",
      0.8,
      {
        y: -350,
        ease: "none",
        skewY: -20,
      },
      {
        y: 0,
        skewY: 0,
        stagger: 0.4,
      }
    );
    return () => tl.kill();
  }, []);

  // Text Reveal Animation For Each
  useEffect(() => {
    const totalSection = document.querySelectorAll(".strategy-box-anim");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelectorAll(".ser-text-head-anim"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "-380 top",
          end: "bottom top",
          markers: false,
        },
        duration: 1,
        opacity: 0,
        yPercent: 100,
        ease: "Power3.out",
        stagger: 0.02,
      });
    });
  });

  // Text Reveal Animation For Each
  useEffect(() => {
    const totalSection = document.querySelectorAll(".top-box");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelectorAll(".box-anim-gsap"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "-450 top",
          end: "bottom top",
          markers: false,
        },
        duration: 1,
        opacity: 0,
        yPercent: 100,
        ease: "Power3.out",
        // stagger: 0.2,
      });
    });
  });

  // Line Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".top-box",
        start: "-500 top",
      },
    });
    tl.fromTo(
      ".line-animation",
      { opacity: 0, width: "0" },
      {
        width: "90%",
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  });

  // Line Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-box-image",
        start: "-300 top",
      },
    });
    tl.fromTo(
      ".anim-img-service",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 1.8,
      }
    );
  });

  console.clear();

  return (
    <>
      <NextSeo
        title=" Enigma Digital | Services | Expert UI/UX, Development & Marketing"
        description="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
        canonical="https://www.weareenigma.com/services"
        openGraph={{
          url: "https://www.weareenigma.com/services",
          title:
            " Enigma Digital | Services | Expert UI/UX, Development & Marketing",
          description:
            "Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth.",
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
          siteName: "https://www.weareenigma.com/services",
        }}
      />

      <Head>
        <title>
          Enigma Digital | Services | Expert UI/UX, Development & Marketing
        </title>
        <meta
          name="description"
          content="Experience top-tier UI/UX design, front-end development, and organic marketing services with Enigma Digital, enhancing your online presence and business growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <div className="loader-wrap" id="loader" style={{ zIndex: 999 }}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>What We Do</h1>
          </span>
        </div>
      </div>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

      <main>
        <div
          className="service-hero"
          data-cursor-size="10px"
          data-cursor-text=""
        >
          <div className="service-hero-content">
            <div className="first-box-service">
              <div
                className="what-we"
                id="service-anim"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/7.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
              >
                What
              </div>

              <div
                className="what-we"
                id="service-anim"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/4.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
              >
                <span className="w-e">We</span>
              </div>

              <h3 className="para-hero" id="service-anim">
                Leveraging the power of{" "}
                <span className="bold-600">
                  Emotion, Consumer Psychology, and Technology,
                </span>{" "}
                we create Digital Brand Experiences that propel your success in
                the enigmatic realm of bits & bytes.
              </h3>
            </div>

            <h1
              className="do"
              id="service-anim"
              data-cursor-magnetic
              data-cursor-background-image="/assets/gif/9.gif"
              data-cursor-size="300px"
              data-cursor-color="#000"
            >
              Offer
            </h1>
            <div className="second-box-service">
              <section class="image-en">
                <div className="absolute-img">
                  <video
                    className="vid"
                    autoPlay
                    muted
                    loop
                    playsinline
                    preload="auto"
                    src="/assets/services/service-1.webm"
                    id="grow"
                  ></video>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="space-large desktop"></div>

        {/* =================== Second Image Section ========================= */}
        <div
          className="service-second-image-section"
          id="service-second-section"
        >
          <div className="" id="opacity"></div>
        </div>

        <div className="mobile-video-service-section">
          <div className="video-service-mobile" id="mobile-vid">
            <video
              className="vid"
              autoPlay
              muted
              loop
              playsinline
              preload="auto"
              src="/assets/services/service-1.webm"
            ></video>
          </div>
        </div>

        {/* =================== Second Image Section END ========================= */}

        <div className="space-large desktop"></div>
        <div className="ipad desktop"></div>
        <div className="ipad desktop"></div>
        <div className="space-large mobile"></div>
        <div className="space-large mobile"></div>

        {/* =================== First Marquee Section ========================= */}
        <div>
          {/* <FirstMarquee /> */}
          {/* <SecondMarquee /> */}
        </div>
        {/* =================== First Marquee Section END ========================= */}

        <div className="space-large desktop"></div>
        <div className="space-medium ipad"></div>

        {/* =================== Services and Capabilities Section ========================= */}
        <div className="service-cap-section strategy-box-anim">
          <div className="left-box" data-jelly>
            <h2 className="sub-text ser-text-head-anim">
              <span>
                Here's how we help you
                <br /> grow.
              </span>
            </h2>
          </div>
          <div className="right-box">
            <div className="right-sub-content strategy-box-anim">
              <h1 className="ser-text-head-anim">Our Capabilities</h1>
              <h4 data-jelly className="ser-text-head-anim">
                <span>
                  We create evergreen brands that are highly effective at
                  boosting revenue, increasing brand equity, and improving ROI.
                  Our big picture approach powers your entire business, not just
                  the marketing department.
                </span>
              </h4>
            </div>
          </div>
        </div>

        <div className="space-large desktop"></div>
        <div className="space-medium ipad"></div>
        <div className="space-large mobile"></div>

        {/* Strategy Box 1  */}
        <div className="strategy-box strategy-box-anim">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#2b8c87"
          >
            <h1 className="ser-text-head-anim">Strategy</h1>
            <h4 data-jelly className="ser-text-head-anim">
              <span>
                Digital Advisory and Consulting, Integrated Digital Marketing
                Plan (D.M.P.), User Experience Development, Customer Experience
                Strategy, Consumer Research, Insights & Target Market Analysis,
                Digital Capabilities Development, Persona Design & Customer
                Segmentation, Competitive Analysis & Industry Insights, Brand &
                Content Strategy, Digital Marketing and Website Performance
                Audit.
              </span>
            </h4>
            {/* <h4 className="bottom-text"></h4> */}
          </div>
          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/strategy.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>

        <div className="ipad desktop"></div>
        {/* Strategy Box 1  END */}

        <div className="space-large desktop"></div>

        {/* Strategy Box 2  */}
        <div className="strategy-box strategy-box-anim flex-reverse">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#000"
          >
            <h1 className="ser-text-head-anim">UI/UX Design</h1>
            <h4 data-jelly className="ser-text-head-anim">
              <span>
                User Interface Design, User Experience Design, Responsive Web
                Design, Mobile App Design, Digital Interface Design, Design
                Systems Creation, Experience Mapping, User Flow Mapping,
                Wireframing & Prototyping, Illustrations & Animations, Visual
                Designs, and UI Kits.
              </span>
            </h4>
            {/* <h4 className="bottom-text"></h4> */}
          </div>
          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/design.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        <div className="ipad desktop"></div>
        {/* Strategy Box 2  END */}

        <div className="space-large desktop"></div>

        {/* Strategy Box 3  */}
        <div className="strategy-box strategy-box-anim">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#fcc63d"
          >
            <h1 className="ser-text-head-anim">Technology</h1>
            <h4 data-jelly className="ser-text-head-anim">
              <span>
                Front-End Development, Native & Hybrid Mobile Application
                Development, Progressive Web Applications, Database Design &
                Management, Cloud Infrastructure Services, Testing & Automation
                TECH STACK - HTML, CSS, Sass, Less, JavaScript, jQuery, GSAP,
                Vue, React, React Native, Ionic, Flutter, NodeJS, Spring, JAVA,
                Grails, Hibernate, MySQL, PostgreSQL, Oracle, Mongo, AWS and
                Google Cloud.
              </span>
            </h4>
            {/* <h4 className="bottom-text"></h4> */}
          </div>
          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/tech.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        <div className="ipad desktop"></div>
        {/* Strategy Box 3  END */}

        <div className="space-large desktop"></div>

        {/* Strategy Box 4  */}
        <div className="strategy-box strategy-box-anim flex-reverse">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#000"
          >
            <h1 className="ser-text-head-anim">Marketing</h1>
            <h4 data-jelly className="ser-text-head-anim">
              <span>
                Social Media Management, Content Creation & Curation, Search
                Engine Optimisation, Influencer Management, Auction Media
                Management, Online Reputation Management, Media Planning &
                Buying, Marketing Automation, Email Marketing, Conversion Rate
                Optimisation, Website & SEO Analysis.
              </span>
            </h4>
            {/* <h4 className="bottom-text"></h4> */}
          </div>
          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/market.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        {/* Strategy Box 4  END */}
        {/* =================== Services and Capabilities Section END ========================= */}

        <div className="space-large desktop"></div>
        <div className="ipad desktop"></div>

        {/* =================== Bottom Image Section ========================= */}
        <div className="service-second-image-section">
          <div className="image-container-en">
            <video
              src="/assets/services/service-2.webm"
              autoPlay
              muted
              loop
              loading="lazy"
              width={1920}
              height={1080}
              alt="services"
              data-cursor-text="Works"
              data-cursor-size="100px"
              data-cursor-color="#bcd15e"
              onMouseEnter={(f) => handleHoverSecond(f)}
              onMouseOut={(f) => handleHoverExitSecond(f)}
            />
            <div className="rotate-idea-svg">
              <Image
                src="/assets/about/wemakemagic.png"
                width={200}
                height={200}
                alt="services"
                id="rotate"
              />
            </div>
          </div>
        </div>
        {/* =================== Bottom Image Section END ========================= */}

        <div className="space-large desktop"></div>
        <div className="space-large mobile"></div>
        <div className="space-large mobile"></div>
        <div className="space-medium ipad"></div>
        <div className="ipad desktop"></div>

        {/* ===================== How we Work ==================== */}
        <section className="main-how">
          <div className="how-we-work">
            <div className="first-heading-box">
              <div className="sub-first-heading line-anim">
                <span className="span">
                  This is <span className="sub-first-highlight"> how</span>
                </span>
              </div>
              <div className="sub-second-heading line-anim">
                <span className="span">we work</span>
              </div>
            </div>
          </div>

          <div className="space-large desktop"></div>
          <div className="space-medium ipad"></div>

          {/* Boxes How we Work */}

          {/* 1 */}

          <div className="top-box">
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div
              className="first-box-how box-anim-gsap"
              data-cursor-color="#fcba03"
              data-cursor-size="120px"
              data-cursor-text="Define"
            >
              <div className="box-we">
                <h1 className="disabled-work">Define</h1>
              </div>
              <div className="box-we-para">
                <h4>
                  <span>
                    Develop a thorough understanding of the project, audience,
                    and objectives to formulate a strategy.
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="top-box">
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div
              className="first-box-how box-anim-gsap"
              data-cursor-size="120px"
              data-cursor-color="#00ffdd"
              data-cursor-text="Design"
            >
              <div className="box-we">
                <h1 className="disabled-work">Design</h1>
              </div>
              <div className="box-we-para">
                <h4>
                  <span>
                    Craft a purposeful design to reflect the objectives and
                    indicate the direction for the entire project.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/* 1 END */}

          {/* 2 */}
          <div
            className="top-box"
            data-cursor-size="120px"
            data-cursor-color="#CA022C"
            data-cursor-text="Implement"
          >
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div className="first-box-how box-anim-gsap">
              <div className="box-we">
                <h1 className="disabled-work">Implement</h1>
              </div>
              <div className="box-we-para">
                <h4>
                  <span>
                    Bring the design to life in the form of an interactive and
                    functional prototype. Review, refine and optimise.
                  </span>
                </h4>
              </div>
            </div>
          </div>

          <div className="top-box">
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div
              className="first-box-how box-anim-gsap"
              data-cursor-size="120px"
              data-cursor-color="#536cd4"
              data-cursor-text="Develop"
            >
              <div className="box-we">
                <h1 className="disabled-work">Develop</h1>
              </div>
              <div className="box-we-para">
                <h4>
                  <span>
                    Incorporate implementation and technical components into a
                    highly functional system, ready for review.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/* 2 END */}

          {/* 3 */}
          <div
            className="top-box last-box"
            data-cursor-size="120px"
            data-cursor-color="#bcd15e"
            data-cursor-text="Deliver"
          >
            <div
              className="line-animation"
              style={{
                width: "0%",
                height: "1px",
                background: "#a2a2a2",
              }}
            ></div>
            <div className="first-box-how box-anim-gsap">
              <div className="box-we">
                <h1 className="disabled-work">Deliver</h1>
              </div>
              <div className="box-we-para">
                <h4>
                  <span>
                    Review, refine, test and prepare final product for delivery.
                    Launch and continue to evolve over time.
                  </span>
                </h4>
              </div>
            </div>
          </div>
          {/* 3 END */}
          {/* Boxes How we Work END */}
        </section>
        {/* ===================== How we Work END ====================  */}

        <div className="space-large desktop"></div>
        <div className="space-medium ipad"></div>

        {/* ==================== Slider Marquee ==================== */}
        <div>
          <SliderMarquee />
        </div>
        {/* ==================== Slider Marquee END ==================== */}

        <div className="space-large desktop"></div>
        <div className="space-large mobile"></div>
        <div className="ipad desktop"></div>
        <div className="ipad desktop"></div>

        {/* ======================== Marquee ====================== */}
        <div>
          <MarqueeCata />
        </div>
        <div className="space-large desktop"></div>
        <div className="space-large desktop"></div>
        {/* ======================== Marquee END ====================== */}

        {/* ======================= Next Page Box ====================== */}
        <div>
          <ServiceNextBox />
        </div>
        {/* ======================= Next Page Box END ====================== */}

        <div className="space-large desktop"></div>
        <div className="space-large desktop"></div>

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
  );
}
