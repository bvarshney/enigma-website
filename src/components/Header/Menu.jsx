"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Menu({ state, isMenuOpen, toggleMenu }) {
  const menu = useRef();
  const revealMenu = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const links = Array.from({ length: 16 }, () => useRef());

  useEffect(() => {
    const menuLoaderBar = document.querySelectorAll(".menuLoaderBar");
    const linksToShow = [links[0].current, links[1].current, links[2].current, links[3].current, links[4].current, links[15].current];
    const linksGroup1 = links.slice(0, 6).map(link => link.current);
    const linksGroup2 = links.slice(6).map(link => link.current);

    if (state.clicked === false) {
      gsap.to(revealMenu.current, { opacity: 0, duration: 0.2 });
      gsap.to(menuLoaderBar, { width: '0', duration: 0.4, stagger: 0.1 });
      gsap.to([menu.current], { css: { display: "none" }, delay: 1.2 });
    } else if (state.clicked) {
      gsap.to([menu.current], { css: { display: "block" } });
      gsap.to(menuLoaderBar, { width: '100%', duration: 0.4, stagger: 0.1 });
      gsap.to(revealMenu.current, { opacity: 1, duration: 0.5, delay: 0.6 });

      gsap.to(linksToShow, {
        duration: 0, rotationX: 0, opacity: 1, translateY: 0,
        transformPerspective: "1000", transformOrigin: "top center",
      });

      gsap.from(linksGroup1, {
        delay: 0.7, duration: 0.7, opacity: 0, translateY: 200, rotationX: -80, stagger: 0.1,
      });

      gsap.from(linksGroup2, {
        delay: 0.7, duration: 0.7, opacity: 0, translateY: 200, rotationX: -100, stagger: 0.05,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div ref={menu} className={styles.nav} id="mb_nav" data-cursor-exclusion>
      <div className={styles.menuLoaderBars}>
        {Array(5).fill().map((_, i) => (
          <span key={i} className={`${styles.menuLoaderBar} menuLoaderBar`}></span>
        ))}
      </div>
      <div ref={revealMenu} className={styles.menuLayer}>
        <div className={styles.menuLogoContainer}>
          <Link href="/" prefetch={false}>
            <Image src="/en-logo.svg" width={80} height={80} alt="Enigma Logo" title="Enigma Logo" />
          </Link>
        </div>
        <button
          className={`${styles.menuButtonInside} ${isMenuOpen ? styles.opened : ''}`}
          id="menuButton"
          onClick={toggleMenu}
          aria-label="Main Menu"
          data-cursor-opaque data-cursor-size="60px">
          <svg viewBox="0 0 100 100" className="w-[2.5vw] tablet:w-[6vw] mobile:w-[40px]">
            <path className={` ${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className={` ${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
            <path className={` ${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
        <div className={styles.wrapper}>
          <div className={styles.contentLeft}>
            {MenuLinks.map((link, index) => (
              <div key={index} className={styles.navLinkItem} ref={links[index]}>
                <span className={styles.contentHeadingSerial}>0{index + 1}</span>
                <Link prefetch={false} href={link.link} className={styles.navLink}>
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.contentRight}>
            <div className={styles.contentRightBody}>
              <div className={styles.contentRightBodyTop}>
                <div className={styles.contentTitle} ref={links[6]}>let&apos;s be friends</div>
                <div className={styles.socialItems}>
                  {SocialLinks.map((item, index) => (
                    <div key={index} className={styles.socialItem} ref={links[7 + index]} data-cursor-opaque data-cursor-size="50px">
                      <Link className="en-main-link" target="blank" href={item.link} rel="nofollow, noreferrer">
                        <span data-text={item.name}>{item.name}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.contentRightBodyTop}>
                <div className={styles.contentTitle} ref={links[13]}>for new business</div>
                <div className={styles.contentRightBottom}>
                  <div className={styles.socialItem} ref={links[14]} data-cursor-opaque data-cursor-size="50px">
                    <Link className="en-link-under" href="mailto:hi@weareenigma.com">
                      <span>hi@weareenigma.com</span>
                    </Link>
                  </div>
                  <div className={styles.socialItem} ref={links[15]} data-cursor-opaque data-cursor-size="50px">
                    <Link className="en-main-link" href="tel:+91 8178 026 136">
                      <span data-text="+91 8178 026 136">+91 8178 026 136</span>
                    </Link>
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

const SocialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/in.enigmadigital",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/enigmadigital/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_EnigmaDigital",
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing",
  },
  {
    name: "Behance",
    link: "https://www.behance.net/enigma-digital",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/"
  }
]

const MenuLinks = [
  {
    name: "About",
    link: "/who-we-are",
  },
  {
    name: "Expertise",
    link: "/services",
  },
  {
    name: "Works",
    link: "/our-portfolio",
  },
  {
    name: "Insights",
    link: "/blog",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Contact",
    link: "/get-in-touch",
  }
]
