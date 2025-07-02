// import config from "../../../package.json";

// export default function MetaData({ metadata }) {

//     const { title, description, img, slug } = metadata;
//     const { homepage = "" } = config;

//     return {
//         title,
//         description,
//         alternates: {
//             canonical: `${homepage}/${slug}`,
//             languages: {
//                 "en-US": `${homepage}/${slug}`,
//             },
//         },
//         openGraph: {
//             title,
//             description,
//             url: `${homepage}/${slug}`,
//             images: [
//                 {
//                     url: `${homepage}/assets/seo/${img}`,
//                     width: 1200,
//                     height: 630,
//                     alt: "Page Og Image",
//                     type: "image/png",
//                 },
//             ],
//         },
//         twitter: {
//             title,
//             description,
//             images: [`${homepage}/assets/seo/${img}`],
//         },
//     };
// }
