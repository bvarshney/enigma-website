import React, { useEffect, useRef, useState } from "react";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";
import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import RelatedBlogs from "@/components/Blogs/relatedBlogs";
// import BlogInfo from "@/components/Blogs/BlogInfo";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";

import TermCard from '@/components/UxGlossary/TermCard';
import TermModal from '@/components/UxGlossary/TermModal';
import glossaryData from '@/components/UxGlossary/glossaryData';

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {

    const [filter, setFilter] = useState('');

    const [selectedTerm, setSelectedTerm] = useState(null);

    const handleCardClick = (term) => {
      setSelectedTerm(term);
    };
  
    const handleCloseModal = () => {
      setSelectedTerm(null);
    };

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#blog",
      {
        rotationX: -80,
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
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#right-section",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

    // Hero Section Animation
    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          ".ux-gls-img",
          {
            opacity: 0,
            translateY: 200,
          },
          {
            delay: 3.8,
            duration: 1.3,
            opacity: 1,
            stagger: 0.1,
            translateY: 0,
          }
        );
        return () => tl.kill();
      }, []);


// if (globalThis.innerWidth>1024) {
//   // Section Pinnnig
//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       let brandImagePin = document.getElementsByClassName("ux-gls-img");
//       let brandImageNotPin = document.getElementById("right-section");
//       ScrollTrigger.create({
//         trigger: brandImagePin,
//         start: "top 10%",
//         endTrigger: brandImageNotPin,
//         end: "bottom 80%",
//         invalidateOnRefresh: true,
//         pin: brandImagePin,
//         markers: false,
//       });
//     });
//     return () => ctx.revert();
//   });
// }

const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://weareenigma.com/ux-design-glossary-guide"
    },
    "headline": "UX Design Glossary: Mastering UX Terms & Conceptsx",
    "description": "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide.",
    "image": [
        "https://weareenigma.com/assets/featured-images/ux-design-glossary.png"
    ],  
    "author": {
      "@type": "Person",
      "name": "Bhaskar Varshney",
      "url": "https://in.linkedin.com/in/bvarshney",
    },  
    "publisher": {
      "@type": "Organization",
      "name": "Enigma Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
      }
    },
    "datePublished": "2023-06-14T12:00:00+05:30",
    "dateModified": "2023-11-09T12:00:00+05:30",
  };

  return (
    <>

    <NextSeo
      title="UX Design Glossary: Mastering UX Terms & Concepts"
      description="Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide."
      openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-06-14',
                    modifiedTime: '2023-11-09',
                    tags: ['UX-Principles', 'UX-55-Terms', 'UX-Glossary'],
                },
        url: "https://weareenigma.com/ux-design-glossary-guide",
        title: "UX Design Glossary: Mastering UX Terms & Concepts",
        description:
          "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/ux-design-glossary.png",
                    width: 1200,
                    height: 630,
                    alt: "UX Design Glossary",
                    type: "image/png",
                  },
        ],
        siteName: "Enigma Digital",
      }}
    
      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "UX Design Glossary: Mastering UX Terms & Concepts"
                },
                {
                  name: "twitter:description",
                  content: "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/ux-design-glossary.png"
                },
              ]}
          />

          <Head>
            <link rel="canonical" href="https://weareenigma.com/ux-design-glossary-guide" />
            <link rel="alternate" href="https://weareenigma.com/ux-design-glossary-guide" hreflang="x-default" />
            <script 
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="The UX Design Glossary" />

      <Header />

      <div className="b__dt-main">
        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            The UX Design Glossary: Deciphering the Alphabet Soup of UX Jargon
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">
          <div className="ux-gls-img">
            <img src="/assets/blogs/blog-detail/ux-glossary/ux-glossary-main.jpg" alt="UX Glossary Main" title="UX Glossary Main"/>
          </div>

            <div className="b_dt-gls-top" id="right-section">
                <h2>
                    &#8220;Engage." A phrase familiar to all Star Trek fans. It's Captain Picard's iconic command to the crew of the USS Enterprise to go forth and explore new worlds. But we're not in space. Instead, we're diving into the vast universe of User Experience (UX) Design, and this article is your command centre. Here, we will demystify the jargon, unpack the terms, and give you a warp-speed introduction to the exciting world of UX design, akin to a UX design agency.
                </h2>
                <p>
                    So buckle up, future UXers, and prepare to "engage" with the UX Design Glossary.
                </p>
                <p >
                    UX design, like any specialized field, has its own language. A newcomer might feel like they've landed on an alien planet when they first encounter phrases like Agile UX, Automated UX Research, or Information Architecture. But fear not. As a leading UI/UX agency, we're here to help you decipher these terms and give you a confident start to your UX journey.
                </p>
            </div>
        </div>

       
            
        <div>
              <div className="ux-gls-filter-input">
              <p>Seacrh by term :</p>
                <input
                    type="text"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    placeholder=""
                />
              </div>
            <div className="b_dt-gls-grid">
                {/* Render TermCards based on the filter */}
                {glossaryData.terms
                    .filter((term) => term.name.toLowerCase().startsWith(filter.toLowerCase()))
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((term) => (
                    <TermCard key={term.id} term={term} onClick={handleCardClick} />
                ))}
                {/* {glossaryData.terms.map((term) => (
                    <TermCard key={term.id} term={term} onClick={handleCardClick} />
                ))} */}
            </div>
            <div id='glossary-modal'>
                {selectedTerm && <TermModal term={selectedTerm} onClose={handleCloseModal} />}
            </div>
        </div>
{/* =================== END of Article =========================== */}

          </div>
        {/* </div> */}
      {/* </div> */}

      {/* =================== Related Articles =========================== */}
        <RelatedBlogs currentBlogLink={"/ux-design-glossary-guide"} category={"design"} />
      {/* =================== Related Articles END =========================== */}


      {/* ======================== Footer ====================== */}
      <div className="desktop-footer">
        <Footer />
      </div>
      <div className="mobile-footer">
        <FooterMobile />
      </div>
      {/* ======================== Footer END ====================== */}
    </>
  );
}