import Head from "next/head";
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

export default function kedarkala() {
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

  return (
    <>

<NextSeo
        title="Kedarkala Case Study | Enigma Digital's UI/UX & Branding Success"
        description="Kedarkala's case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
        canonical="https://www.weareenigma.com/kedarkala"
        openGraph={{
          url: "https://www.weareenigma.com/kedarkala",
          title:
            "Kedarkala Case Study | Enigma Digital's UI/UX & Branding Success",
          description:
            "Kedarkala's case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client.",
          images: [
            {
              url: "",
              width: 400,
              height: 600,
              alt: "Enigma Image",
              type: "image/png",
            },
            { url: "" },
          ],
          siteName: "https://www.weareenigma.com/kedarkala",
        }}
      />

<Head>
        <title>
          Kedarkala Case Study | Enigma Digital's UI/UX & Branding Success
        </title>
        <meta
          name="description"
          content="Kedarkala's case study showcases the work done by Enigma in Branding, UI/UX design and front-end development, driving exceptional results for the client."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <SmoothScroll />

{/*Loader*/}
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
              <span className="loader-font">Kedarkala</span>
            </h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true}/>

      <main>
        <div>
          <Header />
        </div>

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
                <h5 className={styles.work} id="patroSub">
                    INTERIOR DESIGN
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
                    src="/assets/casestudies/kedarkala/img1.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0F1014"
                  data-cursor-text="Kedarkala"
                  alt="portfolio image"
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
                    Kedarkala, an award-winning and highly-regarded interior
                    design studio in India, has long been known for its
                    exceptional designs and meticulous attention to detail. As
                    the demand for high-quality interior design services
                    continues to grow, Kedarkala sought to establish a robust
                    online presence that reflects its stellar reputation and
                    showcases its stunning portfolio.
                  </h4>
                </div>

                <div className={styles.buttonBox}>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Branding
                  </h6>
                  <h6 data-cursor-size="30px" data-cursor-exclusion>
                    Web Design
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
                src="/assets/casestudies/kedarkala/img2.webp"
                className={styles.img}
                id="img"
                data-cursor-size="100px"
                data-cursor-color="#0F1014"
                data-cursor-text="Kedarkala"
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
                    src="/assets/casestudies/kedarkala/web1.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web2.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web3.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web4.webp"
                    alt="Logo"
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
                <h3 className={styles.h3} data-jelly>Our Approach</h3>
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
                    src="/assets/casestudies/kedarkala/web5.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web7.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web6.webp"
                    alt="Logo"
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
                    src="/assets/casestudies/kedarkala/web8.webp"
                    alt="Logo"
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
              <h2 className={styles.h2} >Typography</h2>
            </div>
            <div className={styles.kedarfontImagebox}>
              <img
                src="/assets/casestudies/kedarkala/typo-img.png"
                alt="Fonts"
                className={styles.kedartypoImgFirst}
                id="kedar-font-img"
              />
              <img
                src="/assets/casestudies/kedarkala/typo.webp"
                alt="Fonts"
                id="kedar-font-img"
              />
            </div>
          </section>
          {/* ====================== Fonts Section END ====================*/}

          {/* ====================== Video Section ======================== */}
          <section className={styles.videoSection}>
            <div className={styles.videoHeading}>
              <h2 className={styles.videoH2}>Kedarkala<br/>Interior Design Studio</h2>
            </div>
            <div className={styles.videoMainSection}>
              <div className={styles.videoContainer} id="video-container">
                <video
                    src="/assets/casestudies/kedarkala/kedarkala.webm"
                    autoPlay
                    loop
                    muted
                    alt='kedarkala video'
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
                    src="/assets/casestudies/kedarkala/img3.webp"
                    className={styles.img}
                    id="img"
                    data-cursor-size="100px"
                    data-cursor-color="#0F1014"
                    data-cursor-text="Kedarkala"
                  alt="portfolio image"

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
                  src="/assets/casestudies/kedarkala/img4.webp"
                  className={styles.img}
                  id="img"
                  data-cursor-size="100px"
                  data-cursor-color="#0F1014"
                  alt="portfolio image"
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
                    <img src="/assets/casestudies/kedarkala/kedarclient.webp"
                            alt="client img">
                    </img>
                  </div>
                  <div className={styles.clientTestimonialSectionFigureText}>
                    <h4>
                        Shraddha Kasaudhan
                      <br />
                      <span className={styles.clientTestimonialSpan}>
                        Founder & CEO, Kedarkala Design Studios
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
                <Link href="/patronum">
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
