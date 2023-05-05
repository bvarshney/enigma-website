import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Swiper from "swiper";
import Link from "next/link";

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
          loop: false,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 0.5,
        });
      });
      // Scroll triggered movement
      const tl = new gsap.timeline();

      tl.set(carousel, { willChange: "transform" });

      tl.fromTo(
        carousel[0],
        {
          x: 350,
        },
        {
          x: 0,
          ease: "none",
        },
        0
      );

      tl.fromTo(
        carousel[1],
        {
          x: 2000,
        },
        {
          x: 0,
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
        refreshPriority: -14,
      });
    });
  });
  return (
    <div>
      <div className="cb-layout">
        <div className="cb-content">
          <div className="project-slider-heading">
            <h1>
              More Projects{" "}
              <span>
                <img
                  src="/assets/casestudies/vector.webp"
                  alt="Png"
                  id="case-study-arrow"
                />
              </span>
            </h1>
          </div>
          <section className="cb-marquee">
            <div className="cb-marquee-content">
              <div className="cb-marquee-main project-marquee-main">
                <div
                  className="cb-marquee-carousel project-carousel caro-1"
                  data-cursor-text="Drag"
                  data-cursor-size="100px"
                >
                  <div className="cb-marquee-items">
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/kedarkala">
                        <Image
                          src="/assets/casestudies/kedarkala.png"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>Kedarkala</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/patronum">
                        <Image
                          src="/assets/projects/new-project/patronum.webp"
                          width={2000}
                          height={2000}
                          alt="Slider"
                          className="wragby"
                        />
                        <h2>Patronum</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/gcm">
                        <Image
                          src="/assets/projects/new-project/gcm.webp"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>gcm</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/dharan">
                        <Image
                          src="/assets/casestudies/dharan.png"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>Dharan</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/pdtl">
                        <Image
                          src="/assets/projects/new-project/pdtl.webp"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>PDTL</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/dmtca">
                        <Image
                          src="/assets/projects/dmtca.png"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>DMTCA</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/quickx">
                        <Image
                          src="/assets/projects/quick-s.png"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>QuickX</h2>
                      </Link>
                    </div>
                    <div className="cb-marquee-item project-marquee-item">
                      <Link href="/certvault">
                        <Image
                          src="/assets/projects/certvault.webp"
                          width={2000}
                          height={2000}
                          alt="Slider"
                        />
                        <h2>Certvault</h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
