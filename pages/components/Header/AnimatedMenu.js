import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 5,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 0,
    ease: "power1.inOut",
  });
};

const Header = () => {
  // Timeline created and paused

  useEffect(() => {
    let ctx = gsap.context(() => {
      var tl = gsap.timeline({ paused: true });

      function openNav() {
        animateOpenNav();
        var navBtn = document.getElementById("nav-menu");
        navBtn.onclick = function (e) {
          // Toggle reversed to it's opposite value
          tl.reversed(!tl.reversed());
          // Use the toggle method in the classList API
          navBtn.classList.toggle("active");
        };
      }

      function animateOpenNav() {
        var mobileNav = document.getElementById("mb_nav");

        tl.to(".overlay", {
          y: "110%",
          duration: 0.3,
          ease: "power1.Out",
          transform: "skewY(0deg)",
        });
        tl.to(
          ".overlay-2",
          {
            y: "100%",
            duration: 0.4,
            ease: "power1.Out",
            transform: "skewY(0deg)",
          },
          "=-0.1"
        );
        tl.to(
          ".nav",
          {
            y: "0",
            transform: "skewY(0deg)",
            duration: 0.7,
            ease: "power1.Out",
          },
          "=-0.2"
        );
        tl.fromTo(
          ".nav__link",
          {
            rotationX: -80,
            opacity: 0,
            translateY: 200,
            transformPerspective: "1000",
            transformOrigin: "top center",
          },
          {
            delay: -0.8,
            duration: 0.5,
            rotationX: 0,
            opacity: 1,
            translateY: 0,
            stagger: 0.05,
          }
        ).reverse();
        // Finally reverse the timeline. reversed() is true
      }
      // init
      openNav();
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div id="header-fixed" className="menu header-right-button cross menu--1">
        <button class="nav_toggle">
          <label data-cursor-exclusion data-cursor-size="60px">
            <input type="checkbox" id="nav-menu" />

            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" />
              <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path className="line--2" d="M0 50h70" />
              <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </label>
        </button>
      </div>

      <div id="menu-wrapper">
        <div id="mb_nav" class="nav">
          <div className="overlay"></div>
          <div className="overlay-2"></div>
          <div className="wrapper">
            <div className="menu-links">
              <div className="menu-content">
                <div className="content-left">
                  <div className="content-left-body">
                    <div className="content-left-body-row">
                      <div className="content-left-body-row-column">
                        <div className="content-heading nav__link">
                          <Link href="/about">
                            <span className="content-heading-serial">01</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="About"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              About
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link">
                          <Link href="/services">
                            <span className="content-heading-serial">02</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Expertise"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              Expertise
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link">
                          <Link href="/works">
                            <span className="content-heading-serial">03</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Works"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              Works
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="content-left-body-row-column">
                        <div className="content-heading nav__link">
                          <Link href="/blogs">
                            <span className="content-heading-serial">04</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Insight"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              Insight
                            </span>
                          </Link>
                        </div>
                        <div className="content-heading nav__link">
                          <Link href="/contact">
                            <span className="content-heading-serial">05</span>
                            <span
                              className="content-heading-slideup text-stroke-fill-ltr"
                              data-fill="Contact"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseOut={(e) => handleHoverExit(e)}
                            >
                              Contact
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-right">
                  <div className="content-right-body">
                    <div className="content-title  nav__link">
                      let's be friends
                    </div>
                    <div className="content-right-body-socials">
                      <div className="content-right-body-socials-column">
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="Facebook">Facebook</span>
                          </a>
                        </div>
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="Instagram">Instagram</span>
                          </a>
                        </div>
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="Youtube">Youtube</span>
                          </a>
                        </div>
                      </div>
                      <div className="content-right-body-socials-column">
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="Twitter">Twitter</span>
                          </a>
                        </div>
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="LinkedIn">LinkedIn</span>
                          </a>
                        </div>
                        <div
                          class="cb-menu-nav-item nav__link"
                          data-cursor-exclusion
                          data-cursor-size="50px"
                        >
                          <a href="">
                            <span data-text="Behance">Behance</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="content-right-body-title content-title nav__link">
                      work with us
                    </div>
                    <div className="content-right-body-more">
                      <div className="content-right-body-more-column">
                        <div
                          className="content-link  mb-3"
                          data-cursor-size="30px"
                          data-cursor-exclusion
                          data-cursor-color="#95bf32"
                        >
                          <div class="cb-outro-header nav__link">
                            <a
                              href="mailto:hi@weareenigma.com"
                              data-cursor-size="100px"
                            >
                              hi@weareenigma.com
                            </a>
                          </div>
                        </div>
                        <div className="num menu-num">
                          <div
                            class="cb-menu-nav-item nav__link"
                            data-cursor-exclusion
                            data-cursor-size="50px"
                          >
                            <a href="">
                              <span data-text="+91 817 802 6136">
                                +91 817 802 6136
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Desktop */}

              <div className="end-footer menu-footer-main  desktop-nav-footer">
                <div className="end-footer-content menu-footer">
                  <div className="left">
                    <div className="f_content__text">
                      <span className="f_span disabled">timezone</span>
                      <div className="f_heading">+5:30 GMT</div>
                    </div>
                  </div>
                  <div className="right">
                    <span className="f_span disabled">location</span>
                    <div className="f_heading">Noida - India</div>
                  </div>
                </div>
              </div>

              {/* Mobile */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
