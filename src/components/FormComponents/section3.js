// components/Section3.js

import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';

const Section3 = ({ name, selectedService, onNext }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    // Validate phone number and email (add your validation logic)
    if (phoneNumber.trim() === '' || email.trim() === '') {
      alert('Please enter your phone number and email.');
      return;
    }

    // Continue to the next section and pass the collected data
    onNext({ phoneNumber, email });

    // Scroll to the next section using react-scroll
    scrollToNextSection();
  };

  const scrollToNextSection = () => {
    scroller.scrollTo('section4', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Element name="section3">
        <div className='form-sections'>
            <div className='p-8'>
              <h4>
                03 — <span className='color-gray'> 04</span>
              </h4>
            </div>
            <div className='mt-10'>
                <h1 className='color-primary'>
                    Great !
                </h1>
                {/* <h1>Great! You Selected <br/>
                    <span className='color-primary'> {selectedService}.
                    </span>
                </h1> */}
            </div>
            <div className='m-10'>
                <p>
                    Please provide your
                    contact information.
                </p>
            </div>
            <div>
                <input
                name='phoneNumber'
                type="tel"
                id="phone"
                placeholder="Your Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </div>
            <div>
                <input
                name='email'
                type="email"
                id="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='form-button m-10'>
                <button onClick={handleNext}>Next</button>
            </div>        
        
        </div>
    </Element>
    
  );
};

export default Section3;
