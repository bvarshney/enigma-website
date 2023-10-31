import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";
import { NextSeo } from "next-seo";

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

export default function blogWebsites() {
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
        title="List of 30 Link Building Websites - SEO Guide"
        description="Dive into our comprehensive guide on 30 websites for effective link-building in SEO. Boost your website's authority and visibility now!"
        canonical="https://weareenigma.com/link-building-website-list"
        openGraph={{
          url: "https://weareenigma.com/link-building-website-list",
          title: "List of 30 Link Building Websites - SEO Guide",
          description:
            "Dive into our comprehensive guide on 30 websites for effective link-building in SEO. Boost your website's authority and visibility now!",
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
          siteName: "Enigma Digital Website",
        }}
      />

{/* Loader */}
      <div className="loader-wrap" id="loader">
        <div className="loader-wrap-heading">
          <span>
            <h1>30 websites</h1>
          </span>
        </div>
        <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
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
            Beginners Guide to SEO: 30 websites to help you getting started on
            your link building journey
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
              <h2>24/04/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/30-websites"}
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
                  url={"https://weareenigma.com/30-websites"}
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
                  url={"https://weareenigma.com/30-websites"}
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
                  url={"https://weareenigma.com/30-websites"}
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
              Link-building is a crucial aspect of any SEO strategy, helping to
              establish your website's authority and increase its visibility on
              search engines. To get you started, we've compiled a list of 30
              websites where you can create backlinks easily and quickly. For
              each website, we'll outline the process and the type of content
              that needs to be submitted, so you can start building your online
              presence effectively.
            </p>
            <p id="anim">
              These 30 websites encompass a variety of platforms, including
              blogging sites, social media networks, content curation platforms,
              and online business directories. By utilizing a diverse range of
              websites, you can ensure a well-rounded link-building strategy
              that caters to different audiences and search engine preferences.
            </p>
            <p id="anim">
              Each platform requires a specific type of content and approach,
              making it crucial to tailor your submissions to the requirements
              and expectations of each website. For example, blogging platforms
              like Medium and Blogger prioritize high-quality articles, while
              social media networks such as Pinterest and LinkedIn focus on
              visually engaging content and professional insights, respectively.
            </p>
            <p id="anim">
              It's essential to remember that effective link-building is not
              merely about the quantity of backlinks you generate but also their
              quality. To ensure your efforts are worthwhile, concentrate on
              producing valuable, relevant content that appeals to your target
              audience and positively contributes to the communities in which
              you share it.
            </p>

            <p id="anim">
              Building genuine relationships with other professionals, users,
              and website owners can significantly enhance the success of your
              link-building strategy. Engaging in conversations, providing
              insightful comments, and collaborating with others in your niche
              will help you build a strong online presence and attract more
              organic traffic to your website.
            </p>

            <p id="anim">
              To sum it up, this list of 30 websites offers an excellent
              starting point for your link-building endeavours. By understanding
              the process and content requirements for each platform, you can
              create a diverse and effective SEO strategy that boosts your
              website's authority and visibility on search engines. Remember to
              prioritize quality over quantity, and focus on building authentic
              relationships with your online community to maximize the impact of
              your link-building efforts.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/30-websites/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h blog-mt-0">
              Medium (Blogging platform)
            </h3>

            <p>
              Process: Sign up for a free account, write and publish articles
              with links to your website.
              <br />
              Content: High-quality, informative articles related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Quora (Q&A platform)
            </h3>

            <p>
              Process: Create an account, search for relevant questions, and
              provide valuable answers with links to your website when
              appropriate. <br /> Content: Well-written, informative answers
              addressing user questions.
            </p>

            <h3 className="bold-h blog-mt-0">
              LinkedIn (Professional networking platform)
            </h3>

            <p>
              Process: Create a profile, publish articles, and share content
              with links to your website.
              <br />
              Content: Professional articles, blog posts, and industry-related
              updates.
            </p>

            <h3 className="bold-h blog-mt-0">
              Blogger (Blogging platform)
            </h3>

            <p>
              Process: Sign up for a free account, create a blog, and publish
              articles with links to your website.
              <br />
              Content: High-quality, informative articles related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Tumblr (Microblogging platform)
            </h3>

            <p>
              Process: Create an account, post short-form content, and include
              links to your website.
              <br />
              Content: Short articles, images, quotes, or multimedia content
              relevant to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Reddit (Social news aggregation and discussion platform)
            </h3>

            <p>
              Process: Sign up for an account, participate in relevant
              subreddits, and share content with links to your website.
              <br />
              Content: Informative articles, engaging images, or multimedia
              content that adds value to subreddit discussions.
            </p>

            <h3 className="bold-h blog-mt-0">
              Scoop.it (Content curation platform)
            </h3>

            <p>
              Process: Create a free account, curate content related to your
              niche, and add links to your website.
              <br />
              Content: High-quality articles, blog posts, or multimedia content
              relevant to your niche
            </p>

            <h3 className="bold-h blog-mt-0">
              Pinterest (Visual bookmarking platform)
            </h3>

            <p>
              Process: Sign up for an account, create boards, and pin content
              with links to your website.
              <br />
              Content: Engaging images, infographics, or visual content related
              to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Slideshare (Slide hosting service)
            </h3>

            <p>
              Process: Create an account, upload presentations with links to
              your website.
              <br />
              Content: Informative, visually appealing slide presentations
              related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Vimeo (Video hosting platform)
            </h3>

            <p>
              Process: Sign up for an account, upload videos with links to your
              website in the description.
              <br />
              Content: High-quality, engaging videos related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Dailymotion (Video hosting platform)
            </h3>

            <p>
              Process: Create an account, upload videos with links to your
              website in the description.
              <br />
              Content: Engaging, high-quality videos relevant to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Flickr (Image and video hosting platform)
            </h3>

            <p>
              Process: Sign up for an account, upload images or videos with
              links to your website in the description.
              <br />
              Content: High-quality images or videos related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              HubPages (Content publishing platform)
            </h3>

            <p>
              Process: Create an account, write and publish articles with links
              to your website.
              <br />
              Content: Informative, well-researched articles related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              EzineArticles (Article directory)
            </h3>

            <p>
              Process: Sign up for an account, submit articles with links to
              your website in the author bio.
              <br />
              Content: High-quality, informative articles related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Triberr (Blogger community platform)
            </h3>

            <p>
              Process: Create an account, join relevant tribes, and share
              content with links to your website.
              <br />
              Content: High-quality articles, blog posts, or multimedia content
              relevant to your niche.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/30-websites/2.jpg"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h blog-mt-0">
              BlogEngage (Blog promotion platform)
            </h3>

            <p>
              Process: Sign up for an account, submit your blog posts with links
              to your website.
              <br />
              Content: Engaging, informative blog posts related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              GrowthHackers (Growth hacking community)
            </h3>

            <p>
              Process: Create an account, submit and share content with links to
              your website.
              <br />
              Content: Articles, case studies, or resources related to growth
              hacking and digital marketing.
            </p>

            <h3 className="bold-h blog-mt-0">
              BizSugar (Small business community)
            </h3>

            <p>
              Process: Sign up for an account, submit and share content with
              links to your website.
              <br />
              Content: Articles, blog posts, or resources related to small
              business, marketing, or entrepreneurship.
            </p>

            <h3 className="bold-h blog-mt-0">
              Inbound.org (Inbound marketing community)
            </h3>

            <p>
              Process: Create an account, submit and share content with links to
              your website.
              <br />
              Content: Articles, case studies, or resources related to inbound
              marketing, SEO, or content marketing.
            </p>

            <h3 className="bold-h blog-mt-0">
              Alltop (Content aggregator)
            </h3>

            <p>
              Process: Submit your website or blog to be listed on Alltop and
              gain backlinks.
              <br />
              Content: High-quality articles or blog posts related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Blogarama (Blog directory)
            </h3>

            <p>
              Process: Submit your blog for inclusion in their directory and
              gain backlinks.
              <br />
              Content: High-quality articles or blog posts related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              BlogLovin (Blog discovery platform)
            </h3>

            <p>
              Process: Sign up for an account, claim your blog, and gain
              backlinks.
              <br />
              Content: High-quality articles or blog posts related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Muck Rack (Journalist and blogger platform)
            </h3>

            <p>
              Process: Create an account as a journalist or blogger, add your
              articles, and gain backlinks.
              <br />
              Content: High-quality articles or blog posts related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Paper.li (Content curation platform)
            </h3>

            <p>
              Process: Sign up for an account, create a newspaper, and curate
              content with links to your website.
              <br />
              Content: High-quality articles, blog posts, or multimedia content
              relevant to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Visual.ly (Visual content creation platform)
            </h3>

            <p>
              Process: Create an account, submit infographics or other visual
              content with links to your website.
              <br />
              Content: Engaging, informative infographics or visual content
              related to your niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              MyBlogU (Blogger collaboration platform)
            </h3>

            <p>
              Process: Sign up for an account, participate in group interviews
              or expert roundups, and gain backlinks.
              <br />
              Content: Expert insights, quotes, or contributions related to your
              niche.
            </p>

            <h3 className="bold-h blog-mt-0">
              Yell (Online business directory)
            </h3>

            <p>
              Process: Register your business, create a listing, and gain a
              backlink.
              <br />
              Content: Business information, description, and website URL.
            </p>

            <h3 className="bold-h blog-mt-0">
              Brownbook (Global business directory)
            </h3>

            <p>
              Process: Register your business, create a listing, and gain a
              backlink.
              <br />
              Content: Business information, description, and website URL.
            </p>

            <h3 className="bold-h blog-mt-0">
              Cylex (Business directory)
            </h3>

            <p>
              Process: Register your business, create a listing, and gain a
              backlink.
              <br />
              Content: Business information, description, and website URL.
            </p>

            <h3 className="bold-h blog-mt-0">
              Alignable (Small business networking platform)
            </h3>

            <p>
              Process: Create a profile, connect with other businesses, and
              share content with links to your website.
              <br />
              Content: Articles, blog posts, or resources related to your niche
              or industry.
            </p>

            <p>
              While these websites provide opportunities for easy and quick link
              building, it's important to prioritize quality over quantity.
              Focus on creating valuable, relevant content that will resonate
              with your target audience and contribute positively to the
              communities in which you share it. Building genuine relationships
              with other professionals and users can also help improve the
              effectiveness of your link-building efforts.
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
