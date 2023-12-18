import React from 'react';
import Link from 'next/link';
import Blogs from '@/components/Blogs/blogData'; // Adjust the import path as needed
import gsap from "gsap";

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

const RelatedBlogs = ({ currentBlogLink, category }) => {
  // Filter out the current blog and then filter by category
  const relatedBlogs = Blogs.filter(blog => blog.Link !== currentBlogLink && blog.category === category)
                            // .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
                            .slice(0, 3); // Get only three blogs

  return (

    <div className="related-articles">
        <div className="related-article-heading">
          <h3>RELATED ARTICLES</h3>
          <Link href="/blog" data-cursor-size="80px" data-cursor-exclusion>
            <p>All articles</p>
          </Link>
        </div>

        <div className="related-box-img">
            {relatedBlogs.map((blog, index) => (
                <div key={index} className='box-img-content'>
                    <div className="img-box-related">
                        <Link href={blog.Link}>
                            <img
                            src={blog.image}
                            alt={blog.name}
                            data-cursor-text="Read Now"
                            data-cursor-color="#000"
                            data-cursor-size="100px"
                            onMouseEnter={(e) => handleHover(e)}
                            onMouseOut={(e) => handleHoverExit(e)}
                            loading='lazy'
                            />
                            <p className='blog-list-tag'>{blog.category}</p>
                        </Link>
                    </div>
                    <h4>{blog.description}</h4>
                </div>
            ))}
        </div>
    </div>

      
  );
};

export default RelatedBlogs;

