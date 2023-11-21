import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import SplitType from 'split-type';
import styles from '@/styles/serviceDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {

// Text Reveal Animation For Approach and Process Section
useEffect(() => {
  const totalSection = document.querySelectorAll(
    "#section-process"
  );
  totalSection.forEach(function (elem, index) {
    const text = new SplitType(elem.querySelectorAll("#split-lines"));
    let textwords = text.lines;
    gsap.from(textwords, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        end: "bottom 80%",
        markers: false,
        scrub: true,
      },
      duration: .7,
      x: 150,
      opacity: 0,
      ease: "Power3.out",
      stagger: 0.1,
    });
  });
}, []);

    return(
      <>
        <div className={styles.splitLinesMain} id='section-process'>
            <p className={styles.splitAnimation} id='split-lines'>
                By taking the <span className='color-primary'>L.E.A.P. </span>with Enigma Digital, you're not just getting a service; you're partnering with a team that's committed to leaping beyond the ordinary and achieving extraordinary results.
            </p>
        </div>
      </>
    );
}