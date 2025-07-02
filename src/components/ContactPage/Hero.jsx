"use client"
import { fadeUp , TitleAnim} from "@/lib/gsapAnimations";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    fadeUp();
    TitleAnim();

    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const videoContainer =useRef(null);

    useEffect(() => {
        const herotext = containerRef.current.querySelectorAll(".hero-anim");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(herotext, {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            }, {
                delay: 2.8,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.1,
            })
           .from(videoContainer.current, {
            yPercent: 10,
            opacity: 0,
            duration: 1,
            delay: -0.5,
           })
        })
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(videoContainer.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    scrub: true,
                    end: "40% top",
                },
                scale: 1,
                rotate: 0,
                y: 0,
                duration: 1,
            })
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const videoSrc = "/assets/videos/contact-video.webm";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 5000);
    }, []);
    
    return (
        <>
            <section ref={containerRef} id="hero">
                <div className="w-[90%] mx-auto h-full pt-[13%] tablet:pt-[30%] mobile:pt-[40%] tablet:pb-[10%]">
                    <div className="w-full relative mobile:w-[95%] mx-auto">
                        <h1 className="text-[11vw] text-black2 font-heading font-medium leading-[1.1] tablet:text-[16vw] mobile:text-[19vw]">
                            <div>
                                <span data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/3.gif" data-cursor-color="#000" className="inline-block pr-[2%] hero-anim">Let&apos;s{" "}</span>
                                <span data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/3.gif" data-cursor-color="#000" className="text-primary inline-block hero-anim">Work</span>
                            </div>
                            <div className="text-right hero-anim tablet:text-left" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/3.gif" data-cursor-color="#000">
                                <span>Together</span>
                            </div>
                        </h1>
                        <p className="w-[22vw] text-[1.2vw] right-[2%] top-[15%] absolute hero-anim tablet:static tablet:w-[80%] tablet:text-[3.7vw] tablet:mt-[10%] mobile:w-full mobile:text-[5.5vw] mobile:mt-[15%]">
                            Old ways won&apos;t open new doors. If you have an interesting idea, <span className="font-medium text-black">Let&apos;s Build the Future Together!</span>
                        </p>
                    </div>
                    <div className="w-full h-[90vh] mt-[10%] tablet:h-[60vw] tablet:mt-[15%] mobile:h-[50vw] mobile:mt-[20%]">
                        <div ref={videoContainer} className="w-full h-full overflow-hidden rotate-[20deg] scale-50 tablet:scale-75 translate-y-[-20%] tablet:translate-y-0">
                            <video ref={videoRef} className="w-full h-full object-cover" poster="/assets/videos/contact-video-poster.webp" autoPlay muted playsInline loop />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;