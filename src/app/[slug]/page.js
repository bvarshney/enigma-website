import { getBlogPostBySlug } from "@/sanity/lib/queries";
import PortableTextComponent from "@/components/PortableTextComponent";
import styles from "@/styles/blog.module.css";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import RelatedBlogs from "@/components/Blogs/RelatedBlogs";
import BlogInfo from "@/components/Blogs/BlogInfo";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation";
import { WebpageJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }) {
  const data = await getBlogPostBySlug(params.slug);

  if (!data.post) {
    notFound();
  }

  const { post } = data;
  const postUrl = `https://weareenigma.com/${post.slug.current}`;

  return {
    title: post.title,
    description: post.metaDescription || "Read this amazing article on our blog.",
    canonical: postUrl,
    openGraph: {
      title: post.title,
      description: post.metaDescription || "Read this amazing article on our blog.",
      url: postUrl,
      type: "article",
      images: [
        {
          url: post.metaImage?.asset?.url || "/default-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: new Date().toISOString(),
      authors: post.author?.map((author) => author.name) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || "Read this amazing article on our blog.",
      images: [post.metaImage?.asset?.url || "/default-image.jpg"],
    },
    alternates: {
      canonical: postUrl,
      languages: {
        hrefLang: "en-US",
        href: postUrl,
      },
    },
  };
}

// ✅ BlogPost Component
export default async function BlogPost({ params }) {
  const data = await getBlogPostBySlug(params.slug);
  
  if (!data.post) {
    notFound();
  }

  const meta = {
    title: data.post.title,
    description: data.post.metaDescription,
    img: data.post.metaImage.asset.url,
    slug: data.post.slug.current,
    date_published: data.post.publishedAt,
    date_modified: "2024-12-25T00:00",
}

  const { post, relatedPosts } = data;

  function formatDate(date, pattern = "dd/MM/yyyy") {
    if (!date) return "";
    return format(parseISO(date), pattern);
  }

  const formattedDate = formatDate(post.publishedAt);

  return (
    <>
    <WebpageJsonLd metadata={meta}/>
      <Layout>
        <article className="prose mx-auto p-5 w-screen px-[7.5%] tablet:px-[5%] mobile:px-[5%]">
          <h1 className="text-[3vw] tablet:text-[4.8vw] font-heading font-medium py-[2vw] pt-[10vw] w-[70%] blog-title-anim tablet:w-full tablet:pt-[22vw] mobile:pt-[30vw] mobile:text-[5.8vw]">
            {post.title}
          </h1>
          <div className="w-full flex justify-between relative tablet:flex-col tablet:gap-[5vw] mobile:gap-[10vw]">
            {/* ✅ Sidebar with Author Info */}
            <BlogInfo
              shareLink={post.slug.current}
              author={post.author}
              formattedDate={formattedDate}
            />
            <hr className="text-gray-300 hidden tablet:block" />
            {/* ✅ Blog Content */}
            <div className={`w-[65%] text-[1.3vw] mt-[3vw] right-section-blog tablet:w-full tablet:text-xl ${styles.blogContent}`}>
              <PortableTextComponent value={post.body} />
            </div>
          </div>
        </article>

        {/* ✅ Pass related posts to RelatedBlogs component */}
        <RelatedBlogs posts={relatedPosts} />
      </Layout>

      {/* ✅ Page Loader */}
      <PageLoader loaderText={post.loaderText} />
    </>
  );
}
