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
import { FAQJSONLD, LocalBusiness, WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";
import NewFaq from "@/components/NewFaq";

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
      <FAQJSONLD faqs={faqContent} />
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
        <NewFaq content={faqContent}/>
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


const faqContent = [
  {
    question: "What is UX design, and why is it important for my website?",
    answer:
      "UX design, or User Experience design, focuses on creating digital products that are easy, enjoyable, and efficient for users to navigate. We at Enigma Digital enhance UX design to improve customer engagement and help businesses increase conversions.",
  },
  {
    question: "Why should I choose a UI UX design agency in India?",
    answer:
      "Choosing a UI UX design agency in India offers quality services at competitive pricing. We bring UX expertise combined with local market understanding, helping you achieve outstanding results.",
  },
  {
    question: "Do you offer UX design services for startups and enterprises?",
    answer:
      "Yes, we provide UX design solutions tailored for both startups and large enterprises. Whether you’re launching a new product or enhancing an existing one, our team delivers innovative and scalable designs.",
  },
  {
    question: "How does Enigma Digital ensure high-quality UX design?",
    answer:
      "We follow a proven UX process: research, strategy, design, prototyping, and testing. Our team uses industry best practices and innovative tools to ensure every solution is user-centric and effective.",
  },
  {
    question: "Can you help with website UX redesign?",
    answer:
      "If your website feels outdated or struggles to convert users, we can help you with UX redesign services that improve usability, aesthetics, and business performance.",
  },
  {
    question: "Do you offer UI UX design for mobile apps and e-commerce platforms?",
    answer:
      "Absolutely. We design seamless user experiences for mobile apps, SaaS platforms, and e-commerce websites, helping businesses engage users and increase sales.",
  },
  {
    question:"How much do UI UX design services cost?",
    answer:"UI UX design costs vary based on project size, complexity, and scope. Enigma Digital offers affordable pricing tailored to your business needs. Contact us for a customised quote."
  },
  {
    question:"Does Enigma Digital provide UX audits?",
    answer:"Yes, we offer comprehensive UX audits to identify usability issues and recommend improvements, helping businesses enhance their digital experiences."
  },
  {
    question:"Is Enigma Digital a UX/UI design company or purely UX-focused?",
    answer:"Enigma Digital is a full-service UX/UI design company. We combine beautiful user interfaces (UI) with seamless user experiences (UX) to deliver exceptional digital products."
  },
  {
    question:"In which countries does Enigma Digital UX Design Agency offer its services?",
    answer:"Enigma Digital is a leading UI/UX design agency with its head office in Noida, India. It specializes in user-centric UI/UX design services for business and consumer applications across multiple countries, including the USA, Canada, the Middle East, India, and beyond."
  }
];
