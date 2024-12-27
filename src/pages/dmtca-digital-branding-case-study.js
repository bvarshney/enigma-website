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
        title: "DMTCA - Branding, Web Design & Development Case Study | Enigma",
        description: "Witness the digital rebranding journey & website transformation of a leading West African digital marketing agency with Enigma.",
        img: "portfolio-dmtca.png",
        slug: "dmtca-digital-branding-case-study",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero cursorColor="#00855A" title="DMTCA: The Digital Vanguard" linkText="dmtca.agency" link="https://dmtca.agency/" industry="Agency" year="2020" />
                <ParallaxImage id="firstFade" imgSrc="/dmtca/dmtca-casestudy-image-1.webp" alt="dmtca casestudy image 1" cursorColor="#00855A" cursorText="DMTCA" />
                <Client content="DMTCA, a trailblazing digital marketing agency in the West Africa region, stands tall in the vast digital landscape, known for its unparalleled strategies and groundbreaking solutions. As the digital realm continues to evolve, DMTCA sought a brand identity and digital footprint that mirrors its prowess and showcases its illustrious portfolio." tags={['Branding', 'Web Design']} />
                <ParallaxImage imgSrc="/dmtca/dmtca-casestudy-image-2.webp" alt="dmtca casestudy image 2" cursorColor="#00855A" cursorText="DMTCA" />
                <ContentSection
                    title="The Ask"
                    contentB={["DMTCA, while being a powerhouse in the digital marketing realm, faced a branding conundrum. DMTCA's brand persona & digital presence needed a revamp."]}
                    contentN={[
                        "Imagine having a compass that doesn't point north; that's how their previous branding felt. Their existing identity, robust and well-established, somehow missed capturing the full spectrum of their innovative approach. It was directionally ambiguous in a world that demanded precision.",
                        "Their website, while functional, was reminiscent of a classic novel in the digital age - rich in content but lacking the modern touch that would make it resonate with the contemporary audience. The branding, though recognizable, needed that extra zest, that unique touch which would make it not just seen but remembered.",
                        "The challenge was not just about enhancing their digital presence but also about refining and redefining their brand identity to truly reflect the dynamism and innovation that DMTCA embodies."
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="DMTCA Image" />

                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "Redefining a brand is like sculpting a masterpiece from marble; it requires precision, vision, and a deep understanding of the essence of the subject. We embarked on a journey to rediscover DMTCA. We delved deep into DMTCA's ethos, understanding their quirks, their strengths, and their vision. This wasn't just about a digital makeover; it was about capturing the soul of DMTCA.",
                        "Through intensive workshops, brainstorming sessions, and deep dives into their past campaigns, successes, and feedback, we pieced together the mosaic that is DMTCA. The narrative was not just spun; it was woven with threads of their achievements, aspirations, and vision. We aimed to create a digital tapestry that showcased every facet of DMTCA.",
                        "For the branding, we chose elements that were symbolic of their forward-thinking approach and their roots in traditional marketing values. Colors, typography, and design elements were meticulously chosen to reflect their ethos, creating a brand identity that was both modern and timeless.",
                        "The website was transformed into an interactive digital journey, with each section, each page telling a part of the DMTCA story, drawing visitors into the world of DMTCA. We wanted visitors to not just see DMTCA's work but to experience it. The design was revamped to be sleek, modern, and interactive, turning the website into a digital journey rather than just a digital platform.",
                    ]}
                />

                <ImageGrid images={ImageGrid2} alt="DMTCA Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="w-[85%] flex items-center justify-center mx-auto h-[30vw] overflow-hidden tablet:w-full tablet:h-[40vw] dark:invert">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/dmtca/dmtca-casestudy-font-image.webp"
                                alt="Certvault Casestudy Fonts Image"
                                className="block w-[80%] mobile:w-full"
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
                            <div className="flex h-[12vw] tablet:h-[18vw] mobile:h-[24vw] items-end justify-center relative w-full text-white text-2xl tablet:pr-0 tablet:text-xl mobile:text-[2vw] mobile:leading-[1.2] uppercase font-heading dark:text-black">
                                <div className="absolute left-0 flex items-center justify-center w-[12vw] h-[12vw] bg-[#56b7be] rounded-full shadow-xl tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] color">#56b7be</div>
                                <div className="absolute left-[18%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#4feab8] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-xl color">#4feab8</div>
                                <div className="absolute left-[36%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#33B5F2] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#33B5F2</div>
                                <div className="absolute left-[54%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#62ccfd] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#62ccfd</div>
                                <div style={color5} className="absolute left-[72%] flex items-center justify-center w-[12vw] h-[12vw] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#4FEAB8 <br/> #62CCFD</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="The DMTCA Innovative Website Design"
                    videoSrc="dmtca/dmtca.mp4"
                    poster="dmtca/dmtca-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "Our tech arsenal was chosen to mirror DMTCA's innovative approach. HTML5, CSS3, and JavaScript formed the backbone, ensuring a seamless and dynamic user experience. WordPress was used as the choice of content management platform, easing out the maintenance of the website by the DMTCA team post-delivery. The site wasn't just about looking good; it was about performing exceptionally, ensuring that DMTCA's digital presence was as impactful as their real-world operations.",
                    ]}
                />
                <ParallaxImage imgSrc="/dmtca/dmtca-casestudy-image-11.webp" alt="dmtca casestudy image 11" cursorColor="#00855A" cursorText="DMTCA" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "The transformation was nothing short of spectacular. DMTCA's new digital avatar was a true reflection of their capabilities. DMTCA emerged with a brand identity that was a true reflection of their stature in the digital marketing world. The logo, the colors, the design elements - each piece of the branding puzzle fit perfectly, creating a cohesive and instantly recognizable identity.",
                        "The website, with its revamped design and enriched content, became more than just a platform; it became a destination. Visitors were not just informed; they were enthralled, taken on a journey through the world of digital marketing as seen through the eyes of DMTCA.",
                        "Feedback poured in, with clients, both old and new, lauding the fresh look and the intuitive design. The numbers spoke for themselves, with increased engagement, reduced bounce rates, and a significant uptick in inquiries and leads. The collaboration between DMTCA and Enigma wasn't just successful; it set a new benchmark in digital branding and design.",
                    ]}
                />
                <ParallaxImage imgSrc="/dmtca/dmtca-casestudy-image-12.webp" alt="dmtca casestudy image 12" cursorColor="#00855A" cursorText="DMTCA" />
                <Testimonial
                    cImg="dmtca/dmtca-client-image.webp"
                    text="Enigma Digital has truly outdone themselves. The new website is not just a testament to their capabilities but a reflection of their understanding of our brand. It's not just a website; it's DMTCA's digital identity. Kudos to the team!"
                    cName="Ankush Chawla"
                    cTitle="CEO, DMTCA"
                />
                <ProjectSlider currentProject="dmtca" />
            </Layout>
            <PageLoader loaderText="DMTCA Case Study"/>
        </>
    )
}

const ImageGrid1 = [
    {
        src: "dmtca/dmtca-casestudy-image-3.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-4.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-5.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-6.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    }
]

const ImageGrid2 = [
    {
        src: "dmtca/dmtca-casestudy-image-7.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-8.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-9.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    },
    {
        src: "dmtca/dmtca-casestudy-image-10.webp",
        cursorColor: "#00855a",
        cursorText: "DMTCA",
    }
]

const color5 = {
    background: "linear-gradient(90deg,#4feab8,#62ccfd) 0 0 no-repeat padding-box"
}