"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function NewFaq({ allowMultiple = false, content }) {
  // keep track of which indexes are open
  const [openIndexes, setOpenIndexes] = useState([]);
  const head = useRef(null);
  const faqContainer = useRef(null);
  // fadeUp();

  function toggleIndex(i) {
    if (allowMultiple) {
      // multiple: toggle in/out of the array
      setOpenIndexes((prev) =>
        prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
      );
    } else {
      // single: either clear or only keep this one
      setOpenIndexes((prev) => (prev.includes(i) ? [] : [i]));
    }
  }
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [openIndexes]);
  useEffect(() => {
    const heading = head.current.querySelectorAll("span");
    
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: faqContainer.current, start: "top 85%" },
      });
      tl.from(heading, {
        yPercent: 100,
        opacity: 0,
        ease: "Power3.inOut",
        skewY: -5,
        duration: 1.2,
        stagger: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={faqContainer}
      className="px-[4vw] py-[5%] pb-[10%] w-full relative mobile:py-[15%] mobile:min-h-screen tablet:min-h-screen dark z-[40] mobile:px-[7vw]"
      id="faqs"
    >
      <div className="flex flex-col items-center gap-[5vw] mobile:gap-[10vw] tablet:justify-center mobile:items-start">
        {/* <Copy> */}
        {/* <HeadAnim> */}
        <h2
          ref={head}
          className="w-[68%] text-center font-medium font-heading !leading-[1.15] text-[6.5vw] mobile:text-[11vw] mobile:w-full mobile:text-left tablet:text-[8vw] tablet:w-[80%]"
        >
          <span className="block">In Case You Were</span>{" "}
          <span className="text-primary block">Wondering</span>
        </h2>
        {/* </HeadAnim> */}
        {/* </Copy> */}

        <div className="w-[90%]  mobile:w-full mobile:space-y-[5vw] tablet:w-[95%] tablet:py-[3vw] tablet:space-y-[3vw] relative z-[10]">
          {content.map((f, i) => (
            <AccordionItem
              key={i}
              question={f.question}
              answer={f.answer}
              isOpen={openIndexes.includes(i)}
              onToggle={() => toggleIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// M 0 100 V 0 Q 50 0 100 0 V 0 H 0 z

function AccordionItem({ question, answer, isOpen, onToggle }) {
  const coverRef = useRef();

  return (
    <div className="w-full group  overflow-hidden relative z-[10] faq-tab accordion-block group fadeup">
      <div className="w-full mr-auto relative pb-[2vw] pt-[2vw] tablet:pb-[2.5vw] tablet:pt-0">
        {/* Base line (always visible) */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>

        {/* Hover animated orange line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5d5ad6] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>

        <div className="inset-0 w-full relative">
          <div
            ref={coverRef}
            className="w-full h-full bg-[#111111] absolute top-0 z-0 left-0 origin-top scale-y-0"
          />
          <div className="relative w-full h-full z-10 px-[3vw] mobile:rounded-[2.5vw] content mix-blend-difference duration-300 mobile:px-0">
            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              className="cursor-pointer w-full h-full py-[2vw] flex items-center justify-between mobile:pb-[7vw] tablet:py-[3vw]"
            >
              <h4 className="text-[1.5vw] font-medium text-left leading-[1.2] mobile:text-[4.5vw] mobile:w-[70%] tablet:text-[3.7vw] tablet:w-[80%]">
                {question}
              </h4>
              <div
                style={{
                  transitionTimingFunction: "cubic-bezier(0.625, 0.05, 0, 1)",
                }}
                className={`w-[3vw] h-auto relative duration-700 mobile:w-[8vw] tablet:w-[5vw] ${
                  !isOpen
                    ? "group-hover:rotate-[180deg]"
                    : "group-hover:rotate-[315deg] rotate-[45deg]"
                }`}
              >
                <span className="w-[1.5vw] rounded-full h-[2px] bg-[#1a1a1a] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center mobile:w-[5vw] mobile:h-[1.5px] tablet:w-[3vw]"></span>

                <span
                  className={`w-[1.5vw] rounded-full h-[2px] bg-[#1a1a1a] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 duration-300 transform-origin-center mobile:w-[5vw] mobile:h-[1.5px] tablet:w-[3vw] ${
                    isOpen ? "rotate-90" : "rotate-90"
                  }`}
                ></span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0, y: 20 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  onAnimationComplete={() => {
                    ScrollTrigger.refresh();
                  }}
                  exit={{ height: 0, opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-[3.5vw] text-[1.2vw]  w-4/5 mobile:pb-[8vw] mobile:w-[95%] mobile:text-[4.2vw] tablet:text-[3vw]">
                    <p>{answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
