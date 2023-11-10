import React from 'react';
import Link from 'next/link';
import Blogs from '@/components/Blogs/blogData'; // Adjust the import path as needed
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

const HomeBlogs = () => {
  // Filter out the current blog and then filter by category
  const relatedBlogs = Blogs.slice(0, 3); // Get only three blogs

  const homeBlog = useRef();

  useEffect(() => {

    const homeBlogImg = document.querySelectorAll('.related-box-img .box-img-content');

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
          <h1 className='homeBlogsHeading'>Our Creative <br/> <span className='color-primary'>Musings</span></h1>
          <Link href="/blog">
            <span>All Articles</span>
          </Link>
        </div>

        <div className="related-box-img homeBlog">
            {relatedBlogs.map((blog, index) => (
                <div key={index} className='box-img-content homeBlog'>
                    <div className="img-box-related homeBlog">
                        <Link href={blog.Link}>
                            <img
                            loading='lazy'
                            src={blog.image}
                            alt={blog.description}
                            data-cursor-text="Read Now"
                            data-cursor-color="#000"
                            data-cursor-size="100px"
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            />
                            <h2 className='blog-list-tag'>{blog.category}</h2>
                        </Link>
                    </div>
                    <h1>{blog.description}</h1>
                </div>
            ))}
        </div>
    </div>
  );
};

export default HomeBlogs;
