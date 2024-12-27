import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Aero from "@/components/ServiceDetail/Aero";
import SecondSection from "@/components/ServiceDetail/SecondSection";
import Portfolio from "@/components/ServiceDetail/Portfolio";
import Approach from "@/components/ServiceDetail/Approach";
import Process from "@/components/ServiceDetail/Marketing/Process";
import OfferCards from "@/components/ServiceDetail/Marketing/OfferCards";
import Blogs from "@/components/ServiceDetail/Blogs";
import Hero from "@/components/ServiceDetail/Marketing/Hero";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import MetaData from "@/components/MetaData";

export default function ServiceDetail() {

    fadeUp();
    TitleAnim();
    ParaAnim();

    const metadata = {
        title: "Organic Digital Marketing Services To Grow Your Business",
        description: "Increase brand visibility, website traffic, leads, and sales with Enigma's proprietary approach and proven mix of Content Marketing, SEO, and Social Media techniques.",
        img: "service-marketing.png",
        slug: "organic-digital-marketing-services",
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
                    text1="In a world where digital noise is deafening, your brand's voice deserves to be heard. We weave together the threads of SEO, Content Marketing, and Social Media, to create narratives that captivates and retains customer interest through organic search presence, compelling content, and meaningful social interactions. It’s time to rise above the cacophony without paying the price of admission."
                    text2="In the digital landscape, visibility is paramount, yet achieving it organically is becoming increasingly challenging. Businesses grapple with the reality that their voice is just one among millions clamouring for attention in the online arena. Oh! the frustration of crafting quality content that aligns perfectly with your brand ethos, only to watch it languish in the obscurity of search engine back pages can leave many feeling invisible, their valuable content unseen and unheard. At Enigma, we transcend these challenges by cultivate an organic presence for you that not only reaches but resonates with your audience. From content that informs and delights, to social media strategies that engage and build communities – we offer a holistic path to elevate your brand's online presence naturally and sustainably."
                    btnText="Let’s Skyrocket Your Growth"
                />
                <Aero text="transform your digital footprint into a fertile ground for growth" />
                <Portfolio data={portfolioContent} heading1="Marketing" heading2="Portfolio" />
                <Approach content={approachContent} />
                <Process />
                <OfferCards />
                <Blogs />
                <NextPage title="Strategy" link="/strategy-and-planning-services" bgImage="/assets/cursor/6.gif" />
            </Layout>
            <PageLoader loaderText="Organic Marketing Services" />
        </>
    )
}

const portfolioContent = [
    {
        cursorColor: "#E30B25",
        title: "Patronum",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/patronum.webp",
        link: "/patronum-saas-case-study",
    },
    {
        cursorColor: "#0F1014",
        title: "DMTCA",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/dmtca.webp",
        link: "/dmtca-digital-branding-case-study",
    },
    {
        cursorColor: "#FF8395",
        title: "Kedarkala",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/kedarkala.webp",
        link: "/kedarkala-portfolio-website-case-study",
    },
    {
        cursorColor: "#0D0A29",
        title: "Enigma Digital",
        description: "Digital Advisory and Consulting, Integrated Digital Marketing Plan (D.M.P.), User Experience Development, Customer Experience Strategy, Consumer Research, Insights & Target Market Analysis, Digital.",
        image: "/assets/service-detail/portfolio/enigma.webp",
        link: "#",
    },
]

const approachContent = [
    "Our approach to Organic Digital Marketing is rooted in a deep understanding of the digital ecosystem and the behaviours of its inhabitants. We recognize that true organic growth stems from a synergy of well-crafted content, search engine optimization, and social media engagement, all working in concert to amplify your brand's narrative.",
    "We begin by immersing ourselves in your brand's world, understanding your unique story, and the audience you wish to captivate. This foundational knowledge informs our content strategy, ensuring that every blog post, article, and social media update is not only relevant and engaging but also serves as a beacon, guiding your audience back to you. SEO is the compass by which we navigate the vastness of the digital landscape. Our experts meticulously optimize your online presence, ensuring that your brand ranks high for the right reasons and the right queries. We focus on building a robust framework that withstands the test of time and algorithm changes. Social media is the pulse of organic digital marketing, and we treat it with the respect it deserves. We craft social strategies that foster genuine connections, encourage conversations, and build communities around your brand.",
    "In essence, our approach is not about quick wins or shortcuts. It's about building a lasting digital presence that grows organically, driven by quality, relevance, and engagement. With us, your brand is not just seen; it's remembered and revered."
]