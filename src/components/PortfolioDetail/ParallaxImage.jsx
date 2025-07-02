"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxImage = ({ imgSrc, alt, cursorColor, cursorText, id="" }) => {
    const container = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: container.current,
                    scrub: true,
                    start: "top bottom",
                    end: "bottom top",
                },
                y: "25%",
                ease: "none",
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} id="parallax-image">
            <div className="w-[90%] mx-auto" id={id}>
                <div className="h-[90vh] block overflow-hidden relative tablet:h-[40vh]" data-cursor-color={cursorColor} data-cursor-text={cursorText} data-cursor-size="100px">
                    <Image ref={imageRef} className="w-full h-full absolute top-0 left-0 translate-y-[-25%] object-cover tablet:!h-[120%] mobile:!h-[140%] mobile:translate-y-[-50%]" src={`/assets/portfolio/detail${imgSrc}`} alt={alt} fill />
                </div>
            </div>
        </section>
    )
}

export default ParallaxImage;