import ContactDetails from "@/components/ContactPage/ContactDetails";
import Hero from "@/components/ContactPage/Hero";
import HomeAero from "@/components/Homepage/HomeAero";
import Layout from "@/components/Layout";
import ServiceMarquee from "@/components/Layout/ServiceMarquee";
import PageLoader from "@/components/PageLoader";
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "We Elevate Your Digital Presence | Contact Enigma",
    description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
    img: "contact.png",
    slug: "get-in-touch",
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

export default function ContactPage() {

    return (
        <>
            <WebpageJsonLd metadata={meta} />
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