import React, { useEffect } from 'react';
import gsap from 'gsap';

const PageLoader = ({ text }) => {
  useEffect(() => {
    const loaderBars = document.querySelectorAll(".mainLoaderBar");
    const tl = gsap.timeline();

    let ctx = gsap.context(() => {
      tl.from(".loader-wrap-heading p", {
        delay: 0.5,
        y: 200,
        skewY: 10,
        duration: 1,
      }).to(".loader-wrap-heading p", {
        delay: 0.5,
        y: -200,
        skewY: 10,
        duration: 1,
      }).to(loaderBars, {
        height: 0,
        duration: 0.6,
        delay: -0.5,
        ease: "power2.easeIn",
        stagger: 0.1,
      }).to("#loader", {
        y: "-1500",
        opacity: 0,
        ease: "power2.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
      <div className="loader-wrap" id="loader">
        <div className='mainLoaderBg'>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
            <span className='mainLoaderBar' id='loaderbars'></span>
        </div>
        <div className="loader-wrap-heading">
            <span>
                <p>{text}</p>
            </span>
        </div>
      </div>
  );
};

export default PageLoader;
