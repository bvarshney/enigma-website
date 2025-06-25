import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const Hero = () => {
    const container = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const herotext = container.current.querySelectorAll(".hero-anim");
        const heroreel = container.current.querySelectorAll(".hero-reel");
        const herobottom = container.current.querySelectorAll(".hero-bottom");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(herotext, {
                rotationX: -80,
                opacity: 0,
                translateY: 300,
                transformPerspective: "1000",
                transformOrigin: "top center",
            }, {
                delay: 5,
                duration: 1.3,
                rotationX: 0,
                opacity: 1,
                translateY: 0,
                stagger: 0.1,
            })
            .fromTo(herobottom, {
                y: -50,
                opacity: 0,
            }, {
                delay: -1,
                duration: 1.3,
                opacity: 1,
                y: 0,
                stagger: 0.1
            })
            .fromTo(heroreel, {
                scale: 0,
                opacity: 0,
            }, {
                opacity: 1,
                scale: 1,
                delay: -1.2,
                duration: 1.3,
            });
        })
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const videoSrc = "/assets/videos/hero.mp4";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 6000);
    }, []);
 
    return (
        <>
            <section ref={container} className="h-screen w-screen relative tablet:h-full pb-[5vw] tablet:pb-[10vw]" data-cursor-size="10" data-cursor-text="">
                <div className="w-full flex items-center justify-start relative h-full tablet:flex-col tablet:pt-[20vw] tablet:px-[6%]">
                    <div className="absolute right-[13%] h-[8vw] w-[20vw] overflow-hidden rounded-full hero-reel tablet:static tablet:h-[55vw] tablet:w-[55vw] mobile:h-[65vw] mobile:w-[65vw]">
                        <video
                            ref={videoRef}
                            poster='/assets/videos/reel-full.webp'
                            muted
                            autoPlay
                            loop
                            className="w-full h-full object-cover"
                        >
                        </video>
                    </div>
                    <h1 className="flex flex-col font-medium font-heading text-[9vw] leading-[1] w-[80%] mx-auto tablet:w-full tablet:text-[15vw] tablet:mt-[6vw]">
                        <div className="text-black2 w-fit ml-[11vw] hero-anim tablet:ml-0" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/1.gif" data-cursor-color="#000">
                            <span>Digital</span>
                        </div>
                        <div className="text-primary text-[10vw] w-fit hero-anim tablet:text-[15vw]" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/2.webp" data-cursor-color="#000">
                            <span>Experience</span>
                        </div>
                        <div className="flex gap-[2vw] ml-[11vw] mt-[1vw] tablet:block tablet:ml-0 tablet:mt-0">
                            <span data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/3.gif" data-cursor-color="#000" className="text-black2 block w-fit hero-anim">Design{" "}</span>
                            <span data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/4.gif" data-cursor-color="#000" className="agency block w-fit hero-anim">Agency</span>
                        </div>
                    </h1>
                    <p className="text-[1.2vw] text-black2 text-justify tracking-[0.4px] leading-[1.7] absolute w-[32vw] top-[25%] right-[13%] hero-anim tablet:static tablet:w-full tablet:text-[3.7vw] tablet:leading-[1.4] tablet:mt-[8vw] mobile:text-[6vw]">
                        {/* Harnessing the power of<span className="font-medium text-black"> Emotion, Design, Technology & Neuromarketing, </span>we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes. */}
                        As a leading UI UX and web design agency, we harness the power of emotion, design, technology, and neuromarketing to craft digital brand experiences that drive real results.
                    </p>
                </div>

                <div className="absolute bottom-0 w-full left-0 hero-bottom tablet:static tablet:hidden">
                    <Image
                        className="ml-[1vw] mb-[-4vw] dark:invert"
                        src="/assets/icons/scroll-down.svg"
                        alt="scroll down"
                        width={18}
                        height={240}
                    />
                    <div className="w-[92%] mx-auto pb-[1vw] flex items-center justify-between font-heading text-[1vw]">
                        <div className="">
                            <p className="text-gray1 text-[0.9vw]">timezone</p>
                            <p>+5:30 GMT</p>
                        </div>
                        <div>
                            <p className="text-gray1 text-[0.9vw]">location</p>
                            <p>Noida - India</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;