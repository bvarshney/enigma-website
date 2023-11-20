import styles from './styles.module.css'
import { projects } from './ProjectData';
import Double from './Double';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SplitType from "split-type";
import Button from '../Button';

gsap.registerPlugin(ScrollTrigger);   

export default function HomeProject() {

  useEffect(() => {
    const totalSection = document.querySelectorAll("#c-works");
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
      });
    });
  }, []);


// Text Reveal Animation Top to Center
useEffect(() => {

  const lineAnim = document.querySelectorAll("#line-anim")

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#c-works",
      start: "top 80%",
    },
  });

  // Header
  tl.fromTo( lineAnim,
    1.2,
    {
      y: '200px',
      ease: "Power3.inOut",
      skewY: -20,
    },
    {
      y: 0,
      skewY: 0,
      stagger: 0.5,
      duration: 1
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
      >
      <div className={`${styles.headContainer}`}>
        <p className={`${styles.select}`} id='line-anim'>
              Selected
          </p>
      </div>
        <p className={styles.paraProject} id="proj-para-anim">
          <span>
          Our showcase of a spectrum of Innovative Collaborations, 
          Redefined Digital Experiences, and Brand Transformations.
          </span>
        </p>
      </div>
      <div className={`${styles.headContainer}`}>
        <p className='color-primary' id='line-anim'>
            Projects
        </p>
      </div>
    </div>
      
      <div className={styles.gallery} id='imgContainer'>
        <Double projects={[projects[0], projects[1]]} id="projectImg" />
        <Double projects={[projects[2], projects[3]]} reversed={true} id="projectImg" />
        <Double projects={[projects[4], projects[5]]} id="projectImg" />
      </div>

      <Button />
      
    </div>
  )
}
  