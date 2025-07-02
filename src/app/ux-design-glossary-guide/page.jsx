import { WebpageJsonLd } from "@/lib/json-ld";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { generateMetadata } from "@/lib/metadata";
import Hero from "@/components/uxGlossary/Hero";
import { Listing } from "@/components/uxGlossary/Listing";

const meta = {
  title: "UX Design Glossary: Mastering UX Terms & Concepts",
  description: "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide.",
  img: "ux-design-glossary.png",
  slug: "ux-design-glossary-guide",
  date_published: "2023-01-01T00:00",
  date_modified: "2024-12-25T00:00",
};

export const metadata = generateMetadata({
  title: meta.title,
  description: meta.description,
  openGraphImage: meta.img,
  slug: meta.slug,
  date_published: meta.date_published,
  date_modified: meta.date_modified,
});

export default function GlossaryPage() {

  return (
    <>
      <WebpageJsonLd metadata={meta} />
      <Layout>
        <Hero />
        <Listing />
      </Layout>
      <PageLoader loaderText="The UX Design Glossary" />
    </>
  );
}


