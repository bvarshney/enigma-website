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
    "@id": "https://weareenigma.com/what-is-ux-design"
  },
  "headline": "UX Design Explained: A Simple Guide for Everyone",
  "description": "Embark on a journey into UX design. Learn the essentials of user experience, the process, techniques, and principles and how it shapes digital interactions.",
  "image": [
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-1.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-2.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-3.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-4.webp",
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
  "datePublished": "2022-11-01T12:00:00+05:30",
  "dateModified": "2023-11-09T12:00:00+05:30",
};

  return (
    <>

    <NextSeo
      title="UX Design Explained: A Simple Guide for Everyone"
      description="Embark on a journey into UX design. Learn the essentials of user experience, the process, techniques, and principles and how it shapes digital interactions."
      openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2022-11-01',
                    modifiedTime: '2023-11-09',
                    tags: ['What is UX', 'UI/UX Design', 'User Research'],
                },
        url: "https://weareenigma.com/what-is-ux-design",
        title: "UX Design Explained: A Simple Guide for Everyone",
        description:
          "Embark on a journey into UX design. Learn the essentials of user experience, the process, techniques, and principles and how it shapes digital interactions.",
          images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/what-is-ux.png",
                    width: 1200,
                    height: 630,
                    alt: "What is UX Design",
                    type: "image/png",
                  },
        ],
        siteName: "Enigma Digital",
      }}
    
      additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "UX Design Explained: A Simple Guide for Everyone"
                },
                {
                  name: "twitter:description",
                  content: "Embark on a journey into UX design. Learn the essentials of user experience, the process, techniques, and principles and how it shapes digital interactions."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/what-is-ux.png"
                },
              ]}
          />

          <Head>
            <link rel="canonical" href="https://weareenigma.com/what-is-ux-design" />
            <link rel="alternate" href="https://weareenigma.com/what-is-ux-design" hreflang="x-default" />
            <script 
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="A Simple Guide to UX Design" />

      <Header />

      <div className="b__dt-main">
        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            What is UX Design: A Simple and Informative Guide for the Curious
            Minds
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">
          <div className="b__dt-auth" id="left-section">
            <BlogInfo author={"Bhaskar Varshney"} date={"01/11/2022"} shareLink={"what-is-ux-design"} />
          </div>

          <div className="b__dt-content" id="right-section">

            <p className="b__dt-it">
              Welcome to the fascinating world of UX design. Grab your popcorn,
              and let's explore this exciting realm. Our goal is to make UX
              design as accessible and enjoyable as possible, so without further
              ado, let's dive right in!
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-1.webp"
                alt="What is ux design blog Image 1"
              />
            </div>

            <h2>
              What is UX Design?
            </h2>

            <p>
              So, what exactly is UX design, and why should you care? UX, or
              User Experience Design, is the art and science of crafting
              user-centred designs that make digital interactions efficient,
              enjoyable, and easy to use. It's all about understanding what
              users want and need and creating an experience that caters to
              those desires. In other words, UX design is the superhero behind
              the scene that ensures your digital interactions are as delightful
              as an episode of Friends.
            </p>
            
            <div className="b__dt-quote">
              <p className="bold">
                UX design is all about understanding what users want and need,
                just like how a skilled chef anticipates the taste buds of their
                diners. It involves researching, planning, and designing various
                elements to create a harmonious flow that makes using a website or
                app as smooth as Michael Jackson's moonwalk.
              </p>
              <span className="quote-auth light">— Bhaskar Varshney, Founder, Enigma Digital</span>
            </div>
            
            <p>
              UX design involves researching, planning, and designing various
              elements to create a harmonious flow that makes using a website or
              app as smooth as a well-choreographed dance routine. To create
              these exceptional digital experiences, UX designers wear different
              hats. Let's explore the key ingredients that make up the UX design
              recipe.
            </p>
            
            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-2.webp"
                alt="What is ux design blog Image 2"
              />
            </div>

            <p>
              <span className="bold">User Research:</span> Like Sherlock Holmes,
              UX designers are like skilled detectives, conducting research to
              gather crucial information about users. They try to understand
              their preferences, motivations, and frustrations to ensure that
              the final design addresses their needs and solves their problems.
              This process might involve interviews, surveys, and observing
              users in action
            </p>
            
            <p>
              <span className="bold">Information Architecture:</span> UX
              designers organize content and information in a logical and
              intuitive way, much like a librarian arranging books on the
              shelves. They create a structure that makes it easy for users to
              find what they're looking for, so they don't feel lost or
              overwhelmed.
            </p>
            
            <p>
              <span className="bold">Interaction Design: </span>
              UX designers are the masterminds behind how users interact with a
              product. They define every tap, swipe, or click, ensuring that
              these interactions feel natural, responsive, and effortless. The
              goal is to make digital interfaces as intuitive as using everyday
              objects and make sure that every tap, swipe, or click feels as
              natural and responsive as having a conversation with Iron Man's
              J.A.R.V.I.S.
            </p>
            
            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-3.webp"
                alt="What is ux design blog Image 3"
              />
            </div>
            
            <p>
              <span className="bold">Usability Testing: </span>
              UX designers test their designs with real users to identify
              potential issues before they become major problems. They iterate
              on their designs and make improvements, ensuring the final product
              is polished and effective. It's like a dress rehearsal before the
              big show.
            </p>
            
            <p>
              <span className="bold">Visual Design: </span>
               Finally, UX designers collaborate with U.I. (User Interface)
              designers to create visually appealing interfaces that are
              functional and beautiful. They ensure that digital landscapes are
              aesthetically pleasing and align with the overall user experience.
            </p>
            
            <p>
              Now that we&#39;ve uncovered the essential elements of UX design,
              you might be wondering how it all comes together. It&#39;s a bit
              like assembling a puzzle. UX designers collect all the pieces from
              user research, information architecture, interaction design,
              usability testing, and visual design. Then, they put them together
              to create a coherent and delightful experience that users will
              appreciate and enjoy, just like a cult classic movie.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/what-is-ux-design/what-is-ux-design-4.webp"
                alt="What is ux design blog Image 4"
              />
            </div>

            <p>
              In conclusion, UX design is the secret ingredient that makes
              digital products enjoyable and user-friendly. It&#39;s an
              essential part of creating memorable experiences that keep users
              coming back for more. So, the next time you&#39;re using a website
              or an app, take a moment to appreciate the UX designers who&#39;ve
              worked tirelessly to make your journey smooth and enjoyable.
            </p>
            
            <p>
              And that&#39;s a wrap! Now that you know about UX design, go forth
              and spread the word, or better yet, consider joining the ranks of
              UX Design maestros at Enigma and help make the digital world a
              more delightful place for everyone. Happy designing!
            </p>

            <div className="blog__dt-tags">
                <h4 className="blog__dt-tag">
                    What is UX
                </h4>
                <h4 className="blog__dt-tag">
                    User Research
                </h4>
                <h4 className="blog__dt-tag">
                    UI/UX Design
                </h4>
                <h4 className="blog__dt-tag">
                   What is UI
                </h4>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
        <RelatedBlogs currentBlogLink={"/what-is-ux-design"} category={"design"} />
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
