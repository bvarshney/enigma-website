import ParallaxSlider from "@/components/Aboutpage/ParallaxSlider";
import Layout from "@/components/Layout";
import NextPage from "@/components/Layout/NextPage";
import ServiceMarquee from "@/components/Layout/ServiceMarquee";
import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import Hero from "@/components/Services/Hero";
import Process from "@/components/Services/Process";
import ServiceListing from "@/components/Services/ServiceListing";
import VideoSection from "@/components/Services/VideoSection";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/lib/media";

export default function Services() {

    fadeUp();
    ParaAnim();
    TitleAnim();

    const metadata = {
        title: "Award-Winning Web Design, UX Design & Digital Marketing Services",
        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
        img: "Service.png",
        slug: "services",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero />
                <ServiceListing />
                <Media greaterThan="mobile">
                    <VideoSection />
                </Media>
                <Process />
                <Media greaterThan="mobile">
                    <ParallaxSlider />
                </Media>
                <ServiceMarquee />
                <NextPage title="Works" link="/our-portfolio" bgImage="/assets/cursor/5.gif" />
            </Layout>
            <PageLoader loaderText="What We Do" />
        </>
    )
}