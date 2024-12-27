import Benefits from "@/components/Careers/Benefits";
import BrowseJobs from "@/components/Careers/BrowseJobs";
import FullTimeListing from "@/components/Careers/FullTimeListing";
import Hero from "@/components/Careers/Hero";
import InternshipListing from "@/components/Careers/InternshipListing";
import Layout from "@/components/Layout";
import MetaData from "@/components/MetaData";
import PageLoader from "@/components/PageLoader";
import { fadeUp, ParaAnim, TitleAnim } from "@/lib/gsapAnimations";
import { getAllJobs } from "@/lib/jobs";
import { WebpageJsonLd } from "@/lib/json-ld";

export default function Careers({ jobs }) {

    fadeUp();
    TitleAnim();
    ParaAnim();

    const fullTimeJobs = jobs.filter(job => job.jobFields.type === 'full-time');
    const partTimeJobs = jobs.filter(job => job.jobFields.type === 'part-time');

  const metadata = {
    title: "Careers in Design, Tech & Marketing | Current Openings",
    description: "Explore exciting roles in UI/UX Design, Front-End Development, Digital Marketing, Business Development, and more. Impactful work in a collaborative environment.",
    img: "career.png",
    slug: "careers",
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <MetaData metadata={metadata} />
            <Layout>
                <Hero />
                <BrowseJobs />
                <Benefits />
                <FullTimeListing jobs={fullTimeJobs} />
                <InternshipListing jobs={partTimeJobs} />
            </Layout>
            <PageLoader loaderText="Careers At Enigma"/>
        </>
    )
}

export async function getStaticProps() {
    let  { jobs } = await getAllJobs({
        queryIncludes: 'archive',
    });

    return {
        props: {
            jobs,
        },
        revalidate: 1000,
    };
}