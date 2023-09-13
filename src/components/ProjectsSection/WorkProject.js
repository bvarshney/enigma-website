'use client'

import styles from '@/styles/HomeProject.module.css'
import { projects } from './ProjectData';
import Double from './Double';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);   

export default function WorkProject() {

  const selected = useRef(null);
  const projecth1 = useRef(null);
  const workPara = useRef(null);
  const mainSection = useRef(null);

  useEffect(() => {
    const totalSection = document.querySelectorAll("#c-works");
    totalSection.forEach(function (elem, index) {
      const text = new SplitType(elem.querySelector("#proj-para-anim"));
      let textwords = text.words;
      gsap.from(textwords, {
        scrollTrigger: {
          trigger: elem,
          start: "top 85%",
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

  // Text Reveal Animation Top to Center
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#c-works",
        start: "top 85%",
      },
    });

    // Header
    tl.fromTo(
      "#line-anim #span",
      1.2,
      {
        y: 600,
        ease: "Power3.inOut",
        skewY: -20,
      },
      {
        y: 0,
        skewY: 0,
        stagger: 0.5,
      },
      "-0.6"
    );
    return () => tl.kill();
  }, []);


  return (
    
    <div className={styles.projectSectionMain} id="c-works">
        <div className={styles.projectHeading}>
          <div
            className={`${styles.projectFirstBox} ${styles.lineAnim}`}
            id="line-anim"
          >
            <h1 className={`${styles.select}`}>
              <span className={styles.span} id="span">
                Our Work
              </span>
            </h1>
            <p className={styles.paraProject} id="proj-para-anim">
              <span>
              Our showcase of a spectrum of Innovative Collaborations, 
              Redefined Digital Experiences, and Brand Transformations.
              </span>
            </p>
          </div>
          <div
            className={`${styles.projectHomeHeading} ${styles.lineAnim}`}
            id="line-anim"
          >
            <h1 className={styles.project} id="darkMode-project">
              <span className={styles.span} id="span">
                Showcase
              </span>
            </h1>
          </div>
        </div>
      
      <div className={styles.gallery}>
        <Double projects={[projects[0], projects[1]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[4], projects[5]]}/>
        <Double projects={[projects[2], projects[3]]} reversed={true}/>
        <Double projects={[projects[0], projects[1]]}/>
      </div>
    </div>
  )
}
  