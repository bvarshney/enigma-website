import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import  ScrollToPlugin  from 'gsap/dist/ScrollToPlugin';
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

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
    
          useEffect(() => {
            const elementsToFadeIn = document.querySelectorAll("#fadeIn");
            elementsToFadeIn.forEach(function (elem, index) {
              gsap.fromTo(
                elem,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                  scrollTrigger: {
                    trigger: elem,
                    start: "top 90%",
                    markers: false,
                    stagger: 0.2,
                  },
                  duration: 1.5,
                  y: 0,
                  opacity: 1,
                  ease: "Power3.out",
                }
              );
            });
          }, []);

          useEffect(() => {            
            const footerList = document.querySelectorAll("#footerFadeIn>li")
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer-bottom-landing-desgin",
                    start: "top 90%",
                    markers: false,
                }
            });
            tl.fromTo("#footerImg" ,{
                y: 100,
                opacity: 0,
            },{
                y: 0,
                opacity: 1,
                duration: 1,
            }).fromTo(footerList ,{
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                delay: -0.8,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
            });
            return ()=>tl.kill();
          }, []);

    return(
        <>
            <div className={styles.footer}>
                <div className={styles.footerTop}>
                    <h2 id="fadeIn" className={styles.heading1}>
                        Send your request today, <br />
                        get
                        <span className={styles.reinventTextGradient}> your designs tomorrow!
                        </span> 
                    </h2>   
                    <div className={styles.footerCta}>
                        <button id="fadeIn" className={styles.btnCta}>
                            <span className={styles.btnCtaRipple}>
                                <span></span>
                            </span>
                            <span className={styles.btnCtaTitle}>
                                <span data-text='Get Started'>Get Started</span>
                            </span>
                        </button>
                        <button id="fadeIn" className={styles.btnCta}>
                            <span className={styles.btnCtaRipple}>
                                <span></span>
                            </span>
                            <span className={styles.btnCtaTitle}>
                                <span data-text='Book a Call'>Book a Call</span>
                            </span>
                        </button>
                    </div>
                    <Image 
                        id="fadeIn"
                        height={1000}
                        width={1000} 
                        loading="lazy"
                        src="/assets/landing-page/design/bg-gradient.webp" 
                        alt="bg-gradient"
                    />
                </div>
                <div className={` ${styles.footerBottom} footer-bottom-landing-desgin`}>
                    <div data-cursor-size="100px" data-cursor-exclusion id="footerImg" className={styles.footerLeft}>
                        <Image 
                            height={220}
                            width={220}
                            src="/assets/landing-page/design/enigma-logo.svg" 
                            alt="enigma logo" />
                        <p>We Make Magic<span className={styles.tradeMark}>ᵀᴹ</span></p>
                    </div>
                    <div className={styles.footerRight}>
                        <ul id="footerFadeIn">
                            <li className={styles.footerNav}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#work" onClick={(e) => handleSmoothScroll(e, 'work')}>
                                    <span data-text="Latest Projects">
                                        Latest Projects
                                    </span>
                                </a>
                            </li>
                            <li className={styles.footerNav}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>
                                    <span data-text="Pricing">
                                        Pricing
                                    </span>
                                </a>
                            </li>
                            <li className={styles.footerNav}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#">
                                    <span data-text="Contact">
                                        Contact
                                    </span>
                                </a>
                            </li>
                            <li className={styles.footerNav}>
                                <a data-cursor-size="70px" data-cursor-exclusion href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>
                                    <span data-text="FAQs">
                                        FAQs
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};