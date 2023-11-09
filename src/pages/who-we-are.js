import React, { useEffect } from "react";
import gsap from "gsap";
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
import Modal from "@/components/PopupForm/formModal";
import PageLoader from "@/components/pageLoader";

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

  useEffect(() => {
    const aboutLogo = document.querySelector(".header-logo");
    let ctx = gsap.context(() => {
    gsap.to(aboutLogo, {
      opacity: 0,
      delay: 7
    }) 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-header",
        start: "top -500",
        scrub: 1,
      }
    });
    
    tl.to(aboutLogo, {
      opacity: 1,
      duration: 10,
    });
      
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <NextSeo
        title="About Enigma - UI/UX Design & Digital Marketing Agency India"
        description="Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency."
        canonical="https://weareenigma.com/who-we-are"
        openGraph={{
          url: "https://weareenigma.com/who-we-are",
          title: "About Enigma - UI/UX Design & Digital Marketing Agency India",
          description:
            "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
            images: [
              {
                url: "https://weareenigma.com/assets/featured-images/about.png",
                width: 1200,
                height: 630,
                alt: "About Us Feature Image",
                type: "image/png",
              },
            ],
          siteName: "Enigma Digital",
        }}
      />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Who We Are" />
      
      <div className="about-header">
        <Header />
      </div>

{/* PopUp Modal Button */}
<Modal />
{/* End */}

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
                src="/assets/hero-footer/scroll.svg"
                alt="scroll below icon"
                />
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
