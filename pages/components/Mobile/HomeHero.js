import React, { useEffect } from "react";
import gsap from "gsap";

export default function HomeHero() {
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim2",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 100,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
  });

  // Hero Section Para Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#para",
      {
        opacity: 0,
        translateY: 200,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 5,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
  });

  // Hero Video Section Animation
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
        delay: 5,
        duration: 1.3,
        opacity: 1,
      }
    );
  });

  return (
    <>
      <div className="hero-main-mob hero-mobile hero-ipad">
        <div className="hero-main-content-section">
          <div className="video-box" id="video">
            <video
              src="/assets/reels/hero.mp4"
              preload="auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="content-hero-box-mobile">
            <div className="first-text" id="anim2">
              <h3>We are</h3>
            </div>

            <div className="second-text line-height" id="anim2">
              <h1>Digital</h1>
            </div>

            <div className="third-text line-height" id="anim2">
              <h1>Experience</h1>
            </div>

            <div className="forth-text line-height" id="anim2">
              <h1>
                Design <span className="mob-agency">Agency</span>
              </h1>
            </div>

            <div className="mobile-hero-para" id="para">
              <h4>
                Leveraging the power of{" "}
                <span className="bold">
                  Emotion, Consumer Psychology, and Technology,
                </span>{" "}
                we create Digital Brand Experiences that propel your success in
                the enigmatic realm of bits & bytes.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
