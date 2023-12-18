// components/WpBlogs/FeaturedPost.js
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

const FeaturedPost = ({ post }) => {
  if (!post) {
    return null;
  }

  const formattedDate = format(new Date(post.date), 'dd/MM/yyyy');

  return (
    <div className="blog-featured-post">
      <div className='blog-feat-post-container'>
        <div className='blog-feat-img-contain' id='fadeUp'>
          <Image 
            src={post.featuredImage.sourceUrl}
            width={1000}
            height={1000}
            alt={post.title}
            title={post.title}
            priority={true}
          />
          <p className='blog-list-tag'>Featured</p>
        </div>
        <div className="featured-post-content">
          <div className='feat-post-content-date' id='fadeUp'>
            <p>By {post.author.name} / {formattedDate}</p>
          </div>
          <h1 className='feat-post-title' data-jelly id='fadeUp'>{post.title}</h1>
          <div id='fadeUp'
            dangerouslySetInnerHTML={{
            __html: post.excerpt,
            }}
            className='feat-post-discription'
            /> 
          <Link id='fadeUp' data-cursor-size="60px" data-cursor-exclusion className='en-link-under feat-post-link' href={`/${post.slug}`}>
            <span>Read More <img className='w-7 h-7 dark:invert-0' alt='arrow icon' title='arrow icon' src='/assets/icons/arrow-right.svg'/></span>
          </Link>       
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
