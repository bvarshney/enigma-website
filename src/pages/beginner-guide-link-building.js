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

export default function blogBeginnerGuideLinkBuilding() {
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
        duration: 1,
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
              title="A Beginner's Guide to Link Building"
              description="Link building is an essential aspect of Search Engine Optimization
              (SEO), which involves acquiring backlinks from other websites to
              your own."
              canonical="https://www.weareenigma.com/beginner-guide-link-building"
              openGraph={{
                url: "https://www.weareenigma.com/beginner-guide-link-building",
                title: "A Beginner's Guide to Link Building",
                description:
                  "Link building is an essential aspect of Search Engine Optimization (SEO), which involves acquiring backlinks from other websites to your own.",
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
                siteName: "https://www.weareenigma.com/beginner-guide-link-building",
              }}
            />

      <Head>
        <title>A Beginner's Guide to Link Building</title>
        <meta name="description" content="Link building is an essential aspect of Search Engine Optimization (SEO), which involves acquiring backlinks from other websites to your own." />
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
            <h1>Beginner's Guide Link Building</h1>
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
            A Beginner's Guide to Link Building
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
              <h2>27/01/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/beginner-guide-link-building"}
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
                  url={"https://weareenigma.com/beginner-guide-link-building"}
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
                  url={"https://weareenigma.com/beginner-guide-link-building"}
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
                  url={"https://weareenigma.com/beginner-guide-link-building"}
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
              Link building is an essential aspect of Search Engine Optimization
              (SEO), which involves acquiring backlinks from other websites to
              your own. These backlinks serve as "votes of confidence" for your
              site, indicating its relevance and authority to search engines
              like Google. A strong link-building strategy can significantly
              improve your website's authority, search engine rankings, and
              organic traffic.
            </p>

            <p id="anim">
              Understanding the importance of link building and implementing
              effective techniques are crucial for any website owner looking to
              establish an online presence and outperform their competition.
              This beginner's guide will introduce you to the concept of link
              building, explain various techniques, and provide tips on
              assessing the value of potential link sources.
            </p>

            <h3
              className="bold-h-u"
              id="anim"
            >
              Link Building Techniques
            </h3>

            <p id="anim">
              On-page SEO involves optimizing individual web pages on your site
              to improve their search engine rankings and user experience. Some
              key elements of on-page SEO include:
            </p>

            <h3
              className="bold-h"
              id="anim"
            >
              Guest Posting:
            </h3>

            <p id="anim">
              Guest posting involves writing high-quality articles for other
              websites or blogs within your niche and including a backlink to
              your site within the content or author bio. This technique not
              only helps you acquire valuable backlinks but also establishes you
              as an industry expert and exposes your content to a new audience.
              <br />
              To get started with guest posting, research websites or blogs in
              your niche that accept guest submissions. Make sure they have a
              good domain authority and a relevant audience. Reach out to these
              websites with a pitch, outlining your proposed article topic, and
              how it would add value to their audience.
            </p>

            <h3
              className="bold-h"
              id="anim"
            >
              Broken Link Building:
            </h3>

            <p id="anim">
              Broken link building is a technique where you find broken links on
              other websites and suggest your relevant content as a replacement.
              Broken links negatively impact a website's user experience and
              SEO, so webmasters are often receptive to fixing them. <br /> To
              employ this method, use tools like Ahrefs, SEMrush, or Screaming
              Frog to find broken links on websites within your niche. Reach out
              to the webmaster, notify them of the broken link, and offer your
              content as an alternative. Make sure your suggested replacement is
              relevant and adds value to their website.
            </p>

            <h3
              className="bold-h"
              id="anim"
            >
              Resource Page Link Building:
            </h3>

            <p id="anim">
              Resource pages are curated lists of helpful resources, tools, or
              articles on a specific topic. Acquiring a link on a reputable
              resource page can significantly boost your website's authority and
              traffic. <br /> To find relevant resource pages, use search
              operators like "keyword + intitle:resources" or "keyword +
              inurl:links" in Google. Assess the quality and relevance of these
              pages, and then reach out to the webmaster with a personalized
              email, briefly explaining the value your content would bring to
              their resource list.
            </p>

            <h3
              className="bold-h"
              id="anim"
            >
              Skyscraper Technique:
            </h3>

            <p id="anim">
              The Skyscraper Technique, coined by Brian Dean of Backlinko,
              involves finding popular content within your niche, creating an
              even better version of it, and then promoting it to websites that
              have already linked to the original content.
              <br />
              Start by identifying high-performing content in your niche using
              tools like Ahrefs or BuzzSumo. Next, create a superior version by
              adding more depth, updating outdated information, or enhancing its
              visual appeal. Finally, reach out to websites that linked to the
              original content and suggest your improved version as a more
              valuable resource for their audience.
            </p>

            <h3
              className="bold-h"
              id="anim"
            >
              Social Media Sharing:
            </h3>

            <p id="anim">
              Sharing your content on social media platforms like Facebook,
              Twitter, LinkedIn, and Pinterest can help you build organic
              backlinks. When your content is shared and engaged with by users,
              it increases the likelihood of other websites discovering and
              linking to it. Develop a social media strategy that focuses on
              sharing high-quality content, engaging with your target audience,
              and leveraging relevant hashtags to increase your content's
              visibility.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/link-building/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            <h3
              className="bold-h-u"
            >
              Quality Over Quantity and Assessing the Value of Potential Link
              Sources
            </h3>

            <p>
              When it comes to link building, it's crucial to prioritize quality
              over quantity. Acquiring a large number of low-quality backlinks
              can do more harm than good, potentially leading to penalties from
              search engines like Google. Instead, focus on obtaining backlinks
              from reputable websites with high domain authority, relevance to
              your niche, and a strong online presence.
            </p>

            <p>
              To assess the value of potential link sources, consider the
              following factors:
            </p>
            <p>
              <span className="bold">Domain Authority (DA): </span>
              Domain Authority is a metric developed by Moz that predicts a
              website's ability to rank on search engines. A higher DA indicates
              a more authoritative website. Aim to acquire backlinks from
              websites with a DA of at least 30 or higher.
            </p>

            <p>
              <span className="bold">Relevance: </span>
              Acquiring backlinks from websites within your niche or industry is
              crucial, as search engines like Google prioritize relevance when
              assessing the quality of backlinks. Irrelevant backlinks may not
              provide any SEO benefit and could potentially harm your website's
              rankings.
            </p>

            <p>
              <span className="bold">Traffic:</span> Websites with high levels
              of organic traffic are generally more valuable for link building,
              as they have a larger audience that can discover and engage with
              your content. Use tools like SimilarWeb or Ahrefs to analyse a
              website's traffic before pursuing a backlink.
            </p>

            <p>
              <span className="bold">Link Profile:</span> Analyse a website's
              link profile to ensure it has a healthy balance of dofollow and
              nofollow links, as well as a diverse range of linking domains. A
              website with a spammy or unnatural link profile may not be a
              valuable source for backlinks.
            </p>

            <p>
              <span className="bold">Content Quality: </span>
              High-quality content on a website is a good indicator that it's a
              reputable source for backlinks. Evaluate the website's content for
              readability, depth, and relevance to your niche before seeking a
              backlink.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/link-building/2.jpg"
                  alt="Img"
                />
              </div>
            </div>

            <p>
              Link building is a critical component of a successful SEO
              strategy, and understanding its importance and employing effective
              techniques can significantly improve your website's authority and
              search engine rankings. By focusing on quality over quantity and
              carefully assessing the value of potential link sources, you can
              develop a strong link-building strategy that drives organic
              traffic and helps you achieve your online marketing goals.
            </p>

            <p>
              Remember to be patient and persistent in your link-building
              efforts, as it's a long-term process that requires continuous work
              and adaptation. By staying up-to-date with the latest SEO trends
              and best practices, you can ensure your website stays ahead of the
              competition and maintains its visibility on search engines. With a
              well-planned and executed linkbuilding strategy, you'll be well on
              your way to online success.
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
