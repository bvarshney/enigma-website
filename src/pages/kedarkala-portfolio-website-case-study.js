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
import MetaData from "@/components/MetaData";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function PortfolioDetail() {

    const metadata = {
        title: "Kedarkala Web Design, UX & Branding Case Study | Enigma",
        description: "Dive into Kedarkala's transformation with Enigma's branding and Web Design expertise. Discover our approach, tech stack, and the stunning results achieved.",
        img: "portfolio-keadrkala.png",
        slug: "kedarkala-portfolio-website-case-study",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero cursorColor="#000" title="Kedarkala, a Luxury Interior Design Studio" linkText="kedarkala.com" link="https://phpstack-156292-2479564.cloudwaysapps.com/" industry="INTERIOR DESIGN" year="2022" />
                <ParallaxImage id="firstFade" imgSrc="/kedarkala/kedarkala-casestudy-image-1.webp" alt="kedarkala casestudy image 1" cursorColor="#000" cursorText="Kedarkala" />
                <Client content="Kedarkala, an award-winning and highly-regarded interior design studio in India, has long been known for its exceptional designs and meticulous attention to detail. As the demand for high-quality interior design services continues to grow, Kedarkala sought to establish a robust online presence that reflects its stellar reputation and showcases its stunning portfolio." tags={['Branding', 'Web Design']} />
                <ParallaxImage imgSrc="/kedarkala/kedarkala-casestudy-image-2.webp" alt="kedarkala casestudy image 2" cursorColor="#000" cursorText="Kedarkala" />
                <ContentSection
                    title="The Ask"
                    contentB={["Kedarkala's existing branding and website did not accurately represent their brand value, nor did it effectively resonate their extensive design portfolio."]}
                    contentN={[
                        "The key challenges - First, Kedarkala's existing brand identity was disconnected from the company's values and did not accurately represent the level of sophistication and elegance synonymous with their designs.",
                        "The existing website's visual design failed to capture the essence of Kedarkala's work, which is characterized by its creativity, sophistication, and innovation. A complete design overhaul was necessary to captivate and engage visitors. The website's structure made it difficult for users to navigate and find the information they were seeking. A more intuitive architecture was necessary to enhance the user experience and promote visitor engagement.",
                        "Moreover, Kedarkala's website did not perform well on mobile devices, which was detrimental to their online visibility and user satisfaction. The website's loading times were suboptimal, which negatively impacted user experience and contributed to a high bounce rate. Improving site performance was crucial to retain visitors and converting them into potential clients.",
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Kedarkala Casestudy Image" />
                <ContentSection
                    title="Our Approach"
                    contentB={["Understanding the importance of a cohesive brand identity and a seamless user experience, Enigma adopted a holistic approach to Kedarkala's digital transformation. This approach included:"]}
                    contentN={[
                        "A. Collaborative Discovery: We initiated a series of workshops and brainstorming sessions with Kedarkala's team to gain a deep understanding of their brand values, vision, and design philosophy. This collaborative process laid the foundation for a new brand identity and website design that accurately represented Kedarkala's essence.",
                        "B. Immersive Storytelling: To make the website engaging and fun, Enigma focused on crafting an immersive narrative that showcases Kedarkala's unique design approach and commitment to excellence. This storytelling approach allowed users to feel connected to the brand and encouraged them to explore the website further.",
                        "C. Intuitive Information Architecture: We restructured the website's information architecture, ensuring that visitors could effortlessly navigate the site and find the content they were looking for. This new architecture also allowed Kedarkala to effectively showcase their diverse portfolio, making it a focal point of the website.",
                        "D. Built with End User Experience in mind: Recognizing the importance of mobile devices in today's digital landscape, Enigma developed a fully responsive website that performed exceptionally across various devices and screen sizes, and a no-break experience for the entire website while moving from one page to another, ensuring a seamless user experience for all visitors.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="Kedarkala Casestudy Image" />

                {/* Fonts Section */}
                <section id="font-section" className="bg-[#0e0e0e] dark:bg-white1" data-cursor-exclusion>
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw] py-[10vw] mobile:py-[18vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-white dark:text-black uppercase mb-[5vw] tablet:text-[5vw] tablet:mb-[10vw] mobile:text-[7vw] mobile:mb-[10vw]">Typography</h3>
                        <div className="w-full flex justify-between mobile:flex-col mobile:items-center mobile:gap-[5vw]">
                            <Image
                                priority={false}
                                width={500}
                                height={750}
                                src="/assets/portfolio/detail/kedarkala/kedarkala-casestudy-font-image-1.webp"
                                alt="Kedar Casestudy Font Image"
                                className="block w-[35%] h-fit mobile:h-[60vw] mobile:w-fit"
                            />
                            <Image
                                priority={false}
                                width={500}
                                height={750}
                                src="/assets/portfolio/detail/kedarkala/kedarkala-casestudy-font-image-2.webp"
                                alt="Kedar Casestudy Font Image"
                                className="block w-fit h-[65vw] mobile:h-[100vw]"
                            />
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="Kedarkala Interior Design Studio"
                    videoSrc="kedarkala/kedarkala.mp4"
                    poster="kedarkala/kedarkala-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentN={[
                        "Enigma utilized a robust technology stack to create a cutting-edge website that would not only look stunning but also perform optimally. The chosen technologies included HTML5, CSS3, JavaScript, jQuery & GSAP.",
                        "HTML and CSS were used to create the structure and layout of the site. Our team of coding wizards crafted clean and semantic code that was both search engine friendly and easily maintainable. JavaScript & GSAP was employed to create interactive elements and enhance the website's overall functionality, resulting in a more dynamic and engaging user experience. This choice allowed for captivating motion effects that kept users engaged and immersed in Kedarkala's narrative.",
                    ]}
                />
                <ParallaxImage imgSrc="/kedarkala/kedarkala-casestudy-image-11.webp" alt="kedarkala casestudy image 11" cursorColor="#000" cursorText="Kedarkala" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "The collaboration between Enigma and Kedarkala yielded a visually stunning and highly functional website that accurately represented Kedarkala's brand identity and showcased their impressive portfolio. The new brand identity and website design effectively conveyed Kedarkala's sophistication and commitment to excellence, solidifying their reputation as India's best interior design company. The revamped information architecture and intuitive navigation resulted in a significant increase in user engagement and overall satisfaction.",
                        "The combination of engaging storytelling, captivating design, and seamless user experience with improved mobile responsiveness and search engine optimization, led to a surge in organic traffic and increased visibility online which further contributed to an increase in leads and conversion rates for Kedarkala.",
                    ]}
                />
                <ParallaxImage imgSrc="/kedarkala/kedarkala-casestudy-image-12.webp" alt="kedarkala casestudy image 12" cursorColor="#000" cursorText="Kedarkala" />
                <Testimonial
                    cImg="kedarkala/kedarkala-client-image.webp"
                    text="We couldn't be more thrilled with the outcome of our collaboration with Enigma. Their unconventional approach and attention to detail allowed them to create a website that truly reflects our brand's essence and showcases our work in the best possible light. The new website has not only improved our online presence but has also significantly increased our leads and conversions. We highly recommend Enigma to any business looking for a top-notch branding and website development partner."
                    cName="Shraddha Kasaudhan"
                    cTitle="Founder & CEO, Kedarkala"
                />
                <ProjectSlider currentProject="kedarkala" />
            </Layout>
            <PageLoader loaderText="Kedarkala Case Study" />
        </>
    )
}

const ImageGrid1 = [
    {
        src: "kedarkala/kedarkala-casestudy-image-3.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-4.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-5.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-6.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    }
]

const ImageGrid2 = [
    {
        src: "kedarkala/kedarkala-casestudy-image-7.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-8.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-9.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    },
    {
        src: "kedarkala/kedarkala-casestudy-image-10.webp",
        cursorColor: "#000",
        cursorText: "Kedarkala",
    }
]