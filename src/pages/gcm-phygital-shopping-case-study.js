import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/gcm.module.css";
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

export default function gcm() {

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
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
      }
    );
  });

  return (
    <>

            <NextSeo
              title="Garden City Mall - Phygital Shopping Experience Case Study | Enigma"
              description="Witness how we crafted a phygital shopping experience for Lagos' premier retail destination. Explore Garden City Mall's digital transformation case study with Enigma."
              canonical="https://weareenigma.com/gcm-phygital-shopping-case-study"
              openGraph={{
                url: "https://weareenigma.com/gcm-phygital-shopping-case-study",
                title: "Garden City Mall - Phygital Shopping Experience Case Study | Enigma",
                description:
                  "Witness how we crafted a phygital shopping experience for Lagos' premier retail destination. Explore Garden City Mall's digital transformation case study with Enigma.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-gcm.png",
                    width: 1200,
                    height: 630,
                    alt: "GCM Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
            />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Garden City Mall Case Study" />

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
                  data-cursor-color="#E73354"
                  data-cursor-text="Visit!"
                >
                  <Link href="https://grandmall.netlify.app/" target="_blank" className={styles.Link}>
                  <button aria-label="link button">
                    gardencitymall.com
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
                Revolutionizing the <br /> Shopping Mall Experience
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                    RETAIL
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
                  src="/assets/casestudies/gcm/gcm-casestudy-image-1.webp"
                  alt="GCM casestudy image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#EF9C34"
                  data-cursor-text="GCM"
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
                    In the bustling heart of Lagos, Nigeria's capital city, a
                    new, state-of-the-art shopping mall was under construction,
                    poised to become the go-to destination for retail, dining,
                    and entertainment experiences. As the mall's physical
                    structure began to take shape, its developers recognized the
                    need for an equally captivating online presence that would
                    showcase the mall's unique offerings, attract potential
                    tenants and visitors, and generate buzz within the
                    community.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
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
                  src="/assets/casestudies/gcm/gcm-casestudy-image-2.webp"
                  alt="GCM casestudy image 2"
                  loading="lazy"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#EBA17D"
                  data-cursor-text="GCM"
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
                    The developers and promoters of Garden City mall enlisted
                    Enigma's team to create a visually stunning and highly
                    interactive website that would not only promote the mall but
                    also provide a seamless and engaging user experience,
                    capturing the essence of the mall's modern architecture and
                    vibrant atmosphere.
                  </h4>
                  <p data-jelly>
                    They also wanted to implement a content management system
                    (CMS) that would enable the mall's management team to easily
                    update and manage website content as the construction
                    progresses through different stages and, ensure the website
                    was optimized for search engines, mobile devices, and fast
                    load times to provide a seamless and enjoyable user
                    experience.
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-5.webp"
                    alt="GCM casestudy image 5"
                    loading="lazy"
                    data-cursor-color="#A4A4CD"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-6.webp"
                    alt="GCM casestudy image 6"
                    loading="lazy"
                    data-cursor-color="#FFC09F"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-7.webp"
                    alt="GCM casestudy image 7"
                    loading="lazy"
                    data-cursor-color="#F8E890"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-8.webp"
                    alt="GCM casestudy image 8"
                    loading="lazy"
                    data-cursor-color="#ADF8B5"
                    data-cursor-text="GCM"
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
                  <h4 className={styles.h4} data-jelly>
                    We embraced the challenge of creating a one-of-a-kind
                    digital experience for Garden City Mall by adopting an
                    innovative and forward-thinking approach. The key pillars of
                    our approach focused on:
                  </h4>
                  <p data-jelly>
                    Conducting thorough research to understand the local market,
                    target audience, and competitive landscape, in order to
                    develop a website that would resonate with users and stand
                    out from the competition.
                  </p>
                  <p data-jelly>
                    Collaborating closely with the mall's management and design
                    teams to ensure the website's visual language and content
                    aligned with the mall's brand identity and objectives.
                  </p>
                  <p data-jelly>
                    Employing a user-centric design philosophy, prioritizing
                    usability and engagement to create an immersive online
                    experience that would encourage users to explore the mall's
                    offerings and visit the physical location.
                  </p>
                  <p data-jelly>
                    Utilizing cutting-edge web technologies and frameworks to
                    develop a responsive, high-performance website that would
                    deliver a seamless experience across all devices and
                    platforms.
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-9.webp"
                    alt="GCM casestudy image 9"
                    loading="lazy"
                    data-cursor-color="#323B44"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-10.webp"
                    alt="GCM casestudy image 10"
                    loading="lazy"
                    data-cursor-color="#FF9870"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-11.webp"
                    alt="GCM casestudy image 11"
                    loading="lazy"
                    data-cursor-color="#EF96B6"
                    data-cursor-text="GCM"
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-12.webp"
                    alt="GCM casestudy image 12"
                    loading="lazy"
                    data-cursor-color="#E5BBA2"
                    data-cursor-text="GCM"
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
            <div className={styles.gcmfontImagebox}>
              <img
                src="/assets/casestudies/gcm/gcm-casestudy-font-1.webp"
                alt="Gcm Casestudy Fonts Image 1"
                loading="lazy"
                id="fonts-dark-casestudy"
              />
              <img
                src="/assets/casestudies/gcm/gcm-casestudy-font-2.webp"
                alt="Gcm Casestudy Fonts Image 2"
                loading="lazy"
                id="fonts-dark-casestudy"
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
                  Colour <br /> Palette
                </h1>
              </div>
            </div>

            <div
              className={styles.gcmcolorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <img src="/assets/casestudies/gcm/gcm-casestudy-colors.webp" alt="GCM casestudy color image" />
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>The Garden City Mall</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/gcm/gcm.webm"
                  autoPlay
                  loop
                  muted
                  alt='gcm video'
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
                    To bring the Lagos mall's website to life, Enigma employed a
                    powerful technology stack, featuring Next.js, a popular
                    React-based framework, and GSAP (GreenSock Animation
                    Platform). This technology stack was selected as Next JS
                    allowed us to build a highly performant, server-rendered
                    React application that provided an exceptional user
                    experience while ensuring fast load times and optimal search
                    engine optimization.
                  </p>
                  <p data-jelly>
                    The component-based architecture of Next.js allowed for
                    efficient development and easy maintenance, as well as the
                    ability to create reusable, modular components that could be
                    seamlessly integrated throughout the site during the
                    development process. GSAP, a high-performance animation
                    library, facilitated the creation of smooth, visually
                    stunning animations that showcased GCM's offerings and
                    features in a captivating and immersive manner.
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-3.webp"
                    alt="GCM casestudy image 3"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#00232E"
                    data-cursor-text="GCM"
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
                  <h4 className={styles.h4} data-jelly>
                    The final product was a visually stunning, highly engaging,
                    and user-friendly website that not only generated excitement
                    for the upcoming mall launch but also served as an
                    invaluable resource for visitors and prospective tenants
                    alike. Key achievements of the project included:
                  </h4>
                  <p data-jelly>
                    A substantial boost in brand recognition and anticipation
                    for the mall's opening, thanks in part to the website's
                    striking visual appeal and the successful communication of
                    the mall's unique selling propositions.
                  </p>
                  <p data-jelly>
                    Positive feedback from prospective tenants and partners, who
                    praised the website's user-centric design, wealth of
                    information, and seamless inquiry submission process.
                  </p>
                  <p data-jelly>
                    A marked improvement in search engine rankings and
                    visibility, owing to the optimized site architecture, fast
                    loading times, and mobile-friendly design.
                  </p>
                  <p data-jelly>
                    In conclusion, Enigma's innovative approach to design,
                    coupled with a deep understanding of the Lagos shopping
                    mall's brand identity and strategic objectives, resulted in
                    a groundbreaking website that captivated users and set the
                    stage for the mall's highly anticipated launch. The success
                    of this project not only highlights the power of creative
                    collaboration but also underscores the importance of
                    embracing cutting-edge technology and design principles to
                    create truly unforgettable digital experiences.
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
                    src="/assets/casestudies/gcm/gcm-casestudy-image-4.webp"
                    alt="GCM casestudy image 4"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#00232E"
                    data-cursor-text="GCM"
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
                        Enigma exceeded our expectations in every way, delivering a
                        website that truly captures the essence of our brand and
                        sets the stage for our grand opening. Their unparalleled
                        creativity, technical expertise, and dedication to
                        excellence have positioned our shopping mall as the premier
                        retail destination in Lagos. We couldn't be more thrilled
                        with the results and look forward to a continued partnership
                        with Enigma as we take our digital presence to even greater
                        heights.
                  </h4>
                </div>
                <div
                  className={styles.clientTestimonialSectionBottomBox}
                  data-jelly
                >
                  <div className={styles.clientTestimonialSectionFigure}>
                    <img src="/assets/casestudies/gcm/gcm-client.webp" alt="Client Image"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                        Chinara Musa
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Managing Director & Chief Promoter
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
            <ProjectSlider currentProjectLink="gcm-phygital-shopping-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/quickx-crypto-case-study">
                  <h1>Quick-X</h1>
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
