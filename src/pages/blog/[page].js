import { getPaginatedPosts } from '@/lib/posts';
import { getAllPosts, getPagesCount } from '@/lib/posts';
import { getCategories } from '@/lib/categories';
import Layout from '@/components/Layout';
import { useState } from 'react';
import CategoryList from '@/components/Blogs/CategoryList';
import Pagination from '@/components/Blogs/Pagination';
import BlogCard from '@/components/Blogs/BlogCard';
import { fadeUp, TitleAnim } from '@/lib/gsapAnimations';
import { WebpageJsonLd } from '@/lib/json-ld';
import MetaData from '@/components/MetaData';

export default function Blog({ posts, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  fadeUp();
  TitleAnim();

  const metadata = {
    title: `The Enigma Blog Page ${pagination?.currentPage} | Discover, Learn & Be Future Ready`,
    description: `Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Blog Page ${pagination?.currentPage}`,
    img: "blog.png",
    slug: `blog/${pagination?.currentPage}`,
    date_published: "2023-01-01T00:00",
    date_modified: "2024-12-25T00:00",
  }

  return (
    <>
      <WebpageJsonLd metadata={metadata} />
      <MetaData metadata={metadata} />
      <Layout>
        <section data-cursor-size="10px" data-cursor-text="">
          <div className='w-[85%] mx-auto'>

            <div className="pt-[8vw] tablet:pt-[15vw] mobile:pt-[25vw]" >
              <h1 className='font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim'>All Articles</h1>
            </div>

            <div className='mt-[2vw] tablet:mt-[4vw] fadeup'>
              <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            </div>

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

            {pagination && (
              <div>
                <Pagination
                  addCanonical={true}
                  currentPage={pagination?.currentPage}
                  pagesCount={pagination?.pagesCount}
                  basePath={pagination?.basePath}
                />
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
    queryIncludes: 'archive',
  });

  const categories = await getCategories();

  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      categories,
      pagination: {
        ...pagination,
        basePath: '/blog',
      },
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });
  const pagesCount = await getPagesCount(posts);

  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}