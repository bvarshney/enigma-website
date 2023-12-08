import React, { useEffect } from 'react';
import "react-creative-cursor/dist/styles.css";
import gsap from "gsap";
import Image from 'next/image';

const HeroDesktop = () => {

    // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 6,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }).fromTo(
        ".home-page-header",
        {
          y: -50,
          opacity: 0,
        },
        {
          delay: -1,
          duration: 1.3,
          opacity: 1,
          y: 0,
          stagger: 0.1
        });
        tl.to(".reel-anim", {
          scale: 1,
          opacity: 1,
          delay: -1.8,
          duration: 1.3,
        });
    return () => tl.kill();
  }, []);

  return (
    <>
        <div className="hero-main desktop">
              <div
                className="hero-section"
              >
                <div className="first-section">
                  <div
                    className="digital"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/1.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    <span className="line hacker">digital</span>
                  </div>
                  <p className="para-hero" id="anim">
                    Harnessing the power of<span className="bold-600"> Emotion, Design, Technology & Neuromarketing, </span>we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
                  </p>
                </div>

                <div className="second-section">
                  <div
                    className="experience"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/2.webp"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    experience
                  </div>

                  <div className="reel-hero">
                    <div className='reel-anim'>
                      <video
                        poster='/assets/reels/reel-poster.webp'
                        muted
                        autoPlay
                        loop
                        preload="auto"
                        className="hero-video"
                      >
                        <source src='/assets/reels/hero.webm' type='video/webm'/>
                        <source src='/assets/reels/hero.mp4' type='video/mp4'/>
                      </video>
                    </div>
                  </div>
                </div>

                <div className="third-section">
                  <div
                    className="design"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/4.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    design
                  </div>

                  <div
                    className="agency"
                    data-cursor-magnetic
                    data-cursor-background-image="/assets/gif/3.gif"
                    data-cursor-size="300px"
                    data-cursor-color="#000"
                    id="anim"
                  >
                    agency
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-footer">
              <div className="scroll-img home-page-header">
                <Image
                  src="/assets/hero-footer/scroll.svg"
                  width={200}
                  height={200}
                  alt="Scroll Image"
                  title='Scroll Down Image'
                  className="svg-dark-mode"
                ></Image>
              </div>

              <div className="content-section home-page-header">
                <div className="f-sub-content">
                  <div className="f-content-text">
                    <p className="f-disabled">timezone</p>
                    <div className="f-heading">+5:30 GMT</div>
                  </div>
                </div>
                <div className="f-right">
                  <p className="f-disabled">location</p>
                  <div className="f-heading">Noida - India</div>
                </div>
              </div>
            </div>
    </>
  )};

export default HeroDesktop;

