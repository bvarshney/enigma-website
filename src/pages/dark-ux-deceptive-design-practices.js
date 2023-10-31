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

export default function unmaskingwebdarksecrets() {
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
      title="Psychology of Dark UX Patterns"
      description="Understand dark UX patterns and how they manipulate users by exploiting cognitive biases. Avoid deceptive design practices and create ethical experiences."
      canonical="https://weareenigma.com/dark-ux-deceptive-design-practices"
      openGraph={{
        url: "https://weareenigma.com/dark-ux-deceptive-design-practices",
        title: "Psychology of Dark UX Patterns",
        description:
          "Understand dark UX patterns and how they manipulate users by exploiting cognitive biases. Avoid deceptive design practices and create ethical experiences.",
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
        siteName: "Enimga Digital Website",
      }}
    />    

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
            <h1>Unmasking the Web's Dark Side</h1>
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
            Unmasking the Web's Dark Side: 5 Insider Secrets to Safeguard Your
            Site from Deceptive Design!
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
              <h2 className="timezone-update">Bhaskar varshney</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <div>
                  <h1>Posted on</h1>
                </div>
              </div>
              <h2 className="timezone-update">01/03/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <h1>Share Article</h1>
              </div>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/unmasking-the-web-dark-side"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/linkedin.png"
                    alt="social-icons"
                  />
                </LinkedinShareButton>

                <FacebookShareButton
                  url={"https://weareenigma.com/unmasking-the-web-dark-side"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/facebook.png"
                    alt="social-icons"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  url={"https://weareenigma.com/unmasking-the-web-dark-side"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/twitter.png"
                    alt="social-icons"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  url={"https://weareenigma.com/unmasking-the-web-dark-side"}
                  quote={
                    "next-share is a social share buttons for your next React apps."
                  }
                  hashtag={"#weareenigma"}
                >
                  <img
                    src="/assets\blogs\blog-detail\social/whatsapp.png"
                    alt="social-icons"
                  />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="right-section" id="right-section">
            <p id="anim">
              Navigating the digital world can be a fun and rewarding
              experience, but it can also be frustrating when you encounter
              sneaky tactics and deceptive practices. As a website design agency
              specializing in web design in India and beyond, we're passionate
              about creating userfriendly experiences. In this article, we'll
              explore five deceptive patterns in website design that you should
              avoid, providing you with alternatives that promote transparency
              and trust. Let's dive in!
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
             
              id="anim"
            >
              There’s nothing worse than something that auto-renews
              unexpectedly.
            </h3>
            <p id="anim">
              We've all been there – signing up for a free trial or
              subscription, only to be automatically charged when the trial
              period ends. This deceptive pattern not only leaves a bad taste in
              your mouth, but it can also negatively impact a company's
              reputation and customer trust.
            </p>

            
            

            <p id="anim">
              <span className="bold">Alternative:</span> Be upfront and
              transparent about auto-renewals. Clearly state that a subscription
              will auto-renew, and provide the option to opt-out or set a
              reminder before the renewal date. Offering customers control over
              their subscriptions builds trust and promotes a positive user
              experience.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
             
              id="anim"
            >
              Be Clear with Data Usage
            </h3>
            <p id="anim">
              In today's digital landscape, data privacy is paramount. It's
              essential to be transparent about how your website collects, uses,
              and shares user data. This not only establishes trust but also
              adheres to data privacy regulations, such as the General Data
              Protection Regulation (GDPR).
            </p>

            
            

            <p id="anim">
              <span className="bold">Alternative:</span> Craft a comprehensive,
              easy-to-understand privacy policy and present it in a
              user-friendly manner. Be sure to highlight key points, such as how
              the data will be used and the user's rights regarding their data.
              Providing a clear opt-in and opt-out mechanism for data collection
              further demonstrates your commitment to user privacy
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            
            <h3 className="bold-h blog-mt-0">
              Products Should Never Sneak into the Cart
            </h3>
            <p>
              Imagine adding a product to your cart, only to find additional
              items have been automatically included without your consent. This
              underhanded tactic may lead to higher sales in the short term, but
              it ultimately damages the user experience and erodes trust.
            </p>

            
            

            <p>
              <span className="bold">Alternative:</span> Prioritize user choice
              and consent. Allow customers to add or remove products from their
              cart with ease. If you want to suggest additional items, make it
              clear that they are optional and require the user to actively
              select them. This approach maintains customer autonomy and fosters
              a positive shopping experience.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Charges Should Come with a Notification
            </h3>
            <p>
              Hidden fees and unexpected charges are not only frustrating but
              can also lead to a loss of customer trust. Transparency in pricing
              is essential to maintaining a positive user experience and
              building long-term customer loyalty.
            </p>

            
            

            <p>
              <span className="bold">Alternative:</span> Disclose all fees and
              charges upfront. Provide a clear breakdown of costs during the
              checkout process, including taxes, shipping fees, and any
              additional charges. This allows customers to make informed
              decisions and prevents unpleasant surprises when they review their
              order.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Copyblogger
            </h3>
            <p>
              Copyblogger is a leading blog on content marketing, copywriting,
              and blogging. They provide practical advice, tips, and strategies
              for creating compelling content that resonates with your audience.
              Copyblogger is known for its in-depth articles, real-world
              examples, and focus on writing techniques that drive results.
            </p>

            
            

            <p>
              <span className="bold">Alternative:</span> Adopt a respectful and
              straightforward approach. Instead of using shame tactics, provide
              clear and concise information on the benefits of taking the
              desired action. This allows users to make informed choices based
              on the value your website offers, rather than being coerced into
              compliance.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3 className="bold-h blog-mt-0">
              No More False Urgency or Scarcity, Please
            </h3>
            <p>
              Creating a false sense of urgency or scarcity, such as fake
              limited-time offers or dwindling stock, can lead to impulsive
              decisions and buyer's remorse. This deceptive pattern not only
              hurts your reputation but also undermines the trustworthiness of
              your website.
            </p>

            
            

            <p>
              <span className="bold">Alternative:</span> Be genuine with your
              promotions and offers. If you have a limited-time offer, make sure
              it's real and provide a clear end date or deadline. Instead of
              using false scarcity, focus on the unique selling points and
              benefits of your products or services. Building trust through
              honesty and transparency will result in long-term customer loyalty
              and a positive reputation.
            </p>

            
            

            <p>
              Deceptive patterns in website design can lead to short-term gains,
              but they often come at the expense of customer trust and
              satisfaction. As a leading web design agency specializing in web
              design in India, we believe that a transparent and user-friendly
              approach is the key to long-lasting success.
            </p>

            
            

            <p>
              By avoiding these deceptive practices and implementing the
              alternatives outlined in this article, you can create a website
              that not only delights users but also establishes trust and
              fosters long-term customer relationships. Remember, honesty and
              transparency will always be appreciated by both your readers and
              SEO bots alike. Happy designing!
            </p>
          </div>
        </div>
      </div>

      {/* =================== Related Articles =========================== */}

      <div className="related-articles">
        <div className="related-article-heading">
          <h1>RELATED ARTICLES</h1>
          <Link href="/blog">
            <h4>All articles</h4>
          </Link>
        </div>

        <div className="related-box-img">
          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/future-of-marketing-neuromarketing">
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
              <Link href="/delightful-digital-design-guide">
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
              <Link href="/captivate-audiences-marketing-psychology">
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
