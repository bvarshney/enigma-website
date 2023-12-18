import React from 'react';
import Link from 'next/link';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from 'react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Hover on the link
const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1.1,
      ease: "power1.inOut",
    });
  };
  
  // Hover off the link
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.5,
      scale: 1,
      ease: "power1.inOut",
    });
  };

const HomeBlogs = ({ recentPosts }) => {

  const homeBlog = useRef();

  useEffect(() => {
    const homeBlogImg = document.querySelectorAll('.related-box-img');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeBlog.current,
        start: "top 85%",
      }
    });

    tl.fromTo('.homeBlogsHeading', {
      y: 200,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power2.out',
    }).fromTo('.homeBlogs>a', {
      y: 100,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: -1,
      ease: 'power1.out',
    }).fromTo(homeBlogImg, {
      y: 100,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      delay: -1,
      ease: 'power1.out',
    });
    return() => tl.kill();
  }, []);


  return (

      <div ref={homeBlog} className="related-articles">
        <div className="homeBlogs">
          <h3 className='homeBlogsHeading'>Our Creative <br/> <span className='color-primary'>Musings</span></h3>
          <Link href="/blog" data-cursor-size="80px" data-cursor-exclusion>
            <span>All Articles</span>
          </Link>
        </div>

        <div className="related-box-img homeBlog">
          {recentPosts.map((blog, index) => (
            <div key={index} className='homeBlog-pading'>
              <div className="img-box-related homeBlog">
                <Link href={blog.slug}>
                  <img
                    loading='lazy'
                    src={blog.featuredImage.node.sourceUrl}
                    alt={blog.title}
                    title={blog.title}
                    data-cursor-text="Read Now"
                    data-cursor-color="#000"
                    data-cursor-size="100px"
                    onMouseEnter={(e) => handleHover(e)}
                    onMouseOut={(e) => handleHoverExit(e)}
                  />
                    <h5 className='blog-list-tag'>{blog.categories.nodes[0].name}</h5>
                </Link>
              </div>
              <h4>{blog.title}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default HomeBlogs;
