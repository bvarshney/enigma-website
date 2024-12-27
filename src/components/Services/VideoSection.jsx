import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import LazyVideo from '../LazyVideo';
gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
    const container = useRef(null);
    const image = useRef(null);
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(image.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.25,
                },
                rotate: "360deg",
                ease: "none",
            })
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container}>
            <div className="w-[90%] h-[90vh] mx-auto tablet:py-[10%] tablet:h-auto">
                <div className="relative h-full w-full overflow-hidden" data-cursor-text="Works" data-cursor-size="110px" data-cursor-color="#bcd15e">
                    <LazyVideo
                        className='hover:scale-110 duration-500'
                        autoPlay
                        loop
                        muted
                        videoSrc="/assets/service/service-2.webm"
                        poster="/assets/service/service-video-people-sitting.webp"
                        type="video/webm"
                    />
                    <div className="absolute bottom-10 left-10 w-[12%] tablet:w-[15%]">
                        <Image
                            ref={image}
                            className='w-full h-full object-contain'
                            src="/assets/service/wemakemagic.png"
                            width={200}
                            height={200}
                            alt="services"
                            id="rotate"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VideoSection;
