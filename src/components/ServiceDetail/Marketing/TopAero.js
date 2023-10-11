import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TopHomeParticles from "./TopAeroParticles";

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

      gsap.to(".shape-10", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".top-aero-hover",
        start: "-200 top",
      },
    });

    const demoHeader = document.querySelectorAll(".top-aero-demo h1");

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
      <div className="top-aero-hover">
        <div className="text-container top-aero-demo">
          <h1 className="aero-desk-1">
            we make cool things
            <br />
            that do great business
          </h1>
          <h1 className="aero-mob-1">
            we make cool <br/> 
            things that do 
            <br /> great business
          </h1>
          <TopHomeParticles />
        </div>

        <div className="aerosol-main">
          <div className="shapes">
            <div className="shape-10 shape-1"></div>
            <div className="shape-10 shape-2"></div>
            <div className="shape-10 shape-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
