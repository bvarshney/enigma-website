import React, { useEffect, useRef } from "react";
import styles from "@/styles/project.module.css";
import gsap from "gsap";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import Button from "../Button";
import SplitType from "split-type";


 var _s,
  ws,
  bs,
  xs,
  Cs,
  Es = function () {
    return "undefined" != typeof window;
  },
  Ts = function () {
    return _s || (Es() && (_s = window.gsap) && _s.registerPlugin && _s);
  },
  Fs = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  Ss = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"],
  },
  As = function (t) {
    return Math.round(1e4 * t) / 1e4;
  },
  ks = function (t) {
    return parseFloat(t || 0);
  },
  Os = function (t, e) {
    return ks(t.getAttribute(e));
  },
  Ms = Math.sqrt,
  Bs = function (t, e, i, r, n, s) {
    return Ms(
      Math.pow((ks(i) - ks(t)) * n, 2) + Math.pow((ks(r) - ks(e)) * s, 2)
    );
  },
  Ls = function (t) {
    return console.warn(t);
  },
  Ps = function (t) {
    return "non-scaling-stroke" === t.getAttribute("vector-effect");
  },
  Rs = function (t) {
    if (!(t = ws(t)[0])) return 0;
    var e,
      i,
      r,
      n,
      s,
      o,
      a,
      l = t.tagName.toLowerCase(),
      u = t.style,
      c = 1,
      h = 1;
    Ps(t) &&
      ((h = t.getScreenCTM()),
      (c = Ms(h.a * h.a + h.b * h.b)),
      (h = Ms(h.d * h.d + h.c * h.c)));
    try {
      i = t.getBBox();
    } catch (t) {
      Ls(
        "Some browsers won't measure invisible elements (like display:none or masks inside defs)."
      );
    }
    var d = i || { x: 0, y: 0, width: 0, height: 0 },
      f = d.x,
      p = d.y,
      D = d.width,
      g = d.height;
    if (
      ((i && (D || g)) ||
        !Ss[l] ||
        ((D = Os(t, Ss[l][0])),
        (g = Os(t, Ss[l][1])),
        "rect" !== l && "line" !== l && ((D *= 2), (g *= 2)),
        "line" === l &&
          ((f = Os(t, "x1")),
          (p = Os(t, "y1")),
          (D = Math.abs(D - f)),
          (g = Math.abs(g - p)))),
      "path" === l)
    )
      (n = u.strokeDasharray),
        (u.strokeDasharray = "none"),
        (e = t.getTotalLength() || 0),
        c !== h &&
          Ls(
            "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."
          ),
        (e *= (c + h) / 2),
        (u.strokeDasharray = n);
    else if ("rect" === l) e = 2 * D * c + 2 * g * h;
    else if ("line" === l) e = Bs(f, p, f + D, p + g, c, h);
    else if ("polyline" === l || "polygon" === l)
      for (
        r = t.getAttribute("points").match(Fs) || [],
          "polygon" === l && r.push(r[0], r[1]),
          e = 0,
          s = 2;
        s < r.length;
        s += 2
      )
        e += Bs(r[s - 2], r[s - 1], r[s], r[s + 1], c, h) || 0;
    else
      ("circle" !== l && "ellipse" !== l) ||
        ((o = (D / 2) * c),
        (a = (g / 2) * h),
        (e = Math.PI * (3 * (o + a) - Ms((3 * o + a) * (o + 3 * a)))));
    return e || 0;
  },
  js = function (t, e) {
    if (!(t = ws(t)[0])) return [0, 0];
    e || (e = Rs(t) + 1);
    var i = bs.getComputedStyle(t),
      r = i.strokeDasharray || "",
      n = ks(i.strokeDashoffset),
      s = r.indexOf(",");
    return (
      s < 0 && (s = r.indexOf(" ")),
      (r = s < 0 ? e : ks(r.substr(0, s)) || 1e-5) > e && (r = e),
      [Math.max(0, -n), Math.max(0, r - n)]
    );
  },
  qs = function () {
    Es() &&
      (document,
      (bs = window),
      (Cs = _s = Ts()),
      (ws = _s.utils.toArray),
      (xs = -1 !== ((bs.navigator || {}).userAgent || "").indexOf("Edge")));
  },
  zs = {
    version: "3.4.0",
    name: "drawSVG",
    register: function (t) {
      (_s = t), qs();
    },
    init: function (t, e, i, r, n) {
      if (!t.getBBox) return !1;
      Cs || qs();
      var s,
        o,
        a,
        l,
        u = Rs(t) + 1;
      return (
        (this._style = t.style),
        (this._target = t),
        e + "" == "true"
          ? (e = "0 100%")
          : e
          ? -1 === (e + "").indexOf(" ") && (e = "0 " + e)
          : (e = "0 0"),
        (o = (function (t, e, i) {
          var r,
            n,
            s = t.indexOf(" ");
          return (
            s < 0
              ? ((r = void 0 !== i ? i + "" : t), (n = t))
              : ((r = t.substr(0, s)), (n = t.substr(s + 1))),
            (r = ~r.indexOf("%") ? (ks(r) / 100) * e : ks(r)) >
            (n = ~n.indexOf("%") ? (ks(n) / 100) * e : ks(n))
              ? [n, r]
              : [r, n]
          );
        })(e, u, (s = js(t, u))[0])),
        (this._length = As(u + 10)),
        0 === s[0] && 0 === o[0]
          ? ((a = Math.max(1e-5, o[1] - u)),
            (this._dash = As(u + a)),
            (this._offset = As(u - s[1] + a)),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              As(u - o[1] + a)
            )))
          : ((this._dash = As(s[1] - s[0]) || 1e-6),
            (this._offset = As(-s[0])),
            (this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              As(o[1] - o[0]) || 1e-5
            )),
            (this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              As(-o[0])
            ))),
        xs &&
          (l = bs.getComputedStyle(t)).strokeLinecap !== l.strokeLinejoin &&
          ((o = ks(l.strokeMiterlimit)),
          this.add(t.style, "strokeMiterlimit", o, o + 0.01)),
        (this._live = Ps(t) || ~(e + "").indexOf("live")),
        this._props.push("drawSVG"),
        1
      );
    },
    render: function (t, e) {
      var i,
        r,
        n,
        s,
        o = e._pt,
        a = e._style;
      if (o) {
        for (
          e._live &&
          (i = Rs(e._target) + 11) !== e._length &&
          ((r = i / e._length),
          (e._length = i),
          (e._offsetPT.s *= r),
          (e._offsetPT.c *= r),
          e._dashPT
            ? ((e._dashPT.s *= r), (e._dashPT.c *= r))
            : (e._dash *= r));
          o;

        )
          o.r(t, o.d), (o = o._next);
        (n = e._dash),
          (s = e._offset),
          (i = e._length),
          (a.strokeDashoffset = e._offset),
          1 !== t && t
            ? (a.strokeDasharray = n + "px," + i + "px")
            : (n - s < 0.001 && i - n <= 10 && (a.strokeDashoffset = s + 1),
              (a.strokeDasharray =
                s < 0.001 && i - n <= 10
                  ? "none"
                  : s === n
                  ? "0px, 999999px"
                  : n + "px," + i + "px"));
      }
    },
    getLength: Rs,
    getPosition: js,
  };
Ts() && _s.registerPlugin(zs);

gsap.registerPlugin(ScrollTrigger, zs);

// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1.1,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1,
    ease: "power1.inOut",
  });
};

export default function ProjectsHome() {
  // Arrow Animation
  useEffect(() => {
    let t = gsap.timeline();
    const arrow = document
      .querySelectorAll("#image-container")
      .forEach(function (e) {
        e.addEventListener("mouseenter", () => {
          t.set(e.querySelector("#line1"), { drawSVG: "100%" })
            .set(e.querySelector("#line2"), { drawSVG: 0 })
            .set(e.querySelector("#arrow-head-1"), { drawSVG: "100%" })
            .set(e.querySelector("#arrow-head-2"), { drawSVG: 0 })
            .to(e.querySelector("#line1"), {
              drawSVG: "100% 100%",
              duration: 0.2,
            })
            .to(e.querySelector("#arrow-head-1"), {
              drawSVG: "100% 100%",
              duration: 0.2,
            })
            .to(e.querySelector("#arrow-head-2"), {
              drawSVG: "100%",
              duration: 0.4,
            })
            .to(e.querySelector("#line2"), {
              drawSVG: "100%",
              duration: 0.2,
            });
        });
      });
  });

  // Parallax Image
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray("#image-container").forEach(function (container) {
        let image = container.querySelector("img");

        gsap.to(image, {
          y: () => image.offsetHeight - container.offsetHeight,
          ease: "none",
          startAt: { y: "-20%" },
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
            markers: false,
            invalidateOnRefresh: true,
          },
          y: "20%",
          ease: "none",
        });
      });
    });
    return () => ctx.revert();
  });

  // Text Reveal Animation Top to Center
  if (globalThis.innerWidth < 1024) {
    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#m-works",
          start: "top 90%",
        },
      });
  
      // Header
      tl.fromTo(
        "#line-anim #span",
        1.2,
        {
          y: 600,
          ease: "Power3.inOut",
          skewY: -20,
        },
        {
          y: 0,
          skewY: 0,
          stagger: 0.2,
        },
        "-0.6"
      );
      return () => tl.kill();
    }, []);
  }

  // Project Section Reveal Animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#m-works",
        start: "top 85%",
      },
    });

    // Header
    tl.fromTo(
      "#project-home",
      0.8,
      {
        opacity: 0,
      },
      {
        delay: 0.5,
        duration: 1,
        opacity: 1,
      }
    );
    return () => tl.kill();
  }, []);

  return (
    <>
      <div className={styles.projectSectionMain} id="m-works">
        <div className={styles.projectHeading}>
          <div
            className={`${styles.projectFirstBox} ${styles.lineAnim}`}
            id="line-anim"
          >
            <h1 className={`${styles.select}`}>
              <span className={styles.span} id="span">
                Selected
              </span>
            </h1>
            <h4 className={styles.paraProject} id="proj-para-anim">
              <span>
              Our showcase of a spectrum of Innovative Collaborations, 
              Redefined Digital Experiences, and Brand Transformations.
              </span>
            </h4>
          </div>
          <div
            className={`${styles.projectHomeHeading} ${styles.lineAnim}`}
            id="line-anim"
          >
            <h1 className={styles.project} id="darkMode-project">
              <span className={styles.span} id="span">
                Projects
              </span>
            </h1>
          </div>
        </div>

        <div className={styles.projectHover} id="project-home">
          <div className={styles.projectSubSection}>
            <div className={styles.glide}>
              <div
                className={`${styles.glideContent} ${styles.mt20}`}
                id="image-container"
              >
                <a href="/kedarkala-portfolio-website-case-study">
                  <Image
                    src="/assets/projects/new-project/kedarkala2.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2022</p> <p>Branding, Web Design</p>
                    <div className={styles.projectCta}>
                      <h1>Kedarkala</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.glide} ${styles.mb_0}`}>
              <div className={`${styles.glideContent}`} id="image-container">
                <a href="/patronum-saas-case-study">
                  <Image
                    src="/assets/projects/new-project/patronum.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2019</p> <p>Branding, Web Design, Marketing</p>
                    <div className={styles.projectCta}>
                      <h1>Patronum</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Second ====================== */}

          <div className={styles.projectSubSection}>
            <div className={styles.glide}>
              <div
                className={`${styles.glideContent} ${styles.mt20} ${styles.mt0}`}
                id="image-container"
              >
                <a href="/wragby-solutions-case-study">
                  <Image
                    src="/assets/projects/new-project/wragby.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2022</p> <p>UI/ UX Design, Development</p>
                    <div className={styles.projectCta}>
                      <h1>Wragby</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.glide} ${styles.mb_0}`}>
              <div className={styles.glideContent} id="image-container">
                <a href="/gcm-phygital-shopping-case-study">
                  <Image
                    src="/assets/projects/new-project/gcm.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2022</p> <p>Web Design, Development</p>
                    <div className={styles.projectCta}>
                      <h1>GCM</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =============== Third =================== */}

          <div className={styles.projectSubSection}>
            <div className={styles.glide}>
              <div
                className={`${styles.glideContent} ${styles.mt20} ${styles.mt0}`}
                id="image-container"
              >
                <a href="/pdtl-ecommerce-automation-case-study">
                  <Image
                    src="/assets/projects/new-project/pdtl.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2022</p> <p>Web Design, Branding, Development</p>
                    <div className={styles.projectCta}>
                      <h1>PDTL</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.glide}>
              <div className={styles.glideContent} id="image-container">
                <a href="/dharan-ecommerce-case-study">
                  <Image
                    src="/assets/projects/new-project/dharan.webp"
                    width={1000}
                    height={1000}
                    alt="Image"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                </a>

                <div className={styles.textContent}>
                  <div className={styles.c_project_info}>
                    <p>2020</p> <p>E-Commerce, Web Design, Development</p>
                    <div className={styles.projectCta}>
                      <h1>Dharan</h1>
                      <div
                        className={`${styles.c_prj_btn} ${styles.js_tab_arrow}`}
                      >
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Projects Button =================== */}
        <Button />
        {/* ================= Projects Button END =================== */}
      </div>
    </>
  );
}
