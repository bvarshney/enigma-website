import Link from 'next/link';
import { useState } from 'react';

const CategoryList = ({ categories, activeCategory, setActiveCategory }) => {
  const categoriesArray = Array.isArray(categories) ? categories : categories?.categories || [];
  const filteredCategories = categoriesArray.filter((category) => category.name !== 'Uncategorized');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }} className='blog-cati-button'>
      <h2 key="all">
        <Link href="/blog">
          <button
            className={activeCategory === 'all' ? 'active' : 'button--calypso'}
            id="anim"
            onClick={() => setActiveCategory('all')}
          >
            <span>All</span>
          </button>
        </Link>
      </h2>

      {filteredCategories.map((category) => (
        <h2 key={category.slug}>
          <Link href={`/categories/${category.slug}`}>
            <button
              className={activeCategory === category.name ? 'active' : 'button--calypso'}
              id="anim"
              onClick={() => setActiveCategory(category.name)}
            >
              <span>{category.name}</span>
            </button>
          </Link>
        </h2>
      ))}
    </div>
  );
};

export default CategoryList;
