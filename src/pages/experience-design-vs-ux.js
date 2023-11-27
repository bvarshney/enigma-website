import React, { useEffect } from "react";
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
import BlogInfo from "@/components/Blogs/BlogInfo";
import PageLoader from "@/components/pageLoader";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail() {
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


if (globalThis.innerWidth>1024) {
  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: brandImagePin,
        markers: false,
      });
    });
    return () => ctx.revert();
  });
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://weareenigma.com/experience-design-vs-ux"
  },
  "headline": "Experience Design vs UX: Key Differences Explained",
  "description": "Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences.",
  "image": [
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-1.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-2.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-3.webp",
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
  "datePublished": "2023-02-17T12:00:00+05:30",
  "dateModified": "2023-11-09T12:00:00+05:30",
};

  return (
    <>

    <NextSeo
      title="Experience Design vs UX: Key Differences Explained"
      description="Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences."
      openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-02-17',
                    modifiedTime: '2023-11-09',
                    tags: ['UX-Design', 'Donald-Arthur', 'Experience-Design', 'Website-Animations'],
                },
        url: "https://weareenigma.com/experience-design-vs-ux",
        title: "Experience Design vs UX: Key Differences Explained",
        description:
          "Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/expeirence-design-vs-ux.png",
                    width: 1200,
                    height: 630,
                    alt: "expeirence design vs user experience design",
                    type: "image/png",
                  },
                ],
          siteName: "Enigma Digital",
      }}

      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Experience Design vs UX: Key Differences Explained"
                },
                {
                  name: "twitter:description",
                  content: "Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/expeirence-design-vs-ux.png"
                },
              ]}
            />

          <Head>
            <link rel="canonical" href="https://weareenigma.com/experience-design-vs-ux" />
            <link rel="alternate" href="https://weareenigma.com/experience-design-vs-ux" hreflang="x-default" />
            <script 
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Experience Design & UX Design" />

      <Header />

      <div className="b__dt-main">
        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            What is Experience Design, And How Is It Different From User Experience Design (UX)?
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">
          <div className="b__dt-auth" id="left-section">
            <BlogInfo author={"Bhaskar Varshney"} date={"17/02/2023"} shareLink={"experience-design-vs-ux"} />
          </div>

          <div className="b__dt-content" id="right-section">

            <p className="b__dt-it">
              Over the past few years, the term Experience Design and User
              Experience have become so closely associated that they're often
              used interchangeably. They're interconnected, but they're not
              identical. And that disparity means there are vital differences
              between them.
            </p>
            <p>
              <span className="bold">Donald Arthur Norman </span>coined the term ‘User
              Experience Design’ while employed at Apple as a User Interface
              Architect. Sometime during the early 1990s, he decided to change
              his title to User Experience Architect. Why did he do it? In Don’s
              own words -
            </p>
            
            <div className="b__dt-quote">
              <p className="bold">
                “I invented the term because I thought Human Interface and
                usability were too narrow: I wanted to cover all aspects of the
                person’s experience with a system, including industrial design,
                graphics, the interface, the physical interaction, and the
                manual.”
              </p>
              <span className="quote-auth light">— Donald Arthur Norman</span>
            </div>          
            
            <div className="b__dt-img">
              <img 
                src="/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-1.webp" 
                alt="What is experience design blog image 1" />
            </div>
            
            <p>
              The term User Experience Design was not coined until the early ,
              but examples of Experience Design date back even earlier. For
              instance, Walt Disney is often regarded as one of the worlds first
              Experience Designer because of his theme parks and resorts.
            </p>
            
            <p>
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during thes,
              amusement parks were seen as dirty and dowdy places where children
              shouldnt go. Walt Disney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (Disney Imagineers).
            </p>
            
            <p>
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether youre a teenager looking
              for thrill-seeking rides or a young family wanting to ride Dumbo
              the flying elephant or the teacup ride, theres something for
              everyone here.
            </p>

            <div className="b__dt-img">
              <img 
                src="/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-2.webp" 
                alt="What is experience design blog image 2" />
            </div>

            <p>
              The term User Experience Design was not coined until the early ,
              but examples of Experience Design date back even earlier. For
              instance, Walt Disney is often regarded as one of the worlds first
              Experience Designer because of his theme parks and resorts.
            </p>
            
            <p>
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during thes,
              amusement parks were seen as dirty and dowdy places where children
              shouldnt go. Walt Disney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (Disney Imagineers).
            </p>
            
            <p>
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether youre a teenager looking
              for thrill-seeking rides or a young family wanting to ride Dumbo
              the flying elephant or the teacup ride, theres something for
              everyone here.
            </p>

            <div className="b__dt-img">
              <img 
                src="/assets/blogs/blog-detail/what-is-experience-design/what-is-experience-design-3.webp" 
                alt="What is experience design blog image 3" />
            </div>
            
            
            <h2>
              So, what precisely is the difference between Experience Design User Experience?
            </h2>
            <p>
              The term User Experience Design was not coined until the early
              1990s, but examples of Experience Design date back even earlier.
              For instance, Walt Disney is often regarded as one of the world’s
              first Experience Designer because of his theme parks and resorts.
            </p>
            <p>
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during the 1950s,
              amusement parks were seen as dirty and dowdy places where children
              shouldn’t go. Walt Dis¬ney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (“Disney Imagineers”).
            </p>
            <p>
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether you’re a teenager
              looking for thrill-seeking rides or a young family wanting to ride
              Dumbo the flying elephant or the teacup ride, there’s something
              for everyone here.
            </p>

            <div className="blog__dt-tags">
                <h4 className="blog__dt-tag">
                    UX Design
                </h4>
                <h4 className="blog__dt-tag">
                    Donald Arthur
                </h4>
                <h4 className="blog__dt-tag">
                    Animations
                </h4>
                <h4 className="blog__dt-tag">
                    Experience Design
                </h4>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
      <RelatedBlogs currentBlogLink={"/experience-design-vs-ux"} category={"design"} />
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
