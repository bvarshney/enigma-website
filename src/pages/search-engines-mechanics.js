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

export default function blogSearchEngineWorks() {
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
              title="Uncovering The Mechanics of How Search Engines Work - A Deep Dive"
              description="Uncover the mechanics of search engines with Enigma. Understand web crawlers, indexing, ranking algorithms, and optimize for better SEO."
              canonical="https://www.weareenigma.com/how-search-engine-works"
              openGraph={{
                url: "https://www.weareenigma.com/how-search-engine-works",
                title: "Uncovering The Mechanics of How Search Engines Work - A Deep Dive",
                description:
                  "Uncover the mechanics of search engines with Enigma. Understand web crawlers, indexing, ranking algorithms, and optimize for better SEO.",
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
                siteName: "https://www.weareenigma.com/how-search-engine-works",
              }}
            />

      <Head>
        <title>Uncovering The Mechanics of How Search Engines Work - A Deep Dive</title>
        <meta name="description" content="Uncover the mechanics of search engines with Enigma. Understand web crawlers, indexing, ranking algorithms, and optimize for better SEO." />
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
            <h1>How Search Engines Work</h1>
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
            How Search Engines Work: A Comprehensive Guide
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
              <h2>30/12/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/how-search-engine-works"}
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
                  url={"https://weareenigma.com/how-search-engine-works"}
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
                  url={"https://weareenigma.com/how-search-engine-works"}
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
                  url={"https://weareenigma.com/how-search-engine-works"}
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
              Search engines serve as the backbone of the internet, facilitating
              access to the vast amount of information available online. Their
              primary purpose is to provide users with the most relevant and
              valuable results based on their search queries. As the digital
              landscape evolves, understanding how search engines work becomes
              crucial for optimising websites and improving their rankings and
              visibility. This guide delves into the intricacies of search
              engines, including the role of web crawlers, indexing, and ranking
              algorithms, and underscores the importance of understanding search
              engine behaviour for effective SEO.
            </p>
            <h3 className="bold-h" id="anim">
              Web Crawlers
            </h3>
            <p id="anim">
              Web crawlers, also known as spiders or bots, are automated
              programs used by search engines to discover and navigate websites.
              These crawlers continuously scour the internet, following links
              from one page to another, and collecting information about each
              webpage they encounter.
            </p>
            <p id="anim">
              Crawlers collect data such as the content, meta tags, internal and
              external links, and the overall structure of a website. This
              information is then sent back to the search engine's database,
              where it is processed and indexed. Web crawlers constantly update
              their data to ensure search engines have the most up-to-date
              website information.
            </p>
            
            <p>
              The frequency with which a site is crawled depends on various
              factors, including its popularity, the frequency of content
              updates, and the site's overall authority. To facilitate smooth
              crawling, it's essential to maintain a well-structured website
              with clear navigation, proper internal linking, and an updated XML
              sitemap.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/how-search-engine/1.webp"
                  alt="Img"
                />
              </div>
            </div>

            
            
            <h3 className="bold-h">
              Indexing
            </h3>

            <p>
              Once web crawlers have collected the necessary data, search
              engines process and store the information in a vast database known
              as an index. Indexing involves organising the collected data in a
              way that makes it easily accessible and retrievable for search
              queries.
            </p>

            

            <p>
              Search engines use algorithms to analyse the indexed data,
              evaluating factors such as content relevance, quality, and website
              authority. During indexing, search engines also identify keywords
              within the content, which allows them to match web pages with
              specific search queries. Proper keyword usage and optimisation
              play a crucial role in ensuring that a website is accurately
              indexed and highly visible in search results.
            </p>

            
            

            <h3 className="bold-h">
              Ranking Algorithms
            </h3>

            <p>
              Search engines use complex ranking algorithms to determine the
              order in which webpages are displayed in search results. These
              algorithms consider hundreds of factors, or ranking signals, to
              evaluate the relevance and value of a webpage in relation to a
              given search query.
            </p>

            

            <h3 className="bold">Some key ranking factors include:</h3>

            <p>
              <span className="bold">Relevance:</span> Search engines assess the
              content on a webpage to determine how well it matches a user's
              query. This involves analysing keyword usage, topical focus, and
              content quality.
            </p>

            

            <p>
              <span className="bold">Authority: </span>
              Search engines evaluate the credibility and trustworthiness of a
              website based on factors such as the number and quality of
              backlinks, domain age, and brand recognition.
            </p>

            

            <p>
              <span className="bold">User Experience: </span>
              The overall usability and accessibility of a website also
              influence its ranking. Search engines consider factors such as
              site speed, mobile-friendliness, and intuitive navigation when
              ranking websites.
            </p>

            

            <p>
              <span className="bold">Personalisation: </span>
              Search engines may tailor search results based on a user's
              browsing history, location, and other personal preferences,
              providing more relevant and targeted results.
            </p>

            

            <p>
              <span className="bold">Security: </span>
              Websites that use secure connections (HTTPS) and follow best
              practices for user data protection are favoured by search engines,
              as they provide a safer browsing experience.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/how-search-engine/2.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3 className="bold-h">
              Understanding Search Engine Behaviour for SEO
            </h3>

            <p>
              Comprehending how search engines work is fundamental to devising
              effective SEO strategies. By grasping the roles of web crawlers,
              indexing, and ranking algorithms, website owners can make informed
              decisions on optimising their sites for higher visibility and
              rankings.
              
              <br />
              Effective SEO involves implementing best practices, such as
              creating high-quality content, optimising on-page elements (e.g.,
              title tags, meta descriptions, and header tags), and building a
              robust backlink profile. Additionally, addressing technical SEO
              aspects, such as site speed, mobile-friendliness, and structured
              data, further enhances a website's performance in search results.
              
              <br />
              Staying up-to-date with search engine algorithm updates and
              industry trends is also essential, as search engines continuously
              refine their ranking criteria to provide users with the best
              possible search experience. Monitoring website performance using
              tools like Google Search Console and Google Analytics can help
              identify areas for improvement and track the effectiveness of
              implemented SEO strategies.
              
              <br />
              To sum it up, understanding how search engines work lays the
              foundation for successful SEO efforts. By familiarising oneself
              with web crawlers, indexing, ranking algorithms, and search engine
              behaviour, website owners can effectively optimise their sites for
              higher rankings, increased visibility, and, ultimately, better
              user experience. By combining this knowledge with a commitment to
              ongoing learning and adaptation, businesses and individuals can
              stay ahead of the competition and thrive in the ever-evolving
              digital landscape.
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
