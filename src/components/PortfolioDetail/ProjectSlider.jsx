"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from 'swiper/modules';
import { projectData } from "../Portfolio/projectData";
import Image from "next/image";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/free-mode';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProjectSlider = ({ currentProject }) => {
    const container = useRef(null);
    const slider = useRef(null);
    const projects = projectData.filter(project => project.client !== currentProject);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.from(slider.current, {
                scrollTrigger: {
                    trigger: container.current,
                    scrub: true,
                    start: 'top bottom',
                    end: "top 10%",
                },
                x: 300,
                duration: 2,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <section ref={container} id="more-projects">
                <div className="pb-[10%] w-screen overflow-hidden tablet:pb-[20%]">
                    <div className="text-[5vw] font-heading font-medium w-4/5 mx-auto mb-[4vw] tablet:text-[7vw] tablet:mb-[6vw] mobile:text-[10vw] mobile:mb-6">
                        <p>More Projects{" "}
                            <span>
                                <Image
                                    priority={false}
                                    width={20}
                                    height={20}
                                    className="inline-block w-[2.5vw] tablet:w-[3.8vw] mobile:w-[5vw] dark:invert"
                                    src="/assets/icons/arrow-angle.svg"
                                    alt="arrow image more projects"
                                    id="case-study-arrow"
                                />
                            </span>
                        </p>
                    </div>

                    <Swiper
                        ref={slider}
                        slidesPerView={1}
                        spaceBetween={20}
                        className="!px-[2.5vw] !overflow-visible tablet:!px-[3.5vw] mobile:!px-[5vw]"
                        modules={[FreeMode]}
                        speed={1000}
                        freeMode={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {projects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-[28vw] relative tablet:h-[45vw] mobile:h-[85vw]" data-cursor-size="100px" data-cursor-text="Drag">
                                    <Image
                                        className="w-full h-full object-cover"
                                        alt="Image"
                                        width={600}
                                        height={600}
                                        src={item.srcSLider}
                                        priority={false}
                                    />
                                    <Link href={item.link} className="absolute z-[1] block bottom-4 left-4 py-[0.5vw] px-[1.5vw] bg-white rounded-full tablet:px-5 tablet:py-1">
                                        <p className="text-[1.3vw] uppercase text-black font-heading font-medium tracking-wider tablet:text-xl">{item.name}</p>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default ProjectSlider;