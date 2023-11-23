// import React from 'react';
// import styles from '@/styles/TermModal.module.css';
// import Scrollbar from 'smooth-scrollbar';
// import { useEffect } from 'react';

// const TermModal = ({ term, onClose }) => 

// useEffect(() => {
//   const scrollbar = Scrollbar.init(document.querySelector('#my-modal-scroll'));

//   return () => {
//     scrollbar.destroy();
//   };
// }, []);

// {
//   return (
//     <div className={styles.modalOverlay} onClick={onClose}>
//       <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//         <div className={styles.modalContentHead}>
//           <div className={styles.modalImage}>
//             <img src='/assets/blogs/blog-detail/ux-glossary/icon.png' alt='glossary image' title='glossary image'/>
//           </div>
//           <h3>{term.name}</h3>
//         </div>
//         <div className={styles.modalContentPara} id='my-modal-scroll'>
//           {term.description.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </div>
//         <div className={styles.modalClose}>
//           <button onClick={onClose}>
//             <img src='/assets/icons/form-close.svg' alt='Modal Close Icon' title='Modal'/>
//           </button>
//         </div>
//       </div>
//     </div>
    
//   );
// };

// export default TermModal;

import React, { useEffect } from 'react';
import styles from '@/styles/TermModal.module.css';
import Scrollbar from 'smooth-scrollbar';

const TermModal = ({ term, onClose }) => {
  useEffect(() => {
    const scrollbar = Scrollbar.init(document.querySelector('#my-modal-scroll'));

    return () => {
      scrollbar.destroy();
    };
  }, []); // The empty dependency array ensures that this effect runs once after the initial render

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContentHead}>
          <div className={styles.modalImage}>
            <img src='/assets/blogs/blog-detail/ux-glossary/icon.png' alt='glossary image' title='glossary image'/>
          </div>
          <h3>{term.name}</h3>
        </div>
        <div className={styles.modalContentPara} id='my-modal-scroll'>
          {term.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.modalClose}>
          <button onClick={onClose}>
            <img src='/assets/icons/form-close.svg' alt='Modal Close Icon' title='Modal'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermModal;
