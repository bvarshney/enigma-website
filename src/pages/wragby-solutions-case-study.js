import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "../styles/wragby.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Image from "next/image";
import ProjectSlider from "@/components/CaseStudies/ProjectSlider";
import PageLoader from "@/components/pageLoader";

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

export default function wragby() {

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
        start: "-150 top",
      },
    });
    tl.fromTo(
      "#line",
      { opacity: 0, scale: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      }
    );
  });

  return (
    <>

    <NextSeo
      title="Wragby Solutions: A Case Study in Digital Innovation"
      description="Explore the Wragby case study showcasing Enigma's expertise in branding, UI/UX design, and front-end development for exceptional results."
      canonical="https://weareenigma.com/wragby-solutions-case-study"
      openGraph={{
        url: "https://weareenigma.com/wragby-solutions-case-study",
        title: "Wragby Solutions: A Case Study in Digital Innovation",
        description:
          "Explore the Wragby case study showcasing Enigma's expertise in branding, UI/UX design, and front-end development for exceptional results.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-wragby.png",
                    width: 1200,
                    height: 630,
                    alt: "Wragby Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
      }}
    />    

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Wragby Solutions Case Study" />

      <main>
      
        <Header />

        <div className={styles.Main}>
          
{/*Section 1  */}
<section
            className={styles.HeroSection}>
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-color="#E30B25"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://wragbysolutions.com" target="_blank" className={styles.Link}>
                  <button aria-label="link button">
                        wragbysolutions.com   
                    <span className={styles.linkSvg}>
                      <Image
                        width={20}
                        height={20}
                        src="/assets/casestudies/Vector.svg"
                        alt="Svg"
                        id="case-study-arrow"
                        loading="lazy"
                      />
                    </span>
                    </button>
                  </Link>
                </div>
                <h1 id="patro">
                    Wragby Business <br /> Solutions    
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                    IT, SAAS
                </h5>
                <h5 className={styles.year} id="patroSub">
                  2022
                </h5>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                    src="/assets/casestudies/wragby/wragby-case-study-image-1.webp"
                    alt="wragby case study image 1"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#E30B25"
                    data-cursor-text="Wragby"
                    loading="lazy"
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
                    Wragby is a titan in the Nigerian technology industry. They
                    are Microsoft's 1st Azure Managed Service Provider in
                    Sub-Saharan Africa. Wragby's mission is to revolutionize the
                    African tech scene by delivering innovative, jaw-dropping
                    digital transformation solutions.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    UI/UX Design
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Development
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
                  src="/assets/casestudies/wragby/wragby-case-study-image-2.webp"
                  alt="wragby case study image 2"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#E30B25"
                  data-cursor-text="Wragby"
                  loading="lazy"
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
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-1.webp"
                    alt="Wragby casestudy showcase 1"
                    data-cursor-color="#EE384E"
                    data-cursor-text="Illustration"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-2.webp"
                    alt="Wragby casestudy showcase 2"
                    data-cursor-color="#0A489B"
                    data-cursor-text="Logo"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
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
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-3.webp"
                    alt="Wragby casestudy showcase 3"
                    data-cursor-color="#EE3C50"
                    data-cursor-text="Illustration"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-4.webp"
                    alt="Wragby casestudy showcase 4"
                    data-cursor-color="#3F86E4"
                    data-cursor-text="Logo Pattern"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
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
                  <p data-jelly>
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
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-5.webp"
                    alt="Wragby casestudy showcase 5"
                    data-cursor-color="#EE384E"
                    data-cursor-text="Illustration"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-6.webp"
                    alt="Wragby casestudy showcase 6"
                    data-cursor-color="#0A489B"
                    data-cursor-text="Logo"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
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
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-7.webp"
                    alt="Wragby casestudy showcase 7"
                    data-cursor-color="#EE3C50"
                    data-cursor-text="Illustration"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className={styles.secondLogoBox}>
                <div className={styles.imageContainer} id="image-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/wragby/wragby-case-study-showcase-8.webp"
                    alt="Wragby casestudy showcase 8"
                    data-cursor-color="#3F86E4"
                    data-cursor-text="Logo Pattern"
                    data-cursor-size="120px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                    loading="lazy"
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
            <div className={styles.wragbyfontImagebox}>
              <img
                src="/assets/casestudies/wragby/wragby-typography-desktop.webp"
                alt="Wragby font image"
                loading="lazy"
                className={styles.desktopFont}
              />
              <img
                src="/assets/casestudies/wragby/wragby-typography-mobile.webp"
                alt="Wragby font image"
                loading="lazy"
                className={styles.mobileFont}
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}


          {/* ====================== COLORS Section ==================== */}

          <section className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h2 className={styles.h2} >Colors</h2>
            </div>
            <div className={styles.colorBox}>
              <div className={styles.colorBoxHeadingBackground}>
                <h1 data-speed="1.5">
                  Colour Palette
                </h1>
              </div>
            </div>

            <div
              className={styles.wragbycolorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.wragbycolorOne} id="line">
                  #E30B25
                </li>
                <li className={styles.wragbycolorTwo} id="line">
                  #2C5ED1
                </li>
                <li className={styles.wragbycolorThree} id="line">
                  #FFFFFF
                </li>
                <li className={styles.wragbycolorFour} id="line">
                  #E7EDEF
                </li>
                <li className={styles.wragbycolorFive} id="line">
                  #151515
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>The African <br /> Technology Behemoth</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                    src="/assets/casestudies/wragby/wragby.webm"
                    autoPlay
                    loop
                    muted
                    alt='wragby video'
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
                    src="/assets/casestudies/wragby/wragby-case-study-image-3.webp"
                    alt="wragby case study image 3"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#E30B25"
                    data-cursor-text="Wragby"
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
                    src="/assets/casestudies/wragby/wragby-case-study-image-4.webp"
                    alt="wragby case study image 4"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#E30B25"
                    data-cursor-text="Wragby"
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
                  <img src="/assets/casestudies/wragby/wragby-client-image.webp" alt="Client Image"></img>
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
            <ProjectSlider currentProjectLink="wragby-solutions-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/patra-saas-insurtech-case-study">
                  <h1>Patra</h1>
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
