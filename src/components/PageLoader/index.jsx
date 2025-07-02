"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageLoader = ({ loaderText }) => {
    const text = useRef(null);
    const loaderBar = useRef(null);
    const loader = useRef(null);

    useEffect(() => {
        const loaderBars = loaderBar.current.querySelectorAll(".mainLoaderBar");
        const tl = gsap.timeline();
        let ctx = gsap.context(() => {
            tl.to(text.current, {
                delay: 0.5,
                y: 0,
                skewY: 0,
                skewX: 0,
                rotate: 0,
                scale: 1,
                duration: 0.5,
            }).to(text.current, {
                delay: 0.5,
                skewY: -10,
                yPercent: -200,
                duration: 0.8,
            }).to(loaderBars, {
                height: 0,
                duration: 0.6,
                ease: "power2.easeIn",
                stagger: 0.1,
                onComplete() {
                    gsap.set(loader.current, {
                        opacity: 0,
                        display: "none",
                        visibility: "hidden",
                    });
                }
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={loader} className="fixed top-0 left-0 right-0 bottom-0 z-[999] flex oveflow-hidden items-center justify-center bg-transparent" id="loader">
            <div ref={loaderBar} className='mainLoaderBg flex w-screen h-screen absolute'>
                {Array(5).fill().map((_, i) => (
                    <span key={i} className='mainLoaderBar w-1/5 h-full bg-black' id='loaderbars' />
                ))}
            </div>
            <div className="loader-wrap-heading tablet:p-[5%] mobile:p-[2.5%]">
                <span className='overflow-hidden inline-flex'>
                    <p ref={text} className='font-heading text-white1 skew-y-6 translate-y-full capitalize z-[20] text-[48px] mobile:text-[32px]'>{loaderText}</p>
                </span>
            </div>
        </div>
    );
};

export default PageLoader;