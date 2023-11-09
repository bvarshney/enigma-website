import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion} className={`accordion ${isOpen ? 'active' : ''}`}>
        {title}
      </button>
      <div className={`panel ${isOpen ? 'open' : ''}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
