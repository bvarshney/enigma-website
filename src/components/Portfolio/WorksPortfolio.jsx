"use client"
import { useRef, useEffect } from "react";
import Double from "./Double";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { SplitInLineWordChar } from "@/lib/splitText";
import { Media } from "@/lib/media";
import { projectData } from "./projectData";
import MobilePortfolio from "./MobilePortfolio";

gsap.registerPlugin(ScrollTrigger);

const WorksPortfolio = () => {
    const container = useRef(null);
    const text = useRef(null);
    const head = useRef(null);

    useEffect(() => {
        const heading = head.current.querySelectorAll("span");
        SplitInLineWordChar(text.current);
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
                    stagger: 0.05,
                    delay: -0.8,
                })
        });
        return () => ctx.revert();
    }, [])

    return (
        <section ref={container} id="portfolio" className="w-full h-full">
            <div className="w-[80%] mx-auto py-[10%] tablet:py-[15%] tablet:w-[85%]">
                <div className="relative w-[90%] mx-auto tablet:w-full">
                    <h2 ref={head} className="text-[9vw] font-medium leading-[1] font-heading text-left overflow-hidden tablet:text-[12vw] mobile:text-[14vw]">
                        <span className="block text-black1">Our Work{" "}</span>
                        <span className="text-primary indent-[18vw] block tablet:text-right tablet:indent-0">Showcase</span>
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
                        <Double projects={[projectData[6], projectData[7]]} reversed={true} />
                        <Double projects={[projectData[8], projectData[9]]} />
                    </div>
                </Media>

                <Media lessThan="desktop">
                    <div className="pt-[10%] pb-[8vw]">
                        <MobilePortfolio projectData={projectData}/>
                    </div>
                </Media>
            </div>
        </section>
    )
}

export default WorksPortfolio;