import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Swiper from "swiper";

gsap.registerPlugin(ScrollTrigger);

export default function SliderMarquee() {
  useEffect(() => {
    const marquee = document.querySelectorAll(".cb-marquee");

    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll(".cb-marquee-carousel");

      carousel.forEach((e) => {
        const items = e.querySelector(".cb-marquee-items");
        const item = e.querySelectorAll(".cb-marquee-item");

        e.classList.add("swiper-container");
        items.classList.add("swiper-wrapper");
        item.forEach((e) => e.classList.add("swiper-slide"));

        const slider = new Swiper(e, {
          slidesPerView: "auto",
          loop: true,
          freeMode: false,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: false,
        });
      });
      // Scroll triggered movement
      const tl = new gsap.timeline();

      tl.set(carousel, { willChange: "transform" });

      tl.fromTo(
        carousel[0],
        {
          y: -1000,
        },
        {
          y: 0,
          ease: "none",
        },
        0
      );

      tl.fromTo(
        carousel[1],
        {
          y: 500,
        },
        {
          y: 0,
          ease: "none",
        },
        0
      );

      tl.set(carousel, { willChange: "auto" });

      ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      });
    });
  });

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

      //     Text animation
      // gsap.fromTo(
      //   ".module p",
      //   { clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)" },
      //   {
      //     clipPath: "polygon(0% 0%, 26% 0, 26% 49%, 26% 100%, 0% 100%)",
      //     duration: 0.8,
      //     ease: "sine",
      //   }
      // );
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
      {/* <div className="cb-layout">
        <div className="cb-content">
          <section className="cb-marquee">
            <div className="cb-marquee-content">
              <div className="cb-marquee-main">
                <div
                  className="cb-marquee-carousel caro-1"
                  data-cursor-text="Drag"
                  data-cursor-size="100px"
                >
                  <div className="cb-marquee-items">
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/patro.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/wrag.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/pdtl.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/kedar.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="cb-marquee-carousel caro-1"
                  data-cursor-text="Drag"
                  data-cursor-size="100px"
                >
                  <div className="cb-marquee-items">
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/gcm.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item voro">
                      <Image
                        src="/assets/projects/new-project/dharan.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/patro.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                    <div className="cb-marquee-item">
                      <Image
                        src="/assets/projects/new-project/kedar.webp"
                        width={2000}
                        height={2000}
                        alt="Slider"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> */}

      <div id="scroll-container">
        <div id="container" className="cf-10">
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-02.webp"
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-03.webp"
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-03.webp"
              alt="image 3"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-03.webp"
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-02.webp"
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="cr-10">
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider-2/card-04.webp"
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider-2/card-05.webp"
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider-2/card-06.webp"
              alt="image 3"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="minus-10">
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-01.webp"
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-07.webp"
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-08.webp"
              alt="image 3"
              width={800}
              height={550}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-09.webp"
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-07.webp"
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module parallax-slider">
            <Image
              src="/assets/slider-2/card-08.webp"
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module">
            <Image
              src="/assets/slider/card-09.webp"
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        <div id="container" className="cl-10">
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider/card-01.webp"
              alt="image 1"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider/card-06.webp"
              alt="image 2"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider/card-02.webp"
              alt="image 3"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider/card-07.webp"
              alt="image 4"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2 parallax-slider">
            <Image
              src="/assets/slider/card-06.webp"
              alt="image 5"
              width={1000}
              height={1000}
            />
          </div>
          <div className="module-2">
            <Image
              src="/assets/slider/card-01.webp"
              alt="image 6"
              width={1000}
              height={1000}
            />
          </div>
          {/* <div className="module-2">
            <image src="https://source.unsplash.com/x6qwirOyK10" alt="image 6" />
          </div> */}
        </div>
      </div>
    </div>
  );
}
