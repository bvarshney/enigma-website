import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Section2 = ({ onNext, formData }) => {
  const [service, setService] = useState(formData.service || '');
  const [serviceError, setServiceError] = useState('');

  const validateForm = () => {
    if (!service) {
      setServiceError('Please fill this field.');
      return;
    }

    onNext({ service });
  };

  return (
    <div id="section2">
      <h2>Hello! {formData.name}</h2>
      <p>What can we help you with</p>
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        <option value="">Select Service</option>
        <option value="UI/UX">UI/UX</option>
        <option value="Website">Website</option>
        <option value="Marketing">Marketing</option>
        <option value="Brand">Brand</option>
      </select>
      <p className="error">{serviceError}</p>
      <Link to="section3" smooth={true} duration={500}>
        <button onClick={validateForm}>Next</button>
      </Link>
    </div>
  );
};

export default Section2;
