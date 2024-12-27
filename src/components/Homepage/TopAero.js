import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TopHomeParticles from "./TopAeroParticles";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TopAero({ text }) {
  const container = useRef(null);
  const aeroText = useRef(null);
  const aeroMain = useRef(null);

  useEffect(() => {
    const shapes = aeroMain.current.querySelectorAll(".shape-10")
    container.current.addEventListener("mousemove", (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.to(shapes, {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
    });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(aeroText.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
        },
        opacity: 0,
        yPercent: 320,
        skewY: 30,
        duration: 3,
        ease: "expo.out",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={container} data-cusrsor-color="#000" data-cursor-size="0px">
        <div className="flex flex-col relative w-screen h-screen z-[-99] tablet:h-[70vh]">
          <div className="text-container top-aero-demo">
            <p ref={aeroText} className="aero-desk-1 w-[70%] tablet:w-[90%] font-heading">
              {text}
            </p>
            <TopHomeParticles />
          </div>
          <div ref={aeroMain} className="aerosol-main">
            <div className="shapes">
              <div className="shape-10 shape-1"></div>
              <div className="shape-10 shape-2"></div>
              <div className="shape-10 shape-3"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
