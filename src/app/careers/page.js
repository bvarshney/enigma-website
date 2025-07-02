import Benefits from "@/components/Careers/Benefits";
import BrowseJobs from "@/components/Careers/BrowseJobs";
import FullTimeListing from "@/components/Careers/FullTimeListing";
import Hero from "@/components/Careers/Hero";
import InternshipListing from "@/components/Careers/InternshipListing";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { getAllJobs } from '@/sanity/lib/jobsQuery'
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
    title: "Careers in Design, Tech & Marketing | Current Openings",
    description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
    img: "career.png",
    slug: "careers",
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
};

export const metadata = generateMetadata({
    title: meta.title,
    description: meta.description,
    datePublished: meta.date_published,
    dateModified: meta.date_modified,
    openGraphImage: meta.img,
    slug: meta.slug,
});

export default async function Careers() {
    const jobs = await getAllJobs()

    // split into full-time vs part-time/internship
    const fullTimeOpenings = jobs.filter(job =>
        job.categories.some(cat => cat.title.toLowerCase() === 'full-time')
    )
    const partTimeOpenings = jobs.filter(job =>
        job.categories.some(cat => cat.title.toLowerCase() === 'part-time')
    )

    return (
        <>
            <WebpageJsonLd metadata={meta} />
            <Layout>
                <Hero />
                <BrowseJobs />
                <Benefits />
                <FullTimeListing jobs={fullTimeOpenings} />
                <InternshipListing jobs={partTimeOpenings} />
            </Layout>
            <PageLoader loaderText="Careers At Enigma" />
        </>
    );
}
