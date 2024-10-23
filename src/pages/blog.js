import { useEffect, useState } from 'react';
import { getPaginatedPosts, sortStickyPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';

import PostCard from '../components/WpBlogs/PostCard';
import Pagination from '../components/WpBlogs/Pagination';
import { Cursor } from "../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';
import FeaturedPost from '@/components/WpBlogs/FeaturedPost';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Blog({ posts, featuredPost, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#fadeUp", {
      opacity: 0,
      y: 100,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
      delay: 3.5,
    });
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.blog-anim');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            ease: 'power2.easeOut',
          },
        }
      );
    });

    return () => {
      gsap.timeline().clear();
    };
  }, []);

  return (
    <>

      <NextSeo
        title="The Enigma Blog | Discover, Learn & Be Future Ready"
        description="Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
        openGraph={{
          url: "https://weareenigma.com/blog",
          title: "The Enigma Blog | Discover, Learn & Be Future Ready",
          description:
            "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
          images: [
            {
              url: "https://weareenigma.com/assets/featured-images/blog.png",
              width: 1200,
              height: 630,
              alt: "Blogs Feature Image",
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}

        additionalMetaTags={[
          {
            name: "twitter:title",
            content: "The Enigma Blog | Discover, Learn & Be Future Ready"
          },
          {
            name: "twitter:description",
            content: "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends."
          },
          {
            name: "twitter:image",
            content: "https://weareenigma.com/assets/featured-images/blog.png"
          },
        ]}
      />

      <Head>
        <link rel="canonical" href="https://weareenigma.com/blog" />
        <link rel="alternate" href="https://weareenigma.com/blog" hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://weareenigma.com/blog"
                },
                "name": "Blog",
                "description": "Dive into our curated collection of articles on UI/UX Design, Digital Marketing, Technology & Human Psychology. Stay updated with the latest trends.",
                "datePublished": "2023-01-01T12:00:00+05:30",
                "dateModified": "2023-11-17T12:00:00+05:30",
                "publisher": {
                  "@type": "Organization",
                  "name": "Enigma Digital",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
                  }
                }
              }
            ),
          }}
        />
      </Head>

      <SmoothScroll />
      <Cursor isGelly={true} />

      <PageLoader text={"Our Thoughts & Resources"} />
      <Modal />

      <main>
        <Header />

        {/* Featured Post Component */}
        {featuredPost && (
          <FeaturedPost post={featuredPost} />
        )}

        <section className='blogs-sub-section'>
          <div

            className="blogs-heading blog-anim"
            data-cursor-size="10px"
            data-cursor-text=""
          >
            <h1 id="blog">
              <span>All Articles</span>
            </h1>
          </div>

          <div className='blog-anim'>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <ul className='ul-items'>
            <li className='blog-anim'>
              <div className='ul-blog'>
                <Link href="ux-design-glossary-guide">
                  <div className='image-box-blog group'>
                    <Image
                      className='img-blog group-hover:scale-[1.08] duration-700 ease-in-out'
                      data-cursor-size="120px"
                      data-cursor-text="Read More"
                      data-cursor-color="#000"
                      src="/assets/blogs/featured/design-glossary.webp"
                      alt="ux-design-glossary-guide-image"
                      title="UX Design Glossary Guide"
                      width={600}
                      height={1000}
                      priority={false}
                    />
                    <h5 className='blog-list-tag'>Design</h5>
                  </div>
                  <h4 className='desc-tag'>
                    UX Design Glossary Guide
                  </h4>
                </Link>
              </div>
            </li>
            {posts.map((post) => {
              return (
                <li key={post.slug} className='blog-anim'>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>

          <div className='blog-anim'>
            {pagination && (
              <Pagination
                addCanonical={false}
                currentPage={pagination?.currentPage}
                pagesCount={pagination?.pagesCount}
                basePath={pagination?.basePath}
              />
            )}
          </div>
        </section>

        {/* ======================== Footer ====================== */}
        <section className="desktop-footer mt-150">
          <Footer />
        </section>

        <section className="mobile-footer">
          <FooterMobile />
        </section>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params || {};

  // Fetch paginated posts
  let { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });

  // Fetch categories
  const categories = await getCategories();

  // If a category slug is provided, filter posts by category
  if (slug) {
    const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
      queryIncludes: 'archive',
      categoryId: slug, // Pass the category ID or slug to filter posts
    });

    posts = filteredPosts;
    pagination = {
      ...filteredPagination,
      basePath: `/categories/${slug}/page`,
    };
  }

  // Sort posts with sticky posts first
  posts = sortStickyPosts(posts);

  // Separate the featured post
  const featuredPost = posts.find((post) => post.isSticky) || null;

  // Remove the featured post from regular posts
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
    revalidate: 10,
  };
}
