import React, { useState, useEffect, useRef } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import LinkButton from "../Buttons/LinkButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const listItem = containerRef.current.querySelectorAll(".service-container")
        const ctx = gsap.context(() => {
            const cateList = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    markers: false,
                }
            });

            cateList.from(listItem, {
                opacity: 0,
                y: 300,
                duration: 1.3,
                stagger: 0.2,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="services" className="w-full h-full py-[10%] tablet:py-[15%]">
            <div className="w-[64%] mx-auto tablet:w-[80%] mobile:w-[90%]">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {serviceData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index + 1}`}
                            className="group service-container">
                            <AccordionTrigger className="px-[1vw] flex justify-between tablet:py-7 mobile:py-4">
                                <div className="font-heading flex gap-x-4 text-black2 mobile:gap-x-2">
                                    <span className="text-lg tablet:text-xl mobile:text-sm">{item.id}</span>
                                    <span className="text-[5.5vw] leading-[1.4] service-title tablet:text-[8vw]">{item.title}</span>
                                </div>
                                <div className="flex items-center justify-center w-[2vw] h-[2vw] group-hover:rotate-90 transition-all duration-500 ease-out service-arrow tablet:h-[40px] tablet:w-[40px]">
                                    <span className="block h-[0.3vw] rotate-90 w-[1.8vw] tablet:h-[5px] tablet:w-[40px] mobile:w-[24px] mobile:h-[4px] absolute bg-current" />
                                    <span className="block h-[0.3vw] w-[1.8vw] tablet:h-[5px] tablet:w-[40px] mobile:w-[24px] mobile:h-[4px] absolute bg-current group-hover:opacity-0 duration-500 ease-out" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="text-[1.2vw] leading-[1.4] text-justify tracking-[1px] px-[17%] pb-[4vw] pt-[2vw] tablet:text-[3vw] tablet:px-[8%] tablet:pb-[10vw] mobile:text-lg mobile:tracking-wide mobile:leading-normal">
                                <p className="mb-[1.5vw] mobile:mb-4">{item.content1}</p>
                                <p className="mb-[2.5vw] mobile:mb-8">{item.content2}</p>
                                {item.content3 && (
                                    <p className="mb-[2.5vw] mobile:mb-8">{item.content3}</p>
                                )}
                                <LinkButton
                                    btnText={item.linkText}
                                    href={item.link}
                                />
                            </AccordionContent>
                            <span className="block h-[2px] w-full bg-white3" />
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Services;

const serviceData = [
    {
        id: "01",
        title: "Strategy",
        content1: "Strategic planning based on insight is the starting point of everything we do. As one of the leading UI UX and web design agencies, we combine strategic thinking, marketing expertise, insights, best practices, and sound judgment to craft effective strategies that turn insights into measurable results.",
        content2: "Driving growth and success for your brand needs a brilliant plan (roadmap) rooted in deep insights and aimed at delivering tangible results. Our web development consulting services include: UI design strategy, Branding, User Experience Development, Integrated Digital Marketing Plan (D.M.P.), Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Digital Marketing, and Website Performance Audit.",
        linkText: "Transform Your Business",
        link: "strategy-and-planning-services",
    },
    {
        id: "02",
        title: "UI/UX Design",
        content1: "Enigma Digital is a leading UI/UX design agency based in India. We help startups and enterprise companies create digital products, websites, mobile app UIs, and brand experiences.",
        content2: "We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach, we craft delightful and intuitive digital experiences that seamlessly bridge the gap between the physical and digital worlds.",
        content3: "Our UI design services blend creativity with functionality to craft digital experiences that captivate and engage users. We specialize in a wide range of UI/UX and website design services, including: User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, and Visual Designs.",
        linkText: "Upgrade Your Experience",
        link: "ui-ux-design-services",
    },
    {
        id: "03",
        title: "Technology",
        content1: "Enigma Digital is a professional website design agency specializing in creating effective user experiences for technology firms across various industries, including healthcare, e-commerce, legal services, finance, education, and fashion.",
        content2: "We follow a human-centered, design-led approach to product development—blending cutting-edge technologies with agile methodologies. Our mission is to help you thrive in today's fast-evolving digital landscape.",
        content3: "We create digital experiences that are not only visually appealing but also highly intuitive and user-friendly. Our front-end development expertise spans HTML, CSS, JavaScript, Vue, React, Angular, GSAP, and WordPress. For mobile app development, we utilize modern frameworks like Ionic and Flutter. On the backend, we build powerful, scalable solutions using PHP, NodeJS, and Python.",
        linkText: "Let's Build Your Idea",
        link: "technology-services",
    },
    {
        id: "04",
        title: "Marketing",
        content1: "Our brand marketing strategies are crafted not just to create a lasting impression but to drive user engagement, build brand loyalty, and seamlessly adapt to the dynamic digital landscape with precision and creativity.",
        content2: "For us, 'DIGITAL' isn't just a buzzword—it's the foundation of future-forward growth! This philosophy guides our service suite, tailored to evolve with our clients' needs and contribute directly to their success. Our offerings include: Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Online Reputation Management, Marketing Automation, Email Marketing, Conversion Rate Optimisation, and comprehensive Website & SEO Analysis.",
        linkText: "Ready? Let's Get Moving",
        link: "organic-digital-marketing-services",
    },
]