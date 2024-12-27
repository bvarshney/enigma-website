import Link from 'next/link';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  const categoriesArray = Array.isArray(categories) ? categories : categories?.categories || [];
  const filteredCategories = categoriesArray.filter((category) => category.name !== 'Uncategorized');

  return (
    <div className='flex flex-wrap gap-6 tablet:gap-4 mobile:gap-2'>
      <Link key="all" href="/blog" className="block w-fit h-fit group" onClick={() => setActiveCategory('all')}>
        <div className={`px-[2vw] min-w-20 py-[0.5vw] text-black1 text-center relative w-fit border-[0.5px] border-current rounded-full tablet:py-[1vw] tablet:px-[3vw] overflow-hidden ${activeCategory === 'all' ? 'bg-black text-white' : ''}`}>
          <span className="font-heading font-medium text-[1.2vw] z-[1] relative transition-colors duration-300 group-hover:text-white tablet:text-[3vw] mobile:text-[4vw]">All</span>
          <div className="absolute w-[10vw] h-[10vw] group-hover:scale-[2] tablet:w-[20vw] tablet:h-[20vw] left-1/2 -translate-x-1/2 bottom-0 bg-black translate-y-full group-hover:translate-y-1/2 transition-all duration-700 rounded-[70%] group-hover:rounded-none ease-out" />
        </div>
      </Link>
      {filteredCategories.map((category) => (
        <Link key={category.slug} href={`/categories/${category.slug}`} className="block w-fit h-fit group" onClick={() => setActiveCategory(category.name)}>
          <div className={`px-[2vw] min-w-20 py-[0.5vw] text-black1 text-center relative w-fit border-[0.5px] border-current rounded-full tablet:py-[1vw] tablet:px-[3vw] overflow-hidden ${activeCategory === category.name ? 'bg-black text-white' : ''}`}>
            <span className="font-heading font-medium text-[1.2vw] z-[1] relative transition-colors duration-300 group-hover:text-white tablet:text-[3vw] mobile:text-[4vw]">{category.name}</span>
            <div className="absolute w-[8vw] h-[8vw] group-hover:scale-[2] tablet:w-[20vw] tablet:h-[20vw] left-1/2 -translate-x-1/2 bottom-0 bg-black translate-y-full group-hover:translate-y-1/2 transition-all duration-700 rounded-[70%] group-hover:rounded-none ease-out" />
          </div>
      </Link>
      ))}
    </div>
  );
};

export default CategoryList;
