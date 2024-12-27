import { useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';
import Layout from '@/components/Layout';
import CategoryList from '@/components/Blogs/CategoryList';
import BlogCard from '@/components/Blogs/BlogCard';
import { fadeUp, TitleAnim } from '@/lib/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/MetaData';

export default function Category ({ category, posts, categories }) {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);

  fadeUp();
  TitleAnim();

  const metadata = {
    title: category.seo.title,
    description: category.seo.description,
    img: "blog.png",
    slug: `categories/${category.slug}`,
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <MetaData metadata={metadata} />
      <Layout>
        <section data-cursor-size='10px' data-cursor-text=''>
          <div className='w-[85%] mx-auto'>

            <div className='pt-[8vw] tablet:pt-[15vw] mobile:pt-[25vw]'>
              <h1 className='font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] leading-[1.2] title-anim'>
                {`${category.name} Blogs`}
              </h1>
            </div>

            <div className='mt-[2vw] tablet:mt-[4vw] mobile:mt-[10vw] fadeup'>
              <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>

            {posts.length > 0 ? (
              <div className='my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10'>
                {posts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    href={post.slug}
                    category={post.categories[0].name}
                    imgSrc={post.featuredImage.sourceUrl}
                    title={post.title}
                  />
                ))}
              </div>
            ) : (
              <div className='flex items-center justify-center h-[50vh] tablet:h-[50vw] mobile:h-[100vw]'>
                <p className='font-medium text-black3 text-xl fadeup'>No blogs found for this category.</p>
              </div>
            )}

          </div>
        </section>
      </Layout>

    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);

  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  const categories = await getAllCategories();

  return {
    props: {
      category,
      posts,
      categories,
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategories();

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
