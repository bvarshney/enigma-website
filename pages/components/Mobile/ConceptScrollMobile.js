import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ConceptScrollMobile() {
  // Concept Conversion Mobile
  useEffect(() => {
    let ctx = gsap.context(() => {
      let fixed_scrol = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-concept",
          start: "top top",
          end: "2000 center",
          markers: false,
          pin: true,
          scrub: true,
        },
      });

      fixed_scrol.from(
        ".en-cicle ",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        3
      );

      fixed_scrol.to(
        ".mobli-cont",
        { opacity: 1, duration: 5, ease: "power1.inOut" },
        5
      );
      fixed_scrol.to(
        ".mobli-cont",
        { display: "block", ease: "power1.inOut" },
        5
      );
      fixed_scrol.from(
        ".en-cicle ",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        9
      );
      fixed_scrol.to(
        ".en-bg ",
        { duration: 2, ease: "power1.inOut", scale: 0.7, opacity: 1 },
        10
      );
      fixed_scrol.to(
        ".en-bg ",
        { duration: 2, ease: "power1.inOut", scale: 1.2 },
        12
      );

      fixed_scrol.to(
        ".mobli-cont_content",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        15
      );

      fixed_scrol.to(
        ".mobli-cont_content",
        {
          display: "block",
          ease: "power1.inOut",
        },
        18
      );
      fixed_scrol.to(
        ".from",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        21
      );
      fixed_scrol.to(
        ".concept",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        25
      );
      fixed_scrol.to(
        ".to",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        28
      );
      fixed_scrol.to(
        ".conversion",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
        },
        31
      );
      fixed_scrol.to(
        ".mobli-cont_content",
        {
          scale: 2.5,
          duration: 3,
          ease: "power2.out",
          opacity: 0,
        },
        34
      );
      fixed_scrol.to(
        ".mobli-cont_content p",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.5,
          delay: 2,
        },
        37
      );
      fixed_scrol.to(
        ".mobli-cont_content p",
        { opacity: 0, duration: 2, ease: "power1.inOut" },
        40
      );

      fixed_scrol.to(
        ".lapi-content p ",
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.3,
          y: 20,
        },
        43
      );
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div className="mobile-concept">
        <div className="mobli-cont mobl">
          <div className="en-bg" />
          <div className="en-cicle" />
          <div className="mobli-cont_content">
            <p className="from">From </p> <p className="concept">Concept </p>{" "}
            <p className="to">To </p> <p className="conversion">Conversion</p>
          </div>
          <div className="lapi-content">
            <p className="word">We're Changing The Face of Web</p>
          </div>
        </div>
      </div>
    </>
  );
}
