import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/certvault.module.css";
import Link from "next/link";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Image from "next/image";
import ProjectSlider from "../components/CaseStudies/ProjectSlider";
import PageLoader from "../components/pageLoader";

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

export default function certvault() {

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
              title="Certvault Design & Development Case Study | Enigma"
              description="Discover how Enigma overhauled the User Experience & transformed the User Interface of USA's largest digital insurance certificate storage and delivery platform."
              canonical="https://weareenigma.com/certvault-case-study"
              openGraph={{
                url: "https://weareenigma.com/certvault-case-study",
                title: "Certvault Design & Development Case Study | Enigma",
                description:
                  "Discover how Enigma overhauled the User Experience & transformed the User Interface of USA's largest digital insurance certificate storage and delivery platform.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/portfolio-certvault.png",
                    width: 1200,
                    height: 630,
                    alt: "Certvault Casestudy Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
              }}
            />

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Certvault CaseStudy" />

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
                  data-cursor-text="Visit!"
                  data-cursor-color="#F50D37"
                >
                  <Link href="https://certvault.org/" target="_blank" className={styles.Link}>
                    <button aria-label="link button">
                    certvault.org
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
                    CertVault: A Cloud-based <br /> Certificate Repository
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
                  src="/assets/casestudies/certvault/certvault-casestudy-image-1.webp"
                  alt="Certvault Casestudy Image 1"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#F50D37"
                  data-cursor-text="Certvault"
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
                    CertVault is a pioneering solution in the insurance industry, offering a cloud-based certificate repository and delivery system. Developed under the umbrella of PatraCorp, a global leader in delivering business process outsourcing services to the insurance sector, CertVault aims to revolutionize the way insurance certificates are accessed, managed, and delivered.
                  </h4>
                  
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    UX Planning
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    UI Design
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
                  src="/assets/casestudies/certvault/certvault-casestudy-image-2.webp"
                  alt="Certvault Casestudy Image 2"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#F50D37"
                  data-cursor-text="Certvault"
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
                  <p data-jelly>
                    CertVault, a groundbreaking cloud-based certificate repository and delivery system, was on the brink of revolutionizing how insurance certificates are accessed and delivered. With a vision to provide instant access to certificates for brokers, insureds, holders, and carriers, CertVault aimed to make certificate delivery more secure, convenient, and efficient. 
                  </p>
                  <p data-jelly>
                    However, the challenge lay in presenting this innovative solution in a user-friendly manner, ensuring that the platform's interface was intuitive and met the needs of its diverse user base. With the Global InsurTech Summit 2020 approaching, the pressure was on to design a UI that not only showcased CertVault's capabilities but also resonated with a global audience.
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
                    loading="lazy"
                    width={1000}
                    height={1000}
                    src="/assets/casestudies/certvault/certvault-casestudy-image-3.webp"
                    alt="Certvault Casestudy Image 3"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-4.webp"
                    alt="Certvault Casestudy Image 3"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    loading="lazy"
                    src="/assets/casestudies/certvault/certvault-casestudy-image-5.webp"
                    alt="Certvault Casestudy Image 4"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-6.webp"
                    alt="Certvault Casestudy Image 5"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    Diving into the heart of CertVault, we recognized the immense potential and the transformative impact it could have in the realm of insurance certificates. Our strategy was multi-pronged. First, we sought to understand the pain points of the target audience. We engaged in extensive consultations, gathering insights from brokers, insureds, holders, and carriers. This allowed us to identify the key challenges they faced with traditional certificate delivery systems.
                  </p>
                  <p data-jelly>
                    With this knowledge in hand, we embarked on a meticulous UX planning phase. We aimed to create a seamless journey for users, from the moment they logged in to the point they accessed a certificate. Every touchpoint was optimized to ensure simplicity and efficiency. Recognizing the importance of trust in the insurance domain, we integrated features that would enhance transparency and reliability. The blockchain-backed security was highlighted prominently, assuring users of the integrity of the stored certificates.

                  </p>
                  <p data-jelly>
                    Furthermore, we incorporated feedback mechanisms, allowing users to share their experiences and suggestions. This iterative approach ensured that the platform evolved in line with user expectations and needs.
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-7.webp"
                    alt="Certvault Casestudy Image 7"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-8.webp"
                    alt="Certvault Casestudy Image 8"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-9.webp"
                    alt="Certvault Casestudy Image 9"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-10.webp"
                    alt="Certvault Casestudy Image 10"
                    loading="lazy"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
          
          <section className={styles.certvaultfontSection}>
            <div className={styles.certvaultfontHeading}>
              <h1>Fonts</h1>
            </div>
            <div className={`${styles.certvaultfontImagebox}  projectNoInvert`}>
              <img
                src="/assets/casestudies/certvault/certvault-casestudy-fonts.webp"
                alt="Certvault Casestudy Fonts Image"
                loading="lazy"
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}

          {/* ====================== COLORS Section ==================== */}

          <section className={styles.certvaultcolorSection} id="colorsection">
            <div className={styles.certvaultcolorHeading}>
              <h1>COLORS</h1>
            </div>
            <div className={styles.certvaultcolorMainBox}>
              <div className={styles.certvaultcolorBox}>
                <div className={styles.certvaultcolorBoxHeadingBackground}>
                  <h2 data-speed="1.3">
                    Colour{" "}
                    <span className={styles.certvaultpalette} id="palette">
                      Palette
                    </span>
                  </h2>
                </div>
              </div>

              <div
                className={styles.certvaultcolorBoxesSection}
                id="dark-mode-colors-casestudy"
              >
                <ul>
                  <li className={styles.certvaultcolorOne} id="line"></li>
                  <li className={styles.certvaultcolorTwo} id="line"></li>
                  <li className={styles.certvaultcolorThree} id="line"></li>
                  <li className={styles.certvaultcolorFour} id="line"></li>
                  <li className={styles.certvaultcolorFive} id="line"></li>
                </ul>
              </div>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>Certvault <br/>  Application UI</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/certvault/certvault.webm"
                  autoPlay
                  loop
                  muted
                  alt='certvault video'
                />
              </div>
            </div>
          </section>
          
          {/* ====================== Video Section END ======================== */}

          {/* ====================== Forth Section  ======================== */}

          <section className={styles.forthSection}>
            <div className={styles.forthSectionContent}>
              <div className={styles.forthSectionLeftBox}>
                <h3 className={styles.h3} data-jelly>Our UX Magic
                </h3>
              </div>
              <div className={styles.forthSectionRightBox}>
                <div className={styles.paraTop}>
                  <p data-jelly>
                    The true testament to the success of our UX strategy was evident in the numbers. CertVault, post our intervention, boasted a staggering 1.7M Certificates of Insurance. But numbers only tell half the story. The real value add was in the user experience. Over 75,000 companies registered as users, a testament to the platform's intuitive design and user-centric approach.
                  </p>
                  <p data-jelly>
                    Our UX planning ensured that users, whether they were brokers, insureds, or carriers, could navigate the platform with ease, accessing certificates instantly. The design effectively communicated the platform's core functionalities, from the blockchain-backed security to the instant access of certificates. Alerts and notifications were strategically placed, ensuring users were always informed about certificate expirations, carrier details, and insured names.
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-11.webp"
                    alt="Certvault Casestudy Image 11"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
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
                    The result was a UI that not only captured the essence of CertVault but also provided an unparalleled user experience. The design effectively communicated the platform's core functionalities, from the blockchain-backed security to the instant access of certificates. Users could now easily navigate through the platform, understanding key features at a glance, from certificate expiration to carrier and insured names. 
                  </p>
                  <p data-jelly>
                    The feedback was overwhelmingly positive at the Global InsurTech Summit 2020, with many praising the intuitive design and the seamless user experience. CertVault, with its revamped UI, was now poised to redefine the way insurance certificates were accessed and delivered, all thanks to a design that was as innovative as the platform itself.
                  </p>
                  <p data-jelly>
                    Moreover, the platform's design instilled a sense of trust and reliability. The blockchain feature was not just a tech add-on; it was a promise of security and transparency. Users could be confident that the certificates they accessed were authentic and unaltered.
                  </p>
                  <p data-jelly>
                    The success of CertVault, with its 1.7M certificates and a growing base of 75,000 registered companies, is a testament to the power of effective UX planning. It's not just about aesthetics; it's about understanding user needs, anticipating challenges, and designing solutions that deliver value at every touchpoint.
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
                    src="/assets/casestudies/certvault/certvault-casestudy-image-12.webp"
                    alt="Certvault Casestudy Image 12"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#F50D37"
                    data-cursor-text="Certvault"
                    loading="lazy"
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
                      Enigma Digital's expertise in UX planning and UI design has been a game-changer for CertVault. Their deep understanding of our audience's needs and their meticulous approach to design have transformed our platform. The numbers speak for themselves, but beyond the numbers, it's the feedback from our users that truly underscores the value Enigma brought to the table. Our platform is now more than just a certificate repository; it's a testament to the power of user-centric design. Kudos to the Enigma team for their exceptional work!"
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
                      src="/assets/casestudies/certvault/client-image.webp" />
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
            <ProjectSlider currentProjectLink="certvault-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/dmtca-digital-branding-case-study">
                  <h1>DMTCA</h1>
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
