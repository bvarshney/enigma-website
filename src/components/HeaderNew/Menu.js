import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/header.module.css";

export default function Menu({ state, isMenuOpen, toggleMenu }) {
  const menu = useRef();
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
  const link16 = useRef();

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

  const menuLoaderBar = document.querySelectorAll(".menuLoaderBar")

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
  } else if (state.clicked === true || (state.clicked === true && state.initial === null)) 
  {
    gsap.to([menu.current], {
      duration: 0,
      css: { display: "block" },
    });
    gsap.to(menuLoaderBar ,{
      width: '100%',
      duration: 0.4,
      stagger: 0.1,
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
              link16.current,
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
              link6.current,
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
              link7.current,
              link8.current,
              link9.current,
              link10.current,
              link11.current,
              link12.current,
              link13.current,
              link14.current,
              link15.current,
              link16.current,
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
    <div ref={menu} className={` ${styles.nav}`} id="mb_nav" data-cursor-color="#ffffff" data-cursor-exclusion>
      <div className={styles.menuLoaderBars}>
        <span className={` ${styles.menuLoaderBar} menuLoaderBar`}></span>
        <span className={` ${styles.menuLoaderBar} menuLoaderBar`}></span>
        <span className={` ${styles.menuLoaderBar} menuLoaderBar`}></span>
        <span className={` ${styles.menuLoaderBar} menuLoaderBar`}></span>
        <span className={` ${styles.menuLoaderBar} menuLoaderBar`}></span>
      </div>
      <div ref={revealMenu} className={styles.menuLayer}>
        <div className={styles.menuLogoContainer}>
          <div data-cursor-size="60px"
                data-cursor-opaque>
            <Link href="/">
              <img src="/assets/header-logo/enigma-en-logo.svg" alt="Enigma Logo" title="Enigma Logo"/>
            </Link>
          </div>
        </div>
        <button className={`${styles.menuButtonInside} ${isMenuOpen ? styles.opened : ''}`}  id="menuButton" onClick={toggleMenu} aria-label="Main Menu" data-cursor-opaque data-cursor-size="60px">
          <svg viewBox="0 0 100 100" className={styles.menuSvg}>
            <path className={` ${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className={` ${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
            <path className={` ${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
          <div className={styles.wrapper}>
            <div className={styles.contentLeft}>
              <div className={styles.navLinkItem} ref={link1}>
                <span className={styles.contentHeadingSerial}>01</span>
                <Link href="/who-we-are" className={`${styles.navLink} btn-music`} >
                  About
                </Link>
              </div>
              <div className={styles.navLinkItem} ref={link2}>
                <span className={styles.contentHeadingSerial}>02</span>
                <Link href="/services" className={`${styles.navLink}  btn-music`} >
                  Expertise
                </Link>
              </div>
              <div className={styles.navLinkItem} ref={link3}>
                <span className={styles.contentHeadingSerial}>03</span>
                <Link href="/our-portfolio" className={`${styles.navLink}  btn-music`} >
                  Works
                </Link>
              </div>
              <div className={styles.navLinkItem} ref={link4}>
                <span className={styles.contentHeadingSerial}>04</span>
                <Link href="/blog" className={`${styles.navLink}  btn-music`} >
                  Insights
                </Link>
              </div>
              <div className={styles.navLinkItem} ref={link5}>
                <span className={styles.contentHeadingSerial}>05</span>
                <Link href="/careers" className={`${styles.navLink}  btn-music`} >
                  Careers
                </Link>
              </div>
              <div className={styles.navLinkItem} ref={link6}>
                <span className={styles.contentHeadingSerial}>06</span>
                <Link href="/get-in-touch" className={`${styles.navLink}  btn-music`} >
                  Contact
                </Link>
              </div>
            </div>
            
            <div className={styles.contentRight}>
              <div className={styles.contentRightBody}>
                <div className={styles.contentRightBodyTop}>
                  <div className={styles.contentTitle} ref={link7}>
                    let's be friends
                  </div>
                  <div className={styles.socialItems}>
                    <div className={styles.socialItem} ref={link8} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://www.facebook.com/in.enigmadigital" >
                        <span data-text="Facebook">Facebook</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link9} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://www.instagram.com/enigmadigital/" >
                        <span data-text="Instagram">Instagram</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link10} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://twitter.com/_EnigmaDigital" >
                        <span data-text="Twitter">Twitter</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link11} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing" >
                        <span data-text="LinkedIn">LinkedIn</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link12} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://www.behance.net/enigma-digital" >
                        <span data-text="Behance">Behance</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link13} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" target="blank" href="https://www.youtube.com/" >
                        <span data-text="YouTube">YouTube</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={styles.contentRightBodyTop}>
                  <div className={styles.contentTitle} ref={link14}>
                    for new business
                  </div>
                  <div className={styles.contentRightBottom}>
                    <div className={styles.socialItem} ref={link15} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-link-under" href="mailto:hi@weareenigma.com">
                        <span>hi@weareenigma.com</span>
                      </a>
                    </div>
                    <div className={styles.socialItem} ref={link16} data-cursor-opaque data-cursor-size="50px">
                      <a className="en-main-link" href="tel:+91 8178 026 136" >
                        <span data-text="+91 8178 026 136">+91 8178 026 136</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

