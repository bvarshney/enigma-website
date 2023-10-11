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
              title="How to Delightfully Design for Diverse Digital Platforms: A User's
          Guide to Creative UX Mastery"
              description="Today, we're here to equip you with
              the knowledge and tools to create delightful designs for diverse
              digital platforms."
              canonical="https://www.weareenigma.com/how-to-delightfully-design"
              openGraph={{
                url: "https://www.weareenigma.com/how-to-delightfully-design",
                title: "How to Delightfully Design for Diverse Digital Platforms: A User's Guide to Creative UX Mastery",
                description:
                  "Today, we're here to equip you with the knowledge and tools to create delightful designs for diverse digital platforms.",
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
                siteName: "https://www.weareenigma.com/how-to-delightfully-design",
              }}
            />    

      <Head>
        <title>
          How to Delightfully Design for Diverse Digital Platforms: A User's
          Guide to Creative UX Mastery
        </title>
        <meta name="description" content="Today, we're here to equip you with
              the knowledge and tools to create delightful designs for diverse
              digital platforms." />
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
            <h1>How to Design for Diverse Platforms</h1>
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
            How to Delightfully Design for Diverse Digital Platforms: A User's
            Guide to Creative UX Mastery
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
              <h2>15/11/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={
                    "https://weareenigma.vercel.app/how-to-delightfully-design"
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
                    "https://weareenigma.vercel.app/how-to-delightfully-design"
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
                    "https://weareenigma.vercel.app/how-to-delightfully-design"
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
                    "https://weareenigma.vercel.app/how-to-delightfully-design"
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
              Hey there, design enthusiasts! Today, we're here to equip you with
              the knowledge and tools to create delightful designs for diverse
              digital platforms. In today's ever-evolving technological
              landscape, it's crucial to consider the multitude of screens and
              devices that users interact with daily. From desktops and TVs to
              tablets and wearables, we'll dive deep into the considerations and
              best practices for designing exceptional experiences across these
              platforms. So, buckle up and get ready to embark on a fun-filled
              journey into the world of UX design mastery!
              
              
              
            </p>

            <h3 className="bold-h" id="anim">
              Desktop Screens: The Grand Stage
            </h3>

            <p id="anim">
              Desktop screens are the grand stage where most of our digital
              lives unfold. They offer vast real estate for designers to
              showcase their creativity, and users expect a comprehensive and
              immersive experience. When designing for desktops, consider the
              following:
              
              <br />
              <span className="bold">Responsive Layouts:</span> Users come with
              a diverse range of screen sizes and resolutions. Harness the power
              of responsive layouts to ensure your design fluidly adapts to any
              screen like a chameleon in a technicolour dream.
              <br />
              <span className="bold">Navigation:</span> Keep the navigation
              intuitive and easily accessible. A well-structured navigation menu
              is the trusty compass that guides users through the digital
              labyrinth.
              <br />
              <span className="bold">Content Hierarchy: </span>
              Establish a clear visual hierarchy to emphasize essential content
              and guide users' attention. Use typography, colour, and whitespace
              to create a harmonious symphony of information
              <br />A superb way to learn is by doing. To apply these principles
              of UX, Imagine designing a platform for movie enthusiasts to
              browse, review, and discuss their favourite films. On a desktop
              screen, you can create an immersive experience by using large,
              high-quality images, interactive carousels, and a well-structured
              navigation menu that makes discovering new movies a breeze.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/delightfully/1.webp"
                  alt="Img"
                />
              </div>
            </div>


            <h3 className="bold-h">
              TV: The Colossal Canvas
            </h3>
            <p>
              Televisions are the colossal canvas of modern living rooms.
              Designing for this behemoth requires a unique approach that
              accommodates the TV's larger screen size and viewing distance.
              Let's explore some essential considerations:
              <br />
              <span className="bold">Viewing Distance:</span> Users typically
              view TVs from a distance of 6 to 10 feet. To ensure readability,
              scale up text size, icons, and interface elements. Go big or go
              home
              <br />
              <span className="bold">Simplified Navigation:</span> Televisions
              often rely on remote controls with limited buttons. Keep your
              navigation straightforward and embrace the power of simplicity.
              <br />
              <span className="bold">Focus on Visuals:</span> TVs are built for
              visual storytelling. Leverage high-quality images, videos, and
              animations to captivate and mesmerize your audience.
              <br />
              Picture a cooking app designed for TV screens. With a focus on
              stunning visuals, you can showcase mouth-watering recipes through
              full-screen images and videos. Use bold typography and simplified
              navigation, allowing users to easily browse and select recipes
              with their remote control while sitting comfortably on their
              couch.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/delightfully/2.webp"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              Tablets: The Versatile Virtuosos
            </h3>

            <p>
              Tablets are the versatile virtuosos of the digital world, bridging
              the gap between smartphones and desktops. They demand a tailored
              approach to accommodate their unique screen size and touch-based
              interactions. Here's what to keep in mind:
              <br />
              <span className="bold">Touch Targets:</span> Fingers are less
              precise than mouse pointers. Design generously sized touch targets
              to make interactions effortless and frustration-free.
              <br />
              <span className="bold">Orientation Flexibility:</span> Tablets are
              masters of rotation. Design your interface to adapt gracefully to
              both portrait and landscape orientations, like a digital acrobat.
              <br />
              <span className="bold">Multi-tasking Power: </span>
              Tablets are the Swiss Army knives of digital devices. Consider
              incorporating split-screen functionality and other multi-tasking
              features to unleash their full potential.
              <br />
              Envision a digital magazine app for art enthusiasts. Utilize the
              tablet's touch capabilities and orientation flexibility to create
              an interactive experience that allows users to swipe through vivid
              galleries and flip between portrait and landscape views. Add a
              split-screen feature to let users compare artworks side by side or
              read an article while viewing an image gallery simultaneously.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/delightfully/3.webp"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              Mobile Phones: The Pocket-Sized Powerhouses
            </h3>

            <p>
              Mobile phones are the pocket-sized powerhouses that have
              revolutionized the way we live, work, and play. With their
              ubiquity and extensive capabilities, designing for these compact
              devices is a must in today's digital landscape. Here are some key
              considerations for designing exceptional mobile experiences:
              <br />
              <span className="bold">Limited Screen Real Estate:</span> Mobile
              phones pack a punch, but their screens are smaller than desktops
              and tablets. Prioritize content and features to optimize the user
              experience, making sure every pixel counts.
              <br />
              <span className="bold">Touch-Friendly Interface:</span> Mobile
              phones rely on touch-based interactions. Design fingerfriendly
              buttons and touch targets, and embrace swipe gestures to make
              navigation and actions feel smooth and natural.
              <br />
              <span className="bold">Mobile First Approach: </span>
              Given the prevalence of mobile devices, adopting a mobile-first
              approach ensures your design is optimized for smaller screens from
              the get-go. This approach lays a strong foundation for scaling up
              to larger devices.
              <br />
              <span className="bold">Network Constraints: </span>
              Mobile users often face fluctuating network conditions. Optimize
              your design to load quickly and function seamlessly, even on
              slower connections.
              <br />
              <span className="bold">Accessibility: </span>
              Mobile devices are used in a variety of contexts and environments.
              Consider factors like screen glare, ambient noise, and one-handed
              usage when designing your mobile interface.
              <br />
              To put these principles to a real-world test, let's take an
              example of a music discovery app that allows users to explore new
              artists and create playlists on the go. With limited screen real
              estate, focus on displaying the most relevant content, such as
              album artwork, song titles, and artist names, while hiding
              secondary information behind expandable menus or swipe gestures.
              <br />
              Use touch-friendly buttons for primary actions like play, pause,
              and skip, and incorporate swiping gestures for users to easily
              navigate through playlists and songs. Optimize the app's
              performance to ensure smooth streaming, even on slower
              connections, and consider adding an offline mode for those moments
              when users find themselves without internet access.
              <br />
              Factor in accessibility by using legible fonts, clear contrast,
              and intuitive controls that accommodate one-handed usage, making
              it easy for users to enjoy their favourite tunes while commuting,
              exercising, or simply lounging around.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/delightfully/4.webp"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              Wearables: The Tiny Titans
            </h3>

            <p>
              Wearables, like smartwatches and fitness trackers, are the tiny
              titans of the digital world. Their minimal screen real estate and
              intimate nature demand a reimagined design approach. Keep these
              factors in mind:
              <br />
              <span className="bold">Glanceability:</span> Users interact with
              wearables in short bursts. Prioritize essential information and
              make it easily digestible at a glance.
              <br />
              <span className="bold">Simplify Interactions:</span> Small screens
              are no place for complexity. Strip down your design to its bare
              essentials and focus on core functionality.
              <br />
              <span className="bold">Contextual Relevance: </span>
              Wearables excel at providing contextual information, like fitness
              stats or weather updates. Harness the power of personalization to
              deliver tailored, relevant content.
              <br />
              Think of a smartwatch fitness app that provides users with
              real-time workout data, like heart rate and calories burned.
              Emphasize glanceability by displaying the most crucial information
              in large, legible fonts. Simplify interactions by using swipe
              gestures and minimal touch targets, allowing users to access their
              workout stats on the go easily.
              <br />
              Designing for diverse digital platforms – desktops, TVs, tablets,
              wearables, and mobile phones – demands creativity, adaptability,
              and empathy for users' needs and expectations
              <br />
              By understanding the unique characteristics of each platform and
              applying best practices, you can craft delightful, engaging
              experiences that resonate with users across the digital spectrum.
              Embrace the challenge, infuse fun into your design process, and
              maintain professionalism as you explore the vast possibilities of
              the digital world. Happy designing!
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
              <Link href="/what-is-ux-design">
                <img
                  src="/assets/blogs/blog-detail/what-is-ux/feature.webp"
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
              What is UX Design: A Simple and Informative Guide for the Curious
              Minds
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
