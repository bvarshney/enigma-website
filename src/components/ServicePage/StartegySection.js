import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";

gsap.config({
    nullTargetWarn: false,
    trialWarn: false
  });
  
  gsap.registerPlugin(ScrollTrigger);
  5;
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

export default function StrategySection() {

      // Parallax Image
  useEffect(() => {
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
          invalidateOnRefresh: true,
        },
        y: "25%",
        ease: "none",
      });
    });
  });

    // Text Reveal Animation For Each
    useEffect(() => {
        const totalSection = document.querySelectorAll(".strategy-box-anim");
        totalSection.forEach(function (elem, index) {
          const text = new SplitType(elem.querySelectorAll(".ser-text-head-anim"));
          let textwords = text.words;
          gsap.from(textwords, {
            scrollTrigger: {
              trigger: elem,
              start: "top 85%",
              markers: false,
            },
            duration: 0.5,
            opacity: 0,
            yPercent: 100,
            ease: "Power3.out",
            stagger: 0.02,
          });
        });
      });
      
  // Strategy Image Animate
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".service-box-image",
        start: "top 85%",
      },
    });
    tl.fromTo(
      ".anim-img-service",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.5,
      }
    );
  });

  console.clear();

    return(
        <>
            <div className="service-cap-section strategy-box-anim">
          <div className="left-box" data-jelly>
            <p className="sub-text ser-text-head-anim">
              <span>
                Here's how we help you
                <br /> grow.
              </span>
            </p>
          </div>
          <div className="right-box">
            <div className="right-sub-content strategy-box-anim">
              <h2 className="ser-text-head-anim">Our Capabilities</h2>
              <p data-jelly className="ser-text-head-anim">
                <span>
                  We create evergreen brands that are highly effective at
                  boosting revenue, increasing brand equity, and improving ROI.
                  Our big picture approach powers your entire business, not just
                  the marketing department.
                </span>
              </p>
            </div>
          </div>
        </div>


        {/* Strategy Box 1  */}
        <div className="strategy-box strategy-box-anim">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#2b8c87"
          >
          <Link href='/strategy-and-planning'>
            <h3 className="ser-text-head-anim">Strategy</h3>
            <p data-jelly className="ser-text-head-anim">
              <span>
                  Digital Advisory and Consulting, Integrated Digital Marketing
                  Plan (D.M.P.), User Experience Development, Customer Experience
                  Strategy, Consumer Research, Insights & Target Market Analysis,
                  Digital Capabilities Development, Persona Design & Customer
                  Segmentation, Competitive Analysis & Industry Insights, Brand &
                  Content Strategy, Digital Marketing and Website Performance
                  Audit.
              </span>
            </p>
          </Link> 
          </div>

          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/strategy.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>

        {/* Strategy Box 1  END */}


        {/* Strategy Box 2  */}
        <div className="strategy-box strategy-box-anim flex-reverse">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#000"
          >
          <Link href='/ui-ux-design'>
            <h3 className="ser-text-head-anim">UI/UX Design</h3>
              <p data-jelly className="ser-text-head-anim">
                <span>
                  User Interface Design, User Experience Design, Responsive Web
                  Design, Mobile App Design, Digital Interface Design, Design
                  Systems Creation, Experience Mapping, User Flow Mapping,
                  Wireframing & Prototyping, Illustrations & Animations, Visual
                  Designs, and UI Kits.
                </span>
              </p>
          </Link>
            
          </div>
          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/design.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        {/* Strategy Box 2  END */}


        {/* Strategy Box 3  */}
        <div className="strategy-box strategy-box-anim">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#fcc63d"
          >
          <Link href='/technology-stack'>
            <h3 className="ser-text-head-anim">Technology</h3>
              <p data-jelly className="ser-text-head-anim">
                <span>
                  Front-End Development, Native & Hybrid Mobile Application
                  Development, Progressive Web Applications, Database Design &
                  Management, Cloud Infrastructure Services, Testing & Automation
                  TECH STACK - HTML, CSS, Sass, Less, JavaScript, jQuery, GSAP,
                  Vue, React, React Native, Ionic, Flutter, NodeJS, Spring, JAVA,
                  Grails, Hibernate, MySQL, PostgreSQL, Oracle, Mongo, AWS and
                  Google Cloud.
                </span>
              </p>
          </Link>
          </div>

          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/tech.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        {/* Strategy Box 3  END */}

        {/* Strategy Box 4  */}
        <div className="strategy-box strategy-box-anim flex-reverse">
          <div
            className="left-strategy-box"
            data-cursor-text="Know More!"
            data-cursor-size="110px"
            data-cursor-color="#000"
          >
            <Link href='/marketing-and-analysis'>
              <h3 className="ser-text-head-anim">Marketing</h3>
              <p data-jelly className="ser-text-head-anim">
                <span>
                  Social Media Management, Content Creation & Curation, Search
                  Engine Optimisation, Influencer Management, Auction Media
                  Management, Online Reputation Management, Media Planning &
                  Buying, Marketing Automation, Email Marketing, Conversion Rate
                  Optimisation, Website & SEO Analysis.
                </span>
              </p>
            </Link>
          </div>

          <div className="right-strategy-box">
            <div className="image-container service-box-image">
              <Image
                src="/assets/services/market.png"
                width={500}
                height={1000}
                alt="services"
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
                className="anim-img-service"
              />
            </div>
          </div>
        </div>
        </>
    )
}