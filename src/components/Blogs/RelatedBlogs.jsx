
import Link from "next/link";
import BlogCard from "./BlogCard";

const RelatedBlogs = ({ posts }) => {  
  return (
    <>
    {
     posts[0]&&

    <section id="recent-blogs" className="w-full h-full">
      <div className="py-[10%] w-[85%] mx-auto tablet:py-[15%] mobile:py-[25%]">
        <div className="flex items-end justify-between mobile:block">
          <h4 className="text-[7vw] fadeup font-heading font-medium leading-[1.1] text-left mobile:text-[8.5vw]">
            <span>RELATED ARTICLES</span>
          </h4>
          <div className="w-[11%] pb-2 tablet:w-[30%] mobile:mt-[3vw] mobile:w-fit">
            <Link 
              href="/blog" 
              className="group fadeup text-[1.4vw] font-heading font-medium tablet:text-[3.5vw] mobile:text-[4.5vw] en-link-under" 
              data-cursor-size="80px" 
              data-cursor-exclusion
            >
              <span>All Articles</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-x-[3vw] gap-y-[8vw] mt-[4vw] tablet:mt-[8vw] mobile:mt-[10vw] tablet:grid-cols-2 mobile:grid-cols-1">
          {posts.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              href={post.slug.current}
              title={post.title}
              imgSrc={post.mainImage.asset.url}
              category={post.categories[0]?.title || "Uncategorized"}
            />
          ))}
        </div>
      </div>
    </section>
    }


    </>
  );
};

export default RelatedBlogs;
