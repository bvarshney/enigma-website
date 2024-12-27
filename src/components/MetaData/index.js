import { NextSeo } from "next-seo";
import config from '../../../package.json';

export default function MetaData({ metadata }) {

    const { homepage = '' } = config;
    const { title, description, img, slug } = metadata;

    return (
        <NextSeo
            title={title}
            description={description}
            openGraph={{
                url: `${homepage}/${slug}`,
                title: `${title}`,
                description: `${description}`,
                images: [
                    {
                        url: `${homepage}/assets/seo/${img}`,
                        width: 1200,
                        height: 630,
                        alt: "Page Og Image",
                        type: "image/png",
                    },
                ],
            }}
            additionalMetaTags={[
                {
                    name: "twitter:title",
                    content: `${title}`
                },
                {
                    name: "twitter:description",
                    content: `${description}`
                },
                {
                    name: "twitter:image",
                    content: `${homepage}/assets/seo/${img}`
                },
            ]}
            canonical={`${homepage}/${slug}`}
            languageAlternates={[{
                hrefLang: 'en-US',
                href: `${homepage}/${slug}`,
            }]}
        />
    )
}