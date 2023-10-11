import styles from '@/styles/Double.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.config({
  nullTargetWarn: false,
});

export default function Index({projects, reversed}) {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#doubleContainer",
        start: "top 80%",
      },
    });

    const demoHeader = document.querySelectorAll("#doubleImage");

    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 3,
        ease: "expo.out",
        stagger: 0.3
      },
      0
    );
  });

    const firstImage = useRef(null);
    const secondImage = useRef(null);
    let requestAnimationFrameId = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;
    
    const manageMouseMove = (e) => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;
        
        if(!requestAnimationFrameId){
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        //Add easing to the animation
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent = currentXPercent + (xPercentDelta * speed)
        
        //Change width of images between 33.33% and 66.66% based on cursor
        const firstImagePercent = 66.33 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);
        firstImage.current.style.width = `${firstImagePercent}%`
        secondImage.current.style.width = `${secondImagePercent}%`
        
        if(Math.round(xPercent) == Math.round(currentXPercent)){
            window.cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
        else{
            window.requestAnimationFrame(animate)
        }
    }

    return(

      <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.double} id='doubleContainer'>

        <div ref={firstImage} className={styles.imageContainer} id='doubleImage'>
          <Link href={`/${projects[0].link}`}>
            <div className={styles.stretchyWrapper}>
              <Image 
                data-cursor-size='100px'
                data-cursor-text='View Project' 
                data-cursor-color='#5d5ad6'     
                src={`/assets/homeProject/${projects[0].src}`}
                fill={true}
                sizes="(max-width: 1200px) 100vw, 50vw"
                priority={false} 
                alt="project image"
              />
            </div>
            <div className={styles.body}
            id='double-image-anim'>
                <h2>{projects[0].name}</h2>
                <h3>{projects[0].description}</h3>
                <p>{projects[0].year}</p>
            </div>
            </Link>
        </div>
        
        <div ref={secondImage} className={styles.imageContainer} id='doubleImage'>
          <Link href={`/${projects[1].link}`}>        
            <div className={styles.stretchyWrapper}>
              <Image 
                data-cursor-size='100px'
                data-cursor-text='View Project' 
                data-cursor-color='#5d5ad6' 
                src={`/assets/homeProject/${projects[1].src}`}
                fill={true}
                sizes="(max-width: 1200px) 100vw, 50vw"
                priority={false} 
                alt="project image"
                id='double-image-anim'
              />
            </div>
            <div className={styles.body}
            id='double-image-anim'>
                <h2>{projects[1].name}</h2>
                <h3>{projects[1].description}</h3>
                <p>{projects[1].year}</p>
            </div>
          </Link>
        </div>

      </div>
    )
  }