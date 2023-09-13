import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Section3 = ({ onNext, formData }) => {
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '');
  const [email, setEmail] = useState(formData.email || '');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (!phoneNumber || phoneNumber.length !== 10) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
      isValid = false;
    } else {
      setPhoneNumberError('');
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      onNext({ phoneNumber, email });
    }
  };

  return (
    <div id="section3">
      <h2>Great!</h2>
      <p>Please Provide your Contact Details.</p>
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p className="error">{phoneNumberError}</p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p className="error">{emailError}</p>
      <Link to="section4" smooth={true} duration={500}>
        <button onClick={validateForm}>Next</button>
      </Link>
    </div>
  );
};

export default Section3;
