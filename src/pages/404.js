import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cursor } from "../../cursor/index";
import styles from "@/styles/404.module.css";
import SmoothScroll from "@/components/utils/SmoothScroll";
import "react-creative-cursor/dist/styles.css";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <div>

      <NextSeo
              title="404 | Page Not Found"
              description="404 Page not found please go back to home. This is Enigma Digital."
              openGraph={{
                url: "https://weareenigma.com/404",
                title: "404 | Page Not Found",
                description:
                  "404 Page not found please go back to home. This is Enigma Digital.",
                  images: [
                  {
                    url: "https://weareenigma.com/assets/featured-images/index.png",
                    width: 1200,
                    height: 630,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                ],
                siteName: "Enigma Digital",
              }}
            />

      <SmoothScroll />

      <Cursor isGelly={true} />
      <div className={styles.container}>
        <div className={styles.gifBox}>
          <Image
            src="/assets/404/what.gif"
            alt="GIF"
            width={300}
            height={250}
          />
        </div>
        <div className={styles.box}>
          <h1 className={styles.fourZeroFour}>404</h1>
          <h2 className={styles.paraText}>
            The page you are looking for doesn't exist or has been moved. Please
            go back to the homepage.
          </h2>
          <Link
            href="/"
            className={`${styles.buttonHome} ${styles.buttoncalypso}`}
          >
            <span>Go back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
