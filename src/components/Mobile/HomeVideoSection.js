import React, { useEffect } from "react";
import Link from "next/link";
import LazyVideo from "./LazyVideo";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeVideoSection() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".video-content-box",
          start: "top 85%",
          markers: false,
        },
      });
      tl.from(".para-anim-mobile", {
        opacity: 0,
        y: 150,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.7,
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div className="video-section-mobile">
        <div className="video-content-box">
          <h4 className="para-anim-mobile">
              Empowered by Neuromarketing Principles,
              our services open endless opportunities
              For each brand we partner with.
              Let's amplify your potential! 
            <span className="emoji-dark">🚀</span>
          </h4>
          <div className="cb-outro-header">
            <Link href="/get-in-touch" className="para-anim-mobile">
              Say, Hello! <span className="emoji-dark">👋</span>
            </Link>
          </div>
        </div>

        <div className="video-box">
          <LazyVideo
            src="/assets/reels/hero.webm"
            title="official reel video"
          />
        </div>
      </div>
    </>
  );
}
