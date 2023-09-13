import React, { useState } from 'react';
import { Element, scroller } from 'react-scroll';

const Section4 = ({ onFileChange, onMessageChange }) => {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      onFileChange(file);
    } else {
      // Handle the case where no file is selected
    }
  };

  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
    onMessageChange(newMessage);
  };

  return (
    <Element name="section4">
      <div className='form-sections section-4-form'>
        <div className='p-8'>
          <h4>
            04 — <span className='color-gray'> 04</span>
          </h4>
        </div>
        <div className='mt-10'>
          <p>Do you have a brief?</p>
        </div>
        <div className='form-attach'>
          <input
            type="file"
            id='attach'
            name="selectedFile"
            accept=".pdf,.doc,.ppt"
            onChange={handleFileChange}
            hidden
          />
          <button>
            <img src="/assets/icons/attach.png" />
            <label className="label" htmlFor='attach'>
              Add Attachment
            </label>
          </button>
          <div className='pt-5'>
            <span id='file-choosen'>{selectedFile ? selectedFile.name : 'No file chosen'}</span>
          </div>
        </div>
        <div>
          <textarea
            name='message'
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>
      </div>
    </Element>
  );
};

export default Section4;

