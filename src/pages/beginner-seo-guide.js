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
    "@id": "https://weareenigma.com/beginner-seo-guide"
  },
  "headline": "On-Page & Off-Page SEO: Optimize Your Website with Enigma",
  "description": "Dive into the essentials of on-page and off-page SEO with Enigma. Learn how to optimize content, build authority, and drive organic traffic for success.",
  "image": [
    "https://weareenigma.com/assets/blogs/blog-detail/beginner-guide-to-seo/beginner-guide-to-seo-1.webp",
    "https://weareenigma.com/assets/blogs/blog-detail/beginner-guide-to-seo/beginner-guide-to-seo-2.webp"
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
  "datePublished": "2023-01-17T12:00:00+05:30",
  "dateModified": "2023-11-09T12:00:00+05:30",
};

  return (
    <>

    <NextSeo
      title="On-Page & Off-Page SEO: Optimize Your Website with Enigma"
      description="Dive into the essentials of on-page and off-page SEO with Enigma. Learn how to optimize content, build authority, and drive organic traffic for success."
      openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2023-01-17',
                    modifiedTime: '2023-11-09',
                    tags: ['On-Page-Seo', 'Marketing', 'Digital-Marketing', 'DA'],
                },
        url: "https://weareenigma.com/beginner-seo-guide",
        title: "On-Page & Off-Page SEO: Optimize Your Website with Enigma",
        description:
          "Dive into the essentials of on-page and off-page SEO with Enigma. Learn how to optimize content, build authority, and drive organic traffic for success.",
          images: [
                    {
                      url: "https://weareenigma.com/assets/featured-images/beginner-seo-guide.png",
                      width: 1200,
                      height: 630,
                      alt: "beginner seo guide",
                      type: "image/png",
                    },
                  ],
                  siteName: "Enigma Digital",
          }}
          additionalMetaTags={[
            {
              name: "twitter:title",
              content: "On-Page & Off-Page SEO: Optimize Your Website with Enigma"
            },
            {
              name: "twitter:description",
              content: "Dive into the essentials of on-page and off-page SEO with Enigma. Learn how to optimize content, build authority, and drive organic traffic for success."
            },
            {
              name: "twitter:image",
              content: "https://weareenigma.com/assets/featured-images/beginner-seo-guide.png"
            },
          ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/beginner-seo-guide" />
        <link rel="alternate" href="https://weareenigma.com/beginner-seo-guide" hreflang="x-default" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <SmoothScroll />

      <Cursor isGelly={true} />

      <PageLoader text="On-Page & Off-Page SEO" />

      <Header />

      <div className="b__dt-main">
        <div
            className="b__dt-head-contain"
            data-cursor-size="10px"
            data-cursor-text="">
            <h1 data-jelly id="blog">
              On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your Website
            </h1>
          </div>

          <div className="b__dt-main-blog" id="main-blog-container">
            <div className="b__dt-auth" id="left-section">
              <BlogInfo author={"Bhaskar Varshney"} date={"17/01/2023"} shareLink={"beginner-seo-guide"} />
            </div>
  
          <div className="b__dt-content" id="right-section">
            <p>
              Search engine optimization (SEO) is a critical aspect of any
              successful digital marketing strategy. SEO can be divided into two
              main categories: on-page and off-page optimization. On-page SEO
              focuses on optimizing individual web pages and their content,
              while off-page SEO involves activities outside your website that
              influence your search engine rankings. This guide will
              differentiate between on-page and off-page SEO, discuss the
              various factors that influence each type, and provide examples of
              websites where you can do link-building easily and get quick
              results. Let's dive into the world of SEO and learn how to
              optimize your website for maximum visibility and success.
            </p>

            <div className="b__dt-img" id="anim">
                <img
                  src="/assets/blogs/blog-detail/beginner-guide-to-seo/beginner-guide-to-seo-1.webp"
                  alt="Beginner Guide To Seo Image 1"
                />
            </div>
            
            <h2>
              On-Page SEO: Optimizing Your Website's Content and Structure
            </h2>

            <p>
              On-page SEO involves optimizing individual web pages on your site
              to improve their search engine rankings and user experience. Some
              key elements of on-page SEO include:
            </p>

            <p>
              <span className="bold">Title tags:</span> These are HTML tags that
              define the title of your web page and appear in search engine
              results and browser tabs. Optimizing title tags involves including
              relevant keywords and creating a concise, descriptive title that
              accurately reflects your page's content
            </p>

            <p>
              <span className="bold">Meta descriptions:</span> Meta descriptions
              are brief summaries of your web page's content that appear in
              search engine results. A well-crafted meta description should
              include relevant keywords, be between 150 – 160 characters, and
              entice users to click on your link.
            </p>

            <p>
              <span className="bold">URL structure:</span> A clean, descriptive
              URL structure can improve user experience and make it easier for
              search engines to understand and index your content. Include
              relevant keywords in your URLs and avoid using long, complex
              strings of characters.
            </p>

            <p>
              <span className="bold">Header tags:</span> Header tags (H1, H2,
              H3, etc.) are used to structure your content and indicate the
              hierarchy of information on your page. Including relevant keywords
              in your header tags can help search engines understand your
              content better and improve your search engine rankings.
            </p>

            <p >
              <span className="bold">Keyword usage: </span>
              Incorporate relevant keywords naturally and strategically
              throughout your content, including in the title, headings, body
              text, and meta description. Avoid keyword stuffing, as this can
              lead to search engine penalties.
            </p>

            
            <p>
              <span className="bold">Internal linking:</span> Including internal
              links to other pages on your website can improve user experience,
              increase time spent on your site, and help search engines
              understand the structure and relevance of your content.
            </p>

            <p>
              <span className="bold">Image optimization:</span> Optimize images
              on your website by compressing them to reduce file size, using
              descriptive file names, and adding keyword-rich alt text. This can
              improve page load times and help search engines understand the
              context of your images.
            </p>

            <p>
              <span className="bold">Mobile-friendliness:</span> Ensure that
              your website is easily accessible and readable on mobile devices,
              as this can improve user experience and search engine rankings.
            </p>

            <p>
              <span className="bold">Ahrefs:</span> Another popular paid tool,
              Ahrefs offers a wealth of information for keyword research and SEO
              analysis. With features like keyword explorer, content gap
              analysis, and organic search traffic analysis, Ahrefs can help you
              identify high-potential keywords and understand the competitive
              landscape
            </p>

            <div className="b__dt-img" id="anim">
                <img
                  src="/assets/blogs/blog-detail/beginner-guide-to-seo/beginner-guide-to-seo-2.webp"
                  alt="Beginner Guide To Seo Image 2"
                />
            </div>

            <h2>
              Off-Page SEO: Building Your Website's Authority and
              Trustworthiness
            </h2>

            <p>
              Off-page SEO refers to activities outside your website that
              influence your search engine rankings. These activities can
              include:
            </p>

            <p>
              <span className="bold">Backlinks: </span>
              Backlinks, also known as inbound links or incoming links, are
              links from other websites to your site. High-quality, relevant
              backlinks can improve your website's authority, trustworthiness,
              and search engine rankings.
            </p>

            <p>
              <span className="bold">Social media:</span> A strong presence on
              social media platforms like Facebook, Twitter, LinkedIn, and
              Instagram can help increase your brand's visibility, drive traffic
              to your website, and improve your search engine rankings.
            </p>
            
            <p>
              <span className="bold">Online directories:</span> Listing your
              website on reputable online directories can help improve your
              site's visibility, generate referral traffic, and boost your
              search engine rankings.
            </p>

            <p>
              <span className="bold">Brand mentions:</span> When other websites,
              influencers, or users mention your brand online, it can positively
              impact your website's credibility and search engine rankings.
              Encourage brand mentions by creating shareable content, engaging
              with your audience, and collaborating with influencers in your
              niche.
            </p>
            
            <p>
              <span className="bold">Guest posting:</span> Writing high-quality,
              informative guest posts for authoritative websites in your
              industry can help you gain valuable backlinks, increase your
              online visibility, and establish your brand as an expert in your
              field.
            </p>
            
            <h2>
              Domain Authority and Its Impact on SEO
            </h2>

            <p>
              Domain Authority (DA) is a metric developed by Moz that predicts
              how well a website will rank on search engine result pages
              (SERPs). DA scores range from 1 to 100, with higher scores
              indicating a greater likelihood of ranking well. DA is influenced
              by factors such as the number and quality of backlinks, the age of
              your domain, and the overall strength of your SEO. Improving your
              DA can help increase your search engine rankings, drive more
              organic traffic to your site, and enhance your online credibility.
            </p>

            <h2>
              Examples of Websites for Easy and Quick Link Building
            </h2>

            <p>
              There are several websites where you can do link-building easily
              and get quick results. Some examples include:
            </p>

            <p>
              <span className="bold">Medium:</span> A popular blogging platform
              that allows you to publish articles and include links to your
              website.
            </p>

            <p>
              <span className="bold">Quora: </span>A question-and-answer website
              where you can answer user questions and include relevant links to
              your site.
            </p>

            <p>
              <span className="bold">LinkedIn:</span> A professional networking
              platform where you can publish articles and share content with
              links to your website
            </p>
            
            <h2>
              Creating a Targeted Keyword List
            </h2>

            <p>
              After analysing keyword competitiveness, search volume, and user
              intent, compile a targeted list of keywords for optimization. This
              list should include a mix of high-volume, low-competition keywords
              and long-tail phrases that align with your niche and target
              audience. Prioritize keywords based on their potential to drive
              traffic, align with user intent, and support your business goals.
              Regularly review and update your keyword list to stay current with
              industry trends and search engine algorithm changes.
            </p>

            <p>
              On-page and off-page SEO are crucial components of any successful
              digital marketing strategy. By optimizing your website's content
              and structure, building high-quality backlinks, and leveraging
              social media and other off-page activities, you can improve your
              search engine rankings and drive more organic traffic to your
              site. Remember, SEO is an ongoing process that requires continuous
              effort, analysis, and adaptation. Stay informed about industry
              trends, search engine algorithm updates, and best practices to
              ensure your website remains competitive and engaging for your
              target audience.
            </p>

            <div className="blog__dt-tags">
                <h1 className="blog__dt-tag">
                    On Page Seo
                </h1>
                <h1 className="blog__dt-tag">
                    Marketing
                </h1>
                <h1 className="blog__dt-tag">
                    Digital Marketing
                </h1>
                <h1 className="blog__dt-tag">
                    DA
                </h1>
            </div>

          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}
      <RelatedBlogs currentBlogLink={"/beginner-seo-guide"} category={"marketing"} />
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
