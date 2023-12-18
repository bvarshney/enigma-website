import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/WpBlogs/CategoryList';
import CategoryPosts from '@/components/WpBlogs/CategoryPosts';
import { Cursor } from '../../../cursor/index';
import SmoothScroll from '@/components/utils/SmoothScroll';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/Mobile/FooterMobile';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
// import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import { NextSeo } from 'next-seo';
import Head from 'next/head';

gsap.registerPlugin(ScrollTrigger);

const animateHeroSection = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    '#blog',
    {
      rotationX: -80,
      opacity: 0,
      translateY: 300,
      transformPerspective: '1000',
      transformOrigin: 'top center',
    },
    {
      duration: 1.3,
      rotationX: 0,
      opacity: 1,
      translateY: 0,
      stagger: 0.2,
      delay: 0,
    }
  );
};

const animateFadeUpSection = () => {
  const tl = gsap.timeline();
  tl.fromTo(
    '#fadeUp',
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      delay: 0.4,
      ease: 'power2.out',
    }
  );
};

const Category = ({ category, posts, categories }) => {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);
  const router = useRouter();

  useEffect(() => {
    animateHeroSection();
    animateFadeUpSection();

    const handleRouteChange = () => {
      // Trigger your animations here when the route changes
      animateHeroSection();
      animateFadeUpSection();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>

      <NextSeo
        title={category.seo.title}
        description={category.seo.description}
        openGraph={{
          url: `https://weareenigma.com/category/${category.slug}`,
          title: category.seo.title,
          description: category.seo.description,
          images: [
            {
              url: category.seo.openGraph.image.url,
              width: 400,
              height: 600,
              alt: 'Enigma Image',
              type: 'image/png',
            },
          ],
          siteName: 'Enigma Digital Website',
        }}
      
        additionalMetaTags={[
                {
                  name: "twitter:title",
                  content: `${category.seo.title}`
                },
                {
                  name: "twitter:description",
                  content: `${category.seo.description}`
                },
                {
                  name: "twitter:image",
                  content: `${category.seo.openGraph.image.url}`
                },
              ]}
            />

      <Head>
        <link rel="canonical" href={`https://weareenigma.com/category/${category.slug}`} />
        <link rel="alternate" href={`https://weareenigma.com/category/${category.slug}`} hreflang="x-default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "mainEntityOfPage":{
                  "@type": "WebPage",
                  "@id": `https://weareenigma.com/category/${category.slug}`
                },
                "name": category.seo.title,
                "description": category.seo.description,
                "datePublished": "2023-10-01T10:00:00+05:30",
                "dateModified": "2023-11-17T10:00:00+05:30",
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
      <Cursor isGelly={true}/>

      {/* <PageLoader text={`${category.name} Blogs`} /> */}
      <Modal />

      <main>
        <Header />

        <section className='blogs-sub-section'>
          <div className='blogs-heading' data-cursor-size='10px' data-cursor-text=''>
            <h1 id='blog'>
              <span>{` ${category.name} Blogs`}</span>
            </h1>
          </div>

          <div id='fadeUp'>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <CategoryPosts posts={posts} />
        </section>

        {/* ======================== Footer ====================== */}
        <section className='desktop-footer mt-150'>
          <Footer />
        </section>

        <section className='mobile-footer'>
          <FooterMobile />
        </section>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}

export default Category;

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
    revalidate: 10,
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
