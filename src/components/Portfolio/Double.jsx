"use client"

import styles from "./double.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Double = ({ projects }) => {
  
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const firstBody = useRef(null);
  const secondBody = useRef(null);
  let requestAnimationFrameId = null;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    const xPercent = clientX / window.innerWidth;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(() =>
        animate(xPercent)
      );
    }
  };

  const animate = (xPercent) => {
    // Interpolate the scale based on cursor position for images
    const firstImageScale = 1.3 - 0.6 * xPercent; // Scale from 1.3 to 0.7
    const secondImageScale = 0.7 + 0.6 * xPercent; // Scale from 0.7 to 1.3

    if (firstImage.current && secondImage.current && firstBody.current && secondBody.current) {
      // Apply scaling to images
      firstImage.current.style.transform = `scale(${firstImageScale})`;
      secondImage.current.style.transform = `scale(${secondImageScale})`;

      // Interpolate translation for the body content
      const firstBodyTranslateY = 100 - 190 * xPercent; // Y goes from 100% to -90%
      firstBody.current.style.transform = `translateX(0) translateY(${firstBodyTranslateY}%)`;

      const secondBodyTranslateX = 30 - 60 * xPercent; // X goes from 30% to -30%
      const secondBodyTranslateY = -90 + 190 * xPercent; // Y goes from -90% to 100%
      secondBody.current.style.transform = `translateX(${secondBodyTranslateX}%) translateY(${secondBodyTranslateY}%)`;
    }

    requestAnimationFrameId = null; // Reset the animation frame id for the next animation
  };

  return (
    <div
      onMouseMove={manageMouseMove}
      className={`${styles.double} fadeup`}
    >
      <div className={`${styles.imageContainer}`}>
        <Link href={`/${projects[0].link}`}>
          <div data-first ref={firstImage} className={`${styles.stretchyWrapper} ${styles.firstImage}`}>
            <Image
              data-cursor-size="100px"
              data-cursor-text="View Details"
              data-cursor-color="#5d5ad6"
              src={`/assets/portfolio/${projects[0].src}`}
              width={800}
              height={600}
              priority={false}
              quality={90}
              alt="project image"
            />
          </div>
          <div data-first-content ref={firstBody} className={`${styles.body} ${styles.firstBody}`}>
            <p className={styles.pname}>{projects[0].name}</p>
            <p className={styles.description}>{projects[0].description}</p>
            <p>{projects[0].year}</p>
          </div>
        </Link>
      </div>

      <div className={`${styles.imageContainer}`}>
        <Link href={`/${projects[1].link}`}>
          <div data-second ref={secondImage} className={`${styles.stretchyWrapper} ${styles.secondImage}`}>
            <Image
              data-cursor-size="100px"
              data-cursor-text="View Details"
              data-cursor-color="#5d5ad6"
              src={`/assets/portfolio/${projects[1].src}`}
              width={800}
              height={600}
              priority={false}
              quality={90}
              alt="project image"
            />
          </div>
          <div data-second-content ref={secondBody} className={`${styles.body} ${styles.secondBody}`}>
            <p className={styles.pname}>{projects[1].name}</p>
            <p className={styles.description}>{projects[1].description}</p>
            <p>{projects[1].year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Double;

