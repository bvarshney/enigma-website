import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Aero from "@/components/ServiceDetail/Aero";
import SecondSection from "@/components/ServiceDetail/SecondSection";
import Portfolio from "@/components/ServiceDetail/Portfolio";
import Approach from "@/components/ServiceDetail/Approach";
import Process from "@/components/ServiceDetail/Technology/Process";
import OfferCards from "@/components/ServiceDetail/Technology/OfferCards";
import Hero from "@/components/ServiceDetail/Technology/Hero";
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "Award-Winning Web Development and Technology Services | Enigma",
    description: "Enigma offers front-end development, custom web and app development, DevOps, cloud engineering, and other technology services to build seamless digital experiences.",
    img: "service-technology.png",
    slug: "technology-services",
    date_published: "2020-10-22T00:00",
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

export default function ServiceDetail() {


    return (
        <>
            <WebpageJsonLd metadata={meta} />
            <Layout>
                <Hero />
                <SecondSection
                    text1="Our technology solutions not only meets today's needs but also anticipates tomorrow's challenges. We champion a human-centered, design-driven methodology in product development, harnessing the latest in cutting-edge technologies and agile practices. Our pioneering solutions are developed to scale alongside your business, guaranteeing not just longevity but also the flexibility to adapt to market shifts. Our deep-rooted expertise in user experience design ensures that every solution we craft not only meets but exceeds user expectations, fostering satisfaction and encouraging adoption."
                    text2="Our technology solutions not only meets today's needs but also anticipates tomorrow's challenges. We champion a human-centered, design-driven methodology in product development, harnessing the latest in cutting-edge technologies and agile practices. Our pioneering solutions are developed to scale alongside your business, guaranteeing not just longevity but also the flexibility to adapt to market shifts. Our deep-rooted expertise in user experience design ensures that every solution we craft not only meets but exceeds user expectations, fostering satisfaction and encouraging adoption."
                    btnText="Let's Build Your Idea"
                />
                <Aero text="pioneering technology solutions for tomorrow's market leaders." />
                <Portfolio data={portfolioContent} heading1="Development" heading2="Portfolio" />
                <Approach content={approachContent} />
                <Process />
                <OfferCards />
                <NextPage title="Marketing" link="/organic-digital-marketing-services" bgImage="/assets/cursor/17.webp" />
            </Layout>
            <PageLoader loaderText="Technology Services" />
        </>
    )
}

const portfolioContent = [
    {
        cursorColor: "#E30B25",
        title: "QuickX",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/quickx.webp",
        link: "/quickx-crypto-case-study",
    },
    {
        cursorColor: "#0F1014",
        title: "Dharan",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/dharan.webp",
        link: "/dharan-ecommerce-case-study",
    },
    {
        cursorColor: "#FF8395",
        title: "PDTL",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/pdtl.webp",
        link: "/pdtl-ecommerce-automation-case-study",
    },
    {
        cursorColor: "#0D0A29",
        title: "Certvault",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/certvault.webp",
        link: "/certvault-case-study",
    },
]

const approachContent = [
    "Our approach to technology development is anchored in a deep understanding of the transformative power of technology when it's aligned with human-centric design. We believe that the most successful digital products are those that deliver exceptional user experiences, driven by design thinking and powered by the latest technological innovations.",
    "We prioritize clear communication and a shared vision with our clients, ensuring that every technological endeavour we embark on is a collaborative effort. Our focus is on creating value, driving engagement, and fostering long-term growth for your business. Our commitment is to deliver solutions that are not only robust and scalable but also intuitive and delightful to use. We achieve this by staying at the forefront of emerging technologies and industry best practices, ensuring that every project we undertake benefits from the most advanced and efficient solutions available.",
    "By choosing Enigma Digital, you're partnering with a team that is dedicated to excellence, innovation, and delivering a competitive edge in the digital landscape."
]