import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import LazyVideo from "../LazyVideo";
import Image from "next/image";
import { SplitInLineOnly } from "@/lib/splitText";

gsap.registerPlugin(ScrollTrigger);

const GifSection = () => {
    const textRef = useRef(null);

    // Text Fill Animation on Scroll
    useEffect(() => {
        SplitInLineOnly(textRef.current);
        const text = textRef.current.querySelectorAll(".line");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(text, {
                scrollTrigger: {
                    trigger: textRef.current,
                    scrub: 0.5,
                    start: "top 90%",
                    end: "bottom 30%",
                },
                backgroundPositionX: "0%",
                stagger: 1,
                duration: 1,
            });
        });
        return () => ctx.revert();
    });

    return (
        <>
            <section className="h-full w-full" id="gif">
                <div className="w-[80%] py-[10%] mx-auto tablet:w-[90%] tablet:py-[15%] mobile:py-[20%]">
                    <div className="grid grid-cols-2 justify-items-center gap-y-[5vw] tablet:gap-[10vw] mobile:block mobile:space-y-[10%]">
                        {content.map((item, index) => (
                            <Card
                                className={`${index === 2 ? "col-span-2" : "col-span-1"}`}
                                key={index}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                videoSrc={item.videoSrc}
                            />
                        ))}
                    </div>

                    <div className="text-center text-[3vw] font-medium font-heading pt-[15%] w-[85%] mx-auto tablet:text-[5.5vw] tablet:w-[90%] tablet:pt-[20%] mobile:text-[6vw]">
                        <p ref={textRef} className="text-fill kerning-none">
                            We don&apos;t adapt to change, we anticipate it!{" "}<span className="text-[2.5vw] text-white tablet:text-[5vw] mobile:!hidden">💡{" "}</span><br />
                            Our digital solutions have transformed brands <br /> and empowered businesses globally.{" "}<span className="text-[2.5vw] text-white tablet:text-[5vw] mobile:!hidden">🌎 🚀</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GifSection;

const Card = ({ videoSrc, poster, title, id, description, dataSpeed, className = "" }) => {
    return (
        <>
            <div className={`w-[24vw] h-[24vw] relative group overflow-hidden tablet:w-[40vw] tablet:h-[40vw] mobile:w-full mobile:h-[90vw] fadeup ${className}`} data-speed={dataSpeed}>
                <LazyVideo videoSrc={videoSrc} poster={poster} className="h-full w-full object-cover absolute top-0 left-0 brightness-90" autoPlay muted loop playsInline />
                <div className="relative top-0 left-0 h-full w-full z-[1] p-[1vw] flex flex-col justify-between tablet:p-[2vw] mobile:p-[4vw]">
                    <Image className="ml-auto" src="/assets/about/gif/arrow.png" width={30} height={30} priority={false} alt="arrow icon" />
                    <h3 className="text-white dark:text-black font-heading text-[3vw] mx-auto tablet:text-[5vw] mobile:text-[10vw]">{title}</h3>
                    <p className="stroke text-[3vw] text-white1 dark:text-black1 leading-[1] font-heading tablet:text-[5vw] mobile:text-[8vw]">{id}</p>
                </div>
                <div className="absolute p-[2vw] bg-white z-[2] top-0 left-0 bottom-0 right-0 flex items-center text-left translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0">
                    <p className="text-[1.2vw] font-medium leading-[1.7] text-black tablet:text-lg">{description}</p>
                </div>
            </div>
        </>
    )
}

const content = [
    {
        id: "01",
        title: "culture",
        description: "We don't work for clients. We work for our brand partners. And as partners, we make sure to craft disruptive digital solutions using purposeful strategy, beautiful designs & user-centric technology that makes you a part of the very best on the web.",
        poster: "/assets/about/gif/culture.webp",
        videoSrc: "/assets/about/gif/culture.mp4",
        dataSpeed: 4,
    },
    {
        id: "02",
        title: "attitude",
        description: "You might have intricate requirements but we've got ambition, imagination, skills and the tools to match them. That's 4-to-1 to us. It just can't go wrong. Can it?",
        poster: "/assets/about/gif/attitude.webp",
        videoSrc: "/assets/about/gif/attitude.mp4",
        dataSpeed: 5,
    },
    {
        id: "03",
        title: "ethos",
        description: "While we are definitely smarter than we look (it's not difficult), we pride ourselves on being humble and down-to-earth creatures. Our ethos are simple – Keep learning, Keep Growing & even when you think you’ve created the best there is, there is always room for improvement.",
        poster: "/assets/about/gif/ethos.webp",
        videoSrc: "/assets/about/gif/ethos.mp4",
        dataSpeed: 3.5,
    },
    {
        id: "04",
        title: "experience",
        description: "An agency is only as strong as its people. Our team members come with a solid experience of working with well-known agencies, for Fortune 500 brands, running their own businesses, designing game changing products and even competing at professional level in sports.",
        poster: "/assets/about/gif/experience.webp",
        videoSrc: "/assets/about/gif/experience.mp4",
        dataSpeed: 2.5,
    },
    {
        id: "05",
        title: "magic",
        description: "Yes! You read that one just about right. We make magic... We just don’t do campaigns. We focus on user driven outcomes and endeavour to create meaningful connections between brands and its users. Somewhere between devising a strategy.",
        poster: "/assets/about/gif/magic.webp",
        videoSrc: "/assets/about/gif/magic.mp4",
        dataSpeed: 3.2,
    },
]