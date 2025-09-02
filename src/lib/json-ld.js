import Script from "next/script";

const siteName = 'Enigma Digital Agency';

const homepage = "https://weareenigma.com"

export function ArticleJsonLd({ post = {} }) {

  const { slug, date, author, modified, featuredImage, seo, tags } = post;
  const datePublished = !!date && new Date(date);
  const dateModified = !!modified && new Date(modified);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${homepage}/${slug}`,
    },
    headline: seo.title,
    image: [featuredImage?.sourceUrl],
    datePublished: datePublished ? datePublished.toISOString() : '',
    dateModified: dateModified ? dateModified.toISOString() : datePublished.toISOString(),
    description: seo.description,
    keywords: [tags.map(({ name }) => `${name}`).join(', ')],
    copyrightYear: datePublished ? datePublished.getFullYear() : '',
    author: {
      '@type': 'Person',
      name: author?.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${homepage}/enigma-logo.png`,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
    name: siteName,
    description: "Enigma is India's Leading UI/UX Design Agency that Leverages the Power of Emotion, Design, Technology, and Neuromarketing Strategies to Create Digital Products that People Love to Use.",
    url: homepage,
    telephone: "+91 8178 026 136",
    email: "hi@weareenigma.com",
    address: {
      "@type": 'PostalAddress',
      streetAddress: '#301, Tower A, Grandslam Ithum',
      addressLocality: 'Sector-62',
      addressRegion: 'Noida, Uttar Pradesh',
      postalCode: "201301",
      addressCountry: 'IN',
    },
    logo: `${homepage}/enigma-logo.png`,
    "sameAs": [
      "https://www.instagram.com/enigmadigital/",
      "https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing",
      "https://www.facebook.com/in.enigmadigital",
      "https://twitter.com/_EnigmaDigital"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: siteName,
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': "en-US",
    "publisher": [
      {
        "@id": `${homepage}/#organization`
      }
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function ImageObjectJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}/assets/seo/index.png`,
    url: `${homepage}/assets/seo/index.png`,
    width: "1200",
    height: "630",
    inLanguage: "en-US"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const { title, slug, description, date_published, date_modified } = metadata;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homepage}/${slug}#webpage`,
    url: `${homepage}/${slug}`,
    name: `${title}`,
    description: `${description}`,
    datePublished: `${date_published}`,
    dateModified: `${date_modified}`,
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/enigma-logo.png`,
      }
    },
    "about": {
      "@id": `${homepage}/${slug}#organization`
    },
    "isPartOf": {
      "@id": `${homepage}/${slug}#website`
    },
    "inLanguage": "en_US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function LocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteName,
    "image": `${homepage}/assets/seo/index.png`,
    "@id": "",
    "url": homepage,
    telephone: "+91 8178 026 136",
    address: {
      "@type": 'PostalAddress',
      streetAddress: '#301, Tower A, Grandslam Ithum',
      addressLocality: 'Sector-62',
      addressRegion: 'Noida, Uttar Pradesh',
      postalCode: "201301",
      addressCountry: 'IN',
    },
    "sameAs": [
      "https://www.instagram.com/enigmadigital/",
      "https://in.linkedin.com/company/enigma-digital-product-design-ui-ux-neuromarketing",
      "https://www.facebook.com/in.enigmadigital",
      "https://twitter.com/_EnigmaDigital"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:30",
        "closes": "8:30"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function JobpostingJsonLd({ job }) {
  const { title, seo, date, jobFields } = job

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": title,
    "description": seo.description,
    "identifier": {
      "@type": "PropertyValue",
      "name": siteName,
      "value": title,
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": siteName,
      "sameAs": homepage,
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/enigma-logo.png`,
      }
    },
    "industry": "Digital Marketing & Development Agency",
    "employmentType": jobFields.type,
    "datePosted": date,
    "validThrough": date,
    "jobLocation": {
      "@type": "Place",
      address: {
        "@type": 'PostalAddress',
        streetAddress: '#301, Tower A, Grandslam Ithum',
        addressLocality: 'Sector-62',
        addressRegion: 'Noida, Uttar Pradesh',
        postalCode: "201301",
        addressCountry: 'IN',
      },
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": jobFields.salary,
        "unitText": "YEAR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export function NavigationListJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "About",
        description: "Enigma is a team of creators, discoverers, dreamers, & doers, crafting exceptional digital experiences. We are India's leading UI UX design & marketing agency.",
        url: `${homepage}/who-we-are`
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Services",
        description: "Enigma offers UI UX design, Web Design, Mobile App Design, Frontend Development and Organic Digital Marketing Services. See how we can help your business grow.",
        url: `${homepage}/services`
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Works",
        description: "Explore Enigma's portfolio, a showcase of our diverse services in UI/UX design, branding, and web development, driving exceptional results.",
        url: `${homepage}/our-portfolio`
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Insights",
        description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
        url: `${homepage}/blog`
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Careers",
        description: "Experience top-tier UI/UX design, front-end development, and organic marketing jobs with Enigma Digital. Find The Right Jobs",
        url: `${homepage}/careers`
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Contact",
        description: "Contact Enigma for top-tier UI/UX design, front-end development, and organic digital marketing solutions. Let's collaborate and ascend your digital presence.",
        url: `${homepage}/get-in-touch`
      }
    ]
  }

return (
  <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
  </>
)
}

export function FAQJSONLD({ faqs }) {
  const faqJSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqJSONLD),
      }}
    />
  );
}