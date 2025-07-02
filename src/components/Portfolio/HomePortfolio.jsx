"use client"
import { useRef, useEffect } from "react";
import Double from "./Double";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitInWordChar } from "@/lib/splitText";
import Link from "next/link";
import { Media } from "@/lib/media";
import { projectData } from "./projectData";
import MobilePortfolio from "./MobilePortfolio";

gsap.registerPlugin(ScrollTrigger);

const HomePortfolio = () => {
    const container = useRef(null);
    const text = useRef(null);
    const head = useRef(null);

    useEffect(() => {
        const heading = head.current.querySelectorAll("span");
        SplitInWordChar(text.current);
        const lines = text.current.querySelectorAll(".word");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                }
            });
            tl.from(heading, {
                yPercent: 100,
                opacity: 0,
                ease: "Power3.inOut",
                skewY: -5,
                duration: 1.2,
                stagger: 0.2,
            })
                .from(lines, {
                    yPercent: 100,
                    duration: 1,
                    opacity: 0,
                    stagger: 0.01,
                    delay: -0.8,
                })
        });
        return () => ctx.revert();
    }, [])

    const mobileProject = projectData.slice(0, 6);

    return (
        <section ref={container} id="portfolio" className="w-full h-full">
            <div className="w-[80%] mx-auto py-[10%] tablet:py-[15%] tablet:w-[85%]">
                <div className="relative w-[90%] mx-auto tablet:w-full">
                    <h2 ref={head} className="text-[9vw] font-medium leading-[1] font-heading text-left overflow-hidden tablet:text-[12vw] mobile:text-[14vw]">
                        <span className="block text-black1">Selected{" "}</span>
                        <span className="text-primary indent-[18vw] block tablet:text-right">Projects</span>
                    </h2>
                    <p ref={text} className="text-[1.2vw] text-justify leading-[1.7] w-[25vw] absolute top-[1.5vw] right-0 tablet:hidden" id="animated-para">
                        Our showcase of a spectrum of Innovative Collaborations, Redefined Digital Experiences, and Brand Transformations.
                    </p>
                </div>

                <Media greaterThan="tablet">
                    <div className="pt-[2vw]">
                        <Double projects={[projectData[0], projectData[1]]} />
                        <Double projects={[projectData[2], projectData[3]]} reversed={true} />
                        <Double projects={[projectData[4], projectData[5]]} />
                    </div>
                </Media>

                <Media lessThan="desktop">
                    <div className="pt-[10%] pb-[8vw]">
                        <MobilePortfolio projectData={mobileProject}/>
                    </div>
                </Media>

                <div className="flex justify-center w-full">
                    <Link data-cursor-exclusion data-cursor-size="80px" href="/our-portfolio" className="block w-fit h-fit group">
                        <div className="px-[5vw] py-[1.5vw] text-black1 relative w-fit border-[0.5px] border-current rounded-full tablet:py-[2vw] overflow-hidden">
                            <span className="font-heading font-medium text-[1.4vw] z-[1] relative transition-colors duration-300 group-hover:text-white tablet:text-[3vw] mobile:text-[5vw]">View All Projects</span>
                            <div className="absolute w-[15vw] h-[15vw] group-hover:scale-[2] tablet:w-[20vw] tablet:h-[20vw] left-1/2 -translate-x-1/2 bottom-0 bg-black translate-y-full group-hover:translate-y-1/2 transition-all duration-500 rounded-[70%] group-hover:rounded-none ease-out" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomePortfolio;