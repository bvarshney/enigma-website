import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu";
import gsap from "gsap";

const Hamburger = () => {
  // State of our Menu
  const nav = useRef();
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.from(nav.current, {
      duration: 1.5,
      // opacity: 0,
      ease: "power3.inOut",
    });
  }, []);

  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  const [disabled, setDisabled] = useState(false);

  const btnDisable = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  const btnHam = useRef();

  const tl = gsap.timeline();

  const handleMenu = () => {
    btnDisable();

    if (state.initial === false) {
      setState({ initial: null, clicked: true, menuName: "CLOSE" });

      tl.play();
    } else if (state.clicked === true) {
      setState({ clicked: !state.clicked, menuName: "MENU" });

      tl.reverse();
    } else if (state.clicked === false) {
      setState({ clicked: !state.clicked, menuName: "CLOSE" });

      tl.play();
    }
  };

  return (
    <div className="hamburger">
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="menu menu-fixed" ref={nav}>
              <div
                className="menu header-right-button cross menu--1"
                id="header-fixed"
              >
                <button ref={buttonRef} 
                        id="btn-music"
                        aria-label="menu">
                  <label data-cursor-exclusion data-cursor-size="60px">
                    <input
                      type="checkbox"
                      ref={btnHam}
                      disabled={disabled}
                      onClick={handleMenu}
                      id="menu"
                    />

                    <svg
                      className="menu-svg-icon"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="50" cy="50" r="30" />
                      <path
                        className="line--1"
                        d="M0 40h62c13 0 6 28-4 18L35 35"
                      />
                      <path className="line--2" d="M0 50h70" />
                      <path
                        className="line--3"
                        d="M0 60h62c13 0 6-28-4-18L35 65"
                      />
                    </svg>
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu state={state} />
    </div>
  );
};

export default Hamburger;
