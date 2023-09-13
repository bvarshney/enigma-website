import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ConceptLazyVideo from "./ConceptLazyVideo";

gsap.registerPlugin(ScrollTrigger);

export default function ConceptScrollNew() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let fixed_scrol = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-concept-scroll",
          start: "-700 top",
          markers: false,
          scrub: 2,
        },
      });
      fixed_scrol.to(".container_word_change_t", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });

      fixed_scrol.to(".container_word_change_t", {
        display: "block",
        ease: "power1.inOut",
      });
      fixed_scrol.to(".we", { opacity: 1, duration: 2, ease: "power1.inOut" });
      fixed_scrol.to(".make", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      fixed_scrol.to(".digital", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      fixed_scrol.to(".brand", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });
      fixed_scrol.to(".container_word_change_t", {
        scale: 2.5,
        duration: 3,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  });
  useEffect(() => {
    let ctx = gsap.context(() => {
      let fixed_scrol = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-concept-scroll",
          start: "top top",
          end: "3500 center",
          markers: false,
          pin: true,
          scrub: 2,
        },
      });

      fixed_scrol.to(".container_word_change_t", {
        duration: 3,
        ease: "power1.inOut",
      });
      fixed_scrol.set(".container_lapi", {
        display: "block",
        background: "#000",
      });
      fixed_scrol.to(".transition_to_lapi", {
        opacity: 1,
        duration: 10,
        ease: "power2.out",
      });
      fixed_scrol.to(".container_word_change_t", { display: "none" }, 25);
      fixed_scrol.set(".container_lapi_content_together", {}, 30);
      fixed_scrol.fromTo(
        ".enigma_bg_container",
        { opacity: 0, scale: 2.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 8,
          ease: "power1.inOut",
        }
      );
      fixed_scrol.to(".enigma_bg", { duration: 8, ease: "power1.inOut" }, 37);
      fixed_scrol.fromTo(
        ".lapi_div",
        { y: 500, scale: 2, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 8,
          ease: "power1.inOut",
        },
        42
      );
      fixed_scrol.to(
        ".enigma_bg",
        { opacity: 1, duration: 8, ease: "power1.inOut" },
        44
      );
      fixed_scrol.to(
        ".enigma_bg_container",
        { opacity: 0, duration: 8, ease: "power1.inOut" },
        48
      );
      fixed_scrol.to(
        ".container_lapi_content_together",
        { duration: 8, ease: "power1.inOut" },
        43
      );

      fixed_scrol.set(
        ".macbook_frame",
        { opacity: 1, duration: 15, ease: "power1.inOut" },
        45
      );

      fixed_scrol.to(
        ".lapi_div",
        {
          scale: 3,
          opacity: 1,
          duration: 5.5,
          ease: "power1.inOut",
        },
        55
      );
      fixed_scrol.to(
        ".macbook_frame",
        { opacity: 0, scale: 1, duration: 5.5, ease: "power1.inOut" },
        55
      );
      fixed_scrol.set(
        ".o-page-tail_inner",
        {
          display: "block",
          width: "100vw",
          height: "100vh",
          opacity: 0,
        },
        53
      );
      fixed_scrol.to(
        ".container_lapi_content_together",
        { display: "none" },
        57
      );

      fixed_scrol.to(".enigma_bg", { opacity: 0 }, 60);
      fixed_scrol.to(
        ".o-page-tail_inner",
        { opacity: 1, duration: 2, ease: "power1.inOut" },
        59
      );
      fixed_scrol.fromTo(
        ".c-hm-us_top",
        { gridTemplateColumns: "50% 0% 50%" },
        {
          gridTemplateColumns: "20% 60% 20%",
          opacity: 1,
          duration: 10,
          ease: "power1.inOut",
        },
        80
      );
      fixed_scrol.fromTo(
        ".c-hm-us_title, .t-lead ",
        { y: 50, scale: 0.9 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 8,
          ease: "power1.inOut",
        },
        90
      );
    });
    return () => ctx.revert();
  });
  return (
    <>
      <div className="hero-concept-scroll">
        {/* second scroll */}
        <div className="container_word_change_t m-hide">
          <div className="container_word_change_t_content">
            <p className="we">From</p> <p className="make">Concept</p>{" "}
            <p className="digital">To</p> <p className="brand">Conversion</p>
          </div>
        </div>
        {/* thrid scroll */}
        <div className="transition_to_lapi m-hide" />
        <div className="container_lapi m-hide">
          <div className="container_lapi_content">
            <div className="container_lapi_content_together">
              <div className="container_lapi_content_inner">
                <div className="lapi_div">
                  <div className="macbook_pro" />
                  <div className="macbook_frame">
                    <div className="macbook_frame_content_upper"></div>
                    <ConceptLazyVideo
                      src="/assets/newProject/a.webm"
                      title="Mac Enigma Video"
                    />
                    {/* <video
                      width="100%"
                      height="100%"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="/assets/newProject/a.webm"
                      loading="lazy"
                    ></video> */}
                    <div className="macbook_frame_background" />
                  </div>
                </div>
              </div>
            </div>
            <div className="enigma_bg_container_2"></div>
            <div className="enigma_bg_container">
              <p className="enigma_bg">We're Changing The Face of Web</p>
            </div>
          </div>
        </div>
        {/* split */}
        <div className="o-page-tail_inner m-hide">
          <div className="c-hm-us">
            <div className="o-container">
              <div className="c-hm-us_top">
                <div className="o-media o-media1 hm-us">
                  <div className="o-media_obj w-background-video w-background-video-atom left-b">
                    <video
                      loading="lazy"
                      className="vid lazyload"
                      src="/assets/reels/left.webm"
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="beach-waves"
                      // preload="auto"
                    />
                  </div>
                </div>
                <div className="c-hm-us_s2">
                  <h4 className="t-lead">
                  Empowered by Neuromarketing Principles,<br/>
                  our services open endless opportunities<br/>
                  For each brand we partner with.<br/>
                  Let's amplify your potential! 
                  <span className="emoji-dark"> 🚀</span>
                  </h4>
                  <div className="c-hm-us_title">
                    <h2 className="t-d3-fluid cta">
                      <div className="cb-outro-header">
                        <Link
                          href="/contact"
                          data-cursor-size="100px"
                          data-cursor-exclusion
                        >
                          Say, Hello!{" "}
                          <span className="wave emoji-dark">👋</span>
                        </Link>
                      </div>
                    </h2>
                  </div>
                </div>
                <div className="o-media o-media2 hm-us">
                  <div className="o-media_obj w-background-video w-background-video-atom right-b">
                    <video
                      loading="lazy"
                      className="vid lazyload"
                      src="/assets/reels/right.webm"
                      autoPlay
                      muted
                      playsInline
                      loop
                      id="beach-waves"
                      // preload="auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </>
  );
}
