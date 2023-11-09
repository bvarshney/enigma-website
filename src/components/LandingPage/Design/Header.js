import React, { useEffect, useState } from "react";
import gsap from "gsap";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollToPlugin);

export default function Header({ isDarkMode, toggleDarkMode }) {
    const [isActive, setIsActive] = useState(false);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.offsetTop;
            gsap.to(window, {
                duration: 2,
                scrollTo: targetPosition,
                ease: "power4.inOut",
            });
          };    

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
          "#landing-dark-img",
          { scale: 0, rotate: "-280deg" },
          { scale: 1, rotate: "0deg", duration: 0.7 }
        );
      });

// Header Animation
useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#head-anim",
      {
        y: -80,
        opacity: 0,
      },
      {
        delay: 4,
        duration: 1.3,
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

    return(
        <>
            <header className={`${styles.headerContainer}`}>
                <div className={styles.headerDesktop}>
                    <div id="head-anim" className={styles.headLogo}>
                        <a data-cursor-exclusion data-cursor-size="70px" href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                            <Image
                                height={50}
                                width={50} 
                                src="/assets/landing-page/design/header-logo.svg"
                                alt="logo" />
                        </a>
                    </div>
                    <div id="head-anim" className={styles.headerMain}>
                        <div className={styles.nav}>
                            <div className={styles.navItems}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#benefit" onClick={(e) => handleSmoothScroll(e, 'benefit')}>
                                    <span data-text="Benefits">
                                        Benefits
                                    </span>
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>
                                    <span data-text="Recent Work">
                                        Recent Work
                                    </span>
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                    <span data-text="Pricing">
                                        Pricing
                                    </span>
                                </a>
                            </div>
                            <div className={styles.navItems}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                                    <span data-text="FAQs">
                                        FAQs
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="head-anim" className={styles.headerCta}>
                        <button>
                            <a href="#">
                                <span>
                                    Book a call
                                </span> 
                            </a>
                        </button>
                    </div>
                    <button id="head-anim"
                        aria-label="Dark Mode"
                        className={styles.darkToggle}
                        onClick={toggleDarkMode} 
                    >
                        <Image
                            height={20}
                            width={20} 
                            id="landing-dark-img"
                            alt="dark mode" 
                            src={isDarkMode ? '/assets/dark/sun.svg' : '/assets/dark/moon.svg'}
                        />
                    </button>
                </div>

{/* Mobile Header */}
                <div className={styles.headerMobile}>
                    <div id="head-anim" className={styles.headerMobileContainer}>
                        <div className={styles.headLogo}>
                            <Image
                                height={50}
                                width={50} 
                                src="/assets/landing-page/design/header-logo.svg"
                                alt="logo" />
                        </div>
                        <button 
                            aria-label="Dark Mode"
                            className={styles.darkToggle}
                            onClick={toggleDarkMode} 
                        >
                            <Image
                                height={20}
                                width={20} 
                                id="landing-dark-img"
                                alt="dark mode" 
                                src={isDarkMode ? '/assets/dark/sun.svg' : '/assets/dark/moon.svg'}
                            />
                        </button>
                        <div className={styles.hamburger}>
                            <svg
                                className={`${styles.ham} ${styles.hamRotate} ${isActive ? styles.active : ''}`}
                                viewBox="0 0 100 100"
                                onClick={handleClick}
                                >
                                <path className={`${styles.line} ${styles.lineTop}`} d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                                <path className={`${styles.line} ${styles.lineMiddle}`} d="m 70,50 h -40" />
                                <path className={`${styles.line} ${styles.lineBottom}`} d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                            </svg>
                        </div>
                        <div className={`${styles.mobileNav} ${isActive ? styles.activeNav : ''}`}>
                            <Image
                                height={800}
                                width={500}
                                className={styles.mobileNavBg}
                                loading="lazy"
                                src="/assets/landing-page/design/dark-nav.webp"
                                alt="nav-bg"
                                />
                            <div className={styles.mobileNavLinks}>
                                <ul className={styles.navList}>
                                    <li className={styles.navListLinks}>
                                            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')}>
                                                <span>Home</span>
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#benefit" onClick={(e) => handleSmoothScroll(e, 'benefit')}>
                                                Benefits
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>
                                                Recent Work
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                                Pricing
                                            </a>
                                    </li> 
                                    <li className={styles.navListLinks}>
                                            <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                                                FAQs
                                            </a>
                                    </li> 
                                </ul>
                                
                                <div className={styles.navCta}>
                                    <button>
                                        <a href="#">
                                            Book a call
                                        </a>
                                    </button>
                                </div>
                                <div className={styles.navBottom}>
                                    <Image
                                        width={150}
                                        height={150} 
                                        alt="enigma trademark"
                                        src="/assets/landing-page/design/nav-bottom.webp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </header>
        </>
    );
}