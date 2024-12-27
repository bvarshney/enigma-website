import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    const container = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const herotext = container.current.querySelectorAll(".hero-anim");
        const heroreel = container.current.querySelectorAll(".hero-reel");

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(herotext, {
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
                stagger: 0.1,
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
        const videoSrc = "/assets/service/service-1.webm";
        const video = videoRef.current;
        setTimeout(() => {
            video.src = videoSrc;
        }, 4000);
    }, []);

    useEffect(() => {
        if (globalThis.innerWidth > 1023) {
            let ctx = gsap.context(() => {
                gsap.to(".hero-reel", {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",
                        end: "40% top",
                        scrub: 0.25,
                    },
                    width: "90vw",
                    height: "90vh",
                    yPercent: 39,
                    xPercent: -65.3,
                    borderRadius: "0",
                    duration: 1,
                });
            });
            return () => ctx.revert();
        }
    }, [])

    return (
        <>
            <section ref={container}>
                <div className="h-full w-[90%] mx-auto">
                    <div className="flex items-start pt-[13vw] justify-between w-[90%] mx-auto tablet:block tablet:w-full tablet:pt-[40%] mobile:pt-[50%]">
                        <div className="w-[59%] text-right tablet:w-full tablet:text-left">
                            <h1 className="text-[10.5vw] flex flex-wrap gap-x-[2vw] justify-end font-heading font-medium text-black2 leading-[1.2] tablet:text-[20vw] tablet:justify-start tablet:gap-x-[4vw] tablet:leading-[1]">
                                <div className="w-fit hero-anim" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/7.gif" data-cursor-color="#000">
                                    <span>What{" "}</span>
                                </div>
                                <div className="w-fit hero-anim" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/4.gif" data-cursor-color="#000">
                                    <span className="text-primary">We{" "}</span>
                                </div>
                                <div className="w-fit hero-anim" data-cursor-size="15vw" data-cursor-magnetic data-cursor-background-image="/assets/cursor/9.gif" data-cursor-color="#000">
                                    <span>Offer{" "}</span>
                                </div>
                            </h1>
                        </div>
                        <div className="w-[33%] pt-[2.5%] tablet:w-full tablet:pt-[8%] mobile:pt-[15%]">
                            <p className="text-[1.2vw] mb-[4vw] hero-anim text-justify leading-[1.7] tracking-wide tablet:text-[3.7vw] tablet:leading-[1.5] mobile:text-[5vw] ">We are a globally recognised, award-winning UI UX design studio. Our comprehensive range of services leverages our full expertise to boost your digital presence to celestial heights.</p>
                            <div className="h-[9vw] w-[20vw] tablet:w-full tablet:h-auto tablet:pt-[15%] mobile:pt-[20%]">
                                <div className="hero-reel rounded-[1000px] overflow-hidden w-[20vw] h-[9vw] tablet:w-full tablet:rounded-3xl tablet:h-[50vw]">
                                    <video
                                        ref={videoRef}
                                        poster='/assets/service/services-main-poster.webp'
                                        muted
                                        autoPlay
                                        loop
                                        className="w-full h-full object-cover"
                                    >
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[90vh] mt-[8vw] w-full video-container tablet:hidden" />
                </div>
            </section>
        </>
    )
}

export default Hero;