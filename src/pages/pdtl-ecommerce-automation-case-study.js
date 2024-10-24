import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/pdtl.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Image from "next/image";
import ProjectSlider from "@/components/CaseStudies/ProjectSlider";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";
import ProjectNextBox from "../components/CaseStudies/ProjectNextBox";
import ProjectLazyVideo from "../components/CaseStudies/ProjectLazyVideo";

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

export default function pdtl() {

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
      title="PDTL Ecommerce & Marketing Automation Case Study | Enigma"
      description="Driving business succeess for a logistics company through marketing automation, neatly integrated with an ecommerce website for ease of maintenance."
      openGraph={{
        url: "https://weareenigma.com/pdtl-ecommerce-automation-case-study",
        title: "PDTL Ecommerce & Marketing Automation Case Study | Enigma",
        description:
          "Driving business succeess for a logistics company through marketing automation, neatly integrated with an ecommerce website for ease of maintenance.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-pdtl.png",
                    width: 1200,
                    height: 630,
                    alt: "PDTL Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
      }}
    
      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "PDTL Ecommerce & Marketing Automation Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Driving business succeess for a logistics company through marketing automation, neatly integrated with an ecommerce website for ease of maintenance."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-pdtl.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/pdtl-ecommerce-automation-case-study" />
        <link rel="alternate" href="https://weareenigma.com/pdtl-ecommerce-automation-case-study" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/pdtl-ecommerce-automation-case-study"
                },
                "name": "PDTL Ecommerce & Marketing Automation Case Study | Enigma",
                "description": "Driving business succeess for a logistics company through marketing automation, neatly integrated with an ecommerce website for ease of maintenance.",
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

      <PageLoader text="PDTL Case Study" />

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
                  data-cursor-color="#234BA7"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://www.ptllgv.co.uk/" target="_blank" className={styles.Link}>
                  <button aria-label="link button">
                    pttlgv.co.uk
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
                  Driving Digital Success
                  <br /> for a Leading Logistics Firm
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <p className={styles.work} id="patroSub">
                    LOGISTICS
                </p>
                <p className={styles.year} id="patroSub">
                    2022
                </p>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/pdtl/pdtl-case-study-image-1.webp"
                  alt="PDTL Case Study Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#234BA7"
                  data-cursor-text="PDTL"
                />
              </div>
            </div>
          </section>
          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== Third Section ============================ */}
          <section className={styles.thirdSection}>
            <div className={styles.thirdSectionContent}>
              <div className={styles.thirdSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE CLIENT</h2>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <p className={styles.h4} data-jelly>
                    Manchester, the bustling heart of the UK, is home to a
                    thriving logistics company that prides itself on providing
                    top-notch services to its clientele. To stay ahead in an
                    increasingly competitive market, the company recognized the
                    need to revamp its online presence to better reflect its
                    innovative approach and unwavering commitment to excellence.
                    Enigma was recommended to the client and was tasked with
                    delivering a smashing website transformation that would
                    leave a lasting impression.
                  </p>
                </div>

                <div className={styles.buttonBox}>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
                  </h3>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h3>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Development
                  </h3>
                </div>
              </div>
            </div>
          </section>
          {/* ====================== Third Section END ======================== */}

          {/* ====================== Parallax Image =========================== */}
          <section className={styles.imageSection}>
            <div className={styles.imageBox} id="image-container">
              <img
                    src="/assets/casestudies/pdtl/pdtl-case-study-image-2.webp"
                    alt="PDTL Case Study Image 2"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
              />
            </div>
          </section>
          {/* ====================== Parallax Image  END ====================== */}


          {/* ====================== Third Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE ASK</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4} data-jelly>
                    Pennine clear-cut objectives: to create a visually
                    appealing, user-friendly, and engaging website that would
                    not only showcase the company's wide range of services but
                    also facilitate seamless driver training course booking and
                    online payments. The client's specific requirements
                    included:
                  </h4>
                  <p data-jelly>
                  A modern and visually engaging design that would exude
                    professionalism and innovation, reflecting the company's
                    brand identity
                  </p>
                  <p data-jelly>
                  A user-centric navigation structure that would allow for
                    easy browsing and access to essential information about the
                    company's services
                  </p>
                  <p data-jelly>
                    A responsive design that would cater to users on various
                    devices, ensuring a consistent and enjoyable experience
                  </p>
                  <p data-jelly>
                    Integration of an intuitive booking system for driver
                    training courses, complete with online payment functionality
                  </p>
                  <p data-jelly>
                    An SEO-optimized website architecture to enhance search
                    engine visibility and drive organic traffic
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-1.webp"
                    alt="PDTL case study showcase image 1"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-2.webp"
                    alt="PDTL case study showcase image 2"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-3.webp"
                    alt="PDTL case study showcase image 3"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-4.webp"
                    alt="PDTL case study showcase image 4"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                <h2 className={styles.h3} data-jelly>Our Approach</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                <h4 className={styles.h4}>
                    The team at Enigma tackled the project with precision,
                    adopting a three-pronged approach:
                </h4>
                  <p data-jelly>
                    <strong>A. Research & Collaboration: </strong>
                    To ensure a deep understanding of the client's business,
                    Enigma engaged in thorough market research and maintained
                    open lines of communication with the logistics company.
                    After all, what's more British than a good ol' chinwag?
                  </p>
                  <p data-jelly>
                    <strong>B. Design & Development:  </strong>
                    Enigma's design team crafted visually appealing wireframes,
                    incorporating the logistics company's branding and a touch
                    of British flair. The development team then brought the
                    designs to life using the latest web technologies.
                  </p>
                  <p data-jelly>
                    <strong>C. Optimization & Launch: </strong>
                    Before going live, Enigma performed rigorous testing to
                    ensure a seamless user experience across devices. Finally,
                    it was time to unleash the new website upon the unsuspecting
                    digital landscape.
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-5.webp"
                    alt="PDTL case study showcase image 5"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-6.webp"
                    alt="PDTL case study showcase image 6"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-7.webp"
                    alt="PDTL case study showcase image 7"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-showcase-8.webp"
                    alt="PDTL case study showcase image 8"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
              <h3 className={styles.h2} >Fonts</h3>
            </div>
            <div className={styles.pdtlfontImagebox}>
              <img src="/assets/casestudies/pdtl/pdtl-case-study-fonts-light.webp" loading="lazy" alt="PDTL Case Study Fonts Light" />
              <img src="/assets/casestudies/pdtl/pdtl-case-study-fonts-dark.webp" loading="lazy" alt="PDTL Case Study Fonts Dark" />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}


          {/* ====================== COLORS Section ==================== */}

          <section className={styles.pdtlcolorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h3 className={styles.h2} >Colours</h3>
            </div>
            <div className={styles.pdtlcolorBox}>
              <div className={styles.pdtlcolorBoxHeadingBackground}>
                <p data-speed="1.5">
                    Colour Palette
                </p>
              </div>
            </div>

            <div
              className={styles.pdtlcolorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.pdtlcolorOne} id="line">
                  #000000
                </li>
                <li className={styles.pdtlcolorTwo} id="line">
                  #19073B
                </li>
                <li className={styles.pdtlcolorThree} id="line">
                  #BE1E2D
                </li>
                <li className={styles.pdtlcolorFour} id="line">
                  #0060AC
                </li>
                <li className={styles.pdtlcolorFive} id="line">
                  #FFFFFF
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h3 className={styles.videoH2}>PDTL Driver Training Institute</h3>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <ProjectLazyVideo
                  srcWebm="/assets/casestudies/pdtl/pdtl.webm"
                  srcMp4="/assets/casestudies/pdtl/pdtl.mp4"
                  poster="/assets/casestudies/pdtl/pdtl-poster.webp"
                  title="pdtl-casestudy-video"
                />
              </div>
            </div>
          </section>
          
          {/* ====================== Video Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>Tech Stack</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                    <h4 className={styles.h4}>
                        Our toolkit for this project included HTML, CSS, JS, jQuery,
                        WordPress, and WooCommerce. This combination of technologies
                        was chosen for several reasons:
                    </h4>
                    <p data-jelly>
                        HTML and CSS provided a solid foundation for a responsive
                        and visually striking website
                    </p>
                    <p data-jelly>
                        JavaScript (JS) allowed for dynamic interactivity, making
                        the website engaging and user-friendly
                    </p>
                    <p data-jelly>
                        jQuery, a popular JS library, simplified the implementation
                        of complex features and ensured consistency across devices
                    </p>
                    <p data-jelly>
                        WooCommerce, a powerful e-commerce solution, was seamlessly
                        integrated for driver training course booking and online
                        payment processing. Its seamless integration with WordPress,
                        the content management system used for PDTL's website,
                        cost-effectiveness, customisability, and vast plugin
                        ecosystem made it the obvious choice for this project.
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-image-3.webp"
                    alt="PDTL Case Study Image 3"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
                  />
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second  END ====================== */}

          {/* ====================== FOURTH Section ============================ */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h2 className={styles.h3} data-jelly>THE RESULT</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                    <h4 className={styles.h4}>
                        The finished product was a website that not only looked the
                        part but performed like a well-tuned lorry, delivering
                        exceptional user experiences and tangible business results:
                    </h4>
                    <p data-jelly>
                        A significant increase in website traffic and user
                        engagement, thanks in part to the site's captivating design,
                        streamlined navigation, and engaging content
                    </p>
                    <p data-jelly>
                        A boost in online bookings for driver training courses,
                        facilitated by the seamless integration of WooCommerce for
                        secure and straightforward transactions
                    </p>
                    <p data-jelly>
                        An uptick in search engine rankings, driving organic traffic
                        and cementing PDTL's online presence
                    </p>
                    <p data-jelly>
                        Positive feedback from clients and partners, who praised the
                        website's ease of use, informative content, and the
                        occasional dash of British humour.
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
                    src="/assets/casestudies/pdtl/pdtl-case-study-image-4.webp"
                    alt="PDTL Case Study Image 4"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    Enigma has truly knocked it out of the park! Their
                    expertise, creativity, and dedication have transformed our
                    online presence, capturing the essence of our brand and
                    injecting just the right amount of British charm. The
                    results speak for themselves: increased traffic, more
                    bookings, and a website we're proud to call our own. Enigma
                    is the bee's knees, and we couldn't be happier with their
                    stellar work!
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/pdtl/pdtl-client-image.webp" alt="PDTL Client Image"/>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <p>
                        Jared Bullock
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Director, PDTL
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* ====================== Client Section END ======================== */}

          {/* ========================== Next Project =========================== */}
          <div className={styles.desktopSlider}>
            <ProjectSlider currentProjectLink="pdtl-ecommerce-automation-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}

          {/* ================ Next Project Mobile ============================== */}

          <ProjectNextBox text={"Wragby"} link={"/wragby-solutions-case-study"} />

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