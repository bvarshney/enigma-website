import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SliderMarquee() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let container = document.getElementById("container");
      let scrollContainer = document.getElementById("scroll-container");

      // 4900 is total width of all images
      const X = 2000 - container.offsetWidth;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainer,
          scrub: true,
          start: "-1000 top",
          end: "+=2000",
          pin: false,
          toggleActions: "restart pause reverse pause",
        },
      });

      gsap.utils.toArray(".module").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `-=${X}`, autoAlpha: 1, duration: 0.1 },
          "-=0.1"
        );
      });

      gsap.utils.toArray(".module-2").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `+=${X}`, autoAlpha: 1, duration: 0.1 },
          "-=0.1"
        );
      });
    });
    return () => ctx.revert();
  });

  // Parallax Image
  useEffect(() => {
    gsap.utils.toArray(".parallax-slider").forEach(function (container) {
      let image = container.querySelector("img");

      gsap.to(image, {
        x: () => image.offsetHeight - container.offsetHeight,
        ease: "none",
        startAt: { x: "-10%" },
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
          markers: false,
          invalidateOnRefresh: true,
        },
        x: "10%",
      });
    });
  });

  return (
    <div>
      <div id="scroll-container">
        <div id="container" className="cf-10">
          <div className="module parallax-slider">
            <img src="/assets/slider/card-02.webp" alt="image 1" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-03.webp" alt="image 2" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-03.webp" alt="image 3" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-03.webp" alt="image 4" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-02.webp" alt="image 5" />
          </div>
          <div className="module"></div>
          <div className="module"></div>
        </div>

        <div id="container" className="cr-10">
          <div className="module-2 parallax-slider">
            <img src="/assets/slider/card-04.webp" alt="image 1" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="/assets/slider/card-05.webp" alt="image 2" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="/assets/slider/card-06.webp" alt="image 3" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/jumNGn7kBl0" alt="image 4" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/ocku3zjNM7k" alt="image 5" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/Nlax2tu89bU" alt="image 6" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/x6qwirOyK10" alt="image 6" />
          </div>
        </div>

        <div id="container" className="minus-10">
          <div className="module parallax-slider">
            <img
              src="/assets/slider/https://source.unsplash.com/jumNGn7kBl0"
              alt="image 1"
            />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-07.webp" alt="image 2" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-08.webp" alt="image 3" />
          </div>
          <div className="module parallax-slider">
            <img src="/assets/slider/card-09.webp" alt="image 4" />
          </div>
          <div className="module parallax-slider">
            <img src="https://source.unsplash.com/ocku3zjNM7k" alt="image 5" />
          </div>
          <div className="module parallax-slider">
            <img src="https://source.unsplash.com/Nlax2tu89bU" alt="image 6" />
          </div>
          <div className="module">
            <img src="https://source.unsplash.com/x6qwirOyK10" alt="image 6" />
          </div>
        </div>

        <div id="container" className="cl-10">
          <div className="module-2 parallax-slider">
            <img src="/assets/slider/card-01.webp" alt="image 1" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="/assets/slider/card-06.webp" alt="image 2" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/WDBUAblF48U" alt="image 3" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/jumNGn7kBl0" alt="image 4" />
          </div>
          <div className="module-2 parallax-slider">
            <img src="https://source.unsplash.com/ocku3zjNM7k" alt="image 5" />
          </div>
          <div className="module-2">
            <img src="https://source.unsplash.com/Nlax2tu89bU" alt="image 6" />
          </div>
          <div className="module-2">
            <img src="https://source.unsplash.com/x6qwirOyK10" alt="image 6" />
          </div>
        </div>
      </div>
    </div>
  );
}
