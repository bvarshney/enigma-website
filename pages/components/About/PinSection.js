import React, { useEffect } from "react";
import gsap, { TweenMax, TimelineMax, Sine, easeOut } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PinSection() {
  // const mapNumber = (X, A, B, C, D) => ((X - A) * (D - C)) / (B - A) + C;
  // // from http://www.quirksmode.org/js/events_properties.html#position
  // const getMousePos = (e) => {
  //   let posx = 0;
  //   let posy = 0;
  //   if (!e) e = window.event;
  //   if (e.pageX || e.pageY) {
  //     posx = e.pageX;
  //     posy = e.pageY;
  //   } else if (e.clientX || e.clientY) {
  //     posx =
  //       e.clientX +
  //       document.body.scrollLeft +
  //       document.documentElement.scrollLeft;
  //     posy =
  //       e.clientY +
  //       document.body.scrollTop +
  //       document.documentElement.scrollTop;
  //   }
  //   return { x: posx, y: posy };
  // };
  // // Generate a random float.
  // const getRandomFloat = (min, max) =>
  //   (Math.random() * (max - min) + min).toFixed(1);

  // /**
  //  * One class per effect.
  //  * Lots of code is repeated, so that single effects can be easily used.
  //  */

  // // Effect 1
  // class HoverImgFx1 {
  //   constructor(el) {
  //     this.DOM = { el: el };
  //     this.DOM.reveal = document.createElement("div");
  //     this.DOM.reveal.className = "hover-reveal";
  //     this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
  //     this.DOM.el.appendChild(this.DOM.reveal);
  //     this.DOM.revealInner = this.DOM.reveal.querySelector(
  //       ".hover-reveal__inner"
  //     );
  //     this.DOM.revealInner.style.overflow = "hidden";
  //     this.DOM.revealImg =
  //       this.DOM.revealInner.querySelector(".hover-reveal__img");

  //     this.initEvents();
  //   }
  //   initEvents() {
  //     this.positionElement = (ev) => {
  //       const mousePos = getMousePos(ev);
  //       const docScrolls = {
  //         left: document.body.scrollLeft + document.documentElement.scrollLeft,
  //         top: document.body.scrollTop + document.documentElement.scrollTop,
  //       };
  //       this.DOM.reveal.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
  //       this.DOM.reveal.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
  //     };
  //     this.mouseenterFn = (ev) => {
  //       this.positionElement(ev);
  //       this.showImage();
  //     };
  //     this.mousemoveFn = (ev) =>
  //       requestAnimationFrame(() => {
  //         this.positionElement(ev);
  //       });
  //     this.mouseleaveFn = () => {
  //       this.hideImage();
  //     };

  //     this.DOM.el.addEventListener("mouseenter", this.mouseenterFn);
  //     this.DOM.el.addEventListener("mousemove", this.mousemoveFn);
  //     this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn);
  //   }
  //   showImage() {
  //     TweenMax.killTweensOf(this.DOM.revealInner);
  //     TweenMax.killTweensOf(this.DOM.revealImg);

  //     this.tl = new TimelineMax({
  //       onStart: () => {
  //         this.DOM.reveal.style.opacity = 1;
  //         TweenMax.set(this.DOM.el, { zIndex: 99 });
  //       },
  //     })
  //       .add("begin")
  //       .add(
  //         new TweenMax(this.DOM.revealInner, 0.2, {
  //           ease: Sine.easeOut,
  //           startAt: { x: "-100%" },
  //           x: "0%",
  //         }),
  //         "begin"
  //       )
  //       .add(
  //         new TweenMax(this.DOM.revealImg, 0.2, {
  //           ease: Sine.easeOut,
  //           startAt: { x: "100%" },
  //           x: "0%",
  //         }),
  //         "begin"
  //       );
  //   }
  //   hideImage() {
  //     // TweenMax.killTweensOf(this.DOM.revealInner);
  //     TweenMax.killTweensOf(this.DOM.revealImg);

  //     this.tl = new TimelineMax({
  //       onStart: () => {
  //         TweenMax.set(this.DOM.el, { zIndex: 999 });
  //       },
  //       onComplete: () => {
  //         TweenMax.set(this.DOM.el, { zIndex: "" });
  //         TweenMax.set(this.DOM.reveal, { opacity: 0 });
  //       },
  //     })
  //       .add("begin")
  //       .add(
  //         new TweenMax(this.DOM.revealInner, 0.2, {
  //           ease: Sine.easeOut,
  //           x: "100%",
  //         }),
  //         "begin"
  //       )

  //       .add(
  //         new TweenMax(this.DOM.revealImg, 0.2, {
  //           ease: Sine.easeOut,
  //           x: "-100%",
  //         }),
  //         "begin"
  //       );
  //   }
  // }

  // useEffect(() => {
  //   [...document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')].forEach(
  //     (link) => new HoverImgFx1(link)
  //   );

  // const contentel = document.querySelector(".content");
  // [
  //   ...document.querySelectorAll(
  //     ".block__title, .block__link, .content__text-link"
  //   ),
  // ].forEach((el) => {
  //   const imgsArr = el.dataset.img.split(",");
  //   for (let i = 0, len = imgsArr.length; i <= len - 1; ++i) {
  //     const imgel = document.createElement("img");
  //     imgel.style.visibility = "hidden";
  //     imgel.style.width = 0;
  //     imgel.src = imgsArr[i];
  //     imgel.className = "preload";
  //     contentel.appendChild(imgel);
  //   }
  // });
  // });

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".image", {
        zIndex: (i, target, targets) => targets.length - i,
      });

      const images = gsap.utils.toArray(".image:not(.purple)");

      images.forEach((image, i) => {
        const nextImage = image.nextElementSibling;

        const imageTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".showcase",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: true,
          },
        });

        imageTimeline.fromTo(
          image,
          {
            height: () => {
              return "100%";
            },
          },
          {
            height: () => {
              return "0%";
            },
            ease: "none",
          },
          0
        );
      });

      ScrollTrigger.create({
        trigger: ".showcase",
        start: () => "top top",
        end: () => "+=" + images.length * window.innerHeight,
        pin: ".image-wrap",
      });

      const sideImages = gsap.utils.toArray(".side-image:not(.blue)");

      sideImages.forEach((image, i) => {
        const prevImage = image.previousElementSibling;

        const imageTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".showcase",
            start: () => "top -" + window.innerHeight * i,
            end: () => "+=" + window.innerHeight,
            scrub: true,
          },
        });

        imageTimeline
          .fromTo(
            image,
            {
              height: () => {
                return "0%";
              },
              scale: () => {
                return 1.0;
              },
            },
            {
              height: () => {
                return "100%";
              },
              scale: () => {
                return 1.125;
              },
              ease: "none",
            },
            0
          )
          .fromTo(
            prevImage,
            {
              scale: () => {
                return 1.125;
              },
            },
            {
              scale: () => {
                return 1.25;
              },
              ease: "none",
            },
            0
          );
      });

      ScrollTrigger.create({
        trigger: ".showcase",
        start: () => "top top",
        end: () => "+=" + images.length * window.innerHeight,
        pin: ".side-image-wrap",
      });
    });
    return () => ctx.revert();
  });

  return (
    <div>
      <div className="scroller">
        <section className="showcase ">
          <div className="text-wrap">
            <div className="text-wrapper">
              <div className="text-pin sections-horizontal">
                <h1 className="about-hr-heading">
                  <span className="stroke">01. </span>
                  culture
                </h1>

                <p>
                  We don’t work for clients. We work for our brand partners. And
                  as partners, we make sure to craft disruptive digital
                  solutions using purposeful strategy, beautiful designs &
                  user-centric technology that makes you a part of the very best
                  on the web.
                </p>
              </div>

              <div className="text-pin sections-horizontal">
                <h1 className="about-hr-heading">
                  <span className="stroke">02. </span>
                  ethos
                </h1>

                <p>
                  While we are definitely smarter than we look (it's not
                  difficult), we pride ourselves on being humble and
                  down-to-earth creatures. Our ethos are simple – Keep learning,
                  Keep Growing & even when you think you’ve created the best
                  there is, there is always room for improvement.
                </p>
              </div>

              <div className="text-pin sections-horizontal">
                <h1 className="about-hr-heading">
                  <span className="stroke">03. </span>
                  attitude
                </h1>

                <p>
                  You might have intricate requirements but we’ve got ambition,
                  imagination, skills and the tools to match them. That’s 4-to-1
                  to us. It just can’t go wrong. Can it?
                </p>
              </div>

              <div className="text-pin sections-horizontal">
                <h1 className="about-hr-heading">
                  <span className="stroke">04. </span>
                  experience
                </h1>

                <p>
                  An agency is only as strong as its people. Our team members
                  come with a solid experience of working with well-known
                  agencies, for Fortune 500 brands, running their own
                  businesses, designing game changing products and even
                  competing at professional level in sports.
                </p>
              </div>

              <div className="text-pin sections-horizontal">
                <h1 className="about-hr-heading">
                  <span className="stroke">05. </span>
                  magic
                </h1>

                <p>
                  Yes! You read that one just about right. We make magic... We
                  just don’t do campaigns. We focuson user driven outcomes and
                  endeavour to create meaningful connections between brands and
                  its users. Somewhere between devising a strategy.
                </p>
              </div>
            </div>
          </div>
          <div className="image-wrap">
            <div
              className="image blue"
              data-cursor-text="Culture"
              data-cursor-size="100px"
            />
            <div
              className="image red"
              data-cursor-text="Ethos"
              data-cursor-size="100px"
            />
            <div
              className="image green"
              data-cursor-text="Attitude"
              data-cursor-size="100px"
            />
            <div
              className="image orange"
              data-cursor-text="Experience"
              data-cursor-size="100px"
            />
            <div
              className="image purple"
              data-cursor-text="Magic"
              data-cursor-size="100px"
            />
          </div>
          {/* <div className="side-image-wrap">
            <div className="side-image blue" />
            <div className="side-image red" />
            <div className="side-image green" />
            <div className="side-image orange" />
            <div className="side-image purple" />
          </div> */}
        </section>
      </div>
    </div>
  );
}
