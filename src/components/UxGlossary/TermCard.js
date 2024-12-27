import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

const Termcard = ({ term, onClick }) => {
  let truncatedDescription;

  if (Array.isArray(term.description)) {
    // If the description is an array, take the first paragraph
    const firstParagraph = term.description[0];

    // Split the paragraph into words
    const words = firstParagraph.split(' ');

    // Take the first 10 words and join them back into a string
    truncatedDescription = words.slice(0, 10).join(' ');
  } else {
    // If the description is a string, take the first 10 words
    const words = term.description.split(' ');
    truncatedDescription = words.slice(0, 10).join(' ');
  }

  return (
    <div className={`${styles.card} bg-white dark:bg-white2 shadow-lg`} onClick={() => onClick(term)} data-cursor-size="110px" data-cursor-text="Read More" data-cursor-color="#000">
      <div className={styles.cardMain}>
          <Image src={term.icon} alt='UX Glossary Terms Image' title='UX Glossary Terms Image' priority={false} width={100} height={100}/>
          <h2>{term.sName}</h2>
          <p>{truncatedDescription}...</p>
          <div className={styles.readMore}>
            <p className='en-link-under'>
              <span>
                Read More
              </span>
            </p>
          </div>
      </div>
    </div>
  );
};

export default Termcard;