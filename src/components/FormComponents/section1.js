// components/Section1.js

import React from 'react';
import { Element, scroller } from 'react-scroll';

const Section1 = ({ formData, onNext }) => {

  const handleNext = () => {
    // Validate name input, e.g., check if it's not empty
    if (formData.name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    // Continue to the next section and pass the collected data
    onNext(formData.name);

    // Scroll to the next section using react-scroll
    scrollToNextSection();
  };

  const scrollToNextSection = () => {
    scroller.scrollTo('section2', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Element name="section1">
      <div className='form-sections'>
        <div className='form-sec1-head pb-8'>
          <h2>Let's Start</h2>
        </div>
        <div className='p-8'>
          <h4>01 — <span className='color-gray'> 04</span></h4>
        </div>
        <div className='mt-10'>
          <h1>Hi<span className='color-primary'> There!</span></h1>
        </div>
        <div className='m-10'>
          <p>What's Your Name</p>
        </div>
        <div>
          <input
            name='name'
            type="text"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => onNext({ ...formData, name: e.target.value })}
          />
        </div>
        <div className='form-button m-10'>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </Element>
  );
};

export default Section1;
