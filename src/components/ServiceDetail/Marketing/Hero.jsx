"use client"
import { ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    TitleAnim();
    ParaAnim();
    const container = useRef(null);

    useEffect(() => {
        const text = container.current.querySelectorAll(".hero-anim");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(text, {
                    rotationX: -80,
                    opacity: 0,
                    translateY: 300,
                    transformPerspective: "1000",
                    transformOrigin: "top center",
                },
                {
                    delay: 2.8,
                    duration: 1,
                    rotationX: 0,
                    opacity: 1,
                    translateY: 0,
                    stagger: 0.2,
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={container} id="hero" data-cursor-size="10px" data-cursor-text="">
                <div className="w-[85%] mx-auto h-screen flex justify-center items-center">
                    <div className="relative w-[94%] mobile:w-full">
                        <h1 className="text-[11vw] font-medium leading-[1.2] font-heading text-black2 flex flex-col tablet:text-[16vw] mobile:text-[16vw]">
                            <div className="text-primary hero-anim w-fit" data-cursor-magnetic data-cursor-background-image="/assets/cursor/4.gif" data-cursor-size="15vw" data-cursor-color="#000">
                                Organic
                            </div>
                            <div className="hero-anim self-end tablet:self-start" data-cursor-magnetic data-cursor-background-image="/assets/cursor/5.gif" data-cursor-size="15vw" data-cursor-color="#000">
                                Marketing
                            </div>
                        </h1>
                        <p className="absolute right-0 top-[15%] text-[1.4vw] font-medium text-black2 leading-[1.5] w-[30vw] hero-anim tablet:static tablet:w-[85%] tablet:text-[4vw] tablet:mt-[5%] tablet:text-justify mobile:text-[5vw] mobile:w-[90%] mobile:mt-[10%]">
                            We leverage the power of Emotion, Consumer Psychology & Technology to propel your success in the enigmatic realm of bits & bytes.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;