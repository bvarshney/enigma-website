import React, { useState } from 'react';

const Section4 = ({ onNext, formData }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const validateForm = () => {
    // You can add validation for file and message fields here.
    onNext({ file, message });
  };

  return (
    <div id="section4">
      <h2>Do You Have a Brief?</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={validateForm}>Submit</button>
    </div>
  );
};

export default Section4;
