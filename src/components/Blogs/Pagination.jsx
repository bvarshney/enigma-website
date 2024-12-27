import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MAX_NUM_PAGES = 5;

const Pagination = ({ pagesCount, currentPage, basePath, addCanonical = true }) => {
  const path = `${basePath}/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    if (pagesCount > MAX_NUM_PAGES) {
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      if (!isHead) {
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

    return (
        <>
            <div className="w-full flex justify-center">
                <div className="bg-white dark:bg-white2 rounded-full flex w-auto justify-between items-center px-6 py-4 gap-10 mobile:px-2 mobile:py-2 mobile:gap-6">
                    <Link className={`w-[3.5vw] h-[3.5vw] tablet:w-[6vw] tablet:h-[6vw] mobile:h-[8vw] mobile:w-[8vw] duration-300 flex items-center justify-center rounded-full hover:bg-primary hover:text-white  ${!hasPreviousPage ? '!pointer-events-none opacity-50' : ''}`}
                        href={hasPreviousPage ? `${path}${currentPage - 1}` : '#'}
                        aria-label="Go to Previous Page"
                        tabIndex={hasPreviousPage ? 0 : -1}
                    >
                        <ChevronLeft className='mobile:w-[5vw]' />
                    </Link>
                    <ul className="flex justify-center items-center gap-4 mobile:gap-2">
                        {pages.map((page) => {
                        const active = page === currentPage;
                        return active ? (
                            <li key={page} className="text-2xl font-heading font-medium w-[3.5vw] h-[3.5vw] tablet:w-[6vw] tablet:h-[6vw] tablet:text-xl mobile:h-[8vw] mobile:w-[8vw] mobile:text-[4vw] flex items-center justify-center overflow-hidden rounded-full bg-primary text-white dark:text-black">
                                <span aria-label={`Current Page, Page ${page}`} aria-current="true">
                                    {page}
                                </span>
                            </li>
                        ) : (
                            <li key={page} className='text-2xl font-heading font-medium w-[3.5vw] h-[3.5vw] tablet:w-[6vw] tablet:h-[6vw] tablet:text-xl mobile:h-[8vw] mobile:w-[8vw] mobile:text-[4vw] overflow-hidden rounded-full'>
                                <Link className='w-full h-full flex items-center justify-center duration-300 hover:bg-primary hover:text-white dark:hover:text-black' href={page === 1 ? path : `${path}${page}`} aria-label={`Goto Page ${page}`}>
                                    <span>{page}</span>
                                </Link>
                            </li>
                        );
                        })}
                    </ul>
                    <Link className={`w-[3.5vw] h-[3.5vw] tablet:w-[6vw] tablet:h-[6vw] mobile:h-[8vw] mobile:w-[8vw] duration-300 flex items-center justify-center rounded-full hover:bg-primary hover:text-white dark:hover:text-black ${!hasNextPage ? '!pointer-events-none opacity-50' : ''}`}
                        href={hasNextPage ? `${path}${currentPage + 1}` : '#'}
                        aria-label="Go to Next Page"
                        tabIndex={hasNextPage ? 0 : -1}
                    >
                        <ChevronRight className='mobile:w-[5vw]' />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Pagination;

