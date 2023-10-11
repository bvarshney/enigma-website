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

export default function whatuxdesignblog() {
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
      title="What is UX Design: A Simple and Informative Guide for the Curious
          Minds"
      description=" Welcome to the fascinating world of UX design. Grab your popcorn, and let's explore this exciting realm. Our goal is to make UX design as accessible and enjoyable as possible, so without further ado, let's dive right in!"
      canonical="https://www.weareenigma.com/what-is-ux-design"
      openGraph={{
        url: "https://www.weareenigma.com/what-is-ux-design",
        title: "What is UX Design: A Simple and Informative Guide for the Curious Minds",
        description:
          "Welcome to the fascinating world of UX design. Grab your popcorn, and let's explore this exciting realm. Our goal is to make UX design as accessible and enjoyable as possible, so without further ado, let's dive right in!",
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
        siteName: "https://www.weareenigma.com/what-is-ux-design",
      }}
    />    

      <Head>
        <title>
          What is UX Design: A Simple and Informative Guide for the Curious
          Minds
        </title>
        <meta name="description" content="Welcome to the fascinating world of UX design. Grab your popcorn, and let's explore this exciting realm. Our goal is to make UX design as accessible and enjoyable as possible, so without further ado, let's dive right in!" />
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
            <h1>A Simple Guide to UX Design</h1>
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
            What is UX Design: A Simple and Informative Guide for the Curious
            Minds
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
              <h2>01/11/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.vercel.app/what-is-ux-design"}
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
                  url={"https://weareenigma.vercel.app/what-is-ux-design"}
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
                  url={"https://weareenigma.vercel.app/what-is-ux-design"}
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
                  url={"https://weareenigma.vercel.app/what-is-ux-design"}
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
              Welcome to the fascinating world of UX design. Grab your popcorn,
              and let's explore this exciting realm. Our goal is to make UX
              design as accessible and enjoyable as possible, so without further
              ado, let's dive right in!
              
              
            </p>
            <h3 className="bold-h">
              What is UX Design?
            </h3>
            <p id="anim">
              So, what exactly is UX design, and why should you care? UX, or
              User Experience Design, is the art and science of crafting
              user-centred designs that make digital interactions efficient,
              enjoyable, and easy to use. It's all about understanding what
              users want and need and creating an experience that caters to
              those desires. In other words, UX design is the superhero behind
              the scene that ensures your digital interactions are as delightful
              as an episode of Friends.
              
              
            </p>
            <blockquote className="bold strong" id="anim">
              UX design is all about understanding what users want and need,
              just like how a skilled chef anticipates the taste buds of their
              diners. It involves researching, planning, and designing various
              elements to create a harmonious flow that makes using a website or
              app as smooth as Michael Jackson's moonwalk.
            </blockquote>
            <br />
            <span className="donald">
              - Bhaskar Varshney, Founder, Enigma Digital
            </span>
            <br />
            <br />
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/what-is-ux/5.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            
            <p>
              UX design involves researching, planning, and designing various
              elements to create a harmonious flow that makes using a website or
              app as smooth as a well-choreographed dance routine. To create
              these exceptional digital experiences, UX designers wear different
              hats. Let's explore the key ingredients that make up the UX design
              recipe.
            </p>
            
            
            <p>
              <span className="bold">User Research:</span> Like Sherlock Holmes,
              UX designers are like skilled detectives, conducting research to
              gather crucial information about users. They try to understand
              their preferences, motivations, and frustrations to ensure that
              the final design addresses their needs and solves their problems.
              This process might involve interviews, surveys, and observing
              users in action
            </p>
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/what-is-ux/2.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            
            <p>
              <span className="bold">Information Architecture:</span> UX
              designers organize content and information in a logical and
              intuitive way, much like a librarian arranging books on the
              shelves. They create a structure that makes it easy for users to
              find what they're looking for, so they don't feel lost or
              overwhelmed.
            </p>
            
            
            <p>
              <span className="bold">Interaction Design: </span>
              UX designers are the masterminds behind how users interact with a
              product. They define every tap, swipe, or click, ensuring that
              these interactions feel natural, responsive, and effortless. The
              goal is to make digital interfaces as intuitive as using everyday
              objects and make sure that every tap, swipe, or click feels as
              natural and responsive as having a conversation with Iron Man's
              J.A.R.V.I.S.
            </p>
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/what-is-ux/3.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            
            <p>
              <span className="bold">Usability Testing: </span>
              UX designers test their designs with real users to identify
              potential issues before they become major problems. They iterate
              on their designs and make improvements, ensuring the final product
              is polished and effective. It's like a dress rehearsal before the
              big show.
            </p>
            
            
            <p>
              <span className="bold">Visual Design: </span>
               Finally, UX designers collaborate with U.I. (User Interface)
              designers to create visually appealing interfaces that are
              functional and beautiful. They ensure that digital landscapes are
              aesthetically pleasing and align with the overall user experience.
            </p>
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/what-is-ux/4.webp"
                  alt="Img"
                />
              </div>
            </div>
            
            
            <p>
              Now that we&#39;ve uncovered the essential elements of UX design,
              you might be wondering how it all comes together. It&#39;s a bit
              like assembling a puzzle. UX designers collect all the pieces from
              user research, information architecture, interaction design,
              usability testing, and visual design. Then, they put them together
              to create a coherent and delightful experience that users will
              appreciate and enjoy, just like a cult classic movie.
              <br />
              <br />
              In conclusion, UX design is the secret ingredient that makes
              digital products enjoyable and user-friendly. It&#39;s an
              essential part of creating memorable experiences that keep users
              coming back for more. So, the next time you&#39;re using a website
              or an app, take a moment to appreciate the UX designers who&#39;ve
              worked tirelessly to make your journey smooth and enjoyable.
            </p>

            
            
            <p>
              And that&#39;s a wrap! Now that you know about UX design, go forth
              and spread the word, or better yet, consider joining the ranks of
              UX Design maestros at Enigma and help make the digital world a
              more delightful place for everyone. Happy designing!
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
              <Link href="/what-is-experience-design">
                <img
                  src="/assets/blogs/feature.jpg"
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
              What is Experience Design, And How is it Different from User
              Experience Design (UX)?
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-power-of-psychology-in-ux-design">
                <img
                  src="/assets/blogs/uxbrain.webp"
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
              The Power of Psychology in UX Design: Unlocking the Human Element
            </h1>
          </div>

          <div className="box-img-content">
            <div className="img-box-related">
              <Link href="/the-evolution-of-ux-design">
                <img
                  src="/assets/blogs/blog-detail/the-evalution/feature.webp"
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
              The Evolution of UX Design: An Informative Expedition Through The
              History
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
