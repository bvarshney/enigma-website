import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Cursor } from "./../../../cursor/index";
import "react-creative-cursor/dist/styles.css";
import dynamic from 'next/dynamic';
import gsap from 'gsap';

// Dynamic import for ContactUs
const DynamicContactUs = dynamic(() => import('./contactUs'), { loading: () => <p>Loading...</p>, ssr: false });

export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [ContactUs, setContactUs] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  // Function to dynamically load the ContactUs component
  useEffect(() => {
    if (modalOpen && !ContactUs) {
      const loadComponent = async () => {
        const DynamicComponent = await DynamicContactUs;
        setContactUs(DynamicComponent);
      };
      loadComponent();
    }
  }, [modalOpen, ContactUs]);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  }

  // Function to close the modal when clicking outside of it
  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  }

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".popUpButton-div",
      start: "top top",
      end: "bottom top-=20%",
      scrub: true,
      ease: "power1.out"
    }
  });

  tl.fromTo("#popUpButton", {
      opacity: 0,
      y: -100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 2,
  });
});

  return (
    <>

    {/* Your HTML content here */}
    <div className='popUpButton-div'>
    <button 
      aria-label='open popup form'
      id="popUpButton" 
      onClick={openModal}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Image 
        data-cursor-size='80px'
        data-cursor-exclusion
        width={100}
        height={100}
        className='popUpRotate'
        alt='PopUp Form HireUs Image'
        title='PopUp Form HireUs Image'
        src="/assets/icons/hire-us.svg"
        priority={false}
      />
      <Image 
        height={50}
        width={50}
        title="PopUp Form Pen Image"
        alt="PopUp Form Pen Image" className='popUpImg'
        src={isHovered ? '/assets/icons/form-pen.gif' : '/assets/icons/form-pen.png'}
        priority={false}
      />
    </button>
    </div>
    {/* Modal */}
    <div
      id="PopUpMyModal"
      className={`PopUpmodal ${modalOpen ? 'form-visible' : ''}`}
    >
    <div className='PopUpContainer' onClick={handleOutsideClick}>
    <div className="PopUpmodal-content">
        {/* Your modal content here */}
        <div 
          data-cursor-size="60px"
          data-cursor-exclusion>
          <button
            aria-label='close popup form'
            onClick={closeModal}
            className="PopUpClose">
            <Image
              height={50}
              width={50} 
              priority={false} 
              title='Close Form'
              alt='close form' 
              src='/assets/icons/form-close.svg' 
            />
          </button>
        </div>
        {ContactUs && <ContactUs />}
        {/* <ContactUs /> */}
      </div>
    </div>
    </div>
    </>
  );
}