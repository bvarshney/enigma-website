import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";

export default function Hero() {

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

// Hero Section Animation
useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#service-anim",
      {
        y: 100,
        opacity: 0,
      },
      {
        delay: 3.2,
        duration: 1.3,
        y: 0,
        opacity: 1,
        stagger: 0.2,
      }
    ).fromTo(
        ".bottom-anim",
        {
            y: 100,
            opacity: 0,
        },
        {
            delay: -1,
            duration: 1.3,
            y: 0,
            opacity: 1,
            stagger: 0.2,
        }
        ).fromTo(
            "#img-anim",
            {
                y: 100,
                opacity: 0,
            },
            {
                delay: -3,
                duration: 1.3,
                y: 0,
                opacity: 1,
                stagger: 0.2,
            }
            );
    return () => tl.kill();
  }, []);

    // Text Reveal Animation For Each
    useEffect(() => {
        const totalSection = document.querySelectorAll("#hero");
        totalSection.forEach(function (elem, index) {
          const text = new SplitType(elem.querySelector("#proj-para-anim"));
          let textwords = text.words;
          gsap.from(textwords, {
            scrollTrigger: {
              trigger: elem,
              start: "top 80%",
              markers: false,
            },
            duration: 1,
            opacity: 0,
            yPercent: 100,
            ease: "Power3.out",
            stagger: 0.05,
            delay: 4
          });
        });
      }, []);

    return(
        <>
            <div className={styles.hero} id="hero">
                <div id="img-anim" className={styles.backgroundImg}>
                    <Image
                        priority={true}
                        height={1000}
                        width={1000}
                        src="/assets/landing-page/design/hero-img.webp"
                        alt="hero image" />
                </div>

                <div className={styles.darkBackgroundImg}>
                    <Image
                        height={1000}
                        width={1000}
                        src="/assets/landing-page/design/dark-hero-bg.webp"
                        alt="hero image" />
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.heroTop}>
                        <div className={styles.heroTopEle}>
                            <h1>
                                <span id="service-anim">We</span> 
                                <span id="service-anim"> Provide</span>
                                <span id="service-anim"> Design</span>
                                <span id="service-anim"> Subscription</span><span id="service-anim" className={styles.span}> /</span>
                                <div id="service-anim" className={styles.headContainer}>
                                    <div className={styles.headItems} id="headAnim">
                                        <span className={styles.headItem}>
                                            monthly
                                        </span>
                                        <span className={styles.headItem}>
                                            quarterly
                                        </span>
                                        <span className={styles.headItem}>
                                            yearly
                                        </span>
                                    </div>
                                </div>
                            </h1>
                        </div>
                    </div>

                    <div className={styles.heroBottom}>
                        <p id="proj-para-anim">
                            Design subscriptions to scale your business.
                        </p>
                        <div className="bottom-anim">
                            <button aria-label="Plans Cta" className={styles.btnCta}>
                                <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                    <span className={styles.btnCtaRipple}>
                                        <span></span>
                                    </span>
                                    <span className={styles.btnCtaTitle}>
                                        <span data-text='See Plans'>See Plans</span>
                                    </span>
                                </a>
                            </button>
                        </div>
                        <p className="bottom-anim">
                            Design you’ll <span>❤️</span>, gauranteed
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}