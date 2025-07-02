import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Portfolio/Hero";
import PortfolioAero from "@/components/Portfolio/PortfolioAero";
import WorksPortfolio from "@/components/Portfolio/WorksPortfolio";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "Enigma's Portfolio: Showcasing Digital Mastery",
    description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
    img: "work.png",
    slug: "our-portfolio",
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

export default function PortfolioPage() {

    return (
        <>
            <WebpageJsonLd metadata={meta} />
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