import React, { useEffect } from "react";
import { Cursor } from "../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { format } from 'date-fns';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import BlogInfo from "@/components/WpBlogs/BlogInfo";
import RelatedPosts from '@/components/WpBlogs/RelatedPosts';

import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_ALL_POST_SLUGS } from '@/data/posts';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { NextSeo } from "next-seo";
import Head from "next/head";

gsap.registerPlugin(ScrollTrigger);

function PostDetail({ post, allPosts }) {

  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedDate = format(new Date(post.date), 'dd/MM/yyyy');

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#blog",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#right-section",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".related-articles",
        start: 'top 85%',
        ease: 'power2.easeOut',
      }
    });
    tl.fromTo("#fadeUp", {
      opacity: 0,
      y: 100,
    },{
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
    });
    return () => tl.kill();
  }, []);


if (globalThis.innerWidth>1024) {
  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: brandImagePin,
        markers: false,
      });
    });
    return () => ctx.revert();
  });
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://weareenigma.com/${post.slug}`
  },
  "headline": post.seo.title,
  "description": post.seo.description,
  "author": {
    "@type": "Person",
    "name": post.author.name,
    "url": "https://in.linkedin.com/in/bvarshney",
  },  
  "publisher": {
    "@type": "Organization",
    "name": "Enigma Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://weareenigma.com/assets/header-logo/enigma-en-logo.svg"
    }
  },
  "datePublished": post.date,
  "dateModified": post.modified,
};

return (
      <>
      <NextSeo
        title={post.seo.title}
        description={post.seo.description}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: post.date,
            modifiedTime: post.modified,
          },
          url: `https://weareenigma.com/${post.slug}`,
          title: post.seo.title,
          description: post.seo.description,
          images: [
            {
              url: post.seo.openGraph.image.url,
              width: 1200,
              height: 630,
              alt: post.slug,
              type: "image/png",
            },
          ],
          siteName: "Enigma Digital",
        }}
        additionalMetaTags={[
          {
            name: "twitter:title",
            content: post.seo.title
          },
          {
            name: "twitter:description",
            content: post.seo.description
          },
          {
            name: "twitter:image",
            content: post.seo.openGraph.image.url
          },
        ]}
      />
      
      <Head>
        <link rel="canonical" href={`https://weareenigma.com/${post.slug}`} />
        <link rel="alternate" href={`https://weareenigma.com/${post.slug}`} hreflang="x-default" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

        <SmoothScroll />
        <Cursor isGelly={true}/>
        <PageLoader text={post.pageLoader.pageLoader} />
        
        <main>
          <Header />
            
            <div className="b__dt-main">
              
              <div
                className="b__dt-head-contain"
                data-cursor-size="10px"
                data-cursor-text="">
                <h1 data-jelly id='blog'>{post.title}</h1>
              </div>

              <div className="b__dt-main-blog" id="main-blog-container">
                
               <div className="b__dt-auth" id="left-section">
                 <BlogInfo avatar={post.author.avatar.url} author={post.author.name} date={formattedDate} shareLink={post.slug} />
               </div>

               <div 
                className="b__dt-content" 
                id="right-section"
              >
                <div 
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}/> 

                <div className="blog__dt-tags">
                  {post.tags && post.tags.edges.map(({ node }) => (
                    <h4 key={node.name} className="blog__dt-tag">
                      {node.name}
                    </h4>
                  ))} 
                </div>
              </div>
            </div>
          </div>

          <RelatedPosts posts={allPosts} currentCategory={post.categories[0].name} currentSlug={post.slug} />
    
{/* ======================== Footer ====================== */}
        <div className="desktop-footer">
          <Footer />
        </div>
        <div className="mobile-footer">
          <FooterMobile />
        </div>
{/* ======================== Footer END ====================== */}
      </main>    
    </>
  );
}

export default PostDetail;

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

    const { posts: allPosts } = await getAllPosts();

    if (!post) {
      // If the requested post is not found, return a 404 response
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        allPosts,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        post: null, // Use null instead of undefined
        allPosts: [],
      },
      revalidate: 10,
    };
  }
}











