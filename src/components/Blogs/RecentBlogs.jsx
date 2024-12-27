import Link from "next/link";
import BlogCard from "./BlogCard";

const RecentBlogs = ({ line1, line2, blogs }) => {

    return (
        <section id="recent-blogs" className="w-full h-full">
            <div className="py-[10%] w-[85%] mx-auto mobile:py-[20%]">
                <div className="flex items-end mobile:block">
                    <h4 className="text-[8vw] fadeup font-heading font-medium leading-[1.1] text-left mobile:text-[12vw]">
                        <span>{line1}{" "}</span>
                        {line2 && (
                            <span className="text-primary">{line2}</span>
                        )}
                    </h4>
                    <div className="w-[11%] pb-2 tablet:w-[30%] mobile:mt-[3vw] mobile:w-fit">
                        <Link href="/blog" className="group fadeup text-[1.4vw] font-heading font-medium tablet:text-[3.5vw] mobile:text-[4.5vw] en-link-under" data-cursor-size="80px" data-cursor-exclusion>
                            <span className="">All Articles</span>
                        </Link>
                    </div>
                </div>

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
            </div>
        </section>
    )
}

export default RecentBlogs;