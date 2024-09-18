import React from 'react';
import Link from 'next/link';
import gsap from 'gsap';

// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1.1,
    ease: 'power1.inOut',
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.5,
    scale: 1,
    ease: 'power1.inOut',
  });
};

const ServiceBlogs = ({ posts }) => {
  return (
    <div className="related-articles service__d">
     <div className="related-article-heading service__d mb-[4vw]" id="fadeIn">
        <div className="left-box-heading">
          <h3 className="why-us-anim service__d-head-blog">
            Related<span className="stroke"> Articles</span>
          </h3>
        </div>
        <Link href="/blog" data-cursor-size="80px" data-cursor-exclusion>
          <p>All articles</p>
        </Link>
      </div>
      <div className="related-box-img">
        {posts.map((post, index) => (
          <div key={index} className="box-img-content service__d" id="fadeIn">
            <div className="img-box-related service__d">
              <Link href={post.slug}>
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  data-cursor-text="Read Now"
                  data-cursor-color="#000"
                  data-cursor-size="100px"
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                />
                <p className="blog-list-tag">{post.categories.edges[0].node.name}</p>
              </Link>
            </div>
            <h4>{post.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBlogs;
