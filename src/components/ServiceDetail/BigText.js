"use client"
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from 'react';
import { SplitInLineWordChar } from '@/lib/splitText';

gsap.registerPlugin(ScrollTrigger);

const BigText = ({ text }) => {
  const container = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    SplitInLineWordChar(textRef.current);
    const lines = textRef.current.querySelectorAll(".line");
    let ctx = gsap.context(() => {
      gsap.from(lines, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 80%",
          markers: false,
          scrub: true,
        },
        duration: .7,
        x: 150,
        opacity: 0,
        ease: "Power3.out",
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section ref={container} className='w-screen overflow-hidden'>
        <div className="h-screen w-[85%] mx-auto flex items-center tablet:h-[50vh] mobile:h-full mobile:py-[5vh]">
          <p 
            ref={textRef} 
            className="text-[3.5vw] font-semibold max-w-[80%] text-left tablet:max-w-full tablet:text-[4.8vw] mobile:text-[5vw]"
            dangerouslySetInnerHTML={{__html: text}}
          />
        </div>
      </section>
    </>
  );
}

export default BigText;