import React, { useEffect } from "react";
import styles from "@/styles/designLanding.module.css";
import Image from "next/image";
import gsap from "gsap";
import SplitType from "split-type";

export default function Membership() {

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
            <div className={styles.membership}>
                <div className={styles.memberContent}>
                    <div className={styles.memberContentBox}>
                        <h2 id="fadeIn" className={styles.heading1}>
                            Membership <br/>
                            <span className={styles.reinventTextGradient}>
                                benefits
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
                    <Image
                        id="fadeIn"
                        height={1000}
                        width={1500} 
                        className={styles.memberDeskImg}
                        alt="laptop image"
                        src="/assets/landing-page/design/member.webp"
                    />
                    <Image
                        id="fadeIn"
                        width={500}
                        height={500}
                        className={styles.memberMobImg}
                        loading="lazy"
                        alt="benefit image"
                        src="/assets/landing-page/design/member-benefit.webp"
                    />
                    <Image 
                        id="fadeIn"
                        width={500}
                        height={500}
                        className={styles.darkMemberMobImg}
                        loading="lazy"
                        alt="benefit image"
                        src="/assets/landing-page/design/dark-member-benefit.png"
                    />
                </div>
            </div>
        </>
    );
}