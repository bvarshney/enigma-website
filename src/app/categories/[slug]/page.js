import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import Layout from "@/components/Layout";
import BlogCard from "@/components/Blogs/BlogCard";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";
import { generateMetadata } from "@/lib/metadata";
import CategoryPageClient from "@/components/Blogs/CategoryPageClient";

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  async function fetchData(slug) {
    const categoryQuery = `*[_type == "category" && slug.current == $slug][0]`;
    const post = await client.fetch(categoryQuery, { slug });

    if (!post) {
      notFound();
    }

    const [categories, allBlogs] = await Promise.all([
      getCategories(),
      getBlogPosts(),
    ]);

    const filteredBlogs = allBlogs.filter(
      (blog) => blog.categories?.[0]?.title === post.title
    );

    return { post, categories, filteredBlogs };
  }

  const { post, categories, filteredBlogs } = await fetchData(slug);

  return (
    <>
      <Layout>
        <div className="px-[7.5%]">
          <CategoryPageClient title={post.title} categories={categories} />
          
          <div className="my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.slug.current}
                  href={blog.slug.current}
                  category={blog.categories?.[0]?.title || "Uncategorized"}
                  imgSrc={blog.mainImage?.asset?.url}
                  title={blog.title}
                />
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-500">
                No blogs found for this category.
              </p>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}

const meta = {
  title: "Patronum Branding & Website Design Case Study | Enigma",
  description: "Enigma's Success Story of Patronum's Branding, UI/UX design, Website Design,and Front-End Development, achieving remarkable results for the SaaS Product.",
  img: "portfolio-patronum.png",
  slug: "patronum-saas-case-study",
  date_published: "2023-01-01T00:00",
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
