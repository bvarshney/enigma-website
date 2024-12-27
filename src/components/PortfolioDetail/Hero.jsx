import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = ({ cursorColor, title, industry, year, link, linkText }) => {
    const text = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(text.current, {
                rotationX: -50,
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
            })
            .from("#firstFade", {
                y: 100, 
                opacity: 0,
                duration: 1.3,
                stagger: 0.1
            }, "-=1")
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id="hero" data-cursor-text="" data-cursor-size="10px">
            <div className="w-[75%] mx-auto h-[75vh] flex items-center justify-between tablet:h-[45vh] tablet:w-[90%] tablet:pt-[5%] mobile:h-[120vw] mobile:pt-[10%]">
                <div className="w-full flex items-end justify-between font-heading font-medium mobile:block">
                    <div className="w-[80%] mobile:w-full mobile:mb-[8%]">
                        <Link id="firstFade" href={link} target="_blank" className="block w-fit mb-[5%] mobile:mb-[8%]" data-cursor-text="Visit" data-cursor-size="60px" data-cursor-color={cursorColor}>
                            <div className="uppercase text-[1.2vw] flex items-center gap-2 tablet:text-[2.5vw] mobile:text-[4vw]">
                                <span>{linkText}</span>
                                <Image className="inline-block w-[0.8vw] tablet:w-[1.8vw] mobile:w-[3vw] dark:invert" src="/assets/icons/arrow-right.png" alt="arrow icon" width={15} height={15} />
                            </div>
                        </Link>
                        <h1 ref={text} className="text-[4.5vw] text-black2 leading-[1.4] tablet:text-[5.5vw] mobile:text-[8vw] dark:text-black">
                            {title}
                        </h1>
                    </div>
                    <div id="firstFade" className="text-[1.2vw] uppercase text-right w-1/4 pb-[1%] tracking-wider tablet:text-[2.5vw] mobile:text-left mobile:text-[4vw]">
                        <p>{industry}</p>
                        <p>{year}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;