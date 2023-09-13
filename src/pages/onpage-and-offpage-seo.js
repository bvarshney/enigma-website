import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { NextSeo } from "next-seo";
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

gsap.config({
  nullTargetWarn: false,
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

export default function blogHowToDesign() {
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
        // the nect line (with the arrow function) is 'a functional value' () =>
        // end: () => `${brandImageNotPin.offsetHeight - brandImagePin.offsetHeight}px 20%`,
        // this line ensures the functional value gets recalculated on resize
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
      title="On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your Website"
      description="Search engine optimization (SEO) is a critical aspect of any
              successful digital marketing strategy. SEO can be divided into two
              main categories: on-page and off-page optimization."
      canonical="https://www.weareenigma.com/onpage-and-offpage-seo"
      openGraph={{
        url: "https://www.weareenigma.com/onpage-and-offpage-seo",
        title: "On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your Website",
        description:
          "Search engine optimization (SEO) is a critical aspect of any successful digital marketing strategy. SEO can be divided into two main categories: on-page and off-page optimization.",
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
        siteName: "https://www.weareenigma.com/onpage-and-offpage-seo",
      }}
    />    

      <Head>
        <title>
          On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your Website
        </title>
        <meta name="description" content="Search engine optimization (SEO) is a critical aspect of any
              successful digital marketing strategy. SEO can be divided into two
              main categories: on-page and off-page optimization." />
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
            <h1>On-Page & Off-Page SEO</h1>
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
            On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your
            Website
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
              <h2>17/01/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/onpage-and-offpage-seo"}
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
                  url={"https://weareenigma.com/onpage-and-offpage-seo"}
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
                  url={"https://weareenigma.com/onpage-and-offpage-seo"}
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
                  url={"https://weareenigma.com/onpage-and-offpage-seo"}
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
            <p id="anim">
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
            <h3
              className="bold-h-u"
              id="anim"
            >
              On-Page SEO: Optimizing Your Website's Content and Structure
            </h3>
            <p id="anim">
              On-page SEO involves optimizing individual web pages on your site
              to improve their search engine rankings and user experience. Some
              key elements of on-page SEO include:
            </p>

            <p id="anim">
              <span className="bold">Title tags:</span> These are HTML tags that
              define the title of your web page and appear in search engine
              results and browser tabs. Optimizing title tags involves including
              relevant keywords and creating a concise, descriptive title that
              accurately reflects your page's content
            </p>

            <p id="anim">
              <span className="bold">Meta descriptions:</span> Meta descriptions
              are brief summaries of your web page's content that appear in
              search engine results. A well-crafted meta description should
              include relevant keywords, be between 150-160 characters, and
              entice users to click on your link.
            </p>

            <p id="anim">
              <span className="bold">URL structure:</span> A clean, descriptive
              URL structure can improve user experience and make it easier for
              search engines to understand and index your content. Include
              relevant keywords in your URLs and avoid using long, complex
              strings of characters.
            </p>

            <p id="anim">
              <span className="bold">Header tags:</span> Header tags (H1, H2,
              H3, etc.) are used to structure your content and indicate the
              hierarchy of information on your page. Including relevant keywords
              in your header tags can help search engines understand your
              content better and improve your search engine rankings.
            </p>

            <p id="anim">
              <span className="bold">Keyword usage: </span>
              Incorporate relevant keywords naturally and strategically
              throughout your content, including in the title, headings, body
              text, and meta description. Avoid keyword stuffing, as this can
              lead to search engine penalties.
            </p>

            
            <p id="anim">
              <span className="bold">Internal linking:</span> Including internal
              links to other pages on your website can improve user experience,
              increase time spent on your site, and help search engines
              understand the structure and relevance of your content.
            </p>

            

            <p id="anim">
              <span className="bold">Image optimization:</span> Optimize images
              on your website by compressing them to reduce file size, using
              descriptive file names, and adding keyword-rich alt text. This can
              improve page load times and help search engines understand the
              context of your images.
            </p>

            

            <p id="anim">
              <span className="bold">Mobile-friendliness:</span> Ensure that
              your website is easily accessible and readable on mobile devices,
              as this can improve user experience and search engine rankings.
            </p>

            

            <p id="anim">
              <span className="bold">Ahrefs:</span> Another popular paid tool,
              Ahrefs offers a wealth of information for keyword research and SEO
              analysis. With features like keyword explorer, content gap
              analysis, and organic search traffic analysis, Ahrefs can help you
              identify high-potential keywords and understand the competitive
              landscape
            </p>

            <div className="blog-img" id="anim">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/off-on-page-seo/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            

            <h3
              className="bold-h-u"
            >
              Off-Page SEO: Building Your Website's Authority and
              Trustworthiness
            </h3>

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

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/off-on-page-seo/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3
              className="bold-h-u"
            >
              Domain Authority and Its Impact on SEO
            </h3>

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

            
            

            <h3
              className="bold-h-u"
            >
              Examples of Websites for Easy and Quick Link Building
            </h3>

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

            
            <h3 className="bold-h">
              Creating a Targeted Keyword List
            </h3>

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
