import React, { useEffect } from "react";
import styles from "../../../styles/modal.module.css";
import gsap from "gsap";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#showreel",
      {
        opacity: 0,
        translateY: -300,
      },
      {
        duration: 1.3,
        opacity: 1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  });

  return (
    <>
      <button onClick={onClose} className={`${styles.btnClose}`} id="showreel">
        <div className={styles.modalWrapper}>
          <div className={styles.modal}>{children}</div>
        </div>
      </button>
    </>
  );
};

export default Modal;
