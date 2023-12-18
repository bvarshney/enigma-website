import React, { useEffect } from 'react';
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
import PageLoader from "@/components/pageLoader";
import Head from 'next/head';
import Portfolio from '../components/ServiceDetail/Design/Portfolio';
import Process from '../components/ServiceDetail/Design/Process';
// import Faq from '../components/ServiceDetail/Faq';

import { getApolloClient } from '@/lib/apollo-client';
import {  GET_POSTS_WITH_CATEGORY_NAME } from '@/data/posts';
import ServiceBlogs from '../components/ServiceDetail/ServiceBlogs';

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

export default function uiuxservices({ posts }) {

//   const blogFaqData = [
//     {
//         question: "What is a SAAS platform?",
//         answer: "SAAS platform is a cloud-based software service that allows users to access and use a variety of tools and functionality."
//     },
//     {
//         question: "How does billing work?",
//         answer: "We offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method."
//     },
//     {
//         question: "Can I get a refund for my subscription?",
//         answer: "We offers a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis."
//     },
//     {
//         question: "How do I cancel my subscription?",
//         answer: "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing."
//     },
//     {
//         question: "Can I try this platform for free?",
//         answer: "We offers a free trial of its  platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged."
//     },
//     {
//         question: "How do I access documentation?",
//         answer: "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the , as well as code examples and other resources."
//     },
// ]

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
            start: "top -10%",
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

    // Text Reveal Animation For Offer Cards
    useEffect(() => {
      const elementsToAnimate = document.querySelectorAll('#fadeUp');
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

  return (
    <>
      <NextSeo
        title="Award-Winning UI/UX Design Services for Digital Excellence | Enigma"
        description="Elevate your brand with our UI and UX design services. We craft exceptional digital experiences that boost revenue and user loyalty."
        openGraph={{
          url: "https://weareenigma.com/ui-ux-design-services",
          title:
            "Award-Winning UI/UX Design Services for Digital Excellence | Enigma",
          description:
            "Elevate your brand with our UI and UX design services. We craft exceptional digital experiences that boost revenue and user loyalty.",
            images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/service-ui-ux.png",
                    width: 1200,
                    height: 630,
                    alt: "UI/UX Design Services Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
        }}
      
        additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Award-Winning UI/UX Design Services for Digital Excellence | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Elevate your brand with our UI and UX design services. We craft exceptional digital experiences that boost revenue and user loyalty."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/service-ui-ux.png"
                },
              ]}
            /> 

      <Head>
        <link rel="canonical" href="https://weareenigma.com/ui-ux-design-services" />
        <link rel="alternate" href="https://weareenigma.com/ui-ux-design-services" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/ui-ux-design-services/"
                },
                "name": "Award-Winning UI/UX Design Services for Digital Excellence",
                "description": "Elevate your brand with our UI and UX design services. We craft exceptional digital experiences that boost revenue and user loyalty.",
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
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                {
                  "@context": "https://schema.org",
                  "@type": "ProfessionalService",
                  "name": "Enigma Digital",
                  "url": "https://weareenigma.com/",
                  "image": "https://lh3.googleusercontent.com/p/AF1QipOrkTrTs3PcLHNNf0iQVVPlb4FTsUlynqO-DFjb=s680-w680-h510",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Suite # 301, Tower A, Grandslam, Ithum A-40, Sector-62",
                    "addressLocality": "Noida",
                    "addressRegion": "UP",
                    "postalCode": "201309",
                    "addressCountry": "IN"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "reviewCount": "14"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "28.627458269319703",
                    "longitude": " 77.37259286237833"
                  },
                  "telephone": "+918178026136",
                  "priceRange": "$$",
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                      ],
                      "opens": "10:00",
                      "closes": "20:00"
                    }
                  ]
                }
              ])
            }}
          />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
            {
              "@context": "https://schema.org/",
              "@type": "Service",
              "serviceType": "IT services",
              "provider": {
                "@type": "Organization",
                "name": "Enigma Digital",
                "url": "https://weareenigma.com/"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "UI/UX Design Services",
                  "itemListElement": [{
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "User Experience (UX) Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "User Interface (UI) Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Interaction Design (IxD)"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "End-to-End Product Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "User Testing and Evaluation"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Prototyping and Wireframing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Website & Mobile App Design"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Content Strategy for UX"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Usability Testing & Accessibility Design"
                      }
                    }
                  ]
                }
              }
            )
          }}
        />
      </Head>

<SmoothScroll />

<Cursor isGelly={true} />

      <PageLoader text="UI/UX Design Services" />

      <Header />

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
                We seamlessly blend physical and digital worlds to craft exceptional experiences that boost revenue, conversions and loyalty.
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
                Leveraging the power of modern tools, understanding of human behavioural patterns and our unique approach, we transform your vision into visually appealing and functionally seamless digital experiences that users love to explore and engage with. By understanding the needs of your users and your business goals, we approach the design process with an emotionally balanced human-centric approach. This enables us to deliver simple, stunning and user centric designs that engage your customers and boost your conversion rates as a by-product.
              </span>
            </h2>
            <p className={`${styles['m-50']} fadeIn`}
                data-jelly id='fadeIn'>
              <span>
                In a digital-first world, the quality of a user's interaction with your digital touchpoints is pivotal — often the linchpin between a thriving business and a faltering venture. Users demand not just functionality but an intuitive, seamless, and aesthetically pleasing journey through your website or application. Recognising the importance of these touchpoints, we at Enigma Digital champion a human-centred design philosophy that meticulously blends empathy with empirical data to craft digital experiences that captivate and convert. Our approach is thorough: we delve into the heart of user needs and frustrations, employing robust analytics to illuminate the path forward. This culminates into designs that not only meet but exceed user expectations, fostering engagement and driving tangible business results.
              </span>
            </p>
            <a 
              href='/get-in-touch'
              className={`${styles['btn-10']}`} 
              data-cursor-size="100px"
              data-cursor-exclusion>
              <span>
                Advance to Superior UX
              </span>
            </a>
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
<Portfolio />

{/* Section 4 Approach and Process */}
    <section className={`${styles['main-container']} ${styles['mb-10']}`} id='section-4'>
      <div className={styles['service-detail-process']}>
        <div className={styles['service-detail-process-left']}>
          <h3 className={`${styles['sd__approach']} why-us-anim`}>
            Our
            <br />
            <span className='stroke'>Approach</span>
          </h3>
        </div>
        <div className={styles['service-detail-process-right']}>
          <p className={`${styles['mb-50']} why-us-anim`}   data-jelly>
            <span>
              Innovation fuels our creative process, as we harness cutting-edge tools and technologies to push the boundaries of design. We delve into the heart of user behaviour, leveraging extensive research to ensure our designs resonate deeply and deliver a personal touch. Our commitment to collaboration is unwavering, involving clients and stakeholders at every stage to align our creative vision with your business objectives. Through iterative prototyping and testing, we refine our designs to perfection, ensuring a seamless and intuitive user experience.
            </span>
          </p>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
              Quality is the cornerstone of our approach at Enigma Digital. We pride ourselves on delivering designs that are meticulously crafted and rigorously tested to meet the highest standards. Our holistic design solutions cover every touchpoint of the user's journey, ensuring a cohesive and impactful digital presence.
            </span>
          </p>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
              Our team is dedicated to staying ahead of the curve, crafting experiences that are not only contemporary but also future-proof. Data is our compass & human psychology is our co-pilot in this creative journey, guiding our design decisions with actionable insights to enhance usability and conversion rates.
            </span>
          </p>
        </div>
      </div>
    </section>

{/* Section 5 Img And Cards */}
<section className={`${styles['main-container']} ${styles['service-approach']}`} id='section-5'>
              <h3 className={`${styles['sd__approach']} why-us-anim`}>
                The
                <span className='stroke'> Process</span>
              </h3>
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
                    <h4 className='color-primary'>Discover</h4>
                    <p>
                      Our process begins with discovery, where we immerse ourselves in your industry, brand, and audience. We conduct market research, analyse your competitors, and identify your unique value proposition to ensure our designs align with your business goals and resonate with your target users.
                    </p>
                    </div>

                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Empathize</h4>
                    <p>
                      Empathy is the heart of our design philosophy. We engage with real users to understand their needs, frustrations, and desires. Through user interviews, surveys, and persona development, we gain insights that inform every aspect of our design strategy.
                    </p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Sketch</h4>
                    <p> With a solid understanding of the user and your business, we move to sketching and wireframing. This stage is all about rapid visualization of ideas, exploring different concepts, and laying the foundation for the user interface.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Iterate</h4>
                    <p>Iteration is key to excellence. We refine our sketches into detailed prototypes, testing and tweaking as we go. User feedback is integral at this stage, ensuring our designs are not only aesthetically pleasing but also highly functional and user-friendly.
                    </p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Generate</h4>
                    <p>Once we've honed our designs through multiple iterations, we generate the final high-fidelity designs. This includes the creation of a cohesive visual language for your brand, from colour palettes and typography to interactive elements and animations.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Nurture</h4>
                    <p>The design journey doesn't end at launch. We continue to nurture and evolve the design based on user interaction data, A/B testing, and ongoing feedback. Our goal is to ensure your UI/UX not only stands the test of time but also adapts to the ever-changing digital landscape.</p>
                    </div>
                </div>
                </div>
                </div>
            </section>

            <section className={`${styles['main-container']}`}>
              <Process />
            </section>

{/* Section 6 */}
        <section className={`${styles['main-container']}`}>
          <OfferCards />
        </section>

        {/* faq */}
        {/* <Faq faqData={blogFaqData} /> */}

        {/* ================================Related Blogs==================== */}
        <ServiceBlogs posts={posts} />
        {/* ================================Related Blogs==================== */}

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

export async function getStaticProps() {
  // Initialize Apollo Client
  const apolloClient = getApolloClient();

  // Fetch posts using your GraphQL query
  const { data } = await apolloClient.query({
    query: GET_POSTS_WITH_CATEGORY_NAME,
    variables: { categoryName: 'design' }, // Replace with your desired category name
  });

  // Extract posts from the query result
  const { posts: { edges: postEdges } } = data;

  const posts = postEdges.map(({ node }) => node);

  return {
    props: {
      posts,
    },
    revalidate: 10, // Revalidate the page every 1 hour (adjust as needed)
  };
}