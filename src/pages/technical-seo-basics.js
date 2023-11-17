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
    "@id": "https://weareenigma.com/technical-seo-basics"
  },
  "headline": "Comprehensive Guide to Technical SEO Essentials",
  "description": "Master technical SEO & learn to optimize your website's infrastructure for better search engine visibility and user experience with this guide.",
  "image": [
    "https://weareenigma.com/assets/blogs/blog-detail/technical-seo-basics/technical-seo-basics-1.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/technical-seo-basics/technical-seo-basics-2.webp"
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
  "datePublished": "2023-01-31T12:00:00+05:30",
  "dateModified": "2023-11-09T12:00:00+05:30",
};

  return (
    <>

            <NextSeo
              title="Comprehensive Guide to Technical SEO Essentials"
              description="Master technical SEO & learn to optimize your website's infrastructure for better search engine visibility and user experience with this guide."
              openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-01-31',
                    modifiedTime: '2023-11-09',
                    tags: ['Technical-SEO', 'Google-Search-Console', 'Page-Speed', 'Google-Analytics'],
                },
                url: "https://weareenigma.com/technical-seo-basics",
                title: "Comprehensive Guide to Technical SEO Essentials",
                description:
                  "Master technical SEO & learn to optimize your website's infrastructure for better search engine visibility and user experience with this guide.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/technical-seo-basics.png",
                    width: 1200,
                    height: 630,
                    alt: "Technical SEO Basics",
                    type: "image/png",
                  },
                ],
                siteName: "Enigma Digital",
              }}
            
              additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: "Comprehensive Guide to Technical SEO Essentials"
                },
                {
                  name: "twitter:description",
                  content: "Master technical SEO & learn to optimize your website's infrastructure for better search engine visibility and user experience with this guide."
                },
                {
                  name: "twitter:image",
                  content: "https://weareenigma.com/assets/featured-images/technical-seo-basics.png"
                },
              ]}
          />

          <Head>
            <link rel="canonical" href="https://weareenigma.com/technical-seo-basics" />
            <link rel="alternate" href="https://weareenigma.com/technical-seo-basics" hreflang="x-default" />
            <script 
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
          </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="Beginner's Guide to Technical SEO" />

      <Header />

      <div className="b__dt-main">
        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            A Beginner's Guide to Technical SEO
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">
          <div className="b__dt-auth" id="left-section">
            <BlogInfo author={"Bhaskar Varshney"} date={"31/01/2023"} shareLink={"technical-seo-basics"} />
          </div>

          <div className="b__dt-content" id="right-section">

            <h2>
              What is Technical SEO?
            </h2>
            <p>
              Technical SEO refers to the process of optimizing your website's
              infrastructure and underlying code, making it easier for search
              engines to crawl, index, and rank your content. It plays a vital
              role in ensuring your website is easily discoverable by search
              engines and offers an optimal user experience. While on-page and
              off-page SEO focus on content and backlinks, technical SEO
              addresses the website's foundational aspects.
            </p>

            <div className="b__dt-img">
                <img
                  src="/assets/blogs/blog-detail/technical-seo-basics/technical-seo-basics-1.webp"
                  alt="Technical Seo Guide Blog Image 1"
                />
            </div>

            <p>
              In this guide, we'll explore the various factors that contribute
              to technical SEO, discuss how to optimize your website for search
              engines, and introduce tools to monitor and analyse your website's
              performance.
            </p>

            <h2 className="under">
              Key Technical Factors and Optimization Techniques
            </h2>

            <h3>
              Site Speed:
            </h3>
            <p>
              Website loading speed is a crucial factor for both user experience
              and search engine rankings. A faster website improves user
              engagement, reduces bounce rates, and is favoured by search
              engines like Google.
            </p>

            <p className="bold">
              To optimize site speed:
            </p>

            <ul className="b__dt-li">
              <li>
                Compress images using tools like TinyPNG or ShortPixel.
              </li>
              <li>
                Minify CSS, JavaScript, and HTML files to reduce file sizes.
              </li>
              <li>
                Use a content delivery network (CDN) to serve your files from
                servers closer to users.
              </li>
              <li>
                Enable browser caching to reduce load times for repeat visitors.
              </li>
            </ul>
              
            <h3>
              Mobile-Friendliness:
            </h3>

            <p>
              With the increasing use of mobile devices, ensuring your website
              is mobile-friendly is essential. Google employs a mobile-first
              indexing approach, which means it predominantly uses the mobile
              version of a site's content for indexing and ranking.
            </p> 
            
            <p className="bold">
              To optimize for mobile-friendliness:
            </p>

            <ul className="b__dt-li">
              <li>
                Use a responsive website design that adjusts to various screen
                sizes.
              </li>
              <li>
                Implement mobile-friendly navigation and user interface
                elements.
              </li>
              <li>
                Optimize images and media for faster loading on mobile devices.
              </li>
              <li>
                Test your website's mobile-friendliness using Google's
                Mobile-Friendly Test tool.
              </li>
            </ul>            
            
            <h3>
              Secure Connections (HTTPS):
            </h3>

            <p>
              Implementing HTTPS (HyperText Transfer Protocol Secure) on your
              website encrypts data transferred between the user's browser and
              your website, ensuring a secure browsing experience. Google
              considers HTTPS a ranking factor, making it an essential element
              of technical SEO.
            </p>
            <p className="bold">
              To transition to HTTPS:
            </p>

            <ul className="b__dt-li">
              <li>
                Obtain an SSL certificate from a certificate authority (CA).
              </li>
              <li>
                Install the SSL certificate on your web server.
              </li>
              <li>
                Update your website's internal links and resources to HTTPS.
              </li>
              <li>
                Set up 301 redirects from HTTP to HTTPS versions of your site.
              </li>
            </ul>

            <h3>
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

            <ul className="b__dt-li">
              <li>
                Create an XML sitemap using tools like Screaming Frog or Yoast
                SEO.
              </li>
              <li>
                Include only essential URLs, excluding low-quality or duplicate
                pages.
              </li>
              <li>
                Update your sitemap whenever new content is added or existing
                content is updated.
              </li>
              <li>
                Submit your XML sitemap to Google Search Console and Bing
                Webmaster Tools.
              </li>
            </ul>

            <h3>
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

            <ul className="b__dt-li">
              <li>
                Create a robots.txt file in your website's root directory.
              </li>
              <li>
                Use the "Disallow" directive to block crawlers from accessing
                specific pages or directories.
              </li>
              <li>
                Test your robots.txt file using Google Search Console's Robots
                Testing Tool.
              </li>
              <li>
                Regularly review and update your robots.txt file to reflect
                changes in your website's structure.
              </li>
            </ul>

            <h3>
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

            <ul className="b__dt-li">
              <li>
                Familiarize yourself with schema.org vocabulary and identify
                relevant schema types for your content.
              </li>
              <li>
                Use Google's Structured Data Markup Helper to generate the
                appropriate markup for your content.
              </li>
              <li>
                Add the generated markup to your website's HTML.
              </li>
              <li>
                Test your structured data implementation using Google's Rich
                Results Test tool.
              </li>
            </ul>

            <div className="b__dt-img">
                <img
                  src="/assets/blogs/blog-detail/technical-seo-basics/technical-seo-basics-2.webp"
                  alt="Technical Seo Guide Blog Image 2"
                />
            </div>

            <h2
              className="under">
              Monitoring and Analysing Website Performance
            </h2>

            <h3>
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

            <ul className="b__dt-li">
              <li>
                Sign up for a Google Search Console account and verify your
                website ownership.
              </li>
              <li>
                Submit your XML sitemap to ensure Google is aware of all your
                site's URLs.
              </li>
              <li>
                Monitor the "Performance" report to track your website's search
                traffic and ranking positions.
              </li>
              <li>
                Review the "Coverage" report to identify any indexing issues or
                crawl errors that need to be addressed.
              </li>
            </ul>

            
            

            <h3>
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

            <ul className="b__dt-li">
              <li>
                Sign up for a Google Analytics account and install the tracking
                code on your website.
              </li>
              <li>
                Set up goals to track conversions and other important user
                actions.
              </li>
              <li>
                Set up goals to track conversions and other important user
                actions.
              </li>
              <li>
                Review the "Site Speed" report to identify any performance
                issues that may be affecting user experience and search engine
                rankings.
              </li>
            </ul>
            
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

            <div className="blog__dt-tags">
                <h1 className="blog__dt-tag">
                    Technical SEO
                </h1>
                <h1 className="blog__dt-tag">
                    Google Search Console
                </h1>
                <h1 className="blog__dt-tag">
                    Page Speed
                </h1>
                <h1 className="blog__dt-tag">
                    Google Analytics
                </h1>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
        <RelatedBlogs currentBlogLink={"/technical-seo-basics"} category={"marketing"} />
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
