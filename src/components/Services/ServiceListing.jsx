import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const ServiceListing = () => {

    return (
        <>
            <section>
                <div className="w-[75%] mx-auto py-[15%] tablet:w-[90%] tablet:pt-[20%] mobile:pt-[30%] mobile:w-[85%]">
                    <div className="flex items-center justify-between text-[1.2vw] tablet:text-[3vw] mobile:block mobile:text-[5vw]">
                        <div className="w-[18%] tablet:w-[30%] mobile:w-[70%] mobile:mb-6">
                            <p className="para-anim">Here&apos;s how we help you grow.</p>
                        </div>
                        <div className="w-[40%] tablet:w-[55%] mobile:w-full">
                            <h2 className="text-[3vw] mb-[3vw] font-medium tablet:text-[5vw] mobile:text-[10vw] title-anim">Our Capabilities</h2>
                            <p className="text-justify para-anim">We create evergreen brands that are highly effective at boosting revenue, increasing brand equity, and improving ROI. Our big picture approach powers your entire business, not just the marketing department.</p>
                        </div>
                    </div>

                    <div className="pt-[10%] space-y-[10%] tablet:space-y-[20%] tablet:pt-[15%] mobile:pt-[20%] mobile:space-y-[25%]">
                        {content.map((item, index) => (
                            <Card 
                                key={index}
                                title={item.title}
                                description={item.description}
                                href={item.href}
                                imageUrl={item.imageUrl}
                                cursorColor={item.cursorColor}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceListing;

const Card = ({ title, href, description, imageUrl, cursorColor }) => {

    const imageRef = useRef(null);
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageContainer.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
                y: "20%",
            })
        });
        return () => ctx.revert();    
    }, []);

    return (
        <>
            <div className="flex justify-between flex-row items-center even:flex-row-reverse mobile:flex-col-reverse mobile:even:flex-col-reverse mobile:gap-[10vw]">
                <div className="w-1/2 mobile:w-full" data-cursor-text="Know More!" data-cursor-size="110px" data-cursor-color={cursorColor}>
                    <Link href={href} className="block">
                        <h3 className="text-[5vw] mb-[2vw] font-heading font-medium text-black2 tablet:text-[6.9vw] mobile:text-[10vw] fadeup">{title}</h3>
                        <p className="text-[1.2vw] text-justify tablet:text-[2.8vw] mobile:text-[4.5vw] para-anim">{description}</p>
                    </Link>
                </div>
                <div className="w-[35%] h-[40vw] overflow-hidden tablet:w-[40%] tablet:h-[55vw] mobile:w-full mobile:h-[100vw]">
                    <div ref={imageContainer} className="hover:scale-110 duration-500 w-full h-full relative">
                        <Image ref={imageRef} src={imageUrl} alt={`${title} image`} width={500} height={735} className="object-cover w-full h-full translate-y-[-20%] scale-105" priority={false} quality={75}/>
                    </div>
                </div>
            </div>
        </>
    )
}

const content = [
    {
        href: "/strategy-and-planning-services",
        title: "Strategy",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital Capabilities Development, Persona Design & Customer Segmentation, Competitive Analysis & Industry Insights, Brand & Content Strategy, Digital Marketing and Website Performance Audit.",
        imageUrl: "/assets/service/strategy.png",
        cursorColor: "#2b8c87"
    },
    {
        href: "/ui-ux-design-services",
        title: "UI/UX Design",
        description: "User Interface Design, User Experience Design, Responsive Web Design, Mobile App Design, Digital Interface Design, Design Systems Creation, Experience Mapping, User Flow Mapping, Wireframing & Prototyping, Illustrations & Animations, Visual Designs, and UI Kits.",
        imageUrl: "/assets/service/ui-ux.png",
        cursorColor: "#000"
    },
    {
        href: "/technology-services",
        title: "Technology",
        description: "Front-End Development, Native & Hybrid Mobile Application Development, Progressive Web Applications, Database Design & Management, Cloud Infrastructure Services, Testing & Automation TECH STACK - HTML, CSS, Sass, Less, JavaScript, jQuery, GSAP, Vue, React, React Native, Ionic, Flutter, NodeJS, Spring, JAVA, Grails, Hibernate, MySQL, PostgreSQL, Oracle, Mongo, AWS and Google Cloud.",
        imageUrl: "/assets/service/technology.png",
        cursorColor: "#fcc63d"
    },
    {
        href: "/organic-digital-marketing-services",
        title: "Marketing",
        description: "Social Media Management, Content Creation & Curation, Search Engine Optimisation, Influencer Management, Auction Media Management, Online Reputation Management, Media Planning & Buying, Marketing Automation, Email Marketing, Conversion Rate Optimisation, Website & SEO Analysis.",
        imageUrl: "/assets/service/marketing.png",
        cursorColor: "#000"
    }
]