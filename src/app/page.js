import Hero from "@/components/Homepage/Hero";
import Services from "@/components/Homepage/Services";
import TopAero from "@/components/Homepage/TopAero";
import Layout from "@/components/Layout";
import RecentBlogs from "@/components/Blogs/RecentBlogs";
import HomeAero from "@/components/Homepage/HomeAero";
import { Media } from "@/lib/media";
import AboutMobile from "@/components/Homepage/AboutMobile";
import AboutDesktop from "@/components/Homepage/AboutDesktop";
import CtaMobile from "@/components/Homepage/CtaMobile";
import Loader2 from "@/components/Loader2";
import HomePortfolio from "@/components/Portfolio/HomePortfolio";
import { LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";

const meta = {
  title: "Enigma Digital: A Global, Award-Winning UI UX Design Agency",
  description: "Enigma Digital, a global UI UX design Agency, delivers cutting-edge user interface design services across the USA, Canada, the Middle East, and India.",
  img: "index.png",
  slug: "",
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

export default function Homepage() {
  return (
    <>
      <LocalBusiness />
      <WebpageJsonLd metadata={meta} />
      <Layout>
        <Loader2 />
        <Hero />
        <Media greaterThan="tablet">
          <AboutDesktop />
        </Media>
        <Media lessThan="desktop">
          <AboutMobile />
          <CtaMobile />
        </Media>
        <TopAero text="we make cool things that do great business" />
        <Services />
        <HomePortfolio />
        <HomeAero text="good things happen when you say hello" />
        <RecentBlogs
          line1={"Our Creative"}
          line2={"Musings"}
          blogs={blogData}
        />
      </Layout>
    </>
  )
}

const blogData = [
  {
    title: "UX Design Glossary Guide",
    slug: "ux-design-glossary-guide",
    img: "/assets/blogs/featured/design-glossary.webp",
    category: "Design",
  },
  {
    title: "Beginners Guide To SEO: 30 Websites To Help You Getting Started On Your Link Building Journey",
    slug: "link-building-website-list",
    img: "/assets/blogs/featured/link-building.webp",
    category: "Marketing",
  },
  {
    title: "How Much Should A Website Cost? Cracking The Ultimate Conundrum",
    slug: "website-cost-guide",
    img: "/assets/blogs/featured/website-cost.webp",
    category: "Strategy",
  },
]