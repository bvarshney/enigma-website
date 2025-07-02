export function generateMetadata({
    title,
    description,
    datePublished,
    dateModified,
    openGraphImage,
    slug,
    siteUrl = "https://weareenigma.com",
}) {
    return {
        title: title,
        description: description,
        date_published: datePublished,
        date_modified: dateModified,
        openGraph: {
            title: title,
            description: description,
            url: `${siteUrl}/${slug}`,
            type: "website",
            images: [
                {
                    url: `${siteUrl}/assets/seo/${openGraphImage}`,
                    width: 1200,
                    height: 630,
                    alt: "Page Og Image",
                    type: "image/png",
                },
            ],
            locale: "en_US",
            site_name: "Enigma Digital Agency"
        },
        twitter: {
            card: "summary_large_image",
            site: "Enigma Digital Agency",
            title: title,
            description: description,
            images: [
                {
                    url: `${siteUrl}/assets/seo/${openGraphImage}`,
                },
            ],
        },
        verification: {
            google: "aqmk50ZtfefKhtzh9Fr2VOpKByQGeMyL60rwwgl-r7A"
        },
        robots: "index, follow",
        alternates: {
            canonical: `${siteUrl}/${slug}`,
            languages: {
                hrefLang: 'en-US',
                href: `${siteUrl}/${slug}`,
            },
            types: {
                'application/rss+xml': `${siteUrl}/feed.xml`,
            },
        },
    }
}
