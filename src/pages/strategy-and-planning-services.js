import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Aero from "@/components/ServiceDetail/Aero";
import SecondSection from "@/components/ServiceDetail/SecondSection";
import Hero from "@/components/ServiceDetail/Strategy/Hero";
import Portfolio from "@/components/ServiceDetail/Portfolio";
import Approach from "@/components/ServiceDetail/Approach";
import BigText from "@/components/ServiceDetail/BigText";
import Process from "@/components/ServiceDetail/Strategy/Process";
import OfferCards from "@/components/ServiceDetail/Strategy/OfferCards";
import Blogs from "@/components/ServiceDetail/Blogs";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/MetaData";

export default function ServiceDetail() {

    fadeUp();
    TitleAnim();
    ParaAnim();

    const metadata = {
        title: "Digital Strategy & Marketing Planning Services | Enigma",
        description: "Digital Strategy and Marketing Planning services that help brands gain clarity, define measurable goals, craft strategies for growth and achieve digital success.",
        img: "service-strategy.png",
        slug: "strategy-and-planning-services",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>      
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero />
                <SecondSection
                    text1="Strategic planning based on insight is the starting point of everything we do. Using a blend of strategic free-thinking, broad marketing experience, insights, and proven best practices, we create effective digital marketing strategies that transform data & insights into actionable plans that deliver measurable results."
                    text2="Navigating the complexities of a comprehensive digital strategy can be daunting for even the most experienced managers and business leaders. At Enigma, we understand the intricacies involved in aligning your digital footprint with the ever-evolving demands of customers, technology, and market competition. Our bespoke process is designed to demystify this challenge, offering robust strategies and digital solutions that deliver quantifiable results. We empower our clients with the tools, processes, and strategies necessary to not just respond to, but anticipate, lead, and dominate in their respective industries."
                    btnText="kickstart your growth"
                />
                <Aero text="we craft digital strategies for unrivalled dominance" />
                <Portfolio data={portfolioContent} heading1="Strategy" heading2="Success Stories" />
                <Approach content={approachContent} />
                <Process />
                <BigText text="By taking the <span className='text-primary'>L.E.A.P. </span>with Enigma Digital, you&apos;re not just getting a service; you&apos;re partnering with a team that&apos;s committed to leaping beyond the ordinary and achieving extraordinary results." />
                <OfferCards />
                <Blogs />
                <NextPage title="UI & UX Design" link="ui-ux-design-services" bgImage="/assets/cursor/2.gif" />
            </Layout>
            <PageLoader loaderText="Strategy & Planning Services" />
        </>
    )
}

const portfolioContent = [
    {
        cursorColor: "#0F1014",
        title: "Patronum",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/patronum.webp",
        link: "/patronum-saas-case-study",
    },
    {
        cursorColor: "#E30B25",
        title: "QuickX",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/quickx.webp",
        link: "/quickx-crypto-case-study",
    },
    {
        cursorColor: "#FF8395",
        title: "DMTCA",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/dmtca.webp",
        link: "/dmtca-digital-branding-case-study",
    },
    {
        cursorColor: "#0D0A29",
        title: "Kedarkala",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/kedarkala.webp",
        link: "/kedarkala-portfolio-website-case-study",
    },
]

const approachContent = [
    "We believe that the journey to digital success is a strategic one, meticulously charted and navigated with precision. With extensive research, meticulous planning & a detailed understanding of your product/services and your business goals, we create the perfect strategy that builds meaningful online experiences across multiple channels, to resonate with your audience at every touchpoint, and help your customers quickly find what they're looking for, resulting in delight for your users and business success for you.",
    "We leverage cutting-edge analytics and market insights to develop a comprehensive digital blueprint that propels your brand forward. Our deep understanding of the interplay between brand identity, user experience, and market dynamics allows us to create digital marketing strategies that are not just about being visible; but create a sustainable and impactful digital footprint. Our process is iterative and agile, adapting to the ever-evolving digital landscape.",
    "At Enigma, we don't just set the bar; we continually raise it. When you work with us, you're not just getting a digital strategy; you're embarking on a journey of digital transformation that will set you apart from the competition and establish your brand as a leader in the digital age."
]