import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Menu from "./Hamburger";
import { easeInOut, motion } from "framer-motion";
import Showreel from "../Home/Showreel";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(false);
  const [invertText, setInvertText] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("invertText") === "true"
      : false
  );

  const [imgSrc, setImgSrc] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("imgSrc") === "ture"
      : false
  );

  useEffect(() => {
    localStorage.setItem("invertText", invertText);

    localStorage.setItem("imgSrc", imgSrc);
    setImgSrc(invertText ? "/dark/moon.svg" : "/dark/sun.svg");

    const div = document.querySelector(".scroll-content");
    if (invertText) {
      div.classList.add("dark-mode");
    } else {
      div.classList.remove("dark-mode");
    }
  }, [invertText, imgSrc]);

  const selectImage = (src) => {
    setImgSrc(src);
  };

  function clickHandler() {
    setShow(true);
  }

  // Sound on Click
  const buttonRefDarkMode = useRef(null);

  useEffect(() => {
    const button = buttonRefDarkMode.current;
    button.addEventListener("click", handleClick);
    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = () => {
    const audio = new Audio("/assets/music/click.mp3");
    audio.play();
  };

  return (
    <header className="header-section">
      <motion.div
        className="header-logo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.5, transition: easeInOut }}
      >
        <Link href="/">
          <Image
            src="/assets/header-logo/enigma-en-logo.svg"
            width={80}
            height={80}
            alt="main-logo"
            className="main-logo svg-dark-mode"
            data-cursor-size="60px"
            data-cursor-exclusion
            id="main-logo"
          />
        </Link>
      </motion.div>

      <div className="right-section-header">
        <div className="showreel">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.5, transition: easeInOut }}
          >
            <button
              className="btn-primary"
              onClick={() => setShow(true)}
              data-cursor-magnetic
              data-cursor-exclusion
              data-cursor-size="60px"
            >
              Showreel'23
            </button>
          </motion.div>
          <div
            id="modal-video-wrapper"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              zIndex: "998",
            }}
            data-cursor-text="Close"
            data-cursor-size="100px"
            data-cursor-color="#000"
          >
            <Showreel
              show={show}
              onClose={() => setShow(false)}
              data-cursor-text="Close"
              data-cursor-color="#000"
              data-cursor-size="100px"
            >
              <video
                src="/assets/reels/showreel.mp4"
                autoPlay
                loop
                preload="auto"
              ></video>
            </Showreel>
          </div>
        </div>
        <button
          onClick={() => setInvertText(!invertText)}
          className="dark-mode-btn"
          ref={buttonRefDarkMode}
        >
          <Image src={imgSrc} alt="Inverted" width={31} height={31} />
        </button>
        <Menu />
      </div>
    </header>
  );
}
