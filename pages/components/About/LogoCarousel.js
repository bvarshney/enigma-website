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
    return () => tl.kill();
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

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
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
      <Slider>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
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
              <p>hello</p>
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
              <p>hello</p>
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
              <p>hello</p>
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
              <p>hello</p>
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
              <p>hello</p>
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
              <p>hello</p>
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
              <p>hello</p>
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
