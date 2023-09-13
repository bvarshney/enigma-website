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
      title="Top 20 Digital Marketing Blogs to Follow for Expert Insights and
          Strategies"
      description="In the fast-paced and ever-changing world of digital marketing,
              staying up-to-date with the latest trends, best practices, and
              expert insights is crucial to ensure the success of your marketing
              efforts."
      canonical="https://www.weareenigma.com/top-20-digital-marketing-blogs"
      openGraph={{
        url: "https://www.weareenigma.com/top-20-digital-marketing-blogs",
        title: "Top 20 Digital Marketing Blogs to Follow for Expert Insights and Strategies",
        description:
          "In the fast-paced and ever-changing world of digital marketing, staying up-to-date with the latest trends, best practices, and expert insights is crucial to ensure the success of your marketing efforts.",
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
        siteName: "https://www.weareenigma.com/top-20-digital-marketing-blogs",
      }}
    />    

      <Head>
        <title>
          Top 20 Digital Marketing Blogs to Follow for Expert Insights and
          Strategies
        </title>
        <meta name="description" content="In the fast-paced and ever-changing world of digital marketing, staying up-to-date with the latest trends, best practices, and expert insights is crucial to ensure the success of your marketing efforts." />
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
            <h1>Top 20 Digital Marketing Blogs</h1>
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
            Top 20 Digital Marketing Blogs to Follow for Expert Insights and
            Strategies
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
              <h2 className="timezone-update">07/02/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <div className="share-box-blog">
                <h1>Share Article</h1>
              </div>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/top-20-digital-marketing-blogs"}
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
                  url={"https://weareenigma.com/top-20-digital-marketing-blogs"}
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
                  url={"https://weareenigma.com/top-20-digital-marketing-blogs"}
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
                  url={"https://weareenigma.com/top-20-digital-marketing-blogs"}
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
              In the fast-paced and ever-changing world of digital marketing,
              staying up-to-date with the latest trends, best practices, and
              expert insights is crucial to ensure the success of your marketing
              efforts. With so many digital marketing blogs available online, it
              can be challenging to determine which ones are worth your time and
              attention. That's why we've carefully curated a list of the top 20
              digital marketing blogs to follow. These blogs cover a wide range
              of topics, from search engine optimization and social media
              marketing to content marketing and email marketing, providing you
              with a comprehensive understanding of the digital marketing
              landscape. So, without further ado, let's dive into the world of
              digital marketing expertise and explore these must-follow blogs!
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Moz
            </h3>
            <p id="anim">
              Moz is renowned for its expertise in search engine optimization
              (SEO), making it a go-to resource for digital marketers looking to
              enhance their online visibility. Their blog covers a wide range of
              topics, including SEO, content marketing, and social media. Moz
              offers a perfect blend of beginner-friendly tutorials and advanced
              insights, making it suitable for marketers at any stage in their
              career. They also provide free SEO tools that can help improve
              your website's performance.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Content Marketing Institute (CMI)
            </h3>
            <p id="anim">
              As the name suggests, Content Marketing Institute focuses on
              content marketing strategies and best practices. Their blog is an
              excellent resource for marketers looking to improve their content
              creation, distribution, and promotion efforts. CMI offers
              valuable, researchbacked insights from industry leaders and
              provides practical tips on creating and executing successful
              content marketing campaigns.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              HubSpot
            </h3>
            <p id="anim">
              HubSpot's blog is a treasure trove of inbound marketing knowledge.
              They cover various topics, including marketing automation, lead
              generation, and email marketing, to help businesses grow and
              engage their audience. HubSpot provides a mix of actionable
              advice, industry news, and expert opinions, making it a
              one-stop-shop for all things inbound marketing.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Neil Patel
            </h3>
            <p id="anim">
              Neil Patel's blog is a must-read for marketers looking to improve
              their digital marketing skills. The founder of Crazy Egg and
              Kissmetrics, Neil shares valuable insights and tips based on his
              own experiences. Neil's easy-to-understand writing style and
              in-depth guides make complex digital marketing topics accessible
              to everyone.
            </p>

            
            

            <h3
              className="bold-h blog-mt-0"
              id="anim"
            >
              Social Media Examiner
            </h3>
            <p id="anim">
              Social Media Examiner is the go-to resource for social media
              marketing tips, strategies, and news. Their blog covers all major
              platforms and provides practical advice for businesses looking to
              expand their social media presence. Their content is regularly
              updated to ensure readers stay current on the latest social media
              trends and best practices.
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
              Search Engine Land
            </h3>
            <p>
              Search Engine Land is a leading authority on SEO and SEM. Their
              blog provides the latest news, trends, and expert advice on search
              marketing strategies. With a focus on all aspects of search
              marketing, Search Engine Land is a comprehensive resource for
              staying informed on search-related topics.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Enigma Digital
            </h3>
            <p>
              Enigma Digital's blog is an indispensable resource for digital
              marketers looking to stay upto-date with the latest industry
              trends and best practices. Their unique selling point (USP) is
              their ability to break down complex digital marketing concepts
              into easy-to-understand, actionable advice. Enigma Digital offers
              comprehensive guides, case studies, and in-depth articles,
              catering to marketers of all skill levels. Their content is not
              only informative but also engaging and accessible
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

            
            

            <h3 className="bold-h blog-mt-0">
              MarketingProfs
            </h3>
            <p>
              MarketingProfs is a comprehensive marketing resource that offers a
              wide range of topics, including digital marketing, content
              marketing, email marketing, and more. Their blog is packed with
              expert insights and actionable tips to help marketers excel in
              their field. MarketingProfs focuses on providing practical,
              real-world marketing advice from industry professionals, making it
              an excellent resource for marketers looking to enhance their
              skills and stay ahead of the curve.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Convince & Convert
            </h3>
            <p>
              Convince & Convert is a renowned digital marketing blog that
              focuses on social media, content marketing, and customer
              experience. Their blog offers insightful articles and case studies
              that help marketers create and execute effective digital marketing
              strategies. Convince & Convert offers a unique perspective on
              digital marketing, with a strong focus on customer experience and
              engagement, ensuring that marketers are always putting their
              customers first.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Ahrefs
            </h3>
            <p>
              Ahrefs is a leading SEO toolset provider, and their blog is a
              treasure trove of SEO tips, strategies, and insights. They cover a
              wide range of topics, from keyword research to backlink analysis
              and beyond. Ahrefs offers data-driven insights and practical
              tutorials, ensuring that marketers have access to the most
              up-to-date and effective SEO strategies
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
              Buffer
            </h3>
            <p>
              Buffer is a popular social media management tool, and their blog
              is an excellent resource for social media marketing tips and
              strategies. They cover everything from platform-specific advice to
              broader social media trends. Buffer provides actionable,
              data-backed tips to help marketers optimize their social media
              presence and drive better results.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Digiday
            </h3>
            <p>
              Digiday is a leading digital marketing and media publication that
              covers the latest industry news, trends, and strategies. Their
              blog is an invaluable resource for marketers looking to stay
              informed and up-to-date on the latest developments in the digital
              marketing world. Digiday offers a blend of news, analysis, and
              expert opinions, making it a comprehensive resource for digital
              marketers of all skill levels.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Search Engine Journal
            </h3>
            <p>
              Search Engine Journal is another top resource for SEO and SEM
              professionals. Their blog covers a wide range of search-related
              topics, including Google algorithm updates, keyword research, and
              link building strategies. Search Engine Journal offers expert
              insights and indepth guides, ensuring that readers have access to
              the most current and effective search marketing strategies.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Marketing Land
            </h3>
            <p>
              Marketing Land is a popular digital marketing publication that
              covers a wide range of topics, from SEO and social media to
              content marketing and email marketing. Their blog offers the
              latest news, trends, and expert advice to help marketers stay
              ahead in the everevolving digital landscape. Marketing Land
              provides a comprehensive view of the digital marketing industry,
              offering valuable insights and tips for marketers at all levels of
              expertise.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Backlinko
            </h3>
            <p>
              Backlinko, founded by Brian Dean, is a well-known SEO blog that
              offers in-depth guides and case studies to help marketers improve
              their search rankings and drive more organic traffic. Backlinko is
              known for its actionable, data-driven strategies and commitment to
              providing high-quality, easy-to-understand content.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              AdEspresso
            </h3>
            <p>
              AdEspresso is a leading resource for Facebook and Google Ads tips
              and strategies. Their blog offers insightful articles and guides
              to help marketers optimize their ad campaigns and maximize ROI.
              AdEspresso focuses on providing practical, data-driven tips and
              best practices for running successful ad campaigns on popular
              platforms.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/top-20-digital-marketing-blogs/3.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            

            <h3 className="bold-h blog-mt-0">
              Unbounce
            </h3>
            <p>
              Unbounce is a popular landing page builder, and their blog is an
              excellent resource for marketers looking to improve their
              conversion rates and create high-performing landing pages. They
              cover topics such as conversion optimization, A/B testing, and
              user experience design. Unbounce offers actionable tips, expert
              insights, and in-depth guides to help marketers create and
              optimize landing pages that drive results.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              KlientBoost
            </h3>
            <p>
              KlientBoost is a performance marketing agency that shares valuable
              insights on their blog, covering topics like pay-per-click (PPC)
              advertising, conversion rate optimization (CRO), and landing page
              design. KlientBoost's blog offers practical advice and data-driven
              strategies, focusing on improving ROI and performance for digital
              marketers.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              Grow
            </h3>
            <p>
              Grow, by Mark Schaefer, is a thought-provoking blog that explores
              the intersection of marketing, technology, and humanity. The blog
              covers a wide range of topics, including content marketing, social
              media, and digital strategy, with an emphasis on the human aspect
              of marketing. Grow provides a unique perspective on digital
              marketing, offering insightful and thought-provoking content that
              encourages marketers to think beyond conventional strategies and
              tactics.
            </p>

            
            

            <h3 className="bold-h blog-mt-0">
              That’s A Wrap..!
            </h3>
            <p>
              By following these top 20 digital marketing blogs, you can stay
              ahead of the curve, armed with the latest industry insights,
              trends, and best practices to ensure your marketing campaigns are
              successful and impactful. These blogs not only offer valuable
              information but also serve as a source of inspiration, enabling
              you to think creatively and strategically about your digital
              marketing efforts. Whether you're a beginner or an experienced
              digital marketer, these resources are essential to help you
              navigate the ever-evolving world of digital marketing and drive
              better results for your business. So, make sure to bookmark these
              blogs, subscribe to their newsletters, and harness the wealth of
              knowledge they have to offer. Happy reading and marketing!
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
