import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/kedar.module.css";
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

export default function kedarkala() {

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

  return (
    <>

      <NextSeo
        title="Kedarkala Web Design, UX & Branding Case Study | Enigma"
        description="Dive into Kedarkala's transformation with Enigma's branding and Web Design expertise. Discover our approach, tech stack, and the stunning results achieved."
        openGraph={{
          url: "https://weareenigma.com/kedarkala-portfolio-website-case-study",
          title:
            "Kedarkala Web Design, UX & Branding Case Study | Enigma",
          description:
            "Dive into Kedarkala's transformation with Enigma's branding and Web Design expertise. Discover our approach, tech stack, and the stunning results achieved.",
            images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-kedarkala.png",
                    width: 1200,
                    height: 630,
                    alt: "Kedarkala Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
      
              additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Kedarkala Web Design, UX & Branding Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Dive into Kedarkala's transformation with Enigma's branding and Web Design expertise. Discover our approach, tech stack, and the stunning results achieved."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-kedarkala.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/kedarkala-portfolio-website-case-study" />
        <link rel="alternate" href="https://weareenigma.com/kedarkala-portfolio-website-case-study" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/kedarkala-portfolio-website-case-study"
                },
                "name": "Kedarkala Web Design, UX & Branding Case Study | Enigma",
                "description": "Dive into Kedarkala's transformation with Enigma's branding and Web Design expertise. Discover our approach, tech stack, and the stunning results achieved.",
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

      <Cursor isGelly={true}/>

      <PageLoader text="Kedarkala Case Study" />

      <main>
          <Header />

        <div className={styles.Main}>
          
  {/*Section 1  */}
          <section
            className={styles.HeroSection}
            data-cursor-text=""
            data-cursor-size="10px">
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-color="#000"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://phpstack-156292-2479564.cloudwaysapps.com/" target="_blank" className={styles.Link}>
                    <button aria-label="link button">
                    kedarkala.com
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
                    Kedarkala, a luxury <br /> interior design studio
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <p className={styles.work} id="patroSub">
                    INTERIOR DESIGN
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
                  src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-1.webp"
                  alt="Kedarkala Casestudy-Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0F1014"
                  data-cursor-text="Kedarkala"
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
                  <p className={styles.h4} data-jelly>
                    Kedarkala, an award-winning and highly-regarded interior
                    design studio in India, has long been known for its
                    exceptional designs and meticulous attention to detail. As
                    the demand for high-quality interior design services
                    continues to grow, Kedarkala sought to establish a robust
                    online presence that reflects its stellar reputation and
                    showcases its stunning portfolio.
                  </p>
                </div>

                <div className={styles.buttonBox}>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h3>
                  <h3 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
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
                src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-2.webp"
                alt="Kedarkala Casestudy-Image 2"
                loading="lazy"
                className={styles.img}
                id="img"
                data-cursor-size="100px"
                data-cursor-color="#0F1014"
                data-cursor-text="Kedarkala"
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
                    Kedarkala's existing branding and website did not accurately
                    represent their brand value, nor did it effectively resonate
                    their extensive design portfolio.
                  </h4>
                  <p data-jelly>
                    The key challenges - First, Kedarkala's existing brand
                    identity was disconnected from the company's values and did
                    not accurately represent the level of sophistication and
                    elegance synonymous with their designs.
                  </p>
                  <p data-jelly>
                    The existing website's visual design failed to capture the
                    essence of Kedarkala's work, which is characterized by its
                    creativity, sophistication, and innovation. A complete
                    design overhaul was necessary to captivate and engage
                    visitors. The website's structure made it difficult for
                    users to navigate and find the information they were
                    seeking. A more intuitive architecture was necessary to
                    enhance the user experience and promote visitor engagement.
                  </p>
                  <p data-jelly>
                    Moreover, Kedarkala's website did not perform well on mobile
                    devices, which was detrimental to their online visibility
                    and user satisfaction. The website's loading times were
                    suboptimal, which negatively impacted user experience and
                    contributed to a high bounce rate. Improving site
                    performance was crucial to retain visitors and converting
                    them into potential clients.
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-3.webp"
                    alt="Kedarkala Casestudy-Image 3"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-4.webp"
                    alt="Kedarkala Casestudy-Image 4"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-5.webp"
                    alt="Kedarkala Casestudy-Image 5"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-6.webp"
                    alt="Kedarkala Casestudy-Image 6"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                <h2 className={styles.h3} data-jelly>Our Approach</h2>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4}>
                    Understanding the importance of a cohesive brand identity
                    and a seamless user experience, Enigma adopted a holistic
                    approach to Kedarkala's digital transformation. This
                    approach included:
                  </h4>
                  <p data-jelly>
                    <strong>A. Collaborative Discovery: </strong>We initiated a
                    series of workshops and brainstorming sessions with
                    Kedarkala's team to gain a deep understanding of their brand
                    values, vision, and design philosophy. This collaborative
                    process laid the foundation for a new brand identity and
                    website design that accurately represented Kedarkala's
                    essence.
                  </p>
                  <p data-jelly>
                    <strong>B. Immersive Storytelling: </strong>
                    To make the website engaging and fun, Enigma focused on
                    crafting an immersive narrative that showcases Kedarkala's
                    unique design approach and commitment to excellence. This
                    storytelling approach allowed users to feel connected to the
                    brand and encouraged them to explore the website further.
                  </p>
                  <p data-jelly>
                    <strong>C. Intuitive Information Architecture: </strong>
                    We restructured the website's information architecture,
                    ensuring that visitors could effortlessly navigate the site
                    and find the content they were looking for. This new
                    architecture also allowed Kedarkala to effectively showcase
                    their diverse portfolio, making it a focal point of the
                    website.
                  </p>
                  <p data-jelly>
                    <strong>D. Built with End User Experience in mind: </strong>
                    Recognizing the importance of mobile devices in today's
                    digital landscape, Enigma developed a fully responsive
                    website that performed exceptionally across various devices
                    and screen sizes, and a no-break experience for the entire
                    website while moving from one page to another, ensuring a
                    seamless user experience for all visitors.
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-7.webp"
                    alt="Kedarkala Casestudy-Image 7"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-8.webp"
                    alt="Kedarkala Casestudy-Image 8"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-9.webp"
                    alt="Kedarkala Casestudy-Image 9"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-10.webp"
                    alt="Kedarkala Casestudy Image 10"
                    loading="lazy"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
          <section className={styles.kedarfontSection}>
            <div className={styles.kedarfontHeading}>
              <h3 className={styles.h2} >Typography</h3>
            </div>
            <div className={styles.kedarfontImagebox}>
              <img
                src="/assets/casestudies/kedarkala/kedarkala-casestudy-font-image-1.webp"
                alt="Kedarkala Casestudy Fonts Image 1"
                className={styles.kedartypoImgFirst}
              />
              <img
                src="/assets/casestudies/kedarkala/kedarkala-casestudy-font-image-2.webp"
                alt="Kedarkala Casestudy Fonts Image 1"
                id="kedar-font-img"
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ====================*/}

          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h3 className={styles.videoH2}>Kedarkala<br/>Interior Design Studio</h3>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <ProjectLazyVideo
                  srcWebm="/assets/casestudies/kedarkala/kedarkala.webm"
                  srcMp4="/assets/casestudies/kedarkala/kedarkala.mp4"
                  poster="/assets/casestudies/kedarkala/kedarkala-poster.webp"
                  title="kedarkala-portfolio-video"
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
                  <p data-jelly>
                    Enigma utilized a robust technology stack to create a
                    cutting-edge website that would not only look stunning but
                    also perform optimally. The chosen technologies included
                    HTML5, CSS3, JavaScript, jQuery & GSAP.
                  </p>
                  <p data-jelly>
                    HTML and CSS were used to create the structure and layout of
                    the site. Our team of coding wizards crafted clean and
                    semantic code that was both search engine friendly and
                    easily maintainable. JavaScript & GSAP was employed to
                    create interactive elements and enhance the website's
                    overall functionality, resulting in a more dynamic and
                    engaging user experience. This choice allowed for
                    captivating motion effects that kept users engaged and
                    immersed in Kedarkala's narrative.
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
                    src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-11.webp"
                    alt="Kedarkala Casestudy-Image 11"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
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
                  <p data-jelly>
                    The collaboration between Enigma and Kedarkala yielded a
                    visually stunning and highly functional website that
                    accurately represented Kedarkala's brand identity and
                    showcased their impressive portfolio. The new brand identity
                    and website design effectively conveyed Kedarkala's
                    sophistication and commitment to excellence, solidifying
                    their reputation as India's best interior design company.
                    The revamped information architecture and intuitive
                    navigation resulted in a significant increase in user
                    engagement and overall satisfaction.
                  </p>
                  <p data-jelly>
                    The combination of engaging storytelling, captivating
                    design, and seamless user experience with improved mobile
                    responsiveness and search engine optimization, led to a
                    surge in organic traffic and increased visibility online
                    which further contributed to an increase in leads and
                    conversion rates for Kedarkala.
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
                  src="/assets/casestudies/kedarkala/kedarkala-casestudy-image-12.webp"
                  alt="Kedarkala Casestudy-Image 12"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0F1014"
                  data-cursor-text="Kedarkala"
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
                        We couldn't be more thrilled with the outcome of our
                        collaboration with Enigma. Their unconventional approach and
                        attention to detail allowed them to create a website that
                        truly reflects our brand's essence and showcases our work in
                        the best possible light. The new website has not only
                        improved our online presence but has also significantly
                        increased our leads and conversions. We highly recommend
                        Enigma to any business looking for a top-notch branding and
                        website development partner.
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/kedarkala/kedarkala-client-image.webp"
                          alt="client img">
                    </img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <p>
                        Shraddha Kasaudhan
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Founder & CEO, Kedarkala Design Studios
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
            <ProjectSlider currentProjectLink="kedarkala-portfolio-website-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <ProjectNextBox text={"GCM"} link={"/gcm-phygital-shopping-case-study"} />

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
