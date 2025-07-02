"use client"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const containerRef = useRef(null);
    const rightSectionRef = useRef(null);
    const leftSectionRef = useRef(null);

    useEffect(() => {
        if (globalThis.innerWidth > 1200) {
            const images = leftSectionRef.current.querySelectorAll(".image-container");
            let cards = rightSectionRef.current.querySelectorAll(".card");
            let ctx = gsap.context(() => {
                gsap.to(leftSectionRef.current, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        pin: leftSectionRef.current,
                        pinSpacing: true,
                        start: "top -10%",
                        end: "bottom bottom",
                        markers: false
                    }
                });

                if (cards) {
                    cards.forEach((card, i) => {
                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: card,
                                scrub: 1,
                                start: "top top-=600",
                                markers: false,
                            }
                        });
                        tl.to(images[i], {
                            zIndex: "1",
                        })
                        tl.to(images[i], {
                            opacity: 0,
                            duration: 1,
                            scale: 1.2,
                            ease: "power4.out"
                        }, "-=1")
                    })
                }
            });
            return () => ctx.revert();
        }
    }, []);

    return (
        <>
            <section ref={containerRef} id='process'>
                <div className="w-[85%] mx-auto">
                    {/* Heading */}
                    <h3 className="text-[4vw] font-medium font-heading leading-[1.2] tablet:text-[8vw] mobile:text-[11vw] mb-[8%] title-anim">
                        <span>Our{" "}</span>
                        <span className='stroke tracking-wide mobile:text-gray2'>Process</span>
                    </h3>

                    <div className="flex justify-between text-left items-start h-full tablet:pb-[10vh] tablet:h-auto tablet:block">
                        {/* Left Section */}
                        <div ref={leftSectionRef} className="relative h-[80vh] overflow-hidden w-[40%] tablet:h-[50vh] tablet:w-auto tablet:rounded-2xl fadeup" id='approachImgCont'>
                            <div className="absolute overflow-hidden w-full h-full top-0 left-0 z-[3] tablet:overflow-visible tablet:hidden image-container ">
                                <Image src='/assets/service-detail/technology/technology1.webp'
                                    alt='approach image'
                                    className="w-full h-full object-cover hover:scale-110 duration-500"
                                    priority={false}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className="absolute overflow-hidden w-full h-full top-0 left-0 z-[2] tablet:overflow-visible image-container">
                                <Image src='/assets/service-detail/technology/technology2.webp'
                                    alt='approach image'
                                    className="w-full h-full object-cover hover:scale-110 duration-500"
                                    priority={false}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div ref={rightSectionRef} className="w-1/2 h-full mt-[50px] tablet:block tablet:w-full">
                            <div className="h-full flex flex-col justify-center tablet:block card" data-cursor-size='100px' data-cursor-exclusion>
                                <Card
                                    title='Comprehend & Conceive'
                                    content="We initiate by deeply understanding your vision and crafting a strategic blueprint. This foundational step ensures our solutions are precisely tailored to your business ambitions."
                                />
                                <Card
                                    title='Refine & Design'
                                    content="Our design phase is an iterative alchemy of form and function, refining concepts into user-centric designs that resonate and engage."
                                />
                            </div>

                            <div className="h-full flex flex-col justify-center tablet:block card" data-cursor-size='100px' data-cursor-exclusion>
                                <Card
                                    title="Assemble & Implement"
                                    content="We meticulously assemble and implement robust solutions, leveraging agile methodologies for peak efficiency and adaptability."
                                />
                                <Card
                                    title="Fortify & Test"
                                    content="Through rigorous testing, we fortify your product, guaranteeing seamless performance and ironclad security."
                                />
                                <Card
                                    title="Transition & Transform"
                                    content="We ensure a flawless launch and continuous evolution, keeping your digital solutions dynamic and dominant in the market."
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Process;

const Card = ({ title, content }) => {
    return (
        <div className="w-[40vw] fadeup bg-white p-[40px] rounded-2xl h-auto mb-[80px] dark:bg-white2 tablet:w-full tablet:my-[30px] tablet:mx-0 mobile:my-[20px] mobile:rounded-xl mobile:py-[30px] mobile:px-[20px]">
            <h4 className='text-primary text-[2.2vw] pb-[25px] font-medium font-heading tablet:text-[4vw] mobile:text-[6vw]'>{title}</h4>
            <p className="text-[1.4vw] leading-[1.2] tracking-wide tablet:text-[3vw] mobile:text-[4.5vw] mobile:text-justify">{content}</p>
        </div>
    )
}

// const content = [
//     {
//         title: 'Learn',
//         content: "We initiate our strategy with a deep dive into your business, absorbing your brand's core objectives, the specific goals you have for digital channels, and the industry nuances. This foundational step ensures our strategies are precisely tailored to your brand's unique vision."
//     },
//     {
//         title: 'Examine',
//         content: "We then meticulously evaluate your digital presence, scrutinizing your online footprint to pinpoint both strengths and areas for enhancement. This step provides a strategic overview of your position in the digital arena and helps define measurable goals for the future."
//     },
//     {
//         title: "Advise",
//         content: "Leveraging our insights, we provide targeted advice on communication tactics, campaign concepts, content creation, platforms to be used, and overall user experience. Our guidance is rooted in data, aimed at crafting messages that resonate with your audience and differentiate your brand in the marketplace."
//     },
//     {
//         title: "Plan and Execute",
//         content: "Our final phase involves planning and rolling out integrated digital campaigns across all channels, with a focus on consistency and impact. We continuously monitor and refine our approach based on performance, ensuring your campaigns are optimized for peak performance."
//     }
// ]