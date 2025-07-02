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
    title: "PDTL Ecommerce & Marketing Automation Case Study | Enigma",
    description: "Driving business succeess for a logistics company through marketing automation, neatly integrated with an ecommerce website for ease of maintenance.",
    img: "portfolio-pdtl.png",
    slug: "pdtl-ecommerce-automation-case-study",
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
                <Hero cursorColor="#234BA7" title="Driving Digital Success for a Leading Logistics Firm" linkText="ptllgv.co.uk" link="https://ptllgv.co.uk/" industry="Logistics" year="2022" />
                <ParallaxImage id="firstFade" imgSrc="/pdtl/pdtl-case-study-image-1.webp" alt="pdtl casestudy image 1" cursorColor="#234BA7" cursorText="PDTL" />
                <Client content="Manchester, the bustling heart of the UK, is home to a thriving logistics company that prides itself on providing top-notch services to its clientele. To stay ahead in an increasingly competitive market, the company recognized the need to revamp its online presence to better reflect its innovative approach and unwavering commitment to excellence. Enigma was recommended to the client and was tasked with delivering a smashing website transformation that would leave a lasting impression." tags={['Web Design', 'Branding', 'Development']} />
                <ParallaxImage imgSrc="/pdtl/pdtl-case-study-image-2.webp" alt="pdtl casestudy image 2" cursorColor="#234BA7" cursorText="PDTL" />
                <ContentSection
                    title="The Ask"
                    contentB={["Pennine clear-cut objectives: to create a visually appealing, user-friendly, and engaging website that would not only showcase the company's wide range of services but also facilitate seamless driver training course booking and online payments. The client's specific requirements included:"]}
                    contentN={[
                        "A modern and visually engaging design that would exude professionalism and innovation, reflecting the company's brand identity",
                        "A user-centric navigation structure that would allow for easy browsing and access to essential information about the company's services",
                        "A responsive design that would cater to users on various devices, ensuring a consistent and enjoyable experience",
                        "Integration of an intuitive booking system for driver training courses, complete with online payment functionality",
                        "An SEO-optimized website architecture to enhance search engine visibility and drive organic traffic"
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="PDTL Showcase Image" />

                <ContentSection
                    title="Our Approach"
                    contentB={["The team at Enigma tackled the project with precision, adopting a three-pronged approach:"]}
                    contentN={[
                        "A. Research & Collaboration: To ensure a deep understanding of the client's business, Enigma engaged in thorough market research and maintained open lines of communication with the logistics company. After all, what's more British than a good ol' chinwag?",
                        "B. Design & Development: Enigma's design team crafted visually appealing wireframes, incorporating the logistics company's branding and a touch of British flair. The development team then brought the designs to life using the latest web technologies.",
                        "C. Optimization & Launch: Before going live, Enigma performed rigorous testing to ensure a seamless user experience across devices. Finally, it was time to unleash the new website upon the unsuspecting digital landscape.",
                    ]}
                />

                <ImageGrid images={ImageGrid2} alt="PDTL Showcase Image" />

                {/* Fonts Section */}
                <section id="font-section">
                    <div className="w-[85%] mx-auto my-[10vw] tablet:my-[15vw] mobile:my-[20vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] mobile:mb-[10vw]">Fonts</h3>
                        <div className="w-[85%] flex items-center mix-blend-multiply justify-between mx-auto h-[30vw] overflow-hidden tablet:w-full tablet:h-[40vw] mobile:h-auto mobile:flex-col mobile:gap-10 dark:invert dark:mix-blend-screen">
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/pdtl/pdtl-case-study-fonts-light.webp"
                                alt="Certvault Casestudy Fonts Image"
                                className="block w-[45%] mobile:w-full"
                            />
                            <Image
                                priority={false}
                                width={1000}
                                height={1000}
                                src="/assets/portfolio/detail/pdtl/pdtl-case-study-fonts-dark.webp"
                                alt="Certvault Casestudy Fonts Image"
                                className="block w-[45%] mobile:w-full"
                            />
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section id="color-section">
                    <div className="h-[80vh] w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-[40vw] mobile:h-[60vw]">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-0">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tablet:hidden">
                            <p className="text-[15vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%] color-text">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[65%] h-4/5 mx-auto tablet:w-full relative z-10 flex items-center justify-center">
                            <div className="flex h-[12vw] tablet:h-[18vw] mobile:h-[24vw] items-end justify-center relative w-full text-white tablet:pr-0 text-xl mobile:text-[2vw] mobile:leading-[1.2] uppercase font-heading dark:text-black">
                                <div className="absolute left-0 flex items-center justify-center w-[12vw] h-[12vw] bg-[#000000] rounded-full shadow-xl tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] color">#000000</div>
                                <div className="absolute left-[18%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#19073B] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-xl color">#19073B</div>
                                <div className="absolute left-[36%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#BE1E2D] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#BE1E2D</div>
                                <div className="absolute left-[54%] flex items-center justify-center w-[12vw] h-[12vw] bg-[#0060AC] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#0060AC</div>
                                <div className="absolute left-[72%] text-black dark:text-white flex items-center justify-center w-[12vw] h-[12vw] bg-[#FFFFFF] tablet:w-[18vw] tablet:h-[18vw] mobile:w-[20vw] mobile:h-[20vw] rounded-full shadow-2xl color">#FFFFFF</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="PDTL Driver Training Institute"
                    videoSrc="pdtl/pdtl.mp4"
                    poster="pdtl/pdtl-poster.webp"
                />
                <ContentSection
                    title="Tech Stack"
                    contentB={["Our toolkit for this project included HTML, CSS, JS, jQuery, WordPress, and WooCommerce. This combination of technologies was chosen for several reasons:"]}
                    contentN={[
                        "HTML and CSS provided a solid foundation for a responsive and visually striking website",
                        "JavaScript (JS) allowed for dynamic interactivity, making the website engaging and user-friendly",
                        "jQuery, a popular JS library, simplified the implementation of complex features and ensured consistency across devices",
                        "WooCommerce, a powerful e-commerce solution, was seamlessly integrated for driver training course booking and online payment processing. Its seamless integration with WordPress, the content management system used for PDTL's website, cost-effectiveness, customisability, and vast plugin ecosystem made it the obvious choice for this project.",
                    ]}
                />
                <ParallaxImage imgSrc="/pdtl/pdtl-case-study-image-3.webp" alt="pdtl casestudy image 3" cursorColor="#234BA7" cursorText="PDTL" />
                <ContentSection
                    title="The Result"
                    contentB={["The finished product was a website that not only looked the part but performed like a well-tuned lorry, delivering exceptional user experiences and tangible business results:"]}
                    contentN={[
                        "A significant increase in website traffic and user engagement, thanks in part to the site's captivating design, streamlined navigation, and engaging content",
                        "A boost in online bookings for driver training courses, facilitated by the seamless integration of WooCommerce for secure and straightforward transactions",
                        "An uptick in search engine rankings, driving organic traffic and cementing PDTL's online presence",
                        "Positive feedback from clients and partners, who praised the website's ease of use, informative content, and the occasional dash of British humour.",
                    ]}
                />
                <ParallaxImage imgSrc="/pdtl/pdtl-case-study-image-4.webp" alt="pdtl casestudy image 4" cursorColor="#234BA7" cursorText="PDTL" />
                <Testimonial
                    cImg="pdtl/pdtl-client-image.webp"
                    text="Enigma has truly knocked it out of the park! Their expertise, creativity, and dedication have transformed our online presence, capturing the essence of our brand and injecting just the right amount of British charm. The results speak for themselves: increased traffic, more bookings, and a website we're proud to call our own. Enigma is the bee's knees, and we couldn't be happier with their stellar work!"
                    cName="Jared Bullock"
                    cTitle="Director, PDTL"
                />
                <ProjectSlider currentProject="pdtl" />
            </Layout>
            <PageLoader loaderText="PDTL Case Study" />
        </>
    )
}

const ImageGrid1 = [
    {
        src: "pdtl/pdtl-case-study-showcase-1.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-2.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-3.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-4.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    }
]

const ImageGrid2 = [
    {
        src: "pdtl/pdtl-case-study-showcase-5.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-6.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-7.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    },
    {
        src: "pdtl/pdtl-case-study-showcase-8.webp",
        cursorColor: "#234BA7",
        cursorText: "PDTL",
    }
]