import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/patra.module.css";
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

export default function patra() {

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
        delay: 3.6,
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
        delay: 3.7,
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
        delay: 4.2,
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
        start: "top top",
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
      title="Catapulting Patra's CX  Through UX - Case Study | Enigma"
      description="Dive into our Strategy, UX Planning, UI Design apporach, and the remarkable results we deliverd for Patra Corp, by building a real time reporting dashboard for their clients."
      openGraph={{
        url: "https://weareenigma.com/patra-saas-insurtech-case-study",
        title: "Catapulting Patra's CX  Through UX - Case Study | Enigma",
        description:
          "Dive into our Strategy, UX Planning, UI Design apporach, and the remarkable results we deliverd for Patra Corp, by building a real time reporting dashboard for their clients.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-patra.png",
                    width: 1200,
                    height: 630,
                    alt: "Patra Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
      }}

      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Catapulting Patra's CX  Through UX - Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Dive into our Strategy, UX Planning, UI Design apporach, and the remarkable results we deliverd for Patra Corp, by building a real time reporting dashboard for their clients."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-patra.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/patra-saas-insurtech-case-study" />
        <link rel="alternate" href="https://weareenigma.com/patra-saas-insurtech-case-study" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/patra-saas-insurtech-case-study"
                },
                "name": "Catapulting Patra's CX  Through UX - Case Study | Enigma",
                "description": "Dive into our Strategy, UX Planning, UI Design apporach, and the remarkable results we deliverd for Patra Corp, by building a real time reporting dashboard for their clients.",
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

      <PageLoader text="Patra SAAS Case Study" />

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
                  data-cursor-color="#436AD6"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://www.patracorp.com/" target="_blank" className={styles.Link}>
                    <button aria-label="link button">
                    patracorp.com
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
                Client Reporting Dashboard for BPO Services
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                  SaaS
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
                  src="/assets/casestudies/patra/patra-case-study-image-1.webp"
                  alt="Patra Case Study Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#436AD6"
                  data-cursor-text="Patra"
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
                    Patra is a global leader in the insurance industry, specializing in delivering business process outsourcing services. With a focus on insurance processes and insurtech solutions, Patra drives profitability and new customer acquisition across the sector. Their commitment to leveraging both human expertise and cutting-edge technology has positioned them as a trusted partner for insurance firms worldwide.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    UX Planning   
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    UI Desing
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
                  src="/assets/casestudies/patra/patra-case-study-image-2.webp"
                  alt="Patra Case Study Image 2"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#436AD6"
                  data-cursor-text="Patra"
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
                  {/* <h4 className={styles.h4} data-jelly>
                    The founding team at Patronum was on a quest to create a
                    brand and online presence that would turn heads and drop
                    jaws faster than a cheetah chasing its prey.
                  </h4> */}
                  <p data-jelly>
                    In an era dominated by digital transformation, Patra's clients were still navigating the cumbersome process of manual report management. The reliance on Excel sheets for disseminating reports, costs, and invoices posed significant challenges. Not only was this method time-consuming, but it also lacked the real-time transparency that modern businesses crave. Clients were often left in the dark about their expenditures with Patra, having to wait for monthly reports from their account managers to gain clarity on their spending across various service verticals.
                  </p>
                  <p data-jelly>
                    <strong>
                      This traditional approach had multiple pain points:
                    </strong>
                  </p>
                  <p data-jelly>
                    <strong>Lack of Real-time Insights: </strong> Clients had no immediate access to their spending data. This delay hindered their ability to make timely decisions, impacting their operational efficiency.
                  </p>
                  <p data-jelly>
                  <strong>
                  Fragmented Data Sources: </strong> With services spanning policy checking, policy printing & delivery, customer support, and other insurance back-office tasks, the data was scattered across multiple Excel sheets. This fragmentation made it challenging for clients to get a holistic view of their engagement with Patra.
                  </p>
                  <p data-jelly>
                  <strong>
                    Operational Inefficiencies: </strong> The manual process of collating, sending, and then interpreting these Excel reports was labor-intensive. It consumed valuable time that could have been better utilized in strategic decision-making.
                  </p>
                  <p data-jelly>
                <strong>Potential for Errors:</strong> Manual data entry and report generation always comes with the risk of human errors. Any discrepancies in the reports could lead to misunderstandings and potential conflicts.
                  </p>
                  <p data-jelly>
                    Patra was keen on transitioning from this archaic system to a more streamlined, digital solution. The goal was clear: to design a client reporting dashboard that would not only address these challenges but also position Patra as a forward-thinking leader in the insurance BPO sector. The stakes were high, and the timelines, even tighter.
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
                    src="/assets/casestudies/patra/patra-case-study-image-5.webp"
                    alt="Patra Case Study Image 5"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-6.webp"
                    alt="Patra Case Study Image 6"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-7.webp"
                    alt="Patra Case Study Image 7"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-8.webp"
                    alt="Patra Case Study Image 8"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    Our first step was to immerse ourselves in the world of Patra's clients. We needed to understand their pain points, their expectations, and the kind of data that was crucial for their decision-making processes. Through a series of consultations and brainstorming sessions, we mapped out the user journey, identifying key touchpoints and data retrieval points.
                  </p>
                  <p data-jelly>
                    For the UI design, clarity was our mantra. We aimed for a clean, uncluttered interface where data visualization took center stage. Interactive charts, real-time counters, and color-coded alerts were integrated, ensuring that users could grasp the status and updates at a mere glance.
                  </p>
                  <p data-jelly>
                    The UX planning was all about efficiency. We streamlined the data retrieval process, ensuring that the most sought-after information was readily available. Customizable dashboards were introduced, allowing users to tailor their view based on their unique needs. Seamless navigation paths were designed, ensuring that even a first-time user could navigate the dashboard with ease.
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
                    src="/assets/casestudies/patra/patra-case-study-image-9.webp"
                    alt="Patra Case Study Image 9"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-10.webp"
                    alt="Patra Case Study Image 10"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-11.webp"
                    alt="Patra Case Study Image 11"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    src="/assets/casestudies/patra/patra-case-study-image-12.webp"
                    alt="Patra Case Study Image 12"
                    loading="lazy"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
            <div className={styles.fontImagebox}>
              <img
                src="/assets/casestudies/patronum/patronum-casestudy-font-desktop.webp"
                alt="Patra Case study fonts Desktop Image"
                loading="lazy"
                className={styles.desktopFont}
                id="fonts-dark-casestudy"
              />
              <img
                src="/assets/casestudies/patronum/patronum-casestudy-font-mobile.webp"
                alt="Patra Case study fonts Mobile Image"
                loading="lazy"
                className={styles.mobileFont}
                id="fonts-dark-casestudy"
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}


          {/* ====================== COLORS Section ==================== */}

          <section className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h2 className={styles.h2} >Colours</h2>
            </div>
            <div className={styles.colorBox}>
              <div className={styles.colorBoxHeadingBackground}>
                <h1 data-speed="1.5">
                  Colour <br /> Palette
                </h1>
              </div>
            </div>

            <div
              className={styles.colorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.colorOne} id="line">
                  Hex: #436AD6
                </li>
                <li className={styles.colorTwo} id="line">
                  Hex: #00CA72
                </li>
                <li className={styles.colorThree} id="line">
                  Hex: #FFCC00
                </li>
                <li className={styles.colorFour} id="line">
                  Hex: #FB275D
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>100% Transparency with <br /> Real-time Data & Insights</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/patra/patra.webm"
                  autoPlay
                  loop
                  muted
                  alt='patronum video'
                />
              </div>
            </div>
          </section>
          
          {/* ====================== Video Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>UX + Tech</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    When it came to UX, we put ourselves in the client's shoes. We felt their pain points and frustrations trying to access and make sense of data. It was clear they needed more than just a functional dashboard - they needed one that felt intuitive. We meticulously planned everything - from how data visualization tools were placed to the flow of information. 
                  </p>
                  <p data-jelly>
                    But the real magic happened when we started building the front-end. This is where the dashboard came alive visually! We leveraged the power of ReactJS to make it dynamic and responsive. No more clunky and static data dashboards. To take it to the next level, we integrated Tailwind, a utility-first CSS framework. Tailwind was like a secret weapon, allowing us to rapidly develop the UI without compromising aesthetics. Suddenly, making it beautiful was quick and easy.
                  </p>
                  <p data-jelly>
                    The end result? A dashboard that was not only gorgeous to look at, but also wicked fast.
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
                    src="/assets/casestudies/patra/patra-case-study-image-3.webp"
                    alt="Patra Case Study Image 3"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                    The Client Reporting Dashboard was unveiled to resounding success. Clients lauded the intuitive design, the customizable features, and the real-time data access. The fusion of our UX planning with the cutting-edge tech stack ensured that Patra's client reporting dashboard was more than just a tool; it was a transformative solution. Clients could now access real-time updates, understand their expenditures across various service verticals, and make informed decisions, all through a platform that epitomized efficiency and speed.
                  </p>
                  <p data-jelly>
                    The dashboard not only strengthened Patra's position as a leader in insurance BPO services but also showcased their commitment to leveraging technology for client benefit. The project, completed under tight timelines, set a new benchmark for insurtech solutions, proving that with the right strategy and execution, challenges can be transformed into opportunities.
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
                    src="/assets/casestudies/patra/patra-case-study-image-4.webp"
                    alt="Patra Case Study Image 4"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#436AD6"
                    data-cursor-text="Patra"
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
                      Enigma Digital's prowess in UI design, UX planning, and front-end development has truly set a new standard. The Client Reporting Dashboard is not just a tool; it's a game-changer. It has empowered our clients with real-time insights, leading to faster decision-making and enhanced operational efficiency. The team's dedication, especially under tight timelines, is commendable. A big shout-out to Enigma Digital for making this project a resounding success!
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/certvault/client-image.webp" alt="Patra Client Image"/>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                      Tony Li
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        CTO, Patracorp
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
            <ProjectSlider currentProjectLink="patra-saas-insurtech-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}

          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/patronum-saas-case-study">
                  <h1>Patronum</h1>
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
