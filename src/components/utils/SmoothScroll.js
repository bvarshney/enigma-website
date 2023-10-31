import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import OverscrollPlugin from "smooth-scrollbar/dist/plugins/overscroll";

gsap.registerPlugin(ScrollTrigger);
class ScrollTriggerPlugin extends Scrollbar.ScrollbarPlugin {
  static pluginName = "ScrollTriggerPlugin";

  constructor(scrollbar, options) {
    super(scrollbar, options);
    this.setProxy();
  }

  setProxy() {
    const scrollbar = this.scrollbar;

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value; // setter
        }
        return scrollbar.scrollTop; // getter
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: "transform",
    });

    scrollbar.addListener(ScrollTrigger.update);
  }
}

ScrollTriggerPlugin.pluginName = "ScrollTriggerPlugin";

class JellyMotion {
  constructor(el, options) {
    this.el = el;
    this.paused = false;
    this.options = Object.assign(
      {},
      {
        intensity: 0.3,
        speed: 1,
        min: -5,
        max: 5,
        scrollPos: () => window.pageYOffset,
      },
      options
    );
    this.init();
  }

  getScrollPos() {
    return this.options.scrollPos();
  }

  pause(state = true) {
    this.paused = state;
  }

  init() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.startLoop();
      } else {
        this.stopLoop();
      }
    });
    this.observer.observe(this.el);
  }

  startLoop() {
    this.y = this.getScrollPos();
    this.loop();
  }

  stopLoop() {
    cancelAnimationFrame(this.frame);

    if (!this.paused) {
      gsap.set(this.el, { skewY: 0 });
    }
  }

  loop() {
    const y = this.getScrollPos();
    const diff = y - this.y;
    const skew = Math.min(
      Math.max(this.options.min, diff * this.options.intensity),
      this.options.max
    );

    if (!this.paused) {
      gsap.set(this.el, { skewY: skew, force3D: true });
      this.animationPaused = false;
    } else {
      if (!this.animationPaused) {
        gsap.to(this.el, {
          skewY: 0,
          force3D: true,
          duration: this.options.speed,
        });
        this.animationPaused = true;
      }
    }

    this.y = y;
    this.frame = requestAnimationFrame(this.loop.bind(this));
  }

  destroy() {
    this.observer.disconnect();
    this.pause(false);
    this.stopLoop();
  }
}

//@ Edge Damping ScrollTrigger and Mobile Plugin for Scrollbar
Scrollbar.use(ScrollTriggerPlugin);

//& Smooth Scroll with Edge Damping
const SmoothScroll = ({ onScroll }) => {
  /// Prop Definitions
  /// 1: stickyStuff - Array of Refs for Fixing Elements on Screen - from 'PageEssentials'

  const router = useRouter();
  const offsetY = useRef(null);
  const smoothscrollRef = useRef(null);

  //$ Check if Mobile or Desktop
  //   const isDesktop = checkDesktop();

  // Mobile

  class SmoothTouchScrollPlugin extends ScrollbarPlugin {
    static pluginName = "smoothTouchScroll";

    transformDelta(delta, fromEvent) {
      if (fromEvent.type === "touchmove") {
        this.scrollbar.options.damping = 0.1; // change this to whatever you want
      }
      return delta;
    }
  }
  class SmoothTouchendScrollPlugin extends ScrollbarPlugin {
    static pluginName = "smoothTouchendScroll";

    transformDelta(delta, fromEvent) {
      if (fromEvent.type === "touchend") {
        this.scrollbar.options.damping = 0.1; // change this to whatever you want
      }
      return delta;
    }
  }

  //$ Run on Page Load
  useEffect(() => {
    const view = document.body; //` Declare View Reference
    const settings = {
      damping: 0.04,
      thumbMinSize: 5,
      renderByPixels: true,
      delegateTo: document,
      alwaysShowTracks: false,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "bounce",
          damping: 0.15,
          maxOverscroll: 80,
        },
        mobile: {
          // speed: 10,
        },
      },
    }; //` Options

    //$ Initialize with View and Settings
    Scrollbar.use(SmoothTouchendScrollPlugin, SmoothTouchScrollPlugin);
    const smoothscroll = Scrollbar.init(view, settings);
    smoothscrollRef.current = smoothscroll;
    const cursorRef = document.getElementById("c-cursor");

    smoothscroll.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: document.body });

    // Mobile Plugin

    //$ Jelly Motion Scroll for Mobiles
    //@ Jelly Scroll Class
    const JellyScroll = (options) => {
      const jellys = [];
      const els = document.querySelectorAll("[data-jelly]");
      for (let i = 0; i < els.length; i++) {
        const el = els[i];
        const opts = Object.assign(
          {},
          options,
          el.dataset.jelly ? JSON.parse(el.dataset.jelly) : {}
        );
        const jelly = new JellyMotion(el, opts);
        jellys.push(jelly);
      }
    };

    //@ Initialize Jelly Scroll
    JellyScroll({
      scrollPos: () => smoothscroll.offset.y,
    });

    //$ Set Fixed Position for Cursor
    smoothscroll.addListener(({ offset }) => {
      //@ Set Mouse Fixed Position only if on Desktop
      offsetY.current = offset.y + "px";
      cursorRef.style.top = offset.y + "px";
      cursorRef.style.left = offset.x + "px";
    });

    // Menu SVG Fixed

    const fixedElem = document.getElementById("header-fixed");

    smoothscroll.addListener(function (status) {
      var offset = status.offset;

      fixedElem.style.top = offset.y + "px";
      fixedElem.style.left = offset.x + "px";
    });

    // Menu Wrapper

    const fixedMenu = document.querySelector(".nav");

    smoothscroll.addListener(function (status) {
      var offset = status.offset;

      fixedMenu.style.top = offset.y + "px";
      fixedMenu.style.left = offset.x + "px";
    });

    // Modal Pop Up form Fixed

    const fixedPopUp = document.querySelector(".PopUpmodal");
    const fixedPopButton = document.querySelector("#popUpButton");
    
    if (fixedPopUp) {
      // The .PopUpmodal element is on the page
      smoothscroll.addListener(function (status) {
        var offset = status.offset;
        fixedPopUp.style.top = offset.y + "px";
        fixedPopUp.style.right = offset.x + "px";
      });
    }
    
    if (fixedPopButton) {
      // The #popUpButton element is on the page
      smoothscroll.addListener(function (status) {
        var offset = status.offset;
        fixedPopButton.style.top = offset.y + "px";
        fixedPopButton.style.left = offset.x + "px";
      });
    }
        
    // Loader

    const fixedLoader = document.getElementById("loader");

    smoothscroll.addListener(function (status) {
      var offset = status.offset;

      fixedLoader.style.top = offset.y + "px";
      fixedLoader.style.left = offset.x + "px";
    });

    // LOGO Fixed

    const fixedLogo = document.getElementById("main-logo");

    smoothscroll.addListener(function (status) {
      var offset = status.offset;

      fixedLogo.style.top = offset.y + "px";
      fixedLogo.style.left = offset.x + "px";
    });

    //  Modal Video Wrapper
    const modalWrapper = document.getElementById("modal-video-wrapper");

    smoothscroll.addListener(function (status) {
      var offset = status.offset;

      modalWrapper.style.top = offset.y + "px";
      modalWrapper.style.left = offset.x + "px";
    });

    if (onScroll) {
      smoothscroll.addListener(onScroll);
    }

    return () => {
      // Cleanup: Remove the custom scroll event listener
      if (onScroll) {
        smoothscroll.removeListener(onScroll);
      }
    };
  }, [onScroll, router]);

  useEffect(() => {
    smoothscrollRef.current && smoothscrollRef.current.scrollTo(0, 0);
  }, [router, smoothscrollRef]);

  useEffect(() => {
    window.addEventListener("pagehide", function (e) {
      document.body.style.display = "none";
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      router.events.on("routeChangeComplete", () => {
        document.body.style.display = "auto";
      });
      document.body.style.display = "auto";
    };

    handleRouteChange();

    return () => {
      router.events.off("routeChangeComplete", () => {
        document.body.style.display = "auto";
      });
      document.body.style.display = "auto";
    };
  }, []);
};

export default SmoothScroll;
