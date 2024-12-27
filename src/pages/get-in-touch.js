import ContactDetails from "@/components/ContactPage/ContactDetails";
import Hero from "@/components/ContactPage/Hero";
import HomeAero from "@/components/Homepage/HomeAero";
import Layout from "@/components/Layout";
import ServiceMarquee from "@/components/Layout/ServiceMarquee";
import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import { fadeUp, TitleAnim } from "@/lib/gsapAnimations";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function ContactPage() {

    fadeUp();
    TitleAnim();

    const metadata = {
        title: "We Elevate Your Digital Presence | Contact Enigma",
        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
        img: "contact.png",
        slug: "get-in-touch",
        date_published: "2020-10-22T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <Hero />
                <ServiceMarquee />
                <ContactDetails />
                <HomeAero text="you're one call away from being awesome"/>
            </Layout>
            <PageLoader loaderText="Hi There! Let's Talk?" />
        </>
    )
}