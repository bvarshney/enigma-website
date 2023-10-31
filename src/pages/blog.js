import React, {useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Cursor } from "../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from "next/image";
import { NextSeo } from "next-seo";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import Blogs from "../components/Blogs/blogData";
import Modal from "../components/PopupForm/formModal";

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

const buttons = [
  { label: "All", path: "/blog" },
  { label: "Strategy", path: "/blog/strategy" },
  { label: "Design", path: "/blog/design" },
  { label: "Technology", path: "/blog/technology" },
  { label: "Marketing", path: "/blog/marketing" },
];

const BlogPost = ({ post, delay }) => {
  const postRef = useRef(null);

  useEffect(() => {
    // Animate the blog post
    gsap.fromTo(
      postRef.current,
      { autoAlpha: 0, y: 200 },
      { autoAlpha: 1, y: 0, duration: 1.5, delay: delay }
    );
  }, [delay]);

  return (
    <div ref={postRef} className="blog-page-grid">
      <div key={post.id} className="ul-blog" id="img">
        <Link href={`${post.Link}`}>
          <div className="image-box-blog">
            <Image
              src={post.image}
              className="img-blog"
              onMouseEnter={(e) => handleHover(e)}
              onMouseOut={(e) => handleHoverExit(e)}
              data-cursor-text="Read Now"
              data-cursor-size="120px"
              data-cursor-color="#000"
              alt="Blog-img"
              width={800}
              height={1160}
              priority={false}
            />
            <h2 className="blog-list-tag">{post.name}</h2>
          </div>
          <h3 className="desc-tag">{post.description}</h3>
        </Link>
      </div>
    </div>
  );
};

const ITEMS_PER_PAGE = 6; // Number of blogs to load per page

export default function BlogsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setBlogs(Blogs.slice(0, ITEMS_PER_PAGE));
  }, []);

  const loadMoreBlogs = () => {
    const currentLength = blogs.length;
    const moreBlogs = Blogs.slice(currentLength, currentLength + ITEMS_PER_PAGE);
  
    if (moreBlogs.length) {
      setBlogs([...blogs, ...moreBlogs]);
    } else {
      setHasMore(false); // No more blogs to load
    }
  };

    // Scroll event listener for infinite scrolling
  const handleScroll = ({ offset }) => {
    // Check if the user has scrolled near the bottom
    if (offset.y + window.innerHeight >= document.body.scrollHeight - (-500)) {
      loadMoreBlogs();
    }
  };

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
              title="The Enigma Blog | Discover, Learn & Be Future Ready"
              description="Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
              canonical="https://weareenigma.com/blog"
              openGraph={{
                url: "https://weareenigma.com/blog",
                title: "The Enigma Blog | Discover, Learn & Be Future Ready",
                description:
                  "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                  images: [
                  {
                    url: "https://i.ibb.co/k0NMQw9/home.png",
                    width: 400,
                    height: 600,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                ],
                siteName: "Enigma Digital Website",
              }}
            />

      <SmoothScroll onScroll={handleScroll} />

{/*========Loader========*/}
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
            <h1>Our Thoughts & Resources</h1>
          </span>
        </div>
      </div>

      <Cursor isGelly={true} />

      <div>
        <Header />
      </div>

{/* PopUp Modal Button */}
  <Modal />
{/* End */}

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
                {buttons.map((button, index) => (
                  <Link href={button.path} key={index}>
                    <button className={activeIndex === index ? "active" : "button--calypso"} id="anim">
                      <span>{button.label}</span>
                    </button>
                  </Link>
                ))}

                  <div className="ul-items">
                    {Blogs.map((post, index) => (
                      <BlogPost key={index} post={post} delay={index < ITEMS_PER_PAGE ? 3.8 : 0} />
                    ))}
                  </div>
                </div>
                {/* {!hasMore && (
                  <div className="no-more-blogs">
                    <p>No more articles to load.</p>
                  </div>
                )} */}
              </div>
            </div>
          </main>

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


