import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../../../styles/Carousel.module.css";
import gsap from "gsap";

export default function carousel() {
  // const [isShown, setIsShown] = useState(false);
  const [textToggle, textToggleState] = useState(true);
  const [textToggleTwo, textToggleStateTwo] = useState(true);
  const [textToggleThree, textToggleStateThree] = useState(true);
  const [textToggleFour, textToggleStateFour] = useState(true);
  const [textToggleFive, textToggleStateFive] = useState(true);
  const [textToggleSix, textToggleStateSix] = useState(true);
  const [textToggleSeven, textToggleStateSeven] = useState(true);
  const [textToggleEight, textToggleStateEight] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hide-div-caro p",
      {
        translateY: 100,
        opacity: 0,
      },
      {
        duration: 1,
        translateY: 0,
        opacity: 1,
      }
    );
  });

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-caro",
      {
        rotate: "135deg",
        opacity: 0,
      },
      {
        duration: 1,
        translateY: 0,
        opacity: 1,
      }
    );
    return () => tl.kill();
  });

  // Text Reveal Animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#caro-slider-logo",
        start: "-400 top",
      },
    });

    const demoHeader = document.querySelectorAll("#slider-anim");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        x: 250,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
      }
    );
  }, []);

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      id="caro-slider-logo"
    >
      <ButtonBack>
        <span className="back-button-svg">
          <svg
            id="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.56 9.56"
          >
            <line
              id="line1"
              x1="0.27"
              y1="9.29"
              x2="9.18"
              y2="0.38"
              fill="#4e4e4e"
              stroke="#4e4e4e"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <line
              id="line2"
              x1="0.27"
              y1="9.29"
              x2="9.18"
              y2="0.38"
              fill="#4e4e4e"
              stroke="#4e4e4e"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <polyline
              id="arrow-head-1"
              points="5.01 0.38 9.18 0.38 9.18 4.55"
              fill="none"
              stroke="#4e4e4e"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <polyline
              id="arrow-head-2"
              points="5.01 0.38 9.18 0.38 9.18 4.55"
              fill="none"
              stroke="#4e4e4e"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
          </svg>
        </span>
      </ButtonBack>
      <ButtonNext>
        <span className="forward-button-svg">
          <svg
            id="arrow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.56 9.56"
          >
            <line
              id="line1"
              x1="0.27"
              y1="9.29"
              x2="9.18"
              y2="0.38"
              fill="#4e4e4e"
              stroke="#4e4e4e"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <line
              id="line2"
              x1="0.27"
              y1="9.29"
              x2="9.18"
              y2="0.38"
              fill="#4e4e4e"
              stroke="#4e4e4e"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <polyline
              id="arrow-head-1"
              points="5.01 0.38 9.18 0.38 9.18 4.55"
              fill="none"
              stroke="#4e4e4e"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
            <polyline
              id="arrow-head-2"
              points="5.01 0.38 9.18 0.38 9.18 4.55"
              fill="none"
              stroke="#4e4e4e"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth="0.75"
            />
          </svg>
        </span>
      </ButtonNext>
      <Slider id="slider-anim">
        <Slide
          index={0}
          className={styles.slide__caro}
          onClick={() => textToggleState(!textToggle)}
        >
          {textToggle ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/jelly.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>JellyFish</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>
              Jellyfish, a fast-growing IT services provider, sought to elevate their online presence and improve their customer experience. Recognizing Enigma Digital's expertise in UX design, they partnered with the agency to enhance their website's user interface and overall design.
              </p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={1}
          className={styles.slide__caro}
          onClick={() => textToggleStateTwo(!textToggleTwo)}
        >
          {textToggleTwo ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/kk.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Kedarkala</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>Kedarkala, a unique artisanal interior design studio, aimed to establish a strong brand identity and offer an exceptional online experience to its customers. They turned to Enigma Digital for their expertise in branding, UI/UX design, and website development.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={2}
          className={styles.slide__caro}
          onClick={() => textToggleStateThree(!textToggleThree)}
        >
          {textToggleThree ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/dmtca.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>DMTCA</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>DMTCA, a forward-thinking digital agency, engaged Enigma Digital to develop a strong brand identity and cohesive website design. The agency's branding and design expertise helped DMTCA establish a memorable presence that effectively communicated their innovative approach and commitment to delivering top-tier digital solutions.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={3}
          className={styles.slide__caro}
          onClick={() => textToggleStateFour(!textToggleFour)}
        >
          {textToggleFour ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/riva.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Riva</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>RivaBuild, a renowned real estate developer, enlisted Enigma Digital to create an immersive digital experience that showcased their properties and services. The agency designed a stunning website, user-friendly app, engaging collaterals, and captivating videos that highlighted RivaBuild's dedication to quality, innovation, and customer satisfaction.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={4}
          className={styles.slide__caro}
          onClick={() => textToggleStateFive(!textToggleFive)}
        >
          {textToggleFive ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/quickx.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Quick-X</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>Quickx, a cutting-edge cryptocurrency platform, partnered with Enigma Digital to create a seamless and secure web and mobile app experience. The agency's expertise in app design allowed them to deliver intuitive and user-friendly interfaces that facilitated smooth cryptocurrency transactions while reinforcing Quickx's reputation as a reliable and innovative fintech solution.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={5}
          className={styles.slide__caro}
          onClick={() => textToggleStateSix(!textToggleSix)}
        >
          {textToggleSix ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/bespin.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Bespin Labs</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>Bespin Labs, a leading IT company, partnered with Enigma Digital to enhance its online presence and marketing materials. The agency's expertise in website design and collaterals production enabled Bespin Labs to communicate their technical expertise and industry leadership effectively, attracting new clients and establishing a strong brand identity.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={6}
          className={styles.slide__caro}
          onClick={() => textToggleStateSeven(!textToggleSeven)}
        >
          {textToggleSeven ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/patronum.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Patronum</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>Patronum, an innovative SaaS company offering Google Workspace management solutions, sought to increase brand awareness and drive customer acquisition. Enigma Digital's full-service approach, encompassing branding, web design, and organic marketing, made them the ideal partner for Patronum.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
        <Slide
          index={7}
          className={styles.slide__caro}
          onClick={() => textToggleStateEight(!textToggleEight)}
        >
          {textToggleEight ? (
            <>
              <div
                className="image-box-slider"
                data-cursor-text="Drag"
                data-cursor-color="#000"
                data-cursor-size="100px"
              >
                <img src="/assets/about/black/patra.png" />
              </div>
              <div className="bottom-caro-box">
                <h1>Patra</h1>
                <div className="caro-img-box">
                  <img
                    src="/assets/about/black/plus.png"
                    className="caro-plus"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="hide-div-caro">
              <p>Patra, an insure-tech company, collaborated with Enigma Digital to develop a user-centric app and implement effective marketing strategies. The agency's UI/UX design expertise and data-driven marketing approach helped Patra create a highly engaging web experience and reach their target audience, resulting in increased user adoption and brand awareness.</p>
              <div className="bottom-caro-box hide-caro-box">
                <img
                  src="/assets/about/black/plus.png"
                  className="caro-plus gsap-caro"
                />
              </div>
            </div>
          )}
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
