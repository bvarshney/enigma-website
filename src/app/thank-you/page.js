"use client"
/* eslint-disable @next/next/no-html-link-for-pages */
import { Cursor } from "@/components/Cursor";
import { fadeUp } from "@/lib/gsapAnimations";
import React, { useEffect, useState } from "react";

export default function ThankYou() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {

    const countdownInterval = setInterval(() => {
      if (countdown > 1) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(countdownInterval);
        window.location.href = "/";
      }
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown]);

  fadeUp();

  return (
    <>
      <Cursor />
      <section id="thankyou-page">
        <div className="h-screen w-screen flex justify-center items-center flex-col text-center">

          <h1 id="h1" className="text-[10vw] font-medium font-heading tablet:text-[18vw] fadeup" data-cursor-magnetic data-cursor-size="300px" data-cursor-exclusion>
            Hoooray <span className="text-primary">!</span>
          </h1>

          <p id="anim" className="text-[1.5vw] font-medium tablet:text-[4.5vw] w-[85%] fadeup">
            It is a pleasure to meet ya! Give us a day and we will schedule our first date.
          </p>

          <div className='mt-10 fadeup' id="anim">
            <a href="/" className="group inline-flex items-center justify-center overflow-hidden rounded-full leading-[1.5] font-heading text-[2vw] tablet:text-[6vw] px-12 py-2 relative border">
              <span className="btn_CTA-ripple block w-full h-full bg-current absolute translate-y-full rounded-tl-[50%] rounded-tr-[50%] group-hover:translate-y-0 group-hover:rounded-[0] duration-500 ease-in-out" />
              <span className='relative z-10 group-hover:text-white duration-500'>Go Home</span>
            </a>
          </div>

          <div className="text-[1.5vw] font-medium mt-10 tablet:text-[4.5vw] w-[85%] fadeup" id="anim">
            <p>Redirecting to the homepage in {countdown} seconds...</p>
          </div>
        </div>
      </section>
    </>
  );
};