import React from 'react';
import PostCard from './PostCard'; // Import the PostCard component
import gsap from "gsap";
import Link from 'next/link';

function RelatedBlogs({ posts, currentCategory, currentSlug }) {
  // Filter the posts to find related posts based on the current category
  const relatedPosts = posts.filter(
    (post) =>
      post.categories.some((category) => category.name === currentCategory) &&
      post.slug !== currentSlug // Exclude the current blog post
  );

  // Limit the related posts to 3
  const limitedRelatedPosts = relatedPosts.slice(0, 3);

  // Check if there are any related posts to render
  if (limitedRelatedPosts.length === 0) {
    return null; // Don't render anything if no related posts
  }

  return (
    <>
        <div className="related-articles">
          <div className="related-article-heading" id='fadeUp'>
            <h3>RELATED ARTICLES</h3>
            <Link href="/blog" data-cursor-size="80px" data-cursor-exclusion>
              <p>All articles</p>
            </Link>
          </div>
          
          <div className="related-box-img" id='fadeUp'>
            {limitedRelatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
    </>
  );
}

export default RelatedBlogs;

