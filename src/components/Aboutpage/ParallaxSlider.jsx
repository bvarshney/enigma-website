"use client"
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSlider = () => {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const x = 800;
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          scrub: 0.5,
          start: "top bottom",
          end: "bottom top",
        },
      });
      gsap.utils.toArray(".module").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `-=${x}`, autoAlpha: 1, duration: 0.1, ease: "none" },
          "-=0.1"
        );
      });
      gsap.utils.toArray(".module-2").forEach((el, i) => {
        tl.fromTo(
          el,
          { x: 0 },
          { x: `+=${x}`, autoAlpha: 1, duration: 0.1, ease: "none" },
          "-=0.1"
        );
      });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <section ref={container} className="w-full h-full">
        <div className="overflow-hidden w-screen h-screen tablet:h-[50vh]">
          <div className="w-full h-full rotate-45">
            <div className="w-full flex gap-[2vw] flex-col items-center translate-x-[-10%] translate-y-[-25%]">
              <div className="flex flex-nowrap gap-[2vw] module">
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-01.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-02.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-01.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-02.webp" alt="slider image" width={800} height={550} priority={false} />
              </div>
              <div className="flex flex-nowrap gap-[2vw] module-2 translate-x-[-50%]">
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-03.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-04.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-05.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-06.webp" alt="slider image" width={800} height={550} priority={false} />
              </div>
              <div className="flex flex-nowrap gap-[2vw] module">
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-07.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-08.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-09.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-10.webp" alt="slider image" width={800} height={550} priority={false} />
              </div>
              <div className="flex flex-nowrap gap-[2vw] module-2 translate-x-[-50%]">
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-12.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-11.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-12.webp" alt="slider image" width={800} height={550} priority={false} />
                <Image className="w-[45vw]" src="/assets/parallax-slider/slider1/card-11.webp" alt="slider image" width={800} height={550} priority={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ParallaxSlider;