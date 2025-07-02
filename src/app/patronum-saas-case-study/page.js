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
    title: "Patronum Branding & Website Design Case Study | Enigma",
    description: "Enigma's Success Story of Patronum's Branding, UI/UX design, Website Design,and Front-End Development, achieving remarkable results for the SaaS Product.",
    img: "portfolio-patronum.png",
    slug: "patronum-saas-case-study",
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
                <Hero cursorColor="#0165E1" title="Swiss Army Knife for Google Workspace" linkText="Patronum.io" link="https://www.patronum.io" industry="SAAS" year="2019" />
                <ParallaxImage id="firstFade" imgSrc="/patronum/patronum-casestudy-image-1.webp" alt="patronum casestudy image 1" cursorColor="#3F86E4" cursorText="Patronum" />
                <Client content="Patronum was developed by Bespin Labs as an exclusive Google Workplace™ management tool. With an intuitive and powerful interface and advanced automation, it gives IT administrators all the tools they’ll ever need to effectively manage their user life cycle and data including automating repetitive tasks such as email signature management, contact sharing, and drive management." tags={['Branding', 'Web Design', 'Marketing']} />
                <ParallaxImage imgSrc="/patronum/patronum-casestudy-image-2.webp" alt="patronum casestudy image 2" cursorColor="#3F86E4" cursorText="Patronum" />
                <ContentSection
                    title="The Ask"
                    contentB={["The founding team at Patronum was on a quest to create a brand and online presence that would turn heads and drop jaws faster than a cheetah chasing its prey."]}
                    contentN={[
                        "They sought a digital partner that could not only help them navigate the treacherous waters of branding and web development but also help them create a lasting impression in the competitive SaaS arena. Hence, Patronum teamed up with Enigma to craft a brand identity and website that would shoot Patronum straight to the moon and beyond. Enigma's team of branding & design maestros, never one to shy away from a challenge, donned their digital superhero capes and embarked on a whirlwind adventure of ingenuity and pixel wizardry that would have made even Doctor Strange envious.",
                        "The road to stellar branding and web development was paved with challenges as steep as the Cliffs of Moher. First, We had to capture the essence of Patronum's innovative SaaS solutions and translate it into a brand identity that would turn heads and drop jaws. This was no easy feat, as Patronum's solutions were as diverse as the colors in a rainbow, and distilling their unique value proposition into a cohesive brand narrative was akin to herding cats.",
                        "Second, Enigma had to design a website that would guide users through the labyrinth of Patronum's offerings, all while making it look like a walk in the park. The website needed to strike a balance between visual appeal, user experience, and performance, ensuring that users could explore Patronum's solution offerings without getting lost in a maze of complexity. In a world where the competition for users' attention is fiercer than a cage match between gladiators, Patronum's website had to be nothing short of a digital masterpiece.",
                        "Lastly, the website needed to be built on a solid foundation that could accommodate the constant evolution and growth of Patronum's solutions. The team at Patronum was constantly churning out new features and offerings, and their website needed to be agile enough to keep pace with their product's relentless innovation."
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Patronum Image" />
                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "Like bees to honey, we were drawn to Patronum's unique vision and decided to take the road less traveled. We began by delving deep into Patronum's core values, extracting the golden nectar that would become the foundation of their brand identity. Armed with this valuable insight, our team of branding wizards concocted a visual potion that would resonate with the brand and capture the hearts and minds of Patronum's target audience. The resulting brand identity was a symphony of visual elements that told Patronum's story with grace and elegance.",
                        "For the website, we employed a user-centric approach, crafting an information architecture that was intuitive and would feel like a guided wizard tour to the entire website. We transformed complex wireframes into breathtaking page designs, ensuring each element sang in harmony with Patronum's newfound brand identity.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="Patronum Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="w-[85%] mx-auto h-[52vw] mix-blend-multiply overflow-hidden tablet:w-full tablet:h-[62vw] mobile:h-[190vw] dark:mix-blend-screen dark:invert">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/patronum/patronum-casestudy-font-desktop.webp"
                                alt="Patronum Casestudy Fonts Image"
                                className="block mobile:hidden w-full"
                            />
                            <Image
                                priority={false}
                                width={350}
                                height={780}
                                src="/assets/portfolio/detail/patronum/patronum-casestudy-font-mobile.webp"
                                alt="Patronum Casestudy Fonts Image"
                                className="hidden mobile:block"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section  id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-auto">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tablet:hidden">
                            <p  className="text-[17vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%] color-text">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[90%] h-4/5 mx-auto relative z-10 flex items-center justify-center">
                            <div className="flex items-end justify-start w-full tablet:block text-[0.9vw] font-heading tracking-wider text-white tablet:text-[1.8vw] mobile:text-[3vw] dark:text-black">
                                <div className="w-[34%] p-[1vw] flex justify-start items-end origin-left bg-[#1f56f9] h-[10vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #00415F <br /> Hex: #00B4F4</div>
                                <div className="w-[28%] p-[1vw] flex justify-start items-end origin-left bg-[#ec374d] h-[8vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #E33B52</div>
                                <div className="w-[21%] p-[1vw] flex justify-start items-end origin-left bg-[#013c9f] h-[6vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #013C9F</div>
                                <div className="w-[17%] p-[1vw] flex justify-start items-end origin-left bg-[#f9bc40] h-[4vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #F9BC40</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="The Google Workspace Manager"
                    videoSrc="patronum/patronum.mp4"
                    poster="patronum/patronum-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "We opted for a proven technology stack that packed a punch: HTML, CSS, JS, jQuery, and WordPress. This powerful combo offered the perfect blend of flexibility, maintainability, and scalability. HTML and CSS laid the groundwork for the site's structure and visual appeal, while JavaScript and jQuery injected interactivity and panache, making the website as captivating as a Broadway show. WordPress, the pièce de résistance, provided a user-friendly content management system that empowered Patronum's team to easily update and manage their content as their product continued to evolve.",
                    ]}
                />
                <ParallaxImage imgSrc="/patronum/patronum-casestudy-image-11.webp" alt="patronum casestudy image 11" cursorColor="#3F86E4" cursorText="Patronum" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "Enigma's branding and web development triumph was nothing short of a digital magnum opus. Patronum's new brand identity radiated the company's innovative spirit, while the website guided users through a seamless journey of discovery. Their mesmerizing brand identity and website catapulted their online presence to stratospheric heights. With skyrocketing web traffic, lead generation, and conversions, Patronum's online presence is truly out of this world, boldly going where no SaaS company had gone before.",
                    ]}
                />
                <ParallaxImage imgSrc="/patronum/patronum-casestudy-image-12.webp" alt="patronum casestudy image 12" cursorColor="#3F86E4" cursorText="Patronum" />
                <Testimonial
                    cImg="patronum/patronum-client-image.webp"
                    text="Enigma Digital's mastery of web design and development is truly unparalleled. Their ability to craft a website that not only captured our essence but also transformed our digital presence is nothing short of miraculous. We are beyond thrilled with the results and can't thank the Enigma team enough for their tireless dedication and creativity. Our collaboration has been a game-changer for Wragby Business Solutions, and we wholeheartedly recommend Enigma Digital to anyone seeking a top-notch digital partner!"
                    cName="Paul Lees"
                    cTitle="CEO, Patronum"
                />
                <ProjectSlider currentProject="patronum" />
            </Layout>
            <PageLoader loaderText="Patronum SAAS Case Study" />
        </>
    )
}

const ImageGrid1 = [
    {
        src: "patronum/patronum-casestudy-image-3.webp",
        cursorColor: "#EE384E",
        cursorText: "Illustration",
    },
    {
        src: "patronum/patronum-casestudy-image-4.webp",
        cursorColor: "#0A489B",
        cursorText: "Logo",
    },
    {
        src: "patronum/patronum-casestudy-image-5.webp",
        cursorColor: "#3F86E4",
        cursorText: "Illustration",
    },
    {
        src: "patronum/patronum-casestudy-image-6.webp",
        cursorColor: "#EE384E",
        cursorText: "Logo Pattern",
    }
]

const ImageGrid2 = [
    {
        src: "patronum/patronum-casestudy-image-7.webp",
        cursorColor: "#EE384E",
        cursorText: "Illustration",
    },
    {
        src: "patronum/patronum-casestudy-image-8.webp",
        cursorColor: "#0A489B",
        cursorText: "Logo",
    },
    {
        src: "patronum/patronum-casestudy-image-9.webp",
        cursorColor: "#3F86E4",
        cursorText: "Illustration",
    },
    {
        src: "patronum/patronum-casestudy-image-10.webp",
        cursorColor: "#EE384E",
        cursorText: "Logo Pattern",
    }
]