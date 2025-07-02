import { getBlogPosts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export default async function sitemap() {
  const siteUrl = "https://weareenigma.com";

  // ✅ Fetch Blog Posts
  const blogs = await getBlogPosts();

  // ✅ Fetch Career Pages (If Applicable)
  const careersQuery = `*[_type == "careers"][0].jobOpenings[]{ slug }`;
  const careers = await client.fetch(careersQuery);

  // ✅ Static Pages
  const staticPages = [
    "",
    "who-we-are",
    "services",
    "our-portfolio",
    "get-in-touch",
    "careers",
    "technology-services",
    "blog",
    "thank-you",
    "ui-ux-design-services"
  ];

  const categories =[
    "technology",
    "design",
    "consumer-psychology",
    "strategy",
    "marketing",
    
  ]
  const caseStudies=[
    "certvault-case-study",
    "dharan-ecommerce-case-study",
    "dmtca-digital-branding-case-study",
    "gcm-phygital-shopping-case-study",
    "get-in-touch",
    "kedarkala-portfolio-website-case-study",
    "organic-digital-marketing-services",
    "patra-saas-insurtech-case-study",
    "patronum-saas-case-study",
    "pdtl-ecommerce-automation-case-study",
    "quickx-crypto-case-study",
    "strategy-and-planning-services",
    "wragby-solutions-case-study"
  ]

  // ✅ Build Sitemap Entries
  const urls = [
    ...categories.map((page)=>({
      loc: `${siteUrl}/categories/${page}`,
      lastmod: new Date().toISOString(),
      priority: 0.6,
    })),
    ...caseStudies.map((page)=>({
      loc: `${siteUrl}/${page}`,
      lastmod: new Date().toISOString(),
      priority: 0.5,
    })),
    ...staticPages.map((page) => ({
      loc: `${siteUrl}/${page}`,
      lastmod: new Date().toISOString(),
      priority: 1.0,
    })),
    ...blogs.map((post) => ({
      loc: `${siteUrl}/${post.slug.current}`,
      lastmod: post.publishedAt,
      priority: 0.8,
    })),
    ...careers.map((job) => ({
      loc: `${siteUrl}/careers/${job.slug.current}`,
      lastmod: new Date().toISOString(),
      priority: 0.7,
    })),
  ];

  // ✅ Generate XML
  return urls.map((url) => ({
    url: url.loc,
    lastModified: url.lastmod,
  }));
}
