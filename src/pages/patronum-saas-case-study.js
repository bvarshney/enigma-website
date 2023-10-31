import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import styles from "@/styles/patronum.module.css";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import ProjectSlider from "../components/CaseStudies/ProjectSlider";

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

export default function patronum() {
  // Page Transitions
  useEffect(() => {
    const loaderBars = document.querySelectorAll("#loaderbars");
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        skewY: 10,
        duration: 1,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 1,
      }).to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: -0.5,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

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
        delay: 3.5,
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
      title="Patronum Branding & Website Design Case Study | Enigma"
      description="Enigma's Success Story of Patronum's Branding, UI/UX design, Website Design,and Front-End Development, achieving remarkable results for the SaaS Product."
      canonical="https://weareenigma.com/patronum-saas-case-study"
      openGraph={{
        url: "https://weareenigma.com/patronum-saas-case-study",
        title: "Patronum Branding & Website Design Case Study | Enigma",
        description:
          "Enigma's Success Story of Patronum's Branding, UI/UX design, Website Design,and Front-End Development, achieving remarkable results for the SaaS Product.",
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
        siteName: "Enigma Digital Website",
      }}
    />    

      <SmoothScroll />

      <div className="loader-wrap" id="loader">
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>
              <span className="loader-font">Patronum</span>
            </h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true} />

      <main>
        <div>
          <Header />
        </div>

        <div className={styles.Main}>
        <section
            className={styles.HeroSection}
            data-cursor-text=""
            data-cursor-size="10px">
            <div className={styles.mainSubSection}>
              <div className={styles.HeroLeftBox} data-jelly>
                <div
                  id="patroSub"
                  data-cursor-size="60px"
                  data-cursor-text="Visit!"
                  data-cursor-color="#0165E1"
                >
                  <Link href="https://www.patronum.io/" target="_blank" className={styles.Link}>
                  <button aria-label="link button">
                    Patronum.io
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
                  Swiss Army Knife <br /> for Google Workspace
                </h1>
              </div>
              <div className={styles.HeroRightBox}>
                <h5 className={styles.work} id="patroSub">
                  SAAS
                </h5>
                <h5 className={styles.year} id="patroSub">
                  2019
                </h5>
              </div>
            </div>
          </section>

          {/* ====================== Parallax Image Second =========================== */}
          <section className={styles.imageSection}>
            <div className="image-anim">
              <div className={styles.imageBox} id="image-container">
                <img
                  src="/assets/casestudies/patronum/img1.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  alt="portfolio image"
                  data-cursor-color="#3F86E4"
                  data-cursor-text="Patronum"
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
                    Patronum was developed by Bespin Labs as an exclusive Google
                    Workplace™ management tool. With an intuitive and powerful
                    interface and advanced automation, it gives IT
                    administrators all the tools they’ll ever need to
                    effectively manage their user life cycle and data including
                    automating repetitive tasks such as email signature
                    management, contact sharing, and drive management.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
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
                src="/assets/casestudies/patronum/img2.webp"
                className={styles.img}
                id="img"
                data-cursor-size="100px"
                alt="portfolio image"
                data-cursor-color="#3F86E4"
                data-cursor-text="Patronum"
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
                    The founding team at Patronum was on a quest to create a
                    brand and online presence that would turn heads and drop
                    jaws faster than a cheetah chasing its prey.
                  </h4>
                  <p data-jelly>
                    They sought a digital partner that could not only help them
                    navigate the treacherous waters of branding and web
                    development but also help them create a lasting impression
                    in the competitive SaaS arena. Hence, Patronum teamed up
                    with Enigma to craft a brand identity and website that would
                    shoot Patronum straight to the moon and beyond. Enigma's
                    team of branding & design maestros, never one to shy away
                    from a challenge, donned their digital superhero capes and
                    embarked on a whirlwind adventure of ingenuity and pixel
                    wizardry that would have made even Doctor Strange envious.
                  </p>
                  <p data-jelly>
                    The road to stellar branding and web development was paved
                    with challenges as steep as the Cliffs of Moher. First, We
                    had to capture the essence of Patronum's innovative SaaS
                    solutions and translate it into a brand identity that would
                    turn heads and drop jaws. This was no easy feat, as
                    Patronum's solutions were as diverse as the colors in a
                    rainbow, and distilling their unique value proposition into
                    a cohesive brand narrative was akin to herding cats.
                  </p>
                  <p data-jelly>
                    Second, Enigma had to design a website that would guide
                    users through the labyrinth of Patronum's offerings, all
                    while making it look like a walk in the park. The website
                    needed to strike a balance between visual appeal, user
                    experience, and performance, ensuring that users could
                    explore Patronum's solution offerings without getting lost
                    in a maze of complexity. In a world where the competition
                    for users' attention is fiercer than a cage match between
                    gladiators, Patronum's website had to be nothing short of a
                    digital masterpiece.
                  </p>
                  <p data-jelly>
                    Lastly, the website needed to be built on a solid foundation
                    that could accommodate the constant evolution and growth of
                    Patronum's solutions. The team at Patronum was constantly
                    churning out new features and offerings, and their website
                    needed to be agile enough to keep pace with their product's
                    relentless innovation.
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
                    src="/assets/casestudies/patronum/web1.png"
                    alt="Logo"
                    loading="lazy"
                    data-cursor-color="#EE384E"
                    data-cursor-text="Illustration"
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
                    src="/assets/casestudies/patronum/web2.png"
                    alt="Logo"
                    loading="lazy"
                    data-cursor-color="#0A489B"
                    data-cursor-text="Logo"
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
                    loading="lazy"
                    height={1000}
                    src="/assets/casestudies/patronum/web3.png"
                    alt="Logo"
                    data-cursor-color="#EE3C50"
                    data-cursor-text="Illustration"
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
                    src="/assets/casestudies/patronum/web4.png"
                    alt="Logo"
                    data-cursor-color="#3F86E4"
                    data-cursor-text="Logo Pattern"
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
                    Like bees to honey, we were drawn to Patronum's unique
                    vision and decided to take the road less traveled. We began
                    by delving deep into Patronum's core values, extracting the
                    golden nectar that would become the foundation of their
                    brand identity. Armed with this valuable insight, our team
                    of branding wizards concocted a visual potion that would
                    resonate with the brand and capture the hearts and minds of
                    Patronum's target audience. The resulting brand identity was
                    a symphony of visual elements that told Patronum's story
                    with grace and elegance.
                  </p>
                  <p data-jelly>
                    For the website, we employed a user-centric approach,
                    crafting an information architecture that was intuitive and
                    would feel like a guided wizard tour to the entire website.
                    We transformed complex wireframes into breathtaking page
                    designs, ensuring each element sang in harmony with
                    Patronum's newfound brand identity.
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
                    src="/assets/casestudies/patronum/web5.png"
                    alt="Logo"
                    loading="lazy"
                    data-cursor-color="#EE384E"
                    data-cursor-text="Illustration"
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
                    src="/assets/casestudies/patronum/web6.webp"
                    alt="Logo"
                    data-cursor-color="#0A489B"
                    data-cursor-text="Logo"
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
                    src="/assets/casestudies/patronum/web7.webp"
                    alt="Logo"
                    loading="lazy"
                    data-cursor-color="#EE3C50"
                    data-cursor-text="Illustration"
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
                    src="/assets/casestudies/patronum/web8.webp"
                    alt="Logo"
                    loading="lazy"
                    data-cursor-color="#3F86E4"
                    data-cursor-text="Logo Pattern"
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
                src="/assets/casestudies/patronum/fonts.webp"
                alt="Fonts"
                className={styles.desktopFont}
                id="fonts-dark-casestudy"
              />
              <img
                src="/assets/casestudies/patronum/font-mobile.webp"
                alt="Fonts"
                className={styles.mobileFont}
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
              className={styles.colorBoxesSection}
              id="dark-mode-colors-casestudy"
            >
              <ul>
                <li className={styles.colorOne} id="line">
                  Hex: #00415F <br /> Hex: #00B4F4
                </li>
                <li className={styles.colorTwo} id="line">
                  Hex: #E33B52
                </li>
                <li className={styles.colorThree} id="line">
                  Hex: #013C9F
                </li>
                <li className={styles.colorFour} id="line">
                  Hex: #F9BC40
                </li>
              </ul>
            </div>
          </section>

          {/* ====================== COLORS Section END ==================== */}


          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>The Google <br/> Workspace Manager</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                  src="/assets/casestudies/patronum/patronum.webm"
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
                  <p data-jelly>
                  We opted for a proven technology stack that packed a punch:
                  HTML, CSS, JS, jQuery, and WordPress. This powerful combo
                  offered the perfect blend of flexibility, maintainability, and
                  scalability. HTML and CSS laid the groundwork for the site's
                  structure and visual appeal, while JavaScript and jQuery
                  injected interactivity and panache, making the website as
                  captivating as a Broadway show. WordPress, the pièce de
                  résistance, provided a user-friendly content management system
                  that empowered Patronum's team to easily update and manage their
                  content as their product continued to evolve.
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
                    src="/assets/casestudies/patronum/img3.webp"
                    loading="lazy"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    alt="portfolio image"
                    data-cursor-color="#3F86E4"
                    data-cursor-text="Patronum"
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
                    Enigma's branding and web development triumph was nothing
                    short of a digital magnum opus. Patronum's new brand
                    identity radiated the company's innovative spirit, while the
                    website guided users through a seamless journey of
                    discovery. Their mesmerizing brand identity and website
                    catapulted their online presence to stratospheric heights.
                    With skyrocketing web traffic, lead generation, and
                    conversions, Patronum's online presence is truly out of this
                    world, boldly going where no SaaS company had gone before.
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
                  src="/assets/casestudies/patronum/img4.webp"
                  className={styles.img}
                  id="img"
                  loading="lazy"
                  data-cursor-size="100px"
                  alt="portfolio image"
                  data-cursor-color="#3F86E4"
                  data-cursor-text="Patronum"
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
                  <Image 
                  width={100}
                  height={100}
                  src="/assets/casestudies/patronum/paullees.webp" alt="client image" />
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                      Paul Lees
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        CEO, Patronum
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
            <ProjectSlider currentProjectLink="patronum-saas-case-study" />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/dharan-ecommerce-case-study">
                  <h1>Dharan</h1>
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