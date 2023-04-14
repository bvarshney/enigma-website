import React, { useState, useRef } from "react";
import styles from "../styles/Hireus.module.css";
import { Cursor } from "../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Link from "next/link";

const MyComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({
    section1: null,
    section2: null,
    section3: null,
    section4: null,
  });

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setTimeout(() => {
      sectionRefs.current[section]?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100); // Add a short delay of 100ms
  };

  return (
    <div>
      <Cursor isGelly={true} />
      <div className={styles.buttonSection}>
        <div>
          <div className={styles.headings}>
            <h4>Let's Start</h4>
            <h1>How can we help you?</h1>
          </div>

          <Link href="/">
            <img
              src="https://buzzworthystudio.com/img/form-close.svg"
              alt="close"
              className={styles.closeImg}
              data-cursor-text="Close"
              data-cursor-size="80px"
              data-cursor-color="#000"
            />
          </Link>
        </div>

        <div className={styles.buttonsBoxes}>
          <div className={styles.buttonsBox}>
            <button
              onClick={() => handleButtonClick("section1")}
              className={
                activeSection === "section1" ? styles.activeButton : ""
              }
            >
              <img
                src="https://buzzworthystudio.com/img/form/icon-website.svg"
                alt="image"
              />
            </button>
            <h1>Website</h1>
          </div>

          <div className={styles.buttonsBox}>
            <button
              onClick={() => handleButtonClick("section2")}
              className={
                activeSection === "section2" ? styles.activeButton : ""
              }
            >
              <img
                src="https://buzzworthystudio.com/img/form/icon-ecommerce.svg"
                alt="image"
              />
            </button>
            <h1>Marketing</h1>
          </div>

          <div className={styles.buttonsBox}>
            <button
              onClick={() => handleButtonClick("section3")}
              className={
                activeSection === "section3" ? styles.activeButton : ""
              }
            >
              <img
                src="https://buzzworthystudio.com/img/form/icon-brand.svg"
                alt="image"
              />
            </button>
            <h1>Brand</h1>
          </div>

          <div className={styles.buttonsBox}>
            <button
              onClick={() => handleButtonClick("section4")}
              className={
                activeSection === "section4" ? styles.activeButton : ""
              }
            >
              <img
                src="https://buzzworthystudio.com/img/form/icon-chat.svg"
                alt="image"
              />
            </button>
            <h1>Just Chat :)</h1>
          </div>
        </div>
      </div>
      <section
        data-form="section1"
        className={`${styles.section} ${
          activeSection === "section1" ? "" : styles.hidden
        }`}
        ref={(ref) => (sectionRefs.current.section1 = ref)}
      >
        <h1>Section 1</h1>
        <p>This is section 1.</p>
      </section>
      <section
        data-form="section2"
        className={`${styles.section} ${
          activeSection === "section2" ? "" : styles.hidden
        }`}
        ref={(ref) => (sectionRefs.current.section2 = ref)}
      >
        <h1>Section 2</h1>
        <p>This is section 2.</p>
      </section>
      <section
        data-form="section3"
        className={`${styles.section} ${
          activeSection === "section3" ? "" : styles.hidden
        }`}
        ref={(ref) => (sectionRefs.current.section3 = ref)}
      >
        <h1>Section 3</h1>
        <p>This is section 3.</p>
      </section>
      <section
        data-form="section4"
        className={`${styles.section} ${
          activeSection === "section4" ? "" : styles.hidden
        }`}
        ref={(ref) => (sectionRefs.current.section4 = ref)}
      >
        <h1>Section 4</h1>
        <p>This is section 4.</p>
      </section>
    </div>
  );
};

export default MyComponent;
