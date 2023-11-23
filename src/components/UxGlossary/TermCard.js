import React from 'react';
import styles from '@/styles/TermCard.module.css'; // You can use a CSS module or any styling method you prefer

const TermCard = ({ term, onClick }) => {
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
    <div className={styles.card} onClick={() => onClick(term)}>
      <div className={styles.cardMain}>
        <img src='/assets/blogs/blog-detail/ux-glossary/icon-2.png' alt='UX Glossary Terms Image' title='UX Glossary Terms Image'/>
        <div>
          <h2>{term.name}</h2>
          <p>{truncatedDescription}...</p>
        </div>
      </div>
    </div>
  );
};

export default TermCard;