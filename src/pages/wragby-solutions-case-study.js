import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import Client from "@/components/PortfolioDetail/Client";
import ContentSection from "@/components/PortfolioDetail/ContentSection";
import Hero from "@/components/PortfolioDetail/Hero";
import ImageGrid from "@/components/PortfolioDetail/ImageGrid";
import ParallaxImage from "@/components/PortfolioDetail/ParallaxImage";
import Testimonial from "@/components/PortfolioDetail/Testimonial";
import VideoSection from "@/components/PortfolioDetail/VideoSection";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import ProjectSlider from "@/components/PortfolioDetail/ProjectSlider";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/MetaData";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioDetail() {
    const colorContainer = useRef(null);
    const text = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(text.current, {
                scrollTrigger: {
                    trigger: colorContainer.current,
                    invalidateOnRefresh: true,
                    scrub: true,
                    start: "center bottom",
                },
                y: "-20%",
                ease: "none",
            });
        });
        return () => ctx.revert();
    });

    useEffect(() => {
        const lines = colorContainer.current.querySelectorAll(".color")
        let ctx = gsap.context(() => {
            gsap.from(lines, {
                scrollTrigger: {
                    trigger: lines,
                    start: "center 80%",
                },
                opacity: 0,
                scale: "0",
                stagger: 0.2,
                duration: 0.5,
            });
        });
        return () => ctx.revert();
    });

    const metadata = {
        title: "Wragby Solutions: A Case Study in Digital Innovation | Enigma",
        description: "Explore the Wragby case study showcasing Enigma's expertise in branding, UI/UX design, and front-end development for exceptional results.",
        img: "portfolio-wragby.png",
        slug: "wragby-solutions-case-study",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero cursorColor="#E30B25" title="Wragby Business Solutions" linkText="wragbysolutions.com" link="https://wragbysolutions.com/" industry="IT, SAAS" year="2020" />
                <ParallaxImage id="firstFade" imgSrc="/wragby/wragby-case-study-image-1.webp" alt="wragby casestudy image 1" cursorColor="#E30B25" cursorText="Wragby" />
                <Client content="Wragby is a titan in the Nigerian technology industry. They are Microsoft's 1st Azure Managed Service Provider in Sub-Saharan Africa. Wragby's mission is to revolutionize the African tech scene by delivering innovative, jaw-dropping digital transformation solutions." tags={['UI/UX Design', 'Web Design', 'Development']} />
                <ParallaxImage imgSrc="/wragby/wragby-case-study-image-2.webp" alt="wragby casestudy image 2" cursorColor="#E30B25" cursorText="Wragby" />
                <ContentSection
                    title="The Ask"
                    contentB={["As the project commenced, both teams found themselves facing obstacles that tested their creativity, technical expertise, and resilience."]}
                    contentN={[
                        "While Wragby's vision was as clear as a cloudless sky, the challenges were as daunting as climbing Mount Everest in flip-flops. The first hurdle: creating a website that encapsulated Wragby's awe-inspiring ingenuity without getting lost in the vortex of technical jargon. With Wragby's extensive portfolio of innovative solutions, the task of organizing and presenting the information in a digestible format was like trying to solve a Rubik's cube blindfolded.",
                        "The second challenge: designing a user experience that even your tech-averse grandma could navigate with ease. In a world where attention spans rival those of goldfish, the website needed to be engaging, intuitive, and snappy while showcasing Wragby's complex offerings without overwhelming users.",
                        "And lastly, developing a site that could handle the constant flux of innovative content. Wragby's brilliance knows no bounds, and their website needed to be a living, breathing entity, capable of adapting and growing alongside the company."
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Wragby Image Showcase" />

                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "We decided to play by our own rulebook, tossing conventional wisdom out the window like an old Nokia brick phone. We began with a deep dive into Wragby's psyche, absorbing their every quirk and vision like a sponge in the depths of the ocean. This immersion allowed our team to channel Wragby's innovative spirit into every aspect of the website.",
                        "Next, we concocted a design so visually alluring, it could make the Sirens of Greek mythology green with envy. The design featured bold colors, futuristic layouts, and interactive elements that turned the website into a digital playground, inviting users to explore and discover Wragby's groundbreaking solutions.",
                        "Then we addressed the challenge of presenting complex information in a digestible manner. We employed storytelling techniques, weaving Wragby's technical offerings into engaging narratives that humanized the company and connected with users on an emotional level. This approach transformed what could have been a maze of jargon into a thrilling odyssey through the world of technology.",
                        "And finally, Enigma took a page out of Wragby's book, deploying agile development methodologies to ensure the website could grow and evolve with the company like a chameleon on steroids. This strategy allowed the site to flex and adapt to Wragby's ever-expanding portfolio of innovative solutions, ensuring it remained a showcase of their cutting-edge expertise.",
                    ]}
                />

                <ImageGrid images={ImageGrid2} alt="Wragby Image Showcase" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="flex items-center justify-center mx-auto h-[35vw] overflow-hidden tablet:w-full tablet:h-[50vw] dark:invert">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/wragby/wragby-typography-desktop.webp"
                                alt="Wragby Casestudy Fonts Image"
                                className="block w-[80%] tablet:w-full mobile:hidden"
                            />
                             <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/wragby/wragby-typography-mobile.webp"
                                alt="Wragby Casestudy Fonts Image"
                                className="hidden mobile:block mobile:w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section ref={colorContainer} id="color-section">
                    <div className="h-[80vh] w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-[40vw] mobile:h-[60vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-0">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tablet:hidden">
                            <p ref={text} className="text-[15vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%]">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[65%] h-4/5 mx-auto tablet:w-full relative z-10 flex items-center justify-center">
                            <div className="flex h-[12vw] tablet:h-[18vw] mobile:h-[24vw] items-end justify-center relative w-full text-white text-xl tablet:pr-0 mobile:text-[2vw] mobile:leading-[1.2] uppercase font-heading dark:text-black">
                                <div className="absolute left-0 flex items-center justify-center w-[12vw] h-[12vw] bg-[#E30B25] rounded-full shadow-xl tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] color">#E30B25</div>
                                <div className="absolute left-[18%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#2C5ED1] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-xl color">#2C5ED1</div>
                                <div className="absolute left-[36%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#FFFFFF] text-black dark:text-white tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#FFFFFF</div>
                                <div className="absolute left-[54%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#E7EDEF] text-black dark:text-white tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#E7EDEF</div>
                                <div className="absolute left-[72%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#151515] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#151515 <br /> #62CCFD</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="The African Technology Behemoth"
                    videoSrc="wragby/wragby.mp4"
                    poster="wragby/wragby-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "Enigma opted for a classic combo: HTML, CSS, JS, jQuery, and WordPress. This dynamic quintet of technologies provided a flexible, battle-tested foundation for Wragby's digital fortress that could withstand the test of time. HTML and CSS laid the groundwork for visual appeal, while JavaScript and jQuery injected interactivity and flair, and WordPress offered a user-friendly content management system for Wragby's ever-evolving content needs.",
                    ]}
                />
                <ParallaxImage imgSrc="/wragby/wragby-case-study-image-3.webp" alt="wragby casestudy image 4" cursorColor="#E30B25" cursorText="Wragby" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "Wragby's innovative spirit now had a digital home that not only reflected its essence but also attracted talent, clients, and partners from across the African continent and beyond. The seamless user experience had users exploring the site with the enthusiasm of Indiana Jones on a treasure hunt, while the engaging narratives forged emotional connections that turned visitors into loyal clients.",
                        "The website's ability to adapt and evolve alongside Wragby's growth ensured that the company's digital presence would remain relevant and impressive for years to come. The collaboration between Enigma Digital and Wragby Business Solutions produced a website that defied convention and set a new standard for digital excellence in the African technology landscape.",
                    ]}
                />
                <ParallaxImage imgSrc="/wragby/wragby-case-study-image-4.webp" alt="wragby casestudy image 4" cursorColor="#E30B25" cursorText="Wragby" />
                <Testimonial
                    cImg="wragby/wragby-client-image.webp"
                    text="Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
                    cName="Akin Banuso"
                    cTitle="CEO, Wragby Business Solutions"
                />
                <ProjectSlider currentProject="wragby" />
            </Layout>
            <PageLoader loaderText="Wragby Solutions Case Study" />
        </>
    )
}

const ImageGrid1 = [
    {
        src: "wragby/wragby-case-study-showcase-1.webp",
        cursorColor: "#EE384E",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-2.webp",
        cursorColor: "#0A489B",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-3.webp",
        cursorColor: "#0A489B",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-4.webp",
        cursorColor: "#EE384E",
        cursorText: "Wragby",
    }
]

const ImageGrid2 = [
    {
        src: "wragby/wragby-case-study-showcase-5.webp",
        cursorColor: "#EE384E",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-6.webp",
        cursorColor: "#0A489B",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-7.webp",
        cursorColor: "#0A489B",
        cursorText: "Wragby",
    },
    {
        src: "wragby/wragby-case-study-showcase-8.webp",
        cursorColor: "#EE384E",
        cursorText: "Wragby",
    }
]
