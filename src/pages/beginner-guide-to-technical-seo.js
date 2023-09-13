import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

import Header from "@/components/Header/Header";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";

gsap.registerPlugin(ScrollTrigger);

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

export default function technicleSeo() {
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
      "#anim",
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

  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImageBlock = document.getElementById("main-blog-container");
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: brandImagePin,
        // pinSpacing: true,
        markers: false,
      });
    });
    return () => ctx.revert();
  });

  // Parallax Image
  if (globalThis.innerWidth > 776) {
    useEffect(() => {
      let ctx = gsap.context(() => {
        gsap.utils.toArray(".image-container").forEach(function (container) {
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
  }

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

  return (
    <>

            <NextSeo
              title="Beginner's Guide to Technical SEO"
              description="Technical SEO refers to the process of optimizing your website's
              infrastructure and underlying code, making it easier for search
              engines to crawl, index, and rank your content."
              canonical="https://www.weareenigma.com/beginner-guide-to-technical-seo"
              openGraph={{
                url: "https://www.weareenigma.com/beginner-guide-to-technical-seo",
                title: "Beginner's Guide to Technical SEO",
                description:
                  "Technical SEO refers to the process of optimizing your website's infrastructure and underlying code, making it easier for search engines to crawl, index, and rank your content.",
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
                siteName: "https://www.weareenigma.com/beginner-guide-to-technical-seo",
              }}
            />

      <Head>
        <title>Beginner's Guide to Technical SEO</title>
        <meta name="description" content="Technical SEO refers to the process of optimizing your website's infrastructure and underlying code, making it easier for search engines to crawl, index, and rank your content." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

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
            <h1>Guide Technical SEO</h1>
          </span>
        </div>
      </div>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

      <div className="blog-detail-main-section">
        <div
          className="blog-detail-heading"
          data-cursor-size="10px"
          data-cursor-text=""
        >
          <h1 data-jelly id="blog">
            Beginner's Guide to Technical SEO
          </h1>
        </div>

        <div className="main-blog-container" id="main-blog-container">
          <div className="left-section" id="left-section">
            <div className="box-blog" id="anim">
              <h1>Posted By</h1>
              <h2>Bhaskar Varshney</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Posted on</h1>
              <h2>31/01/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={
                    "https://weareenigma.com/beginner-guide-to-technical-seo"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/linkedin.webp"
                    alt="social-icons"
                  />
                </LinkedinShareButton>

                <FacebookShareButton
                  url={
                    "https://weareenigma.com/beginner-guide-to-technical-seo"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/facebook.webp"
                    alt="social-icons"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  url={
                    "https://weareenigma.com/beginner-guide-to-technical-seo"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/twitter.webp"
                    alt="social-icons"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={
                    "https://weareenigma.com/beginner-guide-to-technical-seo"
                  }
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/whatsapp.webp"
                    alt="social-icons"
                  />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="right-section" id="right-section">
            <h3 className="bold-h blog-mt-0" id="anim">
              What is Technical SEO?
            </h3>
            <p id="anim">
              Technical SEO refers to the process of optimizing your website's
              infrastructure and underlying code, making it easier for search
              engines to crawl, index, and rank your content. It plays a vital
              role in ensuring your website is easily discoverable by search
              engines and offers an optimal user experience. While on-page and
              off-page SEO focus on content and backlinks, technical SEO
              addresses the website's foundational aspects.
            </p>

            

            <p id="anim">
              In this guide, we'll explore the various factors that contribute
              to technical SEO, discuss how to optimize your website for search
              engines, and introduce tools to monitor and analyse your website's
              performance.
            </p>

            
            

            <h3
              className="bold-h-u"
              id="anim"
            >
              Key Technical Factors and Optimization Techniques
            </h3>

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Site Speed:
            </h3>

            <p id="anim">
              Website loading speed is a crucial factor for both user experience
              and search engine rankings. A faster website improves user
              engagement, reduces bounce rates, and is favoured by search
              engines like Google.
              <br />
              To optimize site speed:
            </p>

            <div id="anim">
              <p className="list-blog">
                Compress images using tools like TinyPNG or ShortPixel.
              </p>
              <p className="list-blog">
                Minify CSS, JavaScript, and HTML files to reduce file sizes.
              </p>
              <p className="list-blog">
                Use a content delivery network (CDN) to serve your files from
                servers closer to users.
              </p>
              <p className="list-blog">
                Enable browser caching to reduce load times for repeat visitors.
              </p>
            </div>

            
            
            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Mobile-Friendliness:
            </h3>

            <p id="anim">
              With the increasing use of mobile devices, ensuring your website
              is mobile-friendly is essential. Google employs a mobile-first
              indexing approach, which means it predominantly uses the mobile
              version of a site's content for indexing and ranking.
              
              To optimize for mobile-friendliness:
            </p>

            <div id="anim">
              <p className="list-blog">
                Use a responsive website design that adjusts to various screen
                sizes.
              </p>
              <p className="list-blog">
                Implement mobile-friendly navigation and user interface
                elements.
              </p>
              <p className="list-blog">
                Optimize images and media for faster loading on mobile devices.
              </p>
              <p className="list-blog">
                Test your website's mobile-friendliness using Google's
                Mobile-Friendly Test tool.
              </p>
            </div>

            
            
            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Secure Connections (HTTPS):
            </h3>

            <p id="anim">
              Implementing HTTPS (HyperText Transfer Protocol Secure) on your
              website encrypts data transferred between the user's browser and
              your website, ensuring a secure browsing experience. Google
              considers HTTPS a ranking factor, making it an essential element
              of technical SEO.
              <br />
              To transition to HTTPS:
            </p>

            <div id="anim">
              <p className="list-blog">
                Obtain an SSL certificate from a certificate authority (CA).
              </p>
              <p className="list-blog">
                Install the SSL certificate on your web server.
              </p>
              <p className="list-blog">
                Update your website's internal links and resources to HTTPS.
              </p>
              <p className="list-blog">
                Set up 301 redirects from HTTP to HTTPS versions of your site.
              </p>
            </div>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-technical-seo/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            

            <h3
              className="bold-h blog-mt-0"
            >
              XML Sitemaps:
            </h3>

            <p>
              An XML sitemap is a file that lists all the URLs on your website,
              helping search engines understand your site's structure and
              discover new content. It's crucial to create and maintain an
              up-to-date XML sitemap for effective indexing.
              <br />
              To optimize XML sitemaps:
            </p>

            <div>
              <p className="list-blog">
                Create an XML sitemap using tools like Screaming Frog or Yoast
                SEO.
              </p>
              <p className="list-blog">
                Include only essential URLs, excluding low-quality or duplicate
                pages.
              </p>
              <p className="list-blog">
                Update your sitemap whenever new content is added or existing
                content is updated.
              </p>
              <p className="list-blog">
                Submit your XML sitemap to Google Search Console and Bing
                Webmaster Tools.
              </p>
            </div>

            
            

            <h3
              className="bold-h blog-mt-0"
            >
              Robots.txt Files:
            </h3>

            <p>
              A robots.txt file instructs search engine crawlers which pages or
              sections of your website they should or shouldn't visit. It helps
              prevent the crawling of low-quality or irrelevant content and
              ensures crawlers focus on the most valuable pages.
              <br />
              To optimize robots.txt files:
            </p>

            <div>
              <p className="list-blog">
                Create a robots.txt file in your website's root directory.
              </p>
              <p className="list-blog">
                Use the "Disallow" directive to block crawlers from accessing
                specific pages or directories.
              </p>
              <p className="list-blog">
                Test your robots.txt file using Google Search Console's Robots
                Testing Tool.
              </p>
              <p className="list-blog">
                Regularly review and update your robots.txt file to reflect
                changes in your website's structure.
              </p>
            </div>

            
            

            <h3
              className="bold-h blog-mt-0"
            >
              Structured Data Markup:
            </h3>

            <p>
              Structured data markup, also known as schema markup, is a form of
              code that helps search engines understand the context and meaning
              of your content. Implementing structured data can lead to rich
              snippets in search results, enhancing your website's visibility
              and potentially increasing click-through rates.
              <br />
              To optimize structured data markup:
            </p>

            <div>
              <p className="list-blog">
                Familiarize yourself with schema.org vocabulary and identify
                relevant schema types for your content.
              </p>
              <p className="list-blog">
                Use Google's Structured Data Markup Helper to generate the
                appropriate markup for your content.
              </p>
              <p className="list-blog">
                Add the generated markup to your website's HTML.
              </p>
              <p className="list-blog">
                Test your structured data implementation using Google's Rich
                Results Test tool.
              </p>
            </div>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-technical-seo/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3
              className="bold-h-u"
              id="anim"
            >
              Monitoring and Analysing Website Performance
            </h3>

            <h3
              className="bold-h blog-mt-0">
              Google Search Console:
            </h3>

            <p>
              Google Search Console is a free tool that helps you monitor and
              maintain your website's presence in Google search results. It
              provides valuable insights into your website's performance,
              indexing status, and any technical issues that may be affecting
              your search engine visibility.
              <br />
              To use Google Search Console:
            </p>

            <div>
              <p className="list-blog">
                Sign up for a Google Search Console account and verify your
                website ownership.
              </p>
              <p className="list-blog">
                Submit your XML sitemap to ensure Google is aware of all your
                site's URLs.
              </p>
              <p className="list-blog">
                Monitor the "Performance" report to track your website's search
                traffic and ranking positions.
              </p>
              <p className="list-blog">
                Review the "Coverage" report to identify any indexing issues or
                crawl errors that need to be addressed.
              </p>
            </div>

            
            

            <h3
              className="bold-h blog-mt-0"
            >
              Google Analytics:
            </h3>

            <p>
              Google Analytics is another free tool that helps you analyse your
              website's traffic and user behaviour. It provides in-depth
              insights into how users interact with your site, allowing you to
              optimize your content and user experience for better search engine
              performance.
              <br />
              To use Google Analytics:
            </p>

            <div>
              <p className="list-blog">
                Sign up for a Google Analytics account and install the tracking
                code on your website.
              </p>
              <p className="list-blog">
                Set up goals to track conversions and other important user
                actions.
              </p>
              <p className="list-blog">
                Set up goals to track conversions and other important user
                actions.
              </p>
              <p className="list-blog">
                Review the "Site Speed" report to identify any performance
                issues that may be affecting user experience and search engine
                rankings.
              </p>
            </div>

            
            

            <p>
              Technical SEO is a critical aspect of optimizing your website for
              search engines, ensuring it's easily discoverable and offers an
              optimal user experience. By focusing on factors such as site
              speed, mobile-friendliness, secure connections, and structured
              data markup, you can significantly improve your website's search
              engine visibility.
            </p>

            

            <p>
              Utilizing tools like Google Search Console and Google Analytics
              will help you monitor and analyse your website's performance,
              allowing you to identify and address any technical issues that may
              be affecting your search engine rankings. As you continue to
              improve your website's technical foundation, you'll be well on
              your way to achieving SEO success and driving organic traffic to
              your site. Remember to stay up-to-date with the latest technical
              SEO best practices and trends, as search engine algorithms are
              constantly evolving.
            </p>
          </div>
        </div>
      </div>


      {/* =================== Related Articles =========================== */}

      <div className="related-articles">
        <div className="related-article-heading">
          <h1>RELATED ARTICLES</h1>
          <Link href="/blogs">
            <h4>All articles</h4>
          </Link>
        </div>

        <div className="related-box-img">
          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-future-of-marketing">
                <img
                  src="/assets/blogs/blog-detail/the-future-of-marketing/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              The Future of Marketing: Why Every Marketer Should Learn
              Neuroscience and Master Neuromarketing
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-basics-of-seo">
                <img
                  src="/assets/blogs/blog-detail/basic-seo/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>The Basics of SEO: A Comprehensive Beginner's Guide</h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/marketing-psychology">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Marketing</h2>
              </Link>
            </div>
            <h1>
              Marketing Psychology: The Secret to Captivating Your Audience and
              Building Unforgettable Brands
            </h1>
          </div>
        </div>
      </div>
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
