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
import ProjectSlider from "@/components/PortfolioDetail/ProjectSlider";
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "QuickX - Branding & Mobile App Design Case Study | Enigma",
    description: "We helped Quickx design India's most user-friendly crypto platform. From branding to UI/UX design, our product design services fuelled their growth at every step.",
    img: "portfolio-quickx.png",
    slug: "quickx-crypto-case-study",
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
}

export const metadata = generateMetadata({
    title: meta.title,
    description: meta.description,
    datePublished: meta.date_published,
    dateModified: meta.date_modified,
    openGraphImage: meta.img,
    slug: meta.slug,
});

export default function PortfolioDetail() {

    return (
        <>
            <WebpageJsonLd metadata={meta} />
            <Layout>
                <Hero cursorColor="#0D0A29" title="QuickX Crypto Mobile Exchange" linkText="Quickx.app" link="#" industry="SAAS" year="2019-20" />
                <ParallaxImage id="firstFade" imgSrc="/quickx/quickx-casestudy-image-1.webp" alt="quickx casestudy image 1" cursorColor="#0D0A29" cursorText="QuickX" />
                <Client content="QuickX has been taking cryptocurrencies to remote corners of the world and enhancing the utility of crypto in everyday life for all the day to day activities." tags={['Web Design', 'Branding', 'Marketing']} />
                <ParallaxImage id="firstFade" imgSrc="/quickx/quickx-casestudy-image-2.webp" alt="quickx casestudy image 2" cursorColor="#0D0A29" cursorText="QuickX" />
                <ContentSection
                    title="The Ask"
                    contentB={["As the project commenced, both teams found themselves facing obstacles that tested their creativity, technical expertise, and resilience."]}
                    contentN={[
                        "While Wragby's vision was as clear as a cloudless sky, the challenges were as daunting as climbing Mount Everest in flip-flops. The first hurdle: creating a website that encapsulated Wragby's awe-inspiring ingenuity without getting lost in the vortex of technical jargon. With Wragby's extensive portfolio of innovative solutions, the task of organizing and presenting the information in a digestible format was like trying to solve a Rubik's cube blindfolded.",
                        "The second challenge: designing a user experience that even your tech-averse grandma could navigate with ease. In a world where attention spans rival those of goldfish, the website needed to be engaging, intuitive, and snappy while showcasing Wragby's complex offerings without overwhelming users.",
                        "And lastly, developing a site that could handle the constant flux of innovative content. Wragby's brilliance knows no bounds, and their website needed to be a living, breathing entity, capable of adapting and growing alongside the company."
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="QuickX Image" />
                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "We decided to play by our own rulebook, tossing conventional wisdom out the window like an old Nokia brick phone. We began with a deep dive into Wragby's psyche, absorbing their every quirk and vision like a sponge in the depths of the ocean. This immersion allowed our team to channel Wragby's innovative spirit into every aspect of the website.",
                        "Next, we concocted a design so visually alluring, it could make the Sirens of Greek mythology green with envy. The design featured bold colors, futuristic layouts, and interactive elements that turned the website into a digital playground, inviting users to explore and discover Wragby's groundbreaking solutions.",
                        "Then we addressed the challenge of presenting complex information in a digestible manner. We employed storytelling techniques, weaving Wragby's technical offerings into engaging narratives that humanized the company and connected with users on an emotional level. This approach transformed what could have been a maze of jargon into a thrilling odyssey through the world of technology.",
                        "And finally, Enigma took a page out of Wragby's book, deploying agile development methodologies to ensure the website could grow and evolve with the company like a chameleon on steroids. This strategy allowed the site to flex and adapt to Wragby's ever-expanding portfolio of innovative solutions, ensuring it remained a showcase of their cutting-edge expertise.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="QuickX Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="w-[85%] mx-auto h-[31vw] mix-blend-multiply overflow-hidden tablet:w-full tablet:h-[38vw] mobile:h-[120vw] dark:mix-blend-screen dark:invert">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/quickx/quickx-casestudy-font-image-1.webp"
                                alt="QuickX Casestudy Fonts Image"
                                className="block mobile:hidden w-full"
                            />
                            <Image
                                priority={false}
                                width={350}
                                height={780}
                                src="/assets/portfolio/detail/quickx/quickx-casestudy-font-image-2.webp"
                                alt="QuickX Casestudy Fonts Image"
                                className="hidden mobile:block"
                            />
                            <Image
                                priority={false}
                                width={350}
                                height={780}
                                src="/assets/portfolio/detail/quickx/quickx-casestudy-font-image-3.webp"
                                alt="QuickX Casestudy Fonts Image"
                                className="hidden mobile:block"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-auto">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tablet:hidden">
                            <p className="text-[17vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%] color-text">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[90%] h-4/5 mx-auto relative z-10 flex items-center justify-center">
                            <div className="flex items-end justify-start w-full tablet:block text-[0.9vw] font-heading tracking-wider text-white tablet:text-[1.8vw] mobile:text-[3vw] dark:text-black">
                                <div style={color1} className="w-[34%] p-[1vw] flex justify-start items-end origin-left h-[10vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #841AFF <br /> Hex: #5C0DF6 <br /> Hex: #B305FA </div>
                                <div style={color2} className="w-[28%] p-[1vw] flex justify-start items-end origin-left h-[8vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #00050D <br />  Hex: #10064C</div>
                                <div className="w-[21%] p-[1vw] flex justify-start items-end origin-left bg-[#841aff] h-[6vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #841AFF</div>
                                <div className="w-[17%] p-[1vw] flex justify-start items-end origin-left bg-[#16171d] h-[4vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #16171D</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="QuickX Cryptocurrencies"
                    videoSrc="quickx/quickx.mp4"
                    poster="quickx/quickx-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "Enigma opted for a classic combo: HTML, CSS, JS, jQuery, and WordPress. This dynamic quintet of technologies provided a flexible, battle-tested foundation for Wragby's digital fortress that could withstand the test of time. HTML and CSS laid the groundwork for visual appeal, while JavaScript and jQuery injected interactivity and flair, and WordPress offered a user-friendly content management system for Wragby's ever-evolving content needs.",
                    ]}
                />
                <ParallaxImage id="firstFade" imgSrc="/quickx/quickx-casestudy-image-11.webp" alt="quickx casestudy image 11" cursorColor="#0D0A29" cursorText="QuickX" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "Wragby's innovative spirit now had a digital home that not only reflected its essence but also attracted talent, clients, and partners from across the African continent and beyond. The seamless user experience had users exploring the site with the enthusiasm of Indiana Jones on a treasure hunt, while the engaging narratives forged emotional connections that turned visitors into loyal clients.",
                        "The website's ability to adapt and evolve alongside Wragby's growth ensured that the company's digital presence would remain relevant and impressive for years to come. The collaboration between Enigma Digital and Wragby Business Solutions produced a website that defied convention and set a new standard for digital excellence in the African technology landscape.",
                    ]}
                />
                <ParallaxImage id="firstFade" imgSrc="/quickx/quickx-casestudy-image-12.webp" alt="quickx casestudy image 12" cursorColor="#0D0A29" cursorText="QuickX" />
                <Testimonial
                    cImg="quickx/quickx-client-image.webp"
                    text="Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
                    cName="Akin Banuso"
                    cTitle="CEO, Wragby Business Solutions"
                />
                <ProjectSlider currentProject="quick-x" />
            </Layout>
            <PageLoader loaderText="QuickX Crypto Case Study" />
        </>
    )
}

const ImageGrid1 = [
    {
        src: "quickx/quickx-casestudy-image-3.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-4.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-5.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-6.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    }
]

const ImageGrid2 = [
    {
        src: "quickx/quickx-casestudy-image-7.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-8.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-9.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    },
    {
        src: "quickx/quickx-casestudy-image-10.webp",
        cursorColor: "#0D0A29",
        cursorText: "QuickX",
    }
]

const color2 = {
    background: "linear-gradient(314deg,#00050d,#10064c) 0 0 no-repeat padding-box"
}
const color1 = {
    background: "linear-gradient(122deg, #841aff, #5c0df6 49%, #b305fa) 0 0 no-repeat padding-box"
}