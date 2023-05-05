import React, { useEffect } from "react";
import gsap from "gsap";

// Main View
const Marquee = () => {
  // GSAP Animation
  useEffect(() => {
    gsap.utils.toArray(".services-catalog-row").forEach((line, i) => {
      const links = line.querySelectorAll(".services-catalog-row-item"),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 0.7 + i * 0.1,
          reversed: true,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], "marginRight", "px")
          ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        });
    });

    gsap.utils.toArray(".services-catalog-row").forEach((line, i) => {
      const links = line.querySelectorAll(".services-catalog-row-item"),
        tl = horizontalLoop(links, {
          repeat: -1,
          speed: 0.7 + i * 0.1,
          reversed: true,
          paddingRight: parseFloat(
            gsap.getProperty(links[0], "marginRight", "px")
          ), // otherwise first element would be right up against the last when it loops. In this layout, the spacing is done with marginRight.
        });
    });

    // gsap.to('.services-catalog-row-left', { xPercent: -50, ease: 'none', duration: 6, repeat: -1 })
  }, []);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent")
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    function toIndex(index, vars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
        time = times[newIndex];
      if (time > tl.time() !== index > curIndex) {
        // if we're wrapping the timeline's playhead, make the proper adjustments
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
    tl.next = (vars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index, vars) => toIndex(index, vars);
    tl.times = times;
    if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
    }
    return tl;
  }

  // Text Reveal Animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".services-catalog",
        start: "-750 top",
      },
    });

    const demoHeader = document.querySelectorAll(".service-catalog-anim");
    // Header
    tl.fromTo(
      demoHeader,
      {
        opacity: 0,
        y: 300,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
      }
    );
  });

  return (
    <div className="services-catalog service-catalog-anim">
      <div className="services-catalog-title">
        full catalogue of our services. <span className="emoji-dark">👨‍💻</span>
      </div>
      <div className="services-catalog-row margin-top-medium ">
        <div className="services-catalog-row-item half-opacity">
          Digital Advisory and Consulting
        </div>
        <div className="services-catalog-row-item">Consumer Research</div>
        <div className="services-catalog-row-item half-opacity">
          Integrated Digital Marketing Plan (D.M.P.)
        </div>
        <div className="services-catalog-row-item">
          Insights & Target Market Analysis
        </div>
        <div className="services-catalog-row-item half-opacity">
          User Experience Development
        </div>
        <div className="services-catalog-row-item">
          Customer Experience Strategy
        </div>
        <div className="services-catalog-row-item">
          Digital Capabilities Development
        </div>
        <div className="services-catalog-row-item">
          Persona Design & Customer Segmentation
        </div>
        <div className="services-catalog-row-item">
          Persona Design & Customer Segmentation
        </div>
        <div className="services-catalog-row-item">
          Competitive Analysis & Industry Insights
        </div>
        <div className="services-catalog-row-item">
          Brand & Content Strategy
        </div>
        <div className="services-catalog-row-item">Digital Marketing</div>
        <div className="services-catalog-row-item">
          Website Performance Audit
        </div>
      </div>
      <div
        className="services-catalog-row margin-top-xs"
        style={{ marginTop: "2vw" }}
      >
        <div className="services-catalog-row-item">User Interface Design</div>
        <div className="services-catalog-row-item half-opacity">
          User Experience Design
        </div>
        <div className="services-catalog-row-item">Responsive Web Design</div>
        <div className="services-catalog-row-item half-opacity">
          Mobile App Design
        </div>
        <div className="services-catalog-row-item">
          Digital Interface Design
        </div>
        <div className="services-catalog-row-item half-opacity">
          Design Systems Creation
        </div>
        <div className="services-catalog-row-item half-opacity">
          Experience Mapping
        </div>
        <div className="services-catalog-row-item half-opacity">
          User Flow Mapping
        </div>
        <div className="services-catalog-row-item half-opacity">
          Wireframing & Prototyping
        </div>
        <div className="services-catalog-row-item half-opacity">
          Illustrations & Animations
        </div>
        <div className="services-catalog-row-item half-opacity">
          Visual Designs & UI Kits.
        </div>
      </div>
      <div
        className="services-catalog-row margin-top-xs"
        style={{ marginTop: "3.5vw" }}
      >
        <div className="services-catalog-row-item">Front-End Development</div>
        <div className="services-catalog-row-item half-opacity">
          Native & Hybrid Mobile Application Development
        </div>
        <div className="services-catalog-row-item">
          Progressive Web Applications
        </div>
        <div className="services-catalog-row-item half-opacity">
          Database Design & Management
        </div>
        <div className="services-catalog-row-item">
          Cloud Infrastructure Services
        </div>
        <div className="services-catalog-row-item">Testing & Automation</div>
      </div>
      <div
        className="services-catalog-row margin-top-xs"
        style={{ marginTop: "1.5vw" }}
      >
        <div className="services-catalog-row-item half-opacity">
          Social Media Management
        </div>
        <div className="services-catalog-row-item">
          Content Creation & Curation
        </div>
        <div className="services-catalog-row-item half-opacity">
          Search Engine Optimisation
        </div>
        <div className="services-catalog-row-item">Influencer Management</div>
        <div className="services-catalog-row-item">
          Auction Media Management
        </div>
      </div>
      <div
        className="services-catalog-row margin-top-xs"
        style={{ marginTop: "3.5vw" }}
      >
        <div className="services-catalog-row-item">
          Online Reputation Management
        </div>
        <div className="services-catalog-row-item half-opacity">
          Media Planning & Buying
        </div>
        <div className="services-catalog-row-item">Marketing Automation</div>
        <div className="services-catalog-row-item half-opacity">
          Email Marketing
        </div>
        <div className="services-catalog-row-item half-opacity">
          Conversion Rate Optimisation
        </div>
        <div className="services-catalog-row-item half-opacity">
          Website & SEO Analysis
        </div>
      </div>
    </div>
  );
};

export default Marquee;
