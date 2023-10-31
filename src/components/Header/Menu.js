import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";

const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 5,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 0,
    ease: "power1.inOut",
  });
};

const Menu = ({ state }) => {
  const router = useRouter();
  const menu = useRef();
  const backgroundMenu = useRef();
  const backgroundMenu2 = useRef();
  const revealMenu = useRef();
  const link1 = useRef();
  const link2 = useRef();
  const link3 = useRef();
  const link4 = useRef();
  const link5 = useRef();
  const link6 = useRef();
  const link7 = useRef();
  const link8 = useRef();
  const link9 = useRef();
  const link10 = useRef();
  const link11 = useRef();
  const link12 = useRef();
  const link13 = useRef();
  const link14 = useRef();
  const link15 = useRef();

if (globalThis.innerWidth > 1024) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running on the client-side
      const buttons = document.querySelectorAll(".btn-music");
      const handleClick = () => {
        const audio = new Audio("/assets/music/click.mp3");
        audio.play();
      };
      buttons.forEach((button) => button.addEventListener("click", handleClick));
      return () => {
        buttons.forEach((button) =>
          button.removeEventListener("click", handleClick)
        );
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if running on the client-side
      const buttons = document.querySelectorAll(".btn-music");
      const handleMouseOver = (event) => {
        const audio = new Audio("/assets/music/hover.mp3");
        audio.play();
        event.target.addEventListener("mouseout", () => {
          audio.pause();
          audio.currentTime = 0;
        });
      };
      buttons.forEach((button) =>
        button.addEventListener("mouseover", handleMouseOver)
      );
      return () => {
        buttons.forEach((button) =>
          button.removeEventListener("mouseover", handleMouseOver)
        );
      };
    }
  }, []);
}

useEffect(() => {

  const menuLoaderBar = document.querySelectorAll(".menuLoaderBar");

  if(state.clicked === false) {
    gsap.to(revealMenu.current, {
      opacity: 0,
      duration: 0.2,
      delay: 0
    });
    gsap.to(menuLoaderBar ,{
      width: '0',
      duration: 0.4,
      stagger: 0.1,
      delay: 0,
    });
    gsap.to([menu.current], {
      duration: 0,
      delay: 1.2,
      css: { display: "none" },
    });
  } else if (
    state.clicked === true || 
    (state.clicked === true && state.initial === null)) 
  {
    gsap.to([menu.current], {
      duration: 0,
      css: { display: "block" },
    });
    gsap.to(menuLoaderBar ,{
      width: '100%',
      duration: 0.4,
      stagger: 0.1,
      // ease: 'power2.inOut'
    });
    gsap.to(revealMenu.current, { 
      opacity: 1,
      duration: 0.5,
      delay: 0.6
    })
    gsap.to(
            [
              link1.current,
              link2.current,
              link3.current,
              link4.current,
              link5.current,
            ],
            {
              duration: 0,
              rotationX: 0,
              opacity: 1,
              translateY: 0,
              transformPerspective: "1000",
              transformOrigin: "top center",
            }
          );
    
          gsap.from(
            [
              link1.current,
              link2.current,
              link3.current,
              link4.current,
              link5.current,
            ],
            {
              delay: 0.5,
              duration: 0.7,
              opacity: 0,
              translateY: 200,
              rotationX: -80,
              stagger: {
                amount: 0.4,
              },
            }
          );
    
          gsap.from(
            [
              link6.current,
              link7.current,
              link8.current,
              link9.current,
              link10.current,
              link11.current,
              link12.current,
              link13.current,
              link14.current,
              link15.current,
            ],
            {
              delay: 0.7,
              duration: 0.7,
              opacity: 0,
              translateY: "200",
              rotationX: "-100deg",
              stagger: {
                amount: 0.4,
              },
            }
          );
  }
}, [state]);

  return (
    <div ref={menu} className="nav" id="mb_nav">
      <div className="menuLoaderBars">
        <span className="menuLoaderBar"></span>
        <span className="menuLoaderBar"></span>
        <span className="menuLoaderBar"></span>
        <span className="menuLoaderBar"></span>
        <span className="menuLoaderBar"></span>
      </div>
      <div ref={revealMenu}       
        className="menu-layer"
        data-cursor-exclusion>
        <div id="menu-wrapper">
        <div className="menu-logo-conatainer">
          <div data-cursor-size="60px"
                data-cursor-opaque>
            <Link href="/">
              <img src="/assets/header-logo/enigma-en-logo.svg"/>
            </Link>
          </div>
        </div>
          <div className="wrapper">
            <div className="menu-links">
              <div className="menu-content">
                <div className="content-left">
                  <div className="content-left-body">
                    <div className="content-left-body-row">
                      <div className="content-left-body-row-column">
                        <div className="content-heading nav__link" ref={link1}>
                          <Link href="/who-we-are" className="btn-music">
                            <span className="content-heading-serial">01</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="About"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              <span
                                className={
                                  router.pathname == "/who-we-are"
                                    ? "activeMenu"
                                    : ""
                                }
                              >
                                About
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link" ref={link2}>
                          <Link href="/services" className="btn-music">
                            <span className="content-heading-serial">02</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Expertise"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              <span
                                className={
                                  router.pathname == "/services"
                                    ? "activeMenu"
                                    : ""
                                }
                              >
                                Expertise
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link" ref={link3}>
                          <Link href="/our-portfolio" className="btn-music">
                            <span className="content-heading-serial">03</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Works"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              <span
                                className={
                                  router.pathname == "/our-portfolio"
                                    ? "activeMenu"
                                    : ""
                                }
                              >
                                Works
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="content-left-body-row-column">
                        <div className="content-heading nav__link" ref={link4}>
                          <Link href="/blog" className="btn-music">
                            <span className="content-heading-serial">04</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Insights"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              <span
                                className={
                                  router.pathname == "/blog"
                                    ? "activeMenu"
                                    : ""
                                }
                              >
                                Insights
                              </span>
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link" ref={link5}>
                          <Link href="/get-in-touch" className="btn-music">
                            <span className="content-heading-serial">05</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Contact"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              <span
                                className={
                                  router.pathname == "/get-in-touch"
                                    ? "activeMenu"
                                    : ""
                                }
                              >
                                Contact
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="content-right-body">
                    <div className="content-right-body-top">
                      <div className="content-title  nav__link" ref={link6}>
                        let's be friends
                      </div>
                      <div className="content-right-body-socials">
                      <div className="content-right-body-socials-column">
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link7}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://www.facebook.com/in.enigmadigital">
                            <span data-text="Facebook">Facebook</span>
                          </a>
                        </div>
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link8}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://www.instagram.com/enigmadigital/">
                            <span data-text="Instagram">Instagram</span>
                          </a>
                        </div>
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link9}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://www.youtube.com/">
                            <span data-text="Youtube">Youtube</span>
                          </a>
                        </div>
                      </div>
                      <div className="content-right-body-socials-column">
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link10}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://twitter.com/_EnigmaDigital">
                            <span data-text="Twitter">Twitter</span>
                          </a>
                        </div>
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link11}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://in.linkedin.com/company/in-enigmadigital">
                            <span data-text="LinkedIn">LinkedIn</span>
                          </a>
                        </div>
                        <div
                          className="cb-menu-nav-item nav__link"
                          ref={link12}
                          data-cursor-opaque
                          data-cursor-size="50px"
                        >
                          <a target="blank" href="https://www.behance.net/enigma-digital">
                            <span data-text="Behance">Behance</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    </div>
                   
                   <div className="content-right-body-bottom">
                   <div
                      className="content-right-body-title content-title nav__link"
                      ref={link13}
                    >
                      work with us
                    </div>
                    <div className="content-right-body-more">
                      <div className="content-right-body-more-column">
                        <div
                          className="content-link  mb-3"
                          data-cursor-size="30px"
                          data-cursor-opaque
                        >
                          <div className="cb-outro-header nav__link" ref={link14}>
                            <a
                              href="mailto:hi@weareenigma.com"
                              data-cursor-size="70px"
                            >
                              hi@weareenigma.com
                            </a>
                          </div>
                        </div>
                        <div className="num menu-num">
                          <div
                            className="cb-menu-nav-item nav__link"
                            ref={link15}
                            data-cursor-opaque
                            data-cursor-size="50px"
                          >
                            <a href="tel:+91 8178 026 136">
                              <span data-text="+91 8178 026 136">
                                +91 8178 026 136
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Menu;
