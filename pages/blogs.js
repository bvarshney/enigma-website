import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from "next/image";

import SmoothScroll from "./components/utils/SmoothScroll";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import FooterMobile from "./components/Mobile/FooterMobile";

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

const Blogs = [
  {
    name: "Design",
    category: "Design",
    Link: "/how-to-choose-right-ux-agency",
    image: "/assets/blogs/blog-detail/right-ux-agency/feature.png",
    description:
      "How to Choose the Right UX Agency to Partner withfor Your Product Ideas",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/unmasking-the-web-dark-side",
    image: "/assets/blogs/blog-detail/unmasking-web-dark/feature.jpg",
    description:
      "Unmasking the Web's Dark Side: 5 Insider Secrets to Safeguard Your Site from Deceptive Design!",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/the-power-of-psychology-in-ux-design",
    image: "/assets/blogs/uxbrain.webp",
    description:
      "The Power of Psychology in UX Design: Unlocking the Human Element",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/what-is-experience-design",
    image: "/assets/blogs/feature.jpg",
    description:
      "What is Experience Design, And How is it Different from User Experience Design (UX)?",
    current: "active",
  },

  {
    name: "Marketing",
    category: "Marketing",
    Link: "/top-20-digital-marketing-blogs",
    image:
      "/assets/blogs/blog-detail/top-20-digital-marketing-blogs/feature.png",
    description:
      "Top 20 Digital Marketing Blogs to Follow for Expert Insights and Strategies",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/the-minds-playground",
    image: "/assets/blogs/blog-detail/the-mind-playground/feature.webp",
    description:
      "The Mind's Playground: 12 Cognitive Biases Ecommerce Marketers Need to Know",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/30-websites",
    image: "/assets/blogs/blog-detail/30-websites/feature.webp",
    description:
      "Beginners Guide to SEO: 30 websites to help you getting started on your link building journey",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/beginner-guide-to-technical-seo",
    image: "/assets/blogs/blog-detail/the-technical-seo/feature.webp",
    description: "A Beginner's Guide to Technical SEO",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/beginner-guide-link-building",
    image: "/assets/blogs/blog-detail/link-building/feature.webp",
    description: "A Beginner's Guide to Link Building",
  },

  {
    name: "Marketing",
    category: "Marketing",
    Link: "/onpage-and-offpage-seo",
    image: "/assets/blogs/blog-detail/off-on-page-seo/feature.webp",
    description:
      "On-Page & Off-Page SEO: A Beginner's Guide to Optimizing Your Website",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/keyword-research",
    image: "/assets/blogs/blog-detail/keyword-research/feature.webp",
    description: "Keyword Research: A Comprehensive Guide for SEO Success",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/the-basics-of-seo",
    image: "/assets/blogs/blog-detail/basic-seo/feature.webp",
    description: "The Basics of SEO: A Comprehensive Beginner's Guide",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/how-search-engine-works",
    image: "/assets/blogs/blog-detail/how-search-engine/feature.png",
    description: "How Search Engines Work: A Comprehensive Guide",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/organic-digital-marketing",
    image: "/assets/blogs/blog-detail/organic-digital-marketing/feature.png",
    description:
      "Organic Digital Marketing: The Game Changer Your Business Needs",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/turbo-charge-your-b2b-linkedin",
    image: "/assets/blogs/blog-detail/b2b-linkedin/feature.webp",
    description:
      "Turbocharge Your B2B LinkedIn Game with these 6 unbelievable strategies",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/unleashing-the-power-of-remote-designers",
    image: "/assets/blogs/blog-detail/unleash/feature.webp",
    description:
      "Unleashing the Power of Remote Designers: Why Outsourcing to India is the Winning Move",
  },

  {
    name: "Marketing",
    category: "Marketing",
    Link: "/marketing-psychology",
    image: "/assets/blogs/blog-detail/marketing-psychology/feature.webp",
    description:
      "Marketing Psychology: The Secret to Captivating Your Audience and Building Unforgettable Brands",
  },
  {
    name: "Marketing",
    category: "Marketing",
    Link: "/the-future-of-marketing",
    image: "/assets/blogs/blog-detail/the-future-of-marketing/feature.webp",
    description:
      "The Future of Marketing: Why Every Marketer Should Learn Neuroscience and Master Neuromarketing",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/top-20-ux-design-blogs",
    image: "/assets/blogs/blog-detail/top-20-ux-design-blogs/feature.jpg",
    description:
      "Top 20 UX Design Blogs to Follow for Innovative Ideas and Expert Insights",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/how-to-delightfully-design",
    image: "/assets/blogs/blog-detail/delightfully/feature.webp",
    description:
      "How to Delightfully Design for Diverse Digital Platforms: A User's Guide to Creative UX Mastery",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/the-evolution-of-ux-design",
    image: "/assets/blogs/blog-detail/the-evalution/feature.webp",
    description:
      "The Evolution of UX Design: An Informative Expedition Through The History",
  },
  {
    name: "Design",
    category: "Design",
    Link: "/what-is-ux-design",
    image: "/assets/blogs/blog-detail/what-is-ux/feature.webp",
    description:
      "What is UX Design: A Simple and Informative Guide for the Curious Minds",
  },
];

const buttons = [
  { label: "All" },
  { label: "Strategy" },
  { label: "Design" },
  { label: "Technology" },
  { label: "Marketing" },
];

export default function blogs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(9);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
    setVisiblePosts(6);
  };

  const handleViewMore = () => {
    setVisiblePosts(visiblePosts + 6);
  };

  const filteredBlogPosts =
    activeIndex === 0
      ? Blogs.slice(0, visiblePosts)
      : Blogs.filter(
          (post) => post.category === buttons[activeIndex].label
        ).slice(0, visiblePosts);

  const showViewMore = visiblePosts < Blogs.length;

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".blogs-heading #blog",
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
        translateY: 60,
      },
      {
        delay: 4.2,
        duration: 1.3,
        opacity: 1,
        stagger: 0.05,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Page Transitions
  useEffect(() => {
    let ctx = gsap.context(() => {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0, 502S175, 272, 500, 272s500, 230, 500, 230V0H0Z";
      const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        duration: 0.7,
        skewY: 10,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 0.7,
      });
      tl.to(svg, {
        duration: 0.5,
        attr: { d: curve },
        ease: "power2.easeIn",
      }).to(svg, {
        duration: 0.5,
        attr: { d: flat },
        ease: "power2.easeOut",
      });
      tl.to(".loader-wrap", {
        y: -1500,
      });
      tl.to(".loader-wrap", {
        zIndex: -1,
        display: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  // Image Box Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#img",
      {
        opacity: 0,
        translateY: 150,
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

  console.clear();
  return (
    <>
      <Head>
        <title>Top Digital Marketing to Follow | Enigma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        ></meta>
        <link rel="icon" href="/fav-icon.png" />
      </Head>

      <SmoothScroll />

      <div className="loader-wrap" id="loader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
        </svg>

        <div className="loader-wrap-heading">
          <span>
            <h1>Our Thoughts & Resources</h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

      <main>
        <div className="blogs-main-section">
          <div className="blogs-sub-section">
            <div
              className="blogs-heading"
              data-cursor-size="10px"
              data-cursor-text=""
            >
              <h1 id="blog">
                <span>All Articles</span>
              </h1>
            </div>

            <div className="blogs-section">
              {buttons &&
                buttons.map((type, index) => (
                  <>
                    <button
                      className={
                        activeIndex === index ? "active" : "button--calypso"
                      }
                      key={index}
                      onClick={() => handleButtonClick(index)}
                      id="anim"
                    >
                      <span>{type.label}</span>
                    </button>
                  </>
                ))}

              <div className="ul-items">
                {filteredBlogPosts.map((type, index, post) => (
                  <div key={index} className="blog-page-grid">
                    <ul key={type.id} className="ul-blog" id="img">
                      <Link href={`${type.Link}`}>
                        <div className="image-box-blog">
                          <Image
                            src={type.image}
                            className="img-blog"
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            data-cursor-text="Read Now"
                            data-cursor-size="120px"
                            data-cursor-color="#000"
                            alt="Blog-img"
                            width={1000}
                            height={1000}
                          />
                        </div>
                        <li className="blog-list-tag">{type.name}</li>
                      </Link>
                      <h3 className="desc-tag">{type.description}</h3>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="blog-showmore-box">
                {showViewMore && (
                  <button
                    className="view-more button--calypso"
                    onClick={handleViewMore}
                  >
                    <span>View More</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="space-large desktop"></div>
      <div className="space-small mobile"></div>

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
