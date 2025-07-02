"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { SplitInWord } from '@/lib/splitText';


gsap.registerPlugin(ScrollTrigger);

const ClientCarousel = () => {

    const container = useRef(null);
    const swiperContainer = useRef(null);
    const swiperRef = useRef(null);
    const [activeCard, setActiveCard] = useState(null);

    const slideNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    const slidePrevious = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const toggleActiveCard = (id) => {
        setActiveCard((prev) => (prev === id ? null : id));
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(swiperContainer.current, {
                scrollTrigger: {
                    trigger: swiperContainer.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1,
                },
                x: 300,
            })
        });
        return () => ctx.revert();
    }, [])

    useEffect(() => {
        let ctx = gsap.context(() => {
            const ParaAnim = document.querySelectorAll(".client-para-anim");
            ParaAnim.forEach(function (el) {
                SplitInWord(el);
                let words = el.querySelectorAll(".word");
                gsap.from(words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.8,
                    stagger: 0.01,
                    ease: "Power3.out",
                });
            });
        });
        return () => ctx.revert();
    }, [activeCard]);

    return (
        <>
            <section ref={container}>
                <div className='w-screen py-[10%] h-full overflow-hidden'>
                    <div className='fadeup mb-[5vw] ml-[10vw] flex gap-5'>
                        <button aria-label='previous slide' onClick={slidePrevious} className='w-[4vw] h-[4vw] rounded-full overflow-hidden group bg-white flex relative items-center justify-center dark:bg-white3 tablet:h-[8vw] tablet:w-[8vw] mobile:w-[12vw] mobile:h-[12vw]'>
                            <span className='absolute bg-black1 block h-full w-full scale-0 group-hover:scale-100 duration-300 rounded-full' />
                            <svg className='-rotate-[135deg] w-[1vw] text-black1 group-hover:text-white1 duration-300 tablet:w-[2vw] mobile:w-[3vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.56 9.56" >
                                <line x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth="0.75" />
                                <line x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth="0.75" />
                                <polyline points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                                <polyline points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                            </svg>
                        </button>
                        <button aria-label='next slide' onClick={slideNext} className='w-[4vw] h-[4vw] rounded-full overflow-hidden group bg-white flex relative items-center justify-center dark:bg-white3 tablet:h-[8vw] tablet:w-[8vw] mobile:w-[12vw] mobile:h-[12vw]'>
                            <span className='absolute bg-black1 block h-full w-full scale-0 group-hover:scale-100 duration-300 rounded-full' />
                            <svg className='rotate-45 w-[1vw] text-black1 group-hover:text-white1 duration-300 tablet:w-[2vw] mobile:w-[3vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.56 9.56" >
                                <line x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth="0.75" />
                                <line x1="0.27" y1="9.29" x2="9.18" y2="0.38" fill="currentColor" stroke="currentColor" strokeMiterlimit={10} strokeWidth="0.75" />
                                <polyline points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                                <polyline points="5.01 0.38 9.18 0.38 9.18 4.55" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth="0.75" />
                            </svg>
                        </button>
                    </div>
                    <div ref={swiperContainer}>
                        <Swiper
                            data-cursor-text="Drag"
                            data-cursor-size="100px"
                            className='!ml-[40px] !overflow-visible mobile:!ml-[20px]'
                            modules={[FreeMode]}
                            speed={1000}
                            slidesPerView={1.2}
                            spaceBetween={20}
                            freeMode={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 2.7,
                                    spaceBetween: 50,
                                },
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {content.map((item, index) => (
                                <SwiperSlide key={index} className=''>
                                    <Card
                                        logo={item.logo}
                                        name={item.name}
                                        description={item.description}
                                        link={item.link}
                                        isActive={activeCard === item.id}
                                        onClick={() => toggleActiveCard(item.id)}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClientCarousel;

const Card = ({ logo, name, description, link, isActive, onClick }) => {
    return (
        <div className={`h-[31vw] bg-white2 p-[2.5vw] relative transition-all duration-300 cursor-pointer tablet:h-[50vw] mobile:h-[80vw] mobile:p-[4vw] ${isActive ? 'overflow-visible' : 'overflow-hidden'}`} onClick={onClick}>
            <div className='w-full h-full relative flex items-center justify-center'>
                <div className='w-[45%] dark:invert tablet:w-[70%]'>
                    <Image src={logo} width={300} height={150} alt='client logo' />
                </div>
                <div className={`absolute flex justify-between items-center bottom-0 left-0 right-0 transition-opacity duration-300`}>
                    <h4 className='font-heading text-[1.4vw] tablet:text-[3vw] mobile:text-[4vw]'>{name}</h4>
                    <span className='bg-white p-[0.5vw] rounded-full tablet:p-[1.5vw]'>
                        <Image src="/assets/icons/plus.png" className='dark:invert' width={15} height={15} alt='plus icon' />
                    </span>
                </div>
            </div>
            <div
                className={`absolute flex flex-col justify-between items-start right-0 left-0 bottom-0 top-0 z-[2] bg-white2 p-[2.5vw] transition-all duration-300 pointer-events-none opacity-0 mobile:p-[4vw] ${isActive ? 'opacity-100 pointer-events-auto' : ''}`}>
                <p className='client-para-anim text-justify text-[1.4vw] tablet:text-[2.5vw] mobile:text-[3.7vw]'>
                    {description}
                </p>
                <div className='w-full flex items-center justify-between'>
                    <Link href={link} className='en-link-under text-[1.2vw] font-heading font-medium tablet:text-[2.4vw] mobile:text-[4vw]'>
                        <span>
                            Read More
                        </span>
                    </Link>
                    <span className='bg-black p-[0.5vw] rounded-full tablet:p-[1.5vw]'>
                        <Image
                            src="/assets/icons/plus.png"
                            className="invert rotate-45"
                            width={15}
                            height={15}
                            alt='plus icon'
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};


const content = [
    {
        id: 1,
        logo: "/assets/about/client-logo/jelly.png",
        name: "JellyFish",
        description: "Jellyfish, a fast-growing IT services provider, sought to elevate their online presence and improve their customer experience. Recognizing Enigma Digital's expertise in UX design, they partnered with the agency to enhance their website's user interface and overall design.",
        link: "#",
    },
    {
        id: 2,
        logo: "/assets/about/client-logo/kk.png",
        name: "Kedarkala",
        description: "Kedarkala, a unique artisanal interior design studio, aimed to establish a strong brand identity and offer an exceptional online experience to its customers. They turned to Enigma Digital for their expertise in branding, UI/UX design, and website development.",
        link: "#",
    },
    {
        id: 3,
        logo: "/assets/about/client-logo/dmtca.png",
        name: "DMTCA",
        description: "DMTCA, a forward-thinking digital agency, engaged Enigma Digital to develop a strong brand identity and cohesive website design. The agency's branding and design expertise helped DMTCA establish a memorable presence that effectively communicated their innovative approach and commitment to delivering top-tier digital solutions.",
        link: "#",
    },
    {
        id: 4,
        logo: "/assets/about/client-logo/riva.png",
        name: "Riva",
        description: "RivaBuild, a renowned real estate developer, enlisted Enigma Digital to create an immersive digital experience that showcased their properties and services. The agency designed astunning website, user-friendly app, engaging collaterals, and captivating videos that highlighted RivaBuild's dedication to quality, innovation, and customer satisfaction.",
        link: "#",
    },
    {
        id: 5,
        logo: "/assets/about/client-logo/quickx.png",
        name: "Quick-X",
        description: "Quickx, a cutting-edge cryptocurrency platform, partnered with Enigma Digital to create a seamless and secure web and mobile app experience. The agency's expertise in app design allowed them to deliver intuitive and user-friendly interfaces that facilitated smooth cryptocurrency transactions while reinforcing Quickx's reputation as a reliable and innovative fintech solution.",
        link: "#",
    },
    {
        id: 6,
        logo: "/assets/about/client-logo/bespin.png",
        name: "Bespin Labs",
        description: "Bespin Labs, a leading IT company, partnered with Enigma Digital to enhance its online presence and marketing materials. The agency's expertise in website design and collaterals production enabled Bespin Labs to communicate their technical expertise and industry leadership effectively, attracting new clients and establishing a strong brand identity.",
        link: "#",
    },
    {
        id: 7,
        logo: "/assets/about/client-logo/patronum.png",
        name: "Patronum",
        description: "Patronum, an innovative SaaS company offering Google Workspace management solutions, sought to increase brand awareness and drive customer acquisition. Enigma Digital's full-service approach, encompassing branding, web design, and organic marketing, made them the ideal partner for Patronum.",
        link: "#",
    },
    {
        id: 8,
        logo: "/assets/about/client-logo/patra.png",
        name: "Patra",
        description: "Patra, an insure-tech company, collaborated with Enigma Digital to develop a user-centric app and implement effective marketing strategies. The agency's UI/UX design expertise and data-driven marketing approach helped Patra create a highly engaging web experience and reach their target audience, resulting in increased user adoption and brand awareness.",
        link: "#",
    },
]