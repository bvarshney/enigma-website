import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "../styles/dharan.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ProjectSlider from "../components/CaseStudies/ProjectSlider";
import Image from "next/image";
import PageLoader from "../components/pageLoader";
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

export default function dharan() {

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
              title="Dharan E-Commerce Design & Development Case Study | Enigma"
              description="Discover Dharan's journey with Enigma, from traditional hand-block-printed clothing to a compelling online e-commerce presence. Read the transformation Story"
              openGraph={{
                url: "https://weareenigma.com/dharan-ecommerce-case-study/",
                title: "Dharan E-Commerce Design & Development Case Study | Enigma",
                description:
                  "Discover Dharan's journey with Enigma, from traditional hand-block-printed clothing to a compelling online e-commerce presence. Read the transformation Story",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-dharan.png",
                    width: 1200,
                    height: 630,
                    alt: "Dharan Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
            
              additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Dharan E-Commerce Design & Development Case Study | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Discover Dharan's journey with Enigma, from traditional hand-block-printed clothing to a compelling online e-commerce presence. Read the transformation Story"
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/portfolio-dharan.png"
                },
              ]}
            />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/dharan-ecommerce-case-study/" />
        <link rel="alternate" href="https://weareenigma.com/dharan-ecommerce-case-study/" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/dharan-ecommerce-case-study/"
                },
                "name": "Dharan E-Commerce Design & Development Case Study | Enigma",
                "description": "Discover Dharan's journey with Enigma, from traditional hand-block-printed clothing to a compelling online e-commerce presence. Read the transformation Story",
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

      <PageLoader text="Dharan Case Study" />

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
                  data-cursor-color="#FF8395"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://www.dharanclothing.com/" target="_blank" className={styles.Link}>
                  <button aria-label="link button">
                    dharanclothing.co.in
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
                    Dharan - Fashionable <br /> Ecommerce Website
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                    E-COMMERCE
                </h5>
                <h5 className={styles.year} id="patroSub">
                    2020
                </h5>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/dharan/dharan-casestudy-image-1.webp"
                  alt="Dharan Casestudy Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#FF8395"
                  data-cursor-text="Dharan"
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
                    Dharan, a renowned hand-block-printed clothing manufacturer
                    based in India, is known for its exquisite garments
                    featuring traditional designs, pastel shades, and intricate
                    craftsmanship. Despite having a loyal customer base, Dharan
                    struggled to translate its unique essence and charm into a
                    compelling online presence. The client was on the lookout
                    for a partner that would help them create a state-of-the-art
                    e-commerce website that would not only showcase Dharan's
                    magnificent products but also encapsulate the essence of
                    their brand.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    E-Commerce
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
                  src="/assets/casestudies/dharan/dharan-casestudy-image-2.webp"
                  alt="Dharan Casestudy Image 2"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#FF8395"
                  data-cursor-text="Dharan"
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
                    Dharan's existing website was plagued by several issues,
                    including outdated design, poor navigation, and a lacklustre
                    user experience.
                  </h4>
                  <p data-jelly>
                    The website failed to evoke the same feelings of beauty,
                    sophistication, and craftsmanship that Dharan's
                    hand-block-printed clothing offered. The team at Enigma was
                    tasked to design a website that reflects tradition,
                    craftsmanship, and quality as the key brand identifiers.
                  </p>
                  <p data-jelly>
                    The key challenge was to design & develop an engaging and
                    interactive platform that highlights the unique aspects of
                    Dharan's products, such as the traditional techniques,
                    intricate designs, and pastel color palette that is used in
                    traditional hand-block-printing. Next, we had to integrate
                    an e-commerce solution that streamlines the purchasing
                    process and ensures a secure, efficient, and hassle-free
                    experience for customers.
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-3.webp"
                    alt="Dharan Casestudy Image 3"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    loading="lazy"
                    height={1000}
                    src="/assets/casestudies/dharan/dharan-casestudy-image-4.webp"
                    alt="Dharan Casestudy Image 4"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-5.webp"
                    alt="Dharan Casestudy Image 5"
                    data-cursor-color="#FF8395"
                    loading="lazy"
                    data-cursor-text="Dharan"
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
                    loading="lazy"
                    height={1000}
                    src="/assets/casestudies/dharan/dharan-casestudy-image-6.webp"
                    alt="Dharan Casestudy Image 6"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    To address these challenges, Enigma adopted a groundbreaking
                    approach, which involved a meticulous blend of art and
                    technology, resulting in a website that was both visually
                    captivating and highly functional. Our team immersed
                    themselves in Dharan's history, design philosophy, and hand
                    block printing techniques to gain a comprehensive
                    understanding of the brand. This deep dive laid the
                    foundation for a website design that would effectively
                    embody Dharan's unique aesthetic.
                  </p>
                  <p data-jelly>
                    We then prioritized user experience, creating an intuitive
                    site layout that would guide visitors through the shopping
                    process with ease. The site was designed with a focus on
                    product discovery, enticing visitors to explore Dharan's
                    stunning collection. To create an engaging and immersive
                    experience, we integrated storytelling elements throughout
                    the website, sharing the history of Dharan's craftsmanship
                    and the journey behind each unique garment.
                  </p>
                  <p data-jelly>
                    Lastly, we drew inspiration from Dharan's clothing designs
                    and prints and incorporated pastel color schemes reflecting
                    the traditional hues used in Indian block printing and
                    intricate patterns throughout the website, evoking the
                    beauty and craftsmanship of the garments themselves.
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-7.webp"
                    alt="Dharan Casestudy Image 7"
                    loading="lazy"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-8.webp"
                    alt="Dharan Casestudy Image 8"
                    loading="lazy"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-9.webp"
                    alt="Dharan Casestudy Image 9"
                    loading="lazy"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    loading="lazy"
                    src="/assets/casestudies/dharan/dharan-casestudy-image-10.webp"
                    alt="Dharan Casestudy Image 10"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
            <div className={styles.dharanfontImagebox}>
              <img src="/assets/casestudies/dharan/dharan-casestudy-font.webp" loading="lazy" alt="dharan casestudy font image" />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}

          {/* ====================== COLORS Section ==================== */}

          <section className={styles.colorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h2 className={styles.h2} >Colours</h2>
            </div>
            <div className={styles.dharancolorMainBox}>
              <div className={styles.dharancolorBox}>
                <div className={styles.dharancolorBoxHeadingBackground}>
                  <h2 data-speed="1.3">
                    Colour <span className={styles.dharanpalette}>Palette</span>
                  </h2>
                </div>
              </div>

              <div
                className={styles.dharancolorBoxesSection}
                id="dark-mode-colors-casestudy">
                <ul>
                  <li className={styles.dharancolorOne} id="line">
                    #EB298E
                  </li>
                  <li className={styles.dharancolorTwo} id="line">
                    #48484B
                  </li>
                </ul>
              </div>
              <div className={styles.dharanmobileImg}>
                <img
                  src="/assets/casestudies/dharan/dharan-casestudy-mobile-image.webp"
                  alt="dharan casestudy mobile image"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>Dharan - Sustainable Faishon</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/dharan/dharan.webm"
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
                <h3 className={styles.h3} data-jelly>Tech Stack</h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                    <h4 className={styles.h4} data-jelly>
                        HTML, CSS, JS, jQuery, GSAP, and Woo-Commerce
                    </h4>
                    <p data-jelly>
                        Our decision to choose WooCommerce over other e-commerce
                        platforms including Shopify and Magento was driven by
                        several factors, including:
                    </p>
                    <p data-jelly>
                        <strong>Seamless integration with WordPress: </strong>As
                        Dharan's team was already familiar with wordpress and they
                        wanted their new website to be built on WordPress,
                        WooCommerce offered seamless integration and a unified
                        experience, enabling the team to manage both the website and
                        e-commerce functionalities effortlessly.
                    </p>
                    <p data-jelly>
                        <strong>Cost-effectiveness: </strong>WooCommerce, being an
                        open-source platform, is more cost-effective than Shopify
                        and Magento, especially for small to medium-sized businesses
                        like Dharan. This allowed Dharan to focus on other aspects
                        of their business without having to worry about hefty
                        platform fees.
                  </p>
                  <p data-jelly>
                        <strong>Flexibility and Customizability: </strong>
                        WooCommerce provides a high degree of flexibility and
                        customization options compared to Shopify and Magento. This
                        was essential for Dharan, as it allowed Enigma to create a
                        truly unique and tailor-made e-commerce experience that
                        aligned with the brand's aesthetics and requirements.
                  </p>
                  <p data-jelly>
                        <strong>Extensive Plugin Ecosystem: </strong>WooCommerce
                        boasts an extensive plugin ecosystem that can be leveraged
                        to add additional functionality and features to the
                        e-commerce platform. This enabled Enigma to easily integrate
                        various tools and plugins to enhance the shopping experience
                        and streamline operations for Dharan.
                  </p>
                  <p data-jelly>
                        <strong>Scalability: </strong>WooCommerce offered a scalable
                        solution that could grow alongside Dharan's business. As the
                        brand expands its product range and customer base, the
                        WooCommerce platform can be easily adapted to accommodate
                        this growth, ensuring a consistent and reliable e-commerce
                        experience.
                  </p>
                  <p data-jelly>
                        By leveraging this powerful technology stack, Enigma was
                        able to create a visually captivating, highly engaging, and
                        user-friendly e-commerce website that not only showcased
                        Dharan's exquisite hand block-printed clothing but also
                        encapsulated the essence of the brand.
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
                <figure className={styles.figure}>
                  <img
                    loading="lazy"
                    src="/assets/casestudies/dharan/dharan-casestudy-image-11.webp"
                    alt="Dharan Casestudy Image 11"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
                  />
                </figure>
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
                        The end result was a visually stunning, highly engaging, and
                        user-friendly e-commerce website that not only showcased
                        Dharan's exquisite hand-block-printed clothing but also
                        encapsulated the essence of the brand. Key achievements of
                        the project included:
                    </p>
                    <p data-jelly>
                        A dramatic increase in online sales, attributable to the
                        improved user experience, intuitive navigation, and
                        captivating visual design.
                    </p>
                    <p data-jelly>
                        Enhanced brand recognition and credibility, as the new
                        website effectively communicated Dharan's unique value
                        proposition and commitment to quality and craftsmanship
                    </p>
                    <p data-jelly>
                        An increase in organic search traffic, driven by the
                        website's mobile-first design, optimized performance, and
                        adherence to SEO best practices.
                    </p>
                    <p data-jelly>
                        As Dharan continues to grow and expand its reach, the
                        lessons learned from this project will serve as a guiding
                        light, informing future digital initiatives and ensuring
                        that the brand's commitment to quality, tradition, and
                        craftsmanship remains at the forefront of their online
                        presence.
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
                    src="/assets/casestudies/dharan/dharan-casestudy-image-12.webp"
                    alt="Dharan Casestudy Image 12"
                    className={styles.img}
                    id="img"
                    loading="lazy"
                    data-cursor-size="100px"
                    data-cursor-color="#FF8395"
                    data-cursor-text="Dharan"
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
                    Dharan's collaboration with Enigma has been nothing short of
                    transformative. The team at Enigma not only created a
                    stunning e-commerce website that perfectly embodies our
                    brand but also exceeded our expectations in terms of
                    customer engagement and sales growth. The new website is
                    truly a reflection of the beauty, craftsmanship, and
                    tradition that define our hand block-printed clothing. We
                    couldn't be more thrilled with the results and look forward
                    to a continued partnership with Enigma as we take our
                    digital presence to even greater heights.
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <Image
                          height={100}
                          width={100}  
                          alt="client image"
                          src="/assets/casestudies/dharan/dharan-client.webp" />
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                        Dhananjey Singh
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Founder and Creative Director, Dharan
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
            <ProjectSlider currentProjectLink="dharan-ecommerce-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/kedarkala-portfolio-website-case-study">
                  <h1>Kedarkala</h1>
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
