import Link from "next/link";
import React from "react";
import styles from "@/styles/next.module.css";

export default function NextBox() {
  return (
    <>
      <div className={styles.nextContainer}>
        <div className={styles.nextSubContainer}>
          <div className={styles.subHeading}>
            <h2>next up</h2>
          </div>
          <div
            className={styles.mainHeading}
            data-cursor-background-image="/assets/gif/10.gif"
            data-cursor-color="#000"
            data-cursor-size="400px"
          >
            <Link href="/who-we-are">
              <h1>About us</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}