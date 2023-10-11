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
import Image from "next/image";

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

export default function blogWebsiteCost() {
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
              title="How Much Should a Website Cost? Cracking the Ultimate Conundrum"
              description="In
              this article, we delve into the factors that influence website
              costs, how agencies allocate your budget at each stage of a
              website build, and the importance of creating a well-thought-out
              strategy."
              canonical="https://www.weareenigma.com/how-much-should-a-website-cost"
              openGraph={{
                url: "https://www.weareenigma.com/how-much-should-a-website-cost",
                title: "How Much Should a Website Cost? Cracking the Ultimate Conundrum",
                description:
                  "In this article, we delve into the factors that influence website costs, how agencies allocate your budget at each stage of a website build, and the importance of creating a well-thought-out strategy.",
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
                siteName: "https://www.weareenigma.com/how-much-should-a-website-cost",
              }}
            />

      <Head>
        <title>
          How Much Should a Website Cost? Cracking the Ultimate Conundrum
        </title>
        <meta name="description" content="In
              this article, we delve into the factors that influence website
              costs, how agencies allocate your budget at each stage of a
              website build, and the importance of creating a well-thought-out
              strategy." />
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
            <h1>How Much Should a Website Cost?</h1>
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
            How Much Should a Website Cost? Cracking the Ultimate Conundrum
          </h1>
        </div>

        <div className="main-blog-container" id="main-blog-container">
          <div className="left-section" id="left-section">
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <div>
                  <h1>Posted By</h1>
                </div>
              </div>
              <h2 className="timezone-update">Bhaskar Varshney</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <div>
                  <h1>Posted on</h1>
                </div>
              </div>
              <h2 className="timezone-update">14/03/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <h1>Share Article</h1>
              </div>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/how-much-should-a-website-cost"}
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
                  url={"https://weareenigma.com/how-much-should-a-website-cost"}
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
                  url={"https://weareenigma.com/how-much-should-a-website-cost"}
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
                  url={"https://weareenigma.com/how-much-should-a-website-cost"}
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
            <h3 id="anim" className="italic-text">
              Are you struggling to figure out the cost of a website? Navigating
              the complex world of website pricing can be challenging, but our
              comprehensive guide is here to help you unravel the mystery. In
              this article, we delve into the factors that influence website
              costs, how agencies allocate your budget at each stage of a
              website build, and the importance of creating a well-thought-out
              strategy. We also discuss the crucial role of establishing your
              budget based on your business scale and expected return on
              investment. Armed with this knowledge, you'll be better equipped
              to approach agencies and ensure your website brings value to your
              business. So, say goodbye to the confusion and uncertainty, and
              join us as we break down the enigma of website costs, making the
              entire process more accessible and empowering you to make informed
              decisions for your digital journey.
            </h3>


            <p id="anim">
              "Or really, how long is a piece of string?" As the famous saying
              goes, trying to estimate the cost of a website can feel like an
              impossible task. With agencies offering vastly different pricing
              structures and services, creating a budget for your website might
              seem overwhelming. But fear not! We've got you covered with this
              ultimate guide on estimating website costs, highlighting key
              factors, the impact of your business scale and goals on pricing,
              and how your money is spent. So, let's dive into the digital
              rabbit hole and solve this conundrum.
            </p>
            <h3 className="bold-h" id="anim">
              Decoding Website Scoping
            </h3>
            <p id="anim">
              Before we tackle the budgeting aspect, it's essential to
              understand how agencies allocate your money at each stage of a
              website build.
            </p>

            <h3 className="bold-h" id="anim">
              The Billable Hours Conundrum
            </h3>
            <p id="anim">
              You might be tempted to approach an agency with a detailed list of
              features and sections for your website, hoping for a quote in
              return. However, this approach can lead you to work with agencies
              that focus on ticking off features without considering your unique
              business needs.
              <br />
              Surprisingly, the number of features on your website doesn't
              significantly impact its cost. Features can often be repurposed
              from previous projects, assembled from templates, or shoehorned
              into a site. Instead, what costs more (and gives you the best ROI)
              is a wellthought-out strategy. So, instead of visualizing website
              features yourself, focus on breaking down the challenges and let
              the agency solve them. The more insightful their proposed solution
              is, the better they're likely to be at delivering.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/website-cost/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              Establishing Your Budget: The Ball is in Your Court
            </h3>
            <p>
              The best agencies excel at finding solutions – including your
              budget. Providing your budget helps the agency strategize
              solutions tailored to your challenges and objectives. The key word
              here is "your." The agency can determine whether the budget allows
              for an "allin" solution, a prioritized approach, or a more
              conservative plan.
            </p>

            <h3 className="bold-h">
              Establishing Your Budget: The How-To Guide
            </h3>
            <p>
              The ideal way to set your budget is by considering your business
              scale and the expected return from the project. Comparing the
              website cost with other business expenses can be a good benchmark.
              If you can afford to hire a marketing manager at $60k-70k per
              year, you may want to invest a similar amount in your website to
              achieve comparable value per year. Conversely, if your business
              requires a junior or mid-level role with a $40k salary, you might
              opt for a more modest website investment.
              <br />
              The key is to assess your current situation: what you can afford,
              your goals, and how you want to achieve them. Once you've grasped
              these fundamentals, it's time to contact the agencies.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/website-cost/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            <h3 className="bold-h ">
              Navigating the Agency Landscape: Choosing the Right One
            </h3>
            <p>
              With a clear understanding of your budget and website scope, you
              can now approach agencies confidently. As you embark on this
              digital odyssey, remember to look for agencies that offer
              strategic solutions tailored to your unique challenges and
              objectives.
              
              <br />
              So, the next time someone asks, "How much should a website cost?"
              you can channel your inner Morpheus and say, "The cost is not as
              important as the value it brings to your business."
              
              <br />
              By following the advice in this guide, you'll be well-prepared to
              embark on your digital journey and create a website that's not
              only cost-effective but also designed to deliver results.
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
