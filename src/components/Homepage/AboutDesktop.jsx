import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import LazyVideo from "../LazyVideo";
import styles from "@/styles/cta.module.css";

gsap.registerPlugin(ScrollTrigger);

const AboutDesktop = () => {
    const containerRef = useRef(null);
    const firstScroll = useRef(null);
    const secondScroll = useRef(null);
    const thirdScroll = useRef(null);
    const macbook = useRef(null);
    const ctaText = useRef(null);
    const vidLeft = useRef(null);
    const vidRight = useRef(null);

    useEffect(() => {
        const spans = firstScroll.current.querySelectorAll("span");
        let ctx = gsap.context(() => {
            const t = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "-400 top",
                    end: "top top",
                    scrub: 0.5,
                }
            });
            t.from([spans[0], spans[1]], {
                opacity: 0,
                duration: 0.5,
                stagger: 0.5,
                ease: "none"
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=4000 top",
                    pin: true,
                    scrub: 0.5,
                }
            });

            tl.from([spans[2], spans[3]], {
                opacity: 0,
                duration: 0.5,
                stagger: 0.5,
                ease: "none"
            })
                .to(firstScroll.current, {
                    scale: 1.5,
                    duration: 1,
                })
                .to(secondScroll.current, {
                    opacity: 1,
                    duration: 1,
                    delay: -0.6,
                })
                .from(".h___2", {
                    scale: 1.8,
                    opacity: 0,
                    duration: 2,
                })
                .from(macbook.current, {
                    scale: 1.5,
                    duration: 2,
                    opacity: 0,
                })
                .to(".h___2", {
                    opacity: 0,
                    duration: 0.5,
                })
                .to(macbook.current, {
                    scale: 2,
                    duration: 1,
                    delay: 0.5,
                    opacity: 0,
                })
                .from(thirdScroll.current, {
                    opacity: 0,
                    duration: 1,
                    delay: 0
                })
                .to(vidLeft.current, {
                    xPercent: -60,
                    duration: 2,
                    delay: 1,
                    ease: "power1.inOut",
                })
                .to(vidRight.current, {
                    xPercent: 60,
                    ease: "power1.inOut",
                    duration: 2,
                    delay: -2,
                })
                .from(ctaText.current, {
                    scale: 0.7,
                    opacity: 0,
                    duration: 1,
                    ease: "none",
                    delay: -2,
                })
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={containerRef} id="about" className="w-screen h-screen mt-[5vw]">
                <div className="w-full h-full overflow-hidden relative">
                    <div id="first-scroll" className="h-full flex items-center justify-center absolute w-full">
                        <h2 ref={firstScroll} className="text-[6.5vw] text-black2 font-heading font-medium tablet:text-[9vw] tablet:text-center">
                            <span>From{" "}</span>
                            <span>Concept{" "}</span>
                            <span>To{" "}</span>
                            <span>Conversion</span>
                        </h2>
                    </div>

                    <div ref={secondScroll} id="second-scroll" className="bg-black dark:bg-white opacity-0 w-full h-full z-[1] absolute flex items-center justify-center">
                        <h2 className="text-[5vw] h___2 font-medium text-white font-heading dark:text-black tablet:text-[9vw] tablet:text-center">We&apos;re Changing The Face of Web</h2>
                        <div ref={macbook} className="absolute w-[60%] z-[-1]">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/assets/homepage/macbook-pro.webp"
                                    priority={false}
                                    alt="macbook-pro"
                                    width={1152}
                                    height={800}
                                />
                                <div className="absolute top-[5%] left-1/2 z-[-1] -translate-x-1/2 h-[70%] w-[78%] mx-auto">
                                    <LazyVideo
                                        loop
                                        controls={false}
                                        muted
                                        playsInline
                                        autoPlay
                                        videoSrc="/assets/homepage/ea-logo-video.webm"
                                        type="video/webm"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={thirdScroll} className="bg-white1 w-full h-full absolute top-0 left-0 z-[2]">
                        <div className="flex items-center justify-center h-full w-full relative">
                            <div ref={ctaText} className="w-[36.8%] text-center">
                                <p className="font-medium text-[2vw] leading-[1.4] mb-[1.5vw] text-center">
                                    Empowered by neuromarketing principles, our UI UX and web design services open endless opportunities for each brand we partner with. <br /> Let&apos;s amplify your potential! 🚀
                                </p>
                                <Link href="/get-in-touch" className={`${styles.enCta} text-[2vw] font-heading`} data-cursor-exclusion data-cursor-size="100px">
                                    <span className={`relative ${styles.ctaSpan}`}>Say, Hello!</span>
                                    <span className={`${styles.ctaEmoji} ml-2 inline-block`}>👋</span>
                                </Link>
                            </div>
                        </div>

                        <div className="w-screen h-screen py-12 px-8 absolute top-0 left-0 z-[2] pointer-events-none">
                            <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
                                <div ref={vidLeft} className="w-1/2 h-full">
                                    <LazyVideo 
                                        className="w-full h-full object-cover object-left"
                                        poster="/assets/videos/reel-split-left.webp"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        videoSrc="/assets/videos/left.webm"
                                        type="video/webm"
                                    />
                                </div>
                                <div ref={vidRight} className="w-1/2 h-full">
                                    <LazyVideo 
                                        className="w-full h-full object-cover object-right"
                                        poster="/assets/videos/reel-split-right.webp"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        videoSrc="/assets/videos/right.webm"
                                        type="video/webm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutDesktop;