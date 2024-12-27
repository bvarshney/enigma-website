import { SplitInChar } from "@/lib/splitText";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Hero = () => {
    const container = useRef(null);
    const videoRef = useRef(null);
    const imageRef = useRef(null);
    const showreel = useRef(null);
    const textRef = useRef(null);
    const row1 = useRef(null);
    const row2 = useRef(null);
    const row3 = useRef(null);
    const paraRef = useRef(null);

    useEffect(() => {
        const images = imageRef.current.querySelectorAll("img");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(images, {
                yPercent: 30,
                duration: 1,
                opacity: 0,
                delay: 2.5,
                stagger: 0.1,
            })
                .from(showreel.current, {
                    yPercent: 5,
                    opacity: 0,
                    duration: 1,
                    delay: -0.7,
                })
                .to(images, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5,
                })
                .to(showreel.current, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.5,
                    delay: -0.5,
                    onComplete() {
                        gsap.set(imageRef.current, {
                            display: "none",
                            visibility: "hidden",
                            opacity: 0,
                            pointerEvents: "none",
                        })
                    }
                })
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        SplitInChar(textRef.current);
        const char1 = textRef.current.querySelectorAll(".row-1 .char");
        const char2 = textRef.current.querySelectorAll(".row-2 .anim .char");
        const char3 = textRef.current.querySelectorAll(".row-3 .char");

        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.to(container.current, {
                autoAlpha: 1,
                delay: 4.5,
                duration: 0.5,
            })
            tl.from(paraRef.current, {
                yPercent: 50,
                opacity: 0,
                duration: 1,
            })
            .from(char1, {
                yPercent: 100,
                stagger: 0.1,
                duration: 0.5,
                delay: -1
            })
            .from(char2, {
                yPercent: 100,
                stagger: 0.1,
                duration: 0.5,
                delay: -1.2,
            })
            .from(char3, {
                yPercent: 100,
                stagger: 0.1,
                duration: 0.5,
                delay: -3,
            });
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const videoSrc = "/showreel.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 6000);
    }, []);

    return (
        <>
            <section className="h-full relative ">
                <div className="pt-[9vw] w-full h-full tablet:pt-[30vw] mobile:pt-[40%]">
                    <div ref={container} className="relative opacity-0">
                        <h1 ref={textRef} className="flex flex-col text-[11vw] font-medium font-heading text-black2 leading-[1.2] tablet:text-[15vw] tablet:leading-[1.1]">
                            <div ref={row1} className="text-center ml-[5%] tablet:text-center w-fit tablet:w-full overflow-hidden row-1 tablet:ml-0">
                                We <span className="text-primary">Create</span>
                            </div>
                            <div ref={row2} className="stroke overflow-hidden row-2 text-gray1">
                                <div className="portfolio-marquee w-full whitespace-nowrap space-x-[5vw]">
                                    <span className="anim">
                                        tenacious
                                    </span>
                                    <span className="anim">
                                        audacious
                                    </span>
                                    <span className="anim">
                                        marvelous
                                    </span>
                                    <span className="">
                                        tenacious
                                    </span>
                                    <span className="">
                                        marvelous
                                    </span>
                                </div>
                            </div>
                            <div ref={row3} className="text-center overflow-hidden row-3">
                                Experiences
                            </div>
                        </h1>
                        <p ref={paraRef} className="text-[1.2vw] w-[27vw] tablet:w-[85%] tablet:mx-auto leading-[1.7] text-justify absolute top-[7%] right-[5%] tablet:static tablet:text-[4vw] tablet:mt-[10vw] mobile:text-[5.5vw]">
                            We specialize in crafting <span className="font-medium text-black">one-of-a-kind, unforgettable experiences</span> that captivate and engage your customers, leaving them craving for more.
                        </p>
                    </div>
                </div>
                <div ref={imageRef} className="absolute top-0 left-0 right-0 h-screen p-[3vw] tablet:pt-[10vw] mobile:pt-[30vw]">
                    <Image className="translate-x-[5%] tablet:w-[40%] tablet:translate-y-[30%]" src="/assets/portfolio/animation/image-1.webp" width={400} height={270} alt="image" />
                    <Image className="translate-x-[77vw] translate-y-[-50%] tablet:translate-x-[63vw] tablet:w-[30%]" src="/assets/portfolio/animation/image-2.webp" width={300} height={450} alt="image" />
                    <Image className="translate-x-[72vw] translate-y-[-20%] tablet:w-[35%] tablet:translate-y-[120%] tablet:translate-x-[60vw]" src="/assets/portfolio/animation/image-3.webp" width={400} height={270} alt="image" />
                    <Image className="translate-y-[-100%] tablet:w-[30%] tablet:translate-y-[-50%]" src="/assets/portfolio/animation/image-4.webp" width={300} height={450} alt="image" />
                </div>
                <div className="w-[90%] h-[90vh] mx-auto mt-[5vw] tablet:h-[60vw] tablet:mt-[20vw] mobile:h-[50vw]" data-cursor-text="Our Showreel" data-cursor-size="120px" data-cursor-color="#5a5dd6">
                    <div ref={showreel} className="w-full h-full translate-y-[-100%] scale-50 tablet:scale-[0.6] tablet:translate-y-[-170%]">
                        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/assets/videos/poster.webp" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;