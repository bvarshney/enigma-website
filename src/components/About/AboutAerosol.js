import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AboutText from "./AboutText";

gsap.registerPlugin(ScrollTrigger);

export default function Aerosol() {
  useEffect(() => {
    document.body.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set(".c-cursor", {
        x: mouseX,
        y: mouseY,
      });

      gsap.to(".shape", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aero-hover",
        start: "top 85%",
      },
    });
    const demoHeader = document.querySelectorAll(".aero-demo p");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        yPercent: 520,
        skewY: 30,
      },
      {
        opacity: 1,
        yPercent: 0,
        skewY: 0,
        duration: 4,
        ease: "expo.out",
      },
      0
    );
  }, []);

  return (
    <>
      <div className="aero-hover">
        {/* Text Container with Blend Mode Effect */}
        <div className="text-container aero-demo">
          <p className="about-text-aero">
            Enigma is a collective of Creators, Discoverers, Dreamers & Doers!
          </p>
          <AboutText />
        </div>

        <div className="aerosol-main">
          <div className="c-cursor"></div>
          <div className="shapes">
            <div className="shape shape-1 about-1"></div>
            <div className="shape shape-2 about-2"></div>
            <div className="shape shape-3 about-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
