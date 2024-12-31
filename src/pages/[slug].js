import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_POST_SLUGS } from '@/data/posts';
import { getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/datetime';
import Layout from '@/components/Layout';
import { useEffect, useRef } from 'react';
import BlogInfo from '@/components/Blogs/BlogInfo';
import styles from "@/styles/blog.module.css"
import RelatedBlogs from '@/components/Blogs/RelatedBlogs';
import PageLoader from '@/components/PageLoader';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { fadeUp } from '@/lib/gsapAnimations';
import { NextSeo } from 'next-seo';
import { ArticleJsonLd } from '@/lib/json-ld';

gsap.registerPlugin(ScrollTrigger);

export default function BlogDetail({ post }) {

  const container = useRef(null);
  const leftSection = useRef(null);
  const rightSection = useRef(null);
  const head = useRef(null);

  // Hero Section Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(head.current, {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      }, {
        delay: 3,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      })
        .from(leftSection.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: -0.9,
        })
        .from(rightSection.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: -0.9,
        })
    });
    return () => ctx.revert();
  }, []);

  fadeUp();

  useEffect(() => {
    if (globalThis.innerWidth < 1024) {
      let ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: leftSection.current,
          start: "top 20%",
          endTrigger: rightSection.current,
          end: "bottom 80%",
          invalidateOnRefresh: true,
          pin: leftSection.current,
        });
      });
      return () => ctx.revert();
    }
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, content, date, slug, author, pageLoader, seo } = post;
  const formattedDate = formatDate(date, 'dd/MM/yyyy');
  const relatedPosts = post.relatedPosts.relatedPosts.edges;

  return (
    <>
      <NextSeo
        title={title}
        description={seo.description}
        openGraph={{
          type: 'article',
          url: `https://weareenigma.com/${slug}`,
          title: title,
          "description": seo.description,
          images: [
            {
              url: post.seo.openGraph.image.url,
              width: 1200,
              height: 630,
              alt: title,
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital Agency",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: title
          },
          {
            name: "twitter:description",
            content: seo.description
          },
          {
            name: "twitter:image",
            content: post.seo.openGraph.image.url
          },
        ]}
        canonical={`https://weareenigma.com/${slug}`}
        languageAlternates={[{
          hrefLang: 'en-US',
          href: `https://weareenigma.com/${slug}`,
        }]}
      />
      <ArticleJsonLd post={post} />
      <Layout>
        <section data-cursor-size="10px" data-cursor-text="">
          <div className='w-[85%] mx-auto tablet:w-[90%]'>
            <div className='pt-[10vw] w-[70%] tablet:w-full tablet:pt-[22vw] mobile:pt-[30vw]'>
              <h1 ref={head} className='font-heading font-medium text-[3vw] tablet:text-[4.8vw] mobile:text-[5.8vw]'>{title}</h1>
            </div>
          </div>
        </section>

        <section ref={container}>
          <div className='w-[85%] mx-auto pt-[8%] tablet:w-[90%]'>
            <div className='flex justify-between items-start tablet:flex-col tablet:gap-[10vw] mobile:gap-[15vw]'>
              <div ref={leftSection} className='font-medium font-heading uppercase space-y-[2vw] tablet:space-y-8'>
                <BlogInfo avatar={author.avatar.url} author={author.name} date={formattedDate} shareLink={slug} />
              </div>
              <div className='hidden tablet:block h-[1px] bg-white3 w-full' />
              <div ref={rightSection} className='w-[60%] sDesktop:w-[65%] tablet:w-full'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
                  className={`${styles.content} blog`}
                />

                {post.tags && (
                  <div className={styles.blogTags}>
                    {post.tags.map((tag, index) => (
                      <h4 key={index} className={styles.blogTag}>
                        {tag.name}
                      </h4>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        {relatedPosts && (
          <RelatedBlogs posts={relatedPosts} />
        )}

      </Layout>
      <PageLoader loaderText={pageLoader.pageLoader} />
    </>
  );
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: QUERY_ALL_POST_SLUGS
  });

  const allSlugs = data.posts.edges.map(edge => edge.node.slug);

  const paths = allSlugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const { post } = await getPostBySlug(slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 1000,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        post: null,
      },
      revalidate: 1000,
    };
  }
}











