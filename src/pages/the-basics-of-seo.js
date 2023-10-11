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

export default function blogbasicofseo() {
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
      title="The Basics of SEO: A Comprehensive Beginner's Guide"
      description="A well-optimized website attracts more organic traffic,
              which can lead to increased brand awareness, customer engagement,
              and sales conversions."
      canonical="https://www.weareenigma.com/the-basics-of-seo"
      openGraph={{
        url: "https://www.weareenigma.com/the-basics-of-seo",
        title: "The Basics of SEO: A Comprehensive Beginner's Guide",
        description:
          "A well-optimized website attracts more organic traffic, which can lead to increased brand awareness, customer engagement, and sales conversions.",
          images: [
                  {
                    url: "https://i.ibb.co/k0NMQw9/home.png",
                    width: 400,
                    height: 600,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                  { url: "https://i.ibb.co/k0NMQw9/home.png" },
        ],
        siteName: "https://www.weareenigma.com/the-basics-of-seo",
      }}
    />    

      <Head>
        <title>The Basics of SEO: A Comprehensive Beginner's Guide</title>
        <meta name="description" content="A well-optimized website attracts more organic traffic,
              which can lead to increased brand awareness, customer engagement,
              and sales conversions." />
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
            <h1>The Basics of SEO</h1>
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
            The Basics of SEO: A Comprehensive Beginner's Guide
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
              <h2>03/01/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/the-basics-of-seo"}
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
                  url={"https://weareenigma.com/the-basics-of-seo"}
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
                  url={"https://weareenigma.com/the-basics-of-seo"}
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
                  url={"https://weareenigma.com/the-basics-of-seo"}
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
            <h3 className="bold-h" id="anim">
              White-hat vs. Black-hat SEO
            </h3>
            <p id="anim">
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

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/basic-seo/1.webp"
                  alt="Img"
                />
              </div>
            </div>

            
            
            <h3 className="bold-h">
              On-page SEO
            </h3>

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

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/basic-seo/2.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3 className="bold-h">
              Off-page SEO
            </h3>

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

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/basic-seo/3.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3 className="bold-h">
              Quality Content, Website Structure, and Promotion
            </h3>

            <p>
              Creating quality content is the foundation of any successful SEO
              campaign. High-quality content meets users' needs, provides value,
              and establishes your website as a reliable source of information.
              To optimize content for SEO, incorporate target keywords, maintain
              readability, and ensure topical relevance.
              <br />
              <br />A well-structured website facilitates easy navigation,
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
              <br />
              <br />
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
              <Link href="/how-to-delightfully-design">
                <img
                  src="/assets/blogs/blog-detail/delightfully/feature.webp"
                  alt="img"
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <h2>Design</h2>
              </Link>
            </div>
            <h1>
              How to Delightfully Design for Diverse Digital Platforms: A User's
              Guide to Creative UX Mastery
            </h1>
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
