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
              title="Marketing Psychology: The Secret to Captivating Your Audience and Building Unforgettable Brands"
              description="Marketing professionals are continually searching for innovative
              ways to engage and captivate their target audience."
              canonical="https://www.weareenigma.com/marketing-psychology"
              openGraph={{
                url: "https://www.weareenigma.com/marketing-psychology",
                title: "Marketing Psychology: The Secret to Captivating Your Audience and Building Unforgettable Brands",
                description:
                  "Marketing professionals are continually searching for innovative ways to engage and captivate their target audience.",
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
                siteName: "https://www.weareenigma.com/marketing-psychology",
              }}
            />    

      <Head>
        <title>
          Marketing Psychology: The Secret to Captivating Your Audience and
          Building Unforgettable Brands
        </title>
        <meta name="description" content="Marketing professionals are continually searching for innovative ways to engage and captivate their target audience." />
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
            <h1>The Secret of Marketing</h1>
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
            Marketing Psychology: The Secret to Captivating Your Audience and
            Building Unforgettable Brands
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
              <h2>02/12/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/marketing-psychology"}
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
                  url={"https://weareenigma.com/marketing-psychology"}
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
                  url={"https://weareenigma.com/marketing-psychology"}
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
                  url={"https://weareenigma.com/marketing-psychology"}
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
              Marketing professionals are continually searching for innovative
              ways to engage and captivate their target audience. As the digital
              landscape evolves and competition intensifies, it's more important
              than ever to understand the psychological principles that underpin
              consumer behaviour. Enter the world of marketing psychology – a
              fascinating field that blends psychology, neuroscience, and
              marketing to create powerful connections between brands and their
              customers. In this article, we'll explore the concept of marketing
              psychology and reveal why understanding the human mind is the key
              to transforming your marketing strategies and leaving your
              audience in awe.

            </p>

            <h3 className="bold-h" id="anim">
              What is Marketing Psychology?
            </h3>

            <p id="anim">
              Marketing psychology is the study of how psychological principles
              and human behaviour impact marketing strategies and consumer
              decision-making. It seeks to understand the cognitive, emotional,
              and social factors that drive consumer behaviour, enabling
              marketers to create tailored marketing campaigns that resonate
              with their audience on a deeper level. By leveraging insights from
              marketing psychology, brands can foster stronger connections with
              their customers, inspire loyalty, and ultimately drive conversions
              and long-term success.
            </p>

            <h3 className="bold-h" id="anim">
              The Role of Emotions in Marketing:
            </h3>

            <p id="anim">
              One of the foundational principles of marketing psychology is the
              understanding that emotions play a significant role in consumer
              decision-making. Rather than making purely rational choices,
              consumers are often swayed by their emotions, which can drive
              their behaviour and influence their purchase decisions. As a
              result, marketers must craft emotionally resonant campaigns that
              evoke positive feelings and create lasting connections with their
              target audience.
              <br />
              <br />
              Examples of emotional marketing strategies include storytelling,
              utilizing emotionally charged language, and evoking nostalgia or
              other strong feelings. By tapping into these emotions, marketers
              can create memorable campaigns that not only persuade consumers to
              take action but also foster long-term brand loyalty.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/1.webp"
                  alt="Img"
                />
              </div>
            </div>


            <h3 className="bold-h" id="anim">
              The Power of Social Influence:
            </h3>

            <p id="anim">
              Social influence is another critical aspect of marketing
              psychology. Humans are inherently social creatures, and our
              behaviour is often shaped by the opinions and actions of those
              around us. Marketers can capitalize on this by leveraging social
              proof, testimonials, and influencer partnerships to build trust
              and credibility with their target audience. For example, a brand
              can showcase positive customer reviews or share user-generated
              content to demonstrate social proof and establish trust with
              potential customers. Influencer marketing, which involves
              partnering with influential individuals to promote a brand, can
              also be highly effective in building credibility and generating
              buzz around a product or service.
            </p>


            <h3 className="bold-h" id="anim">
              The Psychology of Persuasion:
            </h3>

            <p id="anim">
              Persuasion is at the heart of marketing, and marketing psychology
              offers valuable insights into the art of convincing consumers to
              take action. By understanding the psychological principles of
              persuasion, marketers can create more compelling campaigns that
              drive desired behaviours and outcomes.
              <br />
              <br />
              One of the most well-known models of persuasion is Robert
              Cialdini's six principles of influence: reciprocity, commitment
              and consistency, social proof, authority, liking, and scarcity. By
              incorporating these principles into their marketing strategies,
              brands can increase the likelihood of consumer engagement,
              conversions, and long-term loyalty.
            </p>


            <h3 className="bold-h" id="anim">
              The Importance of Cognitive Biases:
            </h3>

            <p id="anim">
              Cognitive biases are mental shortcuts that our brains use to
              process information and make decisions more efficiently. While
              these biases can often lead to errors in judgment, marketers can
              leverage them to create more effective marketing campaigns. For
              example, the anchoring bias causes individuals to rely heavily on
              the first piece of information they encounter when making
              decisions. Marketers can use this to their advantage by
              strategically presenting information in a way that influences
              consumer perception and decision-making. Similarly, the
              availability heuristic leads people to make decisions based on the
              most readily available information. By ensuring that their brand
              is top-of-mind through consistent messaging and advertising,
              marketers can capitalize on this bias and drive consumer choice.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/2.webp"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              The Role of Memory and Attention:
            </h3>

            <p>
              Memory and attention are crucial factors in the effectiveness of
              marketing campaigns. To create lasting impressions, marketers must
              understand how the human brain processes, stores, and retrieves
              information. By crafting memorable messages that stand out from
              the competition, marketers can ensure that their brand remains
              top-of-mind for consumers.
              <br />
              <br />
              One way to enhance memory and attention is through the use of
              repetition and consistency. Research shows that repeated exposure
              to a message increases the likelihood that it will be remembered.
              Similarly, consistent branding and messaging across various
              marketing channels can help reinforce brand identity and improve
              recall.
              <br />
              <br />
              Another tactic is to leverage the von Restorff effect, a
              psychological phenomenon where people are more likely to remember
              items that stand out from their surroundings. By creating unique
              and unexpected marketing materials, marketers can capture
              consumers' attention and improve recall.
            </p>

            <h3 className="bold-h">
              The Impact of Personalization and Relevance:
            </h3>

            <p>
              In today's highly competitive marketing landscape, personalization
              and relevance are more important than ever. Consumers are
              inundated with marketing messages and have become increasingly
              adept at tuning out irrelevant content. To cut through the noise,
              marketers must create highly targeted campaigns that resonate with
              their audience on a personal level. Marketing psychology offers
              valuable insights into consumer preferences, motivations, and
              behaviour, allowing marketers to create tailored campaigns that
              speak directly to their audience's needs and desires. By
              leveraging data-driven insights and psychological principles,
              marketers can create highly personalized campaigns that not only
              capture attention but also inspire action and foster loyalty.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/marketing-psychology/3.webp"
                  alt="Img"
                />
              </div>
            </div>

            <h3 className="bold-h">
              The Power of Neuromarketing:
            </h3>

            <p>
              Neuromarketing, a subset of marketing psychology, involves the use
              of neuroscience techniques to measure consumers' responses to
              marketing stimuli. By examining brain activity, eye movements, and
              other physiological markers, neuromarketers can gain valuable
              insights into consumer preferences and behaviour. Neuromarketing
              offers a unique perspective on marketing psychology, providing
              marketers with quantitative data to support their strategies and
              optimize campaign effectiveness. By incorporating neuromarketing
              principles and techniques into their marketing toolbox, marketers
              can create more impactful campaigns that resonate with their
              audience on a neurological level.
              <br />
              <br />
              To conclude, Marketing psychology is a powerful discipline that
              can revolutionize the way brands connect with their audience. By
              understanding the principles of human behaviour, emotion, and
              cognition, marketers can create captivating campaigns that not
              only engage consumers but also inspire loyalty and drive long-term
              success.
              <br />
              <br />
              As a marketing professional, diving into the world of marketing
              psychology can provide you with a competitive edge and the tools
              necessary to create truly unforgettable campaigns. By embracing
              marketing psychology and the insights it offers, you can elevate
              your marketing strategies, leave your audience wowed, and
              ultimately achieve unparalleled success in today's fast-paced
              marketing landscape.
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
              <Link href="/how-to-delightfully-design">
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
