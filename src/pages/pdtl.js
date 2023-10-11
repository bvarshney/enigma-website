import Head from "next/head";
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
import WragbySlider from "@/components/CaseStudies/WragbySlider";
import Image from "next/image";

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
      title="PDTL | Case Study"
      description="PDTL case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
      canonical="https://www.weareenigma.com/pdtl"
      openGraph={{
        url: "https://www.weareenigma.com/pdtl",
        title: "PDTL | Case Study",
        description:
          "PDTL case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client.",
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
        siteName: "https://www.weareenigma.com/pdtl",
      }}
    />    

      <Head>
        <title>PDTL | Case Study</title>
        <meta name="description" content="PDTL case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

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
              <span className="loader-font">PDTL</span>
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
                <h5 className={styles.work} id="patroSub">
                    LOGISTICS
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
                  src="/assets/casestudies/pdtl/img1.png"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  alt="portfolio image"
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
                <h3 className={styles.h3} data-jelly>THE CLIENT</h3>
              </div>
              <div className={styles.thirdSectionRightBox}>
                <div className={styles.paraTop}>
                  <h4 className={styles.h4} data-jelly>
                    Manchester, the bustling heart of the UK, is home to a
                    thriving logistics company that prides itself on providing
                    top-notch services to its clientele. To stay ahead in an
                    increasingly competitive market, the company recognized the
                    need to revamp its online presence to better reflect its
                    innovative approach and unwavering commitment to excellence.
                    Enigma was recommended to the client and was tasked with
                    delivering a smashing website transformation that would
                    leave a lasting impression.
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
                    src="/assets/casestudies/pdtl/img2.png"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
                    alt="portfolio image"
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
                    src="/assets/casestudies/pdtl/web1.webp"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web2.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web3.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web4.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    <strong>A. Research & Collaboration: </strong>
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
                    src="/assets/casestudies/pdtl/web5.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web6.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web7.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
                    src="/assets/casestudies/pdtl/web8.png"
                    alt="Logo"
                    data-cursor-color="#234BA7"
                    data-cursor-text="PDTL"
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
            <div className={styles.pdtlfontImagebox}>
              <img src="/assets/casestudies/pdtl/font1.webp" alt="Fonts" />
              <img src="/assets/casestudies/pdtl/font2.webp" alt="Fonts" />
            </div>
          </section>
          {/* ====================== Fonts Section END ==================== */}


          {/* ====================== COLORS Section ==================== */}

          <section className={styles.pdtlcolorSection} id="colorsection">
            <div className={styles.colorHeading}>
              <h2 className={styles.h2} >Colors</h2>
            </div>
            <div className={styles.pdtlcolorBox}>
              <div className={styles.pdtlcolorBoxHeadingBackground}>
                <h1 data-speed="1.5">
                    Colour Palette
                </h1>
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
              <h2 className={styles.videoH2}>PDTL Driver Training Institute</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                    src="/assets/casestudies/pdtl/pdtl.webm"
                    autoPlay
                    loop
                    muted
                    alt='pdtl video'
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
                    src="/assets/casestudies/pdtl/img3.png"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    alt="portfolio image"
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
                <h3 className={styles.h3} data-jelly>THE RESULT</h3>
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
                    src="/assets/casestudies/pdtl/img4.png"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#234BA7"
                    alt="portfolio image"
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
                    <img src="/assets/casestudies/pdtl/pdtlclient.webp" alt="client image"></img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                        Jared Bullock
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Director, PDTL
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
            <WragbySlider />
          </div>

          {/* ========================== Next Project END ======================= */}


          {/* ================ Next Project Mobile ============================== */}

          <div className={styles.nextUpContainer}>
            <div className={styles.nextUpContent}>
              <div className={styles.nextTitle}>
                <h1>next up</h1>
              </div>
              <div className={styles.nextProjectHeading}>
                <Link href="/quickx">
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