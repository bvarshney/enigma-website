import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Section1 = ({ onNext, formData }) => {
  const [name, setName] = useState(formData.name || '');
  const [nameError, setNameError] = useState('');

  const validateForm = () => {
    if (!name) {
      setNameError('Please fill this field.');
      return;
    }

    onNext({ name });
  };

  return (
    <div>
      <h2>Hi There</h2>
      <p>What's Your Name</p>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="error">{nameError}</p>
      <Link to="section2" smooth={true} duration={500}>
        <button onClick={validateForm}>Next</button>
      </Link>
    </div>
  );
};

export default Section1;
