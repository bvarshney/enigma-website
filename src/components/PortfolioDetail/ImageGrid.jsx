"use client"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

const ImageGrid = ({ images, alt }) => {
    return (
        <section id="image-grid">
            <div className="w-[75%] mx-auto pb-[3vw] tablet:w-4/5 mobile-[85%]">
                <div className="grid grid-cols-2 gap-[2.5vw] mobile:grid-cols-1 mobile:gap-[10vw]">
                    {images.map((image, index) => (
                        <Picture
                            key={index}
                            src={image.src}
                            alt={alt}
                            cursorColor={image.cursorColor}
                            cursorText={image.cursorText}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ImageGrid;

const Picture = ({ src, alt, cursorColor, cursorText }) => {
    const container = useRef(null);
    const image = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.to(image.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                y: "15%",
                ease: "none",
            })
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={container} className="w-full h-[85vh] relative overflow-hidden even:translate-y-[3vw] tablet:h-[40vh] mobile:even:translate-y-0" data-cursor-size="120px" data-cursor-color={cursorColor} data-cursor-text={cursorText}>
            <div className="w-full h-full hover:scale-110 duration-500">
                <Image
                    ref={image}
                    className="w-full h-auto object-cover translate-y-[-15%] tablet:!h-[120%] mobile:translate-y-[-30%]"
                    src={`/assets/portfolio/detail/${src}`}
                    alt={alt}
                    width={600}
                    height={1000}
                    priority={false}
                />
            </div>
        </div>
    )
}