import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ href, imgSrc, title, category }) => {
  return (
    <Link
      data-cursor-size="100px"
      data-cursor-text="Read More"
      className="fadeup"
      href={`/${href}`}
    >
      <div className="h-full block w-full relative group">
        <div className="relative h-[60vh] w-full overflow-hidden tablet:h-[55vw] mobile:h-[100vw]">
          <Image
            priority={false}
            quality={90}
            src={imgSrc}
            alt={title}
            fill
            className="object-cover object-top group-hover:scale-105 duration-500"
          />
        </div>
        <div className="min-w-[8vw] absolute bg-black border font-medium border-gray2 top-6 left-6 text-white text-center text-[1.2vw] font-heading rounded-full py-2 px-4 tablet:text-[2.5vw] tablet:px-[3vw] tablet:py-[1vw] mobile:text-[4vw]">
          {category}
        </div>
        <h5 className="text-[1.4vw] font-heading mt-[1vw] font-medium px-2 tablet:text-[2.5vw] mobile:text-[4.5vw]">
          {title}
        </h5>
      </div>
    </Link>
  );
};

export default BlogCard;
