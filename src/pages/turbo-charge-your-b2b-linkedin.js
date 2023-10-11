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

export default function turbochargeb2blinking() {
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
      title="Turbocharge Your B2B LinkedIn Game with these 6 unbelievable strategies"
      description="Ah, LinkedIn - the sophisticated, well-dressed sibling of the
              social media family. Suited up and ready for business, LinkedIn
              has evolved into the go-to platform for B2B marketing
              professionals who are hungry for success."
      canonical="https://www.weareenigma.com/turbo-charge-your-b2b-linkedin"
      openGraph={{
        url: "https://www.weareenigma.com/turbo-charge-your-b2b-linkedin",
        title: "Turbocharge Your B2B LinkedIn Game with these 6 unbelievable strategies",
        description:
          "Ah, LinkedIn - the sophisticated, well-dressed sibling of the social media family. Suited up and ready for business, LinkedIn  has evolved into the go-to platform for B2B marketing professionals who are hungry for success.",
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
        siteName: "https://www.weareenigma.com/turbo-charge-your-b2b-linkedin",
      }}
    />    

      <Head>
        <title>
          Turbocharge Your B2B LinkedIn Game with these 6 unbelievable
          strategies
        </title>
        <meta name="description" content="Ah, LinkedIn - the sophisticated, well-dressed sibling of the social media family. Suited up and ready for business, LinkedIn  has evolved into the go-to platform for B2B marketing professionals who are hungry for success." />
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
            <h1>Turbocharge Your B2B LinkedIn</h1>
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
            Turbocharge Your B2B LinkedIn Game with these 6 unbelievable
            strategies
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
              <h2>16/12/2022</h2>
            </div>
            <div className="box-blog" id="anim">
              <h1>Share Article</h1>
              <div className="social-icons">
                <LinkedinShareButton
                  url={"https://weareenigma.com/turbo-charge-your-b2b-linkedin"}
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
                  url={"https://weareenigma.com/turbo-charge-your-b2b-linkedin"}
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
                  url={"https://weareenigma.com/turbo-charge-your-b2b-linkedin"}
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
                  url={"https://weareenigma.com/turbo-charge-your-b2b-linkedin"}
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
              Ah, LinkedIn - the sophisticated, well-dressed sibling of the
              social media family. Suited up and ready for business, LinkedIn
              has evolved into the go-to platform for B2B marketing
              professionals who are hungry for success. But, with so many
              companies jostling for attention, how can you make sure your
              LinkedIn content stands out from the sea of corporate jargon and
              buzzwords? Fret not, dear reader, for we've got you covered! In
              this blog, we'll unveil six astonishing tips to optimise your
              LinkedIn content for B2B marketing. So, grab your monocle and
              let's dive into the world of LinkedIn mastery!
              
              
            </p>
            <h3 className="bold-h" id="anim">
              Tip 1: Consistent Content & Visuals: Your Brand's Stylish Ensemble
            </h3>
            <p id="anim">
              Picture this: You walk into a networking event dressed in
              mismatched clothing, like a psychedelic fever dream. How seriously
              do you think others would take you? The same applies to your
              LinkedIn presence. Establishing a consistent content and visual
              style is the virtual equivalent of dressing to impress.
            </p>

            
            <h3 className="bold-h" id="anim">
              1.1 Develop a Content Calendar:
            </h3>
            <p id="anim">
              A content calendar is your B2B marketing wardrobe. Plan your
              content ahead of time to ensure you're consistently posting and
              covering a variety of topics relevant to your audience. Regularly
              updating your calendar will keep your content fresh, just like
              rotating seasonal outfits.
            </p>

            

            <h3 className="bold-h" id="anim">
              1.2 Create a Cohesive Visual Identity:
            </h3>
            <p id="anim">
              Much like a perfectly tailored suit, a cohesive visual identity
              gives your brand that polished, professional look. Use consistent
              colours, fonts, and imagery that reflect your brand's personality.
              This visual consistency makes your content instantly recognizable,
              like a fashion icon on the red carpet.
            </p>
            

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/b2b-linkedin/1.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            
            <h3 className="bold-h">
              Tip 2: Targeting the Right Audience: LinkedIn's Secret Handshake
            </h3>

            <p>
              LinkedIn is teeming with professionals from every industry, so how
              can you make sure your content reaches the right people? By
              targeting the right audience, you can ensure that your content
              lands in the hands of those who will appreciate it the most.
            </p>

            
            

            <h3 className="bold-h">
              2.1 Use LinkedIn's Native Targeting Tools:
            </h3>

            <p>
              LinkedIn offers a plethora of targeting options, such as job
              function, seniority, company size, and industry. By using these
              tools, you can tailor your content to your ideal audience, like
              sending an exclusive invitation to an elite soiree.
            </p>

            

            <h3 className="bold-h">
              2.2 Engage in Relevant Groups and Conversations:
            </h3>

            <p>
              Participate in LinkedIn groups and conversations related to your
              industry to establish connections with like-minded professionals.
              Share your content in these spaces to spark discussions and build
              relationships, much like mingling at a high-class networking
              event.
            </p>

            
            

            <h3 className="bold-h">
              Tip 3: Establish Credibility: Your LinkedIn Seal of Approval{" "}
            </h3>

            <p>
              In the world of B2B marketing, credibility is king. Without it,
              your content may be dismissed as just another sales pitch. Here's
              how to establish credibility and win the trust of your audience:
            </p>

            
            <h3 className="bold-h">
              3.1 Showcase Your Expertise:
            </h3>

            <p>
              Share case studies, whitepapers, and research that demonstrate
              your industry knowledge and experience. By showcasing your
              expertise, you'll be seen as a reliable source of information,
              like the keynote speaker at a prestigious conference.
            </p>

            
            <h3 className="bold-h">
              3.2 Highlight Client Testimonials and Success Stories:
            </h3>

            <p>
              Client testimonials and success stories are the B2B equivalent of
              rave reviews. Share these endorsements on your LinkedIn profile to
              demonstrate your track record of satisfied clients and stellar
              results.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/b2b-linkedin/2.jpg"
                  alt="Img"
                />
              </div>
            </div>
            
            

            <h3 className="bold-h">
              Tip 4: Establish Thought Leadership: The B2B LinkedIn VIP Lounge
            </h3>

            <p>
              Thought leadership is the ultimate B2B marketing status symbol. By
              establishing yourself as a thought leader, you can attract
              prospects who are eager to learn from your insights and expertise.
            </p>

            
            <h3 className="bold-h">
              4.1 Share Original, Insightful Content:
            </h3>

            <p>
              Create and share original, thought-provoking content that
              challenges conventional wisdom and offers fresh perspectives on
              industry trends and issues. Much like a captivating TED Talk, your
              content should inspire, educate, and engage your audience.
            </p>

            
            <h3 className="bold-h">
              4.2 Engage with Industry Influencers and Experts:
            </h3>

            <p>
              Connect and engage with influential professionals in your
              industry. Share, comment on, and discuss their content to
              demonstrate your own expertise and contribute to the ongoing
              conversation. This helps position you as a thought leader amongst
              your peers, like an esteemed guest at an exclusive roundtable
              discussion.
            </p>

            
            

            <h3 className="bold-h">
              Tip 5: Experiment with and Improve Your Content: The LinkedIn
              Laboratory
            </h3>

            <p>
              Success on LinkedIn isn't a one-size-fits-all formula. Like a mad
              scientist in a marketing laboratory, you must experiment with
              various types of content and formats to discover what resonates
              best with your audience.
            </p>

            

            <h3 className="bold-h">
              5.1 Test Different Content Formats:
            </h3>

            <p>
              LinkedIn offers an array of content formats, such as text, images,
              videos, and SlideShare presentations. Experiment with these
              formats to determine which ones generate the most engagement and
              suit your brand's personality. It's like trying on different
              outfits to find the perfect ensemble for a night out.
            </p>
            

            <h3 className="bold-h">
              5.2 Analyse and Optimize:{" "}
            </h3>

            <p>
              Review your LinkedIn analytics to identify patterns and trends in
              your content's performance. By analysing this data, you can
              pinpoint what works and what doesn't, allowing you to optimize
              your content strategy for maximum impact. It's like fine-tuning
              your dance moves to wow the crowd at a high-stakes gala.
            </p>

            <div className="blog-img">
              <div className="image-container blog-img-container">
                <img
                  src="/assets/blogs/blog-detail/b2b-linkedin/3.jpg"
                  alt="Img"
                />
              </div>
            </div>

            
            

            <h3 className="bold-h">
              Tip 6: A Proper B2B Marketing Strategy: The LinkedIn Master Plan
            </h3>

            <p>
              Finally, to achieve LinkedIn greatness, you must have a
              well-thought-out B2B marketing strategy that encompasses all of
              the tips mentioned above. Like a master chess player, you must
              think several moves ahead to outsmart your competition and win the
              game.
            </p>

            

            <h3 className="bold-h">
              6.1 Set Clear Goals and Objectives:
            </h3>

            <p>
              Define your LinkedIn marketing goals and objectives, such as
              increasing brand awareness, generating leads, or establishing
              thought leadership. These goals will guide your content strategy
              and help you measure your success.
            </p>

            

            <h3 className="bold-h">
              6.2 Align Your LinkedIn Strategy with Your Overall Marketing Plan:
            </h3>

            <p>
              Ensure that your LinkedIn strategy complements and supports your
              overall marketing plan. By integrating your LinkedIn efforts with
              your other marketing initiatives, you can create a powerful,
              cohesive brand presence that commands attention and drives
              results.
            </p>

            
            
            <p>
              There you have it - six unbelievably effective tips to optimize
              your LinkedIn content for B2B marketing success. By following
              these tips, you'll be well on your way to becoming the belle of
              the LinkedIn ball, dazzling your audience with your consistent
              content, targeted approach, credibility, thought leadership, and
              refined marketing strategy. So, it's time to don your marketing
              top hat, raise your glass, and toast to your newfound LinkedIn
              prowess. Cheers to your success!
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
