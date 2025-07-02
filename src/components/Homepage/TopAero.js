"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TopHomeParticles from "./TopAeroParticles";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "@/styles/particles.module.css";

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
        <div className={`${styles.textContainer} dark:!mix-blend-darken`}>
            <p ref={aeroText} className="w-[70%] tablet:w-[90%] font-heading">
              {text}
            </p>
            <TopHomeParticles />
          </div>
          <div ref={aeroMain} className={styles.aerosolMain}>
          <div className={styles.shapes}>
              <div className={`${styles.shape10} ${styles.shape1} shape-10`}></div>
              <div className={`${styles.shape10} ${styles.shape2} shape-10`}></div>
              <div className={`${styles.shape10} ${styles.shape3} shape-10`}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
