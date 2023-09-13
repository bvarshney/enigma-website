import React, { useEffect, useRef } from "react";
import styles from "@/styles/modal.module.css";
import gsap from "gsap";

const Modal = ({ show, onClose, children }) => {
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
  }, [show]); // Include `show` in the dependencies array

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

export default Modal;

