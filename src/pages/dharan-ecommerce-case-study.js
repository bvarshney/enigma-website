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
                scaleX: "0",
                stagger: 0.2,
                duration: 0.5,
            });
        });
        return () => ctx.revert();
    });

    const metadata = {
        title: "Dharan E-Commerce Design & Development Case Study | Enigma",
        description: "Discover Dharan's journey with Enigma, from traditional hand-block-printed clothing to a compelling online e-commerce presence. Read the transformation Story",
        img: "portfolio-dharan.png",
        slug: "dharan-ecommerce-case-study",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero cursorColor="#FF8395" title="Dharan - Fashionable Ecommerce Website" linkText="dharanclothing.com" link="https://www.dharanclothing.com/" industry="E-COMMERCE" year="2020" />
                <ParallaxImage id="firstFade" imgSrc="/dharan/dharan-casestudy-image-1.webp" alt="dharan casestudy image 1" cursorColor="#FF8395" cursorText="Dharan" />
                <Client content="Dharan, a renowned hand-block-printed clothing manufacturer based in India, is known for its exquisite garments featuring traditional designs, pastel shades, and intricate craftsmanship. Despite having a loyal customer base, Dharan struggled to translate its unique essence and charm into a compelling online presence. The client was on the lookout for a partner that would help them create a state-of-the-art e-commerce website that would not only showcase Dharan's magnificent products but also encapsulate the essence of their brand." tags={['E-Commerce', 'Web Design', 'Development']} />
                <ParallaxImage imgSrc="/dharan/dharan-casestudy-image-2.webp" alt="dharan casestudy image 1" cursorColor="#FF8395" cursorText="Dharan" />
                <ContentSection
                    title="The Ask"
                    contentB={["Dharan's existing website was plagued by several issues, including outdated design, poor navigation, and a lacklustre user experience."]}
                    contentN={[
                        "The website failed to evoke the same feelings of beauty, sophistication, and craftsmanship that Dharan's hand-block-printed clothing offered. The team at Enigma was tasked to design a website that reflects tradition, craftsmanship, and quality as the key brand identifiers.",
                        "The key challenge was to design & develop an engaging and interactive platform that highlights the unique aspects of Dharan's products, such as the traditional techniques, intricate designs, and pastel color palette that is used in traditional hand-block-printing. Next, we had to integrate an e-commerce solution that streamlines the purchasing process and ensures a secure, efficient, and hassle-free experience for customers.",
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Dharan Casestudy Image" />
                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "To address these challenges, Enigma adopted a groundbreaking approach, which involved a meticulous blend of art and technology, resulting in a website that was both visually captivating and highly functional. Our team immersed themselves in Dharan's history, design philosophy, and hand block printing techniques to gain a comprehensive understanding of the brand. This deep dive laid the foundation for a website design that would effectively embody Dharan's unique aesthetic.",
                        "We then prioritized user experience, creating an intuitive site layout that would guide visitors through the shopping process with ease. The site was designed with a focus on product discovery, enticing visitors to explore Dharan's stunning collection. To create an engaging and immersive experience, we integrated storytelling elements throughout the website, sharing the history of Dharan's craftsmanship and the journey behind each unique garment.",
                        "Lastly, we drew inspiration from Dharan's clothing designs and prints and incorporated pastel color schemes reflecting the traditional hues used in Indian block printing and intricate patterns throughout the website, evoking the beauty and craftsmanship of the garments themselves.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="Dharan Casestudy Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[5vw]">Fonts</h3>
                        <div className="w-[85%] mx-auto h-[100vw] mix-blend-multiply overflow-hidden tablet:w-full tablet:h-[120vw] dark:mix-blend-screen">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/dharan/dharan-casestudy-font.webp"
                                alt="Dharan Casestudy Fonts Image"
                                className="block w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section ref={colorContainer} id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-auto">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-start mobile:hidden">
                            <p ref={text} className="text-[15vw] leading-[1] font-heading font-semibold text-white2 tablet:text-[12vw] translate-y-[20%]">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[50%] h-4/5 ml-auto relative z-10 flex items-center justify-center mobile:w-4/5 mobile:mx-auto">
                            <div className="flex flex-col items-center gap-4 justify-start w-full text-[1.5vw] font-heading tracking-wider text-white tablet:text-[2vw] mobile:text-[3vw] dark:text-black">
                                <div className="w-[45%] rounded-br-[100px] mobile:rounded-br-[50px] p-[2vw] flex justify-start items-start origin-left bg-[#eb298e] h-[8vw] color tablet:w-4/5 tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">#EB298E</div>
                                <div className="w-[45%] rounded-br-[100px] mobile:rounded-br-[50px] p-[2vw] flex justify-start items-start origin-left bg-[#48484b] h-[8vw] color tablet:w-4/5 tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">#48484B</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="Dharan - Sustainable Faishon"
                    videoSrc="dharan/dharan.mp4"
                    poster="dharan/dharan-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentB={["HTML, CSS, JS, jQuery, GSAP, and Woo-Commerce"]}
                    contentN={[
                        "Our decision to choose WooCommerce over other e-commerce platforms including Shopify and Magento was driven by several factors, including:",
                        "Seamless integration with WordPress: As Dharan's team was already familiar with wordpress and they wanted their new website to be built on WordPress, WooCommerce offered seamless integration and a unified experience, enabling the team to manage both the website and e-commerce functionalities effortlessly.",
                        "Cost-effectiveness: WooCommerce, being an open-source platform, is more cost-effective than Shopify and Magento, especially for small to medium-sized businesses like Dharan. This allowed Dharan to focus on other aspects of their business without having to worry about hefty platform fees.",
                        "Flexibility and Customizability: WooCommerce provides a high degree of flexibility and customization options compared to Shopify and Magento. This was essential for Dharan, as it allowed Enigma to create a truly unique and tailor-made e-commerce experience that aligned with the brand's aesthetics and requirements.",
                        "Extensive Plugin Ecosystem: WooCommerce boasts an extensive plugin ecosystem that can be leveraged to add additional functionality and features to the e-commerce platform. This enabled Enigma to easily integrate various tools and plugins to enhance the shopping experience and streamline operations for Dharan.",
                        "Scalability: WooCommerce offered a scalable solution that could grow alongside Dharan's business. As the brand expands its product range and customer base, the WooCommerce platform can be easily adapted to accommodate this growth, ensuring a consistent and reliable e-commerce experience.",
                        "By leveraging this powerful technology stack, Enigma was able to create a visually captivating, highly engaging, and user-friendly e-commerce website that not only showcased Dharan's exquisite hand block-printed clothing but also encapsulated the essence of the brand.",
                    ]}
                />
                <ParallaxImage imgSrc="/dharan/dharan-casestudy-image-11.webp" alt="dharan casestudy image 11" cursorColor="#FF8395" cursorText="Dharan" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "The end result was a visually stunning, highly engaging, and user-friendly e-commerce website that not only showcased Dharan's exquisite hand-block-printed clothing but also encapsulated the essence of the brand. Key achievements of the project included:",
                        "A dramatic increase in online sales, attributable to the improved user experience, intuitive navigation, and captivating visual design.",
                        "Enhanced brand recognition and credibility, as the new website effectively communicated Dharan's unique value proposition and commitment to quality and craftsmanship",
                        "An increase in organic search traffic, driven by the website's mobile-first design, optimized performance, and adherence to SEO best practices.",
                        "As Dharan continues to grow and expand its reach, the lessons learned from this project will serve as a guiding light, informing future digital initiatives and ensuring that the brand's commitment to quality, tradition, and craftsmanship remains at the forefront of their online presence.",
                    ]}
                />
                <ParallaxImage imgSrc="/dharan/dharan-casestudy-image-12.webp" alt="dharan casestudy image 12" cursorColor="#FF8395" cursorText="Dharan" />
                <Testimonial
                    cImg="dharan/dharan-client.webp"
                    text="Dharan's collaboration with Enigma has been nothing short of transformative. The team at Enigma not only created a stunning e-commerce website that perfectly embodies our brand but also exceeded our expectations in terms of customer engagement and sales growth. The new website is truly a reflection of the beauty, craftsmanship, and tradition that define our hand block-printed clothing. We couldn't be more thrilled with the results and look forward to a continued partnership with Enigma as we take our digital presence to even greater heights."
                    cName="Dhananjey Singh"
                    cTitle="Founder and Creative Director, Dharan"
                />
                <ProjectSlider currentProject="dharan" />
            </Layout>
            <PageLoader loaderText="Dharan Case Study"/>
        </>
    )
}

const ImageGrid1 = [
    {
        src: "dharan/dharan-casestudy-image-3.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-4.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-5.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-6.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    }
]

const ImageGrid2 = [
    {
        src: "dharan/dharan-casestudy-image-7.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-8.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-9.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    },
    {
        src: "dharan/dharan-casestudy-image-10.webp",
        cursorColor: "#FF8395",
        cursorText: "Dharan",
    }
]