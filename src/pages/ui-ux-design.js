import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SmoothScroll from "@/components/utils/SmoothScroll";
import SplitType from 'split-type';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";

import styles from '@/styles/serviceDetail.module.css';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import CursorAero from '@/components/ServiceDetail/Design/DesignAero';
import NextBox from '@/components/ServiceDetail/Design/DesignNext';
import OfferCards from '@/components/ServiceDetail/Design/OfferCards';
import Modal from '../components/PopupForm/formModal';
import { NextSeo } from 'next-seo';

gsap.registerPlugin(ScrollTrigger);

gsap.config({
    nullTargetWarn: false,
    trialWarn: false
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

export default function uiuxservices() {

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

if (globalThis.innerWidth>1200) {
// Hero Section Animation
useEffect(() => {
  const tl = gsap.timeline();
  tl.fromTo(
    "#service-anim",
    {
      rotationX: -80,
      opacity: 0,
      translateY: 300,
      transformPerspective: "1000",
      transformOrigin: "top center",
    },
    {
      delay: 3.2,
      duration: 1,
      rotationX: 0,
      opacity: 1,
      translateY: 0,
      stagger: 0.2,
    }
  );
  return () => tl.kill();
}, []);
} else {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#service-anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 100,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.2,
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }
)};

  
  if (globalThis.innerWidth > 1200) {

// Portfolio Section Animation
  useEffect(() => {

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#servicePortfolioAnim',
          scrub: true,
          end: "top top",
          ease: "none",
          markers: false,
        },
      });
      tl.fromTo( '#servicePortfolioAnim', 0.8, {
          transform: "translate3d(0px, 0px, 0px) scale(0.5, 0.5)",
          ease: "none",
        },{
          transform: "translate3d(0px, 0px, 0px) scale(1, 1)",
      });
    });
    return () => ctx.revert();
  });

// Portfolio Section Animation
    useEffect(() => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#section-3",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            ease: "easeInOut",
            pin: true,
            markers: false,
          },
        });
        
      tl.to("#service-port-main", {
        duration: 10,
        x: "-58.5%",
        delay: 0.5,
      });
  });
  return () => ctx.revert();
});


// Approach Section Animation
useEffect(() => {
  let approachImages = gsap.utils.toArray(".service-image-container");
  let approachItems = gsap.utils.toArray(".text-card");

  let ctx = gsap.context(() => {
      gsap.to("#approachImgCont", {
          scrollTrigger: {
            trigger: "#section-5",
            pin: "#approachImgCont",
            pinSpacing: true,
            start: "top top",
            end: "bottom bottom",
            markers: false
          }
        });

        if (approachItems) {
          approachItems.forEach((image, i) => {
            
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: image,
                scrub: 1,
                start: "top top-=600",
                markers: false,
              }
            });
            tl.to(approachImages[i], {
              zIndex: "1",
            })
            tl.to(approachImages[i], {
              opacity: 0,
              duration: 1,
              scale: 1.2,
              ease: "power4.out"
            }, "-=1")
          })
        }     
  });
  return () => ctx.revert();
}, []);
  }

// Text Reveal Animation For Section 2
    useEffect(() => {
      const elementsToAnimate = document.querySelectorAll('#fadeIn');
      let ctx = gsap.context(() => {
      elementsToAnimate.forEach(target => {
        gsap.from(target, {
          scrollTrigger: {
            trigger: target,
            start: 'top 90%',
            end: 'bottom top',
            markers: false,
          },
          opacity: 0,
          y: 100,
          duration: 0.8,
          ease: 'Power1.out',
        });
      });
    });
    return () => ctx.revert();
    }, []);

// Text Reveal Animation For Approach and Process Section
    useEffect(() => {
      const totalSection = document.querySelectorAll(
        "#section-4"
      );
      totalSection.forEach(function (elem, index) {
        const text = new SplitType(elem.querySelectorAll(".why-us-anim"));
        let textwords = text.words;
        gsap.from(textwords, {
          scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            end: "bottom top",
            markers: false,
          },
          duration: .7,
          opacity: 0,
          yPercent: 100,
          ease: "Power3.out",
          stagger: 0.01,
        });
      });
    }, []);

  return (
    <>
        <NextSeo
        title="UI/UX Design Services | UI/UX, Development & Marketing Experts"
        description="UI/UX Design Services | UI/UX, Development & Marketing Experts"
        canonical="https://www.weareenigma.com/ui-ux-design"
        openGraph={{
          url: "https://www.weareenigma.com/ui-ux-design",
          title:
            "UI/UX Design Services | UI/UX, Development & Marketing Experts",
          description:
            "UI/UX Design Services | UI/UX, Development & Marketing Experts",
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
          siteName: "https://www.weareenigma.com/ui-ux-design",
        }}
      />

        <Head>
        <title>
          UI/UX Design Services | UI/UX, Development & Marketing Experts
        </title>
        <meta
          name="description"
          content="UI/UX Design Services | UI/UX, Development & Marketing Experts"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

<SmoothScroll />

<Cursor isGelly={true} />

      {/*Page Loader*/}
      <div className="loader-wrap" id="loader" style={{ zIndex: 999 }}>
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>UI/UX Design</h1>
          </span>
        </div>
      </div>
      {/*Page Loader*/}

    <div>
        <Header />
    </div>

{/* PopUp Modal Button */}
  <Modal />
{/* End */}

    <main className={styles['main']}>
      <div className={styles['container']}>

{/* Hero Section*/}
        <section className={`${styles['service-detail-hero']} ${styles['main-container']}`} data-cursor-size="10px" data-cursor-text="">
          <div className={styles['service-detail-hero-content']}>
            <div className={styles['service-detail-hero-top']}>
              <h1 className='color-primary' id='service-anim'
              data-cursor-magnetic data-cursor-background-image="/assets/gif/4.gif" data-cursor-size="300px" data-cursor-color="#000">
                UI/UX
              </h1>
              <p className={`${styles['hero-top-para']}`} id='service-anim'>
                We seamlessly blend physical and digital to craft exceptional experiences that boost revenue, conversions, and loyalty through meticulous attention to detail.
              </p>
            </div>
            <div>
              <h1 className={`${styles['hero-bottom']}`} id='service-anim' data-cursor-magnetic data-cursor-background-image="/assets/gif/5.gif" data-cursor-size="300px" data-cursor-color="#000">
                 Design
              </h1>
            </div>
          </div>
        </section>

{/* Section 2 */}
        <section className={`${styles['main-container']}`} id='section-2'>
        <div className={styles.contentContainer}>
          <div className={styles['service-detail-content']}>
            <h2 className={`${styles['m-50']} fadeIn`} data-jelly id='fadeIn'>
              <span>
                First impressions matter! The user interface (UI) and user experience (UX) make or break that crucial first interaction with your brand. Leveraging the power of modern tools and our unique approach, our UI/UX design masters solve complex design problems through user research, expert analysis, prototyping, and collaborative design with users & stakeholders. At Enigma, our UI/UX design masters craft stunning visual interfaces and smooth digital experiences so your customers keep coming back for more.
              </span>
            </h2>
            <p className={`${styles['m-50']} fadeIn`}
                data-jelly id='fadeIn'>
              <span>
                A poorly designed website or app can destroy your business. But with our human-centered design approach, we create intuitive digital experiences that delight users and drive results. Our secret sauce is combining empathy and data. We dive deep to understand your users' needs and pains. Then we analyze metrics to identify issues and opportunities. This informs designs that resonate emotionally and convert.
              </span>
            </p>
            <span className={`${styles['btn-10']}`} 
                  data-cursor-size="100px"
                  data-cursor-exclusion>
              kickstart your growth
            </span>
          </div>
        </div>
          
        </section>

{/* Aerosol */}
        <section className="topHeightAero" 
                 data-cursor-size='0'
                 data-cursor-text=""
                 >
          <CursorAero />
        </section>

{/* Section 3 Portfolio */}
    <section className={`${styles['service-portfolio']} ${styles['main-container']}`} 
        id='section-3'>
      <div id='servicePortfolioAnim' 
       className={styles['service-anim-portfolio']}>
        <div className={styles['service-portfolio-main']} id='service-port-main'>
          <div className={styles['service-portfolio-title']}>
            <h2 data-cursor-size="300px"
                data-cursor-exclusion id='fadeIn'>
                Design
                <br /> 
                Portfolio
            </h2>
          </div>
          
          <div className={styles['service-portfolio-cards']}>
            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#0F1014"
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/kedarkala.webp'
                        loading='lazy'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
                  Kedarkala
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#E30B25"
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/wragby.webp'
                         loading='lazy'
                         width={600}
                        height={600}
                        alt='portfolio image'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
                  Wragby
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#FF8395"
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/dharan.webp'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
                  Dharan
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>

            <div className={styles['service-portfolio-cards-item']}
                 data-cursor-size="100px"
                 data-cursor-color="#0D0A29"
                 data-cursor-text="View More" id='fadeIn'>
              <div className={styles['service-card-top']}>
                <div>
                    <Image src='/assets/service-detail/portfolio/quickx.webp'
                        alt='portfolio image'
                        width={600}
                        height={600}
                        loading='lazy'
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <a className={styles['btn-10']} href='#'>
                  View CaseStudy
                </a>
              </div>
              <div className={styles['service-card-bottom']}>
                <h3 className='color-primary'>
                  QuickX
                </h3>
                <p>
                  Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* Section 4 Approach and Process */}
    <section className={`${styles['main-container']} ${styles['mb-10']}`} id='section-4'>
      <div className={styles['service-detail-process']}>
        <div className={styles['service-detail-process-left']}>
          <h3 className='why-us-anim'>
            Approach and
            <br />
            <span className='stroke'>Process</span>
          </h3>
        </div>
        <div className={styles['service-detail-process-right']}>
          <h4 className='why-us-anim' data-jelly>
            <span>
              Understanding human behavior is key to great UX. Our secret weapon is neuroscience expertise. Unlike other agencies that claim to be experts in UX Design, our team includes in-house psychologists & neuro-scientists who apply the latest behavioral research to penetrate the user's mindset. This unlocks designs that resonates emotionally and triggers desired actions. Armed with these neurological insights, we create experiences with proven psychological pull. Users feel understood, empowered and engaged. Our unique neuro-informed design process yields:
            </span>
          </h4>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
                - Clean, intuitive interfaces that feel effortless to use
            </span>
            <span>
              - Smart UX that maps to users' mental models
            </span>
            <span>
              - Pleasant aesthetics that fit brand and user sensibilities
            </span>
            <span>
              - Micro-interactions that surprise and delight
            </span>
            <span>
                - Aligning user needs and business goals for win-win experiences
            </span>
          </p>
        </div>
      </div>
    </section>

{/* Section 5 Img And Cards */}
<section className={`${styles['main-container']} ${styles['service-approach']}`} id='section-5'>
            <div className={styles['service-approach-main']}>
                <div className={styles['service-approach-left']} id='approachImgCont'>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/design/design1.webp' 
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/design/design2.webp'
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/design/design3.webp'
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                </div>


                <div className={styles['service-approach-right']}>
                <div className={`${styles['service-approach-text-container']} text-card`} 
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>RESEARCH</h4>
                    <p>
                      (Building the understanding of your business as our own) - We begin at the most fundamental level. We conduct thorough research to gather information about your industry, your company and its products and services. We want to know everything that matters - your company’s vision, the product, its purpose, its U.S.P.s, your target audience and the business expectations.
                    </p>
                    </div>

                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>DISCOVERY</h4>
                    <p>(Understanding the goals & challenges) - We then sit with you for an extensive discovery session to understand your business goals, challenges and pain points you’re trying to solve through design. We’ll also look at the data that tells us which parts of your current interface are working and which are not. This will help us create a plan of action tailored to your needs.</p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>STORYBOARDS</h4>
                    <p> (Customer Journey Mapping) - We develop ideas based on our findings in the research & discovery phase. We identify the core functionality of your product, define use cases and build storyboards for each use case.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>WIRE-FRAMING & PROTOTYPING</h4>
                    <p>(Designing the Interface) - We present design strategies that include various colour schemes, style tiles, collections of typography, navigation structure, & call to actions that convey your brand identity and message to your target audience.
                    </p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>VISUAL/U.I. DESIGN</h4>
                    <p>We map your audience’s online behaviour and digital touchpoints to define the consumer journey.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>REFINEMENT</h4>
                    <p>(Usability Testing & User Feedback) - We conduct user-testing sessions and perform a detailed analysis on the pre-established KPIs to understand the areas of improvement and the aberration from the desirable effect on the target audience. We then analyse all the collected data and synthesise our findings into actionable design improvements to further enhance your product.</p>
                    </div>
                </div>
                </div>
                </div>
            </section>

{/* Section 6 */}
        <section className={`${styles['main-container']}`}>
          <OfferCards />
        </section>

        {/* ======================= Next Page Box ====================== */}
        <section className={styles['m-10-15']}>
            <NextBox />
        </section>
        {/* ======================= Next Page Box END ====================== */}

        {/* ======================== Footer ====================== */}
        <div className="footer-desktop">
          <Footer />
        </div>

        <div className="mobile-footer">
          <FooterMobile />
        </div>
        {/* ======================== Footer END ====================== */}

      </div>
    </main>
    </>
  );
}

