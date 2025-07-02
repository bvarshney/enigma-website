"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Showreel = ({ onClick, isShowreel }) => {

    const modalRef = useRef(null);

    useEffect(() => {
        if (isShowreel) {
            const tl = gsap.timeline();
            tl.fromTo(
                modalRef.current,
                {
                    opacity: 0,
                    translateY: -100,
                },
                {
                    duration: 1,
                    translateY: 0,
                    opacity: 1,
                }
            );
            return () => tl.kill();
        }
    }, [isShowreel]);

    if (!isShowreel) {
        return null;
    }

    return (
        <>
            <button aria-label="Close Showreel" onClick={onClick} className="w-full h-full p-4 bg-[#00000099] backdrop-blur-lg">
                <div ref={modalRef} className="h-full w-full rounded-2xl overflow-hidden tablet:h-1/2 mobile:h-[30%]">
                    <video
                        className="object-cover h-full w-full"
                        src="/showreel.mp4"
                        autoPlay
                        playsInline
                        loop
                    />
                </div>
            </button>
        </>
    )
}

export default Showreel;