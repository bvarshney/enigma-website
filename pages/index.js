import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "./components/Header/Header";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import SmoothScroll from "./components/utils/SmoothScroll";
import { NextSeo } from "next-seo";

import HomeAero from "./components/Home/HomeAero";
import Footer from "./components/Footer";
import Category from "./components/Home/Category";
import ConceptScrollNew from "./components/Home/ConceptScrollNew";
import FooterMobile from "./components/Mobile/FooterMobile";
import HomeHero from "./components/Mobile/HomeHero";
import HomeVideoSection from "./components/Mobile/HomeVideoSection";
import ConceptScrollMobile from "./components/Mobile/ConceptScrollMobile";
import ProjectsHome from "./components/Home/ProjectsHome";
import TopHomeAero from "./components/Home/TopHomeAero";
import Link from "next/link";
import Preloader from "./components/PreLoader";

export default function Home() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 5.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#hireus",
      {
        scale: 0,
        opacity: 0,
      },
      {
        delay: 6.3,
        duration: 1.3,
        scale: 1,
        opacity: 1,
      }
    );
    return () => tl.kill();
  }, []);

  // Home Header Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".home-page-header",
      {
        y: -50,
        opacity: 0,
      },
      {
        delay: 5.5,
        duration: 1.3,
        opacity: 1,
        y: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Page Transitions OLD
  // useEffect(() => {
  //   var tl = gsap.timeline();

  //   tl.to(
  //     ".transition li",
  //     {
  //       duration: 0.5,
  //       scaleY: 1,
  //       transformOrigin: "bottom left",
  //       stagger: 0.05,
  //     },
  //     "+=0.1"
  //   );

  //   tl.to(
  //     ".transition li",
  //     {
  //       duration: 0.5,
  //       scaleY: 0,
  //       transformOrigin: "top left",
  //       stagger: 0.15,
  //       delay: 0.1,
  //     },
  //     "+=0.5"
  //   );
  // });

  // New Page Transition
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const svg = document.getElementById("svg");
  //     const tl = gsap.timeline();
  //     const curve = "M0, 502S175, 272, 500, 272s500, 230, 500, 230V0H0Z";
  //     const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  //     tl.from(".loader-wrap-heading .hi", {
  //       duration: 0.05,
  //       delay: 0.5,
  //     }).to(".loader-wrap-heading .hi", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .hello", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .hello", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .hola", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .hola", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .ciao", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .ciao", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .ola", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .ola", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .bon", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .bon", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .salam", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .salam", {
  //       opacity: 0,
  //     });

  //     tl.from(".loader-wrap-heading .shalom", {
  //       opacity: 0,
  //       duration: 0.05,
  //     }).to(".loader-wrap-heading .shalom", {
  //       opacity: 0,
  //     });

  //     tl.to(svg, {
  //       duration: 0.5,
  //       attr: { d: curve },
  //       ease: "power2.easeIn",
  //     }).to(svg, {
  //       duration: 0.5,
  //       attr: { d: flat },
  //       ease: "power2.easeOut",
  //     });
  //     tl.to(".loader-wrap", {
  //       y: -1500,
  //     });
  //     tl.to(".loader-wrap", {
  //       zIndex: -1,
  //       display: "none",
  //     });
  //   });
  //   return () => ctx.revert();
  // });

  return (
    <>
      <NextSeo
        title="Enigma Digital | UI/UX, Front-End Development & Marketing"
        description="Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.weareenigma.com/",
          title: "Enigma Digital | UI/UX, Front-End Development & Marketing",
          description:
            "Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions.",
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
          siteName: "weareenigma.com",
        }}
      />

      <Head>
        <title>Enigma Digital | UI/UX, Front-End Development & Marketing</title>
        <meta
          name="description"
          content="Boost your brand with India's top UX agency, offering expert UI/UX Design, Front-End Development, and Organic Marketing solutions."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      {/* <ul className="transition" style={{ zIndex: "255" }} id="loader">
        <li />
        <li />
        <li />
        <li />
      </ul> */}

      {/* <div className="loader-wrap" id="loader" style={{ zIndex: "999999" }}>
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>
        <div className="loader-wrap-heading">
          <span className="span">
            <h2 className="hi">Namaste! 🙏</h2>
          </span>
          <span className="span">
            <h2 className="hello">Hello!</h2>
          </span>
          <span className="span">
            <h2 className="hola">Hola!</h2>
          </span>
          <span className="span">
            <h2 className="ciao">Bonjour</h2>
          </span>
          <span className="span">
            <h2 className="ola">Ciao</h2>
          </span>
          <span className="span">
            <h2 className="bon">Aloha</h2>
          </span>
          <span className="span">
            <h2 className="salam">Olá</h2>
          </span>
          <span className="span">
            <h2 className="shalom">Shalom</h2>
          </span>
        </div>
      </div> */}

      <Preloader />

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

      <SmoothScroll />

      <main className="main-section">
        <HomeHero />

        <div className="hireus-button" id="hireus">
          <a
            href="/hireus"
            data-cursor-text="Hire Us!"
            data-cursor-size="80px"
            data-cursor-color="#5D5AD6"
          >
            <Image
              src="/assets/hireus/icon-hireus.png"
              alt="Icon"
              width={70}
              height={70}
            />
          </a>
        </div>

        <div className="hero-main desktop">
          <div
            className="hero-section"
            data-cursor-size="10px"
            data-cursor-text=""
          >
            <div className="first-section">
              <div
                className="digital"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/1.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
                id="anim"
              >
                <span className="line hacker">digital</span>
              </div>
              <p className="para-hero" id="anim">
                Leveraging the power of{" "}
                <span className="bold-600">
                  Emotion, Consumer Psychology, and Technology,
                </span>{" "}
                we create Digital Brand Experiences that propel your success in
                the enigmatic realm of bits & bytes.
              </p>
            </div>

            <div className="second-section">
              <div
                className="experience"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/2.webp"
                data-cursor-size="300px"
                data-cursor-color="#000"
                id="anim"
              >
                experience
              </div>

              <div className="reel-hero">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 6,
                  }}
                >
                  <video
                    src="/assets/reels/hero.webm"
                    muted
                    autoPlay
                    loop
                    preload="auto"
                    className="hero-video"
                  ></video>
                </motion.div>
              </div>
            </div>

            <div className="third-section">
              <div
                className="design"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/4.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
                id="anim"
              >
                design
              </div>

              <div
                className="agency"
                data-cursor-magnetic
                data-cursor-background-image="/assets/gif/3.gif"
                data-cursor-size="300px"
                data-cursor-color="#000"
                id="anim"
              >
                agency
              </div>
            </div>
          </div>
        </div>

        {/* ======================== Hero Footer ====================== */}

        <div className="hero-footer">
          <div className="scroll-img home-page-header">
            <Image
              src="/assets/hero-footer/scroll.svg"
              width={200}
              height={200}
              alt="Scroll"
            ></Image>
          </div>

          <div className="content-section home-page-header">
            <div className="f-sub-content">
              <div className="f-content-text">
                <span className="f-disabled">timezone</span>
                <div className="f-heading">+5:30 GMT</div>
              </div>
            </div>
            <div className="f-right">
              <h3 className="f-disabled">location</h3>
              <div className="f-heading">Noida - India</div>
            </div>
          </div>
        </div>
        {/* ======================== Hero Footer END ====================== */}
      </main>

      {/* ======================== Concept Scroll ====================== */}
      <div>
        <ConceptScrollNew />
      </div>
      <div>
        <ConceptScrollMobile />
      </div>
      {/* ======================== Concept Scroll END ====================== */}

      {/* ======================== Home Video Mobile ====================== */}
      <HomeVideoSection />
      {/* ======================== Home Video Mobile END  ================= */}

      <div className="space-large desktop"></div>
      <div className="space-mobile desktop"></div>
      <div className="space-mobile desktop"></div>

      {/* ======================== Home Aero ====================== */}
      <div
        data-cursor-color="#000"
        data-cursor-size="0px"
        // style={{ zIndex: -1 }}
        className="topHeightAero"
      >
        <TopHomeAero />
      </div>
      {/* ======================== Home Aero END ====================== */}
      <div className="space-mobile desktop"></div>

      <div className="space-large desktop"></div>

      {/* ======================== Projects Slide ====================== */}
      <div className="category">
        <Category />
      </div>
      {/* ======================== Projects Slide END ====================== */}

      <div className="ipad desktop"></div>
      <div className="ipad desktop"></div>
      <div className="space-large desktop"></div>

      {/* ======================== Projects Slide ====================== */}
      <div className="projects">
        <ProjectsHome />
      </div>

      {/* ======================== Projects Slide END ====================== */}

      <div className="space-mobile desktop"></div>
      <div className="space-mobile desktop"></div>

      {/* ======================== Home Aero ====================== */}
      <div data-cursor-color="#000" data-cursor-size="0px">
        <HomeAero />
      </div>
      {/* ======================== Home Aero END ====================== */}
      <div className="space-large desktop"></div>

      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>

      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}
