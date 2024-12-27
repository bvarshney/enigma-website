import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    const container = useRef(null);

    useEffect(() => {
        const text = container.current.querySelectorAll(".hero-anim");
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(text, {
                    rotationX: -80,
                    opacity: 0,
                    translateY: 300,
                    transformPerspective: "1000",
                    transformOrigin: "top center",
                },
                {
                    delay: 2.8,
                    duration: 1,
                    rotationX: 0,
                    opacity: 1,
                    translateY: 0,
                    stagger: 0.2,
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={container} id="hero" data-cursor-size="10px" data-cursor-text="">
                <div className="w-[85%] mx-auto h-screen flex justify-center items-center">
                    <div className="w-full relative">
                        <h1 className="text-[11vw] font-medium leading-[1.2] font-heading text-black2 flex flex-col tablet:text-[15vw]">
                            <div className="text-primary hero-anim" data-cursor-magnetic data-cursor-background-image="/assets/cursor/4.gif" data-cursor-size="15vw" data-cursor-color="#000">
                                Technology
                            </div>
                            <div className="hero-anim self-end tablet:self-start" data-cursor-magnetic data-cursor-background-image="/assets/cursor/5.gif" data-cursor-size="15vw" data-cursor-color="#000">
                                <span className='font-body'>&</span> Services
                            </div>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;