import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/Hireus.module.css";
import { Cursor } from "../../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import Link from "next/link";
import Head from "next/head";
import gsap from "gsap";
import { NextSeo } from "next-seo";

const MyComponent = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [weeks, setWeeks] = useState(8);
  const [budget, setBudget] = useState({ min: 10, max: 20 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    websiteUrl: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
    if (!formData.companyName) {
      errors.companyName = "Company Name is required";
    }
    if (!formData.websiteUrl) {
      errors.websiteUrl = "Website Url is required";
    }

    setFormErrors(errors);

    // Submit the form if no errors
    if (Object.keys(errors).length === 0) {
      // Submit the form data here or perform further actions
      console.log("Form data:", formData);
    }
  };

  const handleSliderChangeBudget = (event) => {
    const value = parseInt(event.target.value);
    const minBudget = value * 10;
    const maxBudget = minBudget * 2;
    setBudget({ min: minBudget, max: maxBudget });
  };

  const handleSliderChangeWeeks = (event) => {
    const value = parseInt(event.target.value);
    setWeeks(value);
  };

  const handleWebsiteClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

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

  const handleButtonClickTwo = () => {
    const sectionRef = document.getElementById("budget"); // Replace "sectionId" with the actual ID of the section you want to scroll to
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClickThree = () => {
    const sectionRef = document.getElementById("marketing"); // Replace "sectionId" with the actual ID of the section you want to scroll to
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonClickFour = () => {
    const sectionRef = document.getElementById("brand"); // Replace "sectionId" with the actual ID of the section you want to scroll to
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonBudgetTimeline = () => {
    const sectionRef = document.getElementById("budget-timeline"); // Replace "sectionId" with the actual ID of the section you want to scroll to
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  const handleButtonFinishStrong = () => {
    const sectionRef = document.getElementById("finish-strong"); // Replace "sectionId" with the actual ID of the section you want to scroll to
    sectionRef.scrollIntoView({ behavior: "smooth" });
  };

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#anim",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Buttons Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#btn",
      {
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3,
        duration: 1.3,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Close Image Animation
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(
  //     "#close",
  //     {
  //       opacity: 0,
  //       translateX: 100,
  //     },
  //     {
  //       delay: 3,
  //       duration: 1.5,
  //       opacity: 1,
  //       translateX: 0,
  //     }
  //   );
  //   return () => tl.kill();
  // }, []);

  // Page Transitions
  useEffect(() => {
    const loaderBars = document.querySelectorAll("#loaderbars");
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {

      tl.from(".loader-wrap-heading h1", {
        delay: 0.5,
        y: 200,
        skewY: 10,
        duration: 1,
      }).to(".loader-wrap-heading h1", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 1,
      }).to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: -0.5,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>

            <NextSeo
              title=""
              description="Generated by create next app"
              canonical="https://www.weareenigma.com/"
              openGraph={{
                url: "https://www.weareenigma.com/",
                title: "",
                description:
                  "Generated by create next app",
                images: [
                  {
                    url: "",
                    width: 400,
                    height: 600,
                    alt: "Enigma Image",
                    type: "image/png",
                  },
                  { url: "" },
                ],
                siteName: "https://www.weareenigma.com/",
              }}
            />

      <Head>
        <title>Hire us | Tell Us About the Project</title>
        <meta name="description" content="Hire us." />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link rel="icon" href="/fav-icon.png" />
      </Head>



      <div className="loader-wrap" id="loader">
      <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
          </div>

        <div className="loader-wrap-heading">
          <span>
            <h1>Hire Us!</h1>
          </span>
        </div>
      </div>


      <Cursor isGelly={true} />
      <div className={styles.buttonSection}>
        <div>
          <div className={styles.headings}>
            <h4 id="anim">Let's Start</h4>
            <h1 id="anim">
              How can we <span>help</span> you?
            </h1>
          </div>

          <Link href="/">
            <img
              id="close"
              src="https://buzzworthystudio.com/img/form-close.svg"
              alt="close"
              className={styles.closeImg}
            />
          </Link>
        </div>

        <div className={styles.buttonsBoxes}>
          <div className={styles.buttonsBox} id="btn">
            <button
              onClick={() => handleButtonClick("section1")}
              className={
                activeSection === "section1" ? styles.activeButton : ""
              }
            >
              <img src="/assets/hireus/icon-website.svg" alt="image" />
            </button>
            <h1>Website</h1>
          </div>

          <div className={styles.buttonsBox} id="btn">
            <button
              onClick={() => handleButtonClick("section2")}
              className={
                activeSection === "section2" ? styles.activeButton : ""
              }
            >
              <img src="/assets/hireus/icon-ecommerce.svg" alt="image" />
            </button>
            <h1>Marketing</h1>
          </div>

          <div className={styles.buttonsBox} id="btn">
            <button
              onClick={() => handleButtonClick("section3")}
              className={
                activeSection === "section3" ? styles.activeButton : ""
              }
            >
              <img src="/assets/hireus/icon-brand.svg" alt="image" />
            </button>
            <h1>Brand</h1>
          </div>

          <div className={styles.buttonsBox} id="btn">
            <button
              onClick={() => handleButtonClick("section4")}
              className={
                activeSection === "section4" ? styles.activeButton : ""
              }
            >
              <img src="/assets/hireus/icon-chat.svg" alt="image" />
            </button>
            <h1>Just Chat :)</h1>
          </div>
        </div>
      </div>
      <div className={styles.sectionMainType}>
        {/* ==================== Section 1 ================================
        =================================================================== */}
        <section
          data-form="section1"
          className={`${styles.section} ${
            activeSection === "section1" ? "" : styles.hidden
          }`}
          ref={(ref) => (sectionRefs.current.section1 = ref)}
        >
          <div className={styles.ContainerFirst}>
            <div className={styles.firstBoxSection}>
              <div className={styles.headingFirst}>
                <h2>
                  01 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  What do <br /> you need?
                </h1>
              </div>

              <div className={styles.optionsSecond}>
                <div className={styles.optionsBox}>
                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickTwo}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 1 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(1)}
                    >
                      <img
                        src="/assets/hireus/icon-web-design.svg"
                        alt="image"
                      />
                    </button>
                    <h1>Design</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickTwo}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 2 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(2)}
                    >
                      <img src="/assets/hireus/icon-web-code.svg" alt="image" />
                    </button>
                    <h1>Code</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickTwo}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 3 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(3)}
                    >
                      <img src="/assets/hireus/icon-web-both.svg" alt="image" />
                    </button>
                    <h1>Both</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.budgetTimeline} id="budget">
              <div className={styles.headingFirst}>
                <h2>
                  02 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  budget & <br /> timeline
                </h1>
                <p>
                  Time is the most valuable non-renewable resource we have. This
                  dictates how much time we can put forth to make dreams
                  reality.
                </p>
              </div>

              <div className={styles.sliderSectionBoxes}>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={budget.min / 10 - 1}
                  onChange={handleSliderChangeBudget}
                  className={`${styles.budgetSlider} ${styles.slider}`}
                />
                <h2>APPROXIMATE BUDGET</h2>
                <h1>
                  $ {budget.min}k - {budget.max}k
                </h1>

                <input
                  type="range"
                  min="8"
                  max="50"
                  value={weeks}
                  onChange={handleSliderChangeWeeks}
                  className={`${styles.timelineSlider} ${styles.slider}`}
                />
                <h2>ESTIMATED TIMELINE</h2>
                <h1>{weeks} Weeks</h1>

                <button
                  className={styles.nextStepBtn}
                  onClick={handleButtonBudgetTimeline}
                >
                  Next Step
                </button>
              </div>
            </div>

            <div className={styles.formSection} id="budget-timeline">
              <div className={styles.headingFirst}>
                <h2>
                  03 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  project <br /> details
                </h1>
              </div>

              <div className={styles.formBox}>
                <form onSubmit={handleSubmit} className={styles.formMain}>
                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <p className={styles.err}>{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <p className={styles.err}>{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      {formErrors.phoneNumber && (
                        <p className={styles.err}>{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                      {formErrors.companyName && (
                        <p className={styles.err}>{formErrors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.websiteUrlDiv}>
                    <input
                      type="text"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className={styles.websiteUrl}
                      placeholder="Current Website url"
                    />
                  </div>

                  <button
                    className={styles.nextStepBtn}
                    onClick={handleButtonFinishStrong}
                  >
                    Next Step
                  </button>

                  <div className={styles.messageBox} id="finish-strong">
                    <div className={styles.headingFirst}>
                      <h2>
                        04 —<span className={styles.colorGrey}> 04</span>
                      </h2>
                      <h1>finish strong!</h1>
                      <p>
                        If there are any pertinent details that you'd like to
                        share, please drop a message in the box below.
                      </p>
                    </div>

                    <div className={styles.messageTextArea}>
                      <textarea placeholder="Don't be shy..."></textarea>
                    </div>
                  </div>
                  <div className={styles.submitBtnBox}>
                    <div className={styles.submitbtnWrap}>
                      <Link href="/message-sent">
                        <button type="submit" className={styles.submitButton}>
                          Send Over
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*  ======================= Section 2 ===============================
        ===================================================================== */}
        <section
          data-form="section2"
          className={`${styles.section} ${
            activeSection === "section2" ? "" : styles.hidden
          }`}
          ref={(ref) => (sectionRefs.current.section2 = ref)}
        >
          <div className={styles.ContainerFirst}>
            <div className={styles.firstBoxSection}>
              <div className={styles.headingFirst}>
                <h2>
                  01 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  What do <br /> you need?
                </h1>
              </div>

              <div className={styles.optionsSecond}>
                <div className={styles.optionsBox}>
                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickThree}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 4 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(4)}
                    >
                      <img
                        src="/assets/hireus/icon-web-design.svg"
                        alt="image"
                      />
                    </button>
                    <h1>SEO</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickThree}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 5 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(5)}
                    >
                      <img src="/assets/hireus/icon-web-code.svg" alt="image" />
                    </button>
                    <h1>PPC Campaign</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickThree}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 6 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(6)}
                    >
                      <img src="/assets/hireus/icon-web-both.svg" alt="image" />
                    </button>
                    <h1>Both</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.budgetTimeline} id="marketing">
              <div className={styles.headingFirst}>
                <h2>
                  02 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  budget & <br /> timeline
                </h1>
                <p>
                  Time is the most valuable non-renewable resource we have. This
                  dictates how much time we can put forth to make dreams
                  reality.
                </p>
              </div>

              <div className={styles.sliderSectionBoxes}>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={budget.min / 10 - 1}
                  onChange={handleSliderChangeBudget}
                  className={`${styles.budgetSlider} ${styles.slider}`}
                />
                <h2>APPROXIMATE BUDGET</h2>
                <h1>
                  $ {budget.min}k - {budget.max}k
                </h1>

                <input
                  type="range"
                  min="8"
                  max="50"
                  value={weeks}
                  onChange={handleSliderChangeWeeks}
                  className={`${styles.timelineSlider} ${styles.slider}`}
                />
                <h2>ESTIMATED TIMELINE</h2>
                <h1>{weeks} Weeks</h1>
              </div>
            </div>

            <div className={styles.formSection}>
              <div className={styles.headingFirst}>
                <h2>
                  03 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  project <br /> details
                </h1>
              </div>

              <div className={styles.formBox}>
                <form onSubmit={handleSubmit} className={styles.formMain}>
                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <p className={styles.err}>{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <p className={styles.err}>{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      {formErrors.phoneNumber && (
                        <p className={styles.err}>{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                      {formErrors.companyName && (
                        <p className={styles.err}>{formErrors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.websiteUrlDiv}>
                    <input
                      type="text"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className={styles.websiteUrl}
                      placeholder="Current Website url"
                    />
                  </div>

                  <div className={styles.messageBox}>
                    <div className={styles.headingFirst}>
                      <h2>
                        04 —<span className={styles.colorGrey}> 04</span>
                      </h2>
                      <h1>finish strong!</h1>
                      <p>
                        If there are any pertinent details that you'd like to
                        share, please drop a message in the box below.
                      </p>
                    </div>

                    <div className={styles.messageTextArea}>
                      <textarea placeholder="Don't be shy..."></textarea>
                    </div>
                  </div>
                  <div className={styles.submitBtnBox}>
                    <div className={styles.submitbtnWrap}>
                      <button type="submit" className={styles.submitButton}>
                        Send Over
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*  ======================= Section 3 ===============================
        ===================================================================== */}
        <section
          data-form="section3"
          className={`${styles.section} ${
            activeSection === "section3" ? "" : styles.hidden
          }`}
          ref={(ref) => (sectionRefs.current.section3 = ref)}
        >
          <div className={styles.ContainerFirst}>
            <div className={styles.firstBoxSection}>
              <div className={styles.headingFirst}>
                <h2>
                  01 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  What do <br /> you need?
                </h1>
              </div>

              <div className={styles.optionsSecond}>
                <div className={styles.optionsBox}>
                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickFour}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 7 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(7)}
                    >
                      <img
                        src="/assets/hireus/icon-web-design.svg"
                        alt="image"
                      />
                    </button>
                    <h1>Logo Design</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickFour}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 8 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(8)}
                    >
                      <img src="/assets/hireus/icon-web-code.svg" alt="image" />
                    </button>
                    <h1>Brand Materials</h1>
                  </div>

                  <div
                    className={styles.buttonSubBox}
                    onClick={handleButtonClickFour}
                  >
                    <button
                      className={`${styles.button} ${
                        activeButton === 9 ? styles.active : ""
                      }`}
                      onClick={() => handleWebsiteClick(9)}
                    >
                      <img src="/assets/hireus/icon-web-both.svg" alt="image" />
                    </button>
                    <h1>Both</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.budgetTimeline} id="brand">
              <div className={styles.headingFirst}>
                <h2>
                  02 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  budget & <br /> timeline
                </h1>
                <p>
                  Time is the most valuable non-renewable resource we have. This
                  dictates how much time we can put forth to make dreams
                  reality.
                </p>
              </div>

              <div className={styles.sliderSectionBoxes}>
                <input
                  type="range"
                  min="0"
                  max="12"
                  value={budget.min / 10 - 1}
                  onChange={handleSliderChangeBudget}
                  className={`${styles.budgetSlider} ${styles.slider}`}
                />
                <h2>APPROXIMATE BUDGET</h2>
                <h1>
                  $ {budget.min}k - {budget.max}k
                </h1>

                <input
                  type="range"
                  min="8"
                  max="50"
                  value={weeks}
                  onChange={handleSliderChangeWeeks}
                  className={`${styles.timelineSlider} ${styles.slider}`}
                />
                <h2>ESTIMATED TIMELINE</h2>
                <h1>{weeks} Weeks</h1>
              </div>
            </div>

            <div className={styles.formSection}>
              <div className={styles.headingFirst}>
                <h2>
                  03 —<span className={styles.colorGrey}> 04</span>
                </h2>
                <h1>
                  project <br /> details
                </h1>
              </div>

              <div className={styles.formBox}>
                <form onSubmit={handleSubmit} className={styles.formMain}>
                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name *"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {formErrors.name && (
                        <p className={styles.err}>{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email *"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && (
                        <p className={styles.err}>{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.formSubBox}>
                    <div>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Phone"
                      />
                      {formErrors.phoneNumber && (
                        <p className={styles.err}>{formErrors.phoneNumber}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                      />
                      {formErrors.companyName && (
                        <p className={styles.err}>{formErrors.companyName}</p>
                      )}
                    </div>
                  </div>

                  <div className={styles.websiteUrlDiv}>
                    <input
                      type="text"
                      id="websiteUrl"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className={styles.websiteUrl}
                      placeholder="Current Website url"
                    />
                  </div>

                  <div className={styles.messageBox}>
                    <div className={styles.headingFirst}>
                      <h2>
                        04 —<span className={styles.colorGrey}> 04</span>
                      </h2>
                      <h1>finish strong!</h1>
                      <p>
                        If there are any pertinent details that you'd like to
                        share, please drop a message in the box below.
                      </p>
                    </div>

                    <div className={styles.messageTextArea}>
                      <textarea placeholder="Don't be shy..."></textarea>
                    </div>
                  </div>
                  <div className={styles.submitBtnBox}>
                    <div className={styles.submitbtnWrap}>
                      <button type="submit" className={styles.submitButton}>
                        Send Over
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/*  ======================= Section 4 ===============================
        ===================================================================== */}
        <section
          data-form="section4"
          className={`${styles.section} ${
            activeSection === "section4" ? "" : styles.hidden
          }`}
          ref={(ref) => (sectionRefs.current.section4 = ref)}
        >
          <div className={styles.justChatSection}>
            <div className={styles.ContainerFir}>
              <div className={styles.firstBoxSecti}>
                <div
                  className={`${styles.headingFirst} ${styles.justchatHeading}`}
                >
                  <h1>We're Listening</h1>
                </div>
              </div>
              <div className={styles.formSection}>
                <div className={styles.formBox}>
                  <form
                    onSubmit={handleSubmit}
                    className={`${styles.formMain} ${styles.justchatform}`}
                  >
                    <div className={styles.justchatformInput}>
                      <div className={styles.formSubBox}>
                        <div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name *"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {formErrors.name && (
                            <p className={styles.err}>{formErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <p className={styles.err}>{formErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className={styles.messageB}>
                        <div className={styles.messageTextArea}>
                          <textarea placeholder="What do you have on your mind?"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className={styles.submitBtnBox}>
                      <div className={styles.submitbtnWrap}>
                        <button type="submit" className={styles.submitButton}>
                          Send Over
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyComponent;
