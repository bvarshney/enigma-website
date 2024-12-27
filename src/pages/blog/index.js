import { useState } from 'react';
import { getPaginatedPosts, sortStickyPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';

import Layout from "@/components/Layout";
import FeaturedBlog from '@/components/Blogs/FeaturedBlog';
import CategoryList from '@/components/Blogs/CategoryList';
import BlogCard from '@/components/Blogs/BlogCard';
import Pagination from '@/components/Blogs/Pagination';
import PageLoader from '@/components/PageLoader';
import { fadeUp, TitleAnim } from '@/lib/gsapAnimations';
import MetaData from '@/components/MetaData';
import { WebpageJsonLd } from '@/lib/json-ld';

export default function Blog({ posts, featuredPost, pagination, categories }) {
    const [activeCategory, setActiveCategory] = useState('all');

    fadeUp();
    TitleAnim();

    const metadata = {
        title: "The Enigma Blog | Discover, Learn & Be Future Ready",
        description: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
        img: "blog.png",
        slug: "blog",
        date_published: "2023-01-01T00:00",
        date_modified: "2024-12-25T00:00",
    }

    return (
        <>
            <WebpageJsonLd metadata={metadata} />
            <MetaData metadata={metadata} />
            <Layout>
                <FeaturedBlog post={featuredPost} />
                <section id='listing'>
                    <div className='w-[85%] mx-auto py-[10%]'>
                        <h2 className='font-heading font-medium uppercase text-[7vw] tablet:text-[12vw] title-anim'>All Articles</h2>
                        <div className='mt-[2vw] tablet:mt-[4vw] fadeup'>
                            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                        </div>
                        <div className='my-[6vw] grid grid-cols-3 gap-x-[3vw] gap-y-[5vw] tablet:grid-cols-2 mobile:grid-cols-1 tablet:my-[10vw] tablet:gap-x-[4vw] mobile:gap-y-10'>
                            <BlogCard
                                href="ux-design-glossary-guide"
                                imgSrc="/assets/blogs/featured/design-glossary.webp"
                                title="UX Design Glossary"
                                category="Design"
                            />
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
            <PageLoader loaderText={"Our Thoughts & Resources"} />
        </>
    );
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { posts, pagination } = await getPaginatedPosts({
        queryIncludes: 'archive',
    });

    const categories = await getCategories();
    if (slug) {
        const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
            queryIncludes: 'archive',
            categoryId: slug,
        });

        posts = filteredPosts;
        pagination = {
            ...filteredPagination,
            basePath: `/categories/${slug}/page`,
        };
    }

    posts = sortStickyPosts(posts);

    const featuredPost = posts.find((post) => post.isSticky) || null;

    posts = posts.filter((post) => !post.isSticky);

    return {
        props: {
            posts,
            featuredPost,
            categories,
            pagination: {
                ...pagination,
                basePath: slug ? `/categories/${slug}/page` : '/blog',
            },
        },
        revalidate: 1000,
    };
}
