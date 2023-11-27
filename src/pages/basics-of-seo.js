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
    "@id": "https://weareenigma.com/basics-of-seo"
  },
  "headline": "A Beginner's Guide to Search Engine Optimization | Enigma",
  "description": "Our beginner's guide to SEO covers all the basic on-page, off-page strategies and best practices to improve your site's search visibility and ranking.",
  "image": [
    "https://weareenigma.com/assets/blogs/blog-detail/basic-seo/basics-of-seo-1.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/basic-seo/basics-of-seo-2.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/basic-seo/basics-of-seo-3.webp"
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
  "datePublished": "2023-01-23T12:00:00+05:30",
  "dateModified": "2023-11-09T12:00:00+05:30",
};

  return (
    <>
      <NextSeo
        title="A Beginner's Guide to Search Engine Optimization | Enigma"
        description="Our beginner's guide to SEO covers all the basic on-page, off-page strategies and best practices to improve your site's search visibility and ranking."
        openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-01-23',
                    modifiedTime: '2023-11-09',
                    tags: ['Website-Seo', 'White-Hat', 'Black-Hat', 'Seo-Spaming'],
                },
          url: "https://weareenigma.com/basics-of-seo",
          title: "A Beginner's Guide to Search Engine Optimization | Enigma",
          description:
            "Our beginner's guide to SEO covers all the basic on-page, off-page strategies and best practices to improve your site's search visibility and ranking.",
          images: [
            {
              url: "https://weareenigma.com/assets/featured-images/basics-of-seo.png",
              width: 1200,
              height: 630,
              alt: "basics of seo",
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}

        additionalMetaTags={[
            {
              name: "twitter:title",
              content: "A Beginner's Guide to Search Engine Optimization | Enigma"
            },
            {
              name: "twitter:description",
              content: "Our beginner's guide to SEO covers all the basic on-page, off-page strategies and best practices to improve your site's search visibility and ranking."
            },
            {
              name: "twitter:image",
              content: "https://weareenigma.com/assets/featured-images/basics-of-seo.png"
            },
          ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/basics-of-seo" />
        <link rel="alternate" href="https://weareenigma.com/basics-of-seo" hreflang="x-default" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
    
    <SmoothScroll />

    <Cursor isGelly={true} />

    <PageLoader text="The Basics of SEO" />

    <Header />

      <div className="b__dt-main">

        <div
          className="b__dt-head-contain"
          data-cursor-size="10px"
          data-cursor-text="">
          <h1 data-jelly id="blog">
            The Basics of SEO: A Comprehensive Beginner's Guide
          </h1>
        </div>

        <div className="b__dt-main-blog" id="main-blog-container">

          <div className="b__dt-auth" id="left-section">
            <BlogInfo author={"Bhaskar Varshney"} date={"03/01/2023"} shareLink={"basics-of-seo"} />
          </div>

          <div className="b__dt-content" id="right-section">

            <p>
              Search Engine Optimization (SEO) is the process of improving a
              website's visibility and ranking on search engine results pages
              (SERPs). A well-optimized website attracts more organic traffic,
              which can lead to increased brand awareness, customer engagement,
              and sales conversions. This guide introduces the concept of SEO,
              its benefits for businesses and website owners, and the key
              strategies and techniques that can help improve search engine
              rankings. With a focus on ethical practices and a comprehensive
              approach, this guide is designed to be your guide, mentor and
              friend in your SEO journey
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/basic-seo/basics-of-seo-1.webp"
                alt="Basics of Seo Image 1"
              />
            </div>

            <h2>
              White-hat vs. Black-hat SEO
            </h2>
            <p>
              SEO techniques can be broadly categorized into two types:
              white-hat and black-hat. Whitehat SEO refers to ethical practices
              that adhere to search engine guidelines and focus on providing
              long-term value for users. Examples include creating high-quality
              content, optimizing on-page elements, and earning backlinks from
              reputable sources. In contrast, black-hat SEO involves deceptive
              tactics that violate search engine guidelines and attempt to
              manipulate rankings. Examples include keyword stuffing, cloaking,
              and buying lowquality backlinks. It's crucial to follow white-hat
              SEO practices, as black-hat techniques can result in penalties or
              even removal from search engine indexes. By adopting a white-hat
              approach, businesses can build a sustainable online presence and
              avoid negative consequences.
            </p>

            

            <h2>
              On-page SEO
            </h2>

            <p>
              On-page SEO involves optimizing the elements of a website that are
              directly under the site owner's control, such as content, HTML
              tags, and site architecture. Key on-page factors include:
            </p>

            

            <p>
              <span className="bold">Content:</span> Creating high-quality,
              relevant, and engaging content that satisfies user intent and
              incorporates target keywords. Focus on offering valuable
              information, addressing user questions, and providing solutions to
              problems. Ensure that the content is original, wellresearched, and
              free of grammatical errors. Use a variety of formats, such as
              text, images, videos, and infographics, to keep users engaged and
              cater to different learning styles.
            </p>

            

            <p>
              <span className="bold">Title tags:</span> Crafting descriptive,
              keyword-rich titles that accurately represent the content of a
              page. Title tags should be 50-60 characters long and include the
              primary keyword near the beginning. A well-written title tag can
              improve click-through rates and help search engines understand the
              main topic of a page.
            </p>

            

            <p>
              <span className="bold">Meta descriptions: </span>
              Writing informative, compelling snippets that summarize the page
              content and entice users to click. Meta descriptions should be
              between 150-160 characters and include target keywords. Although
              meta descriptions do not directly affect rankings, they can
              influence click-through rates and user engagement.
            </p>

            

            <p>
              <span className="bold">Header tags: </span>
              Structuring content with appropriate heading tags (H1, H2, H3,
              etc.) for improved readability and keyword emphasis. Use H1 tags
              for the main title, H2 tags for section headings, and H3 tags for
              subsections. Header tags help search engines understand the
              structure and hierarchy of content and can improve a page's
              chances of ranking for related keywords.
            </p>

            

            <p>
              <span className="bold">Internal linking: </span>
              Connecting related pages within a website to improve navigation,
              distribute link equity, and reinforce topical relevance. Internal
              links help users explore your site and allow search engines to
              crawl and index your content more efficiently. Use descriptive
              anchor text and avoid excessive linking to maintain a natural,
              user-friendly experience.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/basic-seo/basics-of-seo-2.webp"
                alt="Basics of Seo Image 2"
              />
            </div>

            <h2>
              Off-page SEO
            </h2>

            <p>
              Off-page SEO focuses on external factors that influence a
              website's ranking, such as backlinks, social media presence, and
              brand mentions. Key off-page strategies include:
            </p>

            <p>
              <span className="bold">Link building: </span>
              Acquiring high-quality, relevant backlinks from authoritative
              sources to boost site credibility and visibility. Effective link
              building techniques include guest posting, broken link building,
              creating shareable content, and engaging in online communities
              within your niche. Focus on earning links rom reputable websites
              with high domain authority, as these carry more weight in search
              engine algorithms.
            </p>

            <p>
              <span className="bold">Social media marketing: </span>
              Leveraging social media platforms to share content, engage with
              users, and increase brand exposure. Create and maintain active
              profiles on popular platforms like Facebook, Twitter, Instagram,
              and LinkedIn. Share your content regularly, interact with your
              audience, and participate in relevant groups and discussions.
              Social media engagement can indirectly influence SEO by driving
              traffic, increasing brand visibility, and encouraging content
              sharing.
            </p>

            <p>
              <span className="bold">Online reputation management: </span>
              Monitoring and addressing brand mentions and reviews to maintain a
              positive online image. Respond to customer feedback, engage in
              public discussions, and address any negative reviews or comments.
              A strong online reputation can enhance trust and credibility,
              which can influence search engine rankings and user engagement.
            </p>

            <p>
              <span className="bold">Content promotion and outreach: </span>
              Actively promoting your content to influencers, bloggers, and
              industry peers can help increase visibility and generate valuable
              backlinks. Reach out to relevant websites and offer to share your
              content or collaborate on projects. Participate in industry
              forums, Q&A sites, and blog comments to share your expertise and
              drive traffic to your website.
            </p>
            
            <p>
              <span className="bold">Local SEO: </span>
              Optimizing your website for local search results can improve
              visibility and attract customers within your geographic area.
              Claim and optimize your Google My Business listing, incorporate
              local keywords into your content, and earn local citations and
              reviews.
            </p>

            <div className="b__dt-img">
              <img
                src="/assets/blogs/blog-detail/basic-seo/basics-of-seo-3.webp"
                alt="Basics of Seo Image 3"
              />
            </div>
            
            <h2>
              Quality Content, Website Structure, and Promotion
            </h2>

            <p>
              Creating quality content is the foundation of any successful SEO
              campaign. High-quality content meets users' needs, provides value,
              and establishes your website as a reliable source of information.
              To optimize content for SEO, incorporate target keywords, maintain
              readability, and ensure topical relevance.
            </p>
            
            <p>
              A well-structured website facilitates easy navigation,
              improves user experience, and helps search engines index and rank
              your content. Focus on clear navigation menus, a logical URL
              structure, and a mobile-friendly design to optimize your site's
              structure.
            </p>
            <p>
              Promoting your site online is crucial for increasing visibility,
              attracting new visitors, and earning backlinks. Utilize social
              media platforms, guest blogging opportunities, and online
              communities to share your content and connect with your target
              audience.
            </p>
            <p>
              Understanding the basics of SEO is the first step towards
              improving your website's search engine rankings and visibility. By
              focusing on ethical practices and implementing effective on-page
              and off-page optimization strategies, you can build a strong
              online presence and drive organic traffic to your site. Remember
              that SEO is an ongoing process that requires constant monitoring,
              analysis, and adaptation. Stay up-to-date with industry trends and
              search engine algorithm updates to maintain a competitive edge and
              ensure long-term success in the ever-evolving digital landscape.
            </p>

            <div className="blog__dt-tags">
                <h4 className="blog__dt-tag">
                    Website Seo
                </h4>
                <h4 className="blog__dt-tag">
                    White Hat
                </h4>
                <h4 className="blog__dt-tag">
                    Black Hat
                </h4>
                <h4 className="blog__dt-tag">
                    Seo Spaming
                </h4>
            </div>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
        <RelatedBlogs currentBlogLink={"/basics-of-seo"} category={"marketing"} />
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
