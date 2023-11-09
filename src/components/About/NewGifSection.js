import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NewGifSection() {
  // Data Speed Control
  useEffect(() => {
    let ctx = gsap.context(() => {
      const color = document.querySelector("#gif");
      gsap.to("[data-speed]", {
        y: (i, el) =>
          -1 *
          parseFloat(el.getAttribute("data-speed")) *
          (color.offsetHeight / 3),
        ease: "none",
        scrollTrigger: {
          trigger: color,
          invalidateOnRefresh: true,
          scrub: 0,
          markers: false,
          start: "-400 center",
        },
      });
    });
    return () => ctx.revert();
  });

  // Opacity 0 to 1
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".gifSectionAbout",
        start: "top 90%",
      },
    });

    const demoHeader = document.querySelectorAll(".newsCard");
    // Header
    tl.fromTo(
      demoHeader,
      {
        y: 300,
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,
      }
    );
  });

  // Text Fill Animation on Scroll
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".gifsubtext p", {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: ".gifsubtext p",
          scrub: 1,
          start: "top 90%",
          end: "bottom 30%",
          duration: 10,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div className="gifSectionAbout" id="gif">
        <div className="gifAboutSub">
          <div className="newsCard news-Slide-up" data-speed="4">
            <video
              autoPlay
              loop
              muted
              loading="lazy"
              src="/assets/about/gif-section/culture.webm"
              className="gif-img"
            ></video>
            <h2 className="about-gif-text">culture</h2>
            <img
              src="/assets/about/gif-section/arr.png"
              alt="gif arrow img"
              className="about-gif-arrow"
            />
            <h2 className="about-gif-num">01</h2>
            <div className="newsCaption">
              <p className="newsCaption-content">
                We don’t work for clients. We work for our brand partners. And
                as partners, we make sure to craft disruptive digital solutions
                using purposeful strategy, beautiful designs & user-centric
                technology that makes you a part of the very best on the web.
              </p>
            </div>
          </div>

          <div className="newsCard news-Slide-up" data-speed="5">
            <video
              autoPlay
              loop
              muted
              src="/assets/about/gif-section/attitude.webm"
              loading="lazy"
              className="gif-img"
            ></video>
            <h2 className="about-gif-text">attitude</h2>
            <img
              src="/assets/about/gif-section/arr.png"
              alt="gif arrow img"
              className="about-gif-arrow"
            />
            <h2 className="about-gif-num">02</h2>
            <div className="newsCaption">
              <p className="newsCaption-content">
                You might have intricate requirements but we’ve got ambition,
                imagination, skills and the tools to match them. That’s 4-to-1
                to us. It just can’t go wrong. Can it?
              </p>
            </div>
          </div>
        </div>

        <div className="gifAboutSub">
          <div className="newsCard news-Slide-up" data-speed="3.5">
            <video
              autoPlay
              loop
              muted
              src="/assets/about/gif-section/ethos.webm"
              loading="lazy"
              className="gif-img"
            ></video>
            <h2 className="about-gif-text">ethos</h2>
            <img
              src="/assets/about/gif-section/arr.png"
              alt="gif arrow img"
              className="about-gif-arrow"
            />
            <h2 className="about-gif-num">03</h2>
            <div className="newsCaption">
              <p className="newsCaption-content">
                While we are definitely smarter than we look (it's not
                difficult), we pride ourselves on being humble and down-to-earth
                creatures. Our ethos are simple – Keep learning, Keep Growing &
                even when you think you’ve created the best there is, there is
                always room for improvement.
              </p>
            </div>
          </div>
        </div>

        <div className="gifAboutSub">
          <div className="newsCard news-Slide-up MR-20" data-speed="2.5">
            <video
              autoPlay
              loop
              muted
              src="/assets/about/gif-section/experience.webm"
              loading="lazy"
              className="gif-img"
            ></video>
            <h2 className="about-gif-text">experience</h2>
            <img
              src="/assets/about/gif-section/arr.png"
              alt="gif arrow img"
              className="about-gif-arrow"
            />
            <h2 className="about-gif-num">04</h2>
            <div className="newsCaption">
              <p className="newsCaption-content">
                An agency is only as strong as its people. Our team members come
                with a solid experience of working with well-known agencies, for
                Fortune 500 brands, running their own businesses, designing game
                changing products and even competing at professional level in
                sports.
              </p>
            </div>
          </div>

          <div className="newsCard news-Slide-up" data-speed="3.2">
            <video
              autoPlay
              loop
              muted
              src="/assets/about/gif-section/magic.webm"
              loading="lazy"
              className="gif-img"
            ></video>
            <h2 className="about-gif-text">magic</h2>
            <img
              src="/assets/about/gif-section/arr.png"
              alt="gif arrow img"
              className="about-gif-arrow"
            />
            <h2 className="about-gif-num">05</h2>
            <div className="newsCaption">
              <p className="newsCaption-content">
                Yes! You read that one just about right. We make magic... We
                just don’t do campaigns. We focuson user driven outcomes and
                endeavour to create meaningful connections between brands and
                its users. Somewhere between devising a strategy.
              </p>
            </div>
          </div>
        </div>

        <div className="gifBottomText">
          <div className="gifsubtext">
            <p>We don't adapt to change, we anticipate it!</p>
            <span className="span1">💡</span>
            <p>Our digital solutions have transformed brands</p>
            <p>and empowered businesses globally.</p>
            <span className="span3">🌎🚀</span>
          </div>
        </div>
      </div>
    </>
  );
}
