import BlogCard from "@/components/Blogs/BlogCard";
import CategoryList from "@/components/Blogs/CategoryList";
import FeaturedBlog from "@/components/Blogs/FeaturedBlog";
import Layout from "@/components/Layout";
import PageLoader from "@/components/PageLoader";
import { WebpageJsonLd } from "@/lib/json-ld";
import { generateMetadata } from "@/lib/metadata";
import { getCategories } from "@/sanity/lib/categoryQuery";
import { getBlogPosts } from "@/sanity/lib/queries";

async function fetchData() {
  const blogs = await getBlogPosts();
  const categories = await getCategories();

  const featuredBlog = blogs.filter((blog) => blog.featured === true);
  const nonFeaturedBlogs = blogs.filter((blog) => blog.featured !== true);

  return { featuredBlog, nonFeaturedBlogs, categories };
}

const meta = {
  title: "The Enigma Blog | Discover, Learn & Be Future Ready",
  description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
  img: "blog.png",
  slug: "blog",
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

export default async function Blog() {
  const { featuredBlog, nonFeaturedBlogs, categories } = await fetchData();

  return (
    <>
      <WebpageJsonLd metadata={meta} />
      <Layout>
        <FeaturedBlog featuredBlog={featuredBlog} />

        <div className="px-[7.5%]">
          <h2 className="mt-[8vw] mb-[3vw] font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim">
            All Articles
          </h2>

          <CategoryList categories={categories} activeCategory={"all"} setActiveCategory={() => { }} />

          <div className="my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10">
            {nonFeaturedBlogs.map((post) => (
              <BlogCard
                key={post.slug.current}
                href={post.slug.current}
                category={post.categories[0]?.title || "Uncategorized"}
                imgSrc={post.mainImage?.asset?.url}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </Layout>

      <PageLoader loaderText={"Our Thoughts & Resources"} />
    </>
  );
}
