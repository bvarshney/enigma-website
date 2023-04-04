import React, { useState } from "react";
import Image from "next/image";
import Menu from "./Hamburger";
import { easeInOut, motion } from "framer-motion";
import Showreel from "../Home/Showreel";
import Link from "next/link";

export default function Header() {
  const [show, setShow] = useState(false);

  function clickHandler() {
    setShow(true);
  }

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
            className="main-logo"
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
                src="https://weareenigma.com/showreel.mp4"
                autoPlay
                loop
                preload="auto"
              ></video>
            </Showreel>
          </div>
        </div>
        <Menu />
      </div>
    </header>
  );
}
