import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Aero from "@/components/ServiceDetail/Aero";
import SecondSection from "@/components/ServiceDetail/SecondSection";
import Portfolio from "@/components/ServiceDetail/Portfolio";
import Approach from "@/components/ServiceDetail/Approach";
import BigText from "@/components/ServiceDetail/BigText";
import Process from "@/components/ServiceDetail/Design/Process";
import OfferCards from "@/components/ServiceDetail/Design/OfferCards";
import Blogs from "@/components/ServiceDetail/Blogs";
import Hero from "@/components/ServiceDetail/Design/Hero";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/MetaData";

export default function ServiceDetail() {

    fadeUp();
    TitleAnim();
    ParaAnim();

    const metadata = {
        title: "Award-Winning UI/UX Design Services for Digital Excellence | Enigma",
        description: "Elevate your brand with our UI and UX design services. We craft exceptional digital experiences that boost revenue and user loyalty.",
        img: "service-ui-ux.png",
        slug: "ui-ux-design-services",
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
                    text1="Leveraging the power of modern tools, understanding of human behavioural patterns and our unique approach, we transform your vision into visually appealing and functionally seamless digital experiences that users love to explore and engage with. By understanding the needs of your users and your business goals, we approach the design process with an emotionally balanced human-centric approach. This enables us to deliver simple, stunning and user centric designs that engage your customers and boost your conversion rates as a by-product."
                    text2="In a digital-first world, the quality of a user's interaction with your digital touchpoints is pivotal — often the linchpin between a thriving business and a faltering venture. Users demand not just functionality but an intuitive, seamless, and aesthetically pleasing journey through your website or application. Recognising the importance of these touchpoints, we at Enigma Digital champion a human-centred design philosophy that meticulously blends empathy with empirical data to craft digital experiences that captivate and convert. Our approach is thorough: we delve into the heart of user needs and frustrations, employing robust analytics to illuminate the path forward. This culminates into designs that not only meet but exceed user expectations, fostering engagement and driving tangible business results."
                    btnText="Advance To Superior UX"
                />
                <Aero text="we craft emotionally intelligent user experiences that are adored globally!" />
                <Portfolio data={portfolioContent} heading1="UI/UX Design" heading2="Success Stories" />
                <Approach content={approachContent} />
                <Process />
                <BigText text="We solve complex design problems through user research, expert analysis, prototyping and collaborative design with users &amp; stakeholders." />
                <OfferCards />
                <Blogs />
                <NextPage title="Technology" link="/technology-services" bgImage="/assets/cursor/5.gif" />
            </Layout>
            <PageLoader loaderText="UI/UX Design Services" />
        </>
    )
}

const portfolioContent = [
    {
        cursorColor: "#0F1014",
        title: "Patra CRD",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/patra.webp",
        link: "/patra-saas-insurtech-case-study",
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
        title: "Certvault",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/certvault.webp",
        link: "/certvault-case-study",
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
    "Innovation fuels our creative process, as we harness cutting-edge tools and technologies to push the boundaries of design. We delve into the heart of user behaviour, leveraging extensive research to ensure our designs resonate deeply and deliver a personal touch. Our commitment to collaboration is unwavering, involving clients and stakeholders at every stage to align our creative vision with your business objectives. Through iterative prototyping and testing, we refine our designs to perfection, ensuring a seamless and intuitive user experience.",
    "Quality is the cornerstone of our approach at Enigma Digital. We pride ourselves on delivering designs that are meticulously crafted and rigorously tested to meet the highest standards. Our holistic design solutions cover every touchpoint of the user's journey, ensuring a cohesive and impactful digital presence.",
    "Our team is dedicated to staying ahead of the curve, crafting experiences that are not only contemporary but also future-proof. Data is our compass & human psychology is our co-pilot in this creative journey, guiding our design decisions with actionable insights to enhance usability and conversion rates."
]