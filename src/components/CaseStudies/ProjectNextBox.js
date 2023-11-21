import Link from "next/link";
import React from "react";
import styles from "@/styles/next.module.css";

export default function ProjectNextBox({ text, link }) {
  return (
    <>
      <div className={styles.nextUpContainer}>
        <div className={styles.nextSubContainer}>
          <div className={styles.subHeading}>
            <p>next up</p>
          </div>
          <div className={styles.mainHeading}>
            <Link href={link}>
              <h5>{text}</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
