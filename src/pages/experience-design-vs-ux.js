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

export default function experiencedesignblog() {
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
      title="Experience Design vs UX: Key Differences Explained"
      description="Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences."
      canonical="https://weareenigma.com/experience-design-vs-ux"
      openGraph={{
        url: "https://weareenigma.com/experience-design-vs-ux",
        title: "Experience Design vs UX: Key Differences Explained",
        description:
          "Dive into the world of Experience Design and UX. Learn their differences and how they shape user interactions and brand experiences.",
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
            <h1>Experience Design & UX Design</h1>
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
            WHAT IS EXPERIENCE DESIGN, AND HOW IS IT DIFFERENT FROM USER
            EXPERIENCE DESIGN (UX)?
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
              <h2>17/02/2023</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={
                    "https://weareenigma.vercel.app/what-is-experience-design"
                  }
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
                  url={
                    "https://weareenigma.vercel.app/what-is-experience-design"
                  }
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
                  url={
                    "https://weareenigma.vercel.app/what-is-experience-design"
                  }
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
                  url={
                    "https://weareenigma.vercel.app/what-is-experience-design"
                  }
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
              Over the past few years, the term Experience Design and User
              Experience have become so closely associated that they're often
              used interchangeably. They're interconnected, but they're not
              identical. And that disparity means there are vital differences
              between them.
              <br />
              <br />
              <strong> Donald Arthur Norman</strong> coined the term ‘User
              Experience Design’ while employed at Apple as a User Interface
              Architect. Sometime during the early 1990s, he decided to change
              his title to User Experience Architect. Why did he do it? In Don’s
              own words -
            </p>
            
            <blockquote className="bold strong" id="anim">
              “I invented the term because I thought Human Interface and
              usability were too narrow: I wanted to cover all aspects of the
              person’s experience with a system, including industrial design,
              graphics, the interface, the physical interaction, and the
              manual.”
            </blockquote>
            <span className="donald">— Donald Arthur Norman</span>
            
            <br />
            <br />
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img src="/assets/blogs/blog-detail/Blog-001.webp" alt="Img" />
              </div>
            </div>
            
            
            <p>
              The term User Experience Design was not coined until the early ,
              but examples of Experience Design date back even earlier. For
              instance, Walt Disney is often regarded as one of the worlds first
              Experience Designer because of his theme parks and resorts.
            </p>
            
            
            <p>
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during thes,
              amusement parks were seen as dirty and dowdy places where children
              shouldnt go. Walt Disney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (Disney Imagineers).
            </p>

            
            
            <p>
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether youre a teenager looking
              for thrill-seeking rides or a young family wanting to ride Dumbo
              the flying elephant or the teacup ride, theres something for
              everyone here.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img src="/assets/blogs/blog-detail/Blog-003.webp" alt="Img" />
              </div>
            </div>
            
            

            <p>
              The term User Experience Design was not coined until the early ,
              but examples of Experience Design date back even earlier. For
              instance, Walt Disney is often regarded as one of the worlds first
              Experience Designer because of his theme parks and resorts.
              <br />
              <br />
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during thes,
              amusement parks were seen as dirty and dowdy places where children
              shouldnt go. Walt Disney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (Disney Imagineers).
              <br />
              <br />
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether youre a teenager looking
              for thrill-seeking rides or a young family wanting to ride Dumbo
              the flying elephant or the teacup ride, theres something for
              everyone here.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img src="/assets/blogs/blog-detail/Blog-004.webp" alt="Img" />
              </div>
            </div>
            
            
            <h2>
              <strong className="bold fontSize">
                So, what precisely is the difference between Experience Design &
                User Experience?
              </strong>
            </h2>
            
            
            <p>
              The term User Experience Design was not coined until the early
              1990s, but examples of Experience Design date back even earlier.
              For instance, Walt Disney is often regarded as one of the world’s
              first Experience Designer because of his theme parks and resorts.
            </p>
            
            
            <p>
              Walt Disney had the vision to create an amusement park that was
              fun for both children and adults alike. However, during the 1950s,
              amusement parks were seen as dirty and dowdy places where children
              shouldn’t go. Walt Dis¬ney wanted to change that perception and
              provide park-goers with a positive experience. The designers and
              engineers put a lot of thought and contemplation into the park
              (“Disney Imagineers”).
            </p>
            
            
            <p>
              An example of good experience design at the parks is the variety
              of choices that visitors can select from. The parks were designed
              to appeal to all kinds of guests. Whether you’re a teenager
              looking for thrill-seeking rides or a young family wanting to ride
              Dumbo the flying elephant or the teacup ride, there’s something
              for everyone here.
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
              <Link href="/experience-design-vs-ux">
                <img
                  src="/assets/blogs/feature.webp"
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
              <Link href="/psychology-in-ux">
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
              <Link href="/evolution-of-ux-design">
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
