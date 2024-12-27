import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const container = useRef(null);
    const head = useRef(null);

    useEffect(() => {
        const heading = head.current.querySelectorAll(".span");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            });
            tl.from(heading, {
                yPercent: 100,
                opacity: 0,
                ease: "Power3.inOut",
                skewY: -5,
                duration: 1,
                stagger: 0.4,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section id='process'>
            <div className='w-[85%] mx-auto pt-[15%] pb-[10%]'>
                <div ref={container} className='w-[82%] mx-auto tablet:w-full'>
                    <p ref={head} className='text-black2 text-[10vw] font-medium font-heading leading-[1] flex flex-col tablet:text-[12vw] overflow-hidden'>
                        <span className='block span'>This is <span className='text-primary'>how{" "}</span></span>
                        <span className='text-right block span'>we work</span>
                    </p>
                </div>

                <div className='pt-[6%] tablet:pt-[10%]'>
                    {content.map((item, index) => (
                        <Card 
                            key={index}
                            title={item.title}
                            description={item.description}
                            cursorColor={item.cursorColor}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Process;

const Card = ({ cursorColor, title, description }) => {
    const contentContainer = useRef(null);
    const line = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contentContainer.current,
                    start: "top 80%",
                },
            });
            tl.from(line.current, {
                width: 0,
                duration: 0.8,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={contentContainer} data-cursor-color={cursorColor} data-cursor-text={title} data-cursor-size="120px">
            <span ref={line} className='origin-left block w-full h-[1px] bg-gray2' />
            <div className='w-full flex items-start justify-between py-[6%] px-[1%] tablet:py-[10%] mobile:flex-col mobile:px-[2%] mobile:py-[6%] mobile:gap-6 fadeup'>
                <h4 className='text-[3.5vw] uppercase font-medium font-heading tablet:text-[5vw] mobile:text-[7vw]'>{title}</h4>
                <p className='text-[1.7vw] font-medium leading-[1.5] w-[50%] tablet:text-[3vw] tablet:text-justify tablet:w-[55%] mobile:text-[5vw] mobile:w-full'>{description}</p>
            </div>
        </div>
    )
}

const content = [
    {
        title: "Define",
        description: "Develop a thorough understanding of the project, audience, and objectives to formulate a strategy.",
        cursorColor: "#fcba03",
    },
    {
        title: "Design",
        description: "Craft a purposeful design to reflect the objectives and indicate the direction for the entire project.",
        cursorColor: "#00ffdd",
    },
    {
        title: "Implement",
        description: "Bring the design to life in the form of an interactive and functional prototype. Review, refine and optimise.",
        cursorColor: "#CA022C",
    },
    {
        title: "Develop",
        description: "Incorporate implementation and technical components into a highly functional system, ready for review.",
        cursorColor: "#536cd4",
    },
    {
        title: "Deliver",
        description: "Review, refine, test and prepare final product for delivery. Launch and continue to evolve over time.",
        cursorColor: "#bcd15e",
    },
]