// components/Section2.js

import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';

const Section2 = ({ name, onNext }) => {
  const [selectedService, setSelectedService] = useState('');

  const handleNext = () => {
    // Validate service selection, e.g., check if it's not empty
    if (selectedService.trim() === '') {
      alert('Please select a service.');
      return;
    }

    // Continue to the next section and pass the collected data
    onNext({ selectedService });

    // Scroll to the next section using react-scroll
    scrollToNextSection();
  };

  const scrollToNextSection = () => {
    scroller.scrollTo('section3', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };


  return (
    <Element name="section2">
        <div className='form-sections'>
            <div className='p-8'>
              <h4>
                02 — <span className='color-gray'> 04</span>
              </h4>
            </div>
            <div className='mt-10'>
                <h1>Hello,<span className='color-primary capitalize'> {name}!</span></h1>
            </div>
            <div className='m-10'>
                <p>
                    What can we help you with?
                </p>
            </div>
            <div>
                <select
                name='selectedService'
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                >
                    <option className='form-select-option' value="">Select a service</option>
                    <option value="Website">Website</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Branding">Branding</option>
                    <option value="UI/UX">UI/UX</option>
                </select>
            </div>
            <div className='form-button m-10'>
                <button onClick={handleNext}>Next</button>
            </div>     
        </div>
    </Element>
    
  );
};

export default Section2;
