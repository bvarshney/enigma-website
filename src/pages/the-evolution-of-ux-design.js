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
      title="The Evolution of UX Design: An Informative Expedition Through The
          History"
      description="Welcome to a thrilling adventure through the history of UX design!
              Fasten your seatbelts, and join us on this journey as we uncover
              the origins of User Experience Design."
      canonical="https://www.weareenigma.com/the-evolution-of-ux-design"
      openGraph={{
        url: "https://www.weareenigma.com/the-evolution-of-ux-design",
        title: "The Evolution of UX Design: An Informative Expedition Through The History",
        description:
          "Welcome to a thrilling adventure through the history of UX design! Fasten your seatbelts, and join us on this journey as we uncover the origins of User Experience Design.",
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
        siteName: "https://www.weareenigma.com/the-evolution-of-ux-design",
      }}
    />    

      <Head>
        <title>
          The Evolution of UX Design: An Informative Expedition Through The
          History
        </title>
        <meta name="description" content="Welcome to a thrilling adventure through the history of UX design!
              Fasten your seatbelts, and join us on this journey as we uncover
              the origins of User Experience Design." />
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
            <h1>The History & Evolution of UX</h1>
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
            The Evolution of UX Design: An Informative Expedition Through The
            History
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
              <h2>11/11/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={
                    "https://weareenigma.vercel.app/the-evolution-of-ux-design"
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
                    "https://weareenigma.vercel.app/the-evolution-of-ux-design"
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
                    "https://weareenigma.vercel.app/the-evolution-of-ux-design"
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
                    "https://weareenigma.vercel.app/the-evolution-of-ux-design"
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
              Welcome to a thrilling adventure through the history of UX design!
              Fasten your seatbelts, and join us on this journey as we uncover
              the origins of User Experience Design. From its humble beginnings
              to its current status as a highly sought-after field, UX design
              has come a long way. So, grab your favourite beverage, sit back,
              and let's dive into the intriguing world of UX design.
              <br />
              <br />
            </p>
            <h3 className="bold-h" id="anim">
              Once Upon a Time: The Birth of UX Design
            </h3>
            <p id="anim">
              The term "User Experience Design" was first coined by the
              legendary Donald Norman in the early 1990s. Norman, a cognitive
              scientist and cofounder of the Nielsen Norman Group, was an early
              advocate for a usercentred approach to design. He recognized the
              importance of understanding users' needs and designing products
              that catered to them, leading to the development of the UX design
              discipline.
              <br />
              <br />
              While the term UX design might have originated in the 90s, the
              concept of designing for the user has been around for much longer.
              In fact, some might argue that the field's roots can be traced
              back to the early days of human civilization, when artisans
              crafted tools and utensils with the user's comfort and efficiency
              in mind.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-evalution/3.png"
                  alt="Img"
                />
              </div>
            </div>

            <br />
            <br />
            <h3 className="bold-h">
              The First Steps: UX Design's Emergence as a Discipline
            </h3>

            <p>
              The field of UX design began to take shape in the 20th century, as
              new technologies and scientific discoveries revolutionized the way
              people interacted with products. The invention of the telephone,
              for example, necessitated the need for a user-friendly interface,
              paving the way for early iterations of UX design principles.
              <br />
              <br />
              The rapid rise of the computer industry in the mid-20th century
              further fuelled the growth of UX design. As computers became more
              accessible to the general public, the demand for easy-to-use
              interfaces grew exponentially. In response, pioneers like Alan
              Cooper and Jakob Nielsen emerged as influential thought leaders,
              advocating for the prioritization of user needs in design.
            </p>

            <br />
            <br />
            <h3 className="bold-h">
              The Digital Revolution: UX Design in the 21st Century
            </h3>

            <p>
              With the turn of the century came a surge in digital innovation,
              and UX design evolved to meet the demands of an increasingly
              tech-savvy world. The rise of the internet and the proliferation
              of smartphones, tablets, and other connected devices have made UX
              design a critical component of digital success.
              <br />
              <br />
              Today, UX design is an integral part of the digital landscape,
              with UX agencies in India and around the world offering
              specialized services to help businesses optimize their digital
              presence. Among these agencies, Enigma is one of the best UX
              agency India has to offer can help you create a seamless user
              experience that keeps customers coming back for more.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-evalution/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            <br />
            <br />

            <h3 className="bold-h">
              The Future: Where UX Design is Headed
            </h3>

            <p>
              As we look towards the future, UX design is poised to become even
              more essential. Advancements in artificial intelligence, virtual
              reality, and other emerging technologies will undoubtedly reshape
              the way we interact with digital products, and UX designers will
              be at the forefront of this transformation.
              <br />
              <br />
              As UX design continues to grow and evolve, new trends and best
              practices emerge, reflecting the changing needs and expectations
              of users. To stay competitive in the digital landscape, it's
              essential for businesses to keep up with these developments and
              incorporate them into their digital strategy. Some of the current
              and emerging trends in UX design include:
            </p>

            <br />
            <br />

            <p>
              <span className="bold">Personalization:</span> Like Sherlock
              Holmes, As users become more accustomed to tailored experiences,
              UX designers are prioritizing personalization to deliver more
              relevant and engaging content. By leveraging data and user
              preferences, designers can create experiences that are customized
              to individual users, making them feel valued and understood.
            </p>
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-evalution/4.png"
                  alt="Img"
                />
              </div>
            </div>
            <br />
            <br />
            <p>
              <span className="bold">Inclusive design: </span>UX UX design is
              increasingly focused on creating experiences that cater to diverse
              users, including those with disabilities. Inclusive design ensures
              that digital products are accessible to as many people as
              possible, regardless of their abilities or limitations.
            </p>
            <br />
            <br />
            <p>
              <span className="bold">Voice user interfaces (VUI): </span>
              With the rise of voice-activated technologies like Amazon Alexa
              and Google Assistant, UX designers are exploring new ways to
              create seamless interactions through voice commands. VUI design
              will continue to grow in importance as more users embrace
              voice-controlled devices and applications.
            </p>
            <br />
            <br />
            <p>
              <span className="bold">Dark mode: </span>
              As users become more conscious of their screen time and its
              effects on their well-being, dark mode has gained popularity as a
              design trend. By offering a darker, less bright interface,
              designers can help reduce eye strain and improve the overall user
              experience.
            </p>
            <br />
            <br />
            <p>
              <span className="bold">
                Augmented reality (AR) and virtual reality (VR):{" "}
              </span>
              As AR and VR technologies become more accessible, UX designers
              will need to adapt their skills to create immersive experiences in
              these emerging environments. By incorporating AR and VR elements
              into digital products, designers can offer users unique and
              engaging experiences that blur the line between the digital and
              physical worlds.
            </p>
            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/the-evalution/1.png"
                  alt="Img"
                />
              </div>
            </div>
            <br />
            <br />
            <p>
              In the end, UX design's exciting history has led us to where we
              are today—a world where user experience is at the heart of digital
              success. As the field continues to evolve, UX designers will keep
              pushing the boundaries of what's possible, ensuring that the
              digital landscape remains a delightful place for users to explore
              and interact with. In conclusion, UX design has come a long way
              since Donald Norman first coined the term "User Experience Design"
              in the early 1990s. From its origins as a usercentred approach to
              its current prominence in the digital world, UX design has
              established itself as a vital discipline in creating enjoyable,
              efficient, and effective experiences. So, whether you're looking
              to optimize your existing digital products or create something
              entirely new, remember that the right UX agency can be your key to
              unlocking incredible user experiences and achieving digital
              success.
              <br />
              <br />
              By staying abreast of these trends and working closely with a
              skilled UX agency, you can ensure that your digital products
              remain relevant and engaging, meeting the ever-changing needs of
              your users. As technology continues to advance and user
              expectations shift, it's essential to keep your finger on the
              pulse of UX design to maintain your competitive edge in the
              digital landscape.
            </p>

            <br />
            <br />
            <p>
              So, the next time you marvel at the intuitiveness of your
              favourite app or the ease with which you navigate a well-designed
              website, take a moment to appreciate the rich history of UX design
              and the experts who've made it their mission to create delightful
              digital experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="space-large desktop"></div>

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
