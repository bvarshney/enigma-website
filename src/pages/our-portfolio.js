import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Portfolio/Hero";
import PortfolioAero from "@/components/Portfolio/PortfolioAero";
import WorksPortfolio from "@/components/Portfolio/WorksPortfolio";
import { fadeUp } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";

export default function PortfolioPage() {

    fadeUp();

    const metadata = {
        title: "Enigma's Portfolio: Showcasing Digital Mastery",
        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
        img: "work.png",
        slug: "our-portfolio",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero />
                <PortfolioAero text="we make it simple, but significant" />
                <WorksPortfolio />
                <Media greaterThan="mobile" className="mb-[5%] tablet:mb-[10%] mobile:mb-0">
                    <ParallaxSlider />
                </Media>
                <NextPage title="About" link="/who-we-are" bgImage="/assets/cursor/10.gif" />
            </Layout>
            <PageLoader loaderText="Our Meticulously Crafted Projects" />
        </>
    )
}