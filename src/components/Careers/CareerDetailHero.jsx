'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp } from "@/lib/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

export default function CareerDetailHero({ job }) {
    const container = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.set(".header-logo", {
            filter: "invert(1)",
        })
        tl.set(".showreel-btn", {
            color: "#ffffff"
        })
        tl.set(".menuSvg path", {
            stroke: "#ffffff"
        })
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "bottom top",
                end: "bottom -10%",
                toggleActions: "play none none reverse"
            },
            defaults: {
                ease: "none",
            }
        });
        tl.to(".header-logo", {
            filter: "invert(0)",
            duration: 0.4,
        })
        tl.to(".showreel-btn", {
            color: "#1a1a1a",
            duration: 0.4,
        }, "-=0.4")
        tl.to(".menuSvg path", {
            stroke: "#000000",
            duration: 0.4,
        }, "-=0.4")
    });

    fadeUp();


    return (
        <section ref={container} className="relative w-screen overflow-hidden" id="hero">
            {job.mainImage && (
                <Image
                    src={job.mainImage}
                    alt={job.jobTitle}
                    width={1500}
                    priority={true}
                    height={800}
                    className="object-cover absolute w-full  h-full brightness-[0.3]"
                />
            )}
            <div className="w-4/5 tablet:w-[85%] mx-auto flex items-center justify-center h-full relative z-10 py-[8vw] tablet:py-[16vw]">
                <div className="w-full text-white space-y-[1.5vw] dark:invert tablet:space-y-9">
                    <h1 className="text-[5vw] tablet:text-[7vw] font-medium leading-[1.1] font-heading mt-[2vw] tablet:mt-16 title-anim">
                        {job.jobTitle}
                    </h1>
                    <div className="text-2xl mobile:text-xl text-white2 tracking-wide font-body">
                        {job.smallDescription}
                    </div>
                    <div className="flex gap-6 text-xl mobile:flex-col mobile:gap-4">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-8 mb-1"
                                fill="currentColor"
                                viewBox="-5.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                            </svg>
                            <p className="whitespace-nowrap">{job.experience}</p>
                        </div>
                        <div className="flex items-center gap-2 border-x-2 px-6 mobile:border-none mobile:px-0">
                            <svg
                                className="w-8 mb-1"
                                fill="currentColor"
                                viewBox="-5.5 0 32 32"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>
                            </svg>
                            <p className="whitespace-nowrap">{job.salary}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                fill="currentColor"
                                className="w-6 mb-1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 413.099 413.099"
                            >
                                <g>
                                    <path d="M206.549,0L206.549,0c-82.6,0-149.3,66.7-149.3,149.3c0,28.8,9.2,56.3,22,78.899l97.3,168.399c6.1,11,18.4,16.5,30,16.5 c11.601,0,23.3-5.5,30-16.5l97.3-168.299c12.9-22.601,22-49.601,22-78.901C355.849,66.8,289.149,0,206.549,0z M206.549,193.4 c-30,0-54.5-24.5-54.5-54.5s24.5-54.5,54.5-54.5s54.5,24.5,54.5,54.5C261.049,169,236.549,193.4,206.549,193.4z"></path>
                                </g>
                            </svg>
                            <p className="whitespace-nowrap">{job.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}