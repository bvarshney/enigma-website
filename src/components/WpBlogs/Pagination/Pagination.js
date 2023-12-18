import Link from 'next/link';

import config from '../../../../package.json';

const MAX_NUM_PAGES = 9;

const { homepage = '' } = config;

const Pagination = ({ pagesCount, currentPage, basePath }) => {
  const path = `${basePath}/`;

  const hasPreviousPage = pagesCount > 1 && currentPage > 1;
  const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

  function getPages() {
    let pages = pagesCount;
    let start = 0;
    // If the number of pages exceeds the max
    if (pagesCount > MAX_NUM_PAGES) {
      // Set number of pages to the max
      pages = MAX_NUM_PAGES;
      const half = Math.ceil(MAX_NUM_PAGES / 2);
      const isHead = currentPage <= half;
      const isTail = currentPage > pagesCount - half;
      hasNextDots = !isTail;
      // If the current page is at the head, the start variable remains 0
      if (!isHead) {
        hasPrevDots = true;
        // If the current page is at the tail, the start variable is set to
        // the last chunk. Otherwise the start variable will place the current
        // page at the middle
        start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
      }
    }
    return [...new Array(pages)].map((_, i) => i + 1 + start);
  }

  const pages = getPages();

  return (
    <>
      <div className='blog-pagi-container'>
        <div className='pagi-section'>  
          <Link className={`pagi-num ${hasPreviousPage ? '' : 'disabled'}`} href={hasPreviousPage ? `${path}${currentPage - 1}` : '#'}>
            <img className='w-3 h-3 rotate-180' src='/assets/icons/next.png' alt='previous button' title='previous page'/>
          </Link>

          <ul className='pagi-number-container'>
            {pages.map((page) => (
              <li key={page} className={`pagi-num ${page === currentPage ? 'active' : ''}`}>
                <Link href={`${path}${page}`} aria-label={`Goto Page ${page}`}>
                  <span>{page}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link className={`pagi-num ${hasNextPage ? '' : 'disabled'}`} href={hasNextPage ? `${path}${currentPage + 1}` : '#'}>
            <img className='w-3 h-3' src='/assets/icons/next.png' alt='next button' title='next page'/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pagination;

// import Link from 'next/link';

// const MAX_NUM_PAGES = 9;

// const Pagination = ({ pagesCount, currentPage, basePath, addCanonical = true }) => {
//   const path = `${basePath}/`;

//   const hasPreviousPage = pagesCount > 1 && currentPage > 1;
//   const hasNextPage = pagesCount > 1 && currentPage < pagesCount;

//   let hasPrevDots = false;
//   let hasNextDots = false;

//   function getPages() {
//     let pages = pagesCount;
//     let start = 0;
//     // If the number of pages exceeds the max
//     if (pagesCount > MAX_NUM_PAGES) {
//       // Set number of pages to the max
//       pages = MAX_NUM_PAGES;
//       const half = Math.ceil(MAX_NUM_PAGES / 2);
//       const isHead = currentPage <= half;
//       const isTail = currentPage > pagesCount - half;
//       hasNextDots = !isTail;
//       // If the current page is at the head, the start variable remains 0
//       if (!isHead) {
//         hasPrevDots = true;
//         // If the current page is at the tail, the start variable is set to
//         // the last chunk. Otherwise, the start variable will place the current
//         // page in the middle
//         start = isTail ? pagesCount - MAX_NUM_PAGES : currentPage - half;
//       }
//     }
//     return [...new Array(pages)].map((_, i) => i + 1 + start);
//   }

//   const pages = getPages();

//   return (
//     <>
//       {hasPreviousPage && (
//         <Link href={currentPage - 1 === 1 ? path : `${path}page/${currentPage - 1}`} aria-label="Goto Previous Page">
//           <span>Previous</span>
//         </Link>
//       )}

//       <ul>
//         {hasPrevDots && (
//           <li>...</li>
//         )}
//         {pages.map((page) => {
//           const active = page === currentPage;
//           return active ? (
//             <li key={page}>
//               <span aria-label={`Current Page, Page ${page}`} aria-current="true">
//                 {page}
//               </span>
//             </li>
//           ) : (
//             <li key={page}>
//               <Link href={page === 1 ? path : `${path}page/${page}`} aria-label={`Goto Page ${page}`}>
//                 <span>{page}</span>
//               </Link>
//             </li>
//           );
//         })}
//         {hasNextDots && (
//           <li>...</li>
//         )}
//       </ul>

//       {hasNextPage && (
//         <Link href={`${path}page/${currentPage + 1}`} aria-label="Goto Next Page">
//           <span>Next</span>
//         </Link>
//       )}
//     </>
//   );
// };

// export default Pagination;

