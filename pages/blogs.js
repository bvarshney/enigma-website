import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import { motion } from "framer-motion";

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
    id: 1,
    name: "Technology",
    category: "Technology",
    registro: 133,
    Link: "/what-is-experience-design",
    CP: 300,
    image: "/assets/blogs/Unconventional-1.jpg",
    description:
      "What is Experience Design, And How is it Different from User Experience Design (UX)?",
    current: "active",
  },
  {
    id: 2,
    name: "Technology",
    category: "Technology",
    Link: "/the-power-of-psychology-in-ux-design",
    registro: 123,
    CP: 500,
    image: "/assets/blogs/Innovate.jpg",
    description:
      "The Power of Psychology in UX Design: Unlocking the Human Element",
  },
  {
    id: 3,
    name: "Marketing",
    category: "Marketing",
    Link: "/what-is-ux-design",
    registro: 123,
    CP: 500,
    image: "/assets/blogs/blog-detail/what-is-ux/feature.png",
    description:
      "What is UX Design: A Simple and Informative Guide for the Curious Minds",
  },
  {
    id: 4,
    name: "Technology",
    category: "Technology",
    Link: "/the-evolution",
    registro: 63,
    CP: 350,
    image: "/assets/blogs/blog-detail/the-evalution/feature.jpg",
    description:
      "The Evolution of UX Design: An Informative Expedition Through The History",
  },
  {
    id: 5,
    name: "Design",
    category: "Design",
    registro: 63,
    CP: 350,
    image: "/assets/blogs/face.jpg",
    description: "Unlocking The Secrets of Brand Personality",
  },
  {
    id: 6,
    name: "Technology",
    category: "Technology",
    registro: 63,
    CP: 350,
    image: "/assets/blogs/men.jpg",
    description: "Farewell W-2, Hello 1099!",
  },
  {
    id: 7,
    name: "Strategy",
    category: "Strategy",
    registro: 63,
    CP: 350,
    image: "/assets/blogs/thought.jpg",
    description: "5 Personality Traits That Could Make Your Company A Unicorn",
  },
  {
    id: 8,
    name: "Design",
    category: "Design",
    registro: 133,
    CP: 300,
    image: "/assets/blogs/five.jpg",
    description: "Five Tips for Branding Your Culture",
  },
  {
    id: 9,
    name: "Strategy",
    category: "Strategy",
    registro: 133,
    CP: 300,
    image: "/assets/blogs/Clients.jpg",
    description: "A Brand Designer's Guide to Communicating with Clients",
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
  const [visiblePosts, setVisiblePosts] = useState(6);

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
        translateY: -50,
      },
      {
        delay: 4.5,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     "#img",
  //     {
  //       opacity: 0,
  //       translateY: 100,
  //     },
  //     {
  //       delay: 0.5,
  //       duration: 1,
  //       opacity: 1,
  //       stagger: 0.1,
  //       translateY: 0,
  //     }
  //   );
  // });

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
        skewY: 10,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
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
            <h1>
              Read our <span className="loader-font">Blogs!</span>
            </h1>
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
              <h1 id="blog">All Articles</h1>
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
                      <div className="image-box-blog">
                        <Link href={`${type.Link}`}>
                          <img
                            src={type.image}
                            className="img-blog"
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            data-cursor-text="Read Now"
                            data-cursor-size="120px"
                            data-cursor-color="#000"
                          />
                        </Link>
                      </div>
                      <li className="blog-list-tag">{type.name}</li>
                      <h3 className="desc-tag">{type.description}</h3>
                    </ul>
                  </div>
                ))}
              </div>

              <div className="blog-showmore-box">
                {showViewMore && (
                  <button className="view-more" onClick={handleViewMore}>
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
