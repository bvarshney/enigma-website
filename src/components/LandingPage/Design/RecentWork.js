import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import SliderComponent from "./RecentWorkCarousel";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);  

export default function RecentWork() {

    useEffect(() => {
        const textElements = document.querySelectorAll("#designP");
        textElements.forEach(function (elem, index) {
          const text = new SplitType(elem);
          let textwords = text.words;
          gsap.from(textwords, {
            scrollTrigger: {
              trigger: textwords,
              start: "top 80%",
              markers: false,
            },
            duration: 1,
            opacity: 0,
            yPercent: 100,
            ease: "Power3.out",
            stagger: 0.05,
          });
        });
      }, []);

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
                start: "top 80%",
                markers: false,
              },
              duration: 1.5,
              y: 0,
              opacity: 1,
              ease: "Power3.out",
            }
          );
        });
      }, []);

    return(
        <>
            <div className={styles.work}>
                <div className={styles.workTopBox}>
                    <h2 id="fadeIn" className={styles.heading1}>
                        Recent<span className={styles.reinventTextGradient}> Work
                        </span> 
                    </h2>
                    <p id="designP" className={styles.para1}>
                        Design as you know it is out the door. Design as you want it just arrived.
                    </p>
                    <div id="fadeIn" className={styles.memberButton}>
                        <button className={styles.btnCta}>
                            <span className={styles.btnCtaRipple}>
                                <span></span>
                            </span>
                            <span className={styles.btnCtaTitle}>
                                <span data-text='See Plans'>See Plans</span>
                            </span>
                        </button>
                    </div>
                    </div>
                    <div id="fadeIn" className={styles.workTesti}>
                        <div className={styles.workWhiteSpace}>
                        </div>
                            <SliderComponent />
                        <div className={styles.workWhiteSpace1}>
                        </div>
                    </div>
                    
                </div>
            </>
        );
    };