import { getJobBySlug } from "@/sanity/lib/jobsQuery"
import { client } from "@/sanity/lib/client";
import PortableTextComponent from "@/components/PortableTextComponent";
import PageLoader from "@/components/PageLoader";
import Layout from "@/components/Layout";
import JobApplicationForm from "@/components/Careers/JobApplicationForm";
import styles from "@/components/Careers/index.module.css";
import { notFound } from "next/navigation";
import { WebpageJsonLd } from "@/lib/json-ld";
import Link from "next/link";
import CareerDetailHero from "@/components/Careers/CareerDetailHero";

export async function generateStaticParams() {
  const all = await client.fetch(
    `*[_type == "job" && defined(slug.current)]{ "slug": slug.current }`
  )
  return all.map((j) => ({ slug: j.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

   if (!job) {
     return { title: "Job Not Found | Careers at Enigma Digital" };
   }

  // Ensure correct published & modified dates
  let datePublished = job.publishedAt ? new Date(job.publishedAt).toISOString() : "2023-01-01T00:00";
  let dateModified = job._updatedAt ? new Date(job._updatedAt).toISOString() : datePublished;

  // Check if job.mainImage and job.mainImage.asset exist
  const jobImageUrl = job.mainImage?.asset?.url || "/assets/seo/career.png";
  const siteUrl = "https://weareenigma.com";
  const jobUrl = `${siteUrl}/careers/${slug}`;

  return {
    title: `${job.jobTitle} | Careers at Enigma Digital`,
    description: job.smallDescription || "Join our team and shape the future.",
    canonical: jobUrl,
    date_published: datePublished,
    date_modified: dateModified,
    openGraph: {
      title: `${job.jobTitle} | Careers at Enigma Digital`,
      description: job.smallDescription || "Join our team and shape the future.",
      url: jobUrl,
      type: "website",
      date_published: datePublished,
      date_modified: dateModified,
      images: [{ url: jobImageUrl, width: 1200, height: 630, alt: job.jobTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${job.jobTitle} | Careers at Enigma Digital`,
      description: job.smallDescription || "Join our team and shape the future.",
      images: [jobImageUrl],
    },
    alternates: {
      canonical: jobUrl,
      languages: {
        hrefLang: "en-US",
        href: jobUrl,
      },
    },
  };
}

export default async function CareerDetailPage({ params }) {

  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return notFound()
  }

  const meta = {
    title: `${job.jobTitle} | Careers at Enigma Digital`,
    description: job.smallDescription,
    img: "career.png",
    slug: `careers/${slug}`,
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
      <WebpageJsonLd metadata={meta} />
      <Layout>
        {job.tag === "Closed" && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 backdrop-blur">
            <div className="text-center text-white">
              <h1 className="text-3xl mb-4">Applications for this role are Closed.</h1>
              <p className="text-xl">
                Keep an eye on our{" "}
                <Link href="/careers" className="text-primary hover:underline">
                  careers
                </Link>{" "}
                page for new opportunities.
              </p>
            </div>
          </div>
        )}

        <CareerDetailHero job={job} />

        <section className="overflow-hidden">
          <div className=" w-[85%] mx-auto flex justify-between my-[8vw] tablet:my-[15%] mobile:my-[20vw] tablet:block">
            <div className="w-[45%] tablet:w-full tablet:mb-16">
              <div className={styles.careerDetail}>
                <PortableTextComponent value={job.body} />
              </div>
            </div>

            <div className="w-[49%] shadow-xl rounded-xl px-16 py-10 mobile:px-4 dark:bg-white2 h-fit tablet:w-full">
              <h2 className="text-[3vw] tablet:text-4xl w-fit mx-auto font-heading font-medium mb-6">
                Apply<span className="text-primary"> Now</span>
              </h2>
              <div>
                <JobApplicationForm jobTitle={job.jobTitle} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
      <PageLoader loaderText={job.jobTitle} />
    </>
  );
}
