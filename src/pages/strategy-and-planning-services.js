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
import CursorAero from '@/components/ServiceDetail/Strategy/StrategyAero';
import NextBox from '@/components/ServiceDetail/Strategy/StrategyNext';
import OfferCards from '@/components/ServiceDetail/Strategy/OfferCards';
import Modal from '../components/PopupForm/formModal';
import { NextSeo } from 'next-seo';
import ServiceBlogs from '@/components/ServiceDetail/ServiceBlogs';
import PageLoader from "@/components/pageLoader";
import Head from 'next/head';
import Process from '../components/ServiceDetail/Strategy/Process';
import Portfolio from '../components/ServiceDetail/Strategy/Portfolio';
// import Faq from '../components/ServiceDetail/Faq';

import { getApolloClient } from '@/lib/apollo-client';
import {  GET_POSTS_WITH_CATEGORY_NAME } from '@/data/posts';

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

export default function Strategy({ posts }) {

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
        title="Digital Strategy & Marketing Planning Services | Enigma"
        description="Digital Strategy and Marketing Planning services that help brands gain clarity, define measurable goals, craft strategies for growth and achieve digital success."
        openGraph={{
          url: "https://weareenigma.com/strategy-and-planning-services",
          title:"Digital Strategy & Marketing Planning Services | Enigma",
          description:"Digital Strategy and Marketing Planning services that help brands gain clarity, define measurable goals, craft strategies for growth and achieve digital success.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/service-strategy.png",
                    width: 1200,
                    height: 630,
                    alt: "Strategy Services Feature Image",
                    type: "image/png",
                  },
                  ],
                siteName: "Enigma Digital",
        }}
      
        additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Digital Strategy & Marketing Planning Services | Enigma"
                },
                {
                  name: "twitter:description",
                  content: "Digital Strategy and Marketing Planning services that help brands gain clarity, define measurable goals, craft strategies for growth and achieve digital success."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/service-strategy.png"
                },
              ]}
            /> 

      <Head>
        <link rel="canonical" href="https://weareenigma.com/strategy-and-planning-services" />
        <link rel="alternate" href="https://weareenigma.com/strategy-and-planning-services" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/strategy-and-planning-services"
                },
                "name": "Digital Strategy & Marketing Planning Services",
                "description": "Digital Strategy and Marketing Planning services that help brands gain clarity, define measurable goals, craft strategies for growth and achieve digital success.",
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
                "name": "Strategy Services",
                  "itemListElement": [{
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Digital Marketing Auditing and Consulting"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "User Experience Consultation"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Conversion Rate Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Data Analytics and Insights"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Brand & Content Strategy"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SEO and SMM Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Social Media Strategy"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Omni-Channel Strategy Development"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Customer Journey Mapping"
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

    <PageLoader text="Strategy & Planning Services" />

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
                Strategy
              </h1>
              <p className={`${styles['hero-top-para']}`} id='service-anim'>
                Dominate the digital landscape with our data-driven, brand-focused, precision-crafted digital strategies and marketing plans.
              </p>
            </div>
            <div>
              <h1 className={`${styles['hero-bottom']}`} id='service-anim' data-cursor-magnetic data-cursor-background-image="/assets/gif/5.gif" data-cursor-size="300px" data-cursor-color="#000">
                <span className='font-ageo'>&</span> Planning
              </h1>
            </div>
          </div>
        </section>

{/* Section 2 */}
        <section className={`${styles['main-container']}`}  id='section-2'>
        <div className={styles.contentContainer}>
          <div className={styles['service-detail-content']}>
            <h2 className={`${styles['m-50']} fadeIn`} data-jelly id='fadeIn'>
              <span>
                Strategic planning based on insight is the starting point of everything we do. Using a blend of strategic free-thinking, broad marketing experience, insights, and proven best practices, we create effective digital marketing strategies that transform data & insights into actionable plans that deliver measurable results.
              </span>
            </h2>
            <p className={`${styles['m-50']} fadeIn`}
                data-jelly id='fadeIn'>
              <span>
                Navigating the complexities of a comprehensive digital strategy can be daunting for even the most experienced managers and business leaders. At Enigma, we understand the intricacies involved in aligning your digital footprint with the ever-evolving demands of customers, technology, and market competition. Our bespoke process is designed to demystify this challenge, offering robust strategies and digital solutions that deliver quantifiable results. We empower our clients with the tools, processes, and strategies necessary to not just respond to, but anticipate, lead, and dominate in their respective industries. 
              </span>
            </p>
            <a 
              href='/get-in-touch'
              className={`${styles['btn-10']}`} 
              data-cursor-size="100px"
              data-cursor-exclusion>
              <span>
                kickstart your growth
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
            Our<br /><span className='stroke'> Approach</span>
          </h3>
        </div>
        <div className={styles['service-detail-process-right']}>
        <p className={`${styles['mb-50']} why-us-anim`} data-jelly>
            <span>
              We believe that the journey to digital success is a strategic one, meticulously charted and navigated with precision. With extensive research, meticulous planning & a detailed understanding of your product/services and your business goals, we create the perfect strategy that builds meaningful online experiences across multiple channels, to resonate with your audience at every touchpoint, and help your customers quickly find what they’re looking for, resulting in delight for your users and business success for you.
            </span>
          </p>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
              We leverage cutting-edge analytics and market insights to develop a comprehensive digital blueprint that propels your brand forward. Our deep understanding of the interplay between brand identity, user experience, and market dynamics allows us to create digital marketing strategies that are not just about being visible; but create a sustainable and impactful digital footprint. Our process is iterative and agile, adapting to the ever-evolving digital landscape.
            </span>
          </p>
          <p className={`${styles['m-50']} why-us-anim`} data-jelly>
            <span>
              At Enigma, we don't just set the bar; we continually raise it. When you work with us, you're not just getting a digital strategy; you're embarking on a journey of digital transformation that will set you apart from the competition and establish your brand as a leader in the digital age.
            </span>
          </p>
        </div>
      </div>
    </section>

{/* Section 5 Img And Cards */}
<section className={`${styles['main-container']} ${styles['service-approach']}`} id='section-5'>
              <h3 className={`${styles['sd__approach']} why-us-anim`}>
                Our
                <span className='stroke'> Process</span>
              </h3>
            <div className={styles['service-approach-main']}>
                <div className={styles['service-approach-left']} id='approachImgCont'>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/strategy/strategy1.webp' 
                        alt='approach image'
                        loading='lazy'
                        width={1000}
                        height={1000}
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}>
                    </Image>
                </div>
                <div className={`${styles['service-approach-img-container']} service-image-container`}>
                    <Image src='/assets/service-detail/strategy/strategy2.webp'
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
                    <h4 className='color-primary'>Learn</h4>
                    <p>
                      We initiate our strategy with a deep dive into your business, absorbing your brand's core objectives, the specific goals you have for digital channels, and the industry nuances. This foundational step ensures our strategies are precisely tailored to your brand's unique vision.
                    </p>
                    </div>

                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                      <h4 className='color-primary'>Examine</h4>
                      <p>
                        We then meticulously evaluate your digital presence, scrutinizing your online footprint to pinpoint both strengths and areas for enhancement. This step provides a strategic overview of your position in the digital arena and helps define measurable goals for the future.
                      </p>
                    </div>
                </div>
                <div className={`${styles['service-approach-text-container']} text-card`}
                    data-cursor-size='100px'
                    data-cursor-exclusion>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                      <h4 className='color-primary'>Advise</h4>
                      <p> Leveraging our insights, we provide targeted advice on communication tactics, campaign concepts, content creation, platforms to be used, and overall user experience. Our guidance is rooted in data, aimed at crafting messages that resonate with your audience and differentiate your brand in the marketplace.</p>
                    </div>
                    <div className={`${styles['service-approach-text-box']} service-approach-text-box`} id='fadeIn'>
                    <h4 className='color-primary'>Plan and Execute</h4>
                    <p>Our final phase involves planning and rolling out integrated digital campaigns across all channels, with a focus on consistency and impact. We continuously monitor and refine our approach based on performance, ensuring your campaigns are optimized for peak performance.
                    </p>
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

        {/* ======================= Next Page Box ====================== */}
        <section className={styles['m-10-15']}>
          <NextBox />
        </section>
              
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
    variables: { categoryName: 'strategy' }, // Replace with your desired category name
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