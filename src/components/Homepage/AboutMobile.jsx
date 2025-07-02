"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const AboutMobile = () => {
    const container = useRef(null);
    const image = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);

    useEffect(() => {
        const spans = text1.current.querySelectorAll("span");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=2000 top",
                    scrub: 0.5,
                    pin: true,
                }
            });

            tl.from(image.current, {
                opacity: 0,
                duration: 1,
            })
            .from(spans, {
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                delay: -1
            })
            .to(text1.current, {
                opacity: 0,
                scale: 2,
                duration: 1,
                delay: -0.5,
            })
            .from(text2.current, {
                scale: 2,
                opacity: 0,
                duration: 1,
            })
        });
        return () => ctx.revert();
    }, []);
    return (
        <>
            <section ref={container} className="h-full w-screen overflow-hidden">
                <div className="bg-black3 w-full h-screen relative dark:bg-white">
                    <div className="h-full w-full absolute flex items-center justify-center">
                        <Image
                            priority={false}
                            ref={image}
                            className="w-full h-auto"
                            src="/assets/homepage/about-mobile-light.webp"
                            width={500}
                            height={500}
                            alt="Mobile Light BG"
                        />
                    </div>
                    <div className="w-full h-full relative z-[1] flex items-center justify-center">
                        <Image 
                            className="mobile:w-1/2"
                            priority={false}
                            width={300}
                            height={300}
                            alt="Enigma Logo Image"
                            src="/assets/homepage/mobile-about-bg.webp"
                        />
                        <h2 ref={text1} className="text-white z-[1] absolute font-heading font-medium text-[9vw] text-center dark:text-black">
                            <span>From{" "}</span>
                            <span>Concept{" "}</span>
                            <span>To{" "}</span>
                            <span>Conversion</span>
                        </h2>
                        <h2 ref={text2} className="text-white absolute font-heading font-medium text-[9vw] text-center dark:text-black">
                            We&apos;re Changing The Face of Web
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutMobile