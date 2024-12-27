import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const Hero = () => {
    const lenis = useLenis();
    const head = useRef(null);
    const button = useRef(null);
    const para = useRef(null);

    const onClick = () => {
        lenis.scrollTo("#job-listing", { offset: -50 })
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(head.current, {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            }, {
                delay: 3,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.2,
            })
                .from(para.current, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    delay: -0.5,
                })
                .from(button.current, {
                    opacity: 0,
                    y: 100,
                    duration: 1,
                    delay: -0.5,
                });
        })
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            "#anim",
            {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            },
            {
                delay: 3,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.2,
            }
        ).fromTo("#para-anim", {
            opacity: 0,
            y: 100,

        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            delay: -0.5,
        })
        return () => tl.kill();
    }, []);

    return (
        <>
            <section id="hero">
                <div className="w-[85%] mx-auto text-center">
                    <div className="w-3/5 mx-auto pt-[12vw] pb-7 tablet:w-full tablet:pt-[20vw] tablet:pb-[10vw] mobile:pt-[25vw]">
                        <h1 ref={head} className="text-[6.5vw] tablet:text-[12vw] mobile:text-[12vw] leading-[1.2] font-heading font-medium">
                            Build the <span className="text-primary">Future{" "}</span>of Web With Us!
                        </h1>
                    </div>
                    <div ref={para} className="w-3/4 tablet:w-full mb-16 mx-auto text-gray2 text-[1.5vw] tablet:text-[3.4vw] mobile:text-xl text-center tablet:text-justify mobile:mb-10">
                        <p className="mb-7">
                            Embarking on a career at Enigma isn&apos;t just about a job; it&apos;s about embracing a lifestyle where innovation, creativity, and impact are at the core of everything we do. We don&apos;t just follow trends—we set them. Here, your voice is not only heard but valued and your ideas have the power to reshape the digital landscape.
                        </p>
                        <p>Join us on our mission to build a brighter tomorrow through innovation & creativity.</p>
                    </div>
                    <div ref={button} className="w-fit mx-auto">
                        <a href="#job-listing" onClick={onClick} className="block hover:bg-primary hover:shadow-lg duration-300 text-primary hover:text-white border-primary border-2 rounded-full py-3 px-10 tablet:py-3 tablet:px-6">
                            <div className="flex gap-3 items-center justify-center">
                                <span className="font-medium text-xl tablet:text-2xl mobile:text-xl">View Openings</span>
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <g id="style=stroke">
                                        <g id="arrow-long-right">
                                            <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.94995 12C1.94995 12.4142 2.28574 12.75 2.69995 12.75L21.2 12.75C21.6142 12.75 21.95 12.4142 21.95 12C21.95 11.5858 21.6142 11.25 21.2 11.25L2.69995 11.25C2.28574 11.25 1.94995 11.5858 1.94995 12Z" />
                                            <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M14.1696 4.46967C13.8767 4.76256 13.8767 5.23744 14.1696 5.53033L20.4625 11.8232C20.5601 11.9209 20.5601 12.0791 20.4625 12.1768L14.1696 18.4697C13.8767 18.7626 13.8767 19.2374 14.1696 19.5303C14.4625 19.8232 14.9374 19.8232 15.2303 19.5303L21.5232 13.2374C22.2066 12.554 22.2066 11.446 21.5232 10.7626L15.2303 4.46967C14.9374 4.17678 14.4625 4.17678 14.1696 4.46967Z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;