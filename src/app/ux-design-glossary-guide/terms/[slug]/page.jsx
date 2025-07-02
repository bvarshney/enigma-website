import Layout from '@/components/Layout';
import PageLoader from '@/components/PageLoader';
import Card from '@/components/uxGlossary/Card';
import Data from '@/components/uxGlossary/Data.json';
import { WebpageJsonLd, WebsiteJsonLd } from '@/lib/json-ld';
import Image from 'next/image';
import { notFound } from 'next/navigation';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const term = Data.terms.find((term) => slugify(term.sName) === slug);

  if (!term) {
    return notFound();
  }

  const termSlug =  slugify(term.sName)

  const pageUrl = `https://weareenigma.com/ux-design-glossary-guide/terms/${termSlug}`;

  return {
    title: term.name,
    description: term.name,
    openGraph: {
      title: term.name,
      description: term.name,
      url: pageUrl,
      type: "article",
      images: [
        {
          url: `https://weareenigma.com/assets/seo/ux-design-glossary.png`,
          width: 1200,
          height: 630,
          alt: term.sName,
        },
      ],
      publishedTime: "2025-03-04T00:00",
      modifiedTime: "2025-03-04T00:00",
    },
    robots: "index, follow",
    twitter: {
      card: "summary_large_image",
      title: term.name,
      description: term.name,
      images: "https://weareenigma.com/assets/seo/ux-design-glossary.png",
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        hrefLang: "en-US",
        href: pageUrl,
      },
    },
  };
}

export default async function GlossaryModal({ params }) {
  const { slug } = await params;

  const term = Data.terms.find((term) => slugify(term.sName) === slug);

  if (!term) {
    return notFound();
  }

  const meta = {
    title: `${term.name}`,
    description: "Confused by UX jargon? Our UX glossary deciphers key UX terms and concepts in simple language, for beginners and experts alike! Bookmark this handy UX guide.",
    img: "ux-design-glossary.png",
    slug: "ux-design-glossary-guide/terms/" + slugify(term.sName),
    date_published: "2025-03-04T00:00",
    date_modified: "2025-03-04T00:00",
  };

  return (
    <>
      <Layout>
        <WebpageJsonLd metadata={meta} />
        <div className='min-h-screen w-screen flex items-start justify-center'>
          <div className="w-[90%] py-[10%] flex justify-between gap-16 tablet:flex-col tablet:py-[15%] mobile:py-[20%]">
            <div className='w-4/6 tablet:w-full mobile:w-full'>
              <div className="flex items-center mb-10 gap-10 tablet:gap-5 mobile:flex-col">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden aspect-[1] mobile:h-[100px] mobile:w-[100px]">
                  <Image className='w-full h-full object-cover aspect-1' src={term.icon} alt='glossary image' title='glossary image' height={150} width={150} />
                </div>
                <h1 className='text-[1.8vw] font-medium leading-[1.3] tablet:text-[4vw] mobile:text-[6vw] mobile:text-center'>{term.name}</h1>
              </div>
              <div className='px-[20px] relative w-full space-y-5 text-justify text-black2 mobile:px-3'>
                {term.description.map((paragraph, index) => (
                  <p key={index} className='text-[1.2vw] tracking-wide tablet:text-[3vw] mobile:text-[18px]'>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className='w-2/6 h-[80vh] tablet:h-auto overflow-hidden px-10 tablet:w-full tablet:px-0 tablet:hidden'>
              <div data-lenis-prevent className='w-full h-full overflow-y-auto space-y-16'>
                {Data.terms
                  .slice(0, 10)
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((term) => (
                    <Card key={term.id} term={term} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <PageLoader loaderText={term.sName} />
    </>
  );
}