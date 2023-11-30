import React, { useEffect } from "react";
import gsap from "gsap";
import LazyVideo from "./MobileHeroLazyVideo";

export default function HeroMobile() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#video",
      {
        opacity: 0,
        scale: 0.5,
      },
      {
        scale: 1,
        delay: 6,
        duration: 1,
        opacity: 1,
      }
    ) .fromTo(
      "#anim2",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 100,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: -0.6,
        duration: 1,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    ) .fromTo(
      "#para p",
      {
        opacity: 0,
        translateY: 100,
      },
      {
        delay: -0.6,
        duration: 1,
        opacity: 1,
        translateY: 0,
      }
    );
  }, []);

  return (
    <>
      <div className="hero-main-mob hero-mobile hero-ipad">
        <div className="hero-main-content-section">
          <div className="video-box" id="video">
            <LazyVideo 
              poster='/assets/reels/reel-poster.webp'
              srcWebm="/assets/reels/hero.webm"
              srcMp4="/assets/reels/hero.mp4"
              title="official-reel-video"
            />
          </div>

          <div className="content-hero-box-mobile">

            <div className="second-text line-height" >
              <h1 className="second-text line-height">
                <span id="anim2">Digital </span> 
                <span className="color-primary" id="anim2">Experience </span> 
                <span id="anim2">Design </span> 
                <span id="anim2" className="mob-agency">Agency</span>
              </h1>
            </div>
            <div className="mobile-hero-para" id="para">
              <p>
                Leveraging the power of<strong> Emotion, Consumer Psychology, and Technology, </strong>we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
              </p>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
