import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import styles from "@/styles/header.module.css";
import Showreel from "./Showreel";
import Menu from "./Menu";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {

  const [menuState, setMenuState] = useState({initial: false, clicked: false});
  const [disabled, setDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const buttonRefDarkMode = useRef(null);
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnDisable = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // Function to toggle the Menu
  const toggleMenu = () => {

    if (disabled) return;
    btnDisable();
    setIsMenuOpen(!isMenuOpen);

    const audio = new Audio("/assets/music/menu.mp3");

    const button = document.querySelector('#menuButton');
    button.classList.toggle('opened');
    button.setAttribute('aria-expanded', button.classList.contains('opened'));
    audio.play();

    if (menuState.initial === false) {
      setMenuState({ initial: null, clicked: true });
    } else {
      setMenuState({ clicked: !menuState.clicked });
    }
  };

  // const controlNavbar = () => {
  //   if (typeof window !== 'undefined') {
  //     const currentScrollY = window.scrollY;
  //     const threshold = 150; // Pixels, adjust as needed
  
  //     if (currentScrollY > threshold) {
  //       headerRef.current.style.backgroundColor = 'var(--white1)';
  //     } else {
  //       headerRef.current.style.backgroundColor = '';
  //     }
  
  //     // Existing code for hiding/showing navbar on scroll
  //     if (show) {
  //       return;
  //     }
  
  //     const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);
  
  //     if (scrollDistance <= 50) return; // Adjust as needed
  
  //     const scrollUp = currentScrollY < lastScrollY.current;
  //     if (scrollUp) {
  //       gsap.to(headerRef.current, { y: "0", duration: 0.3, ease: "power1.out" });
  //     } else {
  //       gsap.to(headerRef.current, { y: "-100px", duration: 0.3, ease: "power1.out" });
  //     }
  
  //     lastScrollY.current = currentScrollY; // Update the last scroll position
  //   }
  // };
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     controlNavbar();
  //   }
  
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  

// Dark Mode Toggle Start
  const [invertText, setInvertText] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("invertText") === "true"
      : false
  );

  const [imgSrc, setImgSrc] = useState(
    invertText ? "/assets/dark/moon.svg" : "/assets/dark/sun.svg"
  );

  useEffect(() => {
    localStorage.setItem("invertText", invertText);
    setImgSrc(invertText ? "/assets/dark/moon.svg" : "/assets/dark/sun.svg");
    const div = document.body;
    if (invertText) {
      div.classList.add("dark");
    } else {
      div.classList.remove("dark");
    }
  }, [invertText]);

  useEffect(() => {
    const button = buttonRefDarkMode.current;
    const darkModeImg = document.querySelector(".gsap-dark-img");
  
    const handleClick = () => {
      const audio = new Audio("/assets/music/click.mp3");
      audio.play();
  
      // GSAP Animation when dark mode button is clicked
      gsap.fromTo(
        darkModeImg,
        { scale: 0, rotate: "-280deg" },
        { scale: 1, rotate: "0deg", duration: 0.7 }
      );
    };
  
    button.addEventListener("click", handleClick);
  
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, [buttonRefDarkMode]);

// Dark Mode Toggle END

  return (
    <header className={styles.headerContainer} id="navbar">
      <div ref={headerRef} className={` ${styles.headerBg}`}>
      <div className={styles.headerMain} > 
        <div
          className={`${styles.headerLogo} dark:invert`}>
          <Link href="/">
            <Image
              src="/assets/header-logo/enigma-en-logo.svg"
              width={80}
              height={80}
              alt="Enigma Logo"
              title="Enigma Logo"
              className={` ${styles.mainLogo}`}
              data-cursor-size="60px"
              data-cursor-exclusion
              priority={true}
            />
          </Link>
        </div>

        <div className={styles.headerRight}>
          <div className={`${styles.showreelBtn} `}>
            <button aria-label="play showreel" data-cursor-exclusion data-cursor-size="60px" onClick={() => setShow(true)}>
              showreel'23
            </button>
          </div>
          
          <div className={` ${styles.darkModeButton}`}>
            <button aria-label="Dark Mode Toggle" onClick={() => setInvertText(!invertText)} ref={buttonRefDarkMode}>
              <Image
                src={imgSrc}
                alt="Dark Mode"
                title="Dark Mode"
                width={25}
                height={25}
                className={`gsap-dark-img ${styles.darkModeImg}`}
                priority={true}
              />
            </button>
          </div>

            <button className={`${styles.menuButton} ${isMenuOpen ? styles.opened : ''}`}  id="menuButton" onClick={toggleMenu} aria-label="Main Menu" data-cursor-exclusion data-cursor-size="60px">
                <svg viewBox="0 0 100 100" className={styles.menuSvg}>
                    <path className={` ${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className={` ${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                    <path className={` ${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
        </div>
      </div>
      </div>

      <div className={styles.showreelWrapper} data-cursor-text="Close" data-cursor-size="100px" data-cursor-color="#5d5ad6">
        <Showreel show={show} onClose={() => setShow(false)}>
          <video
            src="/assets/reels/showreel.mp4"
            autoPlay
            loop
          ></video>
        </Showreel>
      </div>
      <Menu state={menuState} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}