import React, { useEffect, useRef } from "react";
import styles from "@/styles/header.module.css";
import gsap from "gsap";

const Showreel = ({ show, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      const tl = gsap.timeline();
      tl.fromTo(
        modalRef.current,
        {
          opacity: 0,
          translateY: -100,
        },
        {
          duration: 1,
          translateY: 0,
          opacity: 1, 
        }
      );
      return () => tl.kill();
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <button onClick={onClose} className={`${styles.btnClose}`} id="showreel">
      <div className={styles.modalWrapper}>
        <div className={styles.modal} ref={modalRef}>
          {children}
        </div>
      </div>
    </button>
  );
};

export default Showreel;

