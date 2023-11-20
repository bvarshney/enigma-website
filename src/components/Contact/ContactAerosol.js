import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ContactText from "./ContactText";

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
        start: "-200 top",
      },
    });
    const demoHeader = document.querySelectorAll(".aero-demo h1");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        yPercent: 320,
        skewY: 30,
      },
      {
        opacity: 1,
        yPercent: 0,
        skewY: 0,
        duration: 3,
        ease: "expo.out",
      },
      0
    );
  });

  return (
    <>
      <div className="aero-hover">
        {/* Text Container with Blend Mode Effect */}
        <div className="text-container aero-demo">
          <p className="aero-desk-1">
            you're one call away
            <br />
            from being awesome
          </p>
          <p className="aero-mob-1">
            you're one call
            <br /> away from 
            <br />being awesome
          </p>
          <ContactText />
        </div>

        <div className="aerosol-main">
          <div className="c-cursor"></div>
          <div className="shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
