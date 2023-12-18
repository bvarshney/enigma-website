import React from 'react';
import PostCard from './PostCard';

const CategoryPosts = ({ posts }) => {
  return (
    <div className='category-posts'>
      {posts.length > 0 ? (
        <ul className='ul-items'>
          {posts.map((post) => (
            <li key={post.slug} id='fadeUp'>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div className='ul-items'>
          <p className='no-blog-msg'>No blogs found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPosts;
