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
    title: "Garden City Mall - Phygital Shopping Experience Case Study | Enigma",
    description: "Witness how we crafted a phygital shopping experience for Lagos' premier retail destination. Explore Garden City Mall's digital transformation case study with Enigma.",
    img: "portfolio-gcm.png",
    slug: "gcm-phygital-shopping-case-study",
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
                <Hero cursorColor="#0165E1" title="Revolutionizing the Shopping Mall Experience" linkText="gardencitymall.com" link="https://grandmall.netlify.app/" industry="RETAIL" year="2022" />
                <ParallaxImage id="firstFade" imgSrc="/gcm/gcm-casestudy-image-1.webp" alt="gcm casestudy image 1" cursorColor="#EF9C34" cursorText="GCM" />
                <Client content="In the bustling heart of Lagos, Nigeria's capital city, a new, state-of-the-art shopping mall was under construction, poised to become the go-to destination for retail, dining, and entertainment experiences. As the mall's physical structure began to take shape, its developers recognized the need for an equally captivating online presence that would showcase the mall's unique offerings, attract potential tenants and visitors, and generate buzz within the community." tags={['Web Design', 'Development']} />
                <ParallaxImage imgSrc="/gcm/gcm-casestudy-image-2.webp" alt="gcm casestudy image 2" cursorColor="#EBA17D" cursorText="GCM" />
                <ContentSection
                    title="The Ask"
                    contentB={["The developers and promoters of Garden City mall enlisted Enigma's team to create a visually stunning and highly interactive website that would not only promote the mall but also provide a seamless and engaging user experience, capturing the essence of the mall's modern architecture and vibrant atmosphere."]}
                    contentN={[
                        "They also wanted to implement a content management system (CMS) that would enable the mall's management team to easily update and manage website content as the construction progresses through different stages and, ensure the website was optimized for search engines, mobile devices, and fast load times to provide a seamless and enjoyable user experience.",
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="GCM Image" />
                <ContentSection
                    title="Our Approach"
                    contentB={["We embraced the challenge of creating a one-of-a-kind digital experience for Garden City Mall by adopting an innovative and forward-thinking approach. The key pillars of our approach focused on:"]}
                    contentN={[
                        "Conducting thorough research to understand the local market, target audience, and competitive landscape, in order to develop a website that would resonate with users and stand out from the competition.",
                        "Collaborating closely with the mall's management and design teams to ensure the website's visual language and content aligned with the mall's brand identity and objectives.",
                        "Employing a user-centric design philosophy, prioritizing usability and engagement to create an immersive online experience that would encourage users to explore the mall's offerings and visit the physical location.",
                        "Utilizing cutting-edge web technologies and frameworks to develop a responsive, high-performance website that would deliver a seamless experience across all devices and platforms.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="GCM Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[10vw]">Fonts</h3>
                        <div className="w-[85%] flex justify-between dark:invert mx-auto mobile:w-full mobile:flex-col mobile:gap-10">
                            <Image
                                priority={false}
                                width={630}
                                height={300}
                                src="/assets/portfolio/detail/gcm/gcm-casestudy-font-1.webp"
                                alt="GCM Casestudy Fonts Image"
                                className="block h-[15vw] w-fit mobile:h-[40vw]"
                            />
                            <Image
                                priority={false}
                                width={630}
                                height={300}
                                src="/assets/portfolio/detail/gcm/gcm-casestudy-font-2.webp"
                                alt="GCM Casestudy Fonts Image"
                                className="block h-[15vw] w-fit mobile:h-[40vw]"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section  id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-[50vh] mobile:h-[40vh]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                            <p  className="text-[17vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%] color-text">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="absolute w-screen h-[50vw] right-[-10%] mx-auto z-10 flex items-center justify-center">
                            <Image
                                className="w-full h-full object-contain"
                                src="/assets/portfolio/detail/gcm/gcm-casestudy-colors.webp"
                                fill
                                alt="colors image"
                            />
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="The Garden City Mall"
                    videoSrc="gcm/gcm.mp4"
                    poster="gcm/gcm-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "To bring the Lagos mall's website to life, Enigma employed a powerful technology stack, featuring Next.js, a popular React-based framework, and GSAP (GreenSock Animation Platform). This technology stack was selected as Next JS allowed us to build a highly performant, server-rendered React application that provided an exceptional user experience while ensuring fast load times and optimal search engine optimization.",
                        "The component-based architecture of Next.js allowed for efficient development and easy maintenance, as well as the ability to create reusable, modular components that could be seamlessly integrated throughout the site during the development process. GSAP, a high-performance animation library, facilitated the creation of smooth, visually stunning animations that showcased GCM's offerings and features in a captivating and immersive manner.",
                    ]}
                />
                <ParallaxImage imgSrc="/gcm/gcm-casestudy-image-3.webp" alt="gcm casestudy image 3" cursorColor="#00232E" cursorText="GCM" />
                <ContentSection
                    title="The Result"
                    contentB={["The final product was a visually stunning, highly engaging, and user-friendly website that not only generated excitement for the upcoming mall launch but also served as an invaluable resource for visitors and prospective tenants alike. Key achievements of the project included:"]}
                    contentN={[
                        "A substantial boost in brand recognition and anticipation for the mall's opening, thanks in part to the website's striking visual appeal and the successful communication of the mall's unique selling propositions.",
                        "Positive feedback from prospective tenants and partners, who praised the website's user-centric design, wealth of information, and seamless inquiry submission process.",
                        "A marked improvement in search engine rankings and visibility, owing to the optimized site architecture, fast loading times, and mobile-friendly design.",
                        "In conclusion, Enigma's innovative approach to design, coupled with a deep understanding of the Lagos shopping mall's brand identity and strategic objectives, resulted in a groundbreaking website that captivated users and set the stage for the mall's highly anticipated launch. The success of this project not only highlights the power of creative collaboration but also underscores the importance of embracing cutting-edge technology and design principles to create truly unforgettable digital experiences.",
                    ]}
                />
                <ParallaxImage imgSrc="/gcm/gcm-casestudy-image-4.webp" alt="gcm casestudy image 4" cursorColor="#00232E" cursorText="GCM" />
                <Testimonial
                    cImg="gcm/gcm-client.webp"
                    text="Enigma exceeded our expectations in every way, delivering a website that truly captures the essence of our brand and sets the stage for our grand opening. Their unparalleled creativity, technical expertise, and dedication to excellence have positioned our shopping mall as the premier retail destination in Lagos. We couldn't be more thrilled with the results and look forward to a continued partnership with Enigma as we take our digital presence to even greater heights."
                    cName="Chinara Musa"
                    cTitle="Managing Director & Chief Promoter"
                />
                <ProjectSlider currentProject="gcm" />
            </Layout>
            <PageLoader loaderText="Garden City Mall Case Study"/>
        </>
    )
}

const ImageGrid1 = [
    {
        src: "gcm/gcm-casestudy-image-5.webp",
        cursorColor: "#A4A4CD",
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-6.webp",
        cursorColor: "#FFC09F",
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-7.webp",
        cursorColor: "#F8E890",
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-8.webp",
        cursorColor: "#ADF8B5",
        cursorText: "GCM",
    }
]

const ImageGrid2 = [
    {
        src: "gcm/gcm-casestudy-image-9.webp",
        cursorColor: '#323B44',
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-10.webp",
        cursorColor: "#FF9870",
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-11.webp",
        cursorColor: "#EF96B6",
        cursorText: "GCM",
    },
    {
        src: "gcm/gcm-casestudy-image-12.webp",
        cursorColor: "#E5BBA2",
        cursorText: "GCM",
    }
]