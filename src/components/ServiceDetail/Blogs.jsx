import Link from "next/link";
import BlogCard from "../Blogs/BlogCard";

const Blogs = ({ blogs }) => {

    return (
        <section id="recent-blogs" className="w-full h-full">
            <div className="py-[10%] w-[85%] mx-auto">
                <div className="flex items-end justify-between mobile:block">
                    <h4 className="text-[7vw] fadeup font-heading font-medium leading-[1.1] text-left mobile:text-[10vw] title-anim">
                        <span>Related{" "}</span>
                        <span className="stroke mobile:text-gray2">Articles</span>
                    </h4>
                    <div className="w-[10%] pb-2 tablet:w-[20%] mobile:mt-[5vw] mobile:w-1/2 fadeup">
                        <Link href="/blog" className="group fadeup text-[1.4vw] font-heading font-medium tablet:text-[3vw] mobile:text-[4.5vw] en-link-under" data-cursor-size="80px" data-cursor-exclusion>
                            <span>All Articles</span>
                        </Link>
                    </div>
                </div>
                {blogs && (
                    <div className="grid grid-cols-3 gap-x-[3vw] gap-y-[8vw] mt-[4vw] tablet:mt-[8vw] mobile:mt-[10vw] tablet:grid-cols-2 mobile:grid-cols-1">
                        {blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                href={blog.slug}
                                title={blog.title}
                                imgSrc={blog.img}
                                category={blog.category}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Blogs;