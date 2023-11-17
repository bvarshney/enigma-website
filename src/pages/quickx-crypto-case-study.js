import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/quick.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Image from "next/image";
import ProjectSlider from "../components/CaseStudies/ProjectSlider";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

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

export default function quickx() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#patro",
      {
        rotationX: -50,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
  });

  // Hero Section Sub Text Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#patroSub",
      {
        opacity: 0,
        translateY: 100,
      },
      {
        delay: 3.5,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.4,
      }
    );
  });

  // Hero Section Image Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".image-anim",
      {
        opacity: 0,
        translateY: 300,
        transformOrigin: "top center",
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
      }
    );
  });

  // Parallax Image
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray("#image-container").forEach(function (container) {
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
          },
          y: "25%",
          ease: "none",
        });
      });
    });
    return () => ctx.revert();
  });

  // Data Speed Control
  useEffect(() => {
    let ctx = gsap.context(() => {
      const color = document.querySelector("#colorsection");
      gsap.to("[data-speed]", {
        y: (i, el) =>
          -1 *
          parseFloat(el.getAttribute("data-speed")) *
          (color.offsetHeight / 3),
        ease: "none",
        scrollTrigger: {
          trigger: color,
          invalidateOnRefresh: true,
          scrub: 0,
          markers: false,
          start: "center bottom",
        },
      });
    });
    return () => ctx.revert();
  });

  // LI Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#colorsection",
        start: "-250 top",
      },
    });
    tl.fromTo(
      "#line",
      { opacity: 0, width: "0" },
      {
        width: "100%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }
    );
  });

  return (
    <>

    <NextSeo
      title="QuickX - Branding & Mobile App Design Case Study | Enigma"
      description="We helped Quickx design India's most user-friendly crypto platform. From branding to UI/UX design, our product design services fuelled their growth at every step."
      openGraph={{
        url: "https://weareenigma.com/quickx-crypto-case-study",
        title: "QuickX - Branding & Mobile App Design Case Study | Enigma",
        description:
          "We helped Quickx design India's most user-friendly crypto platform. From branding to UI/UX design, our product design services fuelled their growth at every step.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-quickx.png",
                    width: 1200,
                    height: 630,
                    alt: "QuickX Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
      }}
    
      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "QuickX - Branding & Mobile App Design Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "We helped Quickx design India's most user-friendly crypto platform. From branding to UI/UX design, our product design services fuelled their growth at every step."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-quickx.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/quickx-crypto-case-study" />
        <link rel="alternate" href="https://weareenigma.com/quickx-crypto-case-study" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/quickx-crypto-case-study"
                },
                "name": "QuickX - Branding & Mobile App Design Case Study | Enigma",
                "description": "We helped Quickx design India's most user-friendly crypto platform. From branding to UI/UX design, our product design services fuelled their growth at every step.",
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

      <PageLoader text="QuickX Crypto Case Study" />

      <main>
        <div>
          <Header />
        </div>

        <div className={styles.Main}>
          
{/*Section 1  */}
<section
            className={styles.HeroSection}>
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-text="Visit!"
                  data-cursor-color="#0D0A29"
                >
                  <Link href="/quickx-crypto-case-study" className={styles.Link}>
                  <button aria-label="link button">
                    quickX.app
                    <span className={styles.linkSvg}>
                      <Image
                        width={20}
                        height={20}
                        src="/assets/casestudies/Vector.svg"
                        alt="Svg"
                        id="case-study-arrow"
                      />
                    </span>
                  </button>
                  </Link>
                </div>
                <h1 id="patro">
                    QuickX Crypto <br /> Mobile Exchange
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                  SAAS
                </h5>
                <h5 className={styles.year} id="patroSub">
                  2019-20
                </h5>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/quickx/quickx-casestudy-image-1.webp"
                  alt="QuickX Casestudy Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0D0A29"
                  data-cursor-text="QuickX"
                />
              </div>
            </div>
          </section>
          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Third Section ============================ */}
          <section className={styles.thirdSection}>
            <div className={styles.thirdSectionContent}>
              <div className={styles.thirdSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>THE CLIENT</h3>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4} data-jelly>
                    QuickX has been taking cryptocurrencies to remote corners of
                    the world and enhancing the utility of crypto in everyday
                    life for all the day to day activities.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Marketing
                  </h6>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== Third Section END ======================== */}

          {/* ====================== Parallax Image =========================== */}
          <section className={styles.imageSection}>
            <div className={styles.imageBox} id="image-container">
              <img
                src="/assets/casestudies/quickx/quickx-casestudy-image-2.webp"
                alt="QuickX Casestudy Image 2"
                loading="lazy"
                className={styles.img}
                id="img"
                data-cursor-size="100px"
                data-cursor-color="#0D0A29"
                data-cursor-text="QuickX"
              />
            </div>
          </section>
          {/* ====================== Parallax Image  END ====================== */}


          {/* ====================== Third Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>THE ASK</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4} data-jelly>
                    As the project commenced, both teams found themselves facing
                    obstacles that tested their creativity, technical expertise,
                    and resilience.
                  </h4>
                  <p data-jelly>
                  While Wragby's vision was as clear as a cloudless sky, the
                    challenges were as daunting as climbing Mount Everest in
                    flip-flops. The first hurdle: creating a website that
                    encapsulated Wragby's awe-inspiring ingenuity without
                    getting lost in the vortex of technical jargon. With
                    Wragby's extensive portfolio of innovative solutions, the
                    task of organizing and presenting the information in a
                    digestible format was like trying to solve a Rubik's cube
                    blindfolded.
                  </p>
                  <p data-jelly>
                  The second challenge: designing a user experience that even
                    your tech-averse grandma could navigate with ease. In a
                    world where attention spans rival those of goldfish, the
                    website needed to be engaging, intuitive, and snappy while
                    showcasing Wragby's complex offerings without overwhelming
                    users.
                  </p>
                  <p data-jelly>
                  And lastly, developing a site that could handle the constant
                    flux of innovative content. Wragby's brilliance knows no
                    bounds, and their website needed to be a living, breathing
                    entity, capable of adapting and growing alongside the
                    company.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Third Section END ======================== */}


          {/* ========================== The LOGO Section =========================== */}

          <section className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-3.webp"
                    alt="QuickX Casestudy Image 3"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-4.webp"
                    alt="QuickX Casestudy Image 4"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-5.webp"
                    alt="QuickX Casestudy Image 5"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-6.webp"
                    alt="QuickX Casestudy Image 6"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========================== The LOGO Section END ======================= */}


          {/* ====================== FOURTH Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>Our Approach</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    We decided to play by our own rulebook, tossing conventional
                    wisdom out the window like an old Nokia brick phone. We
                    began with a deep dive into Wragby's psyche, absorbing their
                    every quirk and vision like a sponge in the depths of the
                    ocean. This immersion allowed our team to channel Wragby's
                    innovative spirit into every aspect of the website.
                  </p>
                  <p data-jelly>
                    Next, we concocted a design so visually alluring, it could
                    make the Sirens of Greek mythology green with envy. The
                    design featured bold colors, futuristic layouts, and
                    interactive elements that turned the website into a digital
                    playground, inviting users to explore and discover Wragby's
                    groundbreaking solutions.
                  </p>
                  <p data-jelly className={styles.marginBottom}>
                    Then we addressed the challenge of presenting complex
                    information in a digestible manner. We employed storytelling
                    techniques, weaving Wragby's technical offerings into
                    engaging narratives that humanized the company and connected
                    with users on an emotional level. This approach transformed
                    what could have been a maze of jargon into a thrilling
                    odyssey through the world of technology.
                  </p>
                  <p data-jelly>
                    And finally, Enigma took a page out of Wragby's book,
                    deploying agile development methodologies to ensure the
                    website could grow and evolve with the company like a
                    chameleon on steroids. This strategy allowed the site to
                    flex and adapt to Wragby's ever-expanding portfolio of
                    innovative solutions, ensuring it remained a showcase of
                    their cutting-edge expertise.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== FOURTH Section END ============================ */}


          {/* ========================== The LOGO Section =========================== */}

          <section className={styles.logoSection}>
            <div className={styles.logoImageSection}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-7.webp"
                    alt="QuickX Casestudy Image 7"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-8.webp"
                    alt="QuickX Casestudy Image 8"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>

            <div className={styles.logoImageSectionSecond}>
              <div className={styles.firstLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-9.webp"
                    alt="QuickX Casestudy Image 9"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/quickx/quickx-casestudy-image-10.webp"
                    alt="QuickX Casestudy Image 10"
                    loading="lazy"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ========================== The LOGO Section END ======================= */}
          
          {/* ====================== Fonts Section ======================== */}
          <section className={styles.fontSection}>
            <div className={styles.fontHeading}>
              <h2 className={styles.h2} >Fonts</h2>
            </div>
            <div className={styles.quickxfontImagebox}>
              <img
                src="/assets/casestudies/quickx/quickx-casestudy-font-image-1.webp"
                alt="QuickX casestudy font image 1"
                className={styles.desktopFont}
              />
              <img
                src="/assets/casestudies/quickx/quickx-casestudy-font-image-2.webp"
                alt="QuickX casestudy font image 2"
                className={styles.mobileFont}
              />
              <img
                src="/assets/casestudies/quickx/quickx-casestudy-font-image-3.webp"
                alt="QuickX casestudy font image 3"
                className={styles.mobileFont}
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}


          {/* ====================== COLORS Section ==================== */}

          <section className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h2 className={styles.h2} >Colours</h2>
            </div>
            <div className={styles.quickxcolorBox}>
              <div className={styles.quickxcolorBoxHeadingBackground}>
                <h2 data-speed="1.5">
                  Colour <br /> Palette
                </h2>
              </div>
            </div>

            <div
              className={styles.quickxcolorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.quickxcolorOne} id="line">
                  Hex: #841AFF <br /> Hex: #5C0DF6 <br /> Hex: #B305FA
                </li>
                <li className={styles.quickxcolorTwo} id="line">
                  Hex: #00050D <br /> Hex: #10064C
                </li>
                <li className={styles.quickxcolorThree} id="line">
                  Hex: #841AFF
                </li>
                <li className={styles.quickxcolorFour} id="line">
                  Hex: #16171D
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>QuickX Cryptocurrencies</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/quickx/quickx.webm"
                  autoPlay
                  loop
                  muted
                  alt='quickx casestudy video'
                />
              </div>
            </div>
          </section>
          
          {/* ====================== Video Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>Tech Stack</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    Enigma opted for a classic combo: HTML, CSS, JS, jQuery, and
                    WordPress. This dynamic quintet of technologies provided a
                    flexible, battle-tested foundation for Wragby's digital fortress
                    that could withstand the test of time. HTML and CSS laid the
                    groundwork for visual appeal, while JavaScript and jQuery
                    injected interactivity and flair, and WordPress offered a
                    user-friendly content management system for Wragby's
                    ever-evolving content needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Forth Section  ======================== */}

          {/* ====================== Parallax Image Second =========================== */}

          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                  <img
                    src="/assets/casestudies/quickx/quickx-casestudy-image-11.webp"
                    alt="QuickX Casestudy Image 11"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#0D0A29"
                    data-cursor-text="QuickX"
                  />
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== FOURTH Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>THE RESULT</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    Wragby's innovative spirit now had a digital home that not
                    only reflected its essence but also attracted talent,
                    clients, and partners from across the African continent and
                    beyond. The seamless user experience had users exploring the
                    site with the enthusiasm of Indiana Jones on a treasure
                    hunt, while the engaging narratives forged emotional
                    connections that turned visitors into loyal clients.
                  </p>
                  <p data-jelly>
                    The website's ability to adapt and evolve alongside Wragby's
                    growth ensured that the company's digital presence would
                    remain relevant and impressive for years to come. The
                    collaboration between Enigma Digital and Wragby Business
                    Solutions produced a website that defied convention and set
                    a new standard for digital excellence in the African
                    technology landscape.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ====================== Fourth Section END ======================== */}

          {/* ====================== Parallax Image Second =========================== */}

          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/quickx/quickx-casestudy-image-12.webp"
                  alt="QuickX Casestudy Image 12"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0D0A29"
                  data-cursor-text="QuickX"
                />
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Client Section ============================ */}


          <section className={styles.clientTestimonialSection}>
            <div className={styles.clientTestimonialSectionContent}>
              <div className={styles.clientTestimonialSectionLeftBox}>
                <h3 data-jelly>WORDS FROM THE CLIENT</h3>
              </div>
              <div className={styles.clientTestimonialSectionRightBox}>
                <div className={styles.clientTestimonialparaTop}>
                  <h4 data-jelly>
                    <span className={styles.clientTestimonialSpan2}>“</span>
                    Enigma Digital's mastery of web design and development is
                    truly unparalleled. Their ability to craft a website that
                    not only captured our essence but also transformed our
                    digital presence is nothing short of miraculous. We are
                    beyond thrilled with the results and can't thank the Enigma
                    team enough for their tireless dedication and creativity.
                    Our collaboration has been a game-changer for Wragby
                    Business Solutions, and we wholeheartedly recommend Enigma
                    Digital to anyone seeking a top-notch digital partner!
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/quickx/quickx-client-image.webp" alt="QuickX client image"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                        Akin Banuso,
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        CEO, Wragby Business Solutions
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* ====================== Client Section END ======================== */}

          {/* ========================== Next Project =========================== */}
          <div className={styles.desktopSlider}>
            <ProjectSlider currentProjectLink="quickx-crypto-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/certvault-case-study">
                  <h1>Certvault</h1>
                </Link>
              </div>
            </div>
          </div>

          {/* ================ Next Project Mobile ============================== */}

          {/* ======================== Footer ====================== */}
          <section className="desktop-footer">
            <Footer />
          </section>

          <section className="mobile-footer">
            <FooterMobile />
          </section>
          {/* ======================== Footer END ====================== */}
        </div>
      </main>
    </>
  );
}