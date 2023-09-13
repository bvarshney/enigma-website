import React, { useEffect } from "react";
import gsap from "gsap";

class Particles {
  constructor(options) {
    this.options = Object.assign(
      {},
      {
        container: null,
        itemsSelector: "[data-particle-item]",
        observable: true,
        observableTarget: null,
        observableRefresh: true,
        repeats: -1,
        timeScale: 1.5,
        initialSeek: 3000,
        // fadeInDuration: 5,
        // fadeInEase: "power1.out",
        fadeOutDuration: 1,
        fadeOutEase: "power4.out",
        yStart: () => this.container.offsetHeight,
        yEnd: (v, e) => -e.offsetHeight,
        yStart: "350",
        yEnd: "-500",
        ease: "none",
        duration: () => gsap.utils.random(5, 10),
        offset: () => gsap.utils.random(0, 20),
      },
      options
    );

    this.timeScale = this.options.timeScale;
    this.init();
  }

  /**
   * Init particles.
   */
  init() {
    this.container =
      typeof this.options.container === "string"
        ? document.querySelector(this.options.container)
        : this.options.container;
    this.items = this.container.querySelectorAll(this.options.itemsSelector);
    this.tl = this.createTimeline();

    if (this.options.observable) {
      this.observe();
    } else {
      this.start();
    }

    if (this.options.repeats === -1) this.tl.seek(this.options.initialSeek);
    this.bind();
  }

  /**
   * Bind events.
   */
  bind() {
    window.addEventListener("resize", this.refresh.bind(this));
  }

  /**
   * Remove events.
   */
  unbind() {
    window.removeEventListener("resize", this.refresh.bind(this));
  }

  /**
   * Refresh particles.
   */
  refresh() {
    this.tl.invalidate();
  }

  /**
   * Start movement.
   */
  start() {
    this.tl.play().timeScale(this.timeScale);
  }

  /**
   * Pause movement.
   */
  stop() {
    this.tl.pause();
  }

  /**
   * Start IntersectionObserver to container or `observable`.
   *
   * @param {HTMLElement} [observable] - Optional observable element.
   */
  observe(observable) {
    if (observable) this.options.observableTarget = observable;
    if (this.observer) this.unobserve();

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.options.observableRefresh) this.refresh();
        this.start();
      } else {
        this.stop();
      }
    });

    this.observer.observe(this.options.observableTarget || this.container);
  }

  /**
   * Destroy IntersectionObserver.
   */
  unobserve() {
    if (this.observer) this.unobserve();
    this.observer = null;
  }

  /**
   * Set movement timescale value.
   *
   * @param {number} [scale=1] - timeScale.
   */
  setTimeScale(scale = 1) {
    this.timeScale = scale;
    this.tl.timeScale(scale);
  }

  /**
   * Return current movement direction.
   *
   * @return {boolean} - reversed if true.
   */
  isReversed() {
    return this.timeScale < 0;
  }

  /**
   * Reverse direction of movement.
   *
   * @param {boolean} reverse - is reversed.
   * @return {boolean} - is reversed.
   */
  setReversed(reverse) {
    if (reverse !== this.isReversed()) this.setTimeScale(this.timeScale * -1);
    return this.isReversed();
  }

  /**
   * Return GSAP timeline of movement
   *
   * @return {gsap.core.Timeline} - GSAP timeline.
   */
  getTimeline() {
    return this.tl;
  }

  /**
   * Create movement timeline.
   *
   * @return {gsap.core.Timeline} - GSAP timeline.
   */
  createTimeline() {
    const mtl = new gsap.timeline({ paused: true });

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      const tl = new gsap.timeline({ repeat: this.options.repeats });
      const offset = this.options.offset();

      tl.set(item, { willChange: "transform" });

      if (this.options.fadeInDuration) {
        tl.fromTo(
          item,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            ease: this.options.fadeInEase,
            duration: this.options.fadeInDuration,
            lazy: false,
          },
          0
        );
      }

      tl.fromTo(
        item,
        {
          y: this.options.yStart,
          x: this.options.xStart,
        },
        {
          y: this.options.yEnd,
          x: this.options.xEnd,
          ease: this.options.ease,
          duration: this.options.duration,
        },
        0
      );

      if (this.options.fadeOutDuration) {
        tl.to(
          item,
          {
            opacity: 0,
            ease: this.options.fadeOutEase,
            duration: this.options.fadeOutDuration,
            lazy: false,
          },
          "-=" + this.options.fadeOutDuration
        );
      }

      mtl.add(tl, offset);
    }

    return mtl;
  }

  /**
   * Destroy GSAP timeline.
   */
  removeTimeline() {
    if (this.tl) this.tl.kill();
  }

  /**
   * Stop and destroy particles.
   */
  destroy() {
    this.stop();
    this.removeTimeline();
    this.unbind();
    this.unobserve();
  }
}

export default function partText() {
  useEffect(() => {
    const demoParticles = document.querySelector(".cb-particles");
    const particles = new Particles({
      container: demoParticles,
      itemsSelector: ".cb-particles-item",
    });
  }, []);

  return (
    <div className="cb-tabs-content">
      <section className="cb-demo">
        <div className="cb-particles">
          <span className="cb-particles-item -text -v1 -s4">Hello</span>
          <span className="cb-particles-item -text -v2 -s4">Namaste</span>
          <span className="cb-particles-item -text -v3 -s4">Hola</span>
          <span className="cb-particles-item -text -v4 -s4">Bonjour</span>
          <span className="cb-particles-item -text -v5 -s4">Nǐn hǎo</span>
          <span className="cb-particles-item -text -v6 -s4">Olá</span>
          <span className="cb-particles-item -text -v7 -s4">Shalom</span>
          <span className="cb-particles-item -text -v8 -s4">Ciao</span>
          <span className="cb-particles-item -text -v9 -s4">Aloha</span>
          <span className="cb-particles-item -text -v10 -s4">Hei</span>
          <span className="cb-particles-item -text -v11 -s4">Hallá</span>
          <span className="cb-particles-item -text -v12 -s4">Salve</span>
          <span className="cb-particles-item -text -v13 -s4">Xin Chào</span>
          <span className="cb-particles-item -text -v14 -s4">Salaam</span>
          <span className="cb-particles-item -text -v15 -s4">Zdraveĭte</span>
        </div>
      </section>
    </div>
  );
}
