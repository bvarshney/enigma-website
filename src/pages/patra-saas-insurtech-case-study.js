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
import MetaData from "@/components/MetaData";
import { WebpageJsonLd } from "@/lib/json-ld";

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
        title: "Catapulting Patra's CX Through UX - Case Study | Enigma",
        description: "Dive into our Strategy, UX Planning, UI Design apporach, and the remarkable results we deliverd for Patra Corp, by building a real time reporting dashboard for their clients.",
        img: "portfolio-patra.png",
        slug: "patra-saas-insurtech-case-study",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero cursorColor="#436AD6" title="Client Reporting Dashboard for BPO Services" linkText="patracorp.com" link="https://www.patracorp.com/" industry="SAAS" year="2022" />
                <ParallaxImage id="firstFade" imgSrc="/patra/patra-case-study-image-1.webp" alt="patra casestudy image 1" cursorColor="#436AD6" cursorText="Patra" />
                <Client content="Patra is a global leader in the insurance industry, specializing in delivering business process outsourcing services. With a focus on insurance processes and insurtech solutions, Patra drives profitability and new customer acquisition across the sector. Their commitment to leveraging both human expertise and cutting-edge technology has positioned them as a trusted partner for insurance firms worldwide." tags={['UX Planning', 'UI Desing', 'Development']} />
                <ParallaxImage imgSrc="/patra/patra-case-study-image-2.webp" alt="patra casestudy image 2" cursorColor="#436AD6" cursorText="Patra" />
                <ContentSection
                    title="The Ask"
                    contentB={["In an era dominated by digital transformation, Patra's clients were still navigating the cumbersome process of manual report management. The reliance on Excel sheets for disseminating reports, costs, and invoices posed significant challenges. Not only was this method time-consuming, but it also lacked the real-time transparency that modern businesses crave. Clients were often left in the dark about their expenditures with Patra, having to wait for monthly reports from their account managers to gain clarity on their spending across various service verticals."]}
                    contentN={[
                        "This traditional approach had multiple pain points:",
                        "Lack of Real-time Insights: Clients had no immediate access to their spending data. This delay hindered their ability to make timely decisions, impacting their operational efficiency.",
                        "Fragmented Data Sources: With services spanning policy checking, policy printing & delivery, customer support, and other insurance back-office tasks, the data was scattered across multiple Excel sheets. This fragmentation made it challenging for clients to get a holistic view of their engagement with Patra.",
                        "Operational Inefficiencies: The manual process of collating, sending, and then interpreting these Excel reports was labor-intensive. It consumed valuable time that could have been better utilized in strategic decision-making.",
                        "Potential for Errors: Manual data entry and report generation always comes with the risk of human errors. Any discrepancies in the reports could lead to misunderstandings and potential conflicts.",
                        "Patra was keen on transitioning from this archaic system to a more streamlined, digital solution. The goal was clear: to design a client reporting dashboard that would not only address these challenges but also position Patra as a forward-thinking leader in the insurance BPO sector. The stakes were high, and the timelines, even tighter.",
                    ]}
                />
                <ImageGrid images={ImageGrid1} alt="Patra Showcase Image" />
                <ContentSection
                    title="Our Approach"
                    contentN={[
                        "Our first step was to immerse ourselves in the world of Patra's clients. We needed to understand their pain points, their expectations, and the kind of data that was crucial for their decision-making processes. Through a series of consultations and brainstorming sessions, we mapped out the user journey, identifying key touchpoints and data retrieval points.",
                        "For the UI design, clarity was our mantra. We aimed for a clean, uncluttered interface where data visualization took center stage. Interactive charts, real-time counters, and color-coded alerts were integrated, ensuring that users could grasp the status and updates at a mere glance.",
                        "The UX planning was all about efficiency. We streamlined the data retrieval process, ensuring that the most sought-after information was readily available. Customizable dashboards were introduced, allowing users to tailor their view based on their unique needs. Seamless navigation paths were designed, ensuring that even a first-time user could navigate the dashboard with ease.",
                    ]}
                />
                <ImageGrid images={ImageGrid2} alt="Patra Showcase Image" />

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
                <section ref={colorContainer} id="color-section">
                    <div className="h-screen w-[85%] relative mx-auto my-[10vw] tablet:my-[15vw] tablet:h-auto">
                        <h3 className="font-heading font-medium text-[4vw] text-black2 uppercase mb-[2.5vw] tablet:text-[5vw] mobile:text-[7vw] tablet:mb-[6vw] mobile:mb-10">Colours</h3>
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tablet:hidden">
                            <p ref={text} className="text-[17vw] leading-[1] font-heading font-semibold text-white2 translate-y-[20%]">
                                Colour <br /> Palette
                            </p>
                        </div>
                        <div className="w-[90%] h-4/5 mx-auto relative z-10 flex items-center justify-center">
                            <div className="flex items-end justify-start w-full tablet:block text-[0.9vw] font-heading tracking-wider text-white tablet:text-[1.8vw] mobile:text-[3vw] dark:text-black">
                                <div className="w-[34%] p-[1vw] flex justify-start items-end origin-left bg-[#436AD6] h-[10vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #436AD6</div>
                                <div className="w-[28%] p-[1vw] flex justify-start items-end origin-left bg-[#00CA72] h-[8vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #00CA72</div>
                                <div className="w-[21%] p-[1vw] flex justify-start items-end origin-left bg-[#FFCC00] h-[6vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #FFCC00</div>
                                <div className="w-[17%] p-[1vw] flex justify-start items-end origin-left bg-[#FB275D] h-[4vw] color tablet:w-full tablet:h-[15vw] mobile:h-[25vw] mobile:p-4">Hex: #FB275D</div>
                            </div>
                        </div>
                    </div>
                </section>

                <VideoSection
                    title="100% Transparency with Real-time Data & Insights"
                    videoSrc="patra/patra.mp4"
                    poster="patra/patra-poster.webp"
                />
                <ContentSection
                    title="UX + TECH"
                    contentN={[
                        "When it came to UX, we put ourselves in the client's shoes. We felt their pain points and frustrations trying to access and make sense of data. It was clear they needed more than just a functional dashboard - they needed one that felt intuitive. We meticulously planned everything - from how data visualization tools were placed to the flow of information.",
                        "But the real magic happened when we started building the front-end. This is where the dashboard came alive visually! We leveraged the power of ReactJS to make it dynamic and responsive. No more clunky and static data dashboards. To take it to the next level, we integrated Tailwind, a utility-first CSS framework. Tailwind was like a secret weapon, allowing us to rapidly develop the UI without compromising aesthetics. Suddenly, making it beautiful was quick and easy.",
                        "The end result? A dashboard that was not only gorgeous to look at, but also wicked fast.",
                    ]}
                />
                <ParallaxImage imgSrc="/patra/patra-case-study-image-3.webp" alt="patra casestudy image 3" cursorColor="#436AD6" cursorText="Patra" />
                <ContentSection
                    title="The Result"
                    contentN={[
                        "The Client Reporting Dashboard was unveiled to resounding success. Clients lauded the intuitive design, the customizable features, and the real-time data access. The fusion of our UX planning with the cutting-edge tech stack ensured that Patra's client reporting dashboard was more than just a tool; it was a transformative solution. Clients could now access real-time updates, understand their expenditures across various service verticals, and make informed decisions, all through a platform that epitomized efficiency and speed.",
                        "The dashboard not only strengthened Patra's position as a leader in insurance BPO services but also showcased their commitment to leveraging technology for client benefit. The project, completed under tight timelines, set a new benchmark for insurtech solutions, proving that with the right strategy and execution, challenges can be transformed into opportunities.",
                    ]}
                />
                <ParallaxImage imgSrc="/patra/patra-case-study-image-4.webp" alt="patra casestudy image 4" cursorColor="#436AD6" cursorText="Patra" />
                <Testimonial
                    cImg="patra/client-image.webp"
                    text="Enigma Digital's prowess in UI design, UX planning, and front-end development has truly set a new standard. The Client Reporting Dashboard is not just a tool; it's a game-changer. It has empowered our clients with real-time insights, leading to faster decision-making and enhanced operational efficiency. The team's dedication, especially under tight timelines, is commendable. A big shout-out to Enigma Digital for making this project a resounding success!"
                    cName="Tony Li"
                    cTitle="CTO, Patracorp"
                />
                <ProjectSlider currentProject="patra" />
            </Layout>
            <PageLoader loaderText="Patra SAAS Case Study"/>
        </>
    )
}

const ImageGrid1 = [
    {
        src: "patra/patra-case-study-image-5.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-6.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-7.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-8.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    }
]

const ImageGrid2 = [
    {
        src: "patra/patra-case-study-image-9.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-10.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-11.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    },
    {
        src: "patra/patra-case-study-image-12.webp",
        cursorColor: "#436AD6",
        cursorText: "Patra",
    }
]