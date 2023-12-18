import Link from 'next/link';
import { postPathBySlug } from '@/lib/posts';
import Image from 'next/image';
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

const PostCard = ({ post = {} }) => {
  const { title, featuredImage, slug, categories } = post;

  const category = categories[0];

  return (
    <>
    <div className='ul-blog'>
      <Link href={postPathBySlug(slug)}>
          <div className='image-box-blog'>
            {featuredImage && (
              <Image
                className='img-blog'
                data-cursor-size="120px"
                data-cursor-text="Read More"
                data-cursor-color="#000"
                src={featuredImage.sourceUrl}
                alt={`${post.title} featured image`}
                title={post.title}
                width={600}
                height={1000}
                priority={false}
                onMouseEnter={(e) => handleHover(e)}
                onMouseOut={(e) => handleHoverExit(e)}
              />
            )}
            {category && (
              <h5 className='blog-list-tag'>{category.name}</h5>
            )}
          </div>
          <h4 className='desc-tag'
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default PostCard;
